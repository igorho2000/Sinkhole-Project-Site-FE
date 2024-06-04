export const ch = {
	oppositeLanguage: "EN",
	home: {
		title: "從數據探索致災性道路坍塌潛在成因",
		subtitle:
			"透過開放資料盤點各類道路坍塌潛在成因以及歷年案件發生分布，釐清是否為重要潛在成因並作為未來研擬預防、改善策略之參考。",
		team: "製作團隊｜臺北市政府資訊局臺北大數據中心",
		collab: "合作單位｜臺北市政府工務局新工處",
		summary1:
			"2023年，臺北市發生了多起道路掏空與塌陷案件，除了最為人知的大直民宅案件外，亦發生南京西路大範圍掏空塌陷，數量之頻繁也讓媒體給了「天坑國」這樣戲謔的稱號。",
		summary2:
			"然而天坑成因眾多，個案成因亦多不同。加上道路案件數量龐大，難以逐案討論分析。因此新工處與臺北大數據中心合作，透過開放資料，針對相關潛在成因進行完整的分析與討論。",
		quotetitle: "道路下方就像海洋",
		quotesubtitle: "「表面看起來沒變，但底下的變化卻遠比想像的還大的多。」新工處指出，過往一線人員發現有路面修整完畢當下看似平坦，但總會於數個月後凹陷的特殊狀況。土壤狀況往往受多種時間、空間因素影響，且不僅肉眼不可見，影響也會持續累積，多種因素交互影響，也讓相關研究更加不易。",
		quoteperson: "____工務局新工處主任",
		causetitle: "什麼是天坑？怎麼形成的？",
		causesubtitle:
			"天坑（Sinkhole）原指喀斯特地形發生之大型岩溶塌陷，但由於其深邃而震撼的印象過於傳神，多數報導多直接挪用以表達塌陷面積大、致災影響大的坑洞案件，好比道路掏空導致車輛或路面掉入地下。若以較直觀角度理解，可粗略將形成原因分為三要件：土壤鬆動流失、水流沖刷、路面支持力不足。而即便三要件皆滿足，何時會突破坍塌的臨界點也仍是未知數，這也造就了天坑案件極難預先預防的狀態。"
	},
	sidebar: {
		title: "潛在成因分析",
		subtitle:
			"依照不同面向進行成因探索，並透過圖標底色呈現是否為重要成因。",
		cause: "有影響",
		nocause: "無影響",
	},
	sections: {
		overview: "概要",
		overviewdesc: "如何從資料辨識潛在掏空案件，以及進行後續變因的探討。",
		time: "時間",
		timedesc: "時間上的潛在影響因素，如降雨、地震發生數量、潮汐等。",
		space: "空間",
		spacedesc: "空間上的潛在影響因素，如土壤液化、建案、離河遠近等。",
	},
	"overview-1": {
		title: "掏空案件怎麼找",
		maintitle: "以案件回報關鍵字與人工判斷標記",
		subtitle: "目標案件怎麼定義？",
		text1: "從新聞報導辨識出天坑容易，但新工處內部道路維修管理平台原始資料中，並無特定欄位註明案件是否為天坑。因此在前期案件辨識上，需透過其他方式定義目標案件。",
		text2: "2019-2023年之案件紀錄中，先由新工處進行第一層案件類型篩選，去除較不相干的道路損壞類型，再由臺北大數據中心透過派工說明欄位內容之關鍵字定義案件，並人工查看案件照片進行標記。這些案件為標記掏空案件，也是本次研究的重點。",
		text4: "為了避免將同一案件會有重複報案的情形納入計算，相關案件也先經去重複處理，才進入本案比較與分析範圍。而由於天坑與掏空有密切關聯，後續研究將以「標記掏空案件」稱呼。",
		captiontitle5: "Step 1：關鍵字篩選",
		captiontext5:
			"摸壞說明or派工說明包含「掏空、塌陷、坍塌、交維、交圍、下陷」",
	},
	"overview-2": {
		title: "潛在成因怎麼看",
		maintitle: "依成因特質粗分為時間與空間分別探討",
		subtitle: "成因眾多怎麼進行探討？",
		text1: "由於潛在致災成因眾多，分析上依照致災成因特質初步歸類為「時間」與「空間」二大類別，時間成因主要尋找促成天坑發生的特殊事件，短時間內變化易增加道路塌陷發生機率；空間成因則屬於既有高風險空間特質，由於該特質短時間內不會改變，可以此作為潛在熱區。",
		text2: "透過描述性統計，比較標記掏空案件與非標記掏空案件之數據、分布位置，得出掏空案件較明顯之特質。而時間序列上，也引入機器學習輔助，協助找尋難以直觀發現的關聯性，並輔以相關矩陣分析確認是否具相關性。",
		captiontitle3: "註：部分成因其實兼具時空間變化，比如地下水位，隨測站地點不同各地區水位高度亦有不同變化。此部分於本研究中暫先歸入時間序列分析，並將多處測站納入比對，以反映空間上之分布影響。",
		captiontext3: "",
	},
	"time-1": {
		title: "颱風",
		maintitle: "標記掏空案件總量於有颱風當年確實較高",
		subtitle: "掏空與颱風有關嗎？",
		text1: "談到與水相關的天災，第一順位當屬颱風。特別的是，在2023年之前，台灣已經有將近四年沒有颱風入境，若單看近三年案件並無法進行比較。",
		text2: "因此，針對有無颱風當年的掏空案件數量，分析的時間範圍設定為2019-2023年。結果顯示，標記掏空案件的年度數量在颱風當年度確實較多，相較於無颱風年度高出??%。顯示颱風對道路掏空案件數量確實有影響。",
		text4: "颱風帶來的是短時間的豪大雨，那長時間的降雨呢？",
	},
	"time-2": {
		title: "地震數量",
		maintitle: "有關，但不是地震越多掏空就越多。",
		subtitle: "掏空與地震發生數量有關嗎？",
		text1: "2024年的臺灣，最讓人有感的莫過於地震了。不僅對基礎設施的影響巨大，震動對土壤帶來的改變也不可忽視。",
		text2: "由於過往歷史地震(2019-2022)數量眾多，為篩選出對臺北市有較明顯影響者，針對臺北市邊界向外100公里內，芮氏5.0以上的淺層地震，統計每月的地震數量，並分析其時間序列特徵。",
		text4: "結果顯示，地震數量排名第四，屬於重要特徵且具有一定影響力。類似人為因素如地基開挖，也有可能造成土壤鬆動導致塌陷，但多數情況是因側向支撐擋土壁施作所致。",
		text5: "然而，土壤震鬆後短時間內仍不會立即發生掏空，還需要水流沖刷來加劇這一過程。那麼，水的來源有哪些呢？",
	},
	"time-3": {
		title: "月雨量",
		maintitle: "有關，但非雨量越多掏空數量就越多的線性關係",
		subtitle: "掏空與月雨量有關嗎？",
		text1: "相較於颱風帶來的短期強降雨，月雨量則屬於長期影響土壤水分的重要因素。",
		text2: "根據中央氣象署歷史氣象資料中，臺北測站的月雨量資料進行時間序列分析，月雨量在特徵重要性中排名第二，屬於重要特徵。然而，其相關性屬於低度相關，表示月雨量與掏空案件數量可能存在非線性關係。",
		text4: "降雨落至地面後，除了匯聚至排水溝，部分也會被土壤吸收成為地下水。那麼，地下水是否對掏空案件數量有影響呢？",
	},
	"time-4": {
		title: "地下水位",
		maintitle: "有關，但非水位越高導致掏空越多的線性關係",
		subtitle: "掏空與地下水位有關嗎？",
		text1: "地下水位不僅受地層與土壤類型影響而有不同分布，降雨後下滲的水量亦會影響水位。若地下水位較高，水分進入土壤中影響土壤穩定性，亦可能間接導致掏空發生。",
		text2: "根據臺北市的9個地下水位測站的資料，取各測站每月水位的中位數作為該月數值代表，觀察其是否屬於重要特徵。結果顯示，臺大測站之地下水位重要性排行第三，但其相關係數卻很低，亦可能存在非線性關係。",
		text4: "根據臺北市的9個地下水位測站的資料，取各測站每月水位的中位數作為該月數值代表，觀察其是否屬於重要特徵。結果顯示，臺大測站之地下水位重要性排行第三，但其相關係數卻很低，亦可能存在非線性關係。",
		text5: "土壤中的水分經過地下後，一部分會再匯聚出地表流入河川。那麼，河川水位本身是否也會對道路掏空造成影響呢？",
	},
	"time-5": {
		title: "河川水位",
		maintitle: "無關，",
		subtitle: "掏空與河川水位有關嗎？",
		text1: "根據過往研究，河川水位的高低會影響河川周遭地區的地下水位。因此，離河較近的區域可能也會受此影響，增加道路掏空案件發生的機率。",
		text2: "以臺北市內的二個河川水位測站2019至2022年的資料，並取各月水位中位數為該月代表觀察，結果顯示，河川水位的特徵重要性僅排在第八位，相關性也很低（寶橋測站0.12、萬福橋測站0.047），應與掏空案件數量無關。",
		text4: "如果說河川的水最終會匯聚到大海，那麼潮位是否也會影響道路掏空呢？",
	},
	"time-6": {
		title: "潮位",
		maintitle: "有明顯相關，且確實對掏空案件數量有影響",
		subtitle: "掏空與潮位有關嗎？",
		text1: "2023年的天坑案件中，南京西路一案報導提及疑似因潮位影響加上排水管破洞，導致土石長期被沖刷帶走。由此來看，潮位似乎也是潛在掏空成因之一。",
		text2: "以位於淡水紅毛城附近的潮位站作為潮位代表進行分析，並以該月平均潮位做為代表。結果出乎意料，平均潮位是排名第一的重要特徵，而相關性亦接近中度相關(0.39)。第一線的路隊人員也反映，自過往經驗來看，潮位確實對道路掏空有影響。",
		text4: "至此，大多與水相關的時間因素已經盤點完畢，除了時間因素外，空間也是不可或缺的重要觀察面向。",
	},
	"space-1": {
		title: "建案施工",
		maintitle: "以損壞說明關鍵字與人工判斷標記之",
		subtitle: "目標案件怎麼定義？",
		text1: "由於現有資料沒有欄位人工標記天坑，故經由有被報導的天坑資料中，由ChatGPT整理重要關鍵字，並人工補上可能相關的關鍵字。",
		text2: "關鍵字：損壞說明or派工說明包含「掏空、塌陷、坍塌、交維、交圍、下陷 」",
	},
	"space-2": {
		title: "河川水位",
		maintitle: "以損壞說明關鍵字與人工判斷標記之",
		subtitle: "目標案件怎麼定義？",
		text1: "由於現有資料沒有欄位人工標記天坑，故經由有被報導的天坑資料中，由ChatGPT整理重要關鍵字，並人工補上可能相關的關鍵字。",
		text2: "關鍵字：損壞說明or派工說明包含「掏空、塌陷、坍塌、交維、交圍、下陷 」",
	},
	"space-3": {
		title: "地下水位",
		maintitle: "以損壞說明關鍵字與人工判斷標記之",
		subtitle: "目標案件怎麼定義？",
		text1: "由於現有資料沒有欄位人工標記天坑，故經由有被報導的天坑資料中，由ChatGPT整理重要關鍵字，並人工補上可能相關的關鍵字。",
		text2: "關鍵字：損壞說明or派工說明包含「掏空、塌陷、坍塌、交維、交圍、下陷 」",
	},
	credits: {
		open: "成果開源",
		description: "透過數據，打造更好的明日臺北。",
		team: "團隊名單",
		data: "使用資料集",
		"team-1": "資料分析＿＿＿＿＿Iima Yu",
		"team-2": "預測模擬＿＿＿＿＿Jack Huang",
		"team-3": "空間分析＿＿＿＿＿Ian Huang",
		"team-4": "前端工程＿＿＿＿＿Igor Ho",
		"team-5": "介面設計＿＿＿＿＿Chu Chen",
		"team-6": "文章編輯＿＿＿＿＿Chu Chen",
	},
};
