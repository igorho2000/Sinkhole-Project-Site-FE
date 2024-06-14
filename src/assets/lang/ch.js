export const ch = {
	oppositeLanguage: "EN",
	home: {
		title: "從數據探索致災性道路坍塌潛在成因",
		subtitle:
			"結合開放資料盤點各類道路坍塌潛在成因，作為未來研擬預防改善策略參考。",
		team: "製作團隊｜臺北市政府資訊局臺北大數據中心",
		collab: "合作單位｜臺北市政府工務局新工處",
		summary1:
			"2023年，臺北市發生了多起道路掏空與塌陷案件，除了最為人知的大直民宅案件外，亦發生南京西路大範圍掏空塌陷，數量之頻繁也讓媒體給了「天坑國」這樣戲謔的稱號。",
		summary2:
			"然而天坑成因眾多，個案成因亦多不同。加上道路案件數量龐大，難以逐案討論分析。因此工務局新工處與資訊局臺北大數據中心合作，透過開放資料，針對相關潛在成因進行完整的分析與討論。",
		quotetitle: "道路下方就像海洋",
		quotesubtitle: "「表面看起來沒變，但底下的變化卻遠比想像的還大的多。」新工處指出，過往一線人員發現有些路面修整完畢當下看似平坦，但總會於數個月後再次凹陷的特殊狀況。土壤往往受多種時間或空間因素影響，不僅肉眼不可見，影響也會持續累積，儘管多種因素交互影響研究不易，透過多樣的開放資料分析，仍可初步一窺全貌。",
		quoteperson: "",
		causetitle: "什麼是天坑？怎麼形成的？",
		causesubtitle:
			"天坑（Sinkhole）原指喀斯特地形的大型岩溶塌陷，多數報導常借用來形容大面積、致災性的塌陷，如道路掏空導致車輛掉入地下、房屋下陷等狀況。形成掏空的主要因素有三：土壤鬆動、水流沖刷流失、路面支持力不足。然而即使因素都具備，塌陷發生的具體時間仍難以預測，使得天坑事件難以預防。"
	},
	sidebar: {
		title: "潛在成因分析",
		subtitle:
			"從時間、空間方面進行成因分析，並透過圖標底色呈現是否為潛在成因。",
		cause: "屬潛在成因",
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
		maintitle: "以案件回報關鍵字和案件照片判斷進行標記",
		subtitle: "目標案件怎麼定義？",
		text1: "從新聞報導辨識出天坑容易，但在原始資料中並無特定欄位註明案件是否為天坑。因此在前期案件辨識上，需透過其他方式定義目標案件。",
		text2: "2019-2023年之案件紀錄中，先由新工處進行第一層案件類型篩選，去除較不相干的道路損壞類型，再由臺北大數據中心透過派工說明欄位內容之關鍵字定義案件，並人工查看案件照片進行標記。這些案件為標記掏空案件，也是本次研究的重點。",
		text3: "為了避免將同一案件會有重複報案的情形納入計算，相關案件也先經去重複處理，才進入本案比較與分析範圍。而由於天坑與掏空有密切關聯，後續研究將以「標記掏空案件」稱呼。",
		"captiontitle4-1": "關鍵字篩選與人工標記",
		"captiontext4-1": "損壞說明或派工說明包含「掏空、塌陷、坍塌、交維、交圍、下陷」，並以案件照片辨識，已有明顯坑洞者標記為2。",
		"captiontitle4-2": "描述性分析",
		"captiontext4-2": "透過比對了解樣本分佈狀況與彼此落差之處",
	},
	"overview-2": {
		title: "潛在成因怎麼看",
		maintitle: "根據特質分為時間與空間探討不同致災因素",
		subtitle: "成因眾多如何進行分析？",
		text1: "天坑的潛在致災成因可概略分為「時間」與「空間」兩類。時間成因涉及促成天坑的特殊事件，短期內增加道路塌陷的機率；空間成因則指具有高風險的空間特質，這些特質短期內不會改變，可作為潛在熱區。",
		text2: "時間分析以月為單位，統計掏空案件數量以及其他各項成因數值進行分析。若相關性接近中度相關或模型成因重要性前五名，綜合機關訪談回饋後則認定為潛在成因。",
		"captiontitle3-1": "以月為單位進行分析",
		"captiontext3-1": "以全市道路維修案件為主，非全部路面範圍，避免無案件發生點位涵蓋面積過大影響分析結果。",
		"captiontitle3-2": "時間潛在成因認定方式",
		"captiontext3-2": "機器學習模型之成因重要性可捕捉非線性關係，結合相關性分析作為判斷標準。",
		text4: "空間分析以「發生過的道路維修案件」為基礎，分析報案地點具備哪些特質較有機率屬於掏空案件。若掏空案件影響占比大於非掏空案件，且經訪談確認有影響則認定為潛在成因。相關潛在成因提供權責機關作為預防或後續改善參考。",
		"captiontitle5-1": "以案件點位進行分析",
		"captiontext5-1": "以全市道路維修案件為主，非全部路面範圍，避免無案件發生點位涵蓋面積過大影響分析結果。",
		"captiontitle5-2": "空間潛在成因認定方式",
		"captiontext5-2": "若標記掏空案件該成因影響占比大於非掏空案件，則認定為潛在成因；反之則非潛在成因。",
	},
	"overview-3": {
		title: "分析成果綜整",
		maintitle: "綜整十個潛在成因，供後續對策研擬",
		subtitle: "潛在成因有哪些？",
		text1: "透過前頁所述方法分析後，整理相關潛在成因如下。這些成因是否跟預期的一樣，還是有些出入呢？",
		text2: "道路掏空塌陷難以直接歸咎於單一成因，而成因之間彼此的影響關係，需要領域專家的進一步研究才能得知。但透過此次分析，盼能初步協助未來針對潛在變因研究相關機制，減少此類案件帶來的損失與傷亡。",
		text3: "接下來歡迎透過左側選單，或是直接於卡片頁面滾動，前往閱讀感興趣的潛在成因分析！",
		"captiontitle4-1": "認定潛在成因",
		"captiontext4-1": "",
		"captiontitle4-2": "非潛在成因",
		"captiontext4-2": "",
	},
	"time-1": {
		title: "颱風",
		maintitle: "颱風越多掏空案件越多，應巡檢並留意通報",
		subtitle: "掏空與颱風有關嗎？",
		text1: "與水有關的天災，第一順位當屬颱風。特別的是，在2023年之前，台灣已經有將近四年沒有颱風入境，若單看近三年案件並無法進行比較。",
		text2: "因此，針對有無颱風影響設定分析時間範圍為2019-2023年，而結果顯示，標記掏空案件的年度數量在颱風當年度確實較多，平均來看比無颱風年度多出近13起案件。顯示颱風對當年度整體道路掏空案件數量確實有影響。",
		text3: "颱風帶來的影響固然巨大，但具同樣影響力的還有一個因素－－地震。",
		"captiontitle5": "2019-2023年標記掏空案件數量",
		"captiontext5": "",
	},
	"time-2": {
		title: "地震數量",
		maintitle: "地震屬潛在成因但與掏空案件無線性增長關係",
		subtitle: "掏空與地震發生數量有關嗎？",
		text1: "2024年的臺灣，過於頻繁的地震讓人留下深刻印象。地震不僅對基礎設施的影響巨大，震動對土壤帶來的改變也不可忽視。",
		text2: "由於過往歷史地震(2019-2022)數量眾多，為篩選出對臺北市有較明顯影響者，針對臺北市邊界向外100公里內，芮氏5.0以上的淺層地震，統計每月的地震數量，並分析其時間序列特徵。",
		text3: "結果顯示，地震數量重要性排名第四，且因地震對都市橋梁、道路影響巨大，雖為低度負相關(-0.12)但訪談後仍認定為潛在成因。而人為因素如地基開挖，也有可能造成土壤鬆動，但多數情況是因擋土壁施作不良而導致掏空塌陷(詳後續空間分析)，不納入地震成因討論。",
		text4: "然而，土壤震鬆後短時間內仍不會立即發生掏空，還需要水流沖刷來加劇這一過程。那麼，水的來源有哪些呢？",
		"captiontitle5-1": "時間成因重要性",
		"captiontext5-1": "",
		"captiontitle5-2": "2019-2022篩選地震範圍",
		"captiontext5-2": "",
	},
	"time-3": {
		title: "月雨量",
		maintitle: "雨量屬潛在成因但與掏空案件無線性增長關係",
		subtitle: "掏空與月雨量有關嗎？",
		text1: "相較於颱風帶來的短期強降雨，月雨量則屬於長期影響土壤水分的重要因素，也反映如梅雨季、鋒面降雨等氣候狀況。",
		text2: "從分析成果觀察，月雨量在特徵重要性中排名第二，屬於重要特徵。然而，其相關性屬於低度相關，表示月雨量增加掏空案件數量未必隨之增長。目前工務局新工處針對雨量，也設下雨量達 77mm時進行道路巡檢的預防措施，預防掏空災害發生。",
		text3: "降雨落至地面後，除了匯聚至排水溝，部分也會被土壤吸收成為地下水。那麼，地下水是否對掏空案件數量有影響呢？",
		"captiontitle4-1": "時間成因重要性",
		"captiontext4-1": "",
		"captiontitle4-2": "月雨量與掏空案件數量散布圖",
		"captiontext4-2": "",
	},
	"time-4": {
		title: "地下水位",
		maintitle: "水位屬潛在成因但與掏空案件無線性增長關係",
		subtitle: "掏空與地下水位有關嗎？",
		text1: "地下水位不僅受地層與土壤類型影響而有不同分布，降雨後下滲的水量亦會影響水位。若地下水位較高，水分進入土壤中影響土壤穩定性，亦可能間接導致掏空發生。",
		text2: "根據臺北市的九個地下水位測站的資料，取各測站每月水位的中位數作為該月數值代表，觀察其是否屬於重要特徵。結果顯示，臺大測站之地下水位重要性排行第三，但卻屬低度相關(-0.13)，雖無直接影響但可能結合其他成因亦有其影響力，待未來進一步深入分析。",
		text3: "土壤中的水分經過地下後，一部分會再匯聚出地表流入河川。那麼，河川水位本身是否也會對道路掏空造成影響呢？",
		"captiontitle4-1": "時間成因重要性",
		"captiontext4-1": "",
		"captiontitle4-2": "地下水位與掏空案件數量散布圖",
		"captiontext4-2": "",
	},
	"time-5": {
		title: "河川水位",
		maintitle: "河川水位非潛在成因且相關性低",
		subtitle: "掏空與河川水位有關嗎？",
		text1: "根據過往研究，河川水位的高低會影響河川周遭地區的地下水位。而地下水位若改變，亦可能影響道路掏空案件發生的機率。",
		text2: "以臺北市內的二個河川水位測站的資料（2019－2022），並取各月水位中位數為該月代表觀察，結果顯示，河川水位的特徵重要性僅排在第八位，相關性也很低（寶橋測站0.12、萬福橋測站0.047），應與掏空案件數量無關。",
		text3: "河川的水位除了受上游的注入量影響，也與下游的漲退潮有關，那麼潮位是否也會影響道路掏空呢？",
		"captiontitle4-1": "時間成因重要性",
		"captiontext4-1": "",
		"captiontitle4-2": "河川水位與掏空案件數量散布圖",
		"captiontext4-2": "",
	},
	"time-6": {
		title: "潮位",
		maintitle: "潮位屬潛在成因且與掏空案件中度相關",
		subtitle: "掏空與潮位有關嗎？",
		text1: "2023年的天坑案件中，南京西路一案報導提及疑似因潮位影響加上排水管破洞，導致土石長期被沖刷帶走。由此來看，潮位似乎也是潛在掏空成因之一。",
		text2: "以位於淡水紅毛城附近的潮位站作為潮位代表進行分析，並以該月平均潮位做為代表。結果出乎意料，平均潮位是排名第一的重要特徵，而相關性亦接近中度相關(0.39)。第一線的路隊人員也反映，自過往經驗來看，潮位確實對道路掏空有影響。",
		text3: "至此，時間成因已經探索完畢，接下來將從地理空間特質切入，細探相關空間成因。",
		"captiontitle4-1": "時間成因重要性",
		"captiontext4-1": "",
		"captiontitle4-2": "潮位與掏空案件數量散布圖",
		"captiontext4-2": "",
	},
	"space-1": {
		title: "建案施工",
		maintitle: "雖非多數掏空成因，仍應落實監測通報機制",
		subtitle: "掏空與建案有關嗎？",
		text1: "民眾最關心也是報導較多的，莫過於建案施工。不過掏空案件中，真的大多是建案引起的嗎？",
		text2: "經過點位與時間範圍篩選後，標記案件中屬建案影響者比例僅佔 1.3%，顯示建案並非多數掏空案件的成因。掏空案件中亦有側溝破損、局部路面損壞導致的狀況，並非都因建案導致。",
		text3: "然而施工疏漏造成的掏空案件數量雖少但危害巨大，即使案件量稀少，仍應落實工地巡檢及通報機制來提早防範。",
		text4: "案件位置除了可能受周遭建案影響，本身於道路發生的位置亦值得深入探究，如側溝與路面交界處，掏空案件是否更常發生？",
		"captiontitle5-1": "建案影響案件占比",
		"captiontext5-1": "建案施工相較於一般路面破損，更容易因人為疏失而引致較大規模之災害，案件影響佔比也略高於非掏空案件。",
		"captiontitle5-2": "建案影響案件篩選方式",
		"captiontext5-2": "若道路維修案件申報時間落於建案開工日期後，且建案位置座落於案件半徑10米內的案件，則定義為建案影響。",
	},
	"space-2": {
		title: "鋪面交界處",
		maintitle: "多數案件近路心，非交界處工程介面影響導致",
		subtitle: "掏空與鋪面交界處有關嗎？",
		text1: "從建築線向外，首先會接觸到路邊的基礎設施如排水溝抑或是共同管線溝。而路面與側溝由於工法不同，存在所謂的道路交界面，通常也是工程施作上較困難且易發生問題之處。大多數掏空案件會不會與施工交界面有關？",
		text2: "觀察位置比值可發現多數掏空案件位於路心附近，而路肩、路面則分居第二、第三。路肩的掏空案件中多為溝體本身老舊或遭外力破壞導致，非介面工法影響，因此非掏空成因。對應此類案件，可安排定期巡檢以及早發現應對。",
		text3: "除建築、道路外，大範圍地層性質相關的土壤液化潛勢，是否也屬潛在成因？",
		"captiontitle4-1": "位置比值折線圖",
		"captiontext4-1": "多數案件落於路心位置，路肩、路面中央則分居第二、第三。少數案件因落於道路邊界線外(位置比值>1)於此不呈現。",
		"captiontitle4-2": "位置比值計算方式",
		"captiontext4-2": "透過簡單的計算，畫出道路案件位置與道路中心線的垂直距離，並除以一半道路寬度來觀察。若比值越接近1則代表越靠近路肩。",
	},
	"space-3": {
		title: "土壤液化潛勢",
		maintitle: "高潛勢區案件密度高，留意巡檢並強化支持力",
		subtitle: "掏空與土壤液化潛勢有關嗎？",
		text1: "提到道路塌陷，多數人直覺會想到土壤液化潛勢。土壤液化不僅對建築地基造成危害，路基也可能因此流失。透過數據觀察，是否也可得到一樣的證據？",
		text2: "分析結果發現，高潛勢區域的案件密度達到2.1 件/km²，高於中潛勢（1.3 件/km²）和低潛勢（1.3 件/km²）。掏空案件發生件數確實高於中低潛勢區，除了通報時留意巡檢，未來在該地區也可考慮因地制宜調整工法，強化路基或路面支持力。",
		text3: "除了城市內的地區，臨河區域是否也有更多掏空案件呢？",
		"captiontitle4-1": "土壤液化潛勢案件密度",
		"captiontext4-1": "透過統計位於各潛勢區域之案件數量，並除以土壤液化潛勢面積，得出各潛勢區域的案件密度。",
		"captiontitle4-2": "土壤液化潛勢範圍圖",
		"captiontext4-2": "顏色越深代表土壤液化潛勢越高，共分高中低三級。",
	},
	"space-4": {
		title: "臨河區域",
		maintitle: "臨河區域發生掏空案件比例低於市區",
		subtitle: "掏空是否好發於臨河區域？",
		text1: "臺北為沖積平原，臨河一帶是否會因河川沖刷與堆積的地質作用，比較容易發生掏空案件？",
		text2: "參考相關論文，將離河500米範圍內的掏空案件進行統計。結果顯示，標記掏空案件中僅約23.6%落於臨河500米區域，低於非標記掏空案件的34.7%。因此，臨河一帶相較容易發生掏空的假設不成立。",
		text3: "空間上除了河川外，水系管線也是會造成沖刷影響的因素。比如管線破洞漏水等，都可能帶來潛在掏空風險。那麼，水系搶修案件或管線分布是否會對掏空造成影響呢？",
		"captiontitle4-1": "臨河500m範圍內案件占比",
		"captiontext4-1": "計算位於河川邊界線外500m範圍內之案件數，並除以該類型案件總數得出案件占比。",
		"captiontitle4-2": "臨河500m範圍與標記掏空案件分布",
		"captiontext4-2": "臨河範圍定義參考：劉格非、黃南輝、楊代強，《受潮汐影響之地下水資料分析》，1994。",
	},
	"space-5": {
		title: "水系搶修案件",
		maintitle: "非多數掏空案件成因，但仍應納入預防考量",
		subtitle: "掏空與水系搶修案件有關嗎？",
		text1: "水系管線如自來水給水、污水或排水等管線系統，是城市基礎建設的重要部分。由於分布廣泛且密集，管線修復需求也十分頻繁，而相關管線維修前的狀況（如：漏水）是否會間接導致掏空？",
		text2: "結果顯示，人工標記的掏空案件中，有 8.3%受到水系搶修影響。雖然這並非主要原因，但相較於建案占比 1%已屬相對較高，可請相關搶修單位開挖時協助留意狀況，若有掏空疑慮則可通報處理及早預防。",
		text3: "有管線才需要維修，那麼管線分布越密集或越老舊，是否也越可能造成掏空？",
		"captiontitle4-1": "水系搶修案件占比",
		"captiontext4-1": "水系管線包含自來水給水管線、汙水管線、雨水管線、雨水側溝及連接管線等管線系統，因相關管線引起之搶修則稱之為水系搶修案件。",
		"captiontitle4-2": "水系搶修影響分析方式",
		"captiontext4-2": "水系搶修案件位於道路維修案件半徑10米內，且水系搶修發生於道路案件申報的前30日或後5日，可將相關案件定義為受水系搶修影響。",
	},
	"space-6": {
		title: "水系管線分布",
		maintitle: "掏空案件周遭管線數較多且較舊",
		subtitle: "掏空與水系管線分布有關嗎？",
		text1: "城市中只要有人活動、居住的空間，就會有用水需求。水系管線本身既有分布疏密，也受設置方式和使用年限影響。這些因素是否也與道路掏空案件的發生數量有關？",
		text2: "透過比較標記掏空案件半徑5米內的水系管線數量及設置年份，與非標記掏空案件進行比對。結果顯示，標記掏空案件周遭的水系管線數量較多，中位數約為10條，高於非標記掏空案件的6條。",
		text3: "此外，標記掏空案件中，管線設置年份多為1993年，相比非標記掏空案件的2000年更為老舊。因此，未來若發現掏空案件周遭管線數較多，應確認是否有管線老舊跡象，避免漏水疑慮。",
		text4: "除了管線，若從土壤承受壓力的角度思考，建築物的容積或樓層數量是否會影響掏空形成？",
		"captiontitle5-1": "案件周遭水系管線分布數量",
		"captiontext5-1": "以水系管線數量中位數",
		"captiontitle5-2": "案件周遭水系管線年份分布",
		"captiontext5-2": "依照管線設立年分進行統計",
	},
	"space-7": {
		title: "建築面積與樓層數",
		maintitle: "除道路外多發生於市區內低樓層建物附近",
		subtitle: "掏空與建築面積和樓層數有關嗎？",
		text1: "隨著建築物的落成，各區土壤會承受不同程度的壓力。而開挖基礎的深度不同，也可能導致地下水流向的變化。",
		text2: "以案件經緯度為中心，統計案件半徑5米內涵蓋到的建物面積和樓層數分布。結果顯示，掏空案件多發生於市區內，且附近建物以低樓層居多。",
		text3: "針對此現象，新工處推測與城市發展有關。舊城區由於較早發展，因此道路、管線等基礎設施較早建置，面臨老舊破損和更新的需求自然較多。",
		text4: "地底下除了建築物和管線，日常搭乘的捷運、火車甚至高鐵，大眾運輸設施也是地面下不可忽視的存在，道路掏空是否與其有關？",
		"captiontitle5-1": "建蔽面積分析",
		"captiontext5-1": "標記掏空案件中，建蔽面積平均值與中位數都大於非掏空案件，顯示多位於市區之中。",
		"captiontitle5-2": "樓層數分析",
		"captiontext5-2": "標記掏空案件多發生於低樓層建物周遭，除了都市發展脈絡影響外，若城市中多數建築多為低樓層亦可能導致此現象。",
	},
	"space-8": {
		title: "地下構造物",
		maintitle: "案件量極低且與地下構造物無關",
		subtitle: "掏空與地下構造物有關嗎？",
		text1: "地面下方除了大量的管線、設施，公共運輸的隧道與相關構造也會對於土壤承載有一定影響。",
		text2: "由於過往圖資僅有路線，因此以高鐵、臺鐵與捷運路線為中心線，參考捷運隧道結構圖，概估向外半徑6.5米為隧道涵蓋範圍，並統計落於此範圍的案件數量。",
		text3: "結果顯示，標記掏空案件極少發生於有地下構造物的路面上。高鐵和臺鐵路線未涵蓋任何掏空案件，即便較密集的捷運路網也僅包含7件。由此推定與地下構造物無關。",
		text4: "這些發現可提供新工處作為後續規劃的參考，並協助將過往發生的案件進行跨資料集比對。道路掏空塌陷難以歸因於單一成因，但透過此次分析，可協助未來團隊針對重要變因研究相關機制，減少道路掏空塌陷帶來的損失與傷亡。",
		"captiontitle5-1": "地下構造物影響案件占比",
		"captiontext5-1": "標記掏空案件中，建蔽面積平均值與中位數都大於非掏空案件，顯示多位於市區之中。",
		"captiontitle5-2": "地下構造物涵蓋範圍推估",
		"captiontext5-2": "參考《捷運隧道主體地下結構3D資料庫建置》中〈潛盾隧道標準剖面圖〉，落於此範圍內案件認定為受地下構造物影響。",
	},
	"space-9": {
		title: "結語",
		maintitle: "開放資料應用於災害分析首例",
		subtitle: "掏空與地下構造物有關嗎？",
		text1: "地面下方除了大量的管線、設施，公共運輸的隧道與相關構造也會對於土壤承載有一定影響。",
		text2: "由於過往圖資僅有路線，因此以高鐵、臺鐵與捷運路線為中心線，參考捷運隧道結構圖，概估向外半徑6.5米為隧道涵蓋範圍，並統計落於此範圍的案件數量。",
		text3: "結果顯示，標記掏空案件極少發生於有地下構造物的路面上。高鐵和臺鐵路線未涵蓋任何掏空案件，即便較密集的捷運路網也僅包含7件。由此推定與地下構造物無關。",
		text4: "這些發現可提供新工處作為後續規劃的參考，並協助將過往發生的案件進行跨資料集比對。道路掏空塌陷難以歸因於單一成因，但透過此次分析，可協助未來團隊針對重要變因研究相關機制，減少道路掏空塌陷帶來的損失與傷亡。",
		"captiontitle5-1": "地下構造物影響案件占比",
		"captiontext5-1": "標記掏空案件中，建蔽面積平均值與中位數都大於非掏空案件，顯示多位於市區之中。",
		"captiontitle5-2": "地下構造物涵蓋範圍推估",
		"captiontext5-2": "參考《捷運隧道主體地下結構3D資料庫建置》中〈潛盾隧道標準剖面圖〉，落於此範圍內案件認定為受地下構造物影響。",
	},
	credits: {
		open: "成果開源",
		description: "透過數據，打造更安全的明日臺北。",
		team: "團隊名單",
		data: "使用資料集",
		"team-1": "案件去重＿＿＿＿＿Iima Yu, Wayne Hung",
		"team-2": "技術指導＿＿＿＿＿Iima Yu, Jack Huang",
		"team-3": "前端工程＿＿＿＿＿Igor Ho",
		"team-4": "資料分析＿＿＿＿＿Chu Chen",
		"team-5": "空間分析＿＿＿＿＿Chu Chen",
		"team-6": "介面設計＿＿＿＿＿Chu Chen",
		"team-7": "文章編輯＿＿＿＿＿Chu Chen"
	},
};
