"use strict";
cc._RF.push(module, 'f73c56FnmVJYpv47A7O8GFZ', 'GameUI');
// game/scripts/UI/Item/GameUI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var Tools_1 = require("../../../../frame/scripts/Utils/Tools");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg_1 = null;
        _this.bg_2 = null;
        _this.num_panel = null;
        _this.num_prefab = null;
        _this.btn_rotate = null;
        _this.yanwu = null;
        _this.men = null;
        _this.kou = null;
        _this.bg_1_scale = 4.33;
        _this.bg_1_end_pos = cc.v3(-125.417, -16);
        return _this;
    }
    GameUI.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_REPLAY, this.handleEnterGame, this);
    };
    GameUI.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_REPLAY, this.handleEnterGame, this);
    };
    GameUI.prototype.handleEnterGame = function () {
        var _this = this;
        SoundManager_1.SoundManager.stopAllEffect();
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
        this.scheduleOnce(function () {
            _this.startAni();
        }, 0.5);
        this.handleShowNum();
    };
    GameUI.prototype.resetUI = function () {
        var _this = this;
        SoundManager_1.SoundManager.stopAllEffect();
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
        this.scheduleOnce(function () {
            _this.startAni();
        }, 0.5);
        this.handleShowNum();
    };
    GameUI.prototype.startAni = function () {
        var _this = this;
        cc.tween(this.bg_1).to(1.5, { scale: this.bg_1_scale, position: this.bg_1_end_pos }).call(function () {
            _this.bg_1.active = false;
            _this.bg_2.active = true;
        }).start();
    };
    GameUI.prototype.onClickNum = function (data) {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.num.length >= 24) {
            UIHelp_1.UIHelp.showTip('最多只能输入24位数哦！');
            return;
        }
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.num = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.num + data.target.name;
        console.log('onClickNum', SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.num);
        this.handleShowNum();
    };
    GameUI.prototype.handleShowNum = function () {
        this.num_panel.removeAllChildren();
        this.num_panel.destroyAllChildren();
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.num.length; i++) {
            var num = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.num[i];
            var node = cc.instantiate(this.num_prefab);
            node.getChildByName('lbl').getComponent(cc.Label).string = num;
            this.num_panel.addChild(node);
        }
    };
    GameUI.prototype.onClickDel = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        //删除最后一位
        var num = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.num;
        if (num.length > 0) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.num = num.substring(0, num.length - 1);
        }
        this.handleShowNum();
        console.log('onClickDel', SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.num);
    };
    GameUI.prototype.onClickReset = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.num = '';
        this.handleShowNum();
        console.log('onClickDel', SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.num);
    };
    GameUI.prototype.onClickRotateBtn = function () {
        UIHelp_1.UIHelp.showMask();
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        this.checkAnswer();
    };
    //判断对错
    GameUI.prototype.checkAnswer = function () {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.num == EditorManager_1.EditorManager.editorData.mima) {
            this.handleRight();
        }
        else {
            this.handleWrong();
        }
    };
    GameUI.prototype.handleRight = function () {
        var _this = this;
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, true);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["保险箱开锁"], false, false, false);
        cc.tween(this.btn_rotate.getChildByName("img_suo")).to(0.5, { angle: -90 }).call(function () {
            _this.yanwu.node.active = true;
            SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["烟雾音效"], false, false, false);
            Tools_1.Tools.playSpine(_this.yanwu, 'yanwu', true);
            _this.scheduleOnce(function () {
                SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["烟雾音效"]);
                _this.yanwu.node.active = false;
                _this.kou.active = false;
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["保险箱开柜音"], false, false, false);
                cc.tween(_this.men).to(3, { x: -1800 }).call(function () {
                    ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
                }).start();
            }, 2);
        }).start();
    };
    GameUI.prototype.handleWrong = function () {
        var _this = this;
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, false);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["保险箱开锁"], false, false, false);
        cc.tween(this.btn_rotate.getChildByName("img_suo")).to(0.3, { angle: -90 }).call(function () {
            SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["保险箱开锁"]);
            SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["错误音效"], false, false, false);
            cc.tween(_this.btn_rotate.getChildByName("img_suo")).to(0.3, { angle: 0 }).call(function () {
            }).start();
        }).start();
        for (var i = 0; i < this.num_panel.childrenCount; i++) {
            if (i > EditorManager_1.EditorManager.editorData.mima.length) {
                var wrong_hl = this.num_panel.children[i].getChildByName("wrong_hl");
                wrong_hl.active = true;
                cc.tween(wrong_hl).to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .union().repeat(2).start();
            }
            else if (this.num_panel.children[i].getChildByName("lbl").getComponent(cc.Label).string != EditorManager_1.EditorManager.editorData.mima[i]) {
                var wrong_hl = this.num_panel.children[i].getChildByName("wrong_hl");
                wrong_hl.active = true;
                cc.tween(wrong_hl).to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .union().repeat(2).start();
            }
        }
        this.scheduleOnce(function () {
            UIHelp_1.UIHelp.closeMask();
        }, 2);
    };
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "bg_1", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "bg_2", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "num_panel", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameUI.prototype, "num_prefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "btn_rotate", void 0);
    __decorate([
        property(sp.Skeleton)
    ], GameUI.prototype, "yanwu", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "men", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "kou", void 0);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

cc._RF.pop();