const ROLE_ORDER = [
  "OH-NA", "MAKUI", "CR7", "LEO", "KARIUS", "BALO", "HAAL-D", "NEY-MAR",
  "ROBBEN", "WU7", "BESTATE", "FAN-G", "COLL-NA", "RUDI", "SUA-R",
  "QUARESMA", "TCHOU", "ZIDANE", "MOU-R", "TENGOD", "DIOR-LA", "KOMPANY",
  "ANCELO", "KLOPP", "ZZZJ", "HE-WEI", "CF-BOYs", "LAO8", "TIE-Z",
  "GOLD-2018", "PIONEER", "HIGUITA"
];

const ROLES = {
  "OH-NA": { code: "OH-NA", title: "奥纳纳", group: "球员系", tag: "高压合理化", shortLabel: "失误现场的解释链专家", image: "./images/oh-na-onana.png" },
  "MAKUI": { code: "MAKUI", title: "马奎", group: "球员系", tag: "逆风韧性", shortLabel: "逆风局里的硬扛型搭子", image: "./images/magui-maguire.png" },
  "CR7": { code: "CR7", title: "罗总裁", group: "球员系", tag: "英雄叙事驱动", shortLabel: "最后时刻仍在等主角登场", image: "./images/cr7-ronaldo.png" },
  "LEO": { code: "LEO", title: "梅西", group: "球员系", tag: "低唤醒掌控", shortLabel: "安静观察后的关键判断", image: "./images/leo-messi.png" },
  "KARIUS": { code: "KARIUS", title: "卡里乌斯", group: "球员系", tag: "创伤后复原", shortLabel: "失误者的耐心观察员", image: "./images/karius.png" },
  "BALO": { code: "BALO", title: "巴神", group: "球员系", tag: "戏剧化表达", shortLabel: "比赛现场的意外变量", image: "./images/balo-balotelli.png" },
  "HAAL-D": { code: "HAAL-D", title: "哈兰德", group: "球员系", tag: "效率结算", shortLabel: "过程之后负责看结果", image: "./images/haal-d-haaland.png" },
  "NEY-MAR": { code: "NEY-MAR", title: "内马尔", group: "球员系", tag: "审美型竞争", shortLabel: "赢也要赢得有灵气", image: "./images/ney-mar-neymar.png" },
  "ROBBEN": { code: "ROBBEN", title: "小飞侠", group: "球员系", tag: "绝活稳定性", shortLabel: "明牌也能打穿的稳定派", image: "./images/robben.png" },
  "WU7": { code: "WU7", title: "武球王", group: "球员系", tag: "迁移型奋斗", shortLabel: "愿意把难度往上加的人", image: "./images/wu7-wulei.png" },
  "BESTATE": { code: "BESTATE", title: "施连志", group: "球员系", tag: "松弛复位", shortLabel: "紧张局面里的松弛感来源", image: "./images/bestate-shilianzhi.png" },
  "FAN-G": { code: "FAN-G", title: "范大将军", group: "球员系", tag: "道德激活", shortLabel: "该说重话时不会绕开", image: "./images/fan-g-fanzhiyi.png" },
  "COLL-NA": { code: "COLL-NA", title: "科里纳", group: "球员系", tag: "秩序仲裁", shortLabel: "争议现场的规则坐标", image: "./images/fede-valverde.png" },
  "RUDI": { code: "RUDI", title: "吕迪格", group: "球员系", tag: "压迫威慑", shortLabel: "强对抗里的气场型搭子", image: "./images/rudi-rudiger.png" },
  "SUA-R": { code: "SUA-R", title: "苏牙", group: "球员系", tag: "生存型掠食", shortLabel: "关键局面里的强烈胜负感", image: "./images/sua-r-suarez.png" },
  "QUARESMA": { code: "QUARESMA", title: "夸雷斯马", group: "球员系", tag: "技术执念", shortLabel: "相信技术细节会留下痕迹", image: "./images/quaresma.png" },
  "TCHOU": { code: "TCHOU", title: "楚阿梅尼", group: "球员系", tag: "冲突外化", shortLabel: "对抗和态度都摆在台面上", image: "./images/tchou-tchouameni.png" },
  "ZIDANE": { code: "ZIDANE", title: "齐玄宗", group: "教练系", tag: "大师叙事", shortLabel: "相信大场面有自己的秩序", image: "./images/zidane.png" },
  "MOU-R": { code: "MOU-R", title: "穆帅", group: "教练系", tag: "权谋沟通", shortLabel: "把比赛和舆论一起看", image: "./images/mou-r-mourinho.png" },
  "TENGOD": { code: "TENGOD", title: "滕圣", group: "教练系", tag: "控制变量", shortLabel: "先拆问题，再谈结论", image: "./images/tengod-tenhag.png" },
  "DIOR-LA": { code: "DIOR-LA", title: "瓜秃", group: "教练系", tag: "结构完美主义", shortLabel: "所有混乱都想被还原成结构", image: "./images/guatu-guardiola.png" },
  "KOMPANY": { code: "KOMPANY", title: "孔帕尼", group: "教练系", tag: "团结领导", shortLabel: "低谷时先把队伍拢住", image: "./images/kompany.png" },
  "ANCELO": { code: "ANCELO", title: "安胖", group: "教练系", tag: "稳态调度", shortLabel: "知道什么时候该等", image: "./images/ancelo-ancelotti.png" },
  "KLOPP": { code: "KLOPP", title: "渣叔", group: "教练系", tag: "情绪点火", shortLabel: "把比赛看成一股热度", image: "./images/klopp.png" },
  "ZZZJ": { code: "ZZZJ", title: "詹张", group: "解说与内容系", tag: "双核共振", shortLabel: "内容密度和陪伴感都要有", image: "./images/jj-hh-zhanzhang.png" },
  "HE-WEI": { code: "HE-WEI", title: "贺炜", group: "解说与内容系", tag: "语言建模", shortLabel: "把瞬间讲出余味", image: "./images/he-wei.png" },
  "CF-BOYs": { code: "CF-BOYs", title: "董路", group: "解说与内容系", tag: "长期主义青训", shortLabel: "习惯把一场球放到更长周期里", image: "./images/dong-donglu.png" },
  "LAO8": { code: "LAO8", title: "李老八", group: "解说与内容系", tag: "草根表达", shortLabel: "烂场面也能讲成现场", image: "./images/lao8.png" },
  "TIE-Z": { code: "TIE-Z", title: "铁子", group: "隐藏人格", tag: "应激表演", shortLabel: "越复杂越想重新组织语言", image: "./images/tie-z-li-tie.png" },
  "GOLD-2018": { code: "GOLD-2018", title: "淇楚·王", group: "隐藏人格", tag: "转型适应", shortLabel: "同时看比赛、内容和传播", image: "./images/wcq-wangchuqi.png" },
  "PIONEER": { code: "PIONEER", title: "李惠堂", group: "隐藏人格", tag: "时代先驱", shortLabel: "会记得路是怎么走出来的", image: "./images/li-hui-lihuitang.png" },
  "HIGUITA": { code: "HIGUITA", title: "伊基塔", group: "隐藏人格", tag: "反常规创造", shortLabel: "稳定之外也要留给传奇一点空间", image: "./images/higuita.png" }
};

