export const articles = [
	{
		section: "overview",
		type: "article",
		title: "definition",
		icon: "adjust",
		isCause: true,
		content: ["text", "text", "img", "caption"],
	},
	{
		section: "overview",
		type: "article",
		title: "definition-2",
		icon: "search",
		isCause: true,
		content: ["text", "text", "dbimg"],
	},
	{
		section: "time",
		type: "article",
		title: "definition-3",
		icon: "broken_image",
		isCause: true,
		content: ["text", "text", "img"],
	},
	{
		section: "time",
		type: "article",
		title: "definition-4",
		icon: "storm",
		isCause: true,
		content: ["text", "text", "img"],
	},
	{
		section: "time",
		type: "article",
		title: "definition-5",
		icon: "thunderstorm",
		isCause: true,
		content: ["text", "text", "img"],
	},
	{
		section: "time",
		type: "article",
		title: "definition-6",
		icon: "tsunami",
		isCause: true,
		content: ["text", "text", "img"],
	},
	{
		section: "time",
		type: "article",
		title: "definition-7",
		icon: "sailing",
		isCause: false,
		content: ["text", "text", "img"],
	},
	{
		section: "time",
		type: "article",
		title: "definition-8",
		icon: "water_drop",
		isCause: true,
		content: ["text", "text", "img"],
	},
	{
		section: "space",
		type: "article",
		title: "definition-9",
		icon: "forest",
		isCause: false,
		content: ["text", "text", "img", "caption"],
	},
	{
		section: "space",
		type: "article",
		title: "definition-10",
		icon: "forest",
		isCause: false,
		content: ["text", "text", "img", "caption"],
	},
	{
		section: "space",
		type: "article",
		title: "definition-11",
		icon: "forest",
		isCause: false,
		content: ["text", "text", "img", "caption"],
	},
	{
		section: "space",
		type: "article",
		title: "definition-12",
		icon: "forest",
		isCause: false,
		content: ["text", "text", "img", "caption"],
	},
	{
		section: "space",
		type: "article",
		title: "definition-13",
		icon: "forest",
		isCause: false,
		content: ["text", "text", "img", "caption"],
	},
	{
		section: "space",
		type: "article",
		title: "definition-14",
		icon: "forest",
		isCause: false,
		content: ["text", "text", "img", "caption"],
	},
	{
		section: "space",
		type: "article",
		title: "definition-15",
		icon: "forest",
		isCause: false,
		content: ["text", "text", "img", "caption"],
	},
	{
		section: "space",
		type: "article",
		title: "definition-16",
		icon: "forest",
		isCause: false,
		content: ["text", "text", "img", "caption"],
	},
	{
		section: "space",
		type: "article",
		title: "definition-17",
		icon: "forest",
		isCause: false,
		content: ["text", "text", "img", "caption"],
	},
];

/* 
先在 /lang/ch.js 加入文章 title 為 key 的 object， e.g. definition: {}

content 順序編碼從 1 開始

content 種類:
- text: 
	需到 /lang/ch.js 該文章 object 中填文字，key 為 text[在content的順序]
- img: 
	需到 public/images 加入圖片，檔名為 [文章title]-[在content的順序].png
- caption: 
	需到 /lang/ch.js 填圖片 caption，key 為 captiontitle[在content的順序] & captiontext[在content的順序]
- dbimg: 
	需到 public/images 加入圖片，檔名為 [文章title]-[在content的順序]-1.png & [文章title]-[在content的順序]-2.png
- dbimgcaption: 
	需按照 dbimg 步驟加入圖片，並到 /lang/ch.js 填圖片 caption，
	key 為 captiontitle[在content的順序]-1 & captiontext[在content的順序]-1 & 
	captiontitle[在content的順序]-2 & captiontext[在content的順序]-2
*/
