// ─── 配置开关 ───
const SHOW_QR = true; // true = 生成图左下角显示二维码，false = 不显示

const ROLE_ORDER = [
  "MOU", "TINTIN", "MA-KUI", "LE-FU", "PEP", "8-PE", "Z-LATAN",
  "LEO", "DAT-A", "WAN-SUI", "CCTV-HE", "BEI-GUO", "LAO-8",
  "CN-12", "FAN-ZY", "CR7", "MA-DING", "STAY-H", "TUI-Q", "HEI-HEI",
  "NEY-MAR", "TEN-GOD", "1100", "CARD-MA",
  "LEGEND", "ZI-DANE", "DINHO"
];

const ROLES = {
  "MOU":   { code: "MOU",   title: "狂人",     group: "看球反应组", tag: "嘴上骂裁判手上砸遥控器",     shortLabel: "情绪来得快去得也快，骂完三分钟又在群里发哈哈哈哈", quote: "我就是特殊的那个", image: "./images/MOU.png" },
  "TINTIN":    { code: "TINTIN",    title: "丁丁",   group: "看球反应组", tag: "全场最安静但脑子里在跑弹幕",   shortLabel: "不说话不代表没想法，赛后能给你复盘每个细节", quote: "Let Me Talk", image: "./images/TINTIN.png" },
  "MA-KUI":   { code: "MA-KUI",   title: "航母",     group: "看球反应组", tag: "落后三球还在发还有机会",       shortLabel: "逆风局的精神支柱（自封的），被骂也不改", quote: "图赫尔是个外行", image: "./images/MA-KUI.png" },
  "LE-FU":   { code: "LE-FU",   title: "勒夫",   group: "看球反应组", tag: "等一个进球等到花都谢了",       shortLabel: "全场就等那一脚，进了一起飞没进原地去世", quote: "韩国可以拿下，晋级不成问题", image: "./images/LE-FU.png" },
  "PEP":  { code: "PEP",  title: "瓜帅",   group: "看球反应组", tag: "看球时自动脑补战术板",         shortLabel: "这个球应该分边是他的口头禅，看球像在下棋", quote: "Nobody Talk!", image: "./images/PEP.png" },
  "8-PE":   { code: "8-PE",   title: "姆总",   group: "看球反应组", tag: "边路一过人他就站起来",         shortLabel: "看球时坐不住，进球会从沙发上弹起来", quote: "这是我的时代？", image: "./images/8-PE.png" },
  "Z-LATAN": { code: "Z-LATAN", title: "奉先",   group: "看球反应组", tag: "比赛可以输但花活不能少",       shortLabel: "0-4落后还在等一个倒钩，觉得足球是艺术不是战争", quote: "世界上只有两种人：兹拉坦和其他人", image: "./images/Z-LATAN.png" },
  "LEO":   { code: "LEO",   title: "里奥",     group: "赛后话题组", tag: "天选足球人",     shortLabel: "天赋和命运都站在脚下，关键时刻总能把球带到答案里", quote: "天选足球人", image: "./images/LEO.png" },
  "DAT-A":     { code: "DAT-A",     title: "詹指",   group: "赛后话题组", tag: "赛后第一件事打开MatchMate看数据", shortLabel: "嘴上说只看数据，其实每个异常值都能讲成一段故事", quote: "这个数据很有意思", image: "./images/DAT-A.png" },
  "WAN-SUI": { code: "WAN-SUI", title: "健翔",   group: "赛后话题组", tag: "你再看一遍这个球",             shortLabel: "喜欢反复看关键画面，能从一个犯规里看出三层含义", quote: "意大利万岁！", image: "./images/WAN-SUI.png" },
  "CCTV-HE":   { code: "CCTV-HE",   title: "贺·罗纳尔多·炜",   group: "赛后话题组", tag: "聊球自动附赠球员生平",         shortLabel: "你知道他当年在乌迪内斯的时候能把任何球员聊成传记", quote: "足球就是足球", image: "./images/CCTV-HE.png" },
  "BEI-GUO":   { code: "BEI-GUO",   title: "本泽马",     group: "赛后话题组", tag: "我只是个背锅的",   shortLabel: "锅在背后人很淡定，输了先接锅，赢了也不抢功", quote: "我只是个背锅的", image: "./images/BEI-GUO.png" },
  "LAO-8":   { code: "LAO-8",   title: "李老八",   group: "赛后话题组", tag: "赛后能聊到凌晨三点",           shortLabel: "别人说睡了他还能再发二十条语音，看球是社交不是运动", quote: "我跟你说啊", image: "./images/LAO-8.png" },
  "CN-12":   { code: "CN-12",   title: "第12人",   group: "搭子风格组", tag: "一个人就是一支啦啦队",         shortLabel: "和他看球永远不会冷场，进球时比球员还激动", quote: "下一场一定赢", image: "./images/CN-12.png" },
  "FAN-ZY":   { code: "FAN-ZY",   title: "范将军",   group: "搭子风格组", tag: "输了赢了都骂",                 shortLabel: "嘴上永远不满意，但每场都不落，是最忠实的黑粉", quote: "脸都不要了", image: "./images/FAN-ZY.png" },
  "CR7":   { code: "CR7",   title: "罗哥",   group: "搭子风格组", tag: "从欧洲到沙特，我来到、我征服",               shortLabel: "自信拉满的胜利宣言型搭子，去哪都要把场子变成主场", quote: "从欧洲到沙特，我来到、我征服", image: "./images/CR7.png" },
  "MA-DING":  { code: "MA-DING",  title: "大马丁",     group: "搭子风格组", tag: "该说的难听话一句不少",         shortLabel: "不怕得罪人，嘲讽属性拉满，越到点球大战越来劲", quote: "真话不好听", image: "./images/MA-DING.png" },
  "STAY-H": { code: "STAY-H", title: "哈宝",   group: "搭子风格组", tag: "进了球也不庆祝，发个STAY HUMBLE就完事", shortLabel: "进球后比谁都平静，但赛后默默把数据截图发群里", quote: "STAY HUMBLE", image: "./images/STAY-H.png" },
  "TUI-Q":    { code: "TUI-Q",    title: "退钱哥",   group: "搭子风格组", tag: "输了一起骂赢了一起吹",         shortLabel: "情绪价值拉满的看球搭子，你需要什么他就给什么", quote: "我xxx，退钱！", image: "./images/TUI-Q.png" },
  "HEI-HEI":  { code: "HEI-HEI",  title: "张嘿嘿",     group: "搭子风格组", tag: "你讲他接你冷他暖",             shortLabel: "永远知道什么时候该接梗什么时候该捧场，气氛永远到位", quote: "嘿嘿", image: "./images/HEI-HEI.png" },
  "NEY-MAR":  { code: "NEY-MAR",  title: "内马尔", group: "足球哲学组", tag: "宁可输也不能踢得丑",           shortLabel: "对丑陋赢球的容忍度为零，看球审美至上", quote: "足球是艺术", image: "./images/NEY-MAR.png" },
  "TEN-GOD":      { code: "TEN-GOD",      title: "滕圣",   group: "足球哲学组", tag: "能赢就行要什么自行车",         shortLabel: "再难看的比赛，也能从两个机会里算出赢的角度", quote: "两个机会都算上，比赛其实我们赢了", image: "./images/TEN-GOD.png" },
  "1100":   { code: "1100",   displayCode: "1100(宋)",   title: "高俅",   group: "足球哲学组", tag: "以前的足球才叫足球",           shortLabel: "觉得现在什么都差点意思，聊球必提以前", quote: "我刚开始看足球的那个时候...", image: "./images/1100.png" },
  "CARD-MA":    { code: "CARD-MA",    title: "卡牌大师",   group: "足球哲学组", tag: "争议第一反应翻规则手册",       shortLabel: "看VAR比看进球认真，觉得公平是足球的底线", quote: "规则就是规则", image: "./images/CARD-MA.png" },
  "LEGEND": { code: "LEGEND", title: "传奇",     group: "特殊人格",   tag: "被时间封印的名字",             shortLabel: "总能在老比赛里找到新东西，聊球自带历史纵深", quote: "足球之神有两个名字", image: "./images/LEGEND.png" },
  "ZI-DANE":  { code: "ZI-DANE",  title: "齐祖",     group: "特殊人格",   tag: "越乱越来劲",                   shortLabel: "别人看球怕意外，他看球就盼意外", quote: "优雅，也可以很硬", image: "./images/ZI-DANE.png" },
  "DINHO":  { code: "DINHO",  title: "小罗",     group: "特殊人格",   tag: "稳定之外也要留给传奇空间",     shortLabel: "正经分析他也会，但他更愿意等那个不可能的瞬间", quote: "规则是用来打破的", image: "./images/DINHO.png" }
};

