import { FrameMsgType } from '../../../../frame/scripts/Data/FrameMsgType';
import { ListenerManager } from '../../../../frame/scripts/Manager/ListenerManager';
import { ReportManager } from '../../../../frame/scripts/Manager/ReportManager';
import { UIManager } from '../../../../frame/scripts/Manager/UIManager';
import BaseTeacherPanel from '../../../../frame/scripts/UI/Panel/BaseTeacherPanel';
import SubmissionPanel from '../../../../frame/scripts/UI/Panel/SubmissionPanel';
import { UIHelp } from '../../../../frame/scripts/Utils/UIHelp';
import { ConstValue } from '../../Data/ConstValue';
import { EditorManager } from '../../Manager/EditorManager';
import GamePanel from './GamePanel';

const { ccclass, property } = cc._decorator;

@ccclass
export default class TeacherPanel extends BaseTeacherPanel {
    public static className = 'TeacherPanel';

    @property(cc.ToggleContainer)
    private toggle_stars: cc.ToggleContainer = null;
    @property(cc.ToggleContainer)
    private toggle_replay: cc.ToggleContainer = null;
    @property(cc.ToggleContainer)
    private toggle_titleAudio: cc.ToggleContainer = null;
    @property(cc.EditBox)
    private mima_edit: cc.EditBox = null;

    private _btn_save: cc.Node = null;
    private _btn_view: cc.Node = null;

    onLoad() {
        super.onLoad();
    }

    start() {
        super.start();

        // 可编辑的游戏，不展示保存按钮
        const isEdit = EditorManager.isSupportEdit();
        if (this._btn_save) {
            this._btn_save.active = !isEdit;
        }
        // this._btn_save.active = true;
    }

    /**
     * 设置界面（这里已经拿到了网络请求数据）
     */
    setPanel() {
        super.setPanel();
        this.toggle_stars.toggleItems[EditorManager.editorData.isStarCount ? 0 : 1].isChecked = true;
        this.toggle_replay.toggleItems[EditorManager.editorData.isReplay ? 0 : 1].isChecked = true;
        this.toggle_titleAudio.toggleItems[EditorManager.editorData.isPlayTitle ? 0 : 1].isChecked = true;

        this.mima_edit.string = EditorManager.editorData.mima ? EditorManager.editorData.mima.toString() : '';
    }

    // 星级评判开关
    public onToggleStar(toggle: cc.Toggle): void {
        let index = this.toggle_stars.toggleItems.indexOf(toggle);
        EditorManager.editorData.isStarCount = 0 === index;
    }

    // 重玩开关
    public onToggleReplay(toggle: cc.Toggle): void {
        let index = this.toggle_replay.toggleItems.indexOf(toggle);
        EditorManager.editorData.isReplay = 0 === index;
    }

    // 自动播放题干语音开关
    public onToggleTitleAudio(toggle: cc.Toggle): void {
        let index = this.toggle_titleAudio.toggleItems.indexOf(toggle);
        EditorManager.editorData.isPlayTitle = 0 === index;
    }

    // 保存课件按钮
    public onBtnSaveClicked() {
        const isEdit = EditorManager.isSupportEdit();
        if (!isEdit || ReportManager.isAllOver) {
            UIHelp.showSubmissionPanel();
        } else {
            UIHelp.showTip('请先完成一遍题目');
        }
    }
    // 预览课件按钮
    public onBtnViewClicked() {
        if (EditorManager.editorData.mima.length == 0) {
            UIHelp.showTip("请输入密码");
            return;
        }
        if (
            -1 === EditorManager.getCoursewareLevel() ||
            null === EditorManager.getCoursewareLevel() ||
            void 0 === EditorManager.getCoursewareLevel()
        ) {
            UIHelp.showTip('请先设置coursewareLevel');
        } else {
            ListenerManager.dispatch(FrameMsgType.TEACHER_PANEL_LOADING, true);
            UIManager.showUI(GamePanel);
        }
    }

    onHandleMimaChanged() {
        if (this.mima_edit.string.length >= 24) {
            UIHelp.showTip("最多输入24个数字哦！");
        }
        EditorManager.editorData.mima = this.mima_edit.string;
    }

    onHanleMimaEnd() {
        EditorManager.editorData.mima = this.mima_edit.string;
    }

}
