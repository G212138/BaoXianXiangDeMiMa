"use strict";
cc._RF.push(module, 'b2ee0BC2l1Pp47nuM279OIO', 'ConstValue');
// game/scripts/Data/ConstValue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstValue = void 0;
var ConstValue = /** @class */ (function () {
    function ConstValue() {
    }
    ConstValue.IS_EDITIONS = true; //是否为发布版本，用于数据上报 及 log输出控制
    ConstValue.IS_TEACHER = true; //是否为教师端版本
    ConstValue.CoursewareKey = 'DanXuanMoBan_7ns2Eh3K6s2NB8'; //每个课件唯一的key 工程名+14位随机字符串。（脚本创建工程时自动生成）
    ConstValue.GameName = '2023_小高寒_单选题模板'; //游戏名中文描述，用于数据上报  （脚本创建工程时输入）
    ConstValue.Subject = 1; //学科（1理科 2语文 3英语）
    ConstValue.defaultLevelData = [
        {
            questionText: "找到蘑菇",
            questionPic: "bg-chuang",
            opinion: 3,
            answer: 3,
            opinionText1: "基础性",
            opinionPic1: "1",
            opinionText2: "整体性",
            opinionPic2: "2",
            opinionText3: "浅显性",
            opinionPic3: "3",
            opinionText4: "生活性",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
        {
            questionText: "以下哪位是唐朝诗人?",
            questionPic: "",
            opinion: 4,
            answer: 4,
            opinionText1: "屈原",
            opinionPic1: "",
            opinionText2: "李伯",
            opinionPic2: "",
            opinionText3: "唐国强",
            opinionPic3: "",
            opinionText4: "骆宾王",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
        {
            questionText: "在课堂里学习30秒,就等于在现实中过了半分钟。",
            questionPic: "",
            opinion: 2,
            answer: 2,
            opinionText1: "错",
            opinionPic1: "",
            opinionText2: "对",
            opinionPic2: "",
            opinionText3: "",
            opinionPic3: "",
            opinionText4: "",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
        {
            questionText: "30以内的指数加上2，还是质数的有（   ）个？",
            questionPic: "",
            opinion: 4,
            answer: 2,
            opinionText1: "4",
            opinionPic1: "",
            opinionText2: "5",
            opinionPic2: "",
            opinionText3: "6",
            opinionPic3: "",
            opinionText4: "7",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
        {
            questionText: "在组织幼儿认识形状时,李老师说:“请小朋友找找教室里有圆形和正方形的物品。”李老师的做法体现了幼儿教育特点的(   )",
            questionPic: "",
            opinion: 4,
            answer: 4,
            opinionText1: "基础性",
            opinionPic1: "",
            opinionText2: "整体性",
            opinionPic2: "",
            opinionText3: "浅显性",
            opinionPic3: "",
            opinionText4: "生活性",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
        {
            questionText: "找到电脑",
            questionPic: "",
            opinion: 3,
            answer: 1,
            opinionText1: "基础性",
            opinionPic1: "img_diannao",
            opinionText2: "整体性",
            opinionPic2: "img_xiangpi",
            opinionText3: "浅显性",
            opinionPic3: "img_fangdaijing",
            opinionText4: "生活性",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
    ];
    return ConstValue;
}());
exports.ConstValue = ConstValue;

cc._RF.pop();