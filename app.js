const ROLE_ORDER = [
  "MOU", "Tintin", "Ma-Kui", "le-fu", "PEP", "8-PE", "Z-LATAN",
  "GOAT", "DAT-A", "WAN-SUI", "cctv-he", "Bot-tle", "LAO-8",
  "CN-12", "FAN-ZY", "BURGER", "MA-DING", "STAY-H", "TUI-Q", "HEI-HEI",
  "NEY-MAR", "TEN-GOD", "1100", "CARD-MA",
  "LEGEND", "ZI-DANE", "DINHO"
];

const ROLES = {
  "MOU":   { code: "MOU",   title: "狂人",     group: "看球反应组", tag: "嘴上骂裁判手上砸遥控器",     shortLabel: "情绪来得快去得也快，骂完三分钟又在群里发哈哈哈哈", quote: "我就是特殊的那个", image: "./images_new/rage.png" },
  "Tintin":    { code: "Tintin",    title: "丁丁",   group: "看球反应组", tag: "全场最安静但脑子里在跑弹幕",   shortLabel: "不说话不代表没想法，赛后能给你复盘每个细节", quote: "Let Me Talk", image: "./images_new/npc.png" },
  "Ma-Kui":   { code: "Ma-Kui",   title: "航母",     group: "看球反应组", tag: "落后三球还在发还有机会",       shortLabel: "逆风局的精神支柱（自封的），被骂也不改", quote: "图赫尔是个外行", image: "./images_new/tank.png" },
  "le-fu":   { code: "le-fu",   title: "勒夫",   group: "看球反应组", tag: "等一个进球等到花都谢了",       shortLabel: "全场就等那一脚，进了一起飞没进原地去世", quote: "韩国可以拿下，晋级不成问题", image: "./images_new/wait.png" },
  "PEP":  { code: "PEP",  title: "瓜帅",   group: "看球反应组", tag: "看球时自动脑补战术板",         shortLabel: "这个球应该分边是他的口头禅，看球像在下棋", quote: "Nobody Talk!", image: "./images_new/chess.png" },
  "8-PE":   { code: "8-PE",   title: "姆总",   group: "看球反应组", tag: "边路一过人他就站起来",         shortLabel: "看球时坐不住，进球会从沙发上弹起来", quote: "这是我的时代？", image: "./images_new/run.png" },
  "Z-LATAN": { code: "Z-LATAN", title: "奉先",   group: "看球反应组", tag: "比赛可以输但花活不能少",       shortLabel: "0-4落后还在等一个倒钩，觉得足球是艺术不是战争", quote: "世界上只有两种人：兹拉坦和其他人", image: "./images_new/z-latan.png" },
  "GOAT":   { code: "GOAT",   title: "山羊",     group: "赛后话题组", tag: "聊着聊着就开始排历史前十",     shortLabel: "任何话题都能拐到那两位呢，永恒辩论发起者", quote: "永恒的辩题", image: "./images_new/goat_2.png", imageAlt: "./images_new/goat.png", imageAltChance: 0.15 },
  "DAT-A":     { code: "DAT-A",     title: "詹指",   group: "赛后话题组", tag: "赛后第一件事打开MatchMate看数据", shortLabel: "用MatchMate的评分说服你那个进球其实是运气", quote: "这个数据很有意思", image: "./images_new/xg.png" },
  "WAN-SUI": { code: "WAN-SUI", title: "健翔",   group: "赛后话题组", tag: "你再看一遍这个球",             shortLabel: "喜欢反复看关键画面，能从一个犯规里看出三层含义", quote: "意大利万岁！", image: "./images_new/replay.png" },
  "cctv-he":   { code: "cctv-he",   title: "贺·罗纳尔多·炜",   group: "赛后话题组", tag: "聊球自动附赠球员生平",         shortLabel: "你知道他当年在乌迪内斯的时候能把任何球员聊成传记", quote: "足球就是足球", image: "./images_new/lore.png" },
  "Bot-tle":   { code: "Bot-tle",   title: "瓶子哥",     group: "赛后话题组", tag: "比赛还没结束梗图已经做好了",   shortLabel: "看球不是为了看球，是为了第一时间截到能发群的表情包", quote: "我就是我", image: "./images_new/meme.png" },
  "LAO-8":   { code: "LAO-8",   title: "李老八",   group: "赛后话题组", tag: "赛后能聊到凌晨三点",           shortLabel: "别人说睡了他还能再发二十条语音，看球是社交不是运动", quote: "我跟你说啊", image: "./images_new/yapp.png" },
  "CN-12":   { code: "CN-12",   title: "第12人",   group: "搭子风格组", tag: "一个人就是一支啦啦队",         shortLabel: "和他看球永远不会冷场，进球时比球员还激动", quote: "下一场一定赢", image: "./images_new/hype.png" },
  "FAN-ZY":   { code: "FAN-ZY",   title: "范将军",   group: "搭子风格组", tag: "输了赢了都骂",                 shortLabel: "嘴上永远不满意，但每场都不落，是最忠实的黑粉", quote: "脸都不要了", image: "./images_new/salt.png" },
  "BURGER":   { code: "BURGER",   title: "汉堡王",   group: "搭子风格组", tag: "对对对你说得对",               shortLabel: "擅长附和，让每个人都觉得自己说得有道理", quote: "大家都很好", image: "./images_new/ojbk.png" },
  "MA-DING":  { code: "MA-DING",  title: "大马丁",     group: "搭子风格组", tag: "该说的难听话一句不少",         shortLabel: "不怕得罪人，觉得真话比好话有用，骂球员从不手软", quote: "真话不好听", image: "./images_new/roast.png" },
  "STAY-H": { code: "STAY-H", title: "哈宝",   group: "搭子风格组", tag: "进了球也不庆祝，发个STAY HUMBLE就完事", shortLabel: "进球后比谁都平静，但赛后默默把数据截图发群里", quote: "STAY HUMBLE", image: "./images_new/humbl-e.png" },
  "TUI-Q":    { code: "TUI-Q",    title: "退钱哥",   group: "搭子风格组", tag: "输了一起骂赢了一起吹",         shortLabel: "情绪价值拉满的看球搭子，你需要什么他就给什么", quote: "我xxx，退钱！", image: "./images_new/wl.png" },
  "HEI-HEI":  { code: "HEI-HEI",  title: "张嘿嘿",     group: "搭子风格组", tag: "你讲他接你冷他暖",             shortLabel: "永远知道什么时候该接梗什么时候该捧场，气氛永远到位", quote: "嘿嘿", image: "./images_new/tsukk.png" },
  "NEY-MAR":  { code: "NEY-MAR",  title: "内马尔", group: "足球哲学组", tag: "宁可输也不能踢得丑",           shortLabel: "对丑陋赢球的容忍度为零，看球审美至上", quote: "足球是艺术", image: "./images_new/beaut.png" },
  "TEN-GOD":      { code: "TEN-GOD",      title: "滕圣",   group: "足球哲学组", tag: "能赢就行要什么自行车",         shortLabel: "结果导向，过程不重要，3分到手就是好球", quote: "我们踢得不错", image: "./images_new/w.png" },
  "1100":   { code: "1100",   displayCode: "1100(宋)",   title: "高俅",   group: "足球哲学组", tag: "以前的足球才叫足球",           shortLabel: "觉得现在什么都差点意思，聊球必提以前", quote: "我刚开始看足球的那个时候...", image: "./images_new/1100.png" },
  "CARD-MA":    { code: "CARD-MA",    title: "卡牌大师",   group: "足球哲学组", tag: "争议第一反应翻规则手册",       shortLabel: "看VAR比看进球认真，觉得公平是足球的底线", quote: "规则就是规则", image: "./images_new/var.png" },
  "LEGEND": { code: "LEGEND", title: "传奇",     group: "特殊人格",   tag: "被时间封印的名字",             shortLabel: "总能在老比赛里找到新东西，聊球自带历史纵深", quote: "足球之神有两个名字", image: "./images_new/legend.png" },
  "ZI-DANE":  { code: "ZI-DANE",  title: "齐祖",     group: "特殊人格",   tag: "越乱越来劲",                   shortLabel: "别人看球怕意外，他看球就盼意外", quote: "Why Always Me", image: "./images_new/chaos.png" },
  "DINHO":  { code: "DINHO",  title: "小罗",     group: "特殊人格",   tag: "稳定之外也要留给传奇空间",     shortLabel: "正经分析他也会，但他更愿意等那个不可能的瞬间", quote: "规则是用来打破的", image: "./images_new/scorp.png" }
};

const DIMENSION_META = {
  E: "上头指数",
  R: "战术脑",
  S: "群聊活跃度",
  N: "戏精程度",
  V: "赌狗倾向",
  G: "跟风系数"
};

DIMENSION_META.R = "\u6218\u672f\u753b\u677f";
DIMENSION_META.S = "\u7fa4\u804a\u6d3b\u8dc3";
DIMENSION_META.V = "\u6295\u673a\u5fc3\u6001";

function option(label, text, primary, secondary, dimensions) {
  return { label, text, primary, secondary, dimensions };
}

const QUESTIONS = [
  {
    id: "Q1",
    sourceNumber: 1,
    stage: 1,
    part: "",
    title: "2022卡塔尔世界杯决赛，阿根廷被法国97秒连扳两球追平，你的第一反应？",
    options: [
      option("A", "直接站起来骂出声，差点把手机摔了", ["MOU", "CN-12"], ["Bot-tle", "8-PE"], { E: 2, V: 1 }),
      option("B", "心里一沉，但没说什么，默默继续看", ["Tintin", "Ma-Kui"], ["BURGER", "PEP"], { E: -1, R: 1 }),
      option("C", "发了一条朋友圈：'我不看了'，但其实还在看", ["FAN-ZY", "Bot-tle"], ["LAO-8", "MA-DING"], { E: 1, S: 1 }),
      option("D", "虽然难受，但已经开始想'这场决赛可以聊一辈子'", ["LAO-8", "cctv-he"], ["GOAT", "TUI-Q"], { N: 2, S: 1 })
    ]
  },
  {
    id: "Q2",
    sourceNumber: 2,
    stage: 1,
    part: "",
    title: "世界杯上看到一个让你激动的进球，你通常怎么表达？",
    options: [
      option("A", "大喊一声，不管旁边有没有人", ["CN-12", "8-PE"], ["MOU", "Z-LATAN"], { E: 2, G: 1 }),
      option("B", "心里很激动，但表面不动声色", ["Tintin", "BURGER"], ["Ma-Kui", "PEP"], { E: -1, R: 1 }),
      option("C", "马上发群里：'快看这个球！'", ["TUI-Q", "STAY-H"], ["LAO-8", "HEI-HEI"], { S: 2, E: 1 }),
      option("D", "默默倒回去再看一遍", ["WAN-SUI", "DAT-A"], ["PEP", "Tintin"], { R: 2, S: -1 })
    ]
  },
  {
    id: "Q3",
    sourceNumber: 3,
    stage: 1,
    part: "",
    title: "看世界杯比赛时，你更关注什么？",
    options: [
      option("A", "谁进了球，比分多少就行", ["TEN-GOD", "le-fu"], ["Ma-Kui", "BURGER"], { R: 1, N: -1 }),
      option("B", "球队的整体打法和配合", ["CARD-MA", "DAT-A"], ["WAN-SUI", "cctv-he"], { R: 2, N: 1 }),
      option("C", "精彩的个人技术和过人", ["Z-LATAN", "NEY-MAR"], ["8-PE", "DINHO"], { N: 2, V: 1 }),
      option("D", "场上的气氛和球员的情绪", ["CN-12", "MOU"], ["Bot-tle", "TUI-Q"], { E: 2, G: 1 })
    ]
  },
  {
    id: "Q4",
    sourceNumber: 4,
    stage: 1,
    part: "",
    title: "2022卡塔尔世界杯巴西被克罗地亚淘汰出局，赛后你更想聊什么？",
    options: [
      option("A", "'巴西到底输在哪？'", ["PEP", "DAT-A"], ["MA-DING", "CARD-MA"], { R: 2, G: 1 }),
      option("B", "'内马尔那个进球我以为稳了啊'", ["WAN-SUI", "MA-DING"], ["le-fu", "FAN-ZY"], { N: 2, E: 1 }),
      option("C", "点球大战太刺激了", ["Z-LATAN", "MOU"], ["CN-12", "Bot-tle"], { V: 2, E: 1 }),
      option("D", "巴西又要等下一届了，四年真快", ["cctv-he", "1100"], ["LEGEND", "STAY-H"], { N: 2, R: 1 })
    ]
  },
  {
    id: "Q5",
    sourceNumber: 5,
    stage: 1,
    part: "",
    title: "世界杯期间你更喜欢怎么看球？",
    options: [
      option("A", "一个人安静看，不想被打扰", ["Tintin", "BURGER"], ["WAN-SUI", "DAT-A"], { S: -1, R: 1 }),
      option("B", "约几个朋友一起看，边看边聊", ["CN-12", "TUI-Q"], ["HEI-HEI", "Ma-Kui"], { S: 1, E: 1 }),
      option("C", "去球迷广场的大屏前，和陌生人一起喊", ["8-PE", "MOU"], ["ZI-DANE", "Z-LATAN"], { E: 2, V: 1 }),
      option("D", "群里一起刷屏，消息比球赛还热闹", ["LAO-8", "Bot-tle"], ["FAN-ZY", "STAY-H"], { S: 2, G: 1 })
    ]
  },
  {
    id: "Q6",
    sourceNumber: 6,
    stage: 1,
    part: "",
    title: "2022卡塔尔世界杯梅西夺冠后，你第一件事做什么？",
    options: [
      option("A", "自己消化一下，发个朋友圈", ["Tintin", "Ma-Kui"], ["BURGER", "NEY-MAR"], { S: -1, N: 1 }),
      option("B", "打开群聊开聊，消息已经99+了", ["LAO-8", "TUI-Q"], ["CN-12", "FAN-ZY"], { S: 2, E: 1 }),
      option("C", "去MatchMate上看梅西的决赛评分", ["DAT-A", "WAN-SUI"], ["PEP", "CARD-MA"], { R: 2, S: -1 }),
      option("D", "给朋友安利'你必须看这场回放'", ["STAY-H", "HEI-HEI"], ["cctv-he", "TEN-GOD"], { S: 1, N: 1 })
    ]
  },
  {
    id: "Q7",
    sourceNumber: 7,
    stage: 1,
    part: "",
    title: "以下哪个世界杯瞬间最让你有代入感？",
    options: [
      option("A", "弱队爆冷赢球，赛后全国放假庆祝", ["TEN-GOD", "GOAT"], ["cctv-he", "1100"], { N: 2, G: 1 }),
      option("B", "加时赛最后一分钟绝杀晋级", ["le-fu", "MOU"], ["CN-12", "Z-LATAN"], { V: 2, N: 1 }),
      option("C", "年轻球员一战成名，身价暴涨", ["STAY-H", "FAN-ZY"], ["8-PE", "Bot-tle"], { N: 1, E: 1 }),
      option("D", "传奇球星最后一届世界杯的告别", ["1100", "cctv-he"], ["NEY-MAR", "TUI-Q"], { N: 2, V: -1 })
    ]
  },
  {
    id: "Q8",
    sourceNumber: 8,
    stage: 1,
    part: "",
    title: "你觉得世界杯最大的魅力是什么？",
    options: [
      option("A", "四年一次的仪式感，错过要再等四年", ["1100", "cctv-he"], ["TEN-GOD", "NEY-MAR"], { N: 2, R: 1 }),
      option("B", "什么都可能发生，强队也可能翻车", ["le-fu", "Ma-Kui"], ["Z-LATAN", "MOU"], { V: 2, N: 1 }),
      option("C", "全世界的人都在看同一件事", ["CN-12", "STAY-H"], ["LAO-8", "TUI-Q"], { S: 2, G: 1 }),
      option("D", "能见证历史性的时刻", ["GOAT", "TUI-Q"], ["1100", "WAN-SUI"], { N: 2, R: 1 })
    ]
  },
  {
    id: "Q9",
    sourceNumber: 9,
    stage: 2,
    part: "",
    title: "世界杯决赛点球大战，你支持的队第三个罚，之前已经罚丢一个，你怎么想？",
    options: [
      option("A", "稳稳罚进就行，别玩花的", ["NEY-MAR", "PEP"], ["BURGER", "TEN-GOD"], { V: -1, R: 1 }),
      option("B", "越紧张越刺激，来吧", ["MOU", "DINHO"], ["Z-LATAN", "Bot-tle"], { V: 2, E: 1 }),
      option("C", "紧张到不敢看，但又想看", ["le-fu", "Bot-tle"], ["CN-12", "LAO-8"], { V: 1, E: 1 }),
      option("D", "先看对方门将的站位再判断", ["Tintin", "DAT-A"], ["PEP", "WAN-SUI"], { R: 2, V: -1 })
    ]
  },
  {
    id: "Q10",
    sourceNumber: 10,
    stage: 2,
    part: "",
    title: "世界杯淘汰赛你支持的队落后一球，教练换上三个前锋搏命，你觉得？",
    options: [
      option("A", "太冒险了，先稳住再说", ["Ma-Kui", "PEP"], ["BURGER", "DAT-A"], { V: -1, R: 2 }),
      option("B", "必须搏，不搏没机会", ["8-PE", "BURGER"], ["MOU", "CN-12"], { V: 2, E: 1 }),
      option("C", "看看效果，不行再调整", ["CARD-MA", "MA-DING"], ["Ma-Kui", "TEN-GOD"], { R: 1, V: -1 }),
      option("D", "管他呢，反正好看就行", ["Z-LATAN", "NEY-MAR"], ["Bot-tle", "DINHO"], { V: 1, N: 1 })
    ]
  },
  {
    id: "Q11",
    sourceNumber: 11,
    stage: 2,
    part: "",
    title: "世界杯某场比赛后，全网都在吹一支球队，但你没那么看好，你会？",
    options: [
      option("A", "说出来，'别光看结果，他们踢得没那么好'", ["MA-DING", "TUI-Q"], ["FAN-ZY", "CARD-MA"], { G: 1, E: 1 }),
      option("B", "先看看别人怎么说再决定要不要表态", ["TEN-GOD", "BURGER"], ["Ma-Kui", "PEP"], { G: -1, R: 1 }),
      option("C", "算了不说了，说了会被喷", ["Ma-Kui", "FAN-ZY"], ["le-fu", "BURGER"], { G: -1, E: 1 }),
      option("D", "换个角度说，'确实不错但别吹过头'", ["HEI-HEI", "STAY-H"], ["LAO-8", "cctv-he"], { G: 1, S: 1 })
    ]
  },
  {
    id: "Q12",
    sourceNumber: 12,
    stage: 2,
    part: "",
    title: "世界杯开赛前，朋友圈全是预测和讨论，你会？",
    options: [
      option("A", "跟着一起聊，发自己的预测", ["LAO-8", "CN-12"], ["TUI-Q", "STAY-H"], { G: 2, S: 1 }),
      option("B", "看看就好，不太参与", ["MA-DING", "BURGER"], ["Ma-Kui", "PEP"], { G: -1, S: -1 }),
      option("C", "发一篇认真的分析长文", ["CARD-MA", "DAT-A"], ["PEP", "cctv-he"], { R: 2, G: 1 }),
      option("D", "发个搞笑的梗图参与一下", ["Bot-tle", "FAN-ZY"], ["MA-DING", "HEI-HEI"], { G: 1, E: 1 })
    ]
  },
  {
    id: "Q13",
    sourceNumber: 13,
    stage: 2,
    part: "",
    title: "2026世界杯在北美三国举办，你最关心的是？",
    options: [
      option("A", "48支球队的新赛制是什么规则", ["PEP", "DAT-A"], ["CARD-MA", "cctv-he"], { R: 2, N: 1 }),
      option("B", "哪些比赛要熬夜，哪些不用", ["le-fu", "FAN-ZY"], ["Ma-Kui", "BURGER"], { R: 1, V: -1 }),
      option("C", "有哪些球星可能是最后一届", ["GOAT", "1100"], ["LEGEND", "STAY-H"], { N: 2, S: 1 }),
      option("D", "无所谓，到时候看就行", ["BURGER", "TEN-GOD"], ["Tintin", "Ma-Kui"], { R: -1, V: -1 })
    ]
  },
  {
    id: "Q14",
    sourceNumber: 14,
    stage: 2,
    part: "",
    title: "以下哪种世界杯内容最能吸引你点进去？",
    options: [
      option("A", "精彩进球集锦和比赛回顾", ["WAN-SUI", "NEY-MAR"], ["8-PE", "Z-LATAN"], { N: 2, V: 1 }),
      option("B", "争议判罚和裁判讨论", ["CARD-MA", "MA-DING"], ["MOU", "FAN-ZY"], { R: 1, G: 1 }),
      option("C", "球员八卦和场外花絮", ["HEI-HEI", "Bot-tle"], ["FAN-ZY", "LAO-8"], { S: 2, E: 1 }),
      option("D", "战术分析和数据解读", ["PEP", "DAT-A"], ["cctv-he", "Tintin"], { R: 2, N: -1 })
    ]
  },
  {
    id: "Q15",
    sourceNumber: 15,
    stage: 2,
    part: "",
    title: "如果你能去现场看一场世界杯比赛，你选？",
    options: [
      option("A", "决赛，不管谁踢都值", ["LEGEND", "CN-12"], ["GOAT", "STAY-H"], { N: 2, E: 1 }),
      option("B", "弱队打强队，等着看冷门", ["ZI-DANE", "MOU"], ["FAN-ZY", "Bot-tle"], { V: 2, N: 1 }),
      option("C", "自己国家队的比赛", ["Ma-Kui", "TUI-Q"], ["CN-12", "LAO-8"], { G: 2, E: 1 }),
      option("D", "有梅西C罗的那场", ["GOAT", "le-fu"], ["HEI-HEI", "WAN-SUI"], { N: 1, S: 1 })
    ]
  },
  {
    id: "Q16",
    sourceNumber: 16,
    stage: 2,
    part: "",
    title: "用一个词形容你理想中的看球搭子？",
    options: [
      option("A", "专业——能给我讲战术的", ["PEP", "CARD-MA"], ["WAN-SUI", "DAT-A"], { R: 2, S: -1 }),
      option("B", "搞笑——能一起玩梗的", ["Bot-tle", "LAO-8"], ["HEI-HEI", "FAN-ZY"], { S: 2, E: 1 }),
      option("C", "忠诚——输了也能陪我骂的", ["Ma-Kui", "TUI-Q"], ["FAN-ZY", "CN-12"], { G: 2, E: 1 }),
      option("D", "激情——进球时能一起跳起来的", ["CN-12", "8-PE"], ["MOU", "Z-LATAN"], { E: 2, V: 1 })
    ]
  }
];

const appState = {
  currentIndex: -1,
  answers: Array(QUESTIONS.length).fill(null)
};

const hero = document.querySelector(".hero");
const startButton = document.querySelector("#start-button");
const quizPanel = document.querySelector("#quiz-panel");
const resultPanel = document.querySelector("#result-panel");
const partLabel = document.querySelector("#part-label");
const questionIndex = document.querySelector("#question-index");
const progressText = document.querySelector("#progress-text");
const progressFill = document.querySelector("#progress-fill");
const questionText = document.querySelector("#question-text");
const optionsList = document.querySelector("#options-list");
const homeButton = document.querySelector("#home-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

const resultPhase = document.querySelector("#result-phase");
const resultPortraitShell = document.querySelector(".result-portrait-shell");
const resultPortrait = document.querySelector("#result-portrait");
const resultCode = document.querySelector("#result-code");
const resultTitle = document.querySelector("#result-title");
const resultGroup = document.querySelector("#result-group");
const resultQuote = document.querySelector("#result-quote");
const resultShortLabel = document.querySelector("#result-short-label");
const radarChart = document.querySelector("#radar-chart");
const dimensionLegend = document.querySelector("#dimension-legend");
const roleBreakdown = document.querySelector("#role-breakdown");
const resultOneliner = document.querySelector("#result-oneliner");
const resultProfile = document.querySelector("#result-profile");
const resultFocus = document.querySelector("#result-focus");
const resultNeighbors = document.querySelector("#result-neighbors");
const hiddenBadge = document.querySelector("#hidden-badge");
const saveImageButton = document.querySelector("#save-image-button");
const copyButton = document.querySelector("#copy-button");
const restartButton = document.querySelector("#restart-button");
let currentRenderedResult = null;

function hasAnswered(index) {
  return appState.answers[index] !== null;
}

function getVisibleQuestionNumber(index) {
  return index + 1;
}

function renderQuestion(index) {
  const question = QUESTIONS[index];
  const answer = appState.answers[index];
  const total = QUESTIONS.length;

  partLabel.textContent = question.part;
  partLabel.classList.toggle("hidden", !question.part);
  questionIndex.textContent = `Q${index + 1}`;
  progressText.textContent = `${Math.min(getVisibleQuestionNumber(index), total)} / ${total}`;
  progressFill.style.width = `${(getVisibleQuestionNumber(index) / total) * 100}%`;
  questionText.textContent = question.title;

  optionsList.innerHTML = "";
  question.options.forEach((item, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    if (answer === optionIndex) {
      button.classList.add("selected");
    }

    const label = document.createElement("span");
    label.className = "option-label";
    label.textContent = item.label;

    const text = document.createElement("span");
    text.className = "option-text";
    text.textContent = item.text;

    button.append(label, text);
    button.addEventListener("click", () => {
      appState.answers[index] = optionIndex;
      renderQuestion(index);
    });

    optionsList.appendChild(button);
  });

  prevButton.disabled = index === 0;
  nextButton.disabled = answer === null;
  if (index === QUESTIONS.length - 1) {
    nextButton.textContent = "查看最终结果";
  } else {
    nextButton.textContent = "下一题";
  }
}

function createEmptyScores() {
  const roleScores = {};
  const primaryHits = {};
  const dimensionTotals = { E: 0, R: 0, S: 0, N: 0, V: 0, G: 0 };

  ROLE_ORDER.forEach((code) => {
    roleScores[code] = 0;
    primaryHits[code] = 0;
  });

  return { roleScores, primaryHits, dimensionTotals };
}

function buildScoreSummary(limit) {
  const { roleScores, primaryHits, dimensionTotals } = createEmptyScores();

  QUESTIONS.slice(0, limit).forEach((question, questionIndexLocal) => {
    const answerIndex = appState.answers[questionIndexLocal];
    if (answerIndex === null) {
      return;
    }

    const selected = question.options[answerIndex];
    selected.primary.forEach((code) => {
      roleScores[code] += 2;
      primaryHits[code] += 1;
    });
    selected.secondary.forEach((code) => {
      roleScores[code] += 1;
    });
    Object.entries(selected.dimensions).forEach(([dimension, value]) => {
      dimensionTotals[dimension] += value;
    });
  });

  const rankedRoles = [...ROLE_ORDER].sort((left, right) => {
    if (roleScores[right] !== roleScores[left]) {
      return roleScores[right] - roleScores[left];
    }
    if (primaryHits[right] !== primaryHits[left]) {
      return primaryHits[right] - primaryHits[left];
    }
    return ROLE_ORDER.indexOf(left) - ROLE_ORDER.indexOf(right);
  });

  return { roleScores, primaryHits, dimensionTotals, rankedRoles };
}

function normalizeDimensionScore(total) {
  return Math.max(0, Math.min(100, 50 + total * 12));
}

function getDimensionRanking(dimensionTotals) {
  return Object.entries(dimensionTotals)
    .map(([code, value]) => ({
      code,
      name: DIMENSION_META[code],
      value: normalizeDimensionScore(value)
    }))
    .sort((left, right) => right.value - left.value);
}

function getAnswerLabel(questionId) {
  const questionIndexLocal = QUESTIONS.findIndex((question) => question.id === questionId);
  if (questionIndexLocal === -1) {
    return null;
  }
  const answerIndex = appState.answers[questionIndexLocal];
  if (answerIndex === null) {
    return null;
  }
  return QUESTIONS[questionIndexLocal].options[answerIndex].label;
}

function applyHiddenTrigger(summary, limit) {
  const topFive = summary.rankedRoles.slice(0, 5);
  const dimensions = getDimensionRanking(summary.dimensionTotals).reduce((accumulator, item) => {
    accumulator[item.code] = item.value;
    return accumulator;
  }, {});

  const hiddenCandidates = [];

  // LEGEND 传奇：进入前5 + Q15选A + N维度≥70
  if (
    topFive.includes("LEGEND") &&
    getAnswerLabel("Q15") === "A" &&
    dimensions.N >= 70
  ) {
    hiddenCandidates.push("LEGEND");
  }

  // ZI-DANE 齐祖：进入前5 + Q9选B或Q10选B + V维度≥80
  if (
    topFive.includes("ZI-DANE") &&
    (getAnswerLabel("Q9") === "B" || getAnswerLabel("Q10") === "B") &&
    dimensions.V >= 80
  ) {
    hiddenCandidates.push("ZI-DANE");
  }

  // DINHO 小罗：进入前5 + Q9选C + V维度≥75
  if (
    topFive.includes("DINHO") &&
    getAnswerLabel("Q9") === "C" &&
    dimensions.V >= 75
  ) {
    hiddenCandidates.push("DINHO");
  }

  if (hiddenCandidates.length === 0) {
    return null;
  }

  return hiddenCandidates.sort((left, right) => {
    if (summary.roleScores[right] !== summary.roleScores[left]) {
      return summary.roleScores[right] - summary.roleScores[left];
    }
    return ROLE_ORDER.indexOf(left) - ROLE_ORDER.indexOf(right);
  })[0];
}

function buildResult(limit) {
  const summary = buildScoreSummary(limit);
  const hiddenWinner = applyHiddenTrigger(summary, limit);
  const winnerCode = hiddenWinner || summary.rankedRoles[0];
  const winner = ROLES[winnerCode];

  return {
    winner,
    isHidden: winner.group === "特殊人格",
    roleScores: summary.roleScores,
    rankedRoles: summary.rankedRoles,
    dimensions: getDimensionRanking(summary.dimensionTotals)
  };
}

function buildNarrative(result) {
  const topDimensions = result.dimensions.slice(0, 3);
  const topRoles = result.rankedRoles.filter((code) => code !== result.winner.code).slice(0, 3);

  return {
    summary: `${result.winner.title}型看球搭子，核心特征是"${result.winner.tag}"。`,
    oneliner: `你更像${result.winner.title}：${result.winner.shortLabel}`,
    profile: `这类人看球时通常会优先从"${topDimensions.map((item) => item.name).join(" / ")}"进入比赛，所以你的判断和情绪落点会比较稳定地收束到"${result.winner.tag}"这一类视角。`,
    focus: topDimensions.map((item) => `${item.name}：${item.value} 分`),
    neighbors: topRoles.map((code) => `${ROLES[code].title} · ${ROLES[code].shortLabel}`)
  };
}

function buildForcedResult(code) {
  const matchedCode = Object.keys(ROLES).find((item) => item.toUpperCase() === String(code).toUpperCase());
  const winner = matchedCode ? ROLES[matchedCode] : null;
  if (!winner) {
    return null;
  }

  const rankedRoles = [winner.code, ...ROLE_ORDER.filter((item) => item !== winner.code)];
  const roleScores = {};
  ROLE_ORDER.forEach((item, index) => {
    roleScores[item] = Math.max(0, 100 - index * 3);
  });
  roleScores[winner.code] = 120;

  return {
    winner,
    isHidden: winner.group === "特殊人格",
    roleScores,
    rankedRoles,
    dimensions: [
      { code: "E", name: DIMENSION_META.E, value: 82 },
      { code: "R", name: DIMENSION_META.R, value: 76 },
      { code: "S", name: DIMENSION_META.S, value: 68 },
      { code: "N", name: DIMENSION_META.N, value: 74 },
      { code: "V", name: DIMENSION_META.V, value: 71 },
      { code: "G", name: DIMENSION_META.G, value: 66 }
    ]
  };
}

function renderBreakdown(container, rows) {
  container.innerHTML = "";
  rows.forEach((row) => {
    const wrapper = document.createElement("div");
    wrapper.className = "score-row";

    const name = document.createElement("div");
    name.className = "score-name";
    name.textContent = row.name;

    const value = document.createElement("div");
    value.className = "score-value";
    value.textContent = row.value;

    wrapper.append(name, value);
    container.appendChild(wrapper);
  });
}

function getDimensionLevel(value) {
  if (value <= 40) return { level: "L", label: "低", class: "level-low" };
  if (value <= 70) return { level: "M", label: "中", class: "level-mid" };
  return { level: "H", label: "高", class: "level-high" };
}

function getDimensionColor(value) {
  if (value <= 40) return "#9ca3af";
  if (value <= 70) return "#b8a88a";
  return "#0f5b52";
}

function renderRadarChart(container, legendContainer, dimensions) {
  const size = 360;
  const padding = 40;
  const center = size / 2;
  const maxRadius = 120;
  const levels = 3;

  const dimensionOrder = ["E", "R", "S", "N", "V", "G"];
  const angleStep = (Math.PI * 2) / dimensionOrder.length;
  const startAngle = -Math.PI / 2;

  let svg = `<svg viewBox="${-padding} ${-padding} ${size + padding * 2} ${size + padding * 2}" xmlns="http://www.w3.org/2000/svg">`;

  // Draw concentric hexagons for L/M/H zones
  for (let i = levels; i >= 1; i--) {
    const radius = (maxRadius / levels) * i;
    const points = dimensionOrder.map((_, idx) => {
      const angle = startAngle + angleStep * idx;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      return `${x},${y}`;
    }).join(" ");

    const opacity = i === 1 ? 0.15 : i === 2 ? 0.1 : 0.05;
    svg += `<polygon points="${points}" fill="rgba(15, 91, 82, ${opacity})" stroke="rgba(29, 42, 47, 0.15)" stroke-width="1"/>`;
  }

  // Draw axis lines
  dimensionOrder.forEach((_, idx) => {
    const angle = startAngle + angleStep * idx;
    const x = center + maxRadius * Math.cos(angle);
    const y = center + maxRadius * Math.sin(angle);
    svg += `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" stroke="rgba(29, 42, 47, 0.1)" stroke-width="1"/>`;
  });

  // Draw user's data polygon
  const dataPoints = dimensionOrder.map((code, idx) => {
    const dim = dimensions.find(d => d.code === code);
    const value = dim ? dim.value : 50;
    const radius = (value / 100) * maxRadius;
    const angle = startAngle + angleStep * idx;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { x, y, value };
  });

  const polygonPoints = dataPoints.map(p => `${p.x},${p.y}`).join(" ");
  svg += `<polygon points="${polygonPoints}" fill="rgba(15, 91, 82, 0.2)" stroke="#0f5b52" stroke-width="2"/>`;

  // Draw data points
  dataPoints.forEach((p, idx) => {
    const color = getDimensionColor(p.value);
    svg += `<circle cx="${p.x}" cy="${p.y}" r="5" fill="${color}" stroke="white" stroke-width="2"/>`;
  });

  // Draw labels
  dimensionOrder.forEach((code, idx) => {
    const angle = startAngle + angleStep * idx;
    const labelRadius = maxRadius + 28;
    const x = center + labelRadius * Math.cos(angle);
    const y = center + labelRadius * Math.sin(angle);

    const dim = dimensions.find(d => d.code === code);
    const name = dim ? dim.name : DIMENSION_META[code];

    const textAnchor = idx === 0 || idx === 3 ? "middle" : idx < 3 ? "start" : "end";
    const dominantBaseline = idx === 0 ? "auto" : idx === 3 ? "hanging" : "middle";

    svg += `<text x="${x}" y="${y}" text-anchor="${textAnchor}" dominant-baseline="${dominantBaseline}" font-size="13" font-weight="600" fill="#1d2a2f">${name}</text>`;
  });

  svg += `</svg>`;
  container.innerHTML = svg;

  // Render legend
  legendContainer.innerHTML = "";
  dimensionOrder.forEach((code) => {
    const dim = dimensions.find(d => d.code === code);
    if (!dim) return;

    const levelInfo = getDimensionLevel(dim.value);
    const color = getDimensionColor(dim.value);

    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `
      <div class="legend-dot" style="background: ${color}"></div>
      <div class="legend-info">
        <div class="legend-name">${dim.name}</div>
        <div class="legend-level">${levelInfo.label} · ${dim.value}分</div>
      </div>
      <div class="legend-bar">
        <div class="legend-bar-fill ${levelInfo.class}" style="width: ${dim.value}%"></div>
      </div>
    `;
    legendContainer.appendChild(item);
  });
}

function renderResult(limit, phaseLabel) {
  const result = buildResult(limit);
  applyResultToView(result, phaseLabel);
}

function applyResultToView(result, phaseLabel) {
  currentRenderedResult = result;
  const narrative = buildNarrative(result);

  resultPhase.textContent = "";
  resultPhase.classList.add("hidden");
  resultPortraitShell.dataset.roleCode = result.winner.code;
  const roleImage = result.winner.imageAlt && Math.random() < result.winner.imageAltChance
    ? result.winner.imageAlt
    : result.winner.image;
  resultPortrait.src = roleImage;
  resultPortrait.alt = `${result.winner.title} 角色图`;
  resultCode.textContent = result.winner.displayCode || result.winner.code;
  resultTitle.textContent = result.winner.title;
  resultGroup.textContent = `所属分组：${result.winner.group}`;
  resultGroup.classList.add("hidden");
  resultQuote.textContent = result.winner.quote ? `"${result.winner.quote}"` : "";
  resultShortLabel.textContent = result.winner.shortLabel;
  resultOneliner.textContent = narrative.oneliner;
  resultProfile.textContent = narrative.profile;

  hiddenBadge.classList.toggle("hidden", !result.isHidden);

  renderRadarChart(radarChart, dimensionLegend, result.dimensions);

  // 过滤掉自己的人格，只显示相近人格
  const similarRoles = result.rankedRoles
    .filter((code) => code !== result.winner.code)
    .slice(0, 5);

  renderBreakdown(
    roleBreakdown,
    similarRoles.map((code) => ({
      name: `${ROLES[code].title} · ${ROLES[code].group}`,
      value: `${result.roleScores[code]} 分`
    }))
  );

  resultFocus.innerHTML = "";
  narrative.focus.forEach((textValue) => {
    const item = document.createElement("div");
    item.className = "quote-item";
    item.textContent = textValue;
    resultFocus.appendChild(item);
  });

  resultNeighbors.innerHTML = "";
  narrative.neighbors.forEach((textValue) => {
    const item = document.createElement("span");
    item.className = "people-tag";
    item.textContent = textValue;
    resultNeighbors.appendChild(item);
  });
}

function showForcedResult(code) {
  const result = buildForcedResult(code);
  if (!result) {
    return false;
  }
  applyResultToView(result, `调试结果 · ${code}`);
  hero.classList.add("hidden");
  hideAllPanels();
  resultPanel.classList.remove("hidden");
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

function hideAllPanels() {
  quizPanel.classList.add("hidden");
  resultPanel.classList.add("hidden");
}

function showResult(limit, phaseLabel) {
  renderResult(limit, phaseLabel);
  hero.classList.add("hidden");
  hideAllPanels();
  resultPanel.classList.remove("hidden");
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetQuizState() {
  appState.currentIndex = 0;
  appState.answers = Array(QUESTIONS.length).fill(null);
}

function returnToHome() {
  resetQuizState();
  hideAllPanels();
  hero.classList.remove("hidden");
  startButton.disabled = false;
  startButton.textContent = "开始测试";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openQuizPanel() {
  startButton.disabled = true;
  startButton.textContent = "测试进行中";
  hero.classList.add("hidden");
  hideAllPanels();
  quizPanel.classList.remove("hidden");
  renderQuestion(appState.currentIndex);
  quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function startQuiz() {
  const quizInProgress = !quizPanel.classList.contains("hidden") && appState.currentIndex >= 0;
  if (quizInProgress) {
    quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  resetQuizState();
  openQuizPanel();
}

function restartQuiz() {
  returnToHome();
}

function goNext() {
  if (!hasAnswered(appState.currentIndex)) {
    return;
  }

  if (appState.currentIndex === QUESTIONS.length - 1) {
    showResult(QUESTIONS.length, "");
    return;
  }

  appState.currentIndex += 1;
  renderQuestion(appState.currentIndex);
}

function goPrev() {
  if (appState.currentIndex <= 0) {
    return;
  }
  appState.currentIndex -= 1;
  renderQuestion(appState.currentIndex);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    return false;
  }
}

function buildCopyText(limit, phaseLabel) {
  const result = buildResult(limit);
  return [
    `看球搭子人格测试`,
    `${phaseLabel}`,
    `${result.winner.code} · ${result.winner.title}`,
    `${result.winner.group} / ${result.winner.tag}`,
    `${result.winner.shortLabel}`,
    ``,
    `访问MatchMate，认识你的AI看球搭子！`,
    `https://www.matchmate.tv/`
  ].join("\n");
}

function buildCopyText(limit, phaseLabel) {
  const result = currentRenderedResult || buildResult(limit);
  const displayCode = result.winner.displayCode || result.winner.code;

  return [
    `看球搭子人格测试`,
    phaseLabel || ``,
    `你的看球搭子类型是：`,
    `${result.winner.title}`,
    `${displayCode}`,
    `${result.winner.group} / ${result.winner.tag}`,
    `${result.winner.shortLabel}`,
    result.winner.quote ? `“${result.winner.quote}”` : ``,
    ``,
    `访问MatchMate，认识你的AI看球搭子！`,
    `https://www.matchmate.tv/`
  ].filter(Boolean).join("\n");
}

function buildCopyText(limit, phaseLabel) {
  const result = currentRenderedResult || buildResult(limit);
  const displayCode = result.winner.displayCode || result.winner.code;
  const quoteLine = result.winner.quote ? `"${result.winner.quote}"` : "";

  return [
    "\u770b\u7403\u642d\u5b50\u4eba\u683c\u6d4b\u8bd5",
    phaseLabel || "",
    "\u4f60\u7684\u770b\u7403\u642d\u5b50\u7c7b\u578b\u662f\uff1a",
    result.winner.title,
    displayCode,
    `${result.winner.group} / ${result.winner.tag}`,
    result.winner.shortLabel,
    quoteLine,
    "",
    "\u8bbf\u95eeMatchMate\uff0c\u8ba4\u8bc6\u4f60\u7684AI\u770b\u7403\u642d\u5b50\uff01",
    "https://www.matchmate.tv/"
  ].filter(Boolean).join("\n");
}

function loadImageAsset(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("Canvas export returned empty blob."));
      }
    }, "image/png");
  });
}

function triggerBlobDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = filename;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function roundRectPath(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function fillRoundedRect(ctx, x, y, width, height, radius, fillStyle) {
  ctx.save();
  ctx.fillStyle = fillStyle;
  roundRectPath(ctx, x, y, width, height, radius);
  ctx.fill();
  ctx.restore();
}

function strokeRoundedRect(ctx, x, y, width, height, radius, strokeStyle, lineWidth = 1) {
  ctx.save();
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  roundRectPath(ctx, x, y, width, height, radius);
  ctx.stroke();
  ctx.restore();
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  const paragraphs = String(text || "").split("\n");
  let offsetY = y;

  paragraphs.forEach((paragraph, paragraphIndex) => {
    const chars = Array.from(paragraph || "");
    let line = "";

    if (!chars.length) {
      offsetY += lineHeight;
      return;
    }

    chars.forEach((char) => {
      const next = line + char;
      if (ctx.measureText(next).width > maxWidth && line) {
        ctx.fillText(line, x, offsetY);
        offsetY += lineHeight;
        line = char;
      } else {
        line = next;
      }
    });

    if (line) {
      ctx.fillText(line, x, offsetY);
      offsetY += lineHeight;
    }

    if (paragraphIndex < paragraphs.length - 1) {
      offsetY += Math.floor(lineHeight * 0.35);
    }
  });

  return offsetY;
}

function drawContainImage(ctx, img, x, y, width, height) {
  const scale = Math.min(width / img.width, height / img.height);
  const drawWidth = img.width * scale;
  const drawHeight = img.height * scale;
  const dx = x + (width - drawWidth) / 2;
  const dy = y + (height - drawHeight) / 2;
  ctx.drawImage(img, dx, dy, drawWidth, drawHeight);
}

function getDimensionGrade(value) {
  if (value >= 85) return "A";
  if (value >= 70) return "B";
  if (value >= 50) return "C";
  return "D";
}

function drawResultRadarToCanvas(ctx, x, y, size, dimensions) {
  const centerX = x + size / 2;
  const centerY = y + size / 2;
  const maxRadius = size * 0.25;
  const dimensionOrder = ["E", "R", "S", "N", "V", "G"];
  const angleStep = (Math.PI * 2) / dimensionOrder.length;
  const startAngle = -Math.PI / 2;

  ctx.save();
  ctx.translate(0, 0);

  for (let level = 1; level <= 3; level += 1) {
    const radius = (maxRadius / 3) * level;
    ctx.beginPath();
    dimensionOrder.forEach((code, idx) => {
      const angle = startAngle + angleStep * idx;
      const px = centerX + radius * Math.cos(angle);
      const py = centerY + radius * Math.sin(angle);
      if (idx === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    });
    ctx.closePath();
    ctx.strokeStyle = "rgba(29, 42, 47, 0.12)";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  dimensionOrder.forEach((code, idx) => {
    const angle = startAngle + angleStep * idx;
    const px = centerX + maxRadius * Math.cos(angle);
    const py = centerY + maxRadius * Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(px, py);
    ctx.strokeStyle = "rgba(29, 42, 47, 0.08)";
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  const points = dimensionOrder.map((code, idx) => {
    const dim = dimensions.find((item) => item.code === code);
    const value = dim ? dim.value : 50;
    const angle = startAngle + angleStep * idx;
    const radius = (value / 100) * maxRadius;
    return {
      code,
      value,
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  });

  ctx.beginPath();
  points.forEach((point, idx) => {
    if (idx === 0) {
      ctx.moveTo(point.x, point.y);
    } else {
      ctx.lineTo(point.x, point.y);
    }
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(15, 91, 82, 0.18)";
  ctx.strokeStyle = "#0f5b52";
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.stroke();

  ctx.font = "600 22px 'Noto Sans SC', sans-serif";
  ctx.fillStyle = "#1d2a2f";

  points.forEach((point, idx) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = "#0f5b52";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#fffaf2";
    ctx.stroke();

    const labelRadius = maxRadius + 34;
    const angle = startAngle + angleStep * idx;
    const lx = centerX + labelRadius * Math.cos(angle);
    const ly = centerY + labelRadius * Math.sin(angle);
    const align = idx === 0 || idx === 3 ? "center" : idx < 3 ? "left" : "right";
    ctx.textAlign = align;
    ctx.textBaseline = idx === 0 ? "bottom" : idx === 3 ? "top" : "middle";
    const dim = dimensions.find((item) => item.code === point.code);
    ctx.fillStyle = "#1d2a2f";
    ctx.fillText(dim ? dim.name : point.code, lx, ly);

    const gradeRadius = maxRadius + 8;
    const gx = centerX + gradeRadius * Math.cos(angle);
    const gy = centerY + gradeRadius * Math.sin(angle);
    const grade = getDimensionGrade(point.value);
    ctx.fillStyle = "#fffaf2";
    ctx.beginPath();
    ctx.arc(gx, gy, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(29, 42, 47, 0.14)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "#0f5b52";
    ctx.font = "700 18px 'Space Grotesk', 'Noto Sans SC', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(grade, gx, gy + 1);
  });

  ctx.restore();
}

async function saveResultImage() {
  const result = currentRenderedResult;
  if (!result) {
    return;
  }

  const button = saveImageButton;
  const originalLabel = button ? button.textContent : "";
  if (button) {
    button.disabled = true;
    button.textContent = "生成中...";
  }

  try {
    const [portraitImg, logoImg] = await Promise.all([
      loadImageAsset(resultPortrait.currentSrc || resultPortrait.src),
      loadImageAsset(new URL("./main_logo.png", window.location.href).href)
    ]);

    const canvas = document.createElement("canvas");
    canvas.width = 1400;
    canvas.height = 1800;
    const ctx = canvas.getContext("2d");

    const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    bgGradient.addColorStop(0, "#f7f2e9");
    bgGradient.addColorStop(1, "#efe7d9");
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(15, 91, 82, 0.08)";
    ctx.beginPath();
    ctx.arc(1180, 230, 220, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(220, 1480, 260, 0, Math.PI * 2);
    ctx.fill();

    const cardX = 70;
    const cardY = 70;
    const cardW = canvas.width - 140;
    const cardH = canvas.height - 140;

    fillRoundedRect(ctx, cardX, cardY, cardW, cardH, 42, "rgba(255, 251, 244, 0.9)");
    strokeRoundedRect(ctx, cardX, cardY, cardW, cardH, 42, "rgba(29, 42, 47, 0.08)", 2);

    const logoMaxWidth = 660;
    const logoScale = Math.min(logoMaxWidth / logoImg.width, 240 / logoImg.height);
    const logoW = logoImg.width * logoScale;
    const logoH = logoImg.height * logoScale;
    const logoCenterX = cardX + cardW - 250;
    ctx.drawImage(logoImg, logoCenterX - logoW / 2, cardY + 38, logoW, logoH);

    ctx.fillStyle = "#54656b";
    ctx.font = "500 34px 'Noto Sans SC', sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("你的看球搭子类型是：", cardX + 70, cardY + 70);

    ctx.fillStyle = "#18262b";
    ctx.font = "700 92px 'Noto Serif SC', serif";
    ctx.fillText(result.winner.title, cardX + 70, cardY + 132);

    ctx.fillStyle = "#0f5b52";
    ctx.font = "700 54px 'Space Grotesk', 'Noto Sans SC', sans-serif";
    ctx.fillText(result.winner.displayCode || result.winner.code, cardX + 70, cardY + 242);

    const portraitBox = {
      x: cardX + 110,
      y: cardY + 330,
      w: cardW - 220,
      h: 760
    };
    fillRoundedRect(ctx, portraitBox.x, portraitBox.y, portraitBox.w, portraitBox.h, 34, "linear-gradient");
    const portraitGradient = ctx.createLinearGradient(portraitBox.x, portraitBox.y, portraitBox.x, portraitBox.y + portraitBox.h);
    portraitGradient.addColorStop(0, "rgba(255,255,255,0.92)");
    portraitGradient.addColorStop(1, "rgba(244,239,229,0.96)");
    fillRoundedRect(ctx, portraitBox.x, portraitBox.y, portraitBox.w, portraitBox.h, 34, portraitGradient);
    strokeRoundedRect(ctx, portraitBox.x, portraitBox.y, portraitBox.w, portraitBox.h, 34, "rgba(29, 42, 47, 0.08)", 2);

    ctx.save();
    roundRectPath(ctx, portraitBox.x, portraitBox.y, portraitBox.w, portraitBox.h, 34);
    ctx.clip();
    drawContainImage(ctx, portraitImg, portraitBox.x + 24, portraitBox.y + 24, portraitBox.w - 48, portraitBox.h - 96);
    ctx.restore();

    if (result.winner.quote) {
      ctx.fillStyle = "#784f34";
      ctx.font = "600 32px 'Noto Sans SC', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "alphabetic";
      ctx.fillText(`"${result.winner.quote}"`, portraitBox.x + portraitBox.w / 2, portraitBox.y + portraitBox.h - 28);
    }

    ctx.fillStyle = "#4c5d63";
    ctx.font = "500 30px 'Noto Sans SC', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    const summaryBottomY = drawWrappedText(
      ctx,
      result.winner.shortLabel,
      cardX + cardW / 2,
      portraitBox.y + portraitBox.h + 44,
      860,
      44
    );

    const radarBox = {
      x: cardX + 210,
      y: summaryBottomY + 24,
      w: cardW - 420,
      h: 300
    };
    drawResultRadarToCanvas(ctx, radarBox.x + (radarBox.w - 330) / 2, radarBox.y, 330, result.dimensions);

    const linkY = cardY + cardH - 84;
    ctx.fillStyle = "#0f5b52";
    ctx.font = "600 26px 'Noto Sans SC', sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("访问MatchMate，认识你的AI看球搭子！", cardX + 70, linkY);
    ctx.fillStyle = "#617076";
    ctx.font = "500 22px 'Space Grotesk', 'Noto Sans SC', sans-serif";
    ctx.fillText("www.matchmate.tv", cardX + 70, linkY + 38);

    const fileCode = String(result.winner.code || "result").toLowerCase().replace(/[^a-z0-9!-]+/g, "-");
    const blob = await canvasToBlob(canvas);
    triggerBlobDownload(blob, `${fileCode}-result-card.png`);
  } catch (error) {
    console.error(error);
    const hint = window.location.protocol === "file:"
      ? "\n当前像是直接用 file:// 打开的页面。请改用本地服务器预览再试。"
      : "";
    window.alert(`保存结果图案失败，请重试或打开浏览器控制台查看错误。${hint}`);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = originalLabel || "保存结果图案";
    }
  }
}

function applyDebugShortcut() {
  const params = new URLSearchParams(window.location.search);
  const forcedCode = params.get("result");
  const panel = params.get("panel");

  if (forcedCode) {
    if (showForcedResult(forcedCode)) {
      return;
    }
  }

  if (panel === "quiz") {
    restartQuiz();
  }
}

startButton.addEventListener("click", startQuiz);
homeButton.addEventListener("click", returnToHome);
nextButton.addEventListener("click", goNext);
prevButton.addEventListener("click", goPrev);
if (saveImageButton) {
  saveImageButton.addEventListener("click", saveResultImage);
}
copyButton.addEventListener("click", async () => {
  await copyText(buildCopyText(QUESTIONS.length, ""));
});
restartButton.addEventListener("click", restartQuiz);

window.debugGoToResult = showForcedResult;
window.debugStartQuiz = restartQuiz;

applyDebugShortcut();