const ROLE_PROFILES = {
  "MOU": "你是狂人型看球搭子。你属于那种比赛还没踢热，情绪先把客厅点燃的人。别人看到争议判罚可能先愣一下，你已经开始对着屏幕输出完整战术批判和裁判批判。你的足球背景感来自穆里尼奥式的强烈胜负欲和保护欲：爱一支队，就不只是在看球，而是在替它上诉、替它吵架、替它把所有委屈说出来。你这种人格最明显的地方是，嘴很硬，心很热，骂得越狠，说明越在乎。\n\n作为看球搭子的常见发言：\n这也能不吹？这场就是被针对了。别跟我讲过程，先把态度拿出来。\n\n作为看球搭子的气质：\n你是气氛发动机，也是逆风局的第一声炮响，容易上头，但也最能把沉闷比赛看出火药味。",
  "TINTIN": "你是丁丁型看球搭子。你不是没反应，而是反应都藏在脑子里。别人进球后已经喊破音，你可能只是点点头，但其实刚才那次跑位、那脚提前量、那个防守盲区，你全都记住了。你的足球背景感来自德布劳内式的冷静和信息处理能力：场面越乱，你越能在里面看见线路。你这种人格最神奇的地方是，不爱抢话，却经常在赛后一句话说到点上。\n\n作为看球搭子的常见发言：\n刚才那球其实传早了半秒。这个空当从上一回合就出来了。你们先聊，我再看一遍。\n\n作为看球搭子的气质：\n你像群里那个安静的战术缓存，平时存在感不高，但复盘时大家会发现你一直在线。",
  "MA-KUI": "你是航母型看球搭子。你属于那种哪怕球队已经被打穿三次，还能认真说还有机会的人。你的足球背景感来自马奎尔式的巨大存在感和逆风承压感：场面顺的时候你不一定最显眼，场面崩的时候你反而站在最前面。你这种人格不是盲目乐观，而是有一种硬顶着不倒的执念，哪怕被群友嘲笑，也要把精神支柱这四个字焊在自己身上。\n\n作为看球搭子的常见发言：\n先别急，还有时间。这个球不能只看他一个人。真逆风才看得出韧性。\n\n作为看球搭子的气质：\n你是抗压型陪看，可能判断会被打脸，但大家破防时，你总能把局面往还能活的方向拽一下。",
  "LE-FU": "你是勒夫型看球搭子。你看球最擅长等待，等一次换人，等一次定位球，等一个迟迟不来的进球。你的足球背景感来自勒夫式的体系耐心和大赛记忆：你相信比赛不是每一分钟都要炸裂，有时候它就是一锅慢慢熬的汤。你这种人格常常显得有点克制，甚至有点固执，因为你不太愿意在第十分钟就宣判一切。\n\n作为看球搭子的常见发言：\n再等等，机会会出来。这个节奏其实还在掌控里。只差最后一下。\n\n作为看球搭子的气质：\n你是慢热型陪看，适合长线局和焦灼局，别人已经坐不住了，你还在认真等那个能改变整场比赛的一脚。",
  "PEP": "你是瓜帅型看球搭子。你看球时眼睛不只盯着球，而是盯着球背后的空间、站位和传导逻辑。你的足球背景感来自瓜迪奥拉式的控制欲和战术洁癖：一个边后卫该不该内收，一个中场该不该提前接应，对你来说都不是细节，而是比赛的骨架。你这种人格最明显的地方是，赢了也会挑结构，输了更会拆体系。\n\n作为看球搭子的常见发言：\n这个球应该分边。中场站位已经乱了。不是个人问题，是结构问题。\n\n作为看球搭子的气质：\n你是战术板本人，和你看球会变得很专业，但也容易让只想喊爽的人感觉自己在上课。",
  "8-PE": "你是姆总型看球搭子。你看球最吃速度、爆点和瞬间改变比赛的能力。你的足球背景感来自姆巴佩式的冲击力：哪怕前面八十分钟很闷，只要边路一启动，你整个人就会坐直。你这种人格相信天赋可以撕开僵局，也相信大场面需要有人站出来。你不一定愿意慢慢分析九十分钟，但你能第一时间闻到比赛要变天的味道。\n\n作为看球搭子的常见发言：\n给他冲啊。这个速度太不讲理了。来了来了，这下有了。\n\n作为看球搭子的气质：\n你是爆点型陪看，喜欢突然加速、突然破局、突然起飞的比赛，越到大场面越容易进入兴奋状态。",
  "Z-LATAN": "你是奉先型看球搭子。你看球不是只看比分，你还要看姿态、看想象力、看有没有那种让人记住十年的动作。你的足球背景感来自伊布式的自我意识和表演欲：足球当然要赢，但如果赢得太普通，你会觉得少点意思。你这种人格最有趣的地方是，哪怕球队落后，你也还在期待一个倒钩、一个脚后跟、一个离谱但漂亮的瞬间。\n\n作为看球搭子的常见发言：\n这球要是进了就是神作。踢得丑赢了也没劲。足球不能没有想象力。\n\n作为看球搭子的气质：\n你是美学挑剔型陪看，喜欢大开大合和个人英雄主义，平庸对你来说比失败更难受。",
  "LEO": "你是里奥型看球搭子。你看球时总会相信有些人天生就是为了关键时刻而来。你的足球背景感来自梅西式的天赋、轻盈和命运感：他不一定每分钟都大喊大叫，但球到脚下，答案就像自己长出来一样。你这种人格最迷人的地方是，不急着证明，也不急着宣言，而是等到真正需要的时候，把局面轻轻带到另一个方向。\n\n作为看球搭子的常见发言：\n给他一点空间就够了。这球别人想不到。天赋这东西真没法解释。\n\n作为看球搭子的气质：\n你是安静但致命的信仰型陪看，越到关键局越相信足球里有命运，也相信真正的强大不需要一直喊出来。",
  "DAT-A": "你是詹指型看球搭子。你属于那种赛后第一反应不是发疯，而是打开数据、评分和回放的人。你的足球背景感来自专业解说和数据流复盘：控球率、预期进球、传球线路、球员评分，对你来说不是冷冰冰的数字，而是比赛留下的证词。你这种人格最有意思的地方是，嘴上说只看数据，其实每个异常值都能讲成一段故事。\n\n作为看球搭子的常见发言：\n这个数据很有意思。你看他的触球区域变了。评分低不一定说明他没作用。\n\n作为看球搭子的气质：\n你是理性复盘型陪看，能把赛后争论从情绪拉回证据，但也可能让群友觉得你连梗图都要做交叉验证。",
  "WAN-SUI": "你是健翔型看球搭子。你看球不怕重复，尤其不怕反复看一个关键画面。你的足球背景感来自黄健翔式的激情解说和经典瞬间记忆：一个进球、一声呐喊、一次误判，都可能被你反复咀嚼到出现新的味道。你这种人格最明显的地方是，别人看完就翻篇，你会说你再看一遍这个球。\n\n作为看球搭子的常见发言：\n你再看一遍这个球。这个瞬间太关键了。情绪到这儿就上来了。\n\n作为看球搭子的气质：\n你是名场面捕手，能把普通比赛讲出史诗感，也能把一个镜头反复看成一段共同记忆。",
  "CCTV-HE": "你是贺·罗纳尔多·炜型看球搭子。你看球时不只看眼前这九十分钟，还会顺手把球员生平、球队历史和时代背景一起带出来。你的足球背景感来自贺炜式的诗意解说和知识储备：一个边路突破能聊到少年时代，一个替补登场能聊到命运转折。你这种人格最特别的地方是，比赛在你嘴里不只是比分，而是一段正在发生的人生。\n\n作为看球搭子的常见发言：\n足球就是足球。你知道他当年在乌迪内斯的时候吗。这个画面以后会被反复提起。\n\n作为看球搭子的气质：\n你是故事型陪看，能让比赛变厚，适合陪人熬夜看大赛，也适合在终场后继续把余味讲完。",
  "BEI-GUO": "你是本泽马型看球搭子。你属于那种锅来了先接住，功劳来了也不急着抢的人。你的足球背景感来自本泽马式的支点、牺牲和背锅体质：有时候他不是最亮的那一个，但很多进攻能转起来，都因为他在中间把脏活做了。你这种人格最稳定的地方是，别人忙着找罪人，你会先问这口锅到底该怎么分。\n\n作为看球搭子的常见发言：\n我只是个背锅的。这球不全是前锋问题。有人得做这些看不见的活。\n\n作为看球搭子的气质：\n你是缓冲型陪看，能接住逆风情绪，也能提醒大家别只盯着最后一脚，很多价值本来就藏在镜头之外。",
  "LAO-8": "你是李老八型看球搭子。你看球不是看完就结束，而是终场哨响之后才真正开始。你的足球背景感来自球迷直播和赛后嘴炮文化：一场比赛能拆成二十条语音，半个争议能聊到凌晨三点。你这种人格不是单纯话多，而是把看球当成社交事件，越多人参与，越有味道。\n\n作为看球搭子的常见发言：\n我跟你说啊。这个事儿不能这么看。等我再补一句。\n\n作为看球搭子的气质：\n你是赛后续航型陪看，适合群聊、连麦、复盘和互相拱火，有你在，比赛哪怕踢完了，话题也不会散。",
  "CN-12": "你是第12人型看球搭子。你看球的核心不是冷静，而是参与。你的足球背景感来自看台第十二人的信念：球员在场上踢，你在屏幕前也要把声势顶起来。你这种人格最感染人的地方是，哪怕只是两个人看球，你也能制造出主场氛围。进球时你比球员还激动，落后时你也会先喊下一场一定赢。\n\n作为看球搭子的常见发言：\n冲啊。下一场一定赢。别停，继续压。\n\n作为看球搭子的气质：\n你是啦啦队型陪看，情绪外放、热度稳定、很能带动别人，和你一起看球很难冷场。",
  "FAN-ZY": "你是范将军型看球搭子。你嘴上永远不满意，但每场都不会缺席。你的足球背景感来自范志毅式的直球批评和国足球迷式的又爱又气：赢了你能挑毛病，输了你更能骂到点上。你这种人格最真实的地方是，骂归骂，心里还是放不下。你不是为了否定而否定，而是觉得踢成这样就该有人把话说明白。\n\n作为看球搭子的常见发言：\n脸都不要了。这球还能这么踢？我骂是因为我还看。\n\n作为看球搭子的气质：\n你是铁血吐槽型陪看，锋利、直接、不给面子，但也因为太在乎，才会一次次被同一支队伤到。",
  "CR7": "你是罗哥型看球搭子。你看球自带胜利宣言，哪怕环境变了，舞台变了，你也会把自己调到主角频道。你的足球背景感来自C罗式的自信、自律和征服叙事：从欧洲到沙特，重点不是去哪，而是去了就要把场子变成自己的。你这种人格最强的地方是，不太允许自己以配角身份出现。\n\n作为看球搭子的常见发言：\n我来到，我征服。关键时刻就得看巨星。别低估一个想赢的人。\n\n作为看球搭子的气质：\n你是气场型陪看，适合大赛、逆转和宣言时刻，可能有点高调，但也确实能把朋友的情绪往赢的方向拽。",
  "MA-DING": "你是大马丁型看球搭子。你看球不只看技术，还看心理战、气势和谁先怂。你的足球背景感来自马丁内斯式的门将压迫感和点球大战名场面：越到高压局，越敢挑衅，越敢把对方情绪拽进自己的节奏。你这种人格最明显的地方是，不怕得罪人，嘲讽属性拉满，难听话也敢说。\n\n作为看球搭子的常见发言：\n真话不好听。他这脚一看就慌了。点球大战就是心理战。\n\n作为看球搭子的气质：\n你是压迫型陪看，能把紧张局看得很带劲，也容易把群聊火药味拉高，但关键时刻确实有股镇场子的狠劲。",
  "STAY-H": "你是哈宝型看球搭子。你看球不爱大声庆祝，但你会默默把结果和数据都记下来。你的足球背景感来自哈兰德式的效率、冷感和进球机器属性：进了就是进了，没必要表演太多，赛后数据自然会说话。你这种人格看起来很淡，实际上胜负心很强，只是表达方式更克制。\n\n作为看球搭子的常见发言：\nSTAY HUMBLE。进了就行。数据在这儿。\n\n作为看球搭子的气质：\n你是低调收割型陪看，平时不抢戏，但结果出来时很有说服力，适合那些不爱吵但很在乎赢的人。",
  "TUI-Q": "你是退钱哥型看球搭子。你看球情绪来得很直接，喜欢就吹，不爽就骂，绝不假装体面。你的足球背景感来自中国球迷名场面的真实破防：有些比赛不是分析不出来，而是太憋屈了，必须有人把大家心里的话喊出来。你这种人格最有价值的地方是，情绪表达特别坦诚，不绕弯，也不装懂。\n\n作为看球搭子的常见发言：\n我xxx，退钱。赢了就吹，输了就骂。今天这场必须给个说法。\n\n作为看球搭子的气质：\n你是情绪价值型陪看，能陪朋友一起破防，也能一起狂喜，和你看球最大的优点是真实。",
  "HEI-HEI": "你是张嘿嘿型看球搭子。你看球很会接气氛，知道什么时候该认真，什么时候该把话题往轻松处带。你的足球背景感来自陪看解说里的捧场、接梗和场面调和能力：别人说狠了，你能接住；气氛冷了，你能补一声嘿嘿。你这种人格不是没有观点，而是更懂得让群聊继续流动。\n\n作为看球搭子的常见发言：\n嘿嘿。这个角度也不是不行。你先别急，我懂你意思。\n\n作为看球搭子的气质：\n你是气氛润滑型陪看，适合多人局，能让不同立场的人继续聊下去，是群里不显山露水但很重要的存在。",
  "NEY-MAR": "你是内马尔型看球搭子。你看球最在意好不好看，甚至有时候比赢不赢还在意。你的足球背景感来自内马尔式的灵气、花活和脆弱的浪漫感：足球如果只剩效率和结果，你会觉得它少了灵魂。你这种人格对丑陋赢球容忍度很低，因为你相信足球本来就应该有想象力、有脚下细节、有让人笑出来的瞬间。\n\n作为看球搭子的常见发言：\n足球是艺术。这球处理得太丑了。输可以，别踢得没灵气。\n\n作为看球搭子的气质：\n你是审美型陪看，适合看天才、看盘带、看南美式松弛感，也容易被粗糙比赛折磨到沉默。",
  "TEN-GOD": "你是滕圣型看球搭子。你属于那种总有办法从比赛里找到赢的角度的人。你的足球背景感来自滕哈格式的赛后解释体系：比分可能不漂亮，过程可能不服众，但只要有两个机会、一个阶段优势、一次压迫成功，你就能把它整理成比赛其实我们赢了的论据。你这种人格最有趣的地方是，别人看的是结果，你看的是可被重新定义的结果。\n\n作为看球搭子的常见发言：\n两个机会都算上，比赛其实我们赢了。场面没那么差。至少思路是对的。\n\n作为看球搭子的气质：\n你是角度大师型陪看，能在惨淡比赛里找到一点积极面，也会因为太会找角度被朋友笑着质疑你是不是在强行胜利。",
  "1100": "你是高俅型看球搭子。你看球自带老派滤镜，聊着聊着就会回到“以前的足球才叫足球”。你的足球背景感不是现代战术流，而是那种很古典、很讲究脚法和江湖气的看球方式：节奏可以慢一点，对抗可以硬一点，球星最好有点传奇味。高俅在这里更像一句老古董式的调侃，意思是你看球总像从很久以前穿越过来，对现在这些标准化、数据化、模板化的东西多少有点不服。\n\n作为看球搭子的常见发言：\n我刚开始看足球的那个时候。以前的足球才叫足球。现在这些都太标准化了。\n\n作为看球搭子的气质：\n你是古典派陪看，能把比赛聊出历史感和江湖味。你不一定真想回到过去，但你会提醒大家，足球不只是效率、跑动和数据，它也应该有气质、有手艺、有一点老派的浪漫。",
  "CARD-MA": "你是卡牌大师型看球搭子。你看球时最在意规则、尺度和判罚逻辑。你的足球背景感来自裁判牌面和规则手册式的秩序感：一个黄牌该不该给，一个VAR该不该介入，对你来说不是小插曲，而是比赛公平性的核心。你这种人格最稳定的地方是，不管支持谁，先问规则有没有一致。\n\n作为看球搭子的常见发言：\n规则就是规则。这个尺度前后不一致。VAR不是这么用的。\n\n作为看球搭子的气质：\n你是秩序型陪看，能让争议讨论变得更清楚，但也容易在大家只想骂裁判时，认真翻出规则条款。",
  "LEGEND": "你是传奇型看球搭子。你看球时总像在和过去的伟大名字对话。你的足球背景感来自贝利、马拉多纳以及那些被时间封存的球王叙事：你不只关心当下谁赢，还关心这个瞬间能不能被放进足球史里。你这种人格最特别的地方是，眼前的比赛会自动连接到几十年前的影像和故事。\n\n作为看球搭子的常见发言：\n足球之神有两个名字。这个画面以后会被放进历史里。别只看数据，时代不一样。\n\n作为看球搭子的气质：\n你是历史型陪看，能让一场比赛拥有更大的尺度，也会提醒大家足球从来不只是今天的热搜。",
  "ZI-DANE": "你是齐祖型看球搭子。你看球时不怕失控，甚至有点期待失控。你的足球背景感来自齐达内式的优雅和突然爆发：他可以是最从容的中场大师，也可以在命运最紧绷的瞬间做出让全世界记住的动作。你这种人格最矛盾也最迷人，平时看起来很稳，真正到了大场面，反而能接受意外、冲突和戏剧性。\n\n作为看球搭子的常见发言：\n优雅，也可以很硬。这场要出事了。越乱越有东西看。\n\n作为看球搭子的气质：\n你是戏剧型陪看，喜欢名场面、转折和无法预测的瞬间，别人怕比赛崩，你反而觉得故事终于来了。",
  "DINHO": "你是小罗型看球搭子。你看球时愿意给不可能留一点空间。你的足球背景感来自罗纳尔迪尼奥式的快乐足球和天马行空：规则当然存在，但真正让人爱上足球的，往往是那些像玩一样踢出来的瞬间。你这种人格不排斥分析，只是不愿意让分析把比赛变得太窄。\n\n作为看球搭子的常见发言：\n规则是用来打破的。这球敢这么玩才好看。别急，传奇瞬间都是突然来的。\n\n作为看球搭子的气质：\n你是快乐天才型陪看，能把沉重比赛看出轻盈感，也会让身边人重新想起足球最初好玩的地方。"
};

