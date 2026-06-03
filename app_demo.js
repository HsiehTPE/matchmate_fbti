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
  "MOU":   { code: "MOU",   title: "狂人",     group: "看球反应组", tag: "嘴上骂裁判手上砸遥控器",     shortLabel: "情绪来得快去得也快，骂完三分钟又在群里发哈哈哈哈", quote: "我就是特殊的那个", image: "./images_new/MOU.png" },
  "TINTIN":    { code: "TINTIN",    title: "丁丁",   group: "看球反应组", tag: "全场最安静但脑子里在跑弹幕",   shortLabel: "不说话不代表没想法，赛后能给你复盘每个细节", quote: "Let Me Talk", image: "./images_new/TINTIN.png" },
  "MA-KUI":   { code: "MA-KUI",   title: "航母",     group: "看球反应组", tag: "落后三球还在发还有机会",       shortLabel: "逆风局的精神支柱（自封的），被骂也不改", quote: "图赫尔是个外行", image: "./images_new/MA-KUI.png" },
  "LE-FU":   { code: "LE-FU",   title: "勒夫",   group: "看球反应组", tag: "等一个进球等到花都谢了",       shortLabel: "全场就等那一脚，进了一起飞没进原地去世", quote: "韩国可以拿下，晋级不成问题", image: "./images_new/LE-FU.png" },
  "PEP":  { code: "PEP",  title: "瓜帅",   group: "看球反应组", tag: "看球时自动脑补战术板",         shortLabel: "这个球应该分边是他的口头禅，看球像在下棋", quote: "Nobody Talk!", image: "./images_new/PEP.png" },
  "8-PE":   { code: "8-PE",   title: "姆总",   group: "看球反应组", tag: "边路一过人他就站起来",         shortLabel: "看球时坐不住，进球会从沙发上弹起来", quote: "这是我的时代？", image: "./images_new/8-PE.png" },
  "Z-LATAN": { code: "Z-LATAN", title: "奉先",   group: "看球反应组", tag: "比赛可以输但花活不能少",       shortLabel: "0-4落后还在等一个倒钩，觉得足球是艺术不是战争", quote: "世界上只有两种人：兹拉坦和其他人", image: "./images_new/Z-LATAN.png" },
  "LEO":   { code: "LEO",   title: "里奥",     group: "赛后话题组", tag: "天选足球人",     shortLabel: "天赋和命运都站在脚下，关键时刻总能把球带到答案里", quote: "天选足球人", image: "./images_new/LEO.png" },
  "DAT-A":     { code: "DAT-A",     title: "詹指",   group: "赛后话题组", tag: "赛后第一件事打开MatchMate看数据", shortLabel: "嘴上说只看数据，其实每个异常值都能讲成一段故事", quote: "这个数据很有意思", image: "./images_new/DAT-A.png" },
  "WAN-SUI": { code: "WAN-SUI", title: "健翔",   group: "赛后话题组", tag: "你再看一遍这个球",             shortLabel: "喜欢反复看关键画面，能从一个犯规里看出三层含义", quote: "意大利万岁！", image: "./images_new/WAN-SUI.png" },
  "CCTV-HE":   { code: "CCTV-HE",   title: "贺·罗纳尔多·炜",   group: "赛后话题组", tag: "聊球自动附赠球员生平",         shortLabel: "你知道他当年在乌迪内斯的时候能把任何球员聊成传记", quote: "足球就是足球", image: "./images_new/CCTV-HE.png" },
  "BEI-GUO":   { code: "BEI-GUO",   title: "本泽马",     group: "赛后话题组", tag: "我只是个背锅的",   shortLabel: "锅在背后人很淡定，输了先接锅，赢了也不抢功", quote: "我只是个背锅的", image: "./images_new/BEI-GUO.png" },
  "LAO-8":   { code: "LAO-8",   title: "李老八",   group: "赛后话题组", tag: "赛后能聊到凌晨三点",           shortLabel: "别人说睡了他还能再发二十条语音，看球是社交不是运动", quote: "我跟你说啊", image: "./images_new/LAO-8.png" },
  "CN-12":   { code: "CN-12",   title: "第12人",   group: "搭子风格组", tag: "一个人就是一支啦啦队",         shortLabel: "和他看球永远不会冷场，进球时比球员还激动", quote: "下一场一定赢", image: "./images_new/CN-12.png" },
  "FAN-ZY":   { code: "FAN-ZY",   title: "范将军",   group: "搭子风格组", tag: "输了赢了都骂",                 shortLabel: "嘴上永远不满意，但每场都不落，是最忠实的黑粉", quote: "脸都不要了", image: "./images_new/FAN-ZY.png" },
  "CR7":   { code: "CR7",   title: "罗哥",   group: "搭子风格组", tag: "从欧洲到沙特，我来到、我征服",               shortLabel: "自信拉满的胜利宣言型搭子，去哪都要把场子变成主场", quote: "从欧洲到沙特，我来到、我征服", image: "./images_new/CR7.png" },
  "MA-DING":  { code: "MA-DING",  title: "大马丁",     group: "搭子风格组", tag: "该说的难听话一句不少",         shortLabel: "不怕得罪人，嘲讽属性拉满，越到点球大战越来劲", quote: "真话不好听", image: "./images_new/MA-DING.png" },
  "STAY-H": { code: "STAY-H", title: "哈宝",   group: "搭子风格组", tag: "进了球也不庆祝，发个STAY HUMBLE就完事", shortLabel: "进球后比谁都平静，但赛后默默把数据截图发群里", quote: "STAY HUMBLE", image: "./images_new/STAY-H.png" },
  "TUI-Q":    { code: "TUI-Q",    title: "退钱哥",   group: "搭子风格组", tag: "输了一起骂赢了一起吹",         shortLabel: "情绪价值拉满的看球搭子，你需要什么他就给什么", quote: "我xxx，退钱！", image: "./images_new/TUI-Q.png" },
  "HEI-HEI":  { code: "HEI-HEI",  title: "张嘿嘿",     group: "搭子风格组", tag: "你讲他接你冷他暖",             shortLabel: "永远知道什么时候该接梗什么时候该捧场，气氛永远到位", quote: "嘿嘿", image: "./images_new/HEI-HEI.png" },
  "NEY-MAR":  { code: "NEY-MAR",  title: "内马尔", group: "足球哲学组", tag: "宁可输也不能踢得丑",           shortLabel: "对丑陋赢球的容忍度为零，看球审美至上", quote: "足球是艺术", image: "./images_new/NEY-MAR.png" },
  "TEN-GOD":      { code: "TEN-GOD",      title: "滕圣",   group: "足球哲学组", tag: "能赢就行要什么自行车",         shortLabel: "再难看的比赛，也能从两个机会里算出赢的角度", quote: "两个机会都算上，比赛其实我们赢了", image: "./images_new/TEN-GOD.png" },
  "1100":   { code: "1100",   displayCode: "1100(宋)",   title: "高俅",   group: "足球哲学组", tag: "以前的足球才叫足球",           shortLabel: "觉得现在什么都差点意思，聊球必提以前", quote: "我刚开始看足球的那个时候...", image: "./images_new/1100.png" },
  "CARD-MA":    { code: "CARD-MA",    title: "卡牌大师",   group: "足球哲学组", tag: "争议第一反应翻规则手册",       shortLabel: "看VAR比看进球认真，觉得公平是足球的底线", quote: "规则就是规则", image: "./images_new/CARD-MA.png" },
  "LEGEND": { code: "LEGEND", title: "传奇",     group: "特殊人格",   tag: "被时间封印的名字",             shortLabel: "总能在老比赛里找到新东西，聊球自带历史纵深", quote: "足球之神有两个名字", image: "./images_new/LEGEND.png" },
  "ZI-DANE":  { code: "ZI-DANE",  title: "齐祖",     group: "特殊人格",   tag: "越乱越来劲",                   shortLabel: "别人看球怕意外，他看球就盼意外", quote: "优雅，也可以很硬", image: "./images_new/ZI-DANE.png" },
  "DINHO":  { code: "DINHO",  title: "小罗",     group: "特殊人格",   tag: "稳定之外也要留给传奇空间",     shortLabel: "正经分析他也会，但他更愿意等那个不可能的瞬间", quote: "规则是用来打破的", image: "./images_new/DINHO.png" }
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
      option("A", "直接站起来骂出声，差点把手机摔了", ["MOU", "CN-12"], ["BEI-GUO", "8-PE"], { E: 2, V: 1 }),
      option("B", "心里一沉，但没说什么，默默继续看", ["TINTIN", "MA-KUI"], ["CR7", "PEP"], { E: -1, R: 1 }),
      option("C", "发了一条朋友圈：'我不看了'，但其实还在看", ["FAN-ZY", "BEI-GUO"], ["LAO-8", "MA-DING"], { E: 1, S: 1 }),
      option("D", "虽然难受，但已经开始想'这场决赛可以聊一辈子'", ["LAO-8", "CCTV-HE"], ["LEO", "TUI-Q"], { N: 2, S: 1 })
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
      option("B", "心里很激动，但表面不动声色", ["TINTIN", "CR7"], ["MA-KUI", "PEP"], { E: -1, R: 1 }),
      option("C", "马上发群里：'快看这个球！'", ["TUI-Q", "STAY-H"], ["LAO-8", "HEI-HEI"], { S: 2, E: 1 }),
      option("D", "默默倒回去再看一遍", ["WAN-SUI", "DAT-A"], ["PEP", "TINTIN"], { R: 2, S: -1 })
    ]
  },
  {
    id: "Q3",
    sourceNumber: 3,
    stage: 1,
    part: "",
    title: "看世界杯比赛时，你更关注什么？",
    options: [
      option("A", "谁进了球，比分多少就行", ["TEN-GOD", "LE-FU"], ["MA-KUI", "CR7"], { R: 1, N: -1 }),
      option("B", "球队的整体打法和配合", ["CARD-MA", "DAT-A"], ["WAN-SUI", "CCTV-HE"], { R: 2, N: 1 }),
      option("C", "精彩的个人技术和过人", ["Z-LATAN", "NEY-MAR"], ["8-PE", "DINHO"], { N: 2, V: 1 }),
      option("D", "场上的气氛和球员的情绪", ["CN-12", "MOU"], ["BEI-GUO", "TUI-Q"], { E: 2, G: 1 })
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
      option("B", "'内马尔那个进球我以为稳了啊'", ["WAN-SUI", "MA-DING"], ["LE-FU", "FAN-ZY"], { N: 2, E: 1 }),
      option("C", "点球大战太刺激了", ["Z-LATAN", "MOU"], ["CN-12", "BEI-GUO"], { V: 2, E: 1 }),
      option("D", "巴西又要等下一届了，四年真快", ["CCTV-HE", "1100"], ["LEGEND", "STAY-H"], { N: 2, R: 1 })
    ]
  },
  {
    id: "Q5",
    sourceNumber: 5,
    stage: 1,
    part: "",
    title: "世界杯期间你更喜欢怎么看球？",
    options: [
      option("A", "一个人安静看，不想被打扰", ["TINTIN", "CR7"], ["WAN-SUI", "DAT-A"], { S: -1, R: 1 }),
      option("B", "约几个朋友一起看，边看边聊", ["CN-12", "TUI-Q"], ["HEI-HEI", "MA-KUI"], { S: 1, E: 1 }),
      option("C", "去球迷广场的大屏前，和陌生人一起喊", ["8-PE", "MOU"], ["ZI-DANE", "Z-LATAN"], { E: 2, V: 1 }),
      option("D", "群里一起刷屏，消息比球赛还热闹", ["LAO-8", "BEI-GUO"], ["FAN-ZY", "STAY-H"], { S: 2, G: 1 })
    ]
  },
  {
    id: "Q6",
    sourceNumber: 6,
    stage: 1,
    part: "",
    title: "2022卡塔尔世界杯梅西夺冠后，你第一件事做什么？",
    options: [
      option("A", "自己消化一下，发个朋友圈", ["TINTIN", "MA-KUI"], ["CR7", "NEY-MAR"], { S: -1, N: 1 }),
      option("B", "打开群聊开聊，消息已经99+了", ["LAO-8", "TUI-Q"], ["CN-12", "FAN-ZY"], { S: 2, E: 1 }),
      option("C", "去MatchMate上看梅西的决赛评分", ["DAT-A", "WAN-SUI"], ["PEP", "CARD-MA"], { R: 2, S: -1 }),
      option("D", "给朋友安利'你必须看这场回放'", ["STAY-H", "HEI-HEI"], ["CCTV-HE", "TEN-GOD"], { S: 1, N: 1 })
    ]
  },
  {
    id: "Q7",
    sourceNumber: 7,
    stage: 1,
    part: "",
    title: "以下哪个世界杯瞬间最让你有代入感？",
    options: [
      option("A", "弱队爆冷赢球，赛后全国放假庆祝", ["TEN-GOD", "LEO"], ["CCTV-HE", "1100"], { N: 2, G: 1 }),
      option("B", "加时赛最后一分钟绝杀晋级", ["LE-FU", "MOU"], ["CN-12", "Z-LATAN"], { V: 2, N: 1 }),
      option("C", "年轻球员一战成名，身价暴涨", ["STAY-H", "FAN-ZY"], ["8-PE", "BEI-GUO"], { N: 1, E: 1 }),
      option("D", "传奇球星最后一届世界杯的告别", ["1100", "CCTV-HE"], ["NEY-MAR", "TUI-Q"], { N: 2, V: -1 })
    ]
  },
  {
    id: "Q8",
    sourceNumber: 8,
    stage: 1,
    part: "",
    title: "你觉得世界杯最大的魅力是什么？",
    options: [
      option("A", "四年一次的仪式感，错过要再等四年", ["1100", "CCTV-HE"], ["TEN-GOD", "NEY-MAR"], { N: 2, R: 1 }),
      option("B", "什么都可能发生，强队也可能翻车", ["LE-FU", "MA-KUI"], ["Z-LATAN", "MOU"], { V: 2, N: 1 }),
      option("C", "全世界的人都在看同一件事", ["CN-12", "STAY-H"], ["LAO-8", "TUI-Q"], { S: 2, G: 1 }),
      option("D", "能见证历史性的时刻", ["LEO", "TUI-Q"], ["1100", "WAN-SUI"], { N: 2, R: 1 })
    ]
  },
  {
    id: "Q9",
    sourceNumber: 9,
    stage: 2,
    part: "",
    title: "世界杯决赛点球大战，你支持的队第三个罚，之前已经罚丢一个，你怎么想？",
    options: [
      option("A", "稳稳罚进就行，别玩花的", ["NEY-MAR", "PEP"], ["CR7", "TEN-GOD"], { V: -1, R: 1 }),
      option("B", "越紧张越刺激，来吧", ["MOU", "DINHO"], ["Z-LATAN", "BEI-GUO"], { V: 2, E: 1 }),
      option("C", "紧张到不敢看，但又想看", ["LE-FU", "BEI-GUO"], ["CN-12", "LAO-8"], { V: 1, E: 1 }),
      option("D", "先看对方门将的站位再判断", ["TINTIN", "DAT-A"], ["PEP", "WAN-SUI"], { R: 2, V: -1 })
    ]
  },
  {
    id: "Q10",
    sourceNumber: 10,
    stage: 2,
    part: "",
    title: "世界杯淘汰赛你支持的队落后一球，教练换上三个前锋搏命，你觉得？",
    options: [
      option("A", "太冒险了，先稳住再说", ["MA-KUI", "PEP"], ["CR7", "DAT-A"], { V: -1, R: 2 }),
      option("B", "必须搏，不搏没机会", ["8-PE", "CR7"], ["MOU", "CN-12"], { V: 2, E: 1 }),
      option("C", "看看效果，不行再调整", ["CARD-MA", "MA-DING"], ["MA-KUI", "TEN-GOD"], { R: 1, V: -1 }),
      option("D", "管他呢，反正好看就行", ["Z-LATAN", "NEY-MAR"], ["BEI-GUO", "DINHO"], { V: 1, N: 1 })
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
      option("B", "先看看别人怎么说再决定要不要表态", ["TEN-GOD", "CR7"], ["MA-KUI", "PEP"], { G: -1, R: 1 }),
      option("C", "算了不说了，说了会被喷", ["MA-KUI", "FAN-ZY"], ["LE-FU", "CR7"], { G: -1, E: 1 }),
      option("D", "换个角度说，'确实不错但别吹过头'", ["HEI-HEI", "STAY-H"], ["LAO-8", "CCTV-HE"], { G: 1, S: 1 })
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
      option("B", "看看就好，不太参与", ["MA-DING", "CR7"], ["MA-KUI", "PEP"], { G: -1, S: -1 }),
      option("C", "发一篇认真的分析长文", ["CARD-MA", "DAT-A"], ["PEP", "CCTV-HE"], { R: 2, G: 1 }),
      option("D", "发个搞笑的梗图参与一下", ["BEI-GUO", "FAN-ZY"], ["MA-DING", "HEI-HEI"], { G: 1, E: 1 })
    ]
  },
  {
    id: "Q13",
    sourceNumber: 13,
    stage: 2,
    part: "",
    title: "2026世界杯在北美三国举办，你最关心的是？",
    options: [
      option("A", "48支球队的新赛制是什么规则", ["PEP", "DAT-A"], ["CARD-MA", "CCTV-HE"], { R: 2, N: 1 }),
      option("B", "哪些比赛要熬夜，哪些不用", ["LE-FU", "FAN-ZY"], ["MA-KUI", "CR7"], { R: 1, V: -1 }),
      option("C", "有哪些球星可能是最后一届", ["LEO", "1100"], ["LEGEND", "STAY-H"], { N: 2, S: 1 }),
      option("D", "无所谓，到时候看就行", ["CR7", "TEN-GOD"], ["TINTIN", "MA-KUI"], { R: -1, V: -1 })
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
      option("C", "球员八卦和场外花絮", ["HEI-HEI", "BEI-GUO"], ["FAN-ZY", "LAO-8"], { S: 2, E: 1 }),
      option("D", "战术分析和数据解读", ["PEP", "DAT-A"], ["CCTV-HE", "TINTIN"], { R: 2, N: -1 })
    ]
  },
  {
    id: "Q15",
    sourceNumber: 15,
    stage: 2,
    part: "",
    title: "如果你能去现场看一场世界杯比赛，你选？",
    options: [
      option("A", "决赛，不管谁踢都值", ["LEGEND", "CN-12"], ["LEO", "STAY-H"], { N: 2, E: 1 }),
      option("B", "弱队打强队，等着看冷门", ["ZI-DANE", "MOU"], ["FAN-ZY", "BEI-GUO"], { V: 2, N: 1 }),
      option("C", "自己国家队的比赛", ["MA-KUI", "TUI-Q"], ["CN-12", "LAO-8"], { G: 2, E: 1 }),
      option("D", "有梅西C罗的那场", ["LEO", "LE-FU"], ["HEI-HEI", "WAN-SUI"], { N: 1, S: 1 })
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
      option("B", "搞笑——能一起玩梗的", ["BEI-GUO", "LAO-8"], ["HEI-HEI", "FAN-ZY"], { S: 2, E: 1 }),
      option("C", "忠诚——输了也能陪我骂的", ["MA-KUI", "TUI-Q"], ["FAN-ZY", "CN-12"], { G: 2, E: 1 }),
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
const hiddenUnlockHint = document.querySelector("#hidden-unlock-hint");
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
  const winnerCode = "FAN-ZY";
  const winner = ROLES[winnerCode];
  const rankedRoles = [winnerCode, ...summary.rankedRoles.filter((code) => code !== winnerCode)];

  return {
    winner,
    isHidden: winner.group === "特殊人格",
    roleScores: {
      ...summary.roleScores,
      [winnerCode]: Math.max((summary.roleScores[winnerCode] || 0), 999)
    },
    rankedRoles,
    dimensions: getDimensionRanking(summary.dimensionTotals)
  };
}

function buildNarrative(result) {
  const topDimensions = result.dimensions.slice(0, 3);
  const topRoles = result.rankedRoles.filter((code) => code !== result.winner.code).slice(0, 3);
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
  const narrative = buildNarrative(result);
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
    narrative.profile,
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
  const leadingPunctuation = "，。！？；：、）】》」』”’.,!?;:)]}";

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
        if (leadingPunctuation.includes(char)) {
          ctx.fillText(next, x, offsetY);
          offsetY += lineHeight;
          line = "";
          return;
        }
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

function drawProfileTextToCanvas(ctx, text, x, y, maxWidth) {
  let offsetY = y;
  let inSpeechSection = false;

  String(text || "").split("\n").forEach((line) => {
    if (!line.trim()) {
      if (inSpeechSection) {
        inSpeechSection = false;
        offsetY += 18;
      } else {
        offsetY += 18;
      }
      return;
    }

    const isSubtitle = /^作为看球搭子的(常见发言|气质)：$/.test(line);
    const isSpeechSubtitle = /^作为看球搭子的常见发言：$/.test(line);
    const isQuoteLine = inSpeechSection && !isSubtitle;

    if (isSubtitle) {
      inSpeechSection = isSpeechSubtitle;
      ctx.fillStyle = "#18262b";
      ctx.font = "700 30px 'Noto Sans SC', sans-serif";
      offsetY = drawWrappedText(ctx, line, x, offsetY, maxWidth, 42);
      offsetY += 12;
      return;
    }

    if (isQuoteLine) {
      // Split line into complete sentences by sentence-ending punctuation
      const phrases = line
        .split(/(?<=[？！。])/)
        .map((s) => s.trim())
        .filter(Boolean);

      const padX = 16;
      const padY = 8;
      const bubbleGap = 12;
      const bubbleRadius = 12;
      const lineHeight = 34;
      const bubbleHeight = padY * 2 + lineHeight;

      ctx.textAlign = "left";
      ctx.textBaseline = "middle";

      let curY = offsetY;

      phrases.forEach((phrase) => {
        ctx.save();
        ctx.fillStyle = "rgba(213, 111, 42, 0.12)";
        roundRectPath(ctx, x, curY, maxWidth, bubbleHeight, bubbleRadius);
        ctx.fill();
        ctx.strokeStyle = "rgba(213, 111, 42, 0.18)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();

        let fontSize = 24;
        ctx.font = `600 ${fontSize}px 'Noto Sans SC', sans-serif`;
        while (fontSize > 18 && ctx.measureText(phrase).width > maxWidth - padX * 2) {
          fontSize -= 1;
          ctx.font = `600 ${fontSize}px 'Noto Sans SC', sans-serif`;
        }
        ctx.fillStyle = "#6f430d";
        ctx.fillText(phrase, x + padX, curY + bubbleHeight / 2 + 1);
        curY += bubbleHeight + bubbleGap;
      });

      offsetY = curY + 8;
      return;
    }

    // Normal text line
    ctx.fillStyle = "#4c5d63";
    ctx.font = "500 27px 'Noto Sans SC', sans-serif";
    offsetY = drawWrappedText(ctx, line, x, offsetY, maxWidth, 39);
    offsetY += 4;
  });
  return offsetY;
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

  points.forEach((point, idx) => {
    // Data point dot
    ctx.beginPath();
    ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = "#0f5b52";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#fffaf2";
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
    ctx.fillStyle = "#1d2a2f";
    const dim = dimensions.find((item) => item.code === point.code);
    ctx.fillText(dim ? dim.name : point.code, lx, ly);

    // Grade badge (A/B/C/D)
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

  const button = saveImageButton;
  const originalLabel = button ? button.textContent : "";
  if (button) {
    button.disabled = true;
    button.textContent = "生成中...";
  }

  try {
    const [portraitImg, logoImg, qrImg] = await Promise.all([
      loadImageAsset(resultPortrait.currentSrc || resultPortrait.src),
      loadImageAsset(new URL("./main_logo.png", window.location.href).href),
      SHOW_QR ? loadImageAsset(new URL("./matchmate_qr.png", window.location.href).href) : Promise.resolve(null)
    ]);

    const canvas = document.createElement("canvas");
    canvas.width = 1350;
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
      fillRoundedRect(ctx, badgeX, badgeY, badgeW, badgeH, 20, "#f2d36b");
      strokeRoundedRect(ctx, badgeX, badgeY, badgeW, badgeH, 20, "rgba(137, 93, 22, 0.34)", 2);
      ctx.fillStyle = "#6f430d";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(badgeText, badgeX + badgeW / 2, badgeY + badgeH / 2 + 1);
    }

    // --- Layout constants: fixed two-column composition ---
    const contentTop = cardY + 330;
    const contentBottom = cardY + cardH - 100;
    const columnGap = 36;
    const leftX = cardX + 70;
    const leftW = 500;
    const rightX = leftX + leftW + columnGap;
    const rightW = cardX + cardW - 70 - rightX;
    const rightColTop = contentTop;
    const rightColH = contentBottom - rightColTop;

    // --- Left column: portrait + quote + shortLabel ---
    const portraitH = 800;
    const portraitBox = {
      x: leftX,
      y: rightColTop,
      w: leftW,
      h: portraitH
    };
    const portraitGradient = ctx.createLinearGradient(portraitBox.x, portraitBox.y, portraitBox.x, portraitBox.y + portraitBox.h);
    portraitGradient.addColorStop(0, "rgba(255,255,255,0.92)");
    portraitGradient.addColorStop(1, "rgba(244,239,229,0.96)");
    fillRoundedRect(ctx, portraitBox.x, portraitBox.y, portraitBox.w, portraitBox.h, 34, portraitGradient);
    strokeRoundedRect(ctx, portraitBox.x, portraitBox.y, portraitBox.w, portraitBox.h, 34, "rgba(29, 42, 47, 0.08)", 2);

    ctx.save();
    roundRectPath(ctx, portraitBox.x, portraitBox.y, portraitBox.w, portraitBox.h, 34);
    ctx.clip();
    drawContainImage(ctx, portraitImg, portraitBox.x + 24, portraitBox.y + 24, portraitBox.w - 48, portraitBox.h - 48);
    ctx.restore();

    let leftBottom = portraitBox.y + portraitBox.h;

    if (result.winner.quote) {
      const quoteY = leftBottom + 20;
      const quoteText = `"${result.winner.quote}"`;
      const quoteMaxW = leftW - 20;
      ctx.fillStyle = "#784f34";
      ctx.font = "600 40px 'Noto Sans SC', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      const quoteLines = splitTextEvenly(ctx, quoteText, quoteMaxW);
      const quoteLineH = 42;
      quoteLines.forEach((line, i) => {
        ctx.fillText(line, leftX + leftW / 2, quoteY + i * quoteLineH);
      });
      leftBottom = quoteY + quoteLines.length * quoteLineH;
    }

    // ShortLabel below quote
    const slText = result.winner.shortLabel;
    const slMaxW = leftW - 20;
    ctx.fillStyle = "#4c5d63";
    ctx.font = "500 32px 'Noto Sans SC', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    const slLines = splitTextEvenly(ctx, slText, slMaxW);
    const slLineH = 36;
    slLines.forEach((line, i) => {
      ctx.fillText(line, leftX + leftW / 2, leftBottom + 16 + i * slLineH);
    });

    // --- Right column: radar (top) + profile text (bottom) ---
    fillRoundedRect(ctx, rightX, rightColTop, rightW, rightColH, 30, "rgba(255, 255, 255, 0.72)");
    strokeRoundedRect(ctx, rightX, rightColTop, rightW, rightColH, 30, "rgba(29, 42, 47, 0.08)", 2);

    // Radar: fixed size at top, centered in its area
    const radarAreaH = 450;
    const radarSize = 450;
    const radarCenterX = rightX + rightW / 2;
    const radarCenterY = rightColTop + radarAreaH / 2;
    const drawRadarSize = radarSize * 1.3; // leave some padding
    drawResultRadarToCanvas(ctx, radarCenterX - drawRadarSize / 2, radarCenterY - drawRadarSize / 2, drawRadarSize, result.dimensions);

    // Profile text below radar area
    const profilePad = 34;
    const profileX = rightX + profilePad;
    const profileY = rightColTop + radarAreaH + 6;
    const profileW = rightW - profilePad * 2;

    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    drawProfileTextToCanvas(
      ctx,
      narrative.profile,
      profileX,
      profileY,
      profileW
    );

    // Bottom-left: QR code + link text
    const qrSize = 120;
    const qrX = cardX + 70;
    const qrY = cardY + cardH - 70 - qrSize;
    if (SHOW_QR && qrImg) {
      ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);
    }

    const linkTextX = SHOW_QR ? qrX + qrSize + 16 : qrX;
    const linkTextY = SHOW_QR ? qrY + 12 : qrY;
    ctx.fillStyle = "#0f5b52";
    ctx.font = "600 24px 'Noto Sans SC', sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("访问MatchMate", linkTextX, linkTextY);
    ctx.fillText("认识你的AI看球搭子！", linkTextX, linkTextY + 34);
    ctx.fillStyle = "#617076";
    ctx.font = "500 20px 'Space Grotesk', 'Noto Sans SC', sans-serif";
    ctx.fillText("www.matchmate.tv", linkTextX, linkTextY + 72);

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

