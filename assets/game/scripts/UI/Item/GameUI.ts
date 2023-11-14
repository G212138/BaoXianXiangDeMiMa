import { NetWork } from "../../../../frame/scripts/Http/NetWork";
import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { T2M } from "../../../../frame/scripts/SDK/T2M";
import { Tools } from "../../../../frame/scripts/Utils/Tools";
import { UIHelp } from "../../../../frame/scripts/Utils/UIHelp";
import { EventType } from "../../Data/EventType";
import { EditorManager } from "../../Manager/EditorManager";
import { SoundConfig } from "./SoundConfig";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameUI extends cc.Component {
    @property(cc.Node)
    private bg_1: cc.Node = null;
    @property(cc.Node)
    private bg_2: cc.Node = null;
    @property(cc.Node)
    private num_panel: cc.Node = null;
    @property(cc.Prefab)
    private num_prefab: cc.Prefab = null;
    @property(cc.Node)
    private btn_rotate: cc.Node = null;
    @property(sp.Skeleton)
    private yanwu: sp.Skeleton = null;
    @property(cc.Node)
    private men: cc.Node = null;
    @property(cc.Node)
    private kou: cc.Node = null;

    private bg_1_scale: number = 4.33;
    private bg_1_end_pos: cc.Vec3 = cc.v3(-125.417, -16);
    onLoad() {
        ListenerManager.on(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.on(EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager.on(EventType.GAME_REPLAY, this.handleEnterGame, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.off(EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager.off(EventType.GAME_REPLAY, this.handleEnterGame, this);
    }

    private handleEnterGame() {
        SoundManager.stopAllEffect();
        this.node.stopAllActions();
        cc.Tween.stopAllByTarget(this.btn_rotate.getChildByName("img_suo"));
        cc.Tween.stopAllByTarget(this.men);        
        this.btn_rotate.getChildByName("img_suo").angle = 0;
        this.yanwu.node.active = false;
        this.bg_1.scale = 1;
        this.bg_1.active = true;
        this.bg_2.active = false;
        this.men.x = 0;
        this.kou.active = true;
        this.scheduleOnce(() => {
            this.startAni();
        }, 0.5);
        this.handleShowNum();
    }

    private resetUI() {
        SoundManager.stopAllEffect();
        this.node.stopAllActions();
        cc.Tween.stopAllByTarget(this.btn_rotate.getChildByName("img_suo"));
        cc.Tween.stopAllByTarget(this.men);        
        this.btn_rotate.getChildByName("img_suo").angle = 0;
        this.yanwu.node.active = false;
        this.bg_2.active = false;
        this.bg_1.scale = 1;
        this.bg_1.active = true;
        this.men.x = 0;
        this.kou.active = true;
        this.scheduleOnce(() => {
            this.startAni();
        }, 0.5);
        this.handleShowNum();
    }

    private startAni() {
        cc.tween(this.bg_1).to(1.5, { scale: this.bg_1_scale, position: this.bg_1_end_pos }).call(() => {
            this.bg_1.active = false;
            this.bg_2.active = true;
        }).start();
    }

    private onClickNum(data) {
        if (SyncDataManager.getSyncData().customSyncData.num.length >= 24) {
            UIHelp.showTip('最多只能输入24位数哦！');
            return;
        }
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        SyncDataManager.getSyncData().customSyncData.num = SyncDataManager.getSyncData().customSyncData.num + data.target.name;
        console.log('onClickNum', SyncDataManager.getSyncData().customSyncData.num);
        this.handleShowNum();
    }

    private handleShowNum() {
        this.num_panel.removeAllChildren();
        this.num_panel.destroyAllChildren();
        for (let i = 0; i < SyncDataManager.getSyncData().customSyncData.num.length; i++) {
            let num = SyncDataManager.getSyncData().customSyncData.num[i];
            let node = cc.instantiate(this.num_prefab);
            node.getChildByName('lbl').getComponent(cc.Label).string = num;
            this.num_panel.addChild(node);
        }
    }

    private onClickDel() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        //删除最后一位
        let num = SyncDataManager.getSyncData().customSyncData.num;
        if (num.length > 0) {
            SyncDataManager.getSyncData().customSyncData.num = num.substring(0, num.length - 1);
        }
        this.handleShowNum();
        console.log('onClickDel', SyncDataManager.getSyncData().customSyncData.num);
    }

    private onClickReset() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        SyncDataManager.getSyncData().customSyncData.num = '';
        this.handleShowNum();
        console.log('onClickDel', SyncDataManager.getSyncData().customSyncData.num);
    }

    private onClickRotateBtn() {
        UIHelp.showMask();
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);        
        this.checkAnswer()
    }

    //判断对错
    private checkAnswer() {
        if(SyncDataManager.getSyncData().customSyncData.num == EditorManager.editorData.mima){
            this.handleRight();
        } else {
            this.handleWrong();
        }
    }

    private handleRight() {
        ListenerManager.dispatch(EventType.SUBMIT, true);
        SoundManager.playEffect(SoundConfig.soudlist["保险箱开锁"], false, false, false);        
        cc.tween(this.btn_rotate.getChildByName("img_suo")).to(0.5, { angle: -90 }).call(() => {
            this.yanwu.node.active = true;
            SoundManager.playEffect(SoundConfig.soudlist["烟雾音效"], false, false, false);
            Tools.playSpine(this.yanwu, 'yanwu', true);
            this.scheduleOnce(() => {
                SoundManager.stopSoundByName(SoundConfig.soudlist["烟雾音效"]);
                this.yanwu.node.active = false;
                this.kou.active = false;
                SoundManager.playEffect(SoundConfig.soudlist["保险箱开柜音"], false, false, false);
                cc.tween(this.men).to(3, { x: -1800 }).call(() => {
                    ListenerManager.dispatch(EventType.GAME_OVER);
                }).start();
            }, 2);
        }).start();
    }

    private handleWrong() {
        ListenerManager.dispatch(EventType.SUBMIT, false);
        SoundManager.playEffect(SoundConfig.soudlist["保险箱开锁"], false, false, false);        
        cc.tween(this.btn_rotate.getChildByName("img_suo")).to(0.3, { angle: -90 }).call(() => {
            SoundManager.stopSoundByName(SoundConfig.soudlist["保险箱开锁"]);
            SoundManager.playEffect(SoundConfig.soudlist["错误音效"], false, false, false);        
            cc.tween(this.btn_rotate.getChildByName("img_suo")).to(0.3, { angle: 0 }).call(() => {
                
            }).start();
        }).start();
        for (let i = 0 ; i < this.num_panel.childrenCount; i++) {
            if (i > EditorManager.editorData.mima.length) {
                let wrong_hl = this.num_panel.children[i].getChildByName("wrong_hl");
                wrong_hl.active = true;
                cc.tween(wrong_hl).to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                .union().repeat(2).start();
            }else if (this.num_panel.children[i].getChildByName("lbl").getComponent(cc.Label).string != EditorManager.editorData.mima[i]) {
                let wrong_hl = this.num_panel.children[i].getChildByName("wrong_hl");
                wrong_hl.active = true;
                cc.tween(wrong_hl).to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                .union().repeat(2).start();
            }
        }
        this.scheduleOnce(() => {
            UIHelp.closeMask();
        }, 2);
    }

}
