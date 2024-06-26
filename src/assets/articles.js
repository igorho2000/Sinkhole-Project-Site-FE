export const articles = [
	{
		section: "overview",
		type: "article",
		title: "overview-1",
		icon: "adjust",
		isCause: true,
		content: ["text", "text", "text", "img", "caption"],
	},
	{
		section: "overview",
		type: "article",
		title: "overview-2",
		icon: "search",
		isCause: true,
		content: ["text", "text", "dbimgcaption", "text", "dbimgcaption"],
	},
	{
		section: "overview",
		type: "article",
		title: "overview-3",
		icon: "dns",
		isCause: true,
		content: ["text", "text", "text", "dbimgcaption"],
	},
	{
		section: "time",
		type: "article",
		title: "time-1",
		icon: "storm",
		isCause: true,
		content: ["text", "text", "text", "img", "caption"],
	},
	{
		section: "time",
		type: "article",
		title: "time-2",
		icon: "tsunami",
		isCause: true,
		content: ["text", "text", "text", "dbimgcaption"],
	},
	{
		section: "time",
		type: "article",
		title: "time-3",
		icon: "thunderstorm",
		isCause: false,
		content: ["text", "text", "text", "dbimgcaption"],
	},
	{
		section: "time",
		type: "article",
		title: "time-4",
		icon: "water_drop",
		isCause: true,
		content: ["text", "text", "text", "dbimgcaption"],
	},
	{
		section: "time",
		type: "article",
		title: "time-5",
		icon: "broken_image",
		isCause: false,
		content: ["text", "text", "text", "text", "dbimgcaption"],
	},
	{
		section: "time",
		type: "article",
		title: "time-6",
		icon: "sailing",
		isCause: false,
		content: ["text", "text", "text", "dbimgcaption"],
	},
	{
		section: "space",
		type: "article",
		title: "space-1",
		icon: "construction",
		isCause: true,
		content: ["text", "text", "dbimgcaption", "text", "text"],
	},
	{
		section: "space",
		type: "article",
		title: "space-2",
		icon: "location_on",
		isCause: false,
		content: ["text", "text", "dbimgcaption", "text"],
	},
	{
		section: "space",
		type: "article",
		title: "space-3",
		icon: "flood",
		isCause: true,
		content: ["text", "text", "dbimgcaption", "text"],
	},
	{
		section: "space",
		type: "article",
		title: "space-4",
		icon: "waves",
		isCause: false,
		content: ["text", "text", "dbimgcaption", "text"],
	},
	{
		section: "space",
		type: "article",
		title: "space-5",
		icon: "plumbing",
		isCause: true,
		content: ["text", "text", "dbimgcaption", "text"],
	},
	{
		section: "space",
		type: "article",
		title: "space-6",
		icon: "bathroom",
		isCause: true,
		content: ["text", "text", "dbimgcaption", "text", "text"],
	},
	{
		section: "space",
		type: "article",
		title: "space-7",
		icon: "apartment",
		isCause: true,
		content: ["text", "text", "dbimgcaption", "text", "text"],
	},
	{
		section: "space",
		type: "article",
		title: "space-8",
		icon: "subway",
		isCause: false,
		content: ["text", "text", "dbimgcaption", "text", "text"],
	},
	{
		section: "space",
		type: "article",
		title: "space-9",
		icon: "flare",
		isCause: false,
		content: ["text", "text", "text", "text"],
	},
];

/* 
先在 /lang/ch.js 加入文章 title 為 key 的 object， e.g. overview-1: {}

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