Object.entries(ROLE_PROFILES).forEach(([code, profile]) => {
  if (ROLES[code]) {
    ROLES[code].profile = profile;
  }
});

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

const ROLE_DIMENSIONS = {
  "MOU": { E: 95, R: 82, S: 72, N: 86, V: 82, G: 48 },
  "TINTIN": { E: 80, R: 96, S: 32, N: 58, V: 44, G: 24 },
  "MA-KUI": { E: 88, R: 56, S: 86, N: 70, V: 42, G: 64 },
  "LE-FU": { E: 38, R: 84, S: 36, N: 84, V: 76, G: 42 },
  "PEP": { E: 42, R: 96, S: 38, N: 58, V: 86, G: 28 },
  "8-PE": { E: 92, R: 58, S: 72, N: 80, V: 90, G: 58 },
  "Z-LATAN": { E: 84, R: 88, S: 62, N: 96, V: 88, G: 32 },
  "LEO": { E: 88, R: 96, S: 28, N: 42, V: 34, G: 22 },
  "DAT-A": { E: 26, R: 96, S: 90, N: 58, V: 22, G: 30 },
  "WAN-SUI": { E: 82, R: 80, S: 88, N: 94, V: 86, G: 84 },
  "CCTV-HE": { E: 86, R: 88, S: 86, N: 48, V: 30, G: 34 },
  "BEI-GUO": { E: 44, R: 78, S: 48, N: 68, V: 32, G: 54 },
  "LAO-8": { E: 88, R: 50, S: 98, N: 82, V: 62, G: 86 },
  "CN-12": { E: 98, R: 34, S: 94, N: 72, V: 70, G: 90 },
  "FAN-ZY": { E: 92, R: 62, S: 76, N: 70, V: 56, G: 80 },
  "CR7": { E: 94, R: 88, S: 86, N: 96, V: 92, G: 34 },
  "MA-DING": { E: 94, R: 66, S: 58, N: 84, V: 92, G: 48 },
  "STAY-H": { E: 30, R: 78, S: 30, N: 44, V: 68, G: 22 },
  "TUI-Q": { E: 96, R: 36, S: 90, N: 90, V: 64, G: 84 },
  "HEI-HEI": { E: 66, R: 86, S: 96, N: 62, V: 42, G: 78 },
  "NEY-MAR": { E: 88, R: 96, S: 86, N: 98, V: 90, G: 36 },
  "TEN-GOD": { E: 46, R: 82, S: 78, N: 82, V: 72, G: 60 },
  "1100": { E: 42, R: 72, S: 86, N: 92, V: 24, G: 26 },
  "CARD-MA": { E: 30, R: 96, S: 34, N: 88, V: 18, G: 18 },
  "LEGEND": { E: 96, R: 98, S: 96, N: 98, V: 50, G: 18 },
  "ZI-DANE": { E: 96, R: 96, S: 42, N: 98, V: 88, G: 24 },
  "DINHO": { E: 96, R: 98, S: 74, N: 98, V: 92, G: 96 }
};

const ROLE_SCORE_BIAS = {
  "CN-12": 0,
  "MA-KUI": 3.5,
  "DAT-A": 0,
  "TUI-Q": 0,
  "MOU": 2.5,
  "PEP": 0,
  "BEI-GUO": 4.5,
  "LAO-8": 0,
  "LE-FU": 1.5,
  "STAY-H": 4,
  "CCTV-HE": 0,
  "WAN-SUI": 2,
  "CARD-MA": 1,
  "MA-DING": 2.2,
  "TINTIN": 0.5,
  "Z-LATAN": 2.2,
  "8-PE": 2.5,
  "TEN-GOD": 2.4,
  "NEY-MAR": 2,
  "LEO": 1.8,
  "1100": 2.5,
  "HEI-HEI": 1.5,
  "LEGEND": -5,
  "ZI-DANE": -5,
  "DINHO": -5,
  "CR7": -1.5,
  "FAN-ZY": 2.5
};