const DIMENSION_META = {
  E: "情绪外显",
  R: "战术理性",
  S: "社交连接",
  N: "叙事投射",
  V: "风险偏好",
  G: "群体感应"
};

function option(label, text, primary, secondary, dimensions) {
  return { label, text, primary, secondary, dimensions };
}

const QUESTIONS = [
  {
    id: "Q1",
    sourceNumber: 1,
    stage: 1,
    part: "",
    title: "当国足在印尼客场 0-1 告负，无缘出线时，你的第一反应是什么？",
    options: [
      option("A", "阵容和打法是不是从一开始就错了", ["MOU-R", "DIOR-LA", "CF-BOYs"], ["COLL-NA", "OH-NA", "ANCELO"], { R: 2, N: 1, V: -1 }),
      option("B", "这结果说不上意外，但真的很难受", ["WU7", "HE-WEI", "ANCELO"], ["PIONEER", "KARIUS", "MAKUI"], { N: 2, E: 1, V: -1 }),
      option("C", "球员怎么反应，最能看出队伍气质", ["FAN-G", "KLOPP", "MAKUI"], ["KOMPANY", "CR7", "WU7"], { G: 2, E: 1, N: 1 }),
      option("D", "球迷群里是不是已经炸了", ["LAO8", "BALO"], ["ZZZJ", "BESTATE", "GOLD-2018", "TIE-Z"], { S: 2, G: 1, E: 1 })
    ]
  },
  {
    id: "Q2",
    sourceNumber: 2,
    stage: 1,
    part: "",
    title: "第 85 分钟主队还落后，你心里在想什么？",
    options: [
      option("A", "还有定位球和换人，牌没打完呢", ["TENGOD", "MOU-R", "DIOR-LA"], ["OH-NA", "CF-BOYs"], { R: 2, N: 1, V: -1 }),
      option("B", "这种时刻，某个人会站出来的", ["CR7", "LEO", "SUA-R"], ["HAAL-D", "KLOPP", "KOMPANY"], { N: 2, G: 1, V: 1 }),
      option("C", "都这时候了还在落后，看得才过瘾", ["BALO", "HIGUITA", "NEY-MAR"], ["RUDI", "TCHOU", "QUARESMA"], { V: 2, E: 1, N: 1 }),
      option("D", "很难翻盘了，看最后怎么收场", ["HE-WEI", "KARIUS", "WU7"], ["ANCELO", "PIONEER", "ZIDANE"], { N: 2, E: 1, V: -1 })
    ]
  },
  {
    id: "Q3",
    sourceNumber: 3,
    stage: 1,
    part: "",
    title: "你的主队惊险赢球，但过程确实不好看，你会怎么评价？",
    options: [
      option("A", "能赢就行", ["HAAL-D", "MOU-R", "ROBBEN"], ["ANCELO"], { R: 2, V: -1, N: -1 }),
      option("B", "赢了，但过程问题不能就这么算", ["DIOR-LA", "FAN-G", "CF-BOYs"], ["COLL-NA", "OH-NA"], { R: 2, G: 1, N: 1 }),
      option("C", "赢得不够漂亮，看着有点憋屈", ["NEY-MAR", "QUARESMA"], ["HIGUITA", "LEO", "HE-WEI"], { V: 1, N: 2, E: 1 }),
      option("D", "难看的赢球，赛后反而更有得聊", ["LAO8", "ZZZJ", "BALO"], ["GOLD-2018", "BESTATE", "TIE-Z"], { S: 2, G: 1, E: 1 })
    ]
  },
  {
    id: "Q4",
    sourceNumber: 4,
    stage: 1,
    part: "",
    title: "欧冠对阵马竞，热刺门将金斯基首发，17 分钟内两次低级失误丢球随即被换下。你更接近哪种反应？",
    options: [
      option("A", "他怎么应对，比失误本身更重要", ["KOMPANY", "KARIUS", "ANCELO"], ["MAKUI", "TENGOD", "TCHOU"], { E: 1, N: 1, V: -1 }),
      option("B", "这两个球，批评他不冤", ["RUDI", "FAN-G", "HAAL-D"], ["COLL-NA", "DIOR-LA", "TIE-Z"], { R: 1, G: 1, E: 1 }),
      option("C", "“金斯基”和“灾难”已经绑死了", ["GOLD-2018", "BESTATE", "BALO"], ["LAO8", "ZZZJ", "NEY-MAR"], { S: 2, N: 1, E: 1 }),
      option("D", "维卡里奥都闹离队了，金斯基哪扛得动", ["WU7", "TCHOU", "MAKUI"], ["CF-BOYs", "HE-WEI", "TENGOD"], { R: 1, N: 2, V: -1 })
    ]
  },
  {
    id: "Q5",
    sourceNumber: 5,
    stage: 1,
    part: "",
    title: "补时阶段主队落后一球并获得角球机会，本方门将冲进禁区时，你心里第一个念头是什么？",
    options: [
      option("A", "这时候就该赌一把", ["HIGUITA", "NEY-MAR", "CR7"], ["BALO", "KLOPP", "SUA-R"], { V: 2, E: 1, G: 1 }),
      option("B", "先看第二点有没有保护", ["ROBBEN", "OH-NA", "KOMPANY"], ["DIOR-LA", "COLL-NA", "TENGOD"], { R: 2, V: -1, N: -1 }),
      option("C", "这画面，不管进不进都值得记住", ["QUARESMA", "ZIDANE", "LEO"], ["NEY-MAR", "HE-WEI", "PIONEER"], { N: 2, V: 1, E: 1 }),
      option("D", "千万别被打反击，打回来就彻底完了", ["MAKUI", "TCHOU", "ANCELO"], ["MOU-R", "KARIUS", "HAAL-D"], { R: 1, V: -1, E: 1 })
    ]
  },
  {
    id: "Q9",
    sourceNumber: 9,
    stage: 1,
    part: "",
    title: "最让你记住的球员，通常是哪种？",
    options: [
      option("A", "逆境里靠精神感染全队的球队之魂", ["KOMPANY", "KLOPP", "MAKUI"], ["FAN-G", "CR7", "WU7"], { G: 2, E: 1, N: 1 }),
      option("B", "关键时刻绝不掉链子的定海神针", ["ROBBEN", "TCHOU", "LEO"], ["HAAL-D", "ANCELO", "ZIDANE"], { R: 1, V: -1, N: 1 }),
      option("C", "技术细腻、有创造力的球场精灵", ["NEY-MAR", "QUARESMA", "HIGUITA"], ["LEO", "HE-WEI", "BALO"], { N: 2, V: 1, E: 1 }),
      option("D", "场内场外都是焦点的话题人物", ["BALO", "CR7", "MOU-R"], ["SUA-R", "LAO8", "BESTATE"], { G: 2, E: 1, S: 1 })
    ]
  },
  {
    id: "Q8",
    sourceNumber: 8,
    stage: 1,
    part: "",
    title: "你心里最理想的看球搭子，最该擅长哪件事？",
    options: [
      option("A", "帮我跟上大家在聊什么", ["ZZZJ", "BESTATE", "WU7"], ["LAO8", "GOLD-2018", "BALO"], { S: 2, G: 1, E: 1 }),
      option("B", "帮我拆解战术", ["DIOR-LA", "MOU-R", "TENGOD"], ["COLL-NA", "OH-NA", "CF-BOYs"], { R: 2, N: -1, V: -1 }),
      option("C", "补充场外知识和八卦", ["HE-WEI", "CF-BOYs", "PIONEER"], ["GOLD-2018", "ZZZJ", "BALO"], { N: 2, S: 1, R: 1 }),
      option("D", "输了陪骂，赢了一起爽", ["KLOPP", "LAO8", "SUA-R"], ["CR7", "BALO", "FAN-G"], { E: 2, G: 1, S: 1 })
    ]
  },
  {
    id: "Q14",
    sourceNumber: 14,
    stage: 1,
    part: "",
    title: "看完一场球，朋友最容易从你这里获得什么？",
    options: [
      option("A", "一股从头到尾都没下来的劲", ["KLOPP", "BALO", "CR7"], ["FAN-G", "LAO8", "SUA-R"], { E: 2, G: 1, S: 1 }),
      option("B", "聊不完的赛后话题", ["MOU-R", "HE-WEI", "BESTATE"], ["CR7", "ZZZJ", "CF-BOYs"], { S: 2, N: 1, G: 1 }),
      option("C", "把场上局势讲清楚的判断", ["DIOR-LA", "COLL-NA", "OH-NA"], ["TENGOD", "ROBBEN", "HAAL-D"], { R: 2, N: 1, V: -1 }),
      option("D", "一起看球时才有的参与感", ["ZZZJ", "KOMPANY", "WU7"], ["LAO8", "BESTATE", "MAKUI"], { S: 2, G: 1, E: 1 })
    ]
  },
  {
    id: "Q6",
    sourceNumber: 6,
    stage: 2,
    part: "",
    title: "欧冠半决赛巴黎 1-1 拜仁，赛后关于判罚的争议持续发酵。你更接近哪种反应？",
    options: [
      option("A", "裁判吹罚逻辑有没有一致性", ["COLL-NA", "TENGOD", "DIOR-LA"], ["OH-NA", "MOU-R", "HAAL-D"], { R: 2, G: 1, V: -1 }),
      option("B", "各群观点都不一样，先让子弹飞", ["ANCELO", "LEO", "ZIDANE"], ["KOMPANY", "WU7", "TCHOU"], { R: 1, V: -1, E: -1 }),
      option("C", "球迷有情绪，本来就不该端着", ["KLOPP", "SUA-R", "CR7"], ["FAN-G", "BALO", "RUDI"], { E: 2, G: 1, S: 1 }),
      option("D", "这种争议会留在球迷嘴里很久", ["HE-WEI", "CF-BOYs", "MOU-R"], ["ZZZJ", "GOLD-2018", "TCHOU"], { N: 2, S: 1, G: 1 })
    ]
  },
  {
    id: "Q7",
    sourceNumber: 7,
    stage: 2,
    part: "",
    title: "当武磊在西班牙人上场时间越来越少，“中国球员行不行”的声音开始出现时，你会先往哪个方向想？",
    options: [
      option("A", "先看技术和对抗差在哪", ["DIOR-LA", "OH-NA", "MOU-R"], ["TENGOD", "ROBBEN", "COLL-NA"], { R: 2, N: -1, V: -1 }),
      option("B", "出去闯本来就不容易", ["WU7", "MAKUI", "KARIUS"], ["HE-WEI", "KOMPANY", "ANCELO"], { E: 1, N: 2, V: 1 }),
      option("C", "表现不行就是不行", ["RUDI", "HAAL-D", "FAN-G"], ["SUA-R", "COLL-NA", "CR7"], { R: 1, G: 1, E: 1 }),
      option("D", "绕来绕去还是青训和联赛的老问题", ["CF-BOYs", "PIONEER", "TENGOD"], ["MOU-R", "ZZZJ", "DIOR-LA"], { R: 2, N: 1, V: -1 })
    ]
  },
  {
    id: "Q10",
    sourceNumber: 10,
    stage: 2,
    part: "",
    title: "看一场球，你最不想错过的是哪种瞬间？",
    options: [
      option("A", "火药味十足、肢体语言爆炸的对抗", ["RUDI", "SUA-R", "TCHOU"], ["FAN-G", "BALO", "CR7"], { E: 1, V: 1, G: 2 }),
      option("B", "平时不抢戏的人突然挥出关键一击", ["ROBBEN", "KOMPANY", "ANCELO"], ["LEO", "HAAL-D", "MAKUI"], { N: 1, R: 1, V: -1 }),
      option("C", "看着像要翻车，结果反而踢成了的反常规处理", ["HIGUITA", "BALO", "NEY-MAR"], ["KLOPP", "QUARESMA", "CR7"], { V: 2, N: 1, E: 1 }),
      option("D", "不影响比分但你愿意反复回看的画面", ["QUARESMA", "ZIDANE", "LEO"], ["NEY-MAR", "HE-WEI", "PIONEER"], { N: 2, V: 1, R: 1 })
    ]
  },
  {
    id: "Q11",
    sourceNumber: 11,
    stage: 2,
    part: "",
    title: "一场比赛刚结束，你第一个点开的是什么？",
    options: [
      option("A", "球员采访和更衣室反应", ["ZZZJ", "LAO8", "KARIUS"], ["GOLD-2018", "BALO", "CR7"], { S: 1, E: 1, N: 1 }),
      option("B", "球员评分和战术复盘", ["COLL-NA", "MOU-R", "OH-NA"], ["DIOR-LA", "TENGOD", "ROBBEN"], { R: 2, N: -1, V: -1 }),
      option("C", "球迷和媒体的赛后评论", ["BESTATE", "CF-BOYs", "TIE-Z"], ["LAO8", "GOLD-2018", "HE-WEI"], { S: 2, G: 1, R: 1 }),
      option("D", "关键画面和争议瞬间", ["NEY-MAR", "SUA-R", "CR7"], ["QUARESMA", "HIGUITA", "BALO"], { V: 1, N: 2, E: 1 })
    ]
  },
  {
    id: "Q12",
    sourceNumber: 12,
    stage: 2,
    part: "",
    title: "一支大球队持续低迷时，你更常聊哪一层？",
    options: [
      option("A", "走到今天的根本问题", ["CF-BOYs", "MOU-R", "DIOR-LA"], ["TENGOD", "FAN-G", "PIONEER"], { R: 2, N: 1, G: 1 }),
      option("B", "更衣室氛围和球员心态", ["KOMPANY", "KLOPP", "KARIUS"], ["ANCELO", "MAKUI", "WU7"], { E: 1, G: 1, N: 1 }),
      option("C", "阵容结构和长期规划", ["COLL-NA", "TENGOD", "OH-NA"], ["DIOR-LA", "HAAL-D", "MOU-R"], { R: 2, V: -1, N: -1 }),
      option("D", "球迷情绪和舆论走向", ["LAO8", "BESTATE", "TIE-Z"], ["GOLD-2018", "ZZZJ", "BALO"], { S: 2, E: 1, G: 1 })
    ]
  },
  {
    id: "Q13",
    sourceNumber: 13,
    stage: 2,
    part: "",
    title: "群里你给出一个判断，立刻有人不同意，你接下来会怎么做？",
    options: [
      option("A", "重新讲一遍，事情没那么简单", ["TIE-Z", "MOU-R", "CF-BOYs"], ["GOLD-2018", "OH-NA", "TENGOD"], { R: 1, G: 1, V: 1 }),
      option("B", "该说的还是要说，难听就难听吧", ["RUDI", "FAN-G", "KLOPP"], ["COLL-NA", "SUA-R", "HAAL-D"], { E: 1, G: 2, V: 1 }),
      option("C", "先不争，等比赛走完再说", ["ANCELO", "LEO", "ZIDANE"], ["KOMPANY", "TCHOU", "TENGOD"], { R: 1, V: -1, E: -1 }),
      option("D", "找几个角度，让两边都能下台", ["HE-WEI", "KARIUS", "GOLD-2018"], ["ZZZJ", "BESTATE", "PIONEER"], { S: 2, G: 1, N: 1 })
    ]
  },
  {
    id: "Q15",
    sourceNumber: 15,
    stage: 2,
    part: "",
    title: "一个核心球员长期因伤或状态低谷被骂，你怎么想？",
    options: [
      option("A", "该恢复就给时间，别现在踩", ["KOMPANY", "KARIUS", "TENGOD"], ["MAKUI", "ANCELO"], { E: 1, N: 1, V: -1 }),
      option("B", "出问题就该问责，球迷不是白看的", ["FAN-G", "COLL-NA", "HAAL-D"], ["DIOR-LA", "CF-BOYs"], { R: 2, G: 1, E: 1 }),
      option("C", "他自己更难受，先别再加压了", ["MAKUI", "WU7", "HE-WEI"], ["KARIUS", "KOMPANY"], { N: 2, E: 1, V: -1 }),
      option("D", "争论没用，看他下场怎么踢", ["TCHOU", "LEO", "SUA-R"], ["HAAL-D", "RUDI"], { V: 1, N: 1, E: -1 })
    ]
  },
  {
    id: "Q16",
    sourceNumber: 16,
    stage: 2,
    part: "",
    title: "一位老派传奇被网友翻出来当梗讨论，你心里第一感觉是什么？",
    options: [
      option("A", "对老派传奇还是该有起码的敬意", ["PIONEER", "HE-WEI", "CF-BOYs"], ["WU7", "ANCELO"], { R: 1, N: 2, V: -1 }),
      option("B", "让梗归梗，他自己未必介意", ["BESTATE", "GOLD-2018", "BALO"], ["LAO8", "ZZZJ"], { S: 1, E: 1, V: 1 }),
      option("C", "时代不一样了，平视就行别神化", ["HAAL-D", "COLL-NA", "MOU-R"], ["DIOR-LA", "TCHOU"], { R: 2, V: -1, N: -1 }),
      option("D", "但凡被翻出来的，总有原因", ["OH-NA", "TIE-Z", "SUA-R"], ["CF-BOYs", "TENGOD"], { R: 1, N: 1, V: 1 })
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
const resultShortLabel = document.querySelector("#result-short-label");
const dimensionBreakdown = document.querySelector("#dimension-breakdown");
const roleBreakdown = document.querySelector("#role-breakdown");
const resultOneliner = document.querySelector("#result-oneliner");
const resultProfile = document.querySelector("#result-profile");
const resultFocus = document.querySelector("#result-focus");
const resultNeighbors = document.querySelector("#result-neighbors");
const hiddenBadge = document.querySelector("#hidden-badge");
const copyButton = document.querySelector("#copy-button");
const restartButton = document.querySelector("#restart-button");

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

  if (
    topFive.includes("TIE-Z") &&
    getAnswerLabel("Q13") === "A" &&
    getAnswerLabel("Q16") === "D" &&
    dimensions.V >= 75 &&
    dimensions.R >= 60
  ) {
    hiddenCandidates.push("TIE-Z");
  }

  if (
    topFive.includes("GOLD-2018") &&
    getAnswerLabel("Q4") === "C" &&
    getAnswerLabel("Q16") === "B" &&
    dimensions.S >= 70 &&
    dimensions.R >= 62
  ) {
    hiddenCandidates.push("GOLD-2018");
  }

  if (
    topFive.includes("PIONEER") &&
    getAnswerLabel("Q16") === "A" &&
    (getAnswerLabel("Q1") === "B" || getAnswerLabel("Q12") === "A") &&
    dimensions.R >= 85 &&
    dimensions.V < 50
  ) {
    hiddenCandidates.push("PIONEER");
  }

  if (
    topFive.includes("HIGUITA") &&
    getAnswerLabel("Q5") === "A" &&
    getAnswerLabel("Q10") === "C" &&
    dimensions.V >= 85
  ) {
    hiddenCandidates.push("HIGUITA");
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
    isHidden: winner.group === "隐藏人格",
    roleScores: summary.roleScores,
    rankedRoles: summary.rankedRoles,
    dimensions: getDimensionRanking(summary.dimensionTotals)
  };
}

function buildNarrative(result) {
  const topDimensions = result.dimensions.slice(0, 3);
  const topRoles = result.rankedRoles.filter((code) => code !== result.winner.code).slice(0, 3);

  return {
    summary: `${result.winner.title}型看球搭子，核心特征是“${result.winner.tag}”。`,
    oneliner: `你更像${result.winner.title}：${result.winner.shortLabel}`,
    profile: `这类人看球时通常会优先从“${topDimensions.map((item) => item.name).join(" / ")}”进入比赛，所以你的判断和情绪落点会比较稳定地收束到“${result.winner.tag}”这一类视角。`,
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
    isHidden: winner.group === "隐藏人格",
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

function renderResult(limit, phaseLabel) {
  const result = buildResult(limit);
  applyResultToView(result, phaseLabel);
}

function applyResultToView(result, phaseLabel) {
  const narrative = buildNarrative(result);

  resultPhase.textContent = phaseLabel;
  resultPhase.classList.toggle("hidden", !phaseLabel);
  resultPortraitShell.dataset.roleCode = result.winner.code;
  resultPortrait.src = result.winner.image;
  resultPortrait.alt = `${result.winner.title} 角色图`;
  resultCode.textContent = result.winner.code;
  resultTitle.textContent = result.winner.title;
  resultGroup.textContent = `所属分组：${result.winner.group}`;
  resultShortLabel.textContent = result.winner.shortLabel;
  resultOneliner.textContent = narrative.oneliner;
  resultProfile.textContent = narrative.profile;

  hiddenBadge.classList.toggle("hidden", !result.isHidden);

  renderBreakdown(
    dimensionBreakdown,
    result.dimensions.map((item) => ({
      name: item.name,
      value: `${item.value}`
    }))
  );

  renderBreakdown(
    roleBreakdown,
    result.rankedRoles.slice(0, 5).map((code) => ({
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
    `${result.winner.shortLabel}`
  ].join("\n");
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
copyButton.addEventListener("click", async () => {
  await copyText(buildCopyText(QUESTIONS.length, ""));
});
restartButton.addEventListener("click", restartQuiz);

window.debugGoToResult = showForcedResult;
window.debugStartQuiz = restartQuiz;

applyDebugShortcut();
