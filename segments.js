const SEGMENTS = [
  {
    id:"L1", start: 0.00, end: 3.00,
    jpParts: ["この","想い","を","消し","て","しまう","に","は"],
    romajiParts: ["kono","omoi","wo","keshi","te","shimau","ni","wa"],
    zhParts:["这","思念","（宾语）","消","接续","掉","要","的话"],
    zhSentence:"要消掉这份思念的话",
    grammar: "この想い＝「这份思念」；を 标记宾语。\n消してしまう＝「消掉、结束掉」，「てしまう」表示动作彻底完成，常带一点“可惜/无奈”的语气。\n〜には＝「要…的话、为了…」，前面的「この想いを消してしまう」整体作为条件/目的。",
    keyWords: [
  { surface:"想い", romaji:"omoi", zh:"思念；心意" },
  { surface:"消してしまう", romaji:"keshite shimau", zh:"彻底消掉" }
  ]
  },
  {
    id:"L2", start: 3.00, end: 7.00,
    jpParts:["まだ","人生","長い","でしょ"],
    romajiParts:["mada","jinsei","nagai","desho"],
    zhParts:["还","人生","长","吧"],
    zhSentence:"人生还很长吧",
    grammar: "まだ＝「还、仍然」，暗示后面还有很多时间。\n人生が長い＝人生很长。「長いでしょ」用「でしょ」软化语气，带一点“你也这么觉得吧”的确认感。",
    keyWords: [
    { surface:"人生", romaji:"jinsei", zh:"人生" },
    { surface:"長い", romaji:"nagai", zh:"长的；漫长的" }
  ]
  },
  {
  id:"L3_1", start: 7.00, end: 8.30,
  jpParts:["やり","残し","て","る","こと"],
  romajiParts:["yari","nokoshi","te","ru","koto"],
  zhParts:["做","没完成","接续","着","的事"],
  zhSentence:"那些没有做完的事情",
  grammar:
    "やり残す：留下没做完。\n" +
    "〜てる（ている）：表示状态“正在/持续…”。\n" +
    "〜こと：名词化，表示“事情”。",
    keyWords: [
    { surface:"やり残す", romaji:"yarinokosu", zh:"留下没做完" }
  ]
  },
  {
  id:"L3_2", start: 8.30, end: 21.30,
  jpParts:["やり","直し","て","み","たい","から"],
  romajiParts:["yari","naoshi","te","mi","tai","kara"],
  zhParts:["做","重新","接续","试试","想要","因为"],
  zhSentence:"因为想重新做做看",
  grammar:
    "やり直す：重新做。\n" +
    "〜てみたい：想试试看。\n" +
    "〜から：因为…。",
    keyWords: [
    { surface:"やり直す", romaji:"yarinaosu", zh:"重新做；重来" },
    { surface:"てみたい", romaji:"te mitai", zh:"想试试" }
  ]
  },
  {
  id:"L4_1", start: 21.30, end: 24.00,
  jpParts:["夢","の","続き"],
  romajiParts:["yume","no","tsuzuki"],
  zhParts:["梦","的","续篇"],
  zhSentence:"梦想的续篇",
  grammar:
    "夢の続き：梦的延续，比喻“梦想的下一段”。",
    keyWords: [
    { surface:"夢", romaji:"yume", zh:"梦想；梦境" },
    { surface:"続き", romaji:"tsuzuki", zh:"续篇；延续" }
  ]
  },
  {
  id:"L4_2", start: 24.00, end: 25.30,
  jpParts:["追い","かけ","て","い","た"],
  romajiParts:["oi","kake","te","i","ta"],
  zhParts:["追","上","接续","着","过去"],
  zhSentence:"曾经一直追逐着",
  grammar:
    "追いかけていた：追いかける（追逐）＋ている 的过去式。",
  keyWords: [
    { surface:"追いかける", romaji:"oikakeru", zh:"追逐；追赶" }
  ]
  },
  {
  id:"L4_3", start: 25.30, end: 28.00,
  jpParts:["はず","な","の","に"],
  romajiParts:["hazu","na","no","ni"],
  zhParts:["按理说","的","（解释）","却"],
  zhSentence:"明明应该如此，却……",
  grammar:
    "はず：按理说应该。\n" +
    "〜なのに：却、明明…却…。",
    keyWords: [
    { surface:"はずなのに", romaji:"hazunanoni", zh:"明明应该…却…" }
  ]
  },
  {
  id:"L5_1", start: 28.00, end: 32.00,
  jpParts:["曲がり","くねっ","た","細い","道"],
  romajiParts:["magari","kunet","ta","hosoi","michi"],
  zhParts:["弯弯","曲折","的","细窄","道路"],
  zhSentence:"在曲折狭窄的小路上",
  grammar:
    "曲がり＋くねる：弯弯曲曲、蜿蜒。\n" +
    "〜た：作定语修饰“细い道”（细窄的路）。",
  keyWords: [
  { surface:"曲がりくねる", romaji:"magarikuneru", zh:"弯弯曲曲；蜿蜒" },
  { surface:"細い", romaji:"hosoi", zh:"细窄的；细的" },
  { surface:"道", romaji:"michi", zh:"道路；路" }
]
},
{
  id:"L5_2", start: 32.00, end: 34.50,
  jpParts:["人","に","躓く"],
  romajiParts:["hito","ni","tsumazuku"],
  zhParts:["被人","在","绊倒"],
  zhSentence:"被别人绊倒",
  grammar:
    "人に躓く：直译“在别人那里绊倒”，引申为在人际关系或外界因素上受挫。",
  keyWords: [
  { surface:"躓く", romaji:"tsumazuku", zh:"绊倒；受挫" }
]
},
  {
  id:"L6_1", start: 34.50, end: 36.00,
  jpParts:["あの","頃","みたい","に","って"],
  romajiParts:["ano","koro","mitai","ni","tte"],
  zhParts:["那","时候","一样","地","这样说"],
  zhSentence:"说“像那时候一样”",
  grammar:
    "あの頃みたいに：像那时候那样。\n" +
    "〜って：口语引用/转述，“说… / 提到…”。",
  keyWords: [
  { surface:"あの頃", romaji:"ano koro", zh:"那时候；当时" },
  { surface:"みたいに", romaji:"mitai ni", zh:"像…一样" }
]
},
{
  id:"L6_2", start: 36.00, end: 37.50,
  jpParts:["戻り","たい","わけ","じゃ","ない","の"],
  romajiParts:["modori","tai","wake","ja","nai","no"],
  zhParts:["回去","想","理由","并","不是","的"],
  zhSentence:"并不是想回到过去",
  grammar:
    "戻りたい：想回去。\n" +
    "〜わけじゃない：并不是那样（否定解释）。",
  keyWords: [
  { surface:"戻りたい", romaji:"modoritai", zh:"想回去；想回到过去" }
  ]
},
{
  id:"L6_3", start: 37.50, end: 42.00,
  jpParts:["なくし","て","きた","空","を","探し","て","る"],
  romajiParts:["nakushi","te","kita","sora","wo","sagashi","te","ru"],
  zhParts:["弄丢","接续","到现在","天空","（宾语）","寻找","接续","着"],
  zhSentence:"只是在寻找那片失去的天空",
  grammar:
    "なくしてきた：なくす（失去）＋てくる（到现在为止递进）。\n" +
    "空を探してる：正在寻找那片天空（象征希望/自由）。",
  keyWords: [
  { surface:"なくす", romaji:"nakusu", zh:"弄丢；失去" },
  { surface:"探す", romaji:"sagasu", zh:"寻找" },
  { surface:"空", romaji:"sora", zh:"天空" }
]
},

  {
  id:"L7_1", start: 42.00, end: 43.30,
  jpParts:["分かっ","て","くれます","よう","に"],
  romajiParts:["wakat","te","kuremasu","you","ni"],
  zhParts:["理解","接续","给我吧","希望","地"],
  zhSentence:"希望你能理解",
  grammar:
    "分かってくれますように：祈愿表达，希望对方理解自己。",
  keyWords: [
  { surface:"分かる", romaji:"wakaru", zh:"理解；明白" }
]
},
{
  id:"L7_2", start: 43.30, end: 46.50,
  jpParts:["犠牲","に","なっ","た","よう","な","悲しい","顔","は"],
  romajiParts:["gisei","ni","nat","ta","you","na","kanashii","kao","wa"],
  zhParts:["牺牲","成为","变","了","一样","的","悲伤","脸","（话题）"],
  zhSentence:"那种好像成了牺牲品的悲伤表情",
  grammar:
    "〜ような：像…一样的（比喻）。\n" +
    "悲しい顔は：以“表情”作为话题，引出下句。",
  keyWords: [
  { surface:"犠牲", romaji:"gisei", zh:"牺牲" },
  { surface:"悲しい", romaji:"kanashii", zh:"悲伤的" },
  { surface:"顔", romaji:"kao", zh:"脸；表情" }
]
},
{
  id:"L7_3", start: 46.50, end: 48.30,
  jpParts:["やめ","て","よ"],
  romajiParts:["yame","te","yo"],
  zhParts:["停下","接续","啦"],
  zhSentence:"别再那样了",
  grammar:"やめてよ：停止吧、别再那样了（带请求情绪）。",
  keyWords: [
  { surface:"やめて", romaji:"yamete", zh:"停止；别这样" }
]
},


  {
    id:"L8", start: 48.30, end: 50.00,
    jpParts:["罪","の","最後","は","涙","じゃ","ない","よ"],
    romajiParts:["tsumi","no","saigo","wa","namida","ja","nai","yo"],
    zhParts:["罪","的","终点","则","眼泪","才","不是","哦"],
    zhSentence:"罪的结局并不只是用眼泪收场",
    grammar:
      "罪の最後：罪（过错、罪孽）的最后、结局。\n" +
      "〜は涙じゃない：不是用眼泪（哭一场）就结束那种东西，否定“哭一哭就完事”。",
    keyWords: [
  { surface:"罪", romaji:"tsumi", zh:"罪；过错" },
  { surface:"最後", romaji:"saigo", zh:"最后；结局" },
  { surface:"涙", romaji:"namida", zh:"眼泪" }
]
  },
  {
    id:"L9", start: 50.00, end: 52.00,
    jpParts:["ずっと","苦しく","背負っ","て","く","ん","だ"],
    romajiParts:["zutto","kurushiku","seott","te","ku","n","da"],
    zhParts:["一直","痛苦地","背负","接续","下去","的","啊"],
    zhSentence:"而是要一直痛苦地背负下去",
    grammar:
      "ずっと：始终、一直。\n" +
      "苦しく：苦しい 的副词形，“痛苦地…”。\n" +
      "背負ってくんだ：背負っていく→背着继续往前走，「〜んだ」带解释、强调语气。",
    keyWords: [
  { surface:"ずっと", romaji:"zutto", zh:"一直；始终" },
  { surface:"苦しい", romaji:"kurushii", zh:"痛苦的；难受的" },
  { surface:"背負う", romaji:"seou", zh:"背负；承担" }
]
  },
  {
  id:"L10_1", start: 52.00, end: 53.80,
  jpParts:["出口","見え","ない","感情","迷路","に"],
  romajiParts:["deguchi","mie","nai","kanjou","meiro","ni"],
  zhParts:["出口","看见","不","感情","迷宫","里"],
  zhSentence:"在看不到出口的感情迷宫里",
  grammar:
    "出口見えない＝出口が見えない（看不到出口的）。\n" +
    "感情迷路：比喻纠结复杂的情绪状态。\n" +
    "〜に：表示所在，“在…里”。",
  keyWords: [
  { surface:"出口", romaji:"deguchi", zh:"出口" },
  { surface:"感情", romaji:"kanjou", zh:"情感；情绪" },
  { surface:"迷路", romaji:"meiro", zh:"迷宫" }
]
  },
  {
  id:"L10_2", start: 53.80, end: 55.00,
  jpParts:["誰","を","待っ","て","る","の"],
  romajiParts:["dare","wo","matt","te","ru","no"],
  zhParts:["谁","（宾语）","等","接续","着","呢"],
  zhSentence:"我到底在等谁",
  grammar:
    "誰を待ってるの：待っている＋の？表示自问、反思语气：到底在等谁呢？",
  keyWords: [
  { surface:"待つ", romaji:"matsu", zh:"等待" },
  { surface:"誰", romaji:"dare", zh:"谁" }
]
  },
  {
    id:"L11", start: 55.00, end: 57.00,
    jpParts:["白い","ノート","に","綴っ","た","よう","に"],
    romajiParts:["shiroi","nooto","ni","tsuzut","ta","you","ni"],
    zhParts:["白色的","笔记本","上","记录","了","那样","地"],
    zhSentence:"多想像写在白色笔记本上一样",
    grammar:
      "白いノート：白色的笔记本。\n" +
      "〜に綴った：綴る（誊写、写下），“写在…上”。\n" +
      "〜ように：像…那样，作比喻，引出下一句“想更坦率地吐露出来”。",
    keyWords: [
  { surface:"白い", romaji:"shiroi", zh:"白色的" },
  { surface:"ノート", romaji:"nooto", zh:"笔记本" },
  { surface:"綴る", romaji:"tsuzuru", zh:"誊写；写下" }
]
  },
  {
    id:"L12", start: 57.00, end: 58.50,
    jpParts:["もっと","素直","に","吐き","出し","たい","よ"],
    romajiParts:["motto","sunao","ni","haki","dashi","tai","yo"],
    zhParts:["更","坦率","地","吐","出","想要","啊"],
    zhSentence:"把真正的心情坦率地全部吐露出来",
    grammar:
      "もっと：更、再多一点。\n" +
      "素直に：坦率地、老实地。\n" +
      "吐き出したい：吐き出す（吐出、倾吐）＋たい，“想全部说出来”。",
    keyWords: [
  { surface:"もっと", romaji:"motto", zh:"更多；更…" },
  { surface:"素直", romaji:"sunao", zh:"坦率；诚实" },
  { surface:"吐き出す", romaji:"hakidasu", zh:"吐露；说出来" }
]
  },
  {
    id:"L13", start: 58.50, end: 60.50,
    jpParts:["何","から","逃れ","たい","ん","だ"],
    romajiParts:["nani","kara","nogare","tai","n","da"],
    zhParts:["从什么","起","逃脱","想要","呢","啊"],
    zhSentence:"我到底是想逃离什么呢",
    grammar:
      "何から：从什么（事物/现实）开始、从何处。\n" +
      "逃れたい：逃れる（逃避、摆脱）＋たい，表示想要逃开。\n" +
      "〜んだ：带解释/感叹色彩的语气，“究竟是想逃避什么呢”。",
    keyWords: [
  { surface:"逃れる", romaji:"nogareru", zh:"逃避；摆脱" },
  { surface:"何", romaji:"nani", zh:"什么" }
]
  },
  {
    id:"L14", start: 60.50, end: 62.00,
    jpParts:["現実","って","やつ","か"],
    romajiParts:["genjitsu","tte","yatsu","ka"],
    zhParts:["现实","叫做","那家伙","吗"],
    zhSentence:"是那个所谓的“现实”吗",
    grammar:
      "現実って：現実というのは 的口语说法，用「って」代替「というのは」，带点吐槽感。\n" +
      "やつ：家伙、东西，略粗俗，带点不满或自嘲。“那个叫现实的玩意儿吗？”",
    keyWords: [
  { surface:"現実", romaji:"genjitsu", zh:"现实" },
  { surface:"やつ", romaji:"yatsu", zh:"家伙；东西（口语）" }
]
  },
  {
  id:"L15_1", start:62.00, end:65.00,
  jpParts:["叶え","る","為","に","生き","て","る","ん","だ","って"],
  romajiParts:["kanae","ru","tame","ni","iki","te","ru","n","da","tte"],
  zhParts:["实现","接续","为了","而","活","接续","着","（解释）","的","说"],
  zhSentence:"“我就是为了实现愿望而活着的”",
  grammar:"叶える為に＝为了让愿望实现；生きてるんだって＝引用自己的想法。",
  keyWords: [
  { surface:"叶える", romaji:"kanaeru", zh:"实现（愿望）" },
  { surface:"生きてる", romaji:"ikiteru", zh:"活着；生活着" }
]
},
{
  id:"L15_2", start:65.00, end:67.00,
  jpParts:["叫び","たく","なる","よ"],
  romajiParts:["sakebi","taku","naru","yo"],
  zhParts:["喊","想要","会变得","啊"],
  zhSentence:"忍不住想大声喊出来",
  grammar:"叫びたくなる＝想喊；よ＝加强语气。",
  keyWords: [
  { surface:"叫ぶ", romaji:"sakebu", zh:"喊；呼喊" }
]
},
{
  id:"L15_3", start:67.00, end:69.00,
  jpParts:["聞こえ","て","います","か"],
  romajiParts:["kikoe","te","imasu","ka"],
  zhParts:["听见","接续","着","吗"],
  zhSentence:"你听得见吗",
  grammar:"敬体疑问，用于对人或世界的呼喊。",
  keyWords: [
  { surface:"聞こえる", romaji:"kikoeru", zh:"听得见" }
]
},
{
  id:"L16", start:69.00, end:74.00,
  jpParts:["無難","に","なん","て","やっ","て","られ","ない","から"],
  romajiParts:["bunan","ni","nan","te","yat","te","rare","nai","kara"],
  zhParts:["无懈可击地","地","什么","之类","做","接续","得了","不能","因为"],
  zhSentence:"因为已经没法再走那种安全保守的路了",
  grammar:"無難に＝求稳；やってられない＝无法继续那样生活。",
  keyWords: [
  { surface:"無難", romaji:"bunan", zh:"保守；求稳" },
  { surface:"やってられない", romaji:"yatterarenai", zh:"无法继续那样做；受不了" }
]
},
{
  id:"L17", start:74.00, end:76.00,
  jpParts:["帰る","場所","も","ない","の"],
  romajiParts:["kaeru","basho","mo","nai","no"],
  zhParts:["回去","地方","也","没有","的"],
  zhSentence:"也已经没有可以回去的地方",
  grammar:"〜もない＝连…都没有，强调无处可归。",
  keyWords: [
  { surface:"帰る", romaji:"kaeru", zh:"回去；回家" },
  { surface:"場所", romaji:"basho", zh:"地方；位置" }
]
},
{
  id:"L18_1", start:76.00, end:79.00,
  jpParts:["優し","さ","に","は","いつも","感謝","して","る"],
  romajiParts:["yasashi","sa","ni","wa","itsumo","kansha","shite","ru"],
  zhParts:["温柔","这种","对","在","一直","感谢","着","着"],
  zhSentence:"一直对周围的温柔心存感激",
  grammar:"優しさ＝别人的温柔；いつも感謝してる＝一直很感激。",
  keyWords: [
  { surface:"優しさ", romaji:"yasashisa", zh:"温柔；体贴" },
  { surface:"感謝する", romaji:"kansha suru", zh:"感谢" }
]
},
{
  id:"L18_2", start:79.00, end:82.00,
  jpParts:["だから","強く","なり","たい"],
  romajiParts:["dakara","tsuyoku","nari","tai"],
  zhParts:["所以","坚强地","变","想要"],
  zhSentence:"正因为这样才想变得更坚强",
  grammar:"だから＝因此；強くなりたい＝想变强。",
  keyWords: [
  { surface:"強く", romaji:"tsuyoku", zh:"强；坚强地" },
  { surface:"なりたい", romaji:"naritai", zh:"想变成…" }
]
},
{
  id:"L19_1", start:82.00, end:85.00,
  jpParts:["懐かしく","なる","こんな","痛み","も"],
  romajiParts:["natsukashiku","naru","konna","itami","mo"],
  zhParts:["令人怀念地","变成","这样的","痛苦","也"],
  zhSentence:"连这种会让人怀念的痛苦",
  grammar:"懐かしくなる＝变得令人怀念；〜も＝连…也。",
  keyWords: [
  { surface:"懐かしい", romaji:"natsukashii", zh:"令人怀念的" },
  { surface:"痛み", romaji:"itami", zh:"痛苦；痛感" }
]
},
{
  id:"L19_2", start:85.00, end:86.00,
  jpParts:["歓迎","じゃ","ん"],
  romajiParts:["kangei","ja","n"],
  zhParts:["欢迎","是","呢"],
  zhSentence:"也当成值得欢迎的东西",
  grammar:"歓迎じゃん＝“不是也挺欢迎的吗”，一种自我打气。",
  keyWords: [
  { surface:"歓迎", romaji:"kangei", zh:"欢迎" }
]
}
];

export { SEGMENTS };