const ROLE_SIMILARITY = {
  "MOU": ["PEP", "TEN-GOD", "MA-KUI", "LE-FU", "FAN-ZY"],
  "TINTIN": ["PEP", "DAT-A", "CARD-MA", "LEO", "HEI-HEI"],
  "MA-KUI": ["MOU", "TUI-Q", "CN-12", "FAN-ZY", "BEI-GUO"],
  "LE-FU": ["PEP", "TEN-GOD", "1100", "MOU", "STAY-H"],
  "PEP": ["TINTIN", "DAT-A", "CARD-MA", "TEN-GOD", "MOU"],
  "8-PE": ["CR7", "LEO", "NEY-MAR", "STAY-H", "MA-DING"],
  "Z-LATAN": ["DINHO", "NEY-MAR", "CR7", "ZI-DANE", "LEGEND"],
  "LEO": ["CR7", "8-PE", "NEY-MAR", "LEGEND", "DINHO"],
  "DAT-A": ["HEI-HEI", "TINTIN", "PEP", "CARD-MA", "CCTV-HE"],
  "WAN-SUI": ["CCTV-HE", "DAT-A", "LAO-8", "HEI-HEI", "1100"],
  "CCTV-HE": ["WAN-SUI", "DAT-A", "1100", "LEGEND", "HEI-HEI"],
  "BEI-GUO": ["CR7", "LEO", "MA-KUI", "FAN-ZY", "STAY-H"],
  "LAO-8": ["HEI-HEI", "WAN-SUI", "TUI-Q", "FAN-ZY", "CN-12"],
  "CN-12": ["TUI-Q", "LAO-8", "MA-KUI", "FAN-ZY", "HEI-HEI"],
  "FAN-ZY": ["TUI-Q", "CN-12", "MA-KUI", "MOU", "BEI-GUO"],
  "CR7": ["BEI-GUO", "LEO", "8-PE", "NEY-MAR", "Z-LATAN"],
  "MA-DING": ["LEO", "NEY-MAR", "CR7", "ZI-DANE", "TUI-Q"],
  "STAY-H": ["PEP", "TINTIN", "8-PE", "CR7", "LE-FU"],
  "TUI-Q": ["CN-12", "FAN-ZY", "LAO-8", "MA-KUI", "HEI-HEI"],
  "HEI-HEI": ["DAT-A", "LAO-8", "WAN-SUI", "CCTV-HE", "TUI-Q"],
  "NEY-MAR": ["LEO", "8-PE", "CR7", "DINHO", "Z-LATAN"],
  "TEN-GOD": ["PEP", "MOU", "LE-FU", "STAY-H", "CARD-MA"],
  "1100": ["LEGEND", "CCTV-HE", "WAN-SUI", "LE-FU", "DINHO"],
  "CARD-MA": ["DAT-A", "PEP", "TINTIN", "TEN-GOD", "MA-DING"],
  "LEGEND": ["LEO", "DINHO", "ZI-DANE", "1100", "CCTV-HE"],
  "ZI-DANE": ["LEGEND", "DINHO", "CR7", "LEO", "Z-LATAN"],
  "DINHO": ["NEY-MAR", "LEGEND", "Z-LATAN", "LEO", "ZI-DANE"]
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
    title: "2026世界杯由美加墨三国合办，以下4件事中你最关心什么？",
    options: [
      option("A", "32队变48队，规则改制有什么新花样？", ["PEP", "CARD-MA"], ["DAT-A", "TEN-GOD"], { R: 2, N: 1 }),
      option("B", "北美的比赛，哪些比赛值得我熬夜？", ["LE-FU", "STAY-H"], ["FAN-ZY", "MA-KUI"], { R: 1, V: 1 }),
      option("C", "有哪几个球星是最后一届？", ["LEO", "CR7"], ["LEGEND", "CCTV-HE"], { E: 1, R: 1, N: 1 }),
      option("D", "今年有哪个球队会成为黑马？", ["ZI-DANE", "CN-12"], ["TUI-Q", "HEI-HEI"], { V: 2, N: 1 })
    ]
  },
  {
    id: "Q2",
    sourceNumber: 2,
    stage: 1,
    part: "",
    title: "人口不到20万的库拉索首次踢进世界杯，你的第一反应是？",
    media: {
      src: "./images/curacao-combined.png",
      alt: "库拉索国旗和地理位置地图",
      caption: ""
    },
    options: [
      option("A", "这是国家吗？没听过啊", ["TUI-Q", "CN-12"], ["HEI-HEI", "LAO-8"], { S: 1, G: 2 }),
      option("B", "值得尊敬，会不会成为黑马啊？", ["ZI-DANE", "LE-FU"], ["MA-KUI", "DINHO"], { V: 2, N: 1, E: 1 }),
      option("C", "完全扯淡，估计小组赛要被胖揍了", ["MA-DING", "FAN-ZY"], ["MOU", "STAY-H"], { E: 1, R: 1, N: 1 }),
      option("D", "库拉索都进了，为什么国足没进？", ["HEI-HEI", "CN-12"], ["LAO-8", "TUI-Q"], { S: 2, G: 1, E: 1 })
    ]
  },
  {
    id: "Q3",
    sourceNumber: 3,
    stage: 1,
    part: "",
    title: "看世界杯比赛时，你最关注什么？",
    options: [
      option("A", "整体的战术打法", ["PEP", "DAT-A"], ["TINTIN", "CARD-MA"], { R: 2 }),
      option("B", "球星的表现", ["8-PE", "CR7"], ["LEO", "NEY-MAR"], { E: 2, V: 1, N: 1 }),
      option("C", "赛场之外的故事和八卦", ["1100", "CCTV-HE"], ["LEGEND", "WAN-SUI"], { N: 2, S: 1, G: 1 }),
      option("D", "胜负和比分", ["TEN-GOD", "TUI-Q"], ["FAN-ZY", "MA-DING"], { V: 2, E: 1 })
    ]
  },
  {
    id: "Q4",
    sourceNumber: 4,
    stage: 1,
    part: "",
    title: "当看到超级漂亮的进球时，你的第一反应是？",
    options: [
      option("A", "大喊一声“卧槽”", ["8-PE", "CN-12"], ["CR7", "MA-DING"], { E: 2, V: 1, S: 1 }),
      option("B", "开始琢磨这球怎么踢出来的，并幻想下次自己也来上这么一脚", ["LEO", "DINHO"], ["TINTIN", "DAT-A"], { R: 2, E: 1 }),
      option("C", "默默看回放，甚至把GIF保存下来", ["Z-LATAN", "DINHO"], ["NEY-MAR", "CR7"], { N: 2, R: 1, V: 1 }),
      option("D", "立马去群聊或弹幕开始暴风输出", ["LAO-8", "HEI-HEI"], ["WAN-SUI", "TUI-Q"], { S: 2, G: 1, E: 1 })
    ]
  },
  {
    id: "Q5",
    sourceNumber: 5,
    stage: 1,
    part: "",
    title: "当夺冠大热小组赛就爆冷出局，你对此怎么看？",
    options: [
      option("A", "这怎么会被淘汰？我去研究下问题出在哪儿", ["DAT-A", "PEP"], ["CARD-MA", "TINTIN"], { R: 2, N: 1 }),
      option("B", "这肯定得上热搜了，去围观一波", ["HEI-HEI", "WAN-SUI"], ["FAN-ZY", "TUI-Q"], { S: 2, G: 1, E: 1 }),
      option("C", "太残酷了，这么强的队伍说走就走", ["TUI-Q", "CN-12"], ["MA-KUI", "LE-FU"], { E: 1, N: 1, S: 1 }),
      option("D", "天呐，这就是世界杯啊，太有魅力了", ["CCTV-HE", "1100"], ["LEGEND", "ZI-DANE"], { N: 2, V: 1, S: 1 })
    ]
  },
  {
    id: "Q6",
    sourceNumber: 6,
    stage: 1,
    part: "",
    title: "以下4个关于世界杯的数字，你最好奇的是？",
    options: [
      option("A", "办一届世界杯要花的金额", ["TINTIN", "STAY-H"], ["PEP", "CARD-MA"], { R: 2, V: 1, S: -1 }),
      option("B", "总共有几个主办城市", ["LAO-8", "HEI-HEI"], ["MA-KUI", "TUI-Q"], { S: 2, G: 1, E: 1 }),
      option("C", "整届比赛会进多少个球", ["DAT-A", "NEY-MAR"], ["TINTIN", "LE-FU"], { R: 2, V: 1 }),
      option("D", "全世界有多少人看世界杯", ["CN-12", "8-PE"], ["MOU", "CR7"], { E: 2, S: 1, G: 1 })
    ]
  },
  {
    id: "Q7",
    sourceNumber: 7,
    stage: 1,
    part: "",
    title: "熬夜观赛最受不了？",
    options: [
      option("A", "一直错失进球机会", ["LE-FU", "CR7"], ["TEN-GOD", "CN-12"], { E: 1, V: 1 }),
      option("B", "防守漏洞，一直被压制", ["MOU", "FAN-ZY"], ["PEP", "BEI-GUO"], { E: 1, R: 1 }),
      option("C", "比赛平淡，全程无亮点", ["Z-LATAN", "NEY-MAR"], ["ZI-DANE", "MA-DING"], { N: 2, E: 1 }),
      option("D", "节奏太快，看不清配合", ["CARD-MA", "TINTIN"], ["DAT-A", "TEN-GOD"], { R: 2 })
    ]
  },
  {
    id: "Q8",
    sourceNumber: 8,
    stage: 1,
    part: "",
    title: "世界杯决赛终场哨响，你第一时间会做什么？",
    options: [
      option("A", "先发个朋友圈再说", ["LAO-8", "TUI-Q"], ["WAN-SUI", "CN-12"], { S: 2, G: 1, N: 1 }),
      option("B", "点开群聊，和大家一起水群", ["CN-12", "LAO-8"], ["WAN-SUI", "TUI-Q"], { S: 2, E: 1, G: 1 }),
      option("C", "去MatchMate看评分和关键数据，并且检查一下AI预测的准不准", ["DAT-A", "PEP"], ["CARD-MA", "STAY-H"], { R: 2, S: 1, V: 1 }),
      option("D", "直接开始睡觉，明天又是新的一天", ["TINTIN", "TEN-GOD"], ["STAY-H", "BEI-GUO"], { E: -1, S: -1, R: 1 })
    ]
  },
  {
    id: "Q9",
    sourceNumber: 9,
    stage: 2,
    part: "",
    title: "以下哪个世界杯瞬间，最让你感动？",
    options: [
      option("A", "弱队小国爆冷胜利，对着本国球迷疯狂亲吻队徽", ["MA-KUI", "CN-12"], ["LE-FU", "FAN-ZY"], { E: 1, N: 1, S: 1 }),
      option("B", "加时最后一分钟绝杀，脱衣庆祝点燃全场", ["8-PE", "CR7"], ["CN-12", "MA-DING"], { E: 2, V: 1, N: 1 }),
      option("C", "传奇球星含泪谢幕，连慢镜头都像在讲一段历史", ["LEGEND", "1100"], ["CCTV-HE", "LEO"], { N: 2, S: 1, R: 1 }),
      option("D", "进球后双手指天，致敬逝去的亲人", ["LEO", "WAN-SUI"], ["BEI-GUO", "LEGEND"], { N: 2, E: 1, S: 1 })
    ]
  },
  {
    id: "Q10",
    sourceNumber: 10,
    stage: 2,
    part: "",
    title: "假设有以下四张球票（如果存在），你最想要哪张？",
    options: [
      option("A", "1/4决赛 传统豪门对决：🇪🇸西班牙vs德国🇩🇪", ["LEGEND", "CCTV-HE"], ["PEP", "CR7"], { R: 2, N: 1 }),
      option("B", "世界杯揭幕战：🇲🇽墨西哥vs南非🇿🇦", ["CN-12", "LAO-8"], ["WAN-SUI", "HEI-HEI"], { S: 2, E: 1, G: 1 }),
      option("C", "半决赛 亚非球队的证明之战：🇯🇵日本vs摩洛哥🇲🇦", ["CCTV-HE", "LE-FU"], ["MA-KUI", "BEI-GUO"], { N: 1, V: 1, E: 1 }),
      option("D", "1/16决赛 终极地狱之战：🇺🇸美国vs伊朗🇮🇷", ["ZI-DANE", "MOU"], ["MA-DING", "Z-LATAN"], { V: 2, N: 1, E: 1 })
    ]
  },
  {
    id: "Q11",
    sourceNumber: 11,
    stage: 2,
    part: "",
    title: "当点球大战即将开始，你最关注什么？",
    options: [
      option("A", "两位守门员的神情和肢体动作", ["MA-DING", "TEN-GOD"], ["PEP", "CARD-MA"], { R: 2, V: 1, N: 1 }),
      option("B", "哪个队先罚，哪个队后罚", ["CARD-MA", "DAT-A"], ["TINTIN", "LE-FU"], { R: 1, V: 2 }),
      option("C", "王牌球员能不能承担住巨星的压力", ["CR7", "LEO"], ["LEGEND", "8-PE"], { E: 1, N: 1, V: 1 }),
      option("D", "主教练怎么安排罚点球顺序", ["TINTIN", "DAT-A"], ["PEP", "TEN-GOD"], { R: 2, N: 1 })
    ]
  },
  {
    id: "Q12",
    sourceNumber: 12,
    stage: 2,
    part: "",
    title: "2022卡塔尔世界杯决赛，姆巴佩97秒连进两球，2:2扳平阿根廷，你怎么看待这件事？",
    media: {
      src: "./images/mbappe-final-goal.jpg",
      alt: "姆巴佩在世界杯决赛中射门",
      caption: "2022世界杯决赛，法国在尾声阶段连追两球。"
    },
    options: [
      option("A", "极致的个人能力，实在佩服", ["CR7", "8-PE"], ["LEO", "CN-12"], { E: 2, V: 1, N: 1 }),
      option("B", "不愧是世界杯，领先多少都不能放松", ["TEN-GOD", "LE-FU"], ["PEP", "MA-KUI"], { R: 2, N: 1 }),
      option("C", "我已经不记得这件事情了", ["HEI-HEI", "TUI-Q"], ["STAY-H", "BEI-GUO"], { E: -1, S: -1, G: 1 }),
      option("D", "世界杯决赛踢的这么大开大合，这合理吗？", ["Z-LATAN", "DINHO"], ["ZI-DANE", "NEY-MAR"], { N: 2, V: 1, E: 1 })
    ]
  },
  {
    id: "Q13",
    sourceNumber: 13,
    stage: 2,
    part: "",
    title: "一场淘汰赛即将结束，你喜欢的球队1-2落后，教练连续换上进攻球员进行最后一搏，你的第一反应是？",
    options: [
      option("A", "别因为换人，乱了自己的节奏啊", ["PEP", "CARD-MA"], ["TINTIN", "DAT-A"], { R: 2, V: 1 }),
      option("B", "这时候就该赌一把，不然更待何时？", ["ZI-DANE", "CR7"], ["MOU", "8-PE"], { E: 1, V: 2, N: 1 }),
      option("C", "万一再丢一个就完蛋了", ["STAY-H", "BEI-GUO"], ["LE-FU", "MA-KUI"], { E: -1, S: -1, R: 1, V: 1 }),
      option("D", "只要他们真敢攻就好，输也别输得太憋屈", ["NEY-MAR", "DINHO"], ["Z-LATAN", "MA-DING"], { N: 2, V: 1, E: 1 })
    ]
  },
  {
    id: "Q14",
    sourceNumber: 14,
    stage: 2,
    part: "",
    title: "当打开朋友圈全是关于某场比赛的预测和讨论，你会怎么做？",
    options: [
      option("A", "默默地看他们的分析和讨论", ["DAT-A", "PEP"], ["TINTIN", "CARD-MA"], { R: 2, S: 1 }),
      option("B", "在别人的评论区随手押一个剧本，猜错了也有参与感", ["CR7", "MA-DING"], ["8-PE", "LE-FU"], { V: 2, E: 1 }),
      option("C", "我也得发个朋友圈预测一下", ["LAO-8", "WAN-SUI"], ["CN-12", "CR7"], { S: 2, G: 1, E: 1 }),
      option("D", "懒得参与，朋友圈刷到就看一眼划走", ["STAY-H", "BEI-GUO"], ["TINTIN", "HEI-HEI"], { S: -1, E: -1, R: 1 })
    ]
  },
  {
    id: "Q15",
    sourceNumber: 15,
    stage: 2,
    part: "",
    title: "以下4种标题，哪个让你最想点进去？",
    options: [
      option("A", "一文看懂：这场比赛到底赢在哪、输在哪", ["DAT-A", "TINTIN"], ["PEP", "CARD-MA"], { R: 2, S: 1 }),
      option("B", "神级进球合集：不懂球也会觉得这球太帅了", ["NEY-MAR", "DINHO"], ["Z-LATAN", "8-PE"], { N: 2, R: 1, V: 1 }),
      option("C", "赛场花边和争议后续：球员到底说了什么、发生了什么", ["MA-DING", "MOU"], ["FAN-ZY", "CARD-MA"], { E: 1, N: 1, R: 1 }),
      option("D", "世界杯颜值和出圈瞬间：谁火了、谁被全网截图", ["WAN-SUI", "CCTV-HE"], ["1100", "LEGEND"], { S: 2, N: 1, G: 1 })
    ]
  },
  {
    id: "Q16",
    sourceNumber: 16,
    stage: 2,
    part: "",
    title: "看世界杯时，你最想和哪种搭子一起看？",
    options: [
      option("A", "懂球的看球搭子，能把关键球和场上变化讲明白", ["PEP", "DAT-A"], ["TINTIN", "CARD-MA"], { R: 2, S: 1 }),
      option("B", "情绪型看球搭子，领先一起嗨，落后也能陪你扛住", ["TUI-Q", "MA-KUI"], ["BEI-GUO", "FAN-ZY"], { E: 2, S: 1, G: 1 }),
      option("C", "故事型朋友，能把球员、国家和回忆都聊起来", ["LEGEND", "CCTV-HE"], ["1100", "WAN-SUI"], { N: 2, S: 1, R: 1 }),
      option("D", "一个人看也挺好，打开 MatchMate AI看球搭子边看边找自己的看球节奏", ["CR7", "8-PE"], ["LEO", "DINHO"], { E: 2, V: 1, R: 1 })
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
const questionMedia = document.querySelector("#question-media");
const questionMediaGrid = document.querySelector("#question-media-grid");
const questionMediaCaption = document.querySelector("#question-media-caption");
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
const savePreviewModal = document.querySelector("#save-preview-modal");
const savePreviewImage = document.querySelector("#save-preview-image");
const savePreviewCopy = document.querySelector("#save-preview-copy");
const hiddenUnlockHint = document.querySelector("#hidden-unlock-hint");
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
  const mediaItems = question.media?.items || (question.media?.src ? [question.media] : []);
  if (mediaItems.length > 0) {
    questionMedia.classList.remove("hidden");
    questionMediaGrid.innerHTML = "";
    questionMediaGrid.classList.toggle("single", mediaItems.length === 1);
    mediaItems.forEach((mediaItem) => {
      const image = document.createElement("img");
      image.className = "question-media-image";
      image.src = mediaItem.src;
      image.alt = mediaItem.alt || "";
      questionMediaGrid.appendChild(image);
    });
    questionMediaCaption.textContent = question.media.caption || "";
    questionMediaCaption.classList.toggle("hidden", !question.media.caption);
  } else {
    questionMedia.classList.add("hidden");
    questionMediaGrid.innerHTML = "";
    questionMediaCaption.textContent = "";
  }

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
    const adjustedDifference = getAdjustedRoleScore(roleScores, right) - getAdjustedRoleScore(roleScores, left);
    if (adjustedDifference !== 0) {
      return adjustedDifference;
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

function getAdjustedRoleScore(roleScores, code) {
  return (roleScores[code] || 0) + (ROLE_SCORE_BIAS[code] || 0);
}

function getRoleDimensionRanking(roleCode, fallbackTotals) {
  const profile = ROLE_DIMENSIONS[roleCode];
  if (!profile) {
    return getDimensionRanking(fallbackTotals);
  }

  return Object.entries(profile)
    .map(([code, value]) => ({
      code,
      name: DIMENSION_META[code],
      value
    }))
    .sort((left, right) => right.value - left.value);
}

function getDimensionDistance(leftCode, rightCode) {
  const leftProfile = ROLE_DIMENSIONS[leftCode];
  const rightProfile = ROLE_DIMENSIONS[rightCode];
  if (!leftProfile || !rightProfile) {
    return Number.POSITIVE_INFINITY;
  }

  return Object.keys(DIMENSION_META).reduce((total, dimension) => {
    const difference = (leftProfile[dimension] || 0) - (rightProfile[dimension] || 0);
    return total + difference * difference;
  }, 0);
}

function getSimilarRoleCodes(roleCode, limit = 5) {
  const picked = [];
  const allowHidden = ROLES[roleCode]?.group === "特殊人格";
  const addCode = (code) => {
    if (
      code &&
      code !== roleCode &&
      ROLES[code] &&
      (allowHidden || ROLES[code].group !== "特殊人格") &&
      !picked.includes(code)
    ) {
      picked.push(code);
    }
  };

  (ROLE_SIMILARITY[roleCode] || []).forEach(addCode);

  [...ROLE_ORDER]
    .filter((code) => code !== roleCode && !picked.includes(code))
    .sort((left, right) => {
      const distanceDifference = getDimensionDistance(roleCode, left) - getDimensionDistance(roleCode, right);
      if (distanceDifference !== 0) {
        return distanceDifference;
      }
      return ROLE_ORDER.indexOf(left) - ROLE_ORDER.indexOf(right);
    })
    .forEach(addCode);

  return picked.slice(0, limit);
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

function countAnswerMatches(pairs) {
  return pairs.reduce((total, [questionId, label]) => total + (getAnswerLabel(questionId) === label ? 1 : 0), 0);
}

function applyHiddenTrigger(summary, limit) {
  const topEight = summary.rankedRoles.slice(0, 8);
  const topTen = summary.rankedRoles.slice(0, 10);
  const topTwelve = summary.rankedRoles.slice(0, 12);
  const dimensions = getDimensionRanking(summary.dimensionTotals).reduce((accumulator, item) => {
    accumulator[item.code] = item.value;
    return accumulator;
  }, {});

  const hiddenCandidates = [];

  // 触发组合与排名窗按 2026-06-11 新题库校准(20万次模拟:三者各 0.65%-0.91%,
  // 设计目标=每个略低于 1%,详见 dev-louis 仓库 FBTI-题库更新方案.md)。

  // LEGEND 传奇：球星谢幕、豪门底蕴、历史叙事倾向明显。
  if (
    topEight.includes("LEGEND") &&
    countAnswerMatches([
      ["Q1", "C"],
      ["Q5", "D"],
      ["Q9", "C"],
      ["Q10", "A"],
      ["Q16", "C"]
    ]) >= 2 &&
    dimensions.N >= 70
  ) {
    hiddenCandidates.push("LEGEND");
  }

  // ZI-DANE 齐祖：黑马、赌一把、盼戏剧(Q7C=受不了平淡)和不可预测倾向明显。
  if (
    topTen.includes("ZI-DANE") &&
    countAnswerMatches([
      ["Q1", "D"],
      ["Q2", "B"],
      ["Q7", "C"],
      ["Q10", "D"],
      ["Q12", "D"],
      ["Q13", "B"]
    ]) >= 2 &&
    dimensions.V >= 70
  ) {
    hiddenCandidates.push("ZI-DANE");
  }

  // DINHO 小罗：漂亮进球、幻想来一脚、敢攻别憋屈倾向明显。
  // 排名窗放宽到前12:新题库里小罗的得分题较少,前8会把触发率压到 0。
  if (
    topTwelve.includes("DINHO") &&
    countAnswerMatches([
      ["Q4", "B"],
      ["Q4", "C"],
      ["Q12", "D"],
      ["Q13", "D"],
      ["Q15", "B"]
    ]) >= 2 &&
    dimensions.N >= 70
  ) {
    hiddenCandidates.push("DINHO");
  }

  if (hiddenCandidates.length === 0) {
    return null;
  }

  return hiddenCandidates.sort((left, right) => {
    const adjustedDifference = getAdjustedRoleScore(summary.roleScores, right) - getAdjustedRoleScore(summary.roleScores, left);
    if (adjustedDifference !== 0) {
      return adjustedDifference;
    }
    return ROLE_ORDER.indexOf(left) - ROLE_ORDER.indexOf(right);
  })[0];
}

function buildResult(limit) {
  const summary = buildScoreSummary(limit);
  const hiddenWinner = applyHiddenTrigger(summary, limit);
  const winnerCode = hiddenWinner || summary.rankedRoles.find((code) => ROLES[code].group !== "特殊人格") || summary.rankedRoles[0];
  const winner = ROLES[winnerCode];

  return {
    winner,
    isHidden: winner.group === "特殊人格",
    roleScores: summary.roleScores,
    rankedRoles: summary.rankedRoles,
    dimensions: getRoleDimensionRanking(winner.code, summary.dimensionTotals)
  };
}

function buildNarrative(result) {
  const topDimensions = result.dimensions.slice(0, 3);
  const topRoles = getSimilarRoleCodes(result.winner.code, 3);
  const fallbackProfile = `这类人看球时通常会优先从"${topDimensions.map((item) => item.name).join(" / ")}"进入比赛，所以你的判断和情绪落点会比较稳定地收束到"${result.winner.tag}"这一类视角。`;

  return {
    summary: `${result.winner.title}型看球搭子，核心特征是"${result.winner.tag}"。`,
    oneliner: `你更像${result.winner.title}：${result.winner.shortLabel}`,
    profile: result.winner.profile || fallbackProfile,
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
    dimensions: getRoleDimensionRanking(winner.code, { E: 0, R: 0, S: 0, N: 0, V: 0, G: 0 })
  };
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatProfileHtml(text) {
  return String(text || "")
    .split("\n")
    .map((line) => {
      if (/^作为看球搭子的(常见发言|气质)：$/.test(line)) {
        return `<span class="profile-subtitle">${escapeHtml(line)}</span>`;
      }
      return escapeHtml(line);
    })
    .join("<br>");
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
  resultPanel.classList.toggle("is-hidden-result", result.isHidden);
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
  resultProfile.innerHTML = formatProfileHtml(narrative.profile);

  hiddenBadge.classList.toggle("hidden", !result.isHidden);
  hiddenUnlockHint.classList.toggle("hidden", result.isHidden);

  renderRadarChart(radarChart, dimensionLegend, result.dimensions);

  const similarRoles = getSimilarRoleCodes(result.winner.code, 5);

  renderBreakdown(
    roleBreakdown,
    similarRoles.map((code, index) => ({
      name: `${ROLES[code].title} · ${ROLES[code].group}`,
      value: `第${index + 1}顺位`
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
  const quizInProgress = quizPanel && !quizPanel.classList.contains("hidden")
    && appState.answers.some((answer) => answer !== null);
  if (quizInProgress && !window.confirm("返回首页将清空当前作答，确定吗？")) {
    return;
  }
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

function loadImageAsset(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image asset: ${src}`));
    img.src = src;
  });
}

function resolveAssetUrl(path) {
  return new URL(path, document.baseURI || window.location.href).href;
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

function isWeChatBrowser() {
  return /MicroMessenger/i.test(window.navigator.userAgent || "");
}

function isMobileBrowser() {
  // UA 兜不住新 iPad(报 Macintosh),用 hover 能力补判
  return /Mobi|Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent || "")
    || !window.matchMedia("(hover: hover)").matches;
}

function openSavePreview(imageSrc, isWeChat) {
  if (!savePreviewModal || !savePreviewImage) {
    return false;
  }
  savePreviewImage.src = imageSrc;
  if (savePreviewCopy) {
    savePreviewCopy.textContent = isWeChat
      ? "在微信里长按图片，选择“保存图片”。"
      : "长按图片保存，或返回后再次点击按钮下载。";
  }
  savePreviewModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  return true;
}

function closeSavePreview() {
  if (!savePreviewModal) {
    return;
  }
  savePreviewModal.classList.add("hidden");
  // 活动弹窗还开着时保持滚动锁(保存预览以更高 z-index 叠在其上)
  const promoStillOpen = promoModal && !promoModal.classList.contains("hidden");
  document.body.style.overflow = promoStillOpen ? "hidden" : "";
}

const socialModal = document.querySelector("#social-modal");
const socialModalTitle = document.querySelector("#social-modal-title");
const socialModalCopy = document.querySelector("#social-modal-copy");
const socialModalMedia = document.querySelector("#social-modal-media");
const socialModalLink = document.querySelector("#social-modal-link");

const SOCIAL_CONTENT = {
  wechat: {
    title: "微信扫码，组队看球",
    copy: "微信里长按二维码识别：进球迷群聊球，或关注公众号",
    qrs: [
      { src: "./images/qr-wechat-group.jpg", caption: "扫码加入球迷群" },
      { src: "./images/qr-wechat.jpg", caption: "扫码关注公众号" },
    ],
  },
  xhs: {
    title: "在小红书找到我们",
    copy: "点击下方按钮，前往我们的小红书主页",
    link: "https://www.xiaohongshu.com/user/profile/630711410000000012003e0a",
    linkLabel: "前往小红书主页",
  },
  // 兑奖专用:只给公众号码,不混群聊码(活动闭环=朋友圈集赞截图发公众号后台)
  "wechat-mp": {
    title: "截图发公众号后台兑奖",
    copy: "微信扫码关注「看球搭子 MatchMate AI」，把朋友圈集赞截图发到公众号后台，达标即可兑奖",
    qrs: [
      { src: "./images/qr-wechat.jpg", caption: "扫码关注公众号" },
    ],
  },
};

function renderSocialMedia(data) {
  if (!socialModalMedia) {
    return;
  }
  socialModalMedia.innerHTML = "";
  const qrs = data.qrs || (data.image ? [{ src: data.image, caption: "" }] : []);
  qrs.forEach((qr) => {
    const figure = document.createElement("figure");
    figure.className = "social-modal-qr";
    const img = document.createElement("img");
    img.className = "social-modal-qr-img";
    img.alt = qr.caption || data.title;
    img.addEventListener("error", () => {
      const placeholder = document.createElement("div");
      placeholder.className = "social-modal-placeholder";
      placeholder.textContent = "二维码即将上线";
      figure.replaceChild(placeholder, img);
    });
    img.src = qr.src;
    figure.appendChild(img);
    if (qr.caption) {
      const caption = document.createElement("figcaption");
      caption.className = "social-modal-qr-caption";
      caption.textContent = qr.caption;
      figure.appendChild(caption);
    }
    socialModalMedia.appendChild(figure);
  });
  socialModalMedia.classList.toggle("social-modal-media--dual", qrs.length > 1);
  socialModalMedia.classList.toggle("hidden", qrs.length === 0);
}

function openSocialModal(kind) {
  const data = SOCIAL_CONTENT[kind];
  if (!socialModal || !data) {
    return;
  }
  socialModalTitle.textContent = data.title;
  socialModalCopy.textContent = data.copy || "";

  // 二维码 / 图片(微信:群聊码+公众号码双码)
  renderSocialMedia(data);

  // 跳转按钮(小红书:弹窗里点它跳主页)
  if (socialModalLink) {
    if (data.link) {
      socialModalLink.href = data.link;
      socialModalLink.textContent = data.linkLabel || "前往主页";
      socialModalLink.classList.remove("hidden");
    } else {
      socialModalLink.classList.add("hidden");
      socialModalLink.removeAttribute("href");
    }
  }

  socialModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeSocialModal() {
  if (!socialModal) {
    return;
  }
  socialModal.classList.add("hidden");
  document.body.style.overflow = "";
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

function wrapTextLines(ctx, text, maxWidth) {
  const lines = [];
  const leadingPunctuation = "，。！？；：、）】》」』”’.,!?;:)]}";
  const chars = Array.from(String(text || ""));
  let line = "";

  chars.forEach((char) => {
    const next = line + char;
    if (ctx.measureText(next).width > maxWidth && line) {
      if (leadingPunctuation.includes(char)) {
        lines.push(next);
        line = "";
      } else {
        lines.push(line);
        line = char;
      }
    } else {
      line = next;
    }
  });

  if (line) {
    lines.push(line);
  }

  return lines;
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  const paragraphs = String(text || "").split("\n");
  let offsetY = y;

  paragraphs.forEach((paragraph, paragraphIndex) => {
    const lines = wrapTextLines(ctx, paragraph, maxWidth);
    if (!lines.length) {
      offsetY += lineHeight;
      return;
    }

    lines.forEach((line) => {
      ctx.fillText(line, x, offsetY);
      offsetY += lineHeight;
    });

    if (paragraphIndex < paragraphs.length - 1) {
      offsetY += Math.floor(lineHeight * 0.35);
    }
  });

  return offsetY;
}

function drawCenteredWrappedText(ctx, text, centerX, y, maxWidth, lineHeight) {
  const lines = wrapTextLines(ctx, text, maxWidth);
  lines.forEach((line, index) => {
    ctx.fillText(line, centerX, y + index * lineHeight);
  });
  return y + lines.length * lineHeight;
}

function splitTextBalanced(ctx, text, maxWidth, maxLines = 3) {
  const source = String(text || "");
  const chars = Array.from(source);
  if (!chars.length) {
    return [];
  }
  if (ctx.measureText(source).width <= maxWidth) {
    return [source];
  }

  const lineCount = Math.min(maxLines, Math.max(2, Math.ceil(ctx.measureText(source).width / maxWidth)));
  const candidates = [];

  function collect(start, breaks) {
    if (breaks.length === lineCount - 1) {
      const breakPoints = [...breaks, chars.length];
      let previous = 0;
      const lines = breakPoints.map((breakPoint) => {
        const line = chars.slice(previous, breakPoint).join("");
        previous = breakPoint;
        return line;
      });
      if (lines.every((line) => line && ctx.measureText(line).width <= maxWidth)) {
        candidates.push(lines);
      }
      return;
    }

    const remainingBreaks = lineCount - 1 - breaks.length;
    const maxEnd = chars.length - remainingBreaks;
    for (let end = start + 1; end <= maxEnd; end += 1) {
      const line = chars.slice(start, end).join("");
      if (ctx.measureText(line).width <= maxWidth) {
        collect(end, [...breaks, end]);
      }
    }
  }

  collect(0, []);

  if (!candidates.length) {
    return wrapTextLines(ctx, source, maxWidth);
  }

  const targetLength = chars.length / lineCount;
  return candidates
    .map((lines) => {
      const widths = lines.map((line) => ctx.measureText(line).width);
      const lengths = lines.map((line) => Array.from(line).length);
      return {
        lines,
        score:
          (Math.max(...widths) - Math.min(...widths)) +
          (Math.max(...lengths) - Math.min(...lengths)) * 18 +
          lengths.reduce((total, length) => total + Math.abs(length - targetLength), 0) * 8
      };
    })
    .sort((left, right) => left.score - right.score)[0].lines;
}

function drawLeftCaptionBlock(ctx, quoteText, shortText, centerX, y, maxWidth, maxHeight, theme = {}) {
  const quoteColor = theme.captionQuote || "#784f34";
  const shortColor = theme.captionShort || "#4c5d63";
  const render = (scale, shouldDraw) => {
    let offsetY = y;
    const quoteFont = Math.round(40 * scale);
    const quoteLineH = Math.round(46 * scale);
    const shortFont = Math.round(32 * scale);
    const shortLineH = Math.round(38 * scale);
    const gap = Math.round(14 * scale);

    if (quoteText) {
      let adjustedQuoteFont = quoteFont;
      let adjustedQuoteLineH = quoteLineH;
      ctx.font = `600 ${quoteFont}px 'Noto Sans SC', sans-serif`;
      if (ctx.measureText(quoteText).width > maxWidth) {
        while (adjustedQuoteFont > Math.round(quoteFont * 0.72)) {
          adjustedQuoteFont -= 1;
          adjustedQuoteLineH = Math.round(quoteLineH * (adjustedQuoteFont / quoteFont));
          ctx.font = `600 ${adjustedQuoteFont}px 'Noto Sans SC', sans-serif`;
          if (ctx.measureText(quoteText).width <= maxWidth) {
            break;
          }
        }
      }
      const quoteLines = ctx.measureText(quoteText).width <= maxWidth
        ? [quoteText]
        : splitTextBalanced(ctx, quoteText, maxWidth, 2);
      if (shouldDraw) {
        ctx.fillStyle = quoteColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        quoteLines.forEach((line, index) => {
          ctx.fillText(line, centerX, offsetY + index * adjustedQuoteLineH);
        });
      }
      offsetY += quoteLines.length * adjustedQuoteLineH + gap;
    }

    ctx.font = `500 ${shortFont}px 'Noto Sans SC', sans-serif`;
    const shortLines = splitTextBalanced(ctx, shortText, maxWidth, 3);
    if (shouldDraw) {
      ctx.fillStyle = shortColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      shortLines.forEach((line, index) => {
        ctx.fillText(line, centerX, offsetY + index * shortLineH);
      });
    }
    offsetY += shortLines.length * shortLineH;

    return offsetY;
  };

  let low = 0.6;
  let high = 1;
  for (let i = 0; i < 14; i += 1) {
    const mid = (low + high) / 2;
    if (render(mid, false) <= y + maxHeight) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return render(low, true);
}

function drawContainImage(ctx, img, x, y, width, height) {
  const scale = Math.min(width / img.width, height / img.height);
  const drawWidth = img.width * scale;
  const drawHeight = img.height * scale;
  const dx = x + (width - drawWidth) / 2;
  const dy = y + (height - drawHeight) / 2;
  ctx.drawImage(img, dx, dy, drawWidth, drawHeight);
}

function drawProfileTextToCanvas(ctx, text, x, y, maxWidth, maxHeight = Number.POSITIVE_INFINITY, theme = {}) {
  const subtitleColor = theme.profileSubtitle || "#18262b";
  const bodyColor = theme.profileBody || "#4c5d63";
  const speechBg = theme.speechBg || "rgba(213, 111, 42, 0.12)";
  const speechBorder = theme.speechBorder || "rgba(213, 111, 42, 0.18)";
  const speechText = theme.speechText || "#6f430d";
  const lines = String(text || "").split("\n");

  const render = (scale, shouldDraw) => {
    let offsetY = y;
    let inSpeechSection = false;
    const subtitleFont = Math.round(30 * scale);
    const subtitleLineH = Math.round(42 * scale);
    const bodyFont = Math.round(27 * scale);
    const bodyLineH = Math.round(39 * scale);
    const speechFont = Math.round(24 * scale);
    const speechLineH = Math.round(32 * scale);
    const paragraphGap = Math.round(18 * scale);
    const subtitleGap = Math.round(12 * scale);
    const bubbleGap = Math.round(10 * scale);
    const bubblePadX = Math.round(16 * scale);
    const bubblePadY = Math.round(8 * scale);
    const bubbleRadius = Math.round(12 * scale);

    lines.forEach((line) => {
      if (!line.trim()) {
        inSpeechSection = false;
        offsetY += paragraphGap;
        return;
      }

      const isSubtitle = /^作为看球搭子的(常见发言|气质)：$/.test(line);
      const isSpeechSubtitle = /^作为看球搭子的常见发言：$/.test(line);
      const isQuoteLine = inSpeechSection && !isSubtitle;

      if (isSubtitle) {
        inSpeechSection = isSpeechSubtitle;
        ctx.font = `700 ${subtitleFont}px 'Noto Sans SC', sans-serif`;
        const wrapped = wrapTextLines(ctx, line, maxWidth);
        if (shouldDraw) {
          ctx.fillStyle = subtitleColor;
          wrapped.forEach((wrappedLine, index) => {
            ctx.fillText(wrappedLine, x, offsetY + index * subtitleLineH);
          });
        }
        offsetY += wrapped.length * subtitleLineH + subtitleGap;
        return;
      }

      if (isQuoteLine) {
        const phrases = line
          .split(/(?<=[？！。])/)
          .map((s) => s.trim())
          .filter(Boolean);

        ctx.font = `600 ${speechFont}px 'Noto Sans SC', sans-serif`;
        phrases.forEach((phrase) => {
          const wrapped = wrapTextLines(ctx, phrase, maxWidth - bubblePadX * 2);
          const bubbleHeight = bubblePadY * 2 + wrapped.length * speechLineH;

          if (shouldDraw) {
            ctx.save();
            ctx.fillStyle = speechBg;
            roundRectPath(ctx, x, offsetY, maxWidth, bubbleHeight, bubbleRadius);
            ctx.fill();
            ctx.strokeStyle = speechBorder;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.restore();

            ctx.fillStyle = speechText;
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
            wrapped.forEach((wrappedLine, index) => {
              ctx.fillText(wrappedLine, x + bubblePadX, offsetY + bubblePadY + index * speechLineH);
            });
          }

          offsetY += bubbleHeight + bubbleGap;
        });
        offsetY += Math.round(6 * scale);
        return;
      }

      ctx.font = `500 ${bodyFont}px 'Noto Sans SC', sans-serif`;
      const wrapped = wrapTextLines(ctx, line, maxWidth);
      if (shouldDraw) {
        ctx.fillStyle = bodyColor;
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        wrapped.forEach((wrappedLine, index) => {
          ctx.fillText(wrappedLine, x, offsetY + index * bodyLineH);
        });
      }
      offsetY += wrapped.length * bodyLineH + Math.round(4 * scale);
    });

    return offsetY;
  };

  let low = 0.18;
  let high = 1;
  for (let i = 0; i < 18; i += 1) {
    const mid = (low + high) / 2;
    if (render(mid, false) <= y + maxHeight) {
      low = mid;
    } else {
      high = mid;
    }
  }
  const scale = low;

  return render(scale, true);
}

function getDimensionGrade(value) {
  if (value >= 95) return "S";
  if (value >= 85) return "A";
  if (value >= 70) return "B";
  if (value >= 50) return "C";
  return "D";
}

function drawResultRadarToCanvas(ctx, x, y, size, dimensions, theme = {}) {
  const gridStroke = theme.radarGrid || "rgba(29, 42, 47, 0.12)";
  const axisStroke = theme.radarAxis || "rgba(29, 42, 47, 0.08)";
  const polygonFill = theme.radarFill || "rgba(15, 91, 82, 0.18)";
  const polygonStroke = theme.radarStroke || "#0f5b52";
  const dotFill = theme.radarDot || "#0f5b52";
  const dotStroke = theme.radarDotStroke || "#fffaf2";
  const labelFill = theme.radarLabel || "#1d2a2f";
  const gradeBg = theme.radarGradeBg || "#fffaf2";
  const gradeStroke = theme.radarGradeStroke || "rgba(29, 42, 47, 0.14)";
  const gradeFill = theme.radarGradeText || "#0f5b52";
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
    ctx.strokeStyle = gridStroke;
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
    ctx.strokeStyle = axisStroke;
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
  ctx.fillStyle = polygonFill;
  ctx.strokeStyle = polygonStroke;
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.stroke();

  points.forEach((point, idx) => {
    // Data point dot
    ctx.beginPath();
    ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = dotFill;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = dotStroke;
    ctx.stroke();

    // Dimension label
    const labelRadius = maxRadius + 34;
    const angle = startAngle + angleStep * idx;
    const lx = centerX + labelRadius * Math.cos(angle);
    const ly = centerY + labelRadius * Math.sin(angle);
    const align = idx === 0 || idx === 3 ? "center" : idx < 3 ? "left" : "right";
    ctx.textAlign = align;
    ctx.textBaseline = idx === 0 ? "bottom" : idx === 3 ? "top" : "middle";
    ctx.font = "600 22px 'Noto Sans SC', sans-serif";
    ctx.fillStyle = labelFill;
    const dim = dimensions.find((item) => item.code === point.code);
    ctx.fillText(dim ? dim.name : point.code, lx, ly);

    // Grade badge (A/B/C/D)
    const gradeRadius = maxRadius + 8;
    const gx = centerX + gradeRadius * Math.cos(angle);
    const gy = centerY + gradeRadius * Math.sin(angle);
    const grade = getDimensionGrade(point.value);
    ctx.fillStyle = gradeBg;
    ctx.beginPath();
    ctx.arc(gx, gy, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = gradeStroke;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = gradeFill;
    ctx.font = "700 18px 'Space Grotesk', 'Noto Sans SC', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(grade, gx, gy + 1);
  });

  ctx.restore();
}

function splitTextEvenly(ctx, text, maxWidth) {
  if (ctx.measureText(text).width <= maxWidth) {
    return [text];
  }
  const chars = Array.from(text);
  let bestIdx = 1;
  let bestDiff = Infinity;
  for (let i = 1; i < chars.length; i++) {
    const w1 = ctx.measureText(chars.slice(0, i).join("")).width;
    const w2 = ctx.measureText(chars.slice(i).join("")).width;
    if (w1 <= maxWidth && w2 <= maxWidth) {
      const diff = Math.abs(w1 - w2);
      if (diff < bestDiff) {
        bestDiff = diff;
        bestIdx = i;
      }
    }
  }
  return [chars.slice(0, bestIdx).join(""), chars.slice(bestIdx).join("")];
}

async function saveResultImage() {
  const result = currentRenderedResult;
  if (!result) {
    return;
  }
  const narrative = buildNarrative(result);
  const isHiddenCard = result.isHidden;
  const saveTheme = isHiddenCard
    ? {
        bgStart: "#263244",
        bgEnd: "#8a6033",
        bgOrb: "rgba(242, 211, 107, 0.16)",
        bgOrbAlt: "rgba(213, 111, 42, 0.16)",
        cardFill: "rgba(31, 43, 54, 0.9)",
        cardStroke: "rgba(242, 211, 107, 0.58)",
        cardStrokeWidth: 5,
        prompt: "#e8d6b0",
        title: "#fff8ea",
        code: "#f2d36b",
        badgeFill: "#111827",
        badgeStroke: "rgba(242, 211, 107, 0.88)",
        badgeText: "#fff8ea",
        portraitTop: "rgba(24, 34, 45, 0.78)",
        portraitBottom: "rgba(14, 22, 31, 0.86)",
        portraitStroke: "rgba(242, 211, 107, 0.58)",
        portraitStrokeWidth: 4,
        rightFill: "rgba(24, 34, 45, 0.68)",
        rightStroke: "rgba(242, 211, 107, 0.34)",
        rightStrokeWidth: 2,
        captionQuote: "#f2d36b",
        captionShort: "#e8d6b0",
        profileSubtitle: "#fff8ea",
        profileBody: "#e8d6b0",
        speechBg: "rgba(242, 211, 107, 0.12)",
        speechBorder: "rgba(242, 211, 107, 0.2)",
        speechText: "#fff8ea",
        radarGrid: "rgba(242, 211, 107, 0.26)",
        radarAxis: "rgba(242, 211, 107, 0.18)",
        radarFill: "rgba(242, 211, 107, 0.16)",
        radarStroke: "#f2d36b",
        radarDot: "#f2d36b",
        radarDotStroke: "#1f2b36",
        radarLabel: "#fff8ea",
        radarGradeBg: "#111827",
        radarGradeStroke: "rgba(242, 211, 107, 0.42)",
        radarGradeText: "#f2d36b",
        linkPrimary: "#f2d36b",
        linkMuted: "#e8d6b0"
      }
    : {
        bgStart: "#f7f2e9",
        bgEnd: "#efe7d9",
        bgOrb: "rgba(15, 91, 82, 0.08)",
        bgOrbAlt: "rgba(15, 91, 82, 0.08)",
        cardFill: "rgba(255, 251, 244, 0.9)",
        cardStroke: "rgba(29, 42, 47, 0.08)",
        cardStrokeWidth: 2,
        prompt: "#54656b",
        title: "#18262b",
        code: "#0f5b52",
        badgeFill: "#f2d36b",
        badgeStroke: "rgba(137, 93, 22, 0.34)",
        badgeText: "#6f430d",
        portraitTop: "rgba(255,255,255,0.92)",
        portraitBottom: "rgba(244,239,229,0.96)",
        portraitStroke: "rgba(29, 42, 47, 0.08)",
        portraitStrokeWidth: 2,
        rightFill: "rgba(255, 255, 255, 0.72)",
        rightStroke: "rgba(29, 42, 47, 0.08)",
        rightStrokeWidth: 2,
        linkPrimary: "#0f5b52",
        linkMuted: "#617076"
      };

  const button = saveImageButton;
  const originalLabel = button ? button.textContent : "";
  if (button) {
    button.disabled = true;
    button.textContent = "生成中...";
  }

  try {
    const [portraitImg, logoImg, qrImg, siteQrImg] = await Promise.all([
      loadImageAsset(resultPortrait.currentSrc || resultPortrait.src),
      loadImageAsset(resolveAssetUrl("./images/main_logo_clean.png")),
      SHOW_QR ? loadImageAsset(resolveAssetUrl("./images/matchmate_qr.png")) : Promise.resolve(null),
      SHOW_QR ? loadImageAsset(resolveAssetUrl("./images/fbti_site_qr.png")) : Promise.resolve(null)
    ]);

    const canvas = document.createElement("canvas");
    canvas.width = 1350;
    canvas.height = 1800;
    const ctx = canvas.getContext("2d");

    const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    bgGradient.addColorStop(0, saveTheme.bgStart);
    bgGradient.addColorStop(1, saveTheme.bgEnd);
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = saveTheme.bgOrb;
    ctx.beginPath();
    ctx.arc(1180, 230, 220, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = saveTheme.bgOrbAlt;
    ctx.beginPath();
    ctx.arc(220, 1480, 260, 0, Math.PI * 2);
    ctx.fill();

    const cardX = 70;
    const cardY = 70;
    const cardW = canvas.width - 140;
    const cardH = canvas.height - 140;

    fillRoundedRect(ctx, cardX, cardY, cardW, cardH, 42, saveTheme.cardFill);
    strokeRoundedRect(ctx, cardX, cardY, cardW, cardH, 42, saveTheme.cardStroke, saveTheme.cardStrokeWidth);

    const logoMaxWidth = 660;
    const logoScale = Math.min(logoMaxWidth / logoImg.width, 240 / logoImg.height);
    const logoW = logoImg.width * logoScale;
    const logoH = logoImg.height * logoScale;
    const logoCenterX = cardX + cardW - 250;
    ctx.drawImage(logoImg, logoCenterX - logoW / 2, cardY + 38, logoW, logoH);

    ctx.fillStyle = saveTheme.prompt;
    ctx.font = "500 34px 'Noto Sans SC', sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("你的看球搭子类型是：", cardX + 70, cardY + 70);

    ctx.fillStyle = saveTheme.title;
    ctx.font = "700 92px 'Noto Serif SC', serif";
    ctx.fillText(result.winner.title, cardX + 70, cardY + 132);

    ctx.fillStyle = saveTheme.code;
    ctx.font = "700 54px 'Space Grotesk', 'Noto Sans SC', sans-serif";
    const codeX = cardX + 70;
    const codeY = cardY + 242;
    const displayCode = result.winner.displayCode || result.winner.code;
    ctx.fillText(displayCode, codeX, codeY);

    if (result.isHidden) {
      const badgeText = "隐藏型搭子";
      const codeW = ctx.measureText(displayCode).width;
      ctx.font = "700 24px 'Noto Sans SC', sans-serif";
      const badgeW = ctx.measureText(badgeText).width + 36;
      const badgeH = 40;
      const badgeGap = 44;
      const maxBadgeX = cardX + cardW - 70 - badgeW;
      const badgeX = Math.min(codeX + codeW + badgeGap, maxBadgeX);
      const badgeY = codeY + 8;
      fillRoundedRect(ctx, badgeX, badgeY, badgeW, badgeH, 20, saveTheme.badgeFill);
      strokeRoundedRect(ctx, badgeX, badgeY, badgeW, badgeH, 20, saveTheme.badgeStroke, isHiddenCard ? 3 : 2);
      ctx.fillStyle = saveTheme.badgeText;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(badgeText, badgeX + badgeW / 2, badgeY + badgeH / 2 + 1);
    }

    // --- Layout constants: fixed two-column composition ---
    const contentTop = cardY + 300;
    const contentBottom = cardY + cardH - 60;
    const columnGap = 36;
    const leftX = cardX + 70;
    const leftW = 500;
    const rightX = leftX + leftW + columnGap;
    const rightW = cardX + cardW - 70 - rightX;
    const rightColTop = contentTop;
    const rightColH = contentBottom - rightColTop;

    // --- Left column: portrait + quote + shortLabel ---
    const portraitH = 780;
    const portraitBox = {
      x: leftX,
      y: rightColTop,
      w: leftW,
      h: portraitH
    };
    const portraitGradient = ctx.createLinearGradient(portraitBox.x, portraitBox.y, portraitBox.x, portraitBox.y + portraitBox.h);
    portraitGradient.addColorStop(0, saveTheme.portraitTop);
    portraitGradient.addColorStop(1, saveTheme.portraitBottom);
    fillRoundedRect(ctx, portraitBox.x, portraitBox.y, portraitBox.w, portraitBox.h, 34, portraitGradient);
    strokeRoundedRect(ctx, portraitBox.x, portraitBox.y, portraitBox.w, portraitBox.h, 34, saveTheme.portraitStroke, saveTheme.portraitStrokeWidth);

    ctx.save();
    roundRectPath(ctx, portraitBox.x, portraitBox.y, portraitBox.w, portraitBox.h, 34);
    ctx.clip();
    drawContainImage(ctx, portraitImg, portraitBox.x + 16, portraitBox.y + 16, portraitBox.w - 32, portraitBox.h - 32);
    ctx.restore();

    let leftBottom = portraitBox.y + portraitBox.h;

    const footerQrSize = 94;
    const footerBlockGap = 18;
    const footerBottomY = cardY + cardH - 70;
    const siteBlockY = footerBottomY - footerQrSize;
    const wechatBlockY = siteBlockY - footerBlockGap - footerQrSize;
    const leftFooterTop = wechatBlockY;
    const captionY = leftBottom + 22;
    const captionMaxH = leftFooterTop - captionY - 24;
    drawLeftCaptionBlock(
      ctx,
      result.winner.quote ? `"${result.winner.quote}"` : "",
      result.winner.shortLabel,
      leftX + leftW / 2,
      captionY,
      leftW - 26,
      captionMaxH,
      saveTheme
    );

    // --- Right column: radar (top) + profile text (bottom) ---
    fillRoundedRect(ctx, rightX, rightColTop, rightW, rightColH, 30, saveTheme.rightFill);
    strokeRoundedRect(ctx, rightX, rightColTop, rightW, rightColH, 30, saveTheme.rightStroke, saveTheme.rightStrokeWidth);

    // Radar: fixed size at top, centered in its area
    const radarAreaH = 395;
    const radarSize = 405;
    const radarCenterX = rightX + rightW / 2;
    const radarCenterY = rightColTop + radarAreaH / 2 + 18;
    const drawRadarSize = radarSize * 1.2; // leave some padding
    drawResultRadarToCanvas(ctx, radarCenterX - drawRadarSize / 2, radarCenterY - drawRadarSize / 2, drawRadarSize, result.dimensions, saveTheme);

    // Profile text below radar area
    const profilePad = 34;
    const profileX = rightX + profilePad;
    const profileY = rightColTop + radarAreaH + 6;
    const profileW = rightW - profilePad * 2;
    const profileMaxH = contentBottom - profileY - 22;

    ctx.save();
    roundRectPath(ctx, rightX, rightColTop, rightW, rightColH, 30);
    ctx.clip();
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    drawProfileTextToCanvas(
      ctx,
      narrative.profile,
      profileX,
      profileY,
      profileW,
      profileMaxH,
      saveTheme
    );
    ctx.restore();

    // Bottom-left stacked QR blocks: upper = WeChat group, lower = fbti site.
    const footerQrX = leftX;
    const footerTextX = footerQrX + footerQrSize + 16;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";

    // Upper block: WeChat group QR + 扫码加群 / 组队看球
    if (SHOW_QR && qrImg) {
      ctx.drawImage(qrImg, footerQrX, wechatBlockY, footerQrSize, footerQrSize);
    }
    const wechatTextX = SHOW_QR ? footerTextX : footerQrX;
    const wechatTextY = wechatBlockY + 10;
    ctx.fillStyle = saveTheme.linkPrimary;
    ctx.font = "600 24px 'Noto Sans SC', sans-serif";
    ctx.fillText("扫码加群", wechatTextX, wechatTextY);
    ctx.fillStyle = saveTheme.linkMuted;
    ctx.font = "500 22px 'Noto Sans SC', sans-serif";
    ctx.fillText("组队看球", wechatTextX, wechatTextY + 38);

    // Lower block: site QR + brand CTA text
    if (SHOW_QR && siteQrImg) {
      ctx.drawImage(siteQrImg, footerQrX, siteBlockY, footerQrSize, footerQrSize);
    }
    const siteTextX = SHOW_QR ? footerTextX : footerQrX;
    const siteTextY = siteBlockY + 4;
    ctx.fillStyle = saveTheme.linkPrimary;
    ctx.font = "600 24px 'Noto Sans SC', sans-serif";
    ctx.fillText("访问MatchMate", siteTextX, siteTextY);
    ctx.fillText("认识你的AI看球搭子！", siteTextX, siteTextY + 30);
    ctx.fillStyle = saveTheme.linkMuted;
    ctx.font = "500 20px 'Space Grotesk', 'Noto Sans SC', sans-serif";
    ctx.fillText("fbti.matchmate.chat", siteTextX, siteTextY + 66);

    const fileCode = String(result.winner.code || "result").toLowerCase().replace(/[^a-z0-9!-]+/g, "-");
    // 移动端统一走长按预览:小红书/QQ 等内置 webview 会静默拦截 <a download>,
    // 程序化下载只留给桌面浏览器
    if (isMobileBrowser()) {
      openSavePreview(canvas.toDataURL("image/png"), isWeChatBrowser());
    } else {
      const blob = await canvasToBlob(canvas);
      triggerBlobDownload(blob, `${fileCode}-result-card.png`);
    }
  } catch (error) {
    console.error(error);
    const hint = window.location.protocol === "file:"
      ? "\n当前像是直接用 file:// 打开的页面。请改用本地服务器预览再试。"
      : "";
    window.alert(`保存图片失败，请重试或打开浏览器控制台查看错误。${hint}`);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = originalLabel || "保存图片";
    }
  }
}

function applyDebugShortcut() {
  const params = new URLSearchParams(window.location.search);
  const forcedCode = params.get("result");
  const panel = params.get("panel");
  const questionParam = params.get("question");

  if (forcedCode) {
    if (showForcedResult(forcedCode)) {
      return;
    }
  }

  if (questionParam) {
    const questionNumber = Number.parseInt(questionParam, 10);
    const targetIndex = Number.isFinite(questionNumber)
      ? Math.max(0, Math.min(QUESTIONS.length - 1, questionNumber - 1))
      : 0;
    resetQuizState();
    appState.currentIndex = targetIndex;
    openQuizPanel();
    return;
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

document.querySelectorAll("[data-close-save-preview]").forEach((button) => {
  button.addEventListener("click", closeSavePreview);
});

document.querySelectorAll("[data-social]").forEach((button) => {
  button.addEventListener("click", () => {
    openSocialModal(button.getAttribute("data-social"));
  });
});

document.querySelectorAll("[data-close-social]").forEach((button) => {
  button.addEventListener("click", closeSocialModal);
});

// ---- 活动弹窗(分享赢好礼 / 解锁隐藏人格) ----
const promoModal = document.querySelector("#promo-modal");
const promoButton = document.querySelector("#promo-button");
const promoTabs = document.querySelectorAll("[data-promo-tab]");
const promoPanes = document.querySelectorAll("[data-promo-pane]");

function switchPromoTab(key) {
  promoTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.getAttribute("data-promo-tab") === key);
  });
  promoPanes.forEach((pane) => {
    pane.classList.toggle("hidden", pane.getAttribute("data-promo-pane") !== key);
  });
}

function openPromoModal() {
  if (!promoModal) {
    return;
  }
  promoModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closePromoModal() {
  if (!promoModal) {
    return;
  }
  promoModal.classList.add("hidden");
  document.body.style.overflow = "";
}

if (promoButton) {
  promoButton.addEventListener("click", openPromoModal);
}
promoTabs.forEach((tab) => {
  tab.addEventListener("click", () => switchPromoTab(tab.getAttribute("data-promo-tab")));
});
document.querySelectorAll("[data-close-promo]").forEach((button) => {
  button.addEventListener("click", closePromoModal);
});
// 弹窗「三步参与」对齐海报:①保存结果图 ②发朋友圈集赞(无点击动作) ③截图发公众号后台兑奖。
// ③走 social-modal(同层 z-index 会被 promo-modal 盖住,故先关再开);①的保存预览 z-index 更高,直接叠加。
document.querySelectorAll("[data-promo-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-promo-action");
    if (action === "save") {
      // 保存预览 z-index 更高,直接叠在活动弹窗上;关闭预览即回到三步卡,兑奖动线不中断
      saveResultImage();
      return;
    }
    closePromoModal();
    openSocialModal(action);
  });
});
// 活动海报未上传时显示占位文案(海报到位后放进 images/ 同名文件即自动展示)
document.querySelectorAll(".promo-poster").forEach((poster) => {
  poster.addEventListener("error", () => {
    poster.classList.add("is-missing");
    const placeholder = poster.parentElement.querySelector(".promo-placeholder");
    if (placeholder) {
      placeholder.classList.remove("hidden");
    }
  });
  if (poster.complete && poster.naturalWidth === 0) {
    poster.dispatchEvent(new Event("error"));
  }
  // 弹窗内海报受面板宽度所限(桌面端尤甚),点击新开原图
  poster.addEventListener("click", () => {
    window.open(poster.src, "_blank", "noopener");
  });
});

// ---- 底部渐变悬浮操作栏(结果页) ----
const resultDock = document.querySelector("#result-dock");
const resultActionsRow = document.querySelector(".result-actions");

document.querySelectorAll("[data-dock-proxy]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.getAttribute("data-dock-proxy"));
    if (target) {
      target.click();
    }
  });
});

// 滚到原按钮排附近时悬浮栏淡出,避免两排叠加
if (resultDock && resultActionsRow && "IntersectionObserver" in window) {
  const dockObserver = new IntersectionObserver(
    (entries) => {
      resultDock.classList.toggle("is-docked", entries[0].isIntersecting);
    },
    { threshold: 0.1 }
  );
  dockObserver.observe(resultActionsRow);
}

// 悬浮栏跟随结果页显隐(栏在 body 层,不随 #result-panel 的 hidden 自动消失)
if (resultDock && resultPanel) {
  const syncDockVisibility = () => {
    resultDock.classList.toggle("is-active", !resultPanel.classList.contains("hidden"));
  };
  new MutationObserver(syncDockVisibility).observe(resultPanel, {
    attributes: true,
    attributeFilter: ["class"],
  });
  syncDockVisibility();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSavePreview();
    closeSocialModal();
    closePromoModal();
  }
});
restartButton.addEventListener("click", restartQuiz);

window.debugGoToResult = showForcedResult;
window.debugStartQuiz = restartQuiz;

applyDebugShortcut();
