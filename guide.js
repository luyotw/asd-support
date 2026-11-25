// Generated from catalog.json by build-content.py.
const { categories, resourceGroups, situations, sources, articles, withdrawnArticles } = {
  "version": 1,
  "categories": [
    {
      "id": "routines",
      "label": "日常作息與轉換",
      "icon": "repeat",
      "color": "mint",
      "description": "出門、用餐、睡前與結束活動"
    },
    {
      "id": "communication",
      "label": "溝通與人際互動",
      "icon": "message",
      "color": "lavender",
      "description": "表達需要、拒絕與互動求助"
    },
    {
      "id": "sensory",
      "label": "感官與環境",
      "icon": "sparkles",
      "color": "sand",
      "description": "聲音、燈光與衣物觸感"
    },
    {
      "id": "feelings",
      "label": "情緒與壓力",
      "icon": "heart",
      "color": "rose",
      "description": "陪伴情緒、察覺壓力與事後回顧"
    },
    {
      "id": "body",
      "label": "身體成長與界線",
      "icon": "user",
      "color": "orange",
      "description": "初經、變聲與身體自主"
    },
    {
      "id": "school",
      "label": "學校生活與親師合作",
      "icon": "book",
      "color": "blue",
      "description": "換班適應、和老師討論支持"
    },
    {
      "id": "caregiver",
      "label": "照顧者支持",
      "icon": "hands",
      "color": "mint",
      "description": "照顧分工、家長支持與早療對話"
    }
  ],
  "situations": [
    {
      "id": "transitions",
      "label": "收玩具或換活動",
      "prompt": "要收玩具時，孩子還想繼續玩",
      "icon": "repeat",
      "color": "mint"
    },
    {
      "id": "changes",
      "label": "行程變動",
      "prompt": "原本說好的行程臨時變了",
      "icon": "repeat",
      "color": "mint"
    },
    {
      "id": "meals",
      "label": "用餐",
      "prompt": "準備吃飯時，孩子還沒準備好到餐桌",
      "icon": "meal",
      "color": "orange"
    },
    {
      "id": "routines",
      "label": "睡前準備",
      "prompt": "睡前有好幾件事，孩子想知道接下來要做什麼",
      "icon": "moon",
      "color": "blue"
    },
    {
      "id": "communication",
      "label": "表達需要",
      "prompt": "孩子想要或拒絕某樣東西，我還沒理解",
      "icon": "message",
      "color": "lavender"
    },
    {
      "id": "sensory",
      "label": "聲音、光線或觸感",
      "prompt": "聲音太吵、光太亮，或孩子覺得衣服刺刺的",
      "icon": "sparkles",
      "color": "sand"
    },
    {
      "id": "feelings",
      "label": "挫折或緊張",
      "prompt": "孩子很挫折，我想知道怎麼陪伴",
      "icon": "heart",
      "color": "rose"
    },
    {
      "id": "school",
      "label": "跟老師討論",
      "prompt": "我想和老師討論孩子在學校需要的支持",
      "icon": "book",
      "color": "blue"
    },
    {
      "id": "caregiver",
      "label": "找人一起分擔",
      "prompt": "我想休息一下，需要找人一起分擔照顧",
      "icon": "hands",
      "color": "mint"
    },
    {
      "id": "local-support",
      "label": "查找在地資源",
      "prompt": "我想了解附近有哪些兒童發展服務",
      "icon": "book",
      "color": "blue"
    },
    {
      "id": "early-intervention",
      "label": "想了解早療",
      "prompt": "我想了解早療或早療補助",
      "icon": "hands",
      "color": "mint",
      "resourceInterest": true
    },
    {
      "id": "special-education",
      "label": "想了解特教鑑定",
      "prompt": "我想了解特教鑑定或重評",
      "icon": "book",
      "color": "blue",
      "resourceInterest": true
    },
    {
      "id": "disability-certificate",
      "label": "想了解身障證明",
      "prompt": "我想了解身障證明怎麼評估或申請",
      "icon": "check",
      "color": "blue",
      "resourceInterest": true
    },
    {
      "id": "benefit-lookup",
      "label": "想查福利與優惠",
      "prompt": "我想查身障福利或愛心卡",
      "icon": "hands",
      "color": "mint",
      "resourceInterest": true
    },
    {
      "id": "insurance-lookup",
      "label": "想了解領證與投保",
      "prompt": "我想了解領證和投保各自會有哪些影響",
      "icon": "lock",
      "color": "sand",
      "resourceInterest": true
    }
  ],
  "sources": {
    "pp-visual": {
      "name": "視覺支持入門",
      "originalTitle": "An Introduction to Visual Supports",
      "publisher": "Positive Partnerships",
      "version": "2020-06",
      "checked": "2026-11-19",
      "description": "如何依孩子的理解和偏好選擇圖像、實物或文字。參考第 1–2 頁的主文。",
      "rights": "原文標示 CC BY 4.0。改寫範圍含原作者主文，排除第三方引文、圖片和標誌。",
      "attribution": "澳洲政府教育部版權（2008 年起，另有標示者依原文）。資料取自 Positive Partnerships，查閱於 2026-11-18，並由星泊改寫為繁中與居家範例。",
      "url": "https://www.positivepartnerships.com.au/uploads/Visual-supports_21.03.22.pdf",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "第 1 頁明確說明視覺支持如何依自閉症者的理解與需要個別化。",
      "scopeChecked": "2026-11-19",
      "auditId": "P01",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.positivepartnerships.com.au/terms-of-use",
      "reviewChecked": "2026-11-19",
      "reviewScope": "第1–2頁作者主文；不取Wong引文／照片／標誌",
      "currencyStatus": "usable",
      "currencyEvidence": "原檔與現有主文逐項比對；以2025工作手冊的視覺／溝通及個別化原則交叉核對。",
      "sourceAudience": "學齡ASD孩子；未訂數字適齡"
    },
    "pp-transitions": {
      "name": "為活動轉換與變動做準備",
      "originalTitle": "Transitions and Planning for Change",
      "publisher": "Positive Partnerships",
      "version": "2023-07",
      "checked": "2026-11-19",
      "description": "如何和孩子一起為生活安排變動做準備。參考第 2 頁的規劃提示。",
      "rights": "原文標示 CC BY 4.0。改寫範圍含原作者主文，排除第三方引文、圖片和標誌。",
      "attribution": "澳洲政府教育部版權（2008 年起，另有標示者依原文）。資料取自 Positive Partnerships，查閱於 2026-11-18，並由星泊改寫為繁中與居家範例。",
      "url": "https://www.positivepartnerships.com.au/uploads/Transitions_and_Planning_for_Change_GL_RSCE_0014.pdf",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "第 1–2 頁明確討論自閉症年輕人的活動轉換、變動與支持計畫。",
      "scopeChecked": "2026-11-19",
      "auditId": "P02",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.positivepartnerships.com.au/terms-of-use",
      "reviewChecked": "2026-11-19",
      "reviewScope": "第1–2頁作者主文，排除Hayley Moss引文",
      "currencyStatus": "usable",
      "currencyEvidence": "已核官方現行轉換入口與原檔；保留「倒數須有安定作用」條件。",
      "sourceAudience": "ASD兒童／年輕人，含學前與學校轉銜；未訂數字適齡"
    },
    "rr": {
      "name": "互動節奏與感官環境",
      "authors": "Stuart Daniel、Matthew Laurie、Jonathan Delafield-Butt",
      "originalTitle": "A handbook for Rhythmic Relating in autism: supporting social timing in play, learning and therapy",
      "publisher": "Frontiers in Psychology",
      "version": "2024-09-18",
      "checked": "2026-11-19",
      "description": "僅參考作者正文的清楚語句與留出回應時間；不沿用另經許可轉載的表3／4。",
      "rights": "作者正文標示 CC BY 4.0。本專案只改寫清楚語句與等待回應段，排除另行署名的轉載表格與圖像。",
      "attribution": "© 2024 Daniel、Laurie 與 Delafield-Butt。Frontiers in Psychology 15:1384068。",
      "url": "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1384068/full",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "標題及作者正文聚焦自閉症互動支持，本案限清楚語句與等待回應段，不採用轉載表格。",
      "scopeChecked": "2026-11-19",
      "auditId": "P03",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1384068/full",
      "reviewChecked": "2026-11-19",
      "reviewScope": "作者正文的簡單語句與等待回應段；不沿用經許可轉載的表3／4",
      "currencyStatus": "usable",
      "currencyEvidence": "以2026同研究脈絡文章4.3節交叉核對；只作溝通支持背景，不當療效證明。",
      "sourceAudience": "年幼ASD孩子、不同溝通方式及額外學習需要者；未訂數字"
    },
    "pp-workbook": {
      "name": "家長與照顧者工作手冊",
      "originalTitle": "2 Day Parent Carer Participant Workbook",
      "publisher": "Positive Partnerships",
      "url": "https://www.positivepartnerships.com.au/uploads/2-Day-PC-Participant-Workbook.pdf",
      "version": "原文未列發布版次（2026-11-19取用檔）",
      "checked": "2026-11-19",
      "description": "參考第 48 頁及第 5、6 節有關感官、情緒陪伴與親師合作的文字。",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "rights": "原文標示 CC BY 4.0。改寫範圍為作者正文，第三方引文、照片和標誌除外。",
      "attribution": "澳洲政府教育部版權（另有標示者依原文）。資料取自 Positive Partnerships，查閱於 2026-11-19，由星泊改寫為繁中生活範例。",
      "scope": "asd",
      "scopeEvidence": "封面明列支持自閉症學齡學生，正文包含感官、行為理解及家庭與學校合作。",
      "scopeChecked": "2026-11-19",
      "auditId": "P04",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.positivepartnerships.com.au/terms-of-use",
      "reviewChecked": "2026-11-19",
      "reviewScope": "印刷頁48、122、124作者主文；排除照片、第三方引文、神經機制及固定練習頻率說法",
      "currencyStatus": "usable",
      "currencyEvidence": "已取得158頁現行檔；逐項核對情緒、負荷與共同調節段，再以AIFS 2025的個別需求原則交叉核對。",
      "sourceAudience": "ASD學齡學生及家長；未訂數字適齡"
    },
    "pp-planning": {
      "name": "親師共同規劃工具",
      "originalTitle": "Planning Tool",
      "publisher": "Positive Partnerships",
      "url": "https://www.positivepartnerships.com.au/uploads/Planning_Tool_field_Formatted_A3_V.1_Dec_21.pdf",
      "version": "2021-12",
      "checked": "2026-11-19",
      "description": "以觀察、對孩子的影響、可試的調整三個方向規劃支持。",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "rights": "原文標示 CC BY 4.0。改寫範圍為作者正文，第三方引文、照片和標誌除外。",
      "attribution": "澳洲政府教育部版權（另有標示者依原文）。資料取自 Positive Partnerships，查閱於 2026-11-19，由星泊改寫為繁中生活範例。",
      "scope": "asd",
      "scopeEvidence": "此工具屬 Helping Children with Autism 計畫，官方介紹將工具用於自閉症孩子的個別支持規劃。",
      "scopeChecked": "2026-11-19",
      "auditId": "P05",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.positivepartnerships.com.au/terms-of-use",
      "reviewChecked": "2026-11-19",
      "reviewScope": "單頁作者規劃欄位；排除標誌",
      "currencyStatus": "usable",
      "currencyEvidence": "已核官方現行規劃入口與欄位，僅用觀察、影響、調整及孩子參與；不含服務資格。",
      "sourceAudience": "ASD學生／支持團隊；未訂數字適齡"
    },
    "rr-sensory": {
      "name": "感官環境與個別支持",
      "authors": "Stuart Daniel、Kelly Mahler、Dee C. Ray、Kade Sharp、Kim Clairy、Sean M. Inderbitzen、Amy C. Laurent、Jacquelyn H. Fede、Jonathan T. Delafield-Butt",
      "originalTitle": "Sensory-processing informed autism practice for child-centred therapists",
      "publisher": "Research in Neurodiversity",
      "url": "https://strathprints.strath.ac.uk/95516/7/Daniel-etal-RN-2026-Sensory-processing-informed-autism-practice-for-child-centred-therapists.pdf",
      "version": "2026-02-03",
      "checked": "2026-11-19",
      "description": "參考第3節及表3的感官環境文字。居家情境由星泊撰寫，不作治療操作程序。",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "rights": "原文第1頁標示 CC BY 4.0。此處改寫作者的感官環境文字，生活例子由星泊撰寫。",
      "attribution": "© 2026 Stuart Daniel等。Research in Neurodiversity 2:100015，doi:10.1016/j.rin.2026.100015。星泊改寫為繁中與原創居家例子。",
      "scope": "asd",
      "scopeEvidence": "標題及第1頁明列自閉症兒童；第3節與表3說明個別化感官環境。",
      "scopeChecked": "2026-11-19",
      "auditId": "S30",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://strathprints.strath.ac.uk/95516/7/Daniel-etal-RN-2026-Sensory-processing-informed-autism-practice-for-child-centred-therapists.pdf",
      "reviewChecked": "2026-11-19",
      "reviewScope": "第3節及表3（期刊頁8）的作者環境文字；不含第三方圖、療程、加重用品與觸碰操作",
      "currencyStatus": "usable",
      "currencyEvidence": "已查正式出版版及CC BY 4.0；只用環境理解與個別化背景，居家例子為編輯原創，非療法成效宣告。",
      "sourceAudience": "ASD兒童的專業治療情境；未訂數字適齡"
    },
    "pp-friendships": {
      "name": "舒服的友誼",
      "originalTitle": "Friendships",
      "publisher": "Positive Partnerships",
      "version": "2020-08",
      "checked": "2026-11-20",
      "description": "談自閉症兒童與年輕人的社交偏好、共同興趣與線上／實體友誼。",
      "rights": "自有文字採CC BY 4.0。此處為繁中改寫與編輯例子，排除照片、標誌及另署第三方素材。",
      "attribution": "澳洲政府教育部版權（2008年起，另有標示者依原文）。取自Positive Partnerships，版本August 2020；星泊改寫為繁中，另撰生活例子。",
      "url": "https://www.positivepartnerships.com.au/uploads/Web_friendships-2022.pdf",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "第1頁的互動偏好與第2頁Making Friends／Keeping Friends自有主文。",
      "scopeChecked": "2026-11-20",
      "auditId": "S18",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.positivepartnerships.com.au/terms-of-use",
      "reviewChecked": "2026-11-20",
      "reviewScope": "兩頁作者主文；不取照片、標誌及另行署名素材",
      "currencyStatus": "usable",
      "currencyEvidence": "已補讀第二頁及CC標記，與現行2025工作手冊印刷頁40比對尊重社交偏好的原則。",
      "sourceAudience": "ASD兒童／年輕人；未訂數字適齡"
    },
    "pp-sensory-tool": {
      "name": "感官情境記錄",
      "originalTitle": "Sensory Tool",
      "publisher": "Positive Partnerships",
      "version": "原文未標發布日",
      "checked": "2026-11-20",
      "description": "提供感官觀察的整理欄位，用來記下具體情境，並和孩子及支持者討論。",
      "rights": "自有文字採CC BY 4.0。此處為繁中改寫與編輯例子，排除照片、標誌及另署第三方素材。",
      "attribution": "澳洲政府教育部版權（2008年起，另有標示者依原文）。取自Positive Partnerships之Sensory Tool；星泊改寫為繁中，記錄例子由編輯撰寫。",
      "url": "https://www.positivepartnerships.com.au/resources/practical-tools-information-sheets/sensory-resources",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "Sensory Tool全頁自有欄位及現行入口；工具明列支持自閉症學齡學生。",
      "scopeChecked": "2026-11-20",
      "auditId": "S05",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.positivepartnerships.com.au/terms-of-use",
      "reviewChecked": "2026-11-20",
      "reviewScope": "單頁Sensory Tool的自有欄位文字及入口ASD段；不含圖片、投影片與外連素材",
      "currencyStatus": "usable",
      "currencyEvidence": "已讀工具全頁及現行入口；可作感官觀察架構，不據此宣稱任何特定策略有效。",
      "sourceAudience": "ASD學齡學生；未訂數字適齡"
    },
    "qld-reading": {
      "name": "ASD閱讀理解研究線索",
      "originalTitle": "Review of autism and reading comprehension",
      "publisher": "Queensland Department of Education, Autism Hub",
      "version": "原文未標發布／審閱日",
      "checked": "2026-11-20",
      "description": "介紹一份ASD閱讀理解研究回顧的範圍與限制，供親師討論背景。",
      "rights": "自有文字採CC BY 4.0。此處為繁中改寫與編輯例子，排除照片、標誌及另署第三方素材。",
      "attribution": "© State of Queensland (Department of Education)，原文未標發布年。星泊改寫研究背景為繁中，親師討論例子由編輯撰寫。",
      "url": "https://autismhub.education.qld.gov.au/resource/Documents/review-autism-reading-comp-factsheet.pdf",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "單頁開頭的研究方法、13項研究與需進一步驗證之限制；不作訓練處方。",
      "scopeChecked": "2026-11-20",
      "auditId": "S19",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://qed.qld.gov.au/copyright-statement",
      "reviewChecked": "2026-11-20",
      "reviewScope": "單頁研究線索與限制的自有文字，不重製圖示／標誌",
      "currencyStatus": "usable",
      "currencyEvidence": "現行官方讀寫入口仍連此單張；只可描述其研究背景及限制，不作最新療效排名或通用訓練處方。",
      "sourceAudience": "ASD學生，依閱讀／語言能力；未訂數字適齡"
    },
    "aifs-needs": {
      "name": "理解行為背後的需要",
      "authors": "Kylie Butler、Holly Helprin、Jasmine B. MacDonald、Lisa Tamiakis",
      "originalTitle": "Understanding why some Autistic children use potentially harmful behaviours",
      "publisher": "Australian Institute of Family Studies",
      "version": "2025-12-10",
      "checked": "2026-11-20",
      "description": "整理自閉症幼兒至青春期初期的需求辨識觀點及證據限制，供事後與專業人員討論。",
      "rights": "自有文字採CC BY 4.0。此處為繁中改寫與編輯例子，排除照片、標誌及另署第三方素材。",
      "attribution": "© Commonwealth of Australia 2025。Butler, K., Helprin, H., MacDonald, J. B., & Tamiakis, L.；Australian Institute of Family Studies。星泊改寫為繁中，另撰居家記錄例子。",
      "url": "https://aifs.gov.au/resources/practice-guides/understanding-why-some-autistic-children-use-potentially-harmful",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "Overview、需求辨識及Nature of the evidence；不含危機處理、自傷議題或操作程序。",
      "scopeChecked": "2026-11-20",
      "auditId": "S24",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://aifs.gov.au/resources/practice-guides/understanding-why-some-autistic-children-use-potentially-harmful",
      "reviewChecked": "2026-11-20",
      "reviewScope": "Overview、需求辨識及Nature of the evidence；不複製照片／他方素材或危機處理程序",
      "currencyStatus": "usable",
      "currencyEvidence": "已核官方頁與PDF授權頁，限需求理解及觀察背景；支持做法多來自實務經驗，不當效果試驗。",
      "sourceAudience": "主要供專業人員；本文ASD範圍為幼兒至青春期初期，未訂數字；服務背景至18歲非操作適齡"
    },
    "esa-puberty": {
      "name": "自閉症學生的青春期教材",
      "originalTitle": "Focus on puberty — Module 3, Years 5–6",
      "publisher": "Education Services Australia / Student Wellbeing Hub",
      "version": "PDF版權2020，未標其他發布／修訂日；本輪現行官方入口仍供下載",
      "checked": "2026-11-21",
      "description": "五、六年級自閉症學生的青春期詞彙、隱私、身體界線與經期教育。",
      "rights": "CC BY 4.0。星泊將指定段落改寫為繁體中文，生活例子與提問為編輯原創。",
      "attribution": "© 2020 Commonwealth of Australia or Education Services Australia Ltd.",
      "url": "https://studentwellbeinghub.edu.au/media/ahfpz25t/mod-3-yr-5-6-puberty.pdf",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "ASD學生的主流學校教師；澳洲五、六年級，不是五、六歲；未訂數字適齡",
      "scopeChecked": "2026-11-21",
      "auditId": "S31",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://studentwellbeinghub.edu.au/media/ahfpz25t/mod-3-yr-5-6-puberty.pdf",
      "reviewChecked": "2026-11-21",
      "reviewScope": "PDF頁3–5、9、15–17、20–22的指定自有文字：明確詞彙／AAC、青春期變化、身體界線／同意及個別感官需要。排除外連教材、圖片、影片、澳洲法律／服務及12小時用品穿戴說法。",
      "currencyStatus": "usable",
      "currencyEvidence": "已讀29頁可抽取文字，視覺確認末頁明列CC BY 4.0。可供身體成長題目之教育背景；不是介入成效研究。原2020教材的具體用品建議不直接沿用。",
      "sourceAudience": "ASD學生的主流學校教師；澳洲五、六年級，不是五、六歲；未訂數字適齡"
    },
    "ebrahim-screen": {
      "name": "自閉症孩子的螢幕使用與家長經驗",
      "authors": "Faatima Ebrahim、Pamela Gretschel、Iesrafeel Abbas",
      "originalTitle": "Striving to provide conditional access: strategies parents use to mediate the screentime of their children with autism spectrum disorder",
      "publisher": "Frontiers in Child and Adolescent Psychiatry",
      "version": "2025-08-20出版；疫情相關經驗，不作現行平台操作指南",
      "checked": "2026-11-21",
      "description": "開普敦七位家長如何管理幼兒及低年級自閉症孩子的螢幕內容與收尾。",
      "rights": "CC BY 4.0。星泊將指定段落改寫為繁體中文，生活例子與提問為編輯原創。",
      "attribution": "© 2025 Faatima Ebrahim、Pamela Gretschel、Iesrafeel Abbas。DOI 10.3389/frcha.2025.1540147。",
      "url": "https://www.frontiersin.org/journals/child-and-adolescent-psychiatry/articles/10.3389/frcha.2025.1540147/full",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "南非開普敦7位ASD孩子家長（6母1父）；納入8歲以下，實際孩子2歲10月–7歲11月",
      "scopeChecked": "2026-11-21",
      "auditId": "S32",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.frontiersin.org/journals/child-and-adolescent-psychiatry/articles/10.3389/frcha.2025.1540147/full",
      "reviewChecked": "2026-11-21",
      "reviewScope": "Methods／Table 1、Results Theme 3、Discussion及Limitations中的作者研究敘述；只用內容管理、收尾準備及家長感受背景，不取逐字訪談、圖表或外引療效。",
      "currencyStatus": "usable",
      "currencyEvidence": "已讀方法、結果及限制；質性訪談不是策略效果試驗，不能推出統一螢幕時數、獎勵措施有效或3C造成ASD。保留家長同時感受到效益與困難的觀點。",
      "sourceAudience": "南非開普敦7位ASD孩子家長（6母1父）；納入8歲以下，實際孩子2歲10月–7歲11月"
    },
    "nordin-attendance": {
      "name": "自閉症兒少上學缺席研究回顧",
      "authors": "Viviann Nordin、Maud Palmgren、Anna Lindbladh、Sven Bölte、Ulf Jonsson",
      "originalTitle": "School absenteeism in autistic children and adolescents: A scoping review",
      "publisher": "Autism / SAGE",
      "version": "2023-12-30線上出版；2024-07卷期；檢索截至2023-06-09",
      "checked": "2026-11-21",
      "description": "回顧小學和中學自閉症學生的缺席情境及研究缺口。",
      "rights": "CC BY 4.0。星泊將指定段落改寫為繁體中文，生活例子與提問為編輯原創。",
      "attribution": "© 2023 Viviann Nordin、Maud Palmgren、Anna Lindbladh、Sven Bölte、Ulf Jonsson。DOI 10.1177/13623613231217409。",
      "url": "https://journals.sagepub.com/doi/10.1177/13623613231217409",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "自閉症小學／中學學生；納入研究年齡各異，不設單一數字適齡；混合樣本僅收ASD可分開資料",
      "scopeChecked": "2026-11-21",
      "auditId": "S33",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://journals.sagepub.com/doi/10.1177/13623613231217409",
      "reviewChecked": "2026-11-21",
      "reviewScope": "Method、Results的作者綜整與Discussion／Limitations；只作上學困難種類、學校情境與證據缺口背景，排除他方量表／操作療程。",
      "currencyStatus": "usable",
      "currencyEvidence": "46篇報告、42項獨立研究。作者明示目的非實務決策、未作研究品質評讀；定義與介入異質，不能把範疇回顧當返校處方或因果排名。",
      "sourceAudience": "自閉症小學／中學學生；納入研究年齡各異，不設單一數字適齡；混合樣本僅收ASD可分開資料"
    },
    "skommer-periods": {
      "name": "自閉症者的經期經驗與支持",
      "authors": "Joanna Skommer、Krish Gunesh",
      "originalTitle": "Autism, menstruation and mental health—a scoping review and a call to action",
      "publisher": "Frontiers in Global Women’s Health",
      "version": "2025-06-25出版；檢索截至2025-05",
      "checked": "2026-11-21",
      "description": "經期經驗的差異，以及初經和青少年情境中的感官與支持需求。",
      "rights": "CC BY 4.0。星泊將指定段落改寫為繁體中文，生活例子與提問為編輯原創。",
      "attribution": "© 2025 Joanna Skommer、Krish Gunesh。DOI 10.3389/fgwh.2025.1531934。",
      "url": "https://www.frontiersin.org/journals/global-womens-health/articles/10.3389/fgwh.2025.1531934/full",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "有月經／初經經驗的自閉症者，跨青少年與成人至更年期；非單一兒少年齡；含正式診斷與自我認同樣本",
      "scopeChecked": "2026-11-21",
      "auditId": "S35",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.frontiersin.org/journals/global-womens-health/articles/10.3389/fgwh.2025.1531934/full",
      "reviewChecked": "2026-11-21",
      "reviewScope": "Methods、Results、Discussion與Limitations中作者對經期經驗差異、感官及支持缺口的綜整；只用初經／青少年相關背景，不含更年期推論、激素／藥物或醫療診斷程序。",
      "currencyStatus": "usable",
      "currencyEvidence": "45項研究，樣本與方法差異大；可呈現經驗不一致及感官需要，不把成人或更年期資料套到孩子，也不將風險描述寫成每位ASD孩子必然遭遇。",
      "sourceAudience": "有月經／初經經驗的自閉症者，跨青少年與成人至更年期；非單一兒少年齡；含正式診斷與自我認同樣本"
    },
    "ellis-periods": {
      "name": "自閉症者、家長與專業人員的經期觀點",
      "authors": "Rebecca Ellis、Gemma Williams、Selena Caemawr、Monique Craine、Willow Holloway、Kathryn Williams、Sebastian C. K. Shaw、Aimee Grant",
      "originalTitle": "Menstruation and Autism: A Qualitative Systematic Review",
      "publisher": "Autism in Adulthood（作者接受稿）",
      "version": "2025-04-17線上初版；2026-10-01卷期；檢索2023-02；不能把2026卷期當2026資料更新",
      "checked": "2026-11-21",
      "description": "作者接受稿摘要比較自閉症當事人與支持者在經期準備上的重點。",
      "rights": "CC BY（作者接受稿）。星泊將指定段落改寫為繁體中文，生活例子與提問為編輯原創。",
      "attribution": "Rebecca Ellis、Gemma Williams、Selena Caemawr、Monique Craine、Willow Holloway、Kathryn Williams、Sebastian C. K. Shaw、Aimee Grant。DOI 10.1089/aut.2024.0307。",
      "url": "https://orca.cardiff.ac.uk/id/eprint/178192/1/Kathryn%20Williams%20AAM.pdf",
      "licenseName": "CC BY（作者接受稿）",
      "license": "https://cronfa.swan.ac.uk/Record/cronfa69327",
      "scope": "asd",
      "scopeEvidence": "自閉症有月經經驗者及家長／支持者；跨年齡，原摘要指人口資料不足，未訂數字適齡",
      "scopeChecked": "2026-11-21",
      "auditId": "S37",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://cronfa.swan.ac.uk/Record/cronfa69327",
      "reviewChecked": "2026-11-21",
      "reviewScope": "作者接受稿PDF第3頁摘要中12份來源、不同角色優先需要及人口資料限制的自有綜整；僅此段，不放行整篇或最終出版排版。",
      "currencyStatus": "usable",
      "currencyEvidence": "取得Cardiff接受稿摘要／前言並核對Swansea同題作者接受稿權利保留聲明。12份來源（8學術、4灰色）；家長／專業與當事人關注重點不同。只核摘要指定範圍，未聲稱完成全文或新版差異核對。",
      "sourceAudience": "自閉症有月經經驗者及家長／支持者；跨年齡，原摘要指人口資料不足，未訂數字適齡"
    },
    "gray-attendance": {
      "name": "自閉症學生與支持者的上學困難經驗",
      "authors": "Laura Gray、Vivian Hill、Elizabeth Pellicano",
      "originalTitle": "“He’s shouting so loud but nobody’s hearing him”: A multi-informant study of autistic pupils’ experiences of school non-attendance and exclusion",
      "publisher": "Autism & Developmental Language Impairments / SAGE",
      "version": "2023-10-18出版；訪談2017-06至2018-02",
      "checked": "2026-11-21",
      "description": "英格蘭青少年、家長、現任教師與地方專業人員對上學困難的訪談。",
      "rights": "CC BY 4.0。星泊將指定段落改寫為繁體中文，生活例子與提問為編輯原創。",
      "attribution": "© 2023 Laura Gray、Vivian Hill、Elizabeth Pellicano。DOI 10.1177/23969415231207816。",
      "url": "https://discovery.ucl.ac.uk/id/eprint/10179255/1/gray-et-al-2023-he-s-shouting-so-loud-but-nobody-s-hearing-him-a-multi-informant-study-of-autistic-pupils-experiences.pdf",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "英格蘭單一地方政府兩個替代教育機構；12名青少年（10男2女），表1為13–17歲，正文稱13–16歲有不一致；11名臨床診斷，1名未正式診斷但達SCQ門檻",
      "scopeChecked": "2026-11-21",
      "auditId": "S38",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://discovery.ucl.ac.uk/id/eprint/10179255/1/gray-et-al-2023-he-s-shouting-so-loud-but-nobody-s-hearing-him-a-multi-informant-study-of-autistic-pupils-experiences.pdf",
      "reviewChecked": "2026-11-21",
      "reviewScope": "第3–4頁Method／Table 1對象說明、第5–11頁作者Results主題解釋與第12–13頁限制；排除逐字訪談、量表題目及英國法律／行政資訊。",
      "currencyStatus": "usable",
      "currencyEvidence": "39名受訪者：12學生、10家長、8現任教師、9地方專業人員。可呈現學生／家庭與學校情境；未訪原排除學校教職員，不能宣稱呈現所有學校立場或證明調整的成效。原文年齡不一致如實保留，引用以表1實際13–17歲為界。",
      "sourceAudience": "英格蘭單一地方政府兩個替代教育機構；12名青少年（10男2女），表1為13–17歲，正文稱13–16歲有不一致；11名臨床診斷，1名未正式診斷但達SCQ門檻"
    },
    "vanaken-diagnosis": {
      "name": "自閉症青少年回看診斷與告知時機",
      "authors": "Gert-Jan Vanaken、Ilse Noens、Jean Steyaert、Kristien Hens",
      "originalTitle": "Getting the timing right. Autistic adolescents reflect on the value of an early diagnosis",
      "publisher": "Frontiers in Psychiatry",
      "version": "2026-05-14出版",
      "checked": "2026-11-21",
      "description": "比利時自閉症青少年回顧何時知道診斷、自我理解與得到支持的經驗。",
      "rights": "CC BY 4.0。星泊將指定段落改寫為繁體中文，生活例子與提問為編輯原創。",
      "attribution": "© 2026 Gert-Jan Vanaken、Ilse Noens、Jean Steyaert、Kristien Hens。DOI 10.3389/fpsyt.2026.1735842。",
      "url": "https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2026.1735842/full",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "比利時18名16–18歲自閉症青少年；排除IQ低於60或正式語言障礙者，不能代表所有溝通／認知需要",
      "scopeChecked": "2026-11-21",
      "auditId": "S42",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2026.1735842/full",
      "reviewChecked": "2026-11-21",
      "reviewScope": "Methods、作者Results三主題、Discussion及Strengths and limitations；不取逐字訪談、個資或量表題目。",
      "currencyStatus": "usable",
      "currencyEvidence": "可整理青少年如何理解標籤、自我認同及告知時機的看法。訪談為回顧經驗，不證明某個固定告知年齡最佳；18歲與未成年者分開，沒有把16–18歲觀點當幼兒處方。",
      "sourceAudience": "比利時18名16–18歲自閉症青少年；排除IQ低於60或正式語言障礙者，不能代表所有溝通／認知需要"
    },
    "sato-diagnosis": {
      "name": "日本醫師如何考量診斷告知",
      "authors": "Hiroyuki Sato、Misao Fujita、Atsushi Tsuchiya、Taichi Hatta、Katsumi Mori、Eisuke Nakazawa、Yoshiyuki Takimoto、Akira Akabayashi",
      "originalTitle": "Disclosing a diagnosis of autism spectrum disorder without intellectual disability to pediatric patients in Japan in early diagnostic stages and associated factors: a cross-sectional study",
      "publisher": "BioPsychoSocial Medicine / Springer Nature",
      "version": "2022-08-20出版；問卷2015年，患者回顧期2014-11至2015-10",
      "checked": "2026-11-21",
      "description": "2015 年醫師問卷中，告知自閉症診斷時對家庭理解與醫病關係的考量。",
      "rights": "CC BY 4.0。星泊將指定段落改寫為繁體中文，生活例子與提問為編輯原創。",
      "attribution": "© 2022 Hiroyuki Sato、Misao Fujita、Atsushi Tsuchiya、Taichi Hatta、Katsumi Mori、Eisuke Nakazawa、Yoshiyuki Takimoto、Akira Akabayashi。DOI 10.1186/s13030-022-00247-0。",
      "url": "https://link.springer.com/article/10.1186/s13030-022-00247-0",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "日本診治18歲以下ASD患者的醫師；主要分析無智能障礙患者的初期告知，非孩子自己回報",
      "scopeChecked": "2026-11-21",
      "auditId": "S43",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://link.springer.com/article/10.1186/s13030-022-00247-0",
      "reviewChecked": "2026-11-21",
      "reviewScope": "Methods、Results、Discussion與Limitations中醫師重視準備程度的歷史研究敘述；不重製問卷或作當前臨床標準。",
      "currencyStatus": "usable",
      "currencyEvidence": "463位醫師符合納入；部分分析另有排除，不能混用分母。可呈現當時醫師重視家庭理解與關係的觀點；低回收率、回憶偏差及資料年代限制已記。不能把家長準備度當孩子得知診斷的強制門檻，也不稱2026日本現況。",
      "sourceAudience": "日本診治18歲以下ASD患者的醫師；主要分析無智能障礙患者的初期告知，非孩子自己回報"
    },
    "li-family": {
      "name": "自閉症家庭的親友支援經驗",
      "authors": "Jia-Ling Li、Melissa Washington-Nortey、Tsegereda Haile Kifle、Francesca Cotier、Rosa A. Hoekstra",
      "originalTitle": "The Role of Extended Family Members in the Lives of Autistic Individuals and Their Parents: A Systematic Review and Meta-Synthesis",
      "publisher": "Clinical Child and Family Psychology Review / Springer Nature",
      "version": "2025-05-20出版；2025-06卷期；不能以卷期當額外更新",
      "checked": "2026-11-21",
      "description": "自閉症兒少家庭從祖父母與其他親友得到的實際或情緒支援，以及相處中出現的困難。",
      "rights": "CC BY 4.0。星泊將指定段落改寫為繁體中文，生活例子與提問為編輯原創。",
      "attribution": "© 2025 Jia-Ling Li、Melissa Washington-Nortey、Tsegereda Haile Kifle、Francesca Cotier、Rosa A. Hoekstra。DOI 10.1007/s10567-025-00525-7。",
      "url": "https://link.springer.com/article/10.1007/s10567-025-00525-7",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "自閉症者及其家長／親友，跨兒童成人；42研究中27篇限18歲以下、11混齡、1成人、3未標年齡；部分原研究有其他障礙混合樣本",
      "scopeChecked": "2026-11-21",
      "auditId": "S44",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://link.springer.com/article/10.1007/s10567-025-00525-7",
      "reviewChecked": "2026-11-21",
      "reviewScope": "方法與作者自有主題綜整：情緒／實際支援、無幫助的支援及家庭互動；僅明確ASD兒少情境，不取逐字引文、量表或混合障礙未分開的結果。",
      "currencyStatus": "usable",
      "currencyEvidence": "42篇（40質性、2混合方法），多由家長／祖父母發聲，自閉症當事人觀點不足。可談支援的好壞與界線，不能宣稱親戚越介入越好、所有文化家庭相同或介入效果已驗證。",
      "sourceAudience": "自閉症者及其家長／親友，跨兒童成人；42研究中27篇限18歲以下、11混齡、1成人、3未標年齡；部分原研究有其他障礙混合樣本"
    },
    "gao-peer-support": {
      "name": "自閉症孩子家長的支持經驗",
      "authors": "Xin Gao、Syazwani Drani",
      "originalTitle": "Social Support Experiences in Parents of Children With ASD: A Qualitative Systematic Review",
      "publisher": "SAGE Open",
      "version": "2025-05-17出版；2025第二季卷期；納入2013–2023原研究，檢索更新日期原文以11/5/2024表示，不自行判定月日",
      "checked": "2026-11-21",
      "description": "整理自閉症孩子家長對同儕、家人與專業支持的看法與遇到的困難。",
      "rights": "CC BY 4.0。星泊將指定段落改寫為繁體中文，生活例子與提問為編輯原創。",
      "attribution": "© 2025 Xin Gao、Syazwani Drani。DOI 10.1177/21582440251336174。",
      "url": "https://journals.sagepub.com/doi/10.1177/21582440251336174",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "ASD孩子家長；各原研究年齡不同，未設定一致數字適齡；母親265名、父親57名，男性觀點較少",
      "scopeChecked": "2026-11-21",
      "auditId": "S45",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://journals.sagepub.com/doi/10.1177/21582440251336174",
      "reviewChecked": "2026-11-21",
      "reviewScope": "Methods、作者Results與Limitations對支援、污名、同儕支持品質的綜整；不取第三方逐字引文、量表及服務制度。",
      "currencyStatus": "usable",
      "currencyEvidence": "18項英語質性研究；可記同儕支持有實際幫助也可能有負面回饋或不一致。不能把支持群組當一定有效的減壓治療，也不把社會／家庭壓力歸罪家長。",
      "sourceAudience": "ASD孩子家長；各原研究年齡不同，未設定一致數字適齡；母親265名、父親57名，男性觀點較少"
    },
    "clarke-daily-living": {
      "name": "自閉症兒少的遠距生活技能支持",
      "authors": "Monique Clarke、Laurie McLay、Karyn France、Neville Blampied、Jenna van Deurs",
      "originalTitle": "Telehealth-Delivered Supports for Daily Living Skills for Autistic Children: a Systematic Review",
      "publisher": "Review Journal of Autism and Developmental Disorders / Springer Nature",
      "version": "2023-07-20線上；2025-06卷期；檢索更新2023-06，不是2025新檢索",
      "checked": "2026-11-21",
      "description": "遠距專業支持的系統性回顧，涵蓋如廁等不同生活技能。",
      "rights": "CC BY 4.0。星泊將指定段落改寫為繁體中文，生活例子與提問為編輯原創。",
      "attribution": "© 2023 Clarke、McLay、France 等。DOI 10.1007/s40489-023-00389-z。",
      "url": "https://link.springer.com/article/10.1007/s40489-023-00389-z",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "17項研究共536人，ASD511人；實際年齡16個月至19歲，家長媒介ASD395人16個月至14歲；混合樣本結果未分ASD者不取",
      "scopeChecked": "2026-11-21",
      "auditId": "S46",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://link.springer.com/article/10.1007/s40489-023-00389-z",
      "reviewChecked": "2026-11-21",
      "reviewScope": "Method、ASD可辨識的作者Results與Discussion限制：遠距提供生活技能支持、專業教練及研究品質背景；不複製療程、量表或如廁／飲食／睡眠操作。",
      "currencyStatus": "usable",
      "currencyEvidence": "17項中2強、12適當、3弱，9項先導／可行性；多領域研究常未分開報告成果，與面對面比較結果也不一致。可補如廁／生活技能求助研究背景，不能直接當在家照做的訓練清單或宣稱遠距等同實體。",
      "sourceAudience": "17項研究共536人，ASD511人；實際年齡16個月至19歲，家長媒介ASD395人16個月至14歲；混合樣本結果未分ASD者不取"
    },
    "reach-asd-summary": {
      "name": "確診後照顧者支持方案的研究摘要",
      "authors": "Kathy Leadbitter、Sophie Langhorne、Richard Smallman、Petrina Chu、Ceri Ellis、Louisa Harrison、Tessa Hutton、Charlotte Butter、Caitlin Goldie、Kirsty James、Latha Hackett、Alison Dunkerley、Penny Bee、Gemma Shields、Linda Davies、Richard Emsley、Jonathan Green、REACH-ASD Team",
      "originalTitle": "Clinical effectiveness of an online psychoeducational and psychotherapeutic programme for caregivers of children newly diagnosed as autistic (REACH-ASD)",
      "publisher": "The Lancet Psychiatry（King’s College London 機構書目）",
      "version": "2025-03-11線上；2025-04卷期",
      "checked": "2026-11-21",
      "description": "比較一項線上專業團體方案與一般照護的試驗摘要，研究對象是近期確診自閉症孩子的照顧者。",
      "rights": "CC BY 4.0。星泊將指定段落改寫為繁體中文，生活例子與提問為編輯原創。",
      "attribution": "© 2025 Kathy Leadbitter 等及 REACH-ASD Team。DOI 10.1016/S2215-0366(25)00036-7。",
      "url": "https://kclpure.kcl.ac.uk/portal/en/publications/clinical-effectiveness-of-an-online-psychoeducational-and-psychot/",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "英國近期12個月內確診ASD孩子的家長／主要照顧者；摘要納入孩子2–15歲，結果描述實際2–16歲；照顧者多為女性及白人英國人",
      "scopeChecked": "2026-11-21",
      "auditId": "S47",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://kclpure.kcl.ac.uk/portal/en/publications/clinical-effectiveness-of-an-online-psychoeducational-and-psychot/",
      "reviewChecked": "2026-11-21",
      "reviewScope": "僅核KCL所收錄的作者完整摘要：研究目的、對照、樣本、主要結果及限制；不放行正文、治療課程、手冊或量表。",
      "currencyStatus": "usable",
      "currencyEvidence": "379位照顧者隨機分派，摘要主要可用資料分析319人；可描述此特定團體方案的研究背景，不能把數字當任何線上群組都有效。原站PDF未取得，不聲稱通讀全文；與S39成本效益論文為不同作品，S39仍不用。",
      "sourceAudience": "英國近期12個月內確診ASD孩子的家長／主要照顧者；摘要納入孩子2–15歲，結果描述實際2–16歲；照顧者多為女性及白人英國人"
    },
    "kaohsiung-asd-development-assessment": {
      "name": "兒童發展聯合評估服務與流程",
      "originalTitle": "兒童發展聯合評估醫院",
      "publisher": "高雄市立聯合醫院",
      "version": "2024-07-02 頁面修訂",
      "description": "說明學齡前兒童的聯合評估、結果解說及轉介，並列出自閉症個案的院內就診途徑。",
      "rights": "依高雄市立聯合醫院資料開放宣告，在註明出處下可改作及公開傳輸。僅整理院方自有的服務說明文字。",
      "attribution": "資料取自高雄市立聯合醫院《兒童發展聯合評估醫院》，由星泊整理。",
      "url": "https://www.kmuh.gov.tw/cp.aspx?n=68AF3B64ECE864A9",
      "licenseName": "高雄市立聯合醫院資料開放宣告",
      "license": "https://www.kmuh.gov.tw/cp.aspx?n=968CEA1212042C2C",
      "scopeEvidence": "頁面「服務流程說明」第 5 點明列自閉症個案，結合同頁學齡前適用範圍及個別評估、結果說明和轉介。",
      "auditId": "S53",
      "reviewScope": "限院方聯評簡介、依個別狀況安排跨專業評估、結果說明及後續轉介。本次使用的流程明列自閉症相關就診。",
      "currencyEvidence": "核對院方現行頁面及開放宣告。僅使用服務架構，院內時段、名額、電話、聯絡人及附件均不轉載，也不將院內前置流程套用到其他醫院。",
      "sourceAudience": "疑似或已確認有發展遲緩的學齡前兒童，本文只處理疑似或確診自閉症情境。原頁未訂數字年齡。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.kmuh.gov.tw/cp.aspx?n=968CEA1212042C2C",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "taiwan-special-education-assessment": {
      "name": "特殊教育學生及幼兒鑑定辦法",
      "publisher": "教育部",
      "version": "2026-04-01 修正，2026-08-01 施行",
      "description": "限第 2、12、23–26 條，多元評量、自閉症鑑定、教育需求評估、安置、重新評估與施行日期。",
      "rights": "法令正文依臺灣《著作權法》第 9 條不受著作權保護。本文由星泊用白話整理。",
      "attribution": "教育部臺教學（四）字第 1152801201A 號令。星泊整理指定條文。",
      "url": "https://edu.law.moe.gov.tw/LawContent.aspx?id=FL009187",
      "licenseName": "著作權法第 9 條",
      "license": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "scopeEvidence": "限第 2、12、23–26 條，多元評量、自閉症鑑定、教育需求評估、安置、重新評估與施行日期。",
      "auditId": "S54",
      "reviewScope": "限第 2、12、23–26 條，多元評量、自閉症鑑定、教育需求評估、安置、重新評估與施行日期。",
      "currencyEvidence": "主管機關頁面登載 2026-04-01 修正版，第 26 條載明該次修正 2026-08-01 施行。僅整理現行法令正文。",
      "sourceAudience": "有特殊教育需求的自閉症幼兒、學生及照顧者，限適用的學前與學齡規定。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "taiwan-special-education-act": {
      "name": "特殊教育法",
      "publisher": "教育部主管法規查詢系統",
      "version": "2023-06-21 修正公布",
      "description": "限第 3 條第 10 款與第 6、10、11、13、19、20、26、30、31 條，自閉症類別、教育權益、鑑定安置、學前特教、教育支持、IEP 與照顧者參與。",
      "rights": "法令正文依臺灣《著作權法》第 9 條不受著作權保護。本文由星泊用白話整理。",
      "attribution": "《特殊教育法》，華總一義字第 11200052781 號令修正公布。星泊整理指定條文。",
      "url": "https://edu.law.moe.gov.tw/LawContent.aspx?id=FL009136",
      "licenseName": "著作權法第 9 條",
      "license": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "scopeEvidence": "限第 3 條第 10 款與第 6、10、11、13、19、20、26、30、31 條，自閉症類別、教育權益、鑑定安置、學前特教、教育支持、IEP 與照顧者參與。",
      "auditId": "S55",
      "reviewScope": "限第 3 條第 10 款與第 6、10、11、13、19、20、26、30、31 條，自閉症類別、教育權益、鑑定安置、學前特教、教育支持、IEP 與照顧者參與。",
      "currencyEvidence": "主管機關現行原文登載 2023-06-21 修正公布；第 26 條載明學前特教自 2 歲開始。縣市申請細節另依當期公告。",
      "sourceAudience": "有特殊教育需求的自閉症幼兒、學生及照顧者，限適用的學前與學齡規定。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "tainan-early-intervention-subsidy": {
      "name": "臺南市早療費用補助與申請問答",
      "originalTitle": "臺南市政府社會局發展遲緩兒童早期療育費用補助",
      "publisher": "臺南市政府社會局",
      "version": "2026-01-30 入口修訂，併讀同頁區公所問答",
      "description": "說明臺南市早療費用及交通費的申請條件、送件方式與文件，附有自閉症診斷家庭的常見問題。",
      "rights": "依臺南市政府社會局網站資料開放宣告，機關自有文字註明出處可改作及公開傳輸。",
      "attribution": "資料取自臺南市政府社會局早療費用補助公告及同頁區公所問答，由星泊整理。",
      "url": "https://sab.tainan.gov.tw/News_Content.aspx?n=21346&s=4378108",
      "licenseName": "臺南市政府社會局網站資料開放宣告",
      "license": "https://sab.tainan.gov.tw/cp.aspx?n=21801&s=7586",
      "scopeEvidence": "公告所附《早療補助區公所常見退件原因問與答》第一節第 9 題明列自閉症與發展遲緩診斷文件的差異。",
      "auditId": "S56",
      "reviewScope": "公告第五至八項及附錄區公所問答第一節第 9 題、第三節第 1 題，限資格、文件、療育單位、交通與療育費的查找。排除表單、補助金額及療育項目推薦。",
      "currencyEvidence": "核對臺南市社會局現行公告、附件及資料開放宣告。作為縣市查找示例，金額、效期和送件期限均請以當期公告為準。",
      "sourceAudience": "臺南市早期療育補助的申請家庭，本案只整理自閉症孩子申請時的查核事項。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://sab.tainan.gov.tw/cp.aspx?n=21801&s=7586",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "conrad-pact-family-experience": {
      "name": "家長把自閉症溝通療育帶進日常的經驗",
      "originalTitle": "“It Seems Much More Enjoyable Now”: Parental Perception of Relational Change from Participating in Paediatric Autism Communication Therapy (PACT)",
      "publisher": "Children",
      "authors": "Charlotte Engberg Conrad、Rikke Jørgensen、Cecilie Amstrup、Tine Ellitsgaard Gottschau、Per Hove Thomsen、Marlene Briciet Lauritsen",
      "version": "2024-07-10 正式出版",
      "description": "訪談丹麥 10 個自閉症家庭，了解家長如何把一項溝通療育融入日常，以及他們觀察到的互動變化。",
      "rights": "作者正文採 CC BY 4.0。此處為指定段落的繁中摘要及星泊原創生活例子。",
      "attribution": "Conrad、Jørgensen、Amstrup、Gottschau、Thomsen 與 Lauritsen（2024），Children 11(7), 838。星泊繁中改寫。",
      "url": "https://www.mdpi.com/2227-9067/11/7/838",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scopeEvidence": "第 2.1 至 2.3 節交代自閉症診斷及招募條件，第 3.1、3.2 節整理家長的實作與互動經驗。",
      "auditId": "S57",
      "reviewScope": "第 2.3 節的樣本、第 3.1 和 3.2 節的作者主題綜整及討論限制。排除訪談引文、圖表、量表、頻率與療程操作。",
      "currencyEvidence": "出版者原文標明 CC BY 4.0。這是已參與特定療育的家長訪談，保留家庭可行性與取樣限制。",
      "sourceAudience": "丹麥有自閉症孩子、且已參與 PACT 的家庭，10 個家庭共 13 位受訪家長。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.mdpi.com/2227-9067/11/7/838",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "gevarter-preschool-multimodal-communication": {
      "name": "少用口語的學前自閉症孩子如何多元溝通",
      "originalTitle": "Multimodal Communication Outcomes for Hispanic Autistic Preschoolers Following Coached Student Clinician and Caregiver-Led NDBIs",
      "publisher": "Behavioral Sciences",
      "authors": "Cindy Gevarter、Jaime Branaman、Jessica Nico、Erin Gallegos、Richelle McGuire",
      "version": "2025-10-20 正式出版",
      "description": "以五名很少或不使用口語的學前兒童為對象，觀察手勢、手語、輔助工具及口語等溝通方式。",
      "rights": "作者正文採 CC BY 4.0。此處為指定段落的繁中摘要及星泊原創生活例子。",
      "attribution": "Gevarter、Branaman、Nico、Gallegos 與 McGuire（2025），Behavioral Sciences 15(10), 1425。星泊繁中改寫。",
      "url": "https://www.mdpi.com/2076-328X/15/10/1425",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scopeEvidence": "第 2.1 節明列學前自閉症研究條件，第 4.1、4.2 節討論不同溝通方式、照顧者共同規劃及研究限制。",
      "auditId": "S58",
      "reviewScope": "第 2.1 節及第 4.1、4.2、5 節作者自有敘述，限多元表達、個別化與共同規劃。排除第三方量表、圖表、提示階層及療育操作。",
      "currencyEvidence": "出版者原文標明 CC BY 4.0。樣本五名，限特定教練支持及語言環境，保留研究可推廣範圍的限制。",
      "sourceAudience": "五名約 2 歲半至未滿 5 歲的西語裔學前兒童，在英語或西語家庭生活，已診斷自閉症或候診且符合研究的自閉特質評估條件。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.mdpi.com/2076-328X/15/10/1425",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "taiwan-special-education-school-transition": {
      "name": "各教育階段身心障礙學生與幼兒轉銜輔導及服務辦法",
      "originalTitle": "各教育階段身心障礙學生與幼兒轉銜輔導及服務辦法",
      "publisher": "教育部",
      "version": "2023-12-19 修正",
      "description": "規範升入國小的特教轉銜會議、支持需求交接及安置學校後續工作。",
      "rights": "法令正文依臺灣《著作權法》第 9 條不受著作權保護。本文由星泊用白話整理。",
      "attribution": "教育部臺教學（四）字第 1122806413A 號令。星泊整理指定條文。",
      "url": "https://edu.law.moe.gov.tw/LawContent.aspx?id=GL000431",
      "licenseName": "著作權法第 9 條",
      "license": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "scopeEvidence": "本辦法依《特殊教育法》訂定，併讀該法第 3 條第 10 款的自閉症類別。本案限自閉症幼兒升小一適用之條文。",
      "auditId": "S59",
      "reviewScope": "第 2 至 4 條及第 6 條，限轉銜計畫、需求紀錄、照顧者參與、入小學及安置學校後續支持。",
      "currencyEvidence": "主管機關現行頁登載 2023-12-19 修正版本。適用《特殊教育法》身心障礙類別，地方時程依當地教育主管機關公告。",
      "sourceAudience": "進入國小的身心障礙特教幼兒；本案依特殊教育法第 3 條限自閉症類別。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "mayer-digital-citizenship": {
      "name": "自閉症兒少使用螢幕的數位公民研究",
      "originalTitle": "Digital citizenship of children and youth with autism: Developing guidelines and strategies for caregivers and clinicians to support healthy use of screens",
      "publisher": "Autism",
      "authors": "Yael Mayer、Mor Cohen-Eilig、Janice Chan、Natasha Kuzyk、Armansa Glodjo、Tal Jarus",
      "version": "2023-08-24先行出版；2024-04期刊版",
      "description": "研究透過專家多輪討論整理自閉症兒少使用螢幕的建議，也保留未達共識的題目。",
      "rights": "指定作者正文依 CC BY-NC 4.0 由星泊以繁中整理。本整理限非商業分享。",
      "attribution": "Yael Mayer、Mor Cohen-Eilig、Janice Chan、Natasha Kuzyk、Armansa Glodjo、Tal Jarus，《Digital citizenship of children and youth with autism: Developing guidelines and strategies for caregivers and clinicians to support healthy use of screens》（2023-08-24先行出版；2024-04期刊版）。星泊整理指定段落。",
      "url": "https://journals.sagepub.com/doi/10.1177/13623613231192870",
      "licenseName": "CC BY-NC 4.0",
      "license": "https://creativecommons.org/licenses/by-nc/4.0/",
      "scopeEvidence": "研究透過專家多輪討論整理自閉症兒少使用螢幕的建議，也保留未達共識的題目。",
      "auditId": "S29",
      "reviewScope": "研究方法、Survey 2未達共識結果與研究限制；不改寫時數／診斷清單",
      "currencyEvidence": "正式出版版明列 CC BY-NC 4.0。可整理研究過程與未達共識的題目，供非商業文章補充研究背景。",
      "sourceAudience": "附錄3：2–18歲ASD；排除AAC與純溝通用途",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "noncommercial-adaptation-permitted",
      "permissionEvidence": "https://journals.sagepub.com/doi/10.1177/13623613231192870",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "crane-autistic-parents-disclosure": {
      "name": "自閉症家長如何和自閉症孩子談診斷",
      "originalTitle": "Autistic parents’ views and experiences of talking about autism with their autistic children",
      "publisher": "Autism",
      "authors": "Laura Crane、Lok Man Lui、Jade Davies、Elizabeth Pellicano",
      "version": "2021-01-04 線上出版，2021-05 卷期。調查於 2019-05 至 06 進行。",
      "description": "英國 34 位自閉症家長說明和自閉症孩子談診斷、運用自身經驗及調整說法的做法。",
      "rights": "指定作者正文依 CC BY-NC 4.0 由星泊以繁中整理。本整理限非商業分享。",
      "attribution": "Laura Crane、Lok Man Lui、Jade Davies、Elizabeth Pellicano，《Autistic parents’ views and experiences of talking about autism with their autistic children》（2021-01-04 線上出版，2021-05 卷期。調查於 2019-05 至 06 進行。）。星泊整理指定段落。",
      "url": "https://pure-oai.bham.ac.uk/ws/portalfiles/portal/217346196/crane-et-al-2021-autistic-parents-views-and-experiences-of-talking-about-autism-with-their-autistic-children.pdf",
      "licenseName": "CC BY-NC 4.0",
      "license": "https://creativecommons.org/licenses/by-nc/4.0/",
      "scopeEvidence": "英國 34 位自閉症家長說明和自閉症孩子談診斷、運用自身經驗及調整說法的做法。",
      "auditId": "S50",
      "reviewScope": "PDF方法／表1與作者Results／Discussion的經驗綜整；只限非商業，不取逐字親子引文及調查題目。",
      "currencyEvidence": "小型機會抽樣，多數已告知孩子，偏向正面經驗與個別化對話；不能代表所有自閉症家長不需要專業協助或所有孩子都無負面感受。與醫師、青少年樣本的差異需保留。正式出版版明列 CC BY-NC 4.0，供非商業文章呈現家長觀點。",
      "sourceAudience": "英國34位自閉症家長，孩子3–18歲；部分家長／孩子自我認同，未全部正式診斷；30名母親、2男性、2非二元家長",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "noncommercial-adaptation-permitted",
      "permissionEvidence": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8111227/",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "little-telehealth-toileting": {
      "name": "自閉症兒童遠距如廁支持初步研究",
      "originalTitle": "A Telehealth Delivered Toilet Training Intervention for Children with Autism",
      "publisher": "OTJR: Occupation, Participation and Health",
      "authors": "Lauren M. Little、Anna Wallisch、Winnie Dunn、Scott Tomchek",
      "version": "2023-03-21線上；2023-07卷期",
      "description": "以自閉症兒童及其家長為對象，探索結合遠距教練與家長自行閱讀材料的如廁支持。",
      "rights": "指定作者正文依 CC BY-NC 4.0 由星泊以繁中整理。本整理限非商業分享。",
      "attribution": "Lauren M. Little、Anna Wallisch、Winnie Dunn、Scott Tomchek，《A Telehealth Delivered Toilet Training Intervention for Children with Autism》（2023-03-21線上；2023-07卷期）。星泊整理指定段落。",
      "url": "https://journals.sagepub.com/doi/10.1177/15394492231159903",
      "licenseName": "CC BY-NC 4.0",
      "license": "https://creativecommons.org/licenses/by-nc/4.0/",
      "scopeEvidence": "以自閉症兒童及其家長為對象，探索結合遠距教練與家長自行閱讀材料的如廁支持。",
      "auditId": "S52",
      "reviewScope": "Methods、作者Results、Future Directions and Limitations的研究背景；非商業限定，不取原方案教材、問卷、10–12週療程程序。",
      "currencyEvidence": "無真正對照組的初步成效研究，不能確定觀察改善由方案造成。中止者的改變可能和出席、方案是否合適、已有進步等多種情況有關，不能責怪家長不配合。缺乏長期維持驗證。正式出版版明列 CC BY-NC 4.0，限研究背景。",
      "sourceAudience": "34個ASD孩子家庭；摘要2–8歲，內文目的2.5–8歲，數字差異保留，不自行放寬；各孩子起始如廁能力不同",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "noncommercial-adaptation-permitted",
      "permissionEvidence": "https://journals.sagepub.com/doi/10.1177/15394492231159903",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "liu-taiwan-youth-diagnosis": {
      "name": "臺灣自閉症青少年的診斷與校園經驗",
      "originalTitle": "“Autism Diagnosis as a Guide”: Taiwanese Adolescents’ Own Experiences of Receiving Autism Diagnoses",
      "publisher": "Autism",
      "authors": "Chun-Hao Liu、Wei-Cheng Lin、Louisa Lok Yee Man、Chih-Ju Wu、Romin W. Tafarodi、Lin Fang、Melanie Penner、Hsing-Chang Ni、Meng-Chuan Lai",
      "version": "2026-05-19 正式線上出版",
      "description": "臺灣八位自閉症青少年回顧理解診斷、選擇向他人說明、以及如何在學校尋求支持。",
      "rights": "指定作者正文依 CC BY-NC 4.0 由星泊以繁中整理。本整理限非商業分享。",
      "attribution": "Chun-Hao Liu、Wei-Cheng Lin、Louisa Lok Yee Man、Chih-Ju Wu、Romin W. Tafarodi、Lin Fang、Melanie Penner、Hsing-Chang Ni、Meng-Chuan Lai，《“Autism Diagnosis as a Guide”: Taiwanese Adolescents’ Own Experiences of Receiving Autism Diagnoses》（2026-05-19 正式線上出版）。星泊整理指定段落。",
      "url": "https://journals.sagepub.com/doi/10.1177/13623613261444800",
      "licenseName": "CC BY-NC 4.0",
      "license": "https://creativecommons.org/licenses/by-nc/4.0/",
      "scopeEvidence": "臺灣八位自閉症青少年回顧理解診斷、選擇向他人說明、以及如何在學校尋求支持。",
      "auditId": "S60",
      "reviewScope": "Methods、Results、Discussion 的作者綜整，限自我理解、診斷揭露、校園求助與研究限制，排除逐字訪談與附件。",
      "currencyEvidence": "臺灣兒童青少年精神科醫師主持的質性研究。可呈現青少年觀點，研究對象限能描述自身經驗者，不能推論領證與標籤之間的因果。",
      "sourceAudience": "八位臺灣臨床診斷自閉症的青少年，受訪時 14–18 歲。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "noncommercial-adaptation-permitted",
      "permissionEvidence": "https://journals.sagepub.com/doi/abs/10.1177/13623613261444800",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "taiwan-disability-assessment": {
      "name": "身心障礙者鑑定作業辦法",
      "originalTitle": "身心障礙者鑑定作業辦法",
      "publisher": "衛生福利部",
      "version": "2026-06-29 修正",
      "description": "第 4、8 條及附表涵蓋心理社會與活動參與功能。附表一甲依法列自閉症相關評估，並與附表二甲、二乙併讀。第 9、10 條規範未滿六歲的暫判及情況改變時的申請。",
      "rights": "依臺灣《著作權法》第 9 條整理指定的法令或政府公文自有正文。",
      "attribution": "衛生福利部，《身心障礙者鑑定作業辦法》（2026-06-29 修正）。星泊整理指定段落。",
      "url": "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0020020",
      "licenseName": "著作權法第 9 條",
      "license": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "scopeEvidence": "第 4、8 條及附表涵蓋心理社會與活動參與功能。附表一甲依法列自閉症相關評估，並與附表二甲、二乙併讀。第 9、10 條規範未滿六歲的暫判及情況改變時的申請。",
      "auditId": "S61",
      "reviewScope": "第 4、5、7 至 10 條及相關附表自有條文，限功能、申請、暫判與重鑑。量表、分數自評及臨床操作另行查核。",
      "currencyEvidence": "對照法律、鑑定向度與未滿六歲的正式條文。教材例子與判定由專業人員處理。",
      "sourceAudience": "本案限自閉症兒少與照顧者的身心障礙鑑定情境。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "taiwan-disability-rights-act": {
      "name": "身心障礙者權益保障法",
      "originalTitle": "身心障礙者權益保障法",
      "publisher": "全國法規資料庫",
      "version": "現行條文，2026-11-24 查閱",
      "description": "第 5 至 7 條規範功能、鑑定、需求評估與證明，第 14、15 條規範效期與重新鑑定。本案與明列自閉症的鑑定作業辦法及地方服務計畫併讀。",
      "rights": "依臺灣《著作權法》第 9 條整理指定的法令或政府公文自有正文。",
      "attribution": "全國法規資料庫，《身心障礙者權益保障法》（現行條文，2026-11-24 查閱）。星泊整理指定段落。",
      "url": "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0050046",
      "licenseName": "著作權法第 9 條",
      "license": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "scopeEvidence": "第 5 至 7 條規範功能、鑑定、需求評估與證明，第 14、15 條規範效期與重新鑑定。本案與明列自閉症的鑑定作業辦法及地方服務計畫併讀。",
      "auditId": "S62",
      "reviewScope": "第 5–7、14、15、29、50、51、56、58、59、71 條，限自閉症兒少適用的鑑定、就學費用、福利服務、停車、交通與場所優待及輔具制度。",
      "currencyEvidence": "條文涵蓋不同障礙與年齡，實際服務及財務條件由承辦按方案確認。",
      "sourceAudience": "本案限依法完成鑑定或考慮申請的自閉症兒少家庭。",
      "checked": "2026-11-25",
      "scope": "asd",
      "scopeChecked": "2026-11-25",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "reviewChecked": "2026-11-25",
      "currencyStatus": "usable"
    },
    "taiwan-special-education-class-types": {
      "name": "特殊教育法施行細則",
      "originalTitle": "特殊教育法施行細則",
      "publisher": "教育部",
      "version": "現行條文，2026-11-24 查閱",
      "description": "第 6 條分別說明分散式資源班、巡迴輔導班、集中式特殊教育班。搭配《特殊教育法》第 3 條的自閉症類別。",
      "rights": "依臺灣《著作權法》第 9 條整理指定的法令或政府公文自有正文。",
      "attribution": "教育部，《特殊教育法施行細則》（現行條文，2026-11-24 查閱）。星泊整理指定段落。",
      "url": "https://edu.law.moe.gov.tw/LawContent.aspx?id=FL009141",
      "licenseName": "著作權法第 9 條",
      "license": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "scopeEvidence": "第 6 條分別說明分散式資源班、巡迴輔導班、集中式特殊教育班。搭配《特殊教育法》第 3 條的自閉症類別。",
      "auditId": "S63",
      "reviewScope": "第 6 條正式條文及其所依據的特教法第 13 條，限班型、就讀及支持方式。",
      "currencyEvidence": "不同學段與縣市實際提供哪些班型，請向園校查詢。",
      "sourceAudience": "依法取得特教支持的自閉症幼兒及高級中等以下學生。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "new-taipei-autism-family-services": {
      "name": "新北市 115 年度身心障礙家庭照顧者支持服務計畫",
      "originalTitle": "新北市政府社會局115年度辦理身心障礙者家庭照顧者支持服務計畫",
      "publisher": "新北市政府社會局",
      "version": "115 年度，2026-11-24 查閱",
      "description": "計畫「陸、服務對象」「柒、辦理地點、方式與服務內容」明列證明條件、優先服務的自閉症及心智障礙者、家庭可詢問的支持服務。",
      "rights": "依臺灣《著作權法》第 9 條整理指定的法令或政府公文自有正文。",
      "attribution": "新北市政府社會局，《新北市政府社會局115年度辦理身心障礙者家庭照顧者支持服務計畫》（115 年度，2026-11-24 查閱）。星泊整理指定段落。",
      "url": "https://www.sw.ntpc.gov.tw/uploaddowndoc?dis=download&file=download%2F202604011037370.pdf&filedisplay=115%E5%B9%B4%E8%BA%AB%E5%BF%83%E9%9A%9C%E7%A4%99%E8%80%85%E5%AE%B6%E5%BA%AD%E7%85%A7%E9%A1%A7%E8%80%85%E6%94%AF%E6%8C%81%E6%9C%8D%E5%8B%99%E8%A8%88%E7%95%AB.pdf&flag=doc",
      "licenseName": "著作權法第 9 條",
      "license": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "scopeEvidence": "計畫「陸、服務對象」「柒、辦理地點、方式與服務內容」明列證明條件、優先服務的自閉症及心智障礙者、家庭可詢問的支持服務。",
      "auditId": "S64",
      "reviewScope": "僅整理機關正式年度計畫正文第陸、柒節的對象、服務及查找方式。",
      "currencyEvidence": "新北 115 年計畫作為查找範例，下一年度、其他縣市及個別資格另查。",
      "sourceAudience": "實際居住新北市且領證的家庭，按計畫規定查詢支持。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "taiwan-ombudsman-autism-insurance": {
      "name": "監察院身心障礙者投保調查",
      "originalTitle": "監察院 109 財調 0052 身心障礙者投保案調查報告",
      "publisher": "監察院",
      "version": "2020-10-20 審議",
      "description": "調查事實與附表記錄自閉症家庭口頭勸退、未收到書面理由和曾就診等情形。",
      "rights": "依臺灣《著作權法》第 9 條整理指定的法令或政府公文自有正文。",
      "attribution": "監察院，《監察院 109 財調 0052 身心障礙者投保案調查報告》（2020-10-20 審議）。星泊整理指定段落。",
      "url": "https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/69893",
      "licenseName": "著作權法第 9 條",
      "license": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "scopeEvidence": "調查事實與附表記錄自閉症家庭口頭勸退、未收到書面理由和曾就診等情形。",
      "auditId": "S65",
      "reviewScope": "僅取調查報告中與自閉症投保有關的實務差距背景，保留年代與案例性質。",
      "currencyEvidence": "歷史調查報告不能估算今日拒保比例或推論持證的單獨效果。排除家庭個資、逐段陳述和其他障礙類別的推論。",
      "sourceAudience": "調查包含自閉症兒少家庭投保陳述，本案限相關情境。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "taiwan-insurance-underwriting": {
      "name": "金管會保險業招攬及核保理賠辦法",
      "originalTitle": "保險業招攬及核保理賠辦法",
      "publisher": "金融監督管理委員會",
      "version": "2026-04-21 修正",
      "description": "第 7 條第 1 項第 11 款禁止僅因身心障礙身分給予不公平待遇。監察院 109 財調 0052 將相應規定適用於自閉症家庭投保個案。",
      "rights": "依臺灣《著作權法》第 9 條整理指定的法令或政府公文自有正文。",
      "attribution": "金融監督管理委員會，《保險業招攬及核保理賠辦法》（2026-04-21 修正）。星泊整理指定段落。",
      "url": "https://law.fsc.gov.tw/LawContent.aspx?id=FL006828",
      "licenseName": "著作權法第 9 條",
      "license": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "scopeEvidence": "第 7 條第 1 項第 11 款禁止僅因身心障礙身分給予不公平待遇。監察院 109 財調 0052 將相應規定適用於自閉症家庭投保個案。",
      "auditId": "S66",
      "reviewScope": "第 7 條第 1 項第 11 款法令正文，搭配監察院案例與《保險法》第 64 條。",
      "currencyEvidence": "主管機關現行條文代表核保規範，實際條件按商品及個別申請判斷。",
      "sourceAudience": "考慮新投保或加保的自閉症兒少家庭，本文限身障相關核保規定。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "ophir-school-disclosure": {
      "name": "自閉症學生的校園互動與揭露經驗回顧",
      "originalTitle": "Mixed-Neurotype Interactions in Educational Settings and Autistic Students’ Mental Health: A Systematic Review of Qualitative Findings",
      "publisher": "Review Journal of Autism and Developmental Disorders",
      "authors": "Shachar Ophir、Einat Keren、Nitsan Almog、Yonat Rum",
      "version": "2026-11-12 正式出版",
      "description": "118 篇來源的質性回顧含自閉症學生對分享診斷、同儕關係及教師支持的不同經驗。",
      "rights": "指定作者正文依 CC BY 4.0 由星泊以繁中整理。",
      "attribution": "Shachar Ophir、Einat Keren、Nitsan Almog、Yonat Rum，《Mixed-Neurotype Interactions in Educational Settings and Autistic Students’ Mental Health: A Systematic Review of Qualitative Findings》（2026-11-12 正式出版）。星泊整理指定段落。",
      "url": "https://link.springer.com/article/10.1007/s40489-026-00596-4",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scopeEvidence": "118 篇來源的質性回顧含自閉症學生對分享診斷、同儕關係及教師支持的不同經驗。",
      "auditId": "S67",
      "reviewScope": "Methods、Results 的 Disclosure of Autism Diagnosis、Teachers’ Scaffolding，以及討論的作者綜整。排除逐字引文、附表及第三方素材。",
      "currencyEvidence": "國際質性回顧，揭露只是其中一個主題。能描述正反經驗，無法估算揭露風險或證明影響。",
      "sourceAudience": "校園中的自閉症學生、同儕及教師，診斷揭露素材偏小學至高中。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://link.springer.com/article/10.1007/s40489-026-00596-4",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "mullally-child-school-experience": {
      "name": "自閉症孩子怎麼看校園壓力與安全感",
      "originalTitle": "Growing-up autistic: Sharing autistic children’s experiences and insights",
      "publisher": "Autism",
      "authors": "Sinéad L Mullally、Alice E Wood、Cherice C Edwards、Sophie E Connolly、Hannah Constable、Stuart Watson、Jacqui Rodgers、Kieran Rose、Nic King",
      "version": "2026-05 卷期",
      "description": "研究描述自閉症孩子感受到的過度刺激、未被傾聽與哪些人或環境讓自己感到安心。",
      "rights": "指定作者正文依 CC BY-NC 4.0 由星泊以繁中整理。本整理限非商業分享。",
      "attribution": "Sinéad L Mullally、Alice E Wood、Cherice C Edwards、Sophie E Connolly、Hannah Constable、Stuart Watson、Jacqui Rodgers、Kieran Rose、Nic King，《Growing-up autistic: Sharing autistic children’s experiences and insights》（2026-05 卷期）。星泊整理指定段落。",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13087148/",
      "licenseName": "CC BY-NC 4.0",
      "license": "https://creativecommons.org/licenses/by-nc/4.0/",
      "scopeEvidence": "研究描述自閉症孩子感受到的過度刺激、未被傾聽與哪些人或環境讓自己感到安心。",
      "auditId": "S68",
      "reviewScope": "Methods 的樣本、Results 的 Overwhelming Experiences、Unsafe People、Sanctuary 及 Discussion 限制。排除兒童引文、問卷及附圖。",
      "currencyEvidence": "單一隊列的自陳資料，部分校園經驗不能套用所有孩子。未測量哪種環境調整更有效。",
      "sourceAudience": "136 名 8–14 歲自閉症孩子的自陳資料。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "noncommercial-adaptation-permitted",
      "permissionEvidence": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13087148/",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "fox-primary-friendships": {
      "name": "英國小學自閉症孩子的友誼經驗回顧",
      "originalTitle": "Experiences of friendships among autistic children in UK schools: A qualitative meta-synthesis",
      "publisher": "Neurodiversity",
      "authors": "Laura Fox、Rosina Williams、Kathryn Asbury",
      "version": "2024-08-22 線上出版",
      "description": "六篇質性研究綜整自閉症孩子在小學裡的友誼，包含共同興趣、陪伴及環境限制。",
      "rights": "指定作者正文依 CC BY-NC 4.0 由星泊以繁中整理。本整理限非商業分享。",
      "attribution": "Laura Fox、Rosina Williams、Kathryn Asbury，《Experiences of friendships among autistic children in UK schools: A qualitative meta-synthesis》（2024-08-22 線上出版）。星泊整理指定段落。",
      "url": "https://journals.sagepub.com/doi/10.1177/27546330241272250",
      "licenseName": "CC BY-NC 4.0",
      "license": "https://creativecommons.org/licenses/by-nc/4.0/",
      "scopeEvidence": "六篇質性研究綜整自閉症孩子在小學裡的友誼，包含共同興趣、陪伴及環境限制。",
      "auditId": "S69",
      "reviewScope": "Abstract、Methods、Results／Discussion 的作者綜整與限制。排除引文和量表。",
      "currencyEvidence": "研究限英國小學的質性資料，孩子的友誼需要與理想形式各不相同。",
      "sourceAudience": "英國小學場景的自閉症兒童，資料含孩子與身邊成人的觀點。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "noncommercial-adaptation-permitted",
      "permissionEvidence": "https://journals.sagepub.com/doi/10.1177/27546330241272250",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "maclennan-preschool-sensory-anxiety": {
      "name": "學前自閉症孩子的感官反應、不確定感與焦慮",
      "originalTitle": "The relationship between sensory reactivity, intolerance of uncertainty and anxiety subtypes in preschool-age autistic children",
      "publisher": "Autism",
      "authors": "Keren MacLennan、Timothy Rossow、Teresa Tavassoli",
      "version": "2021-05 線上，2021-11 卷期",
      "description": "研究分析學前自閉症孩子的感官敏感、面對不確定的困擾及焦慮之間的關聯。",
      "rights": "指定作者正文依 CC BY-NC 4.0 由星泊以繁中整理。本整理限非商業分享。",
      "attribution": "Keren MacLennan、Timothy Rossow、Teresa Tavassoli，《The relationship between sensory reactivity, intolerance of uncertainty and anxiety subtypes in preschool-age autistic children》（2021-05 線上，2021-11 卷期）。星泊整理指定段落。",
      "url": "https://centaur.reading.ac.uk/98478/1/13623613211016110.pdf",
      "licenseName": "CC BY-NC 4.0",
      "license": "https://creativecommons.org/licenses/by-nc/4.0/",
      "scopeEvidence": "研究分析學前自閉症孩子的感官敏感、面對不確定的困擾及焦慮之間的關聯。",
      "auditId": "S70",
      "reviewScope": "Abstract、Methods、Results、Discussion 限感官差異與不確定感的關聯及限制。排除測量題項與分數。",
      "currencyEvidence": "小型橫斷研究只能說明關聯，沒有提供診斷規則或證實某個做法的效果。",
      "sourceAudience": "54 名 3–5 歲自閉症幼兒，以照顧者回報及觀察衡量。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "noncommercial-adaptation-permitted",
      "permissionEvidence": "https://centaur.reading.ac.uk/98478/1/13623613211016110.pdf",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "oneill-asd-assessment-experiences": {
      "name": "自閉症評估過程中家長的經驗回顧",
      "originalTitle": "Identifying autistic children: Priorities for research arising from a systematic review of parents’ experiences of the assessment process",
      "publisher": "Autism",
      "authors": "Sinead O’Neill、Grainne M O’Donnell",
      "version": "2024-04-24 線上出版",
      "description": "質性回顧整理家長在辨識、評估、得知結果及後續階段的需求，專業溝通是反覆出現的主題。",
      "rights": "指定作者正文依 CC BY-NC 4.0 由星泊以繁中整理。本整理限非商業分享。",
      "attribution": "Sinead O’Neill、Grainne M O’Donnell，《Identifying autistic children: Priorities for research arising from a systematic review of parents’ experiences of the assessment process》（2024-04-24 線上出版）。星泊整理指定段落。",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11528925/",
      "licenseName": "CC BY-NC 4.0",
      "license": "https://creativecommons.org/licenses/by-nc/4.0/",
      "scopeEvidence": "質性回顧整理家長在辨識、評估、得知結果及後續階段的需求，專業溝通是反覆出現的主題。",
      "auditId": "S71",
      "reviewScope": "以版權欄明列的 CC BY-NC 4.0 為準。只取作者對評估前、評估過程和評估後溝通的主題綜整及限制。",
      "currencyEvidence": "各研究的制度不同，不能當成臺灣聯評程序的證據。",
      "sourceAudience": "不同地區經歷自閉症診斷評估的家長。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "noncommercial-adaptation-permitted",
      "permissionEvidence": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11528925/",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "binns-preschool-slp": {
      "name": "學前自閉症孩子的語言治療服務調查",
      "originalTitle": "Current practices, supports, and challenges in speech-language pathology service provision for autistic preschoolers",
      "publisher": "Autism & Developmental Language Impairments",
      "authors": "Amanda V Binns、Barbara Jane Cunningham、Allison Andres、Janis Oram Cardy",
      "version": "2022 正式出版",
      "description": "調查顯示不同治療師的評估項目、親職參與方式與跨專業合作存在差異。",
      "rights": "指定作者正文依 CC BY-NC 4.0 由星泊以繁中整理。本整理限非商業分享。",
      "attribution": "Amanda V Binns、Barbara Jane Cunningham、Allison Andres、Janis Oram Cardy，《Current practices, supports, and challenges in speech-language pathology service provision for autistic preschoolers》（2022 正式出版）。星泊整理指定段落。",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9620702/",
      "licenseName": "CC BY-NC 4.0",
      "license": "https://creativecommons.org/licenses/by-nc/4.0/",
      "scopeEvidence": "調查顯示不同治療師的評估項目、親職參與方式與跨專業合作存在差異。",
      "auditId": "S72",
      "reviewScope": "Methods、Results 與 Discussion 限服務內容、評估、家長協作與研究限制，排除測驗、專有方案用語及操作。",
      "currencyEvidence": "專業人員自陳的地區調查，沒有比較服務效果，制度不能套用臺灣。",
      "sourceAudience": "加拿大安大略省 258 位語言治療師及相關服務人員回報學前自閉症服務。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "noncommercial-adaptation-permitted",
      "permissionEvidence": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9620702/",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "dewinter-autistic-sexuality-education": {
      "name": "自閉症青少年的性教育與性別多樣性建議",
      "originalTitle": "Short report: Recommendations for education, clinical practice, research, and policy on promoting well-being in autistic youth and adults through a positive focus on sexuality and gender diversity",
      "publisher": "Autism",
      "authors": "Jeroen Dewinter、Morénike Giwa Onaiwu、Maria L Massolo、Reid Caplan、Els Van Beneden、Nikki Brörmann、Eileen T Crehan、Lisa A Croen、Susan Faja、Dena L Gassner、Laura Graham Holmes、Cat Hughes、Morrigan Hunter、Monique Huysamen、Paola Jelonche、Meng-Chuan Lai、Ilse Noens、Heta Pukki、Mark A Stokes、John F Strang、Anna IR van der Miesen",
      "version": "2024 卷期",
      "description": "由自閉症當事人、研究人員及專業人士合作，提出優先教授可及性、同意、自主與支持的建議。",
      "rights": "指定作者正文依 CC BY-NC 4.0 由星泊以繁中整理。本整理限非商業分享。",
      "attribution": "Jeroen Dewinter、Morénike Giwa Onaiwu、Maria L Massolo、Reid Caplan、Els Van Beneden、Nikki Brörmann、Eileen T Crehan、Lisa A Croen、Susan Faja、Dena L Gassner、Laura Graham Holmes、Cat Hughes、Morrigan Hunter、Monique Huysamen、Paola Jelonche、Meng-Chuan Lai、Ilse Noens、Heta Pukki、Mark A Stokes、John F Strang、Anna IR van der Miesen，《Short report: Recommendations for education, clinical practice, research, and policy on promoting well-being in autistic youth and adults through a positive focus on sexuality and gender diversity》（2024 卷期）。星泊整理指定段落。",
      "url": "https://journals.sagepub.com/doi/abs/10.1177/13623613231188349",
      "licenseName": "CC BY-NC 4.0",
      "license": "https://creativecommons.org/licenses/by-nc/4.0/",
      "scopeEvidence": "由自閉症當事人、研究人員及專業人士合作，提出優先教授可及性、同意、自主與支持的建議。",
      "auditId": "S73",
      "reviewScope": "教育建議中針對自閉症青少年的同意、個別需求與可及性。排除成人及醫療段落。",
      "currencyEvidence": "合作工作小組的建議，並未試驗特定教材效果。",
      "sourceAudience": "自閉症青少年及成人，本文限青少年教育應用。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "noncommercial-adaptation-permitted",
      "permissionEvidence": "https://journals.sagepub.com/doi/abs/10.1177/13623613231188349",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "mukherjee-autistic-teen-family-support": {
      "name": "自閉症青少年家庭重新尋求支持的經驗",
      "originalTitle": "‘Adolescence kicked in . . . and you need help again’: A qualitative study of the experiences of parents of autistic teenagers with mental health difficulties or behaviours that challenge",
      "publisher": "Autism",
      "authors": "Suzanne Mukherjee、Bryony Beresford",
      "version": "2025-09-01 線上出版",
      "description": "訪談家長描述進入青春期後，家庭需要不同的資訊、支持與分工。",
      "rights": "指定作者正文依 CC BY-NC 4.0 由星泊以繁中整理。本整理限非商業分享。",
      "attribution": "Suzanne Mukherjee、Bryony Beresford，《‘Adolescence kicked in . . . and you need help again’: A qualitative study of the experiences of parents of autistic teenagers with mental health difficulties or behaviours that challenge》（2025-09-01 線上出版）。星泊整理指定段落。",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12531384/",
      "licenseName": "CC BY-NC 4.0",
      "license": "https://creativecommons.org/licenses/by-nc/4.0/",
      "scopeEvidence": "訪談家長描述進入青春期後，家庭需要不同的資訊、支持與分工。",
      "auditId": "S74",
      "reviewScope": "Methods、Results／Discussion 作者對家長支持需求及限制的敘述，排除個人引文、危機處理及服務制度推論。",
      "currencyEvidence": "小型質性研究呈現家長視角，保留青少年自身觀點尚不足的限制。",
      "sourceAudience": "英國有自閉症青少年且有心理健康或行為支持需要的家長。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "noncommercial-adaptation-permitted",
      "permissionEvidence": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12531384/",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "ng-affiliate-stigma-family": {
      "name": "學前自閉症家庭面對連帶污名的研究",
      "originalTitle": "The Relationship between Affiliate Stigma in Parents of Children with Autism Spectrum Disorder and Their Children’s Activity Participation",
      "publisher": "International Journal of Environmental Research and Public Health",
      "authors": "Carmen K. M. Ng、Stephen H. F. Lam、Sally T. K. Tsang、Cheong M. C. Yuen、Chi-Wen Chien",
      "version": "2020 正式出版",
      "description": "研究以自閉症幼兒為對象，探討家長的連帶污名與孩子在家、幼兒園和社區活動參與的關聯。",
      "rights": "指定作者正文依 CC BY 4.0 由星泊以繁中整理。",
      "attribution": "Carmen K. M. Ng、Stephen H. F. Lam、Sally T. K. Tsang、Cheong M. C. Yuen、Chi-Wen Chien，《The Relationship between Affiliate Stigma in Parents of Children with Autism Spectrum Disorder and Their Children’s Activity Participation》（2020 正式出版）。星泊整理指定段落。",
      "url": "https://www.mdpi.com/1660-4601/17/5/1799",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scopeEvidence": "研究以自閉症幼兒為對象，探討家長的連帶污名與孩子在家、幼兒園和社區活動參與的關聯。",
      "auditId": "S75",
      "reviewScope": "第 2.1、4、5 節限樣本、活動參與關聯與研究限制，排除量表與資料表。",
      "currencyEvidence": "便利樣本，調查無法區分因果，也未比較申請證明前後。",
      "sourceAudience": "香港 63 位家長，孩子 2–6 歲。",
      "checked": "2026-11-24",
      "scope": "asd",
      "scopeChecked": "2026-11-24",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.mdpi.com/1660-4601/17/5/1799",
      "reviewChecked": "2026-11-24",
      "currencyStatus": "usable"
    },
    "taiwan-assistive-device-subsidies": {
      "name": "身障輔具補助辦法與溝通輔具基準",
      "originalTitle": "身心障礙者輔具費用補助辦法",
      "publisher": "衛生福利部",
      "version": "2022-10-20 修正，2023-01-01 施行",
      "description": "附表第 94–100 項溝通輔具明列自閉症，並依溝通輔具評估及各項條件審查。",
      "rights": "依臺灣《著作權法》第 9 條整理法令及正式附表正文。",
      "attribution": "衛生福利部，《身心障礙者輔具費用補助辦法》及第四條附表。星泊整理指定範圍。",
      "url": "https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=D0050060",
      "licenseName": "著作權法第 9 條",
      "license": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "scopeEvidence": "附表第 94–100 項溝通輔具明列自閉症，並依溝通輔具評估及各項條件審查。",
      "auditId": "S76",
      "reviewScope": "第 2–4、6、9–10、13、16–17 條與正式附表的第 94–100 項溝通輔具，限自閉症對象、補助條件、評估與請領程序。",
      "currencyEvidence": "核對全國法規資料庫現行正文及該版本附表。各款裝置條件、評估與補助額度由戶籍地主管機關確認。",
      "sourceAudience": "領有身心障礙證明且需要評估溝通輔具的自閉症兒少及照顧者。",
      "checked": "2026-11-25",
      "scope": "asd",
      "scopeChecked": "2026-11-25",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.tipo.gov.tw/tw/copyright/694-17733.html",
      "reviewChecked": "2026-11-25",
      "currencyStatus": "usable"
    },
    "taiwan-nhrc-behavior-support": {
      "name": "嚴重情緒行為支持體系專案報告",
      "originalTitle": "如何解決嚴重情緒行為心智障礙者支持體系問題專案報告",
      "publisher": "國家人權委員會",
      "version": "2024-08-23 上版",
      "checked": "2026-11-25",
      "description": "臺灣的政策報告，說明包含自閉症者在內的人，可能因表達困難而讓感受或需要難以被理解。",
      "rights": "依國家人權委員會政府網站資料開放宣告，註明出處可改作。本文僅整理機關自有文字。",
      "attribution": "國家人權委員會（2024），《如何解決嚴重情緒行為心智障礙者支持體系問題專案報告》，由星泊整理。",
      "url": "https://nhrc.cy.gov.tw/News_Content.aspx?n=7459&s=7073",
      "licenseName": "國家人權委員會政府網站資料開放宣告",
      "license": "https://nhrc.cy.gov.tw/cp.aspx?n=9740",
      "scope": "asd",
      "scopeEvidence": "專案報告第 5–6 頁「嚴重情緒行為心智障礙者」中，自閉症者表達感受或需求時可能遇到的溝通困難。",
      "scopeChecked": "2026-11-25",
      "auditId": "S77",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://nhrc.cy.gov.tw/cp.aspx?n=9740",
      "reviewChecked": "2026-11-25",
      "reviewScope": "專案報告第 5–6 頁「嚴重情緒行為心智障礙者」中，自閉症者表達感受或需求時可能遇到的溝通困難。",
      "currencyStatus": "usable",
      "currencyEvidence": "比對官方專案頁、報告正文及網站開放宣告。限用委員會自有敘述作溝通支持背景，排除個案、流行率、危機處理、第三方引文及現行服務資格。",
      "sourceAudience": "報告涵蓋自閉症、智能障礙及多重障礙者，未限定兒童年齡。本文限涉及自閉症者的溝通與需求背景。"
    },
    "vghtpe-autism-home-routines": {
      "name": "在日常作息中陪自閉症孩子練習溝通",
      "originalTitle": "認識自閉症",
      "publisher": "臺北榮民總醫院",
      "authors": "臺北榮民總醫院復健部兒童發展評估中心",
      "version": "衛教網頁，原文未標出版日",
      "checked": "2026-11-25",
      "description": "建議利用原有遊戲或生活活動，以簡短語句配合孩子看得到的動作，也提到家庭可協調日常照顧分工。",
      "rights": "依臺北榮民總醫院政府網站資料開放宣告，署名後可改作院方自有文字。本文僅改寫指定段落。",
      "attribution": "臺北榮民總醫院復健部兒童發展評估中心，《認識自閉症》（衛教網頁，原文未標出版日）。星泊整理指定段落。",
      "url": "https://wd.vghtpe.gov.tw/PMREIP/Fpage.action?fid=9946&muid=10302",
      "licenseName": "臺北榮民總醫院政府網站資料開放宣告",
      "license": "https://www.vghtpe.gov.tw/vghtpe/Fpage.action?fid=2573",
      "scope": "asd",
      "scopeEvidence": "院方自有衛教文字，限「溝通能力」中用簡短語句配合當下衣食及遊戲動作的段落，以及「給媽媽的話」中照顧者分工的一句。排除診斷、病因、盛行率、訓練順序、治療效果及附列資料。",
      "scopeChecked": "2026-11-25",
      "auditId": "S81",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.vghtpe.gov.tw/vghtpe/Fpage.action?fid=2573",
      "reviewChecked": "2026-11-25",
      "reviewScope": "院方自有衛教文字，限「溝通能力」中用簡短語句配合當下衣食及遊戲動作的段落，以及「給媽媽的話」中照顧者分工的一句。排除診斷、病因、盛行率、訓練順序、治療效果及附列資料。",
      "currencyStatus": "usable",
      "currencyEvidence": "以 2024 年 Conrad 等的家長訪談與既有照顧研究交叉核對，採日常溝通與家庭分工兩項，保留衛教性質。頁內部分舊說法已過時，使用範圍限定到具體段落。",
      "sourceAudience": "自閉症兒童及家人，核准段落未設定數字適齡。"
    },
    "vghtpe-autism-visual-support": {
      "name": "用圖片或文字讓自閉症孩子看懂活動步驟",
      "originalTitle": "自閉症之照護",
      "publisher": "臺北榮總護理部健康e點通",
      "authors": "臺北榮民總醫院護理部",
      "version": "衛教網頁，原文未標出版日",
      "checked": "2026-11-25",
      "description": "院方護理指導建議把日常活動拆成短步驟，並以適合孩子的文字或圖片幫助理解。",
      "rights": "依臺北榮民總醫院政府網站資料開放宣告，署名後可改作院方自有文字。本文僅改寫指定段落。",
      "attribution": "臺北榮民總醫院護理部，《自閉症之照護》（衛教網頁，原文未標出版日）。星泊整理指定段落。",
      "url": "https://ihealth.vghtpe.gov.tw/media/852",
      "licenseName": "臺北榮民總醫院政府網站資料開放宣告",
      "license": "https://www.vghtpe.gov.tw/vghtpe/Fpage.action?fid=2573",
      "scope": "asd",
      "scopeEvidence": "限第三節第 3 項依個人狀況協助表達，第四節第 2、3 項的拆解日常活動及圖片／文字提示，以及第二節第 2 項的聲音與光線敏感背景。",
      "scopeChecked": "2026-11-25",
      "auditId": "S82",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.vghtpe.gov.tw/vghtpe/Fpage.action?fid=2573",
      "reviewChecked": "2026-11-25",
      "reviewScope": "限第三節第 3 項依個人狀況協助表達，第四節第 2、3 項的拆解日常活動及圖片／文字提示，以及第二節第 2 項的聲音與光線敏感背景。",
      "currencyStatus": "usable",
      "currencyEvidence": "核對院方護理部平台、開放宣告與該頁署名。限用院方自有文字，排除診斷、成因、藥物、隔離內容及測驗，且不宣稱提示有特定療效。",
      "sourceAudience": "自閉症者的家庭照顧衛教，取兒少日常活動支持做法，原文未訂數字適齡。"
    },
    "liao-taiwan-caregiver-coaching": {
      "name": "臺灣學齡自閉症孩子的家長溝通支持研究",
      "originalTitle": "Telepractice Delivery of Caregiver Coaching for Parents of School-Aged Children with Autism Spectrum Disorder in Taiwan: A Pilot Study",
      "publisher": "Behavioral Sciences",
      "authors": "Ching-Yi Liao、Yuet-Yee Yumi Chan",
      "version": "2025 年正式出版",
      "checked": "2026-11-25",
      "description": "研究中家長用口語、手勢或溝通輔具示範，研究僅涵蓋三組學齡親子。",
      "rights": "依 CC BY 4.0 改寫指定作者文字，保留署名與改寫標記。",
      "attribution": "Ching-Yi Liao、Yuet-Yee Yumi Chan，《Telepractice Delivery of Caregiver Coaching for Parents of School-Aged Children with Autism Spectrum Disorder in Taiwan: A Pilot Study》（2025 年正式出版）。星泊整理指定段落。",
      "url": "https://www.mdpi.com/2076-328X/15/2/118",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "方法章 Participants、Dependent Variables 與討論限制。限家庭情境、溝通媒介及研究限制，排除訓練手冊、操作流程及第三方素材。",
      "scopeChecked": "2026-11-25",
      "auditId": "S83",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://www.mdpi.com/2076-328X/15/2/118",
      "reviewChecked": "2026-11-25",
      "reviewScope": "方法章 Participants、Dependent Variables 與討論限制。限家庭情境、溝通媒介及研究限制，排除訓練手冊、操作流程及第三方素材。",
      "currencyStatus": "usable",
      "currencyEvidence": "原刊註明特刊撤回後本研究保留於原一般期。小樣本個案實驗，未比較哪種溝通媒介最合適，也未確認長期結果。",
      "sourceAudience": "三名 8、9、10 歲的臺灣自閉症孩子與家長；兒童有輕中度至中度溝通困難。"
    },
    "lu-taiwan-seventh-grade-peer-support": {
      "name": "臺灣自閉症國一生的友誼與校園支持研究",
      "originalTitle": "The school environment and bullying victimization among seventh graders with autism spectrum disorder: a cohort study",
      "publisher": "Child and Adolescent Psychiatry and Mental Health",
      "authors": "Hsin-Hui Lu、Duan-Rung Chen、An-Kuo Chou",
      "version": "2022-03-15 正式出版",
      "checked": "2026-11-25",
      "description": "在臺灣國一樣本中，較好的友誼品質及遇到困難時得到同儕協助，與較少遭排斥有關。",
      "rights": "依 CC BY 4.0 改寫指定作者文字，保留署名與改寫標記。",
      "attribution": "Hsin-Hui Lu、Duan-Rung Chen、An-Kuo Chou，《The school environment and bullying victimization among seventh graders with autism spectrum disorder: a cohort study》（2022-03-15 正式出版）。星泊整理指定段落。",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8925143/",
      "licenseName": "CC BY 4.0",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "scope": "asd",
      "scopeEvidence": "方法、結果與討論，限 2011 年資料的國一樣本、友誼品質、同儕協助、課室氣氛與被排斥的關聯。排除測量題項、圖表及其他族群的推論。",
      "scopeChecked": "2026-11-25",
      "auditId": "S84",
      "reuseStatus": "adaptation-permitted",
      "permissionEvidence": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8925143/",
      "reviewChecked": "2026-11-25",
      "reviewScope": "方法、結果與討論，限 2011 年資料的國一樣本、友誼品質、同儕協助、課室氣氛與被排斥的關聯。排除測量題項、圖表及其他族群的推論。",
      "currencyStatus": "usable",
      "currencyEvidence": "資料來自 2011 年臺灣特教長期追蹤資料庫；在地關聯研究可供背景，無法判定因果、介入效果或個別學生缺席原因。",
      "sourceAudience": "臺灣 184 名就讀普通班的自閉症國一學生，約 12–13 歲。"
    },
    "wuang-taiwan-school-sensory": {
      "name": "臺灣自閉症學童的感官與生活參與研究",
      "originalTitle": "Sensory Integration and Perceptual-Motor Profiles in School-Aged Children with Autistic Spectrum Disorder",
      "publisher": "Neuropsychiatric Disease and Treatment",
      "authors": "Yee-Pay Wuang、Chien-Ling Huang、Hsien-Yu Tsai",
      "version": "2020-07-06 正式出版",
      "checked": "2026-11-25",
      "description": "學童的感官與知覺動作測量與日常活動參與有關。可供討論在哪些場景需要調整。",
      "rights": "依 CC BY-NC 3.0 改寫指定作者文字，保留署名與改寫標記。本整理限非商業使用。",
      "attribution": "Yee-Pay Wuang、Chien-Ling Huang、Hsien-Yu Tsai，《Sensory Integration and Perceptual-Motor Profiles in School-Aged Children with Autistic Spectrum Disorder》（2020-07-06 正式出版）。星泊整理指定段落。",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7351620/",
      "licenseName": "CC BY-NC 3.0",
      "license": "https://creativecommons.org/licenses/by-nc/3.0/",
      "scope": "asd",
      "scopeEvidence": "Methods 的樣本、Results 的感官知覺與活動參與關聯、Discussion 的實務及研究限制。排除量表、表格、療程及第三方引文。",
      "scopeChecked": "2026-11-25",
      "auditId": "S85",
      "reuseStatus": "noncommercial-adaptation-permitted",
      "permissionEvidence": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7351620/",
      "reviewChecked": "2026-11-25",
      "reviewScope": "Methods 的樣本、Results 的感官知覺與活動參與關聯、Discussion 的實務及研究限制。排除量表、表格、療程及第三方引文。",
      "currencyStatus": "usable",
      "currencyEvidence": "臺灣職能治療團隊的橫斷研究。引用指定感官與參與資料，適用於學齡觀察背景，不用來判定個別孩子的感官原因或特定環境調整效果。正式 PDF 首頁版權欄明列 CC BY-NC 3.0。",
      "sourceAudience": "117 名臺灣自閉症學童，正文方法章及摘要寫實際樣本 5–13 歲。"
    },
    "taipei-autism-classroom-handbook": {
      "name": "臺北融合教育現場教學手冊的自閉症章",
      "originalTitle": "臺北融合教育現場教學手冊（下冊）第三章：自閉症學生的認識與輔導",
      "authors": "臺北市政府教育局、臺北市國中特殊教育輔導小組",
      "publisher": "臺北市政府教育局",
      "version": "2023 年網站刊載",
      "checked": "2026-11-26",
      "description": "收錄自閉症學生的校園作息、教室安排與事後回顧的例子。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "臺北市政府教育局、臺北市國中特殊教育輔導小組，《臺北融合教育現場教學手冊（下冊）第三章：自閉症學生的認識與輔導》（2023 年網站刊載）。",
      "url": "https://www.doe.gov.taipei/News_Content.aspx?n=09EB907447DBD66F&s=5570670F92527D2F&sms=69B4E6B26379EE4E",
      "scope": "asd",
      "scopeEvidence": "PDF 第 16–18 頁的環境及作息安排，以及第 25–26 頁的事後回顧案例。 第 30–33 頁國中案例，限學生在不同時間點的反應。",
      "scopeChecked": "2026-11-26",
      "auditId": "S86",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "PDF 第 16–18 頁的環境及作息安排，以及第 25–26 頁的事後回顧案例。 第 30–33 頁國中案例，限學生在不同時間點的反應。",
      "currencyStatus": "usable",
      "currencyEvidence": "保留特教實務背景。排除舊鑑定資訊、教案逐句改寫、公開說明個案及原書例文。",
      "sourceAudience": "國中校園的自閉症學生，限手冊所列教育場景。",
      "taiwanSource": true
    },
    "femh-autism-behavior-context": {
      "name": "亞東醫院黃思賓臨床心理師談自閉症孩子的行為",
      "originalTitle": "面對自閉症類群兒童 令人頭疼的行為表現",
      "authors": "黃思賓臨床心理師",
      "publisher": "亞東紀念醫院兒童發展中心",
      "version": "2023 年 4 月院訊",
      "checked": "2026-11-26",
      "description": "院方衛教談如何把重複行為放回情境理解。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "黃思賓臨床心理師，《面對自閉症類群兒童 令人頭疼的行為表現》（2023 年 4 月院訊）。",
      "url": "https://www.femh.org.tw/magazine/viewmag.aspx?ID=11029",
      "scope": "asd",
      "scopeEvidence": "自閉症孩子最常見的行為出現原因分析及評估行為所對應的場合。",
      "scopeChecked": "2026-11-26",
      "auditId": "S79",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "自閉症孩子最常見的行為出現原因分析及評估行為所對應的場合。",
      "currencyStatus": "usable",
      "currencyEvidence": "限觀察重複行為與不適情境。排除按固定功能診斷、行為矯正流程與治療效益。",
      "sourceAudience": "自閉症兒童，未訂數字適齡。",
      "taiwanSource": true
    },
    "cych-autism-parent-group": {
      "name": "嘉義基督教醫院的自閉症家長團體",
      "originalTitle": "懂了孩子，家就不累！嘉基辦自閉症家長團體 陪伴「星星的孩子」全家穩健前行",
      "authors": "嘉義基督教醫院",
      "publisher": "嘉義基督教醫院",
      "version": "院方活動報導",
      "checked": "2026-11-26",
      "description": "嘉基早療中心的團體結合臨床心理師帶領及家庭交流。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "嘉義基督教醫院，《懂了孩子，家就不累！嘉基辦自閉症家長團體 陪伴「星星的孩子」全家穩健前行》（院方活動報導）。",
      "url": "https://www.cych.org.tw/news_detail.aspx?ID=4725",
      "scope": "asd",
      "scopeEvidence": "活動安排、生活常規變動時的事前預告、視覺提示，以及家長同儕交流段。",
      "scopeChecked": "2026-11-26",
      "auditId": "S80",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "活動安排、生活常規變動時的事前預告、視覺提示，以及家長同儕交流段。",
      "currencyStatus": "usable",
      "currencyEvidence": "限活動做法與開催事實，不使用宣傳稿中對成效的推論；未列為現行招生。",
      "sourceAudience": "自閉症幼兒家庭與照顧者。",
      "taiwanSource": true
    },
    "chu-taiwan-autism-mealtime": {
      "name": "朱思穎的自閉症幼童用餐個案",
      "originalTitle": "家庭本位之正向行為支持方案對自閉症幼童拒食行為之介入成效",
      "authors": "朱思穎",
      "publisher": "特殊教育學報",
      "version": "2012 年",
      "checked": "2026-11-26",
      "description": "研究者與家長以家庭晚餐作為觀察和介入場景。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "朱思穎，《家庭本位之正向行為支持方案對自閉症幼童拒食行為之介入成效》（2012 年）。",
      "url": "https://toaj.stpi.niar.org.tw/index/journal/volume/article/4b1141f98902756501891b07d3472750",
      "scope": "asd",
      "scopeEvidence": "原作者公開摘要，限共同選擇家庭用餐情境。",
      "scopeChecked": "2026-11-26",
      "auditId": "S88",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "原作者公開摘要，限共同選擇家庭用餐情境。",
      "currencyStatus": "usable",
      "currencyEvidence": "單一個案。限研究做了什麼，未移用介入程序，也不將成效推到其他孩子。",
      "sourceAudience": "一名有拒食情形的自閉症幼童。",
      "taiwanSource": true
    },
    "moe-autism-sex-education": {
      "name": "教育部國教署自閉症性別平等教育教材",
      "originalTitle": "自閉症類性別平等教育教材",
      "authors": "教育部國民及學前教育署",
      "publisher": "教育部國民及學前教育署",
      "version": "2015 年 6 月",
      "checked": "2026-11-26",
      "description": "自閉症專用教材依學段談身體自主、青春期及經期。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "教育部國民及學前教育署，《自閉症類性別平等教育教材》（2015 年 6 月）。",
      "url": "https://www.gender.edu.tw/web/index.php/m5/m5_05_07_01?sid=68",
      "scope": "asd",
      "scopeEvidence": "原 PDF 的編輯說明；學前擁抱同意、國小拒絕不當接觸、國中青春期與經期用品單元。",
      "scopeChecked": "2026-11-26",
      "auditId": "S91",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "原 PDF 的編輯說明；學前擁抱同意、國小拒絕不當接觸、國中青春期與經期用品單元。",
      "currencyStatus": "usable",
      "currencyEvidence": "原站允許直連並要求保留原檔完整。只交代獨立教學概念與年齡，不取原課程、圖片、台詞或對身體的刻板描述。",
      "sourceAudience": "學前至高中職，實際概述依各單元年齡。",
      "taiwanSource": true
    },
    "pclinic-autism-routine-case": {
      "name": "屏東基督教醫院的作息本位早療個案",
      "originalTitle": "以作息本位介入提供以家庭為中心服務於自閉症兒童家庭之個案分享",
      "authors": "黃佳惠、徐敏、孔緹縈、林廷彥、莊博雅",
      "publisher": "臺灣兒童發展早期療育協會",
      "version": "第十九屆早療大會公開摘要",
      "checked": "2026-11-26",
      "description": "屏基復健科團隊以一個家庭的日常活動安排合作。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "黃佳惠、徐敏、孔緹縈、林廷彥、莊博雅，《以作息本位介入提供以家庭為中心服務於自閉症兒童家庭之個案分享》（第十九屆早療大會公開摘要）。",
      "url": "https://www.tacdei.org.tw/post?special_column_classify_sn=41&special_column_sn=1242",
      "scope": "asd",
      "scopeEvidence": "研究參與者與方法，限團隊和家長共訂家庭目標及運用原有作息。",
      "scopeChecked": "2026-11-26",
      "auditId": "S94",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "研究參與者與方法，限團隊和家長共訂家庭目標及運用原有作息。",
      "currencyStatus": "usable",
      "currencyEvidence": "個案依自身家庭需求設計。不重述療程或推論人人適用。",
      "sourceAudience": "一名 5 歲自閉症兒童及其家庭。",
      "taiwanSource": true
    },
    "lin-taiwan-autistic-early-reading": {
      "name": "臺灣 4–6 歲自閉症兒童的識字與句子理解研究",
      "originalTitle": "比較學齡前自閉症兒童與正常兒童視聽覺理解及識字能力發展之研究",
      "authors": "林初穗、張淑慧、劉文英、吳佑佑、蔡育秀、郭邦彥、顏詩尹",
      "publisher": "特殊教育研究學刊",
      "version": "2006 年",
      "checked": "2026-11-26",
      "description": "臺灣團隊比較幼兒的識字與聽覺理解表現。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "林初穗、張淑慧、劉文英、吳佑佑、蔡育秀、郭邦彥、顏詩尹，《比較學齡前自閉症兒童與正常兒童視聽覺理解及識字能力發展之研究》（2006 年）。",
      "url": "https://bse.spe.ntnu.edu.tw/BSE/upload/journal/prog/CFF_0OI_8C0_23991022.pdf",
      "scope": "asd",
      "scopeEvidence": "第 203 頁摘要與結果，限辨認字詞與聽懂句子是不同能力。",
      "scopeChecked": "2026-11-26",
      "auditId": "S100",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "第 203 頁摘要與結果，限辨認字詞與聽懂句子是不同能力。",
      "currencyStatus": "usable",
      "currencyEvidence": "限舊研究的樣本差異，未引用量表、診斷精確率或對學齡兒童外推。",
      "sourceAudience": "4–6 歲，35 名自閉症兒童及同齡對照組。",
      "taiwanSource": true
    },
    "cg-autism-assessment-children": {
      "name": "長庚兒童心智科的跨專業自閉症評估",
      "originalTitle": "自閉症類群障礙",
      "authors": "長庚紀念醫院",
      "publisher": "長庚紀念醫院",
      "version": "院方衛教，頁面未標正文發布日",
      "checked": "2026-11-26",
      "description": "長庚公開說明如何合併不同專業的觀察，形成診斷與功能資料。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "長庚紀念醫院，《自閉症類群障礙》（院方衛教，頁面未標正文發布日）。",
      "url": "https://www.changgung.hospital/featured-1.aspx?bid=5&id=2022071913572083890",
      "scope": "asd",
      "scopeEvidence": "「診斷評估」與前段所說的個別支持需求。",
      "scopeChecked": "2026-11-26",
      "auditId": "S101",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "「診斷評估」與前段所說的個別支持需求。",
      "currencyStatus": "usable",
      "currencyEvidence": "限這家院所的評估範例，不把特定工具當必要流程或通用診斷門檻。",
      "sourceAudience": "自閉症疑慮或確診的兒少，限該院臨床評估說明。",
      "taiwanSource": true
    },
    "diyi-autism-express-needs": {
      "name": "特教教師王俊凱談日常情境中的輔助溝通",
      "originalTitle": "輔助溝通系統　助自閉兒表達需求",
      "authors": "王俊凱（特殊教育教師）",
      "publisher": "第一基金會 AAC 平台／國語日報特教副刊",
      "version": "2018-06-01",
      "checked": "2026-11-26",
      "description": "王俊凱以自閉症幼兒為對象，談把溝通工具放進孩子實際想表達需求的活動。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "王俊凱（特殊教育教師），《輔助溝通系統　助自閉兒表達需求》（2018-06-01）。",
      "url": "https://aac.diyi.org.tw/aac_popular_science/knowledge/knowledge_017",
      "scope": "asd",
      "scopeEvidence": "「落實在自然情境」，限依實際活動選溝通內容。",
      "scopeChecked": "2026-11-26",
      "auditId": "S102",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "「落實在自然情境」，限依實際活動選溝通內容。",
      "currencyStatus": "usable",
      "currencyEvidence": "平台註明刊載出處與作者。只概述選擇溝通內容的原則，不複述介入、操作或材料。",
      "sourceAudience": "自閉症幼兒及學前教師，正文包含一名未滿四歲幼兒個案。",
      "taiwanSource": true
    },
    "tungs-family-aac-case": {
      "name": "童綜合醫院林昀潔的學前輔助溝通個案",
      "originalTitle": "以家庭為中心的輔助溝通系統介入自閉症孩童主動溝通及情緒行為之成效",
      "authors": "林昀潔（童綜合醫院語言治療組）",
      "publisher": "臺灣兒童發展早期療育協會",
      "version": "第二十五屆早療大會公開摘要",
      "checked": "2026-11-26",
      "description": "臺灣的語言治療師從同一孩子在家與在園的需求出發，與照顧者共同規劃。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "林昀潔（童綜合醫院語言治療組），《以家庭為中心的輔助溝通系統介入自閉症孩童主動溝通及情緒行為之成效》（第二十五屆早療大會公開摘要）。",
      "url": "https://www.tacdei.org.tw/posts?special_column_classify_sn=41&special_column_sn=2179",
      "scope": "asd",
      "scopeEvidence": "方法中的家庭與幼兒園情境、家長一起規劃溝通目標。",
      "scopeChecked": "2026-11-26",
      "auditId": "S103",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "方法中的家庭與幼兒園情境、家長一起規劃溝通目標。",
      "currencyStatus": "usable",
      "currencyEvidence": "只取已公布的個案方法事實，排除訓練步驟、兒童逐字內容、成效推論。",
      "sourceAudience": "一名 4 歲 5 個月自閉症女童，有少量口語。",
      "taiwanSource": true
    },
    "nas-managing-autistic-overload": {
      "name": "英國 National Autistic Society 的過載支持指引",
      "originalTitle": "Meltdowns – a guide for all audiences",
      "authors": "National Autistic Society",
      "publisher": "National Autistic Society",
      "version": "網站現行版",
      "checked": "2026-11-26",
      "description": "指引談過載當下如何減輕刺激、留時間，並提醒留意個別預警訊號。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "National Autistic Society，《Meltdowns – a guide for all audiences》（網站現行版）。",
      "url": "https://www.autism.org.uk/advice-and-guidance/behaviour/meltdowns/all-audiences",
      "scope": "asd",
      "scopeEvidence": "What to do 與 Anticipating a meltdown，限給恢復時間、降低刺激以及個人化壓力訊號。",
      "scopeChecked": "2026-11-26",
      "auditId": "S104",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "What to do 與 Anticipating a meltdown，限給恢復時間、降低刺激以及個人化壓力訊號。",
      "currencyStatus": "usable",
      "currencyEvidence": "限支持背景，不擷取原文清單或把單一訊號當成診斷。",
      "sourceAudience": "自閉症兒童、青少年與成人。本文只採與對應年齡和情境有關的段落。",
      "taiwanSource": false
    },
    "lee-taiwan-preschool-sensory": {
      "name": "成大團隊的學前感官與自我調節研究",
      "originalTitle": "Associations between sensory processing difficulties and dysregulation/deficient self-regulation in preschool children with autism spectrum disorder",
      "authors": "Yao Lee、Yi-Shan Sung、Shan-Chu Yang、Ling-Yi Lin",
      "publisher": "Frontiers in Psychology",
      "version": "2026-07-08",
      "checked": "2026-11-26",
      "description": "比較臺灣自閉症幼兒的感官反應與自我調節。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "Yao Lee、Yi-Shan Sung、Shan-Chu Yang、Ling-Yi Lin，《Associations between sensory processing difficulties and dysregulation/deficient self-regulation in preschool children with autism spectrum disorder》（2026-07-08）。",
      "url": "https://researchoutput.ncku.edu.tw/zh/publications/associations-between-sensory-processing-difficulties-and-dysregul-2/",
      "scope": "asd",
      "scopeEvidence": "作者公開摘要的樣本、分析與橫斷結果。",
      "scopeChecked": "2026-11-26",
      "auditId": "S105",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "作者公開摘要的樣本、分析與橫斷結果。",
      "currencyStatus": "usable",
      "currencyEvidence": "只概述摘要支持的關聯。沒有分析單一聲音或光源的效果。",
      "sourceAudience": "80 名臺灣自閉症學前兒童，摘要所列實際樣本為 36–73 個月。",
      "taiwanSource": true
    },
    "pbs-autistic-media-transitions": {
      "name": "Jenny Radesky 醫師談自閉症兒童的螢幕收尾",
      "originalTitle": "Helping Children With Autism Get the Most Out of Digital Media",
      "authors": "Jenny Radesky（發展行為兒科醫師）",
      "publisher": "PBS KIDS for Parents",
      "version": "2019-04-04",
      "checked": "2026-11-26",
      "description": "發展行為兒科醫師談如何讓螢幕內容結束後比較容易換活動。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "Jenny Radesky（發展行為兒科醫師），《Helping Children With Autism Get the Most Out of Digital Media》（2019-04-04）。",
      "url": "https://parents.prod.pbskids.org/parents/thrive/helping-children-with-autism-get-the-most-out-of-digital-media",
      "scope": "asd",
      "scopeEvidence": "Empower your child to transition from media use，限減少自動接播。",
      "scopeChecked": "2026-11-26",
      "auditId": "S106",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "Empower your child to transition from media use，限減少自動接播。",
      "currencyStatus": "usable",
      "currencyEvidence": "核對是 ASD 專文，限仍適用的播放功能觀點，不寫成效果研究或螢幕時數規範。",
      "sourceAudience": "自閉症兒童及家長，未訂數字適齡。",
      "taiwanSource": false
    },
    "chao-taiwan-autism-diagnosis-parents": {
      "name": "臺灣家長尋求自閉症診斷的訪談研究",
      "originalTitle": "How Taiwanese parents of children with autism spectrum disorder experience the process of obtaining a diagnosis: A descriptive phenomenological analysis",
      "authors": "Kuo-Yu Chao、Hsueh-Ling Chang、Wei-Chih Chin、Hsin-Mei Li、Sue-Hsien Chen",
      "publisher": "Autism",
      "version": "2018 年（2017 年線上出版）",
      "checked": "2026-11-26",
      "description": "臺灣訪談記錄家長從發現疑慮到取得診斷的感受。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "Kuo-Yu Chao、Hsueh-Ling Chang、Wei-Chih Chin、Hsin-Mei Li、Sue-Hsien Chen，《How Taiwanese parents of children with autism spectrum disorder experience the process of obtaining a diagnosis: A descriptive phenomenological analysis》（2018 年（2017 年線上出版））。",
      "url": "https://eric.ed.gov/?id=EJ1178774",
      "scope": "asd",
      "scopeEvidence": "作者公開摘要，限家長在診斷前有不確定感，診斷期間尋求進一步意見的訪談主題。",
      "scopeChecked": "2026-11-26",
      "auditId": "S107",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "作者公開摘要，限家長在診斷前有不確定感，診斷期間尋求進一步意見的訪談主題。",
      "currencyStatus": "usable",
      "currencyEvidence": "質性經驗，未推論所有家庭的歷程或建議一定徵求第二意見。",
      "sourceAudience": "臺灣自閉症孩子的家長。",
      "taiwanSource": true
    },
    "chin-taiwan-autism-parent-coping": {
      "name": "臺灣自閉症家長談照顧與求助的訪談",
      "originalTitle": "Exploring Coping Strategies of Parents of Children With Autism Spectrum Disorder in Taiwan: A Qualitative Study",
      "authors": "Wei-Chih Chin、Hsueh-Ling Chang、Kuo-Yu Chao",
      "publisher": "Journal of Nursing Research",
      "version": "2023 年",
      "checked": "2026-11-26",
      "description": "臺灣家長訪談談到如何尋求其他人與專業的支持。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "Wei-Chih Chin、Hsueh-Ling Chang、Kuo-Yu Chao，《Exploring Coping Strategies of Parents of Children With Autism Spectrum Disorder in Taiwan: A Qualitative Study》（2023 年）。",
      "url": "https://doi.org/10.1097/jnr.0000000000000553",
      "scope": "asd",
      "scopeEvidence": "作者公開摘要與 Results 的 Support 子題，限取得支持的經驗。",
      "scopeChecked": "2026-11-26",
      "auditId": "S108",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "作者公開摘要與 Results 的 Support 子題，限取得支持的經驗。",
      "currencyStatus": "usable",
      "currencyEvidence": "限質性結果及家長描述，不推論支持改善成效。",
      "sourceAudience": "14 位自閉症孩子的臺灣家長。",
      "taiwanSource": true
    },
    "cg-taiwan-autism-school-transition-case": {
      "name": "臺灣早療協會的自閉症幼小轉銜案例",
      "originalTitle": "快樂東東上學去－高功能自閉症兒童幼小銜接與學校適應之個案研究",
      "authors": "曾馨瑩、梁碧明",
      "publisher": "臺灣兒童發展早期療育協會",
      "version": "第九屆早療大會公開摘要",
      "checked": "2026-11-26",
      "description": "追蹤一名孩子的臺灣轉銜案例，提到家長可協助認識新學校。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "曾馨瑩、梁碧明，《快樂東東上學去－高功能自閉症兒童幼小銜接與學校適應之個案研究》（第九屆早療大會公開摘要）。",
      "url": "https://www.tacdei.org.tw/post?special_column_classify_sn=46&special_column_sn=389",
      "scope": "asd",
      "scopeEvidence": "公開摘要的第（二）、（五）項，限家長陪熟悉校園，以及兩階段教師交接的建議。",
      "scopeChecked": "2026-11-26",
      "auditId": "S109",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "公開摘要的第（二）、（五）項，限家長陪熟悉校園，以及兩階段教師交接的建議。",
      "currencyStatus": "usable",
      "currencyEvidence": "案例歷史較早，限仍可理解的場景，不援用當年的制度或安置標準。",
      "sourceAudience": "一名自閉症兒童從幼兒園到小學的歷程。",
      "taiwanSource": true
    },
    "central-taiwan-autistic-school-support": {
      "name": "中部國小普通班的自閉症學生與學校支持研究",
      "originalTitle": "國小普通班自閉症學生學校適應與學校支持之研究－以中部地區為例",
      "authors": "張喜凰、林惠芬",
      "publisher": "特殊教育與復健學報",
      "version": "2011 年",
      "checked": "2026-11-26",
      "description": "研究比較家長與導師對普通班學校支持的觀察。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "張喜凰、林惠芬，《國小普通班自閉症學生學校適應與學校支持之研究－以中部地區為例》（2011 年）。",
      "url": "https://lawdata.com.tw/tw/detail.aspx?no=184481",
      "scope": "asd",
      "scopeEvidence": "原作者公開摘要，限教師與家長對支持的回答，以及導師支持與學校適應的關聯。",
      "scopeChecked": "2026-11-26",
      "auditId": "S110",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "原作者公開摘要，限教師與家長對支持的回答，以及導師支持與學校適應的關聯。",
      "currencyStatus": "usable",
      "currencyEvidence": "限問卷關聯與不同回應，排除原始題目、因果和當前制度推論。",
      "sourceAudience": "臺灣中部國小普通班自閉症學童的家長與導師。",
      "taiwanSource": true
    },
    "lian-autistic-social-communication": {
      "name": "語言治療師連儀談自閉症孩子的互動節奏",
      "originalTitle": "跟隨兒童的引導–談自閉症兒童的社交溝通",
      "authors": "連儀（語言治療師）",
      "publisher": "台灣聽力語言學會電子學報",
      "version": "第 91 期",
      "checked": "2026-11-26",
      "description": "語言治療師說明留給孩子主動表達的時間，以及感官負荷如何影響溝通。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "連儀（語言治療師），《跟隨兒童的引導–談自閉症兒童的社交溝通》（第 91 期）。",
      "url": "https://www.slh.org.tw/upload/files/%E7%AC%AC91%E6%9C%9F-%E8%B7%9F%E9%9A%A8%E5%85%92%E7%AB%A5%E7%9A%84%E5%BC%95%E5%B0%8E%E2%80%93%E8%AB%87%E8%87%AA%E9%96%89%E7%97%87%E5%85%92%E7%AB%A5%E7%9A%84%E7%A4%BE%E4%BA%A4%E6%BA%9D%E9%80%9A.pdf",
      "scope": "asd",
      "scopeEvidence": "觀察孩子的興趣、溝通方式及情緒調節兩節；平板案例只取收走時的情境。",
      "scopeChecked": "2026-11-26",
      "auditId": "S111",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "觀察孩子的興趣、溝通方式及情緒調節兩節；平板案例只取收走時的情境。",
      "currencyStatus": "usable",
      "currencyEvidence": "臺灣學會刊登，文內作者當時服務於上海。排除機制推論、療效敘述及作者的專屬比喻。",
      "sourceAudience": "自閉症兒童，文章以一名 5 歲孩子舉例。",
      "taiwanSource": true
    },
    "wwc-autism-break-card-case": {
      "name": "美國教育部 What Works Clearinghouse 的求休息卡案例",
      "originalTitle": "Study: 82756",
      "authors": "What Works Clearinghouse（美國教育部教育科學研究所）",
      "publisher": "What Works Clearinghouse（美國教育部教育科學研究所）",
      "version": "官方研究評讀摘要",
      "checked": "2026-11-26",
      "description": "教育研究評讀摘要描述一名青少年在校用卡片表達想休息。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "What Works Clearinghouse（美國教育部教育科學研究所），《Study: 82756》（官方研究評讀摘要）。",
      "url": "https://ies.ed.gov/ncee/wwc/Study/82756",
      "scope": "asd",
      "scopeEvidence": "參與者與介入的官方概要，限用卡片向老師提出休息。",
      "scopeChecked": "2026-11-26",
      "auditId": "S112",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "參與者與介入的官方概要，限用卡片向老師提出休息。",
      "currencyStatus": "usable",
      "currencyEvidence": "只保留可表達休息的例子。排除行為訓練程序、任務要求及對其他孩子的效果外推。",
      "sourceAudience": "一名 17 歲自閉症學生，合併智能障礙、情緒行為支持需要及有限口語。",
      "taiwanSource": false
    },
    "ibalance-autistic-everyday-participation": {
      "name": "品恆復健科診所談自閉症孩子的日常參與",
      "originalTitle": "我的孩子真的是自閉症嗎？該如何幫助自閉症孩子？",
      "authors": "品恆復健科診所",
      "publisher": "品恆復健科診所",
      "version": "診所衛教，原頁未標正文日期",
      "checked": "2026-11-26",
      "description": "診所衛教列舉自閉症兒童穿衣、用餐、如廁時可能遇到的事。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "品恆復健科診所，《我的孩子真的是自閉症嗎？該如何幫助自閉症孩子？》（診所衛教，原頁未標正文日期）。",
      "url": "https://www.ibalance-clinic.com.tw/page-2720",
      "scope": "asd",
      "scopeEvidence": "「職能參與」下的生活自理段，限衣物觸感與如廁情境的例子。",
      "scopeChecked": "2026-11-26",
      "auditId": "S113",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "「職能參與」下的生活自理段，限衣物觸感與如廁情境的例子。",
      "currencyStatus": "usable",
      "currencyEvidence": "只取生活例子，排除診斷、自閉症分類、療效及診所宣傳。",
      "sourceAudience": "自閉症兒童及家長。",
      "taiwanSource": true
    },
    "ntpc-planned-transit-cards": {
      "name": "新北市政府的 2027 年愛心卡用途規劃",
      "originalTitle": "總質詢關注新北敬老愛心卡 侯友宜：7月起分階段擴大使用範圍",
      "authors": "新北市政府",
      "publisher": "新北市政府",
      "version": "2026-06-01 市政新聞",
      "checked": "2026-11-26",
      "description": "新北公布 2027 年有意分階段擴大愛心卡使用範圍。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "新北市政府，《總質詢關注新北敬老愛心卡 侯友宜：7月起分階段擴大使用範圍》（2026-06-01 市政新聞）。",
      "url": "https://www.ntpc.gov.tw/ch/home.jsp?dataserno=202606010068&id=28",
      "scope": "asd",
      "scopeEvidence": "市政新聞對 116 年分階段規劃，併讀社會局 116 年度施政計畫第 7 項，限明確包含愛心卡的擴大用途規劃。",
      "scopeChecked": "2026-11-26",
      "auditId": "S115",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "市政新聞對 116 年分階段規劃，併讀社會局 116 年度施政計畫第 7 項，限明確包含愛心卡的擴大用途規劃。",
      "currencyStatus": "usable",
      "currencyEvidence": "屬未來用途規劃。本次未認定新用途已開通，也不更改 22 縣市現行額度。",
      "sourceAudience": "新北市敬老卡及愛心卡持卡人，其中依法領有身心障礙證明的自閉症兒少可依地方資格申辦。",
      "taiwanSource": true
    },
    "moe-autism-educational-assessment-manual": {
      "name": "教育部特教鑑定手冊的自閉症章",
      "originalTitle": "特殊教育學生及幼兒鑑定辦法說明手冊",
      "authors": "教育部",
      "publisher": "教育部",
      "version": "教育部全國特殊教育資訊網刊載",
      "checked": "2026-11-26",
      "description": "教育部手冊說明特教鑑定如何蒐集學校情境下的資料、了解教育支持需求。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "教育部，《特殊教育學生及幼兒鑑定辦法說明手冊》（教育部全國特殊教育資訊網刊載）。",
      "url": "https://special.moe.gov.tw/api/file/download?filePath=c59116c8277d4f6881d518bcba144601.pdf",
      "scope": "asd",
      "scopeEvidence": "自閉症學生鑑定章的發現、篩選與鑑定說明，以及課業和社會適應的觀察方向。",
      "scopeChecked": "2026-11-26",
      "auditId": "S116",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "自閉症學生鑑定章的發現、篩選與鑑定說明，以及課業和社會適應的觀察方向。",
      "currencyStatus": "usable",
      "currencyEvidence": "手冊部分內容早於現行法規。只談教育觀察與需求，排除時限、診斷分類、法律資格和測驗題。",
      "sourceAudience": "學前至高中自閉症學生，限手冊教育需求及學校觀察的部分。",
      "taiwanSource": true
    },
    "taipei-early-childhood-transition-contact": {
      "name": "臺北市早療通報轉介中心的入園與特教窗口",
      "originalTitle": "轉銜相關單位通訊錄",
      "authors": "臺北市政府社會局早療通報轉介中心",
      "publisher": "臺北市政府社會局早療通報轉介中心",
      "version": "市府網站現行頁面",
      "checked": "2026-11-26",
      "description": "臺北市列出早療、教育鑑定與巡迴輔導的不同窗口。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "臺北市政府社會局早療通報轉介中心，《轉銜相關單位通訊錄》（市府網站現行頁面）。",
      "url": "https://www.eirrc.gov.taipei/cp.aspx?n=50CEEA1FBBB2401C",
      "scope": "asd",
      "scopeEvidence": "業務單位表教育局、特教資源中心列，含幼兒鑑定安置和自閉症巡迴支持。",
      "scopeChecked": "2026-11-26",
      "auditId": "S117",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "業務單位表教育局、特教資源中心列，含幼兒鑑定安置和自閉症巡迴支持。",
      "currencyStatus": "usable",
      "currencyEvidence": "限臺北市查找實例，不把不同縣市幼兒園可取得的支持視為相同。",
      "sourceAudience": "臺北市早療家庭、涉及公私立幼兒園巡迴輔導的自閉症幼兒。",
      "taiwanSource": true
    },
    "moe-mainstream-class-team": {
      "name": "教育部主管學校的普通班團隊支持規定",
      "originalTitle": "教育部主管之高級中等以下學校身心障礙學生就讀普通班之教學原則及輔導辦法",
      "authors": "教育部",
      "publisher": "教育部",
      "version": "現行條文",
      "checked": "2026-11-26",
      "description": "規定教育部主管學校依學生 IEP，安排普通班及特教協作。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "教育部，《教育部主管之高級中等以下學校身心障礙學生就讀普通班之教學原則及輔導辦法》（現行條文）。",
      "url": "https://edu.law.moe.gov.tw/LawContent.aspx?id=GL000518",
      "scope": "asd",
      "scopeEvidence": "第 1、2、4 條。限教育部主管學校、普通班團隊與 IEP；自閉症適用範圍與《特殊教育法》第 3 條第 10 款併讀。",
      "scopeChecked": "2026-11-26",
      "auditId": "S118",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "第 1、2、4 條。限教育部主管學校、普通班團隊與 IEP；自閉症適用範圍與《特殊教育法》第 3 條第 10 款併讀。",
      "currencyStatus": "usable",
      "currencyEvidence": "依現行條文查核並標主管範圍。未引用地方不同辦法、幼兒園編制或人力承諾。",
      "sourceAudience": "教育部主管的高級中等以下學校身心障礙學生，包含《特殊教育法》第 3 條第 10 款的自閉症類別。",
      "taiwanSource": true
    },
    "control-yuan-autistic-student-school-access": {
      "name": "監察院對自閉症學生入學遭拒的調查",
      "originalTitle": "臺中市太平區東汴國民小學拒絕自閉症學生入學案",
      "authors": "王幼玲（調查委員）",
      "publisher": "監察院",
      "version": "2020-06-11 公開調查案",
      "checked": "2026-11-26",
      "description": "監察院針對在地個案查明校方處理入學及支持的問題。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "王幼玲（調查委員），《臺中市太平區東汴國民小學拒絕自閉症學生入學案》（2020-06-11 公開調查案）。",
      "url": "https://www.cy.gov.tw/CyBsBoxContent.aspx?n=133&s=17174",
      "scope": "asd",
      "scopeEvidence": "案由及糾正結論，限以特教資源不足拒絕入學及未妥善協助的調查事實。",
      "scopeChecked": "2026-11-26",
      "auditId": "S119",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "案由及糾正結論，限以特教資源不足拒絕入學及未妥善協助的調查事實。",
      "currencyStatus": "usable",
      "currencyEvidence": "不加個案身分資訊，不以此案估算領證造成標籤的風險，也不使用舊法編號取代現行條文。",
      "sourceAudience": "一名自閉症國小學生的校園事件。",
      "taiwanSource": true
    },
    "ntpc-respite-autistic-families": {
      "name": "新北市臨時及短期照顧計畫中的自閉症對象",
      "originalTitle": "新北市政府社會局115-116年度補助辦理身心障礙者臨時及短期照顧服務實施計畫",
      "authors": "新北市政府社會局",
      "publisher": "新北市政府社會局",
      "version": "2026–2027 年計畫",
      "checked": "2026-11-26",
      "description": "地方政府計畫列明符合資格的自閉症者如何銜接臨時或短期照顧。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "新北市政府社會局，《新北市政府社會局115-116年度補助辦理身心障礙者臨時及短期照顧服務實施計畫》（2026–2027 年計畫）。",
      "url": "https://www.sw.ntpc.gov.tw/uploaddowndoc?dis=download&file=download%2F202603061022100.pdf&filedisplay=%28%E5%85%AC%E5%91%8A%29-%E8%BA%AB%E5%BF%83%E9%9A%9C%E7%A4%99%E8%80%85%E8%87%A8%E6%99%82%E5%8F%8A%E7%9F%AD%E6%9C%9F%E7%85%A7%E9%A1%A7%E6%9C%8D%E5%8B%99%E5%AF%A6%E6%96%BD%E8%A8%88%E7%95%AB.pdf&flag=doc",
      "scope": "asd",
      "scopeEvidence": "服務對象、需求評估及申辦段落，限一類自閉症及計畫適用條件。",
      "scopeChecked": "2026-11-26",
      "auditId": "S120",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "服務對象、需求評估及申辦段落，限一類自閉症及計畫適用條件。",
      "currencyStatus": "usable",
      "currencyEvidence": "只作新北案例，完整資格由社會局依個案和當期計畫核定。",
      "sourceAudience": "新北市符合該計畫服務對象規定的持證者，文件明列部分自閉症情況。",
      "taiwanSource": true
    },
    "lia-underwriting-disability-rules": {
      "name": "壽險公會的身心障礙者核保處理原則",
      "originalTitle": "保險業承保身心障礙者處理原則",
      "authors": "中華民國人壽保險商業同業公會",
      "publisher": "中華民國人壽保險商業同業公會",
      "version": "2022-07-05 金管會同意修正版本",
      "checked": "2026-11-26",
      "description": "公會公布應以個別條件核保的處理原則。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "中華民國人壽保險商業同業公會，《保險業承保身心障礙者處理原則》（2022-07-05 金管會同意修正版本）。",
      "url": "https://liaroc.org.tw/list_article?article_content=514",
      "scope": "asd",
      "scopeEvidence": "承保評估段落，限不得單據身障身分、須綜合個別狀況與險種條件。",
      "scopeChecked": "2026-11-26",
      "auditId": "S121",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "承保評估段落，限不得單據身障身分、須綜合個別狀況與險種條件。",
      "currencyStatus": "usable",
      "currencyEvidence": "核對現行公布處及金管會函文。限處理原則，不推算自閉症核保結果或替商品提供承保承諾。",
      "sourceAudience": "投保的身心障礙者，與監察院自閉症案例及本文核保法規併讀。",
      "taiwanSource": true
    },
    "kmuh-disability-evaluation-roles": {
      "name": "高雄市立聯合醫院的鑑定分工說明",
      "originalTitle": "身心障礙鑑定服務專區",
      "authors": "高雄市立聯合醫院",
      "publisher": "高雄市立聯合醫院",
      "version": "院方現行網站資料",
      "checked": "2026-11-26",
      "description": "院方公開說明身體功能與活動參與的鑑定工作由不同專業處理。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "高雄市立聯合醫院，《身心障礙鑑定服務專區》（院方現行網站資料）。",
      "url": "https://www.kmuh.gov.tw/cp.aspx?n=BFDC5E0EECF8B723",
      "scope": "asd",
      "scopeEvidence": "新制身心障礙鑑定流程步驟二、三；併讀法定鑑定作業辦法的自閉症適用範圍。",
      "scopeChecked": "2026-11-26",
      "auditId": "S122",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "新制身心障礙鑑定流程步驟二、三；併讀法定鑑定作業辦法的自閉症適用範圍。",
      "currencyStatus": "usable",
      "currencyEvidence": "院所分工實例。排除等待天數及其他障礙項目的文件，未滿六歲暫判仍依現行第 9 條。",
      "sourceAudience": "到該院鑑定的申請者。本篇限與自閉症身障鑑定法規相符的流程角色。",
      "taiwanSource": true
    },
    "ntpc-early-intervention-cost-subsidies": {
      "name": "新北市早療費用與交通補助的文件說明",
      "originalTitle": "發展遲緩兒童療育補助（早療交通費或療育費）",
      "authors": "新北市政府社會局",
      "publisher": "新北市政府社會局",
      "version": "市府現行網站資料",
      "checked": "2026-11-26",
      "description": "新北市列出可供審查的不同種類文件。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "新北市政府社會局，《發展遲緩兒童療育補助（早療交通費或療育費）》（市府現行網站資料）。",
      "url": "https://www.sw.ntpc.gov.tw/home.jsp?act=be4f48068b2b0031&dataserno=490876a2ea5230f5ed8daaf4598cc80c&fromsection=inarticle&id=af6b347895e3de2c&sectioninfo=5092295",
      "scope": "asd",
      "scopeEvidence": "申請條件中的有效身心障礙證明及發展聯評文件；併讀本文原 ASD 來源，限在地文件的比較。",
      "scopeChecked": "2026-11-26",
      "auditId": "S123",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "申請條件中的有效身心障礙證明及發展聯評文件；併讀本文原 ASD 來源，限在地文件的比較。",
      "currencyStatus": "usable",
      "currencyEvidence": "限核對文件項目，未新增一般化的資格、金額或審查結果。",
      "sourceAudience": "符合新北早期療育補助條件的兒童，涵蓋持有效身心障礙證明或符合文件條件的自閉症幼兒。",
      "taiwanSource": true
    },
    "chang-taiwan-autistic-friendship": {
      "name": "臺灣自閉症青少年的友誼與孤單感研究",
      "originalTitle": "Understanding the characteristics of friendship quality, activity participation, and emotional well-being in Taiwanese adolescents with autism spectrum disorder",
      "authors": "Yu-Chien Chang、Chih-Hsuan Chen、Pai-Chuan Huang、Ling-Yi Lin",
      "publisher": "Scandinavian Journal of Occupational Therapy",
      "version": "2019 年（2018 年線上出版）",
      "checked": "2026-11-26",
      "description": "臺灣青少年自評的友誼品質和孤單感相關。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "Yu-Chien Chang、Chih-Hsuan Chen、Pai-Chuan Huang、Ling-Yi Lin，《Understanding the characteristics of friendship quality, activity participation, and emotional well-being in Taiwanese adolescents with autism spectrum disorder》（2019 年（2018 年線上出版））。",
      "url": "https://researchoutput.ncku.edu.tw/zh/publications/understanding-the-characteristics-of-friendship-quality-activity-/",
      "scope": "asd",
      "scopeEvidence": "成大收錄的原作者摘要，限受訪者自評的友誼品質、學校參與與孤單感的關聯。",
      "scopeChecked": "2026-11-26",
      "auditId": "S114",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "成大收錄的原作者摘要，限受訪者自評的友誼品質、學校參與與孤單感的關聯。",
      "currencyStatus": "usable",
      "currencyEvidence": "觀察問卷僅提供關聯。不推論交朋友可改善情緒，也不推論想獨處就一定孤單。",
      "sourceAudience": "臺灣 10–19 歲的 101 位自閉症青少年與 101 位同齡對照。",
      "taiwanSource": true
    },
    "nas-autistic-disclosure-note": {
      "name": "英國 National Autistic Society 的診斷告知指引",
      "originalTitle": "Talking about and disclosing your autism diagnosis",
      "authors": "National Autistic Society",
      "publisher": "National Autistic Society",
      "version": "網站現行版",
      "checked": "2026-11-26",
      "description": "指引分別談如何跟孩子說明自閉症診斷，以及如何討論要告訴誰。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "National Autistic Society，《Talking about and disclosing your autism diagnosis》（網站現行版）。",
      "url": "https://www.autism.org.uk/advice-and-guidance/diagnosis/after-diagnosis/talking-about-and-disclosing-your-autism-diagnosis",
      "scope": "asd",
      "scopeEvidence": "When should I tell people I am autistic，限依兒少意願分別決定告知對象和時機。 When and how should I talk to my child about their diagnosis，限依孩子理解分次談。",
      "scopeChecked": "2026-11-26",
      "auditId": "A01",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "When should I tell people I am autistic，限依兒少意願分別決定告知對象和時機。 When and how should I talk to my child about their diagnosis，限依孩子理解分次談。",
      "currencyStatus": "usable",
      "currencyEvidence": "只用家庭溝通原則，排除英國法令、當事人原話和泛化揭露成效。",
      "sourceAudience": "自閉症兒少及家庭。涉及向他人告知的內容限較大兒少與照顧者。",
      "taiwanSource": false
    },
    "nas-sleep-action-bedtime": {
      "name": "Sleep Action 分享的自閉症兒童睡前作息案例",
      "originalTitle": "Autism and sleep disturbance",
      "authors": "Alyson O’Brien",
      "publisher": "National Autistic Society",
      "version": "網站現行版",
      "checked": "2026-11-26",
      "description": "睡眠工作者分享一名自閉症兒童的睡前作息調整。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "Alyson O’Brien，《Autism and sleep disturbance》（網站現行版）。",
      "url": "https://www.autism.org.uk/learn/knowledge-hub/professional-practice/sleep-disturbance",
      "scope": "asd",
      "scopeEvidence": "Case study，限一名 7 歲自閉症孩子的睡前安排。",
      "scopeChecked": "2026-11-26",
      "auditId": "S124",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "Case study，限一名 7 歲自閉症孩子的睡前安排。",
      "currencyStatus": "usable",
      "currencyEvidence": "限具體案例中的選擇與作息，排除療效推論。",
      "sourceAudience": "自閉症兒童及家庭。",
      "taiwanSource": false
    },
    "nas-attendance-parent-observation": {
      "name": "英國 National Autistic Society 的上學困難家長指引",
      "originalTitle": "What can I do if my child won’t go to school?",
      "authors": "National Autistic Society",
      "publisher": "National Autistic Society",
      "version": "網站現行版",
      "checked": "2026-11-26",
      "description": "家長指引說明如何和孩子辨認學校裡特別困難的情境。",
      "rights": "星泊以自己的文字整理指定觀點或事實，並連回原文。",
      "attribution": "National Autistic Society，《What can I do if my child won’t go to school?》（網站現行版）。",
      "url": "https://www.autism.org.uk/advice-and-guidance/education/attendance-problems/parents",
      "scope": "asd",
      "scopeEvidence": "Strategies you could try at home，限請孩子指出校內最不安的活動或地點。",
      "scopeChecked": "2026-11-26",
      "auditId": "S125",
      "reuseStatus": "attributed-summary",
      "reviewChecked": "2026-11-26",
      "reviewScope": "Strategies you could try at home，限請孩子指出校內最不安的活動或地點。",
      "currencyStatus": "usable",
      "currencyEvidence": "限定位最困難的情境，不援用英國校務流程。",
      "sourceAudience": "自閉症學齡兒童與青少年及照顧者。",
      "taiwanSource": false
    }
  },
  "articles": [
    {
      "id": "next",
      "category": "routines",
      "title": "讓下一步，看得見",
      "ages": [
        "6–8 歲"
      ],
      "time": 4,
      "summary": "從收玩具到準備吃飯，用孩子看得懂的方式，把「現在」和「接下來」並排放著。",
      "related": "pp-visual",
      "situations": [
        "transitions",
        "meals"
      ],
      "status": "trial",
      "sourceSection": "第 1–2 頁。視覺提示的排法、孩子的參與和實物／照片的選擇。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "sections": [
        {
          "heading": "孩子需要看懂的是哪兩件事？",
          "list": {
            "items": [
              "孩子可以用熟悉的實物、照片或文字，確認現在正做什麼、接著會做什麼。",
              "在換活動前，孩子也可能想知道手上的事怎麼收尾。提示可以隨你們的約定一起更新。"
            ]
          },
          "taiwanEvidence": [
            "臺北榮總護理部建議把複雜的活動拆開，再用孩子看得懂的文字或圖片讓步驟清楚。本文的「現在／接下來」用積木與餐桌示範怎麼運用這個原則。"
          ],
          "evidence": [
            "Positive Partnerships 的視覺支持資料提供提示形式與選擇原則。積木例子是編輯整理的居家示例。"
          ],
          "sourceNotes": [
            {
              "id": "taipei-autism-classroom-handbook",
              "section": "PDF 第 17–18 頁，限清楚語句、預告及作息安排。",
              "text": "臺北市教育局在自閉症教學手冊提醒，改做新事情前可以先說明變動。對應到家裡的收尾情境，圖卡上除了要停下的活動，也可以讓孩子看到接著會去哪裡。"
            }
          ]
        },
        {
          "heading": "收玩具前，怎麼把下一步說清楚？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>各挑一個看得懂的提示。</strong> 和孩子一起選積木和餐墊的照片，也可以用實物、手繪圖或文字。",
              "<strong>在轉換前把兩個提示並排。</strong> 例如說「現在玩積木，等一下去餐桌」。放在孩子自己能回頭看的位置。",
              "<strong>照孩子的回應調整。</strong> 孩子想再放一塊積木，可以約好放完把作品留到飯後。若孩子把照片理解成要立刻過去，改在準備轉換時出示，再看看他是否還有同樣的疑問。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "morning-exit"
      ],
      "additionalSources": [
        {
          "id": "vghtpe-autism-visual-support",
          "section": "第四節第 2、3 項，限分解活動與文字或圖片提示。"
        }
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "needs",
      "category": "communication",
      "title": "當孩子想表達「我需要」",
      "ages": [
        "6–8 歲"
      ],
      "time": 4,
      "summary": "從孩子熟悉的手勢、聲音或圖片開始，確認你有沒有聽懂孩子的意思。",
      "related": "pp-visual",
      "situations": [
        "communication"
      ],
      "status": "trial",
      "sourceSection": "第 1–2 頁。用孩子理解的實物、照片或文字支持溝通。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "sections": [
        {
          "heading": "孩子在用什麼方式讓你知道他需要什麼？",
          "list": {
            "items": [
              "孩子可能用指物、表情、聲音、動作或圖卡表達。手勢的意思可以和當時的情境一起確認。",
              "推開或轉身也可能是在拒絕。先停一下，給孩子時間補充自己的意思。"
            ]
          },
          "taiwanEvidence": [
            "臺師大 Liao 與 Chan 的初步研究中，三名 8–10 歲自閉症孩子的家長用手勢或溝通輔具示範。它提供臺灣家庭運用不同表達方式的例子，研究規模不足以比較哪種方式最好。"
          ],
          "evidence": [
            "Positive Partnerships 的視覺支持資料建議依孩子的理解與實際溝通方式選提示。桌邊對話是編輯整理的示例。"
          ],
          "sourceNotes": [
            {
              "id": "diyi-autism-express-needs",
              "section": "自然情境的溝通內容。",
              "text": "特教教師王俊凱建議，先想孩子在這個活動裡想跟人說什麼，再決定用哪種溝通工具。比如孩子在餐桌最常需要表達的是「不要」，就先讓他有辦法表示拒絕。"
            }
          ]
        },
        {
          "heading": "還沒聽懂時，可以怎麼確認？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>先找孩子指向或正在看的東西。</strong> 用他看得懂的實物或圖卡，一次確認一個可能的意思。",
              "<strong>等孩子回答，再回應他。</strong> 例如孩子推開杯子又指著桌面，依序指水壺和紙巾。孩子指紙巾，就把紙巾拿近，再看他的反應。",
              "<strong>留下孩子用得上的提示。</strong> 把常用的圖卡放在孩子拿得到的地方。家裡和學校反覆猜同一個手勢時，簡記它出現的情境，方便一起確認。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "wait-for-answer"
      ],
      "additionalSources": [
        {
          "id": "liao-taiwan-caregiver-coaching",
          "section": "方法章的樣本與溝通媒介，以及討論的研究限制。"
        }
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "sound",
      "category": "sensory",
      "title": "聲音太多的時候",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 4,
      "summary": "先辨認讓孩子不舒服的聲音，再一起找一個可以休息的地方。",
      "related": "rr-sensory",
      "situations": [
        "sensory"
      ],
      "status": "trial",
      "sourceSection": "第3節及表3（期刊第8頁）的個別感官環境文字。原文是專業治療情境；此處僅作環境理解，生活例子為星泊原創，不代表療效已驗證。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "additionalSources": [
        {
          "id": "vghtpe-autism-visual-support",
          "section": "第二節第 2 項，限兒少對聲音刺激的敏感差異。"
        },
        {
          "id": "mullally-child-school-experience",
          "section": "第一個主題中作者對聽覺與擁擠情境的綜整。"
        }
      ],
      "sections": [
        {
          "heading": "孩子想離開的是哪種聲音？",
          "list": {
            "items": [
              "摀耳、想換位或想出去，都是可以和孩子確認的線索。同時有人聲、餐具聲或電視聲時，也可能是聲音疊在一起讓他不舒服。",
              "一次先調整一個聲音來源或位置，方便看出孩子覺得哪裡比較舒服。"
            ]
          },
          "taiwanEvidence": [
            "臺北榮總護理部衛教把對某些聲音特別敏感列為可能的感官差異。孩子摀耳、想離開時，可以先問是哪種聲音最難受，再改一項環境條件。"
          ],
          "evidence": [
            "Daniel 等的文章提供感官環境調整的背景。Mullally 等整理英國 8–14 歲自閉症孩子自述的校園經驗，聲音是最常被提到的感官壓力。這是孩子自述，適合用來了解當事人的經驗。"
          ],
          "sourceNotes": [
            {
              "id": "lee-taiwan-preschool-sensory",
              "section": "作者摘要，限學前樣本的感官反應與自我調節。",
              "text": "成大研究團隊觀察到，臺灣學前自閉症孩子的部分感官反應與自我調節困難有關。研究沒有分別測試各種聲音，家長仍要看孩子在哪個場合最吃力。"
            }
          ]
        },
        {
          "heading": "家裡或聚餐時，怎麼先讓孩子舒服一點？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>請孩子指出哪裡比較難受。</strong> 可以問「要關電視，還是想坐遠一點？」也接受他用手勢或走向另一個位置回答。",
              "<strong>一起去孩子選的休息點。</strong> 例如備菜聲變大時，先陪孩子移到離廚房較遠的位置，再問想在那裡休息還是先出去。",
              "<strong>讓孩子決定要不要回來。</strong> 換位後仍不舒服，可以一起離開。等孩子願意談時，再約下次聚會想坐哪裡、用什麼方式表示需要休息。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "sensory-context-notes"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "pause",
      "category": "feelings",
      "title": "情緒很滿，先一起停一下",
      "ages": [
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 4,
      "summary": "從陪伴和觀察開始，想想孩子想要的是安靜、空間，還是有人在旁邊。",
      "related": "pp-workbook",
      "situations": [
        "feelings",
        "sensory"
      ],
      "status": "trial",
      "sourceSection": "第 48、122、124 頁，參考環境調整和依孩子反應陪伴的文字。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "additionalSources": [
        {
          "id": "mullally-child-school-experience",
          "section": "作者對安全空間、可信任的成人和自主調節的整理。"
        }
      ],
      "sections": [
        {
          "heading": "孩子現在需要空間，還是想有人陪？",
          "list": {
            "items": [
              "遇到意外改變或挫折時，聲音、靠近和接連提問可能讓當下更吃力。可以先降低負荷，等孩子有餘力再問。",
              "孩子退開、靠近或指向某個地方，都可以用來確認他此刻想怎麼休息。"
            ]
          },
          "evidence": [
            "Positive Partnerships 的家長工作手冊提供辨認負荷與陪伴的背景。Mullally 等整理英國 8–14 歲自閉症孩子對安靜休息位置、能否被理解的感受。"
          ],
          "sourceNotes": [
            {
              "id": "lian-autistic-social-communication",
              "section": "情緒調節段，限降低刺激、再重新開始對話。",
              "text": "語言治療師連儀建議，孩子還沒準備好接收訊息時，可以先減少當下的感官負荷。等他比較能留意大人，再慢慢恢復互動。"
            }
          ]
        },
        {
          "heading": "情緒上來時，你可以先做哪幾件事？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>先停一停，讓周圍簡單一點。</strong> 把手邊的東西放穩，先暫停對話或減少背景聲。如果孩子往後退，就留出一點距離。",
              "<strong>用一句話確認要不要陪。</strong> 例如積木倒了，先坐在孩子看得到的位置，說「我在這裡」。等孩子用熟悉的方式表示想被陪著或想自己待一下。",
              "<strong>等雙方都準備好，再談下次。</strong> 一起回顧哪裡最難、要不要先約個安靜的位置。若反覆出現會受傷的情況，可和熟悉孩子的專業人員討論安全安排。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "early-pressure"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "bedtime",
      "category": "routines",
      "title": "把睡前流程排成三步",
      "ages": [
        "6–8 歲"
      ],
      "time": 4,
      "summary": "從孩子熟悉的步驟挑幾件事，一起把睡前安排畫下來。",
      "related": "pp-visual",
      "situations": [
        "routines"
      ],
      "status": "trial",
      "sourceSection": "第 1–2 頁，參考孩子參與、有意義的視覺提示與提示形式。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "sections": [
        {
          "heading": "為什麼把睡前流程放在看得見的地方？",
          "list": {
            "items": [
              "孩子若想確認還剩幾件事，可以自己回頭看提示。圖像、文字或實物，選孩子平常讀得懂的方式就好。",
              "順序可以照家裡當天的安排和孩子的意見更新。若整排看起來太多，先留一張「接下來」。"
            ]
          },
          "taiwanEvidence": [
            "臺北榮總護理部用拆步驟與圖片或文字支持日常活動理解。睡前三張卡是這個原則的居家例子。"
          ],
          "evidence": [
            "Positive Partnerships 的視覺支持資料提供依孩子理解方式選提示的原則。睡前翻卡是編輯整理的示例。這份資料和榮總的衛教都未檢驗睡眠成效。"
          ],
          "sourceNotes": [
            {
              "id": "nas-sleep-action-bedtime",
              "section": "Case study，限一名 7 歲自閉症孩子的睡前安排。",
              "text": "Sleep Action 的 Alyson O’Brien 分享過一個 7 歲自閉症孩子的案例，家人和睡眠輔導員一起安排睡前作息，讓孩子自己挑想聽的故事。這個做法保留了孩子能決定的部分。"
            }
          ]
        },
        {
          "heading": "睡前的三張卡，可以怎麼開始？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>一起挑三件已經熟悉的事。</strong> 例如換睡衣、刷牙、選一本書。",
              "<strong>照順序擺在孩子能看到的位置。</strong> 做完一件就翻過那張卡。孩子想先選書時，可以一起挪動卡片，再照新的順序做。",
              "<strong>隔天問哪一張有用。</strong> 看看孩子有沒有自己回去看，或哪一步還要大人提醒，再決定要留幾張或換個位置。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "next"
      ],
      "additionalSources": [
        {
          "id": "vghtpe-autism-visual-support",
          "section": "第四節第 2、3 項，限一般日常活動拆步驟與視覺提示。"
        }
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "table",
      "category": "routines",
      "title": "從熟悉的餐桌開始",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 4,
      "summary": "觀察位置、餐具與周遭聲音，找出孩子在餐桌上感到自在的條件。",
      "related": "rr-sensory",
      "situations": [
        "meals",
        "sensory"
      ],
      "status": "trial",
      "sourceSection": "第3節及表3（期刊第8頁）的個別感官環境文字。原文是專業治療情境；此處僅作環境理解，生活例子為星泊原創，不代表療效已驗證。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "sections": [
        {
          "heading": "餐桌上有哪些小地方可能讓孩子不舒服？",
          "list": {
            "items": [
              "孩子在某些位子比較難坐得自在，可能和餐具聲、座椅位置、觸感或有人經過有關。孩子自己的描述能幫你縮小要看的範圍。",
              "一次只改一項，方便孩子比較，也讓一起照顧的人知道什麼有幫助。"
            ]
          },
          "evidence": [
            "Daniel 等的文章討論專業情境中的自閉症兒童感官環境。餐桌與座位的例子是編輯整理的居家調整示例。"
          ],
          "sourceNotes": [
            {
              "id": "chu-taiwan-autism-mealtime",
              "section": "原作者摘要，限家庭晚餐場景的單一個案。",
              "text": "臺灣研究者朱思穎和一個有拒食困擾的自閉症幼兒家庭合作，選擇孩子平常吃晚餐的場景進行觀察與介入。這是單一家庭的經驗，其他孩子在餐桌上卡住的原因仍要個別確認。"
            }
          ]
        },
        {
          "heading": "下一餐，可以先試哪一個變動？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>從孩子剛才坐的位置看看。</strong> 問孩子想離哪種聲音遠一點，或哪個餐具拿起來不舒服。",
              "<strong>請孩子選一個小變動。</strong> 例如原本靠走道又聽得到抽風機，下一餐先換靠牆的座位，由孩子比較兩個位置。",
              "<strong>用孩子的回饋決定下一餐。</strong> 換位沒差時，再問要不要試熟悉的餐具。若孩子有吞嚥困難、疼痛或飲食量明顯改變，可把觀察帶給兒科或相關專業人員。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "sensory-context-notes"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "school-day",
      "category": "school",
      "title": "把孩子的日常帶進親師對話",
      "ages": [
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "用一個具體情境和孩子喜歡的支持方式，開啟與老師的對話。",
      "related": "pp-planning",
      "situations": [
        "school",
        "sensory"
      ],
      "status": "trial",
      "sourceSection": "參考工具中觀察、影響與調整三欄。家校對話為原創例子。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "additionalSources": [
        {
          "id": "taiwan-special-education-act",
          "section": "第 3 條第 10 款及第 31 條，限自閉症類別、IEP 與家長參與。"
        },
        {
          "id": "mullally-child-school-experience",
          "section": "作者彙整的校園負荷、同儕及成人互動當事人經驗。"
        }
      ],
      "sections": [
        {
          "heading": "老師需要知道哪一段孩子的日常？",
          "list": {
            "items": [
              "一個具體時刻比較容易談出可行的支持，例如放學前廣播一響，孩子就摀耳想離開。",
              "孩子對自己何時不舒服、願意找誰，可能有大人沒看到的線索。先和他決定哪些內容想讓老師知道。"
            ]
          },
          "taiwanEvidence": [
            "在臺灣，若孩子已有個別化教育計畫（IEP），《特殊教育法》第 31 條規定學校訂計畫時應邀請孩子本人，以及他的法定代理人或實際照顧者參與。孩子在家說過的不舒服時刻與有效做法，可以帶進會議和老師對照。"
          ],
          "evidence": [
            "Positive Partnerships 的規劃工具提供把需求和支持寫在一起的架構。Mullally 等的英國 8–14 歲孩子自述顯示，願意求助的老師與覺得安心的位置可能因時段而異。"
          ],
          "sourceNotes": [
            {
              "id": "central-taiwan-autistic-school-support",
              "section": "公開摘要結果，限親師問卷細項可能有落差。",
              "text": "張喜凰和林惠芬的中部國小問卷顯示，家長和導師對學校支持的整體看法接近，部分細項有落差。和老師談時，可以先對照同一天或同一件事。"
            }
          ]
        },
        {
          "heading": "怎麼開口，讓家裡和學校接得上？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>選一件最近真的發生的事。</strong> 說清楚時間、地點和孩子當時的表達，再請老師說說在校看到什麼。",
              "<strong>和孩子、老師挑一項願意試的安排。</strong> 例如孩子說廣播最吵，願意坐遠一點，就問老師是否能試一週。換位有困難時，也可問能否換到較安靜的位置等廣播完。",
              "<strong>約好什麼時候回看。</strong> 一週後先問孩子座位是否舒服，再和老師核對哪些時段有幫助，決定保留或調整。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "school-adjustment"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "plan-change",
      "category": "routines",
      "situations": [
        "changes",
        "transitions"
      ],
      "title": "行程改了，先把變動說清楚",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 4,
      "status": "trial",
      "related": "pp-transitions",
      "sourceSection": "第 2 頁。參考與孩子討論、準備視覺提示，以及依有用的做法調整規劃。",
      "summary": "把原來的安排和新的安排說具體，和孩子一起決定需要怎麼準備。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "additionalSources": [
        {
          "id": "vghtpe-autism-visual-support",
          "section": "第二節第 2 項及第四節第 3 項，限環境轉換與圖片或文字提示背景。"
        },
        {
          "id": "maclennan-preschool-sensory-anxiety",
          "section": "方法、相關結果、作者討論及因果限制。"
        }
      ],
      "sections": [
        {
          "heading": "孩子最需要知道的是哪裡變了？",
          "list": {
            "items": [
              "時間、地點、會遇到的人或原本期待的活動，各可能是孩子在意的事。先問他想確認哪一項，也說清楚哪些安排照舊。",
              "可回頭看的提示能讓孩子再確認。若倒數讓孩子更緊張，可以改成標明已確定和還在等消息的紙條。"
            ]
          },
          "taiwanEvidence": [
            "臺北榮總護理部衛教提醒，環境變動有時和感官負荷一起出現。家長可以同時讓孩子看見新安排，以及問清楚新地方有沒有他擔心的聲音或光線。"
          ],
          "evidence": [
            "Positive Partnerships 的轉換資料提供預告和更新提示的做法。MacLennan 等在 3–5 歲自閉症孩子的單次觀察研究中發現，部分感官反應與焦慮、不確定感有關。研究無法判定因果，適合用來思考也有哪些環境因素值得確認。"
          ],
          "sourceNotes": [
            {
              "id": "cych-autism-parent-group",
              "section": "嘉基報導有關常規變動與事前提示的段落。",
              "text": "嘉義基督教醫院的自閉症家長團體，曾用生活情境討論如何在例行活動改變前，先讓孩子知道要改哪一段。這是團體帶領的做法，家長可以從孩子最在意的一個變動開始。"
            }
          ]
        },
        {
          "heading": "臨時有變動時，要怎麼跟孩子說？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>先說明變動和替代安排。</strong> 例如「圖書館今天休館，下午會在家，晚餐和睡前照原來安排」。",
              "<strong>一起改原本就會看的提示。</strong> 只更新日曆上的那一格。孩子最在意哪天能借書，就把還要確認的日期寫在旁邊，約好什麼時候再問。",
              "<strong>留意孩子接下來反覆確認哪一項。</strong> 下次先把那項說清楚，也可以讓孩子挑一個替代活動。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "next"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "wait-for-answer",
      "category": "communication",
      "situations": [
        "communication"
      ],
      "title": "問完一句，留一點回應時間",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 4,
      "status": "trial",
      "related": "rr",
      "sourceSection": "正文談到使用清楚簡單的語句，給對方回應的時間。生活例子由星泊撰寫。",
      "summary": "一次問一件事，停一下，讓孩子有空間用自己熟悉的方式回答。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "sections": [
        {
          "heading": "為什麼問完要留一點時間？",
          "list": {
            "items": [
              "有些孩子需要時間理解一句話、看完選項，再用自己慣用的方式回應。",
              "等待的長短可以看孩子的反應。沉默時可以先確認他看得到選項，也有方式表示「都不要」或「等一下」。"
            ]
          },
          "evidence": [
            "Daniel、Laurie 與 Delafield-Butt 的文章提供簡單語句與等候回應的支持背景。選書是編輯整理的示例。"
          ],
          "sourceNotes": [
            {
              "id": "lian-autistic-social-communication",
              "section": "觀察孩子興趣與溝通方式，限給主動表達的時間。",
              "text": "語言治療師連儀在《台灣聽力語言學會電子學報》提醒，大人越急著達成自己的溝通目標，越容易錯過孩子自己發出訊號的時刻。問完先留時間，也留意手勢或動作。"
            }
          ]
        },
        {
          "heading": "怎麼問一句，再把時間留給孩子？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>一次只問一件具體的事。</strong> 例如把兩本書放在孩子看得到的地方，再問「你想看哪一本？」",
              "<strong>停一下，等他用熟悉的方式回答。</strong> 孩子先伸手又停住時，可以先安靜等他。指物、手勢或原本的溝通工具都可以用。",
              "<strong>確認他的意思，再決定要不要繼續。</strong> 孩子推開兩本書時，可以問「你現在不想選嗎？」若還沒回應，就先把選擇留著，晚一點再問。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "needs"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "lighting",
      "category": "sensory",
      "situations": [
        "sensory"
      ],
      "title": "燈光刺眼時，和孩子一起換個位置",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 4,
      "status": "trial",
      "related": "rr-sensory",
      "sourceSection": "第3節及表3（期刊第8頁）的個別感官環境文字。原文是專業治療情境；此處僅作環境理解，生活例子為星泊原創，不代表療效已驗證。",
      "summary": "留意直射、眩光或閃動，一次試一個孩子願意的調整。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "additionalSources": [
        {
          "id": "vghtpe-autism-visual-support",
          "section": "第二節第 2 項，限對光線刺激的敏感差異。"
        },
        {
          "id": "mullally-child-school-experience",
          "section": "第一個主題中作者對視聽刺激與日常環境的綜整。"
        }
      ],
      "sections": [
        {
          "heading": "孩子覺得刺眼，可能跟哪個位置有關？",
          "list": {
            "items": [
              "瞇眼、遮眼、換位置或說太亮，可以當作線索。直射的光、白紙反光和閃動，各需要看孩子在哪個位置才感覺得到。",
              "光線和聲音可能同時讓孩子吃力。一次只調一個因素，比較容易知道哪個改動有幫助。"
            ]
          },
          "taiwanEvidence": [
            "臺北榮總護理部衛教把部分自閉症者對光線敏感列為一種可能。本文的換位置示例從孩子當下的反應出發，沒有預設每個孩子都偏好較暗的地方。"
          ],
          "evidence": [
            "Daniel 等提供感官環境背景。Mullally 等的英國 8–14 歲自閉症孩子自述補充光線與聲音可能同時造成負荷的經驗。"
          ],
          "sourceNotes": [
            {
              "id": "lian-autistic-social-communication",
              "section": "情緒調節段，限降低光線等環境負荷。",
              "text": "語言治療師連儀提到，當感官負荷使孩子很難和人互動，可以先把刺眼的光或太多視覺刺激減下來。調完可看看孩子是否比較願意留在原處。"
            }
          ]
        },
        {
          "heading": "怎麼試著換個方向或位置？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>坐到孩子的視線高度。</strong> 請孩子指出哪張桌子、哪個方向或哪個時段比較刺眼。",
              "<strong>一起試一個仍看得清楚的位置。</strong> 例如靠窗畫圖時會瞇眼，先轉一點椅子，讓白紙不用正對窗戶，再讓孩子比較前後感受。",
              "<strong>依孩子的選擇保留或再調一次。</strong> 可以用指位置或說話來選。若換位沒幫助，再和孩子去另一區看看，或在不同時段確認光從哪裡來。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "sensory-context-notes"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "morning-exit",
      "category": "routines",
      "situations": [
        "transitions"
      ],
      "title": "早上出門總卡住，先找出哪一步",
      "ages": [
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 4,
      "status": "trial",
      "related": "pp-visual",
      "sourceSection": "第 1–2 頁的圖像提示、實物與文字選擇。早上出門例子由星泊撰寫。",
      "summary": "從每天最常停下來的一步開始，讓孩子找得到要用的東西和下一步。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "sections": [
        {
          "heading": "孩子是在哪一步停住的？",
          "list": {
            "items": [
              "出門卡住可能是找不到東西、不知道下一步，或手上的活動還沒收尾。先看實際停在哪裡，才能挑對提醒。",
              "有些孩子比較容易看懂實物或照片，有些習慣看字。先用孩子已經會用的方式。"
            ]
          },
          "taiwanEvidence": [
            "臺北榮總護理部建議用短步驟及圖片或文字幫助孩子理解活動。出門不一定每一步都要畫成卡，可以先讓卡住的那一步看得見。"
          ],
          "evidence": [
            "Positive Partnerships 的視覺支持資料提供依孩子理解與偏好選擇提示的背景。出門例子是編輯整理的示例。"
          ],
          "sourceNotes": [
            {
              "id": "taipei-autism-classroom-handbook",
              "section": "PDF 第 18 頁，限自閉症學生的作息安排。",
              "text": "臺北市教育局的自閉症教學手冊把固定作息列為校園支持。居家出門也可以用同樣的概念，讓孩子先知道今天走到門口前會做哪些事。"
            }
          ]
        },
        {
          "heading": "明早可以先改哪一件事？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>看一次平常的出門過程。</strong> 問孩子哪一步最麻煩，留意哪樣東西常找不到，或哪一步需要提醒。",
              "<strong>只調整那一個環節。</strong> 例如穿完鞋才發現水壺沒裝，就和孩子把「水壺」畫在玄關紙條最前面。",
              "<strong>看孩子是不是用得上。</strong> 若他沒看到紙條，可以放到水壺旁。若孩子知道要拿什麼卻還在收手上的東西，再一起想怎麼多留一點收尾時間。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "next"
      ],
      "additionalSources": [
        {
          "id": "vghtpe-autism-visual-support",
          "section": "第四節第 2、3 項，限日常活動拆步驟與文字或圖片提示。"
        }
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "ask-for-break",
      "category": "communication",
      "situations": [
        "communication",
        "feelings"
      ],
      "title": "讓「我想暫停」有一種說法",
      "ages": [
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 4,
      "status": "trial",
      "related": "pp-visual",
      "sourceSection": "第 1–2 頁，依孩子的理解和使用方式選提示。休息情境由星泊撰寫。",
      "summary": "一起約定一種能表達休息或拒絕的方法，並練習大人怎麼接住。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "sections": [
        {
          "heading": "孩子在累的時候，還能用什麼方式開口？",
          "list": {
            "items": [
              "孩子能在平常用的短句、手勢、紙條或溝通工具，都可以拿來表示「我想休息」。在手忙腳亂時也拿得到、做得到的方式更容易用。",
              "大人看見訊息就回應，孩子才知道這個方式能幫得上忙。直接離開或原有的手勢也值得先理解。"
            ]
          },
          "evidence": [
            "Positive Partnerships 的視覺支持資料提供提示形式與個別選擇的背景。暫停紙條和桌遊是編輯整理的示例。"
          ],
          "sourceNotes": [
            {
              "id": "wwc-autism-break-card-case",
              "section": "官方案例，限青少年以卡片提出休息。",
              "text": "美國教育部的研究評讀摘要記錄，一位口語有限的自閉症青少年在學校用卡片向老師表示想休息。這是一種讓需要被看見的方式，卡片或手勢仍可依孩子比較容易使用的方式選。"
            }
          ]
        },
        {
          "heading": "怎麼約一個真的用得上的暫停方式？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>一起選一個提示。</strong> 問孩子想用手勢、說一句話、拿圖卡，還是用原本就在用的工具。",
              "<strong>在平靜時試一次。</strong> 例如玩桌遊時孩子放下「休息」紙條，你可以暫停計分，問想去旁邊坐一下還是就此結束。",
              "<strong>和常在場的大人約好怎麼回應。</strong> 先說「我看到了，我們先停一下」。若圖卡有時拿不到，再和孩子選一個容易做的手勢。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "pause"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "clothing-texture",
      "category": "sensory",
      "situations": [
        "sensory",
        "transitions"
      ],
      "title": "衣服穿起來刺刺的，怎麼一起挑",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 4,
      "status": "trial",
      "related": "rr-sensory",
      "sourceSection": "第3節及表3（期刊第8頁）的個別感官環境文字。原文是專業治療情境；此處僅作環境理解，生活例子為星泊原創，不代表療效已驗證。",
      "summary": "從孩子指出的不舒服處開始，比較衣領、縫線、材質或鬆緊。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "sections": [
        {
          "heading": "同一件衣服，哪個地方讓孩子不舒服？",
          "list": {
            "items": [
              "拉衣領、扯袖口或在活動後想換衣服，可能和接縫、標籤、布料、鬆緊或熱有關。可以拿孩子喜歡的衣服作對照。",
              "挑衣服時，孩子需要能說出或指出自己的感受，也能選擇先穿習慣的那一件。"
            ]
          },
          "taiwanEvidence": [
            "Wuang 等研究 117 名 5–13 歲臺灣自閉症學童，感官和知覺動作表現與生活參與有關。研究未比較衣料，實際挑衣仍可請孩子指出哪個部位和哪種觸感最難受。"
          ],
          "evidence": [
            "Daniel 等的文章提供專業情境中理解自閉症兒童感官環境的背景。衣物比較是編輯整理的居家示例。"
          ],
          "sourceNotes": [
            {
              "id": "ibalance-autistic-everyday-participation",
              "section": "職能參與段，限衣物或襪子特定部位。",
              "text": "品恆復健科診所的自閉症衛教提到，不適可能集中在衣服標籤或襪子接縫。孩子說整件衣服難穿時，可以和他先確認是某一點碰到皮膚，還是整塊布料都不舒服。"
            }
          ]
        },
        {
          "heading": "要穿制服或外出時，怎麼一起挑？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>請孩子指出不舒服的位置。</strong> 可以比一下領口、畫圈，或拿一件穿得舒服的衣服來比較。",
              "<strong>每次試一個改動。</strong> 例如制服的縫線碰到脖子，先試孩子願意穿的內搭，比較能不能遮住接縫、會不會太熱。",
              "<strong>遇到服裝規定就提早問。</strong> 把孩子能接受的選項帶去問老師，例如可否加內搭或穿合適的替代款。若孩子不想試，先看看已習慣的衣物。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "sensory-context-notes"
      ],
      "additionalSources": [
        {
          "id": "wuang-taiwan-school-sensory",
          "section": "結果與討論，限學齡感官差異及日常活動參與的關聯。"
        }
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "early-pressure",
      "category": "feelings",
      "situations": [
        "feelings",
        "sensory"
      ],
      "title": "在壓力變大前，看見孩子的訊號",
      "ages": [
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 4,
      "status": "trial",
      "related": "pp-workbook",
      "sourceSection": "第 48、122、124 頁，參考陪伴、辨認感受和調整環境的文字。",
      "summary": "把注意到的變化、當時環境和孩子想要的支持放在一起看。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "additionalSources": [
        {
          "id": "mullally-child-school-experience",
          "section": "第二個主題中作者對掩飾特質與累積壓力的綜整。"
        }
      ],
      "sections": [
        {
          "heading": "孩子的壓力變大前，可能有哪些變化？",
          "list": {
            "items": [
              "孩子想換位置、拉住你的手或慢下來，可能是在告訴你哪裡開始不舒服。同一個動作的意思也會隨情境改變。",
              "簡記孩子說的話、出現的變化和當時環境，方便在下次比對哪個訊號出現得早、怎麼回應比較有幫助。"
            ]
          },
          "evidence": [
            "Positive Partnerships 的工作手冊提供辨認壓力與支持需要的背景。Mullally 等整理英國 8–14 歲自閉症孩子的自述，有人說自己在校努力藏起不舒服，回家才需要時間休息。"
          ],
          "sourceNotes": [
            {
              "id": "nas-managing-autistic-overload",
              "section": "Anticipating a meltdown，限過載前可留意的個別反應。",
              "text": "英國 National Autistic Society 提到，有些人在過載前會反覆尋求確認，也有人突然安靜下來。可以先和孩子確認什麼變化常出現在他吃力的時候，留下他平時也會做的動作作為對照。"
            },
            {
              "id": "taipei-autism-classroom-handbook",
              "section": "PDF 第 30–33 頁國中案例，限同一件事不同時點的反應。",
              "text": "臺北市教育局手冊的國中案例裡，學生先依提醒收起物品，聽到可能被沒收時才明顯激動。回看時可以把前後各記一幕，才看得見反應在哪一步改變。"
            }
          ]
        },
        {
          "heading": "發現孩子開始吃力時，怎麼一起回應？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>等孩子願意時，先問他自己注意到了什麼。</strong> 可以請他指出哪裡太吵、哪段路想換，或哪個時候會開始難受。",
              "<strong>把一次經過寫成看得見的事。</strong> 例如進商場音樂區後，孩子放慢腳步又拉住你的手。回到戶外後，孩子說拉手是想換路線。把觀察和孩子的解釋分開記。",
              "<strong>一起約一個容易回應的提示。</strong> 下次見到相同訊號，可以先停下提問或一起換路線，再聽孩子怎麼說。若他說這次只是想多看一下，就依當下的意思回應。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "pause"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "after-hard-moment",
      "category": "feelings",
      "situations": [
        "feelings",
        "communication"
      ],
      "title": "難熬的事過後，怎麼一起回顧",
      "ages": [
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 4,
      "status": "trial",
      "related": "pp-workbook",
      "sourceSection": "第 122、124 頁，參考環境調整與依孩子、情境變動調整陪伴方式。",
      "summary": "等孩子願意再談，只問一個問題，和孩子一起決定下一次可以改哪裡。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "sections": [
        {
          "heading": "現在是回顧的時候嗎？",
          "list": {
            "items": [
              "事情過去了，孩子也可能還需要時間恢復。孩子願意時才開口，說、寫、畫或指都可以。",
              "回顧可以幫你們找出下次能調整的一件事。先從孩子在意的經過談，讓他有機會補上大人沒看見的事。"
            ]
          },
          "evidence": [
            "Positive Partnerships 的工作手冊提供理解自閉症孩子壓力及個別支持的背景。聚會回顧是編輯整理的示例。"
          ],
          "sourceNotes": [
            {
              "id": "taipei-autism-classroom-handbook",
              "section": "PDF 第 25–26 頁，限待情緒平穩後的師生對話。",
              "text": "臺北市教育局的手冊記錄了一個國中校園案例，兩位學生的情緒穩定後，老師才協助他們回看衝突。這個例子支持先選一個孩子能回應的時機，對話內容仍要依孩子的意願安排。"
            }
          ]
        },
        {
          "heading": "怎麼只問一件事，就能談出下一步？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>問孩子現在想不想聊。</strong> 可以說「等你想談，我想知道剛才哪裡最不好受」。孩子想晚一點時，你可以先簡記你看到的事，回頭讓他補充。",
              "<strong>說一句你看見的，再聽孩子怎麼說。</strong> 例如「大家一起說話時，你走到門口」。若孩子用圖指出是有人突然碰到他，就把他的說法留下來。",
              "<strong>一起選下次可以改的一項安排。</strong> 例如下次讓孩子自己選要不要握手。遇到類似情境後，再問他想繼續這樣做還是想換。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "understanding-unmet-needs"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "school-transition",
      "category": "school",
      "situations": [
        "school",
        "changes"
      ],
      "title": "換老師或新教室前，先確認孩子在意什麼",
      "ages": [
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 4,
      "status": "trial",
      "related": "pp-transitions",
      "sourceSection": "第 2 頁，參考與孩子討論有用的做法、熟悉新地方及確認可求助的人。",
      "summary": "把新地點、流程和求助對象做成孩子可回頭看的資料。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "additionalSources": [
        {
          "id": "lu-taiwan-seventh-grade-peer-support",
          "section": "方法與結果，限臺灣國一樣本與同儕協助背景。"
        },
        {
          "id": "mullally-child-school-experience",
          "section": "作者彙整的安全感、可尋求支持的成人與環境。"
        }
      ],
      "sections": [
        {
          "heading": "換班前，孩子最想先確認什麼？",
          "list": {
            "items": [
              "孩子可能在意去哪裡集合、會不會碰到熟悉的人、教室的聲音或放學路線。問孩子先想知道哪一件事。",
              "知道遇到困難可以找哪位大人、在哪裡找，也能讓準備更貼近孩子需要。"
            ]
          },
          "taiwanEvidence": [
            "Lu 等分析臺灣國一自閉症學生的資料，遇到困難時有同儕協助與比較少被排斥有關。若孩子正準備升國一，可以提前問他在新教室遇到困難時，會希望先找誰幫忙。"
          ],
          "evidence": [
            "Positive Partnerships 的轉換資料建議依孩子的需求準備可理解的資訊。Mullally 等的英國 8–14 歲孩子自述中，有人把熟悉、反應可預期的大人視為安全來源。"
          ],
          "sourceNotes": [
            {
              "id": "cg-taiwan-autism-school-transition-case",
              "section": "摘要第（二）、（五）項，限提早熟悉新環境。",
              "text": "曾馨瑩和梁碧明追蹤的一名自閉症孩子，在升小一前由家長陪著認識新校園。家裡準備換環境時，也可以先問孩子第一天最想知道哪條路怎麼走。"
            }
          ]
        },
        {
          "heading": "換老師或教室之前，可以先準備哪幾件事？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>從孩子最在意的問題開始。</strong> 例如他擔心上廁所後找不到新班級，就先處理這段路。",
              "<strong>跟學校約一個熟悉的機會。</strong> 請老師陪走一次路線、一起認地標，或使用學校同意提供的照片。若暫不能參觀，先告訴孩子已確定的安排和何時能再問。",
              "<strong>說清楚到時怎麼求助。</strong> 一起確認可以找誰、在哪裡找、能用哪個手勢或句子。試走後再問孩子哪個問題還沒回答。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "school-adjustment"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "school-adjustment",
      "category": "school",
      "situations": [
        "school",
        "sensory"
      ],
      "title": "跟老師約一個小調整和回看日期",
      "ages": [
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 4,
      "status": "trial",
      "related": "pp-planning",
      "sourceSection": "參考工具的觀察、對孩子的影響與可以測試的調整三欄。",
      "summary": "用一個情境、一個可行調整和一次回顧，讓家校知道怎麼合作。",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依來源指定主文核對；案例、觀察問題與年齡分組為編輯整理，不是原文驗證過的療程。",
      "additionalSources": [
        {
          "id": "taiwan-special-education-act",
          "section": "第 3 條第 10 款、第 10、31 條，限合理調整及 IEP 參與。"
        },
        {
          "id": "ophir-school-disclosure",
          "section": "回顧中學生對同儕、師生關係及調整的不同經驗。"
        }
      ],
      "sections": [
        {
          "heading": "什麼樣的調整，孩子真的用得上？",
          "list": {
            "items": [
              "一個可試的調整，需要知道在哪個情境使用、由誰協助、孩子不想試時怎麼表達。",
              "約個時間回看，可以把孩子的感受和老師看到的參與情況放在一起，再決定是否延續。"
            ]
          },
          "taiwanEvidence": [
            "在臺灣，《特殊教育法》第 10 條納入合理調整。孩子已有個別化教育計畫（IEP）時，可以在家長參與的會議中請團隊談清楚由誰協助、何時檢視。"
          ],
          "evidence": [
            "Positive Partnerships 的規劃工具可協助記下個別需要、支持與回顧安排。Ophir 等的質性回顧發現，自閉症學生在意老師是否理解自己，也會考量同儕怎麼看調整。各地學校情境有差異。"
          ],
          "sourceNotes": [
            {
              "id": "central-taiwan-autistic-school-support",
              "section": "公開摘要結果，限導師支持和學校適應之關聯。",
              "text": "張喜凰和林惠芬的中部國小調查發現，導師支持度與學生的學校適應有關。和老師回看支持安排時，可以一起看孩子在相同活動中的感受與參與情形。"
            }
          ]
        },
        {
          "heading": "和老師談的時候，要約好哪些事？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>拿同一個場景來對照。</strong> 分享時間、地點和孩子的說法，再請老師補上他看到的情況。",
              "<strong>把調整談到做得出來。</strong> 例如孩子說餐廳入口太擠，和老師討論讓孩子和一位同學晚兩分鐘進去，並約好誰提醒、孩子可以怎麼表示想換回來。",
              "<strong>定一個回看的時間。</strong> 例如週五先問孩子覺得如何，再和老師核對同一時段是否比較容易參與。若原安排不好執行，找一個學校可做、孩子也願意試的選項。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "school-day"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依已核准自有文字整理；做法、問題及例子為編輯提供的討論起點，沒有宣稱其效果已經驗證。",
      "id": "comfortable-friendships",
      "category": "communication",
      "title": "找到孩子覺得舒服的友誼",
      "ages": [
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "從孩子喜歡的活動和互動方式出發，也把線上聊天、一起玩和想獨處的時刻放進討論。",
      "related": "pp-friendships",
      "situations": [
        "communication"
      ],
      "keywords": [
        "友誼",
        "朋友",
        "3C",
        "線上互動",
        "傳訊息",
        "共同興趣",
        "社交疲勞"
      ],
      "sourceSection": "第1–2頁自有主文，聚焦舒服的互動、共同活動、尊重獨處偏好與健康關係。下列生活安排及問題為編輯整理。",
      "additionalSources": [
        {
          "id": "lu-taiwan-seventh-grade-peer-support",
          "section": "結果及限制，限友誼品質、同儕協助和遭排斥的關聯。"
        },
        {
          "id": "fox-primary-friendships",
          "section": "小學情境下，作者綜整的共同興趣、遊戲與對友誼的理解。"
        }
      ],
      "sections": [
        {
          "heading": "什麼樣的相處，讓孩子覺得自在？",
          "list": {
            "items": [
              "聊天、傳訊息、一起做事和獨處，都可能是孩子自己的選擇。先了解他想和誰、做什麼、多久相處一次。",
              "共同興趣可以是開始互動的機會。孩子能表達想繼續、想停或不同意，也是觀察相處是否舒服的線索。"
            ]
          },
          "taiwanEvidence": [
            "Lu 等分析臺灣 184 名自閉症國一學生的資料，友誼品質較好、遇到困難有同儕幫忙，與較少被同學排斥有關。研究使用 2011 年資料，呈現的是關聯。問孩子「遇到事時有誰肯幫你？」能多了解這段關係的品質。"
          ],
          "evidence": [
            "Positive Partnerships 提醒，部分自閉症孩子偏好文字或共同活動，也有人喜歡獨處。Fox 等的英國小學質性回顧指出，共同興趣和一起玩對部分孩子是交友的契機。",
            "兩份資料有助於理解偏好。家長資料未比較方法效果，研究回顧限英國小學。文章中的線上互動例子用於理解孩子的相處偏好。 線上互動仍要依孩子與互動情境判斷。"
          ],
          "sourceNotes": [
            {
              "id": "chang-taiwan-autistic-friendship",
              "section": "成大收錄的作者摘要，限青少年的友情品質與孤單感。",
              "text": "Chang 等人的臺灣問卷研究中，10–19 歲參與者回報的孤單感與友誼品質有關。問孩子覺得相處自在嗎、想要多一點陪伴嗎，比只問朋友有幾個更能了解他在意的事。"
            }
          ]
        },
        {
          "heading": "孩子有興趣時，怎麼陪他試一種相處方式？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>先問孩子喜歡的方式。</strong> 可以問「你想傳訊息、一起做事，還是先各玩各的？」也可以讓孩子用圖或實際選擇回答。",
              "<strong>從一件雙方都想做的事開始。</strong> 例如孩子喜歡和同學交換自己畫的公車路線，先問他想繼續交換圖，還是約一次一起畫。事前確認雙方都願意、也能隨時停。",
              "<strong>之後問孩子感覺怎麼樣。</strong> 例如「你想停時能停嗎？下次還想一起做嗎？」若有被貶低或不被尊重的情況，和孩子討論希望誰提供什麼協助。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "body-boundaries"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依已核准自有文字整理；做法、問題及例子為編輯提供的討論起點，沒有宣稱其效果已經驗證。",
      "id": "sensory-context-notes",
      "category": "sensory",
      "title": "把感官不舒服的情境記清楚",
      "ages": [
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "把「孩子不喜歡這裡」拆成看得到的情境、孩子的表達，以及試過什麼調整，方便下次回看。",
      "related": "pp-sensory-tool",
      "situations": [
        "sensory",
        "school"
      ],
      "keywords": [
        "感官記錄",
        "聲音",
        "觸感",
        "光線",
        "觀察",
        "筆記"
      ],
      "sourceSection": "Sensory Tool單頁的觀察／可能策略欄位。觀察與猜測的寫法、時間地點及居家例子由編輯另行整理；不重製原表圖樣。",
      "additionalSources": [
        {
          "id": "wuang-taiwan-school-sensory",
          "section": "結果與討論，限 5–13 歲學童感官知覺與活動參與的關聯。"
        },
        {
          "id": "mullally-child-school-experience",
          "section": "第一個主題中作者彙整的感官負荷與不同場域。"
        }
      ],
      "sections": [
        {
          "heading": "一筆感官紀錄，能幫你弄清楚什麼？",
          "list": {
            "items": [
              "同一個地方有時能待、有時不舒服，當天的聲音、光線、人流、碰觸或疲累可能不同。",
              "寫下孩子怎麼說、你試了什麼及反應，方便下次和孩子或老師比對哪個改動值得保留。"
            ]
          },
          "taiwanEvidence": [
            "Wuang 等的臺灣學童研究觀察到，感官及知覺動作表現和活動參與有關。家庭筆記可多留一句孩子後來能不能繼續參與，讓討論有具體線索。研究未測試本文的記錄方法。"
          ],
          "evidence": [
            "Positive Partnerships 的 Sensory Tool 將觀察和可能策略分欄，供學齡自閉症孩子與支持者討論。Mullally 等的英國 8–14 歲孩子自述補足多種刺激同時出現時的負荷經驗。",
            "這裡的筆記是編輯整理的討論工具。原工具沒有驗證特定調整的效果，感官評估需依孩子情況進行。"
          ],
          "sourceNotes": [
            {
              "id": "femh-autism-behavior-context",
              "section": "行為原因探索，限把不適線索與發生場合放在一起看。",
              "text": "亞東紀念醫院臨床心理師黃思賓提醒，孩子的重複行為有時可能和降低不適有關。記錄時可以留一句當時的環境，才容易和孩子或治療師對照是不是同一種感官刺激。"
            }
          ]
        },
        {
          "heading": "要和孩子或老師談時，可以怎麼記？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>挑一次自然發生的經驗。</strong> 簡記日期、地點、活動和當時的感官環境。孩子暫時不想談時，可以先寫自己的觀察，留空等孩子補上。",
              "<strong>把看到的和推測分開。</strong> 例如寫「公廁幾台烘手機同時響，孩子摀耳往門口走，說太大聲」。至於是哪一台或哪種聲音，留作下次要確認的問題。",
              "<strong>記下改動和孩子的反應。</strong> 例如離開後，孩子願意改用紙巾。後續在自然遇到的情境再看是否有相同反應，需要釐清時可以帶筆記與熟悉孩子的專業人員討論。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "sound"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "整理 AIFS 的需求辨識與研究限制，補充臺灣國家人權委員會對溝通困難的說明。事後記錄提綱及例子由編輯撰寫。",
      "id": "understanding-unmet-needs",
      "category": "feelings",
      "title": "孩子推人或丟東西後，怎麼整理情境",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲"
      ],
      "time": 5,
      "summary": "等大家都安全後，從事發經過和孩子的表達找線索，和孩子、老師或專業人員討論需要什麼支持。",
      "related": "aifs-needs",
      "situations": [
        "feelings",
        "communication",
        "school"
      ],
      "keywords": [
        "推人",
        "丟東西",
        "未滿足需要",
        "行為",
        "事後記錄",
        "情境"
      ],
      "sourceSection": "Overview、需求辨識及Nature of the evidence。只整理理解需要的背景；記錄提綱與例子由編輯撰寫，不涵蓋危機處理或自傷評估。",
      "sections": [
        {
          "heading": "孩子當時可能遇到了什麼？",
          "list": {
            "items": [
              "<strong>同樣的動作，可能有不同的原因。</strong> 排隊時推人，可能跟隊伍太擠、剛被碰到或周圍太吵有關。光看推人這個動作，很難知道孩子當時遇到了什麼。",
              "<strong>孩子的表達是重要線索。</strong> 孩子可以用話、手勢或指圖告訴你當時的感受。如果他已經讓你知道哪裡不舒服，就可以先回應。",
              "<strong>簡短的紀錄能幫你比對情境。</strong> 類似的事再發生時，可以回頭看哪些情況反覆出現，和孩子、老師或專業人員一起討論先確認什麼、下次可以調整什麼。"
            ]
          },
          "taiwanEvidence": [
            "國家人權委員會的報告提到，有溝通困難的自閉症者，感受或需要有時不容易被照顧者理解。"
          ],
          "evidence": [
            "AIFS 建議從孩子的需要與生活情境理解可能傷及他人的行為。回顧納入的研究多依家長或教師回報，本文的步驟為編輯整理，供事後討論。"
          ],
          "sourceNotes": [
            {
              "id": "femh-autism-behavior-context",
              "section": "行為原因探索，限從不適、焦慮與挫折找線索。",
              "text": "亞東紀念醫院臨床心理師黃思賓談到，自閉症孩子的重複行為可能和不適、焦慮或挫折有關。這篇衛教讓家長多一個回看的方向，仍要用孩子當時的情境查證。"
            }
          ]
        },
        {
          "heading": "事情過後，可以怎麼做？",
          "paragraphs": [
            "等大家都安全後，再回顧經過。若仍有立即受傷風險，先尋求現場協助或緊急醫療協助。"
          ],
          "list": {
            "ordered": true,
            "items": [
              "<strong>用兩三句記下經過。</strong> 寫當時在做什麼、前一刻發生什麼、孩子做了什麼，以及後來怎樣。例如「老師說，排隊時後方同學碰到孩子的肩膀。孩子轉身推了同學，老師請兩人分開站。」",
              "<strong>聽孩子怎麼說。</strong> 等孩子願意時，問「那時發生了什麼？」讓他用習慣的方式回答。把親眼看到的、別人轉述的、孩子說的和自己的猜測分開記。不確定的地方可以先留白。",
              "<strong>利用線索試一個調整。</strong> 例如，孩子用圖指出排隊時太擠，就可以和老師討論多留一點空間，再看看孩子下次排隊時有沒有比較自在。",
              "<strong>反覆發生或有人受傷時，找熟悉孩子的專業人員一起討論。</strong> 手上已有的經過、孩子的說法、試過的調整或結果，都可以當作討論的起點。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "after-hard-moment"
      ],
      "updatedAt": "2026-11-26",
      "additionalSources": [
        {
          "id": "taiwan-nhrc-behavior-support",
          "section": "專案報告第 5–6 頁「嚴重情緒行為心智障礙者」中，自閉症者表達感受或需求時可能遇到的溝通困難。該報告聚焦支持服務，未評估本文的事後記錄方法。"
        }
      ]
    },
    {
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "年齡依本指南的生活情境整理；原始資料沒有訂定數字適齡，請一併看孩子的理解方式與支持需要。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依已核准自有文字整理；做法、問題及例子為編輯提供的討論起點，沒有宣稱其效果已經驗證。",
      "id": "reading-comprehension-context",
      "category": "school",
      "title": "讀得出字卻不懂意思，先和老師談什麼",
      "ages": [
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "認識一份ASD閱讀理解資料的研究限制，再帶著孩子實際卡住的段落，和老師討論下一步。",
      "related": "qld-reading",
      "situations": [
        "school",
        "communication"
      ],
      "keywords": [
        "閱讀理解",
        "識字",
        "課文",
        "學習",
        "讀寫",
        "親師"
      ],
      "sourceSection": "單頁開頭的13項研究回顧、單一個案研究設計及驗證限制。未把單張中的策略圖改寫為訓練清單；親師問題為編輯整理。",
      "sections": [
        {
          "heading": "讀得順和聽懂故事，需要分別看什麼？",
          "list": {
            "items": [
              "孩子能讀出字句，仍可能卡在詞意、前後關係、理解問題，或用自己的話說出答案。",
              "帶一小段孩子實際讀過的文章和他的原話，比只說「閱讀不好」更容易和老師釐清下一步。"
            ]
          },
          "evidence": [
            "昆士蘭教育部單張整理 13 項 ASD 閱讀理解研究。資料未標發布日，引用 2021 年的回顧，作者指出仍需更多重複與較大樣本的研究，適合用作親師討論背景。"
          ],
          "sourceNotes": [
            {
              "id": "lin-taiwan-autistic-early-reading",
              "section": "臺灣研究第 203 頁，限學前樣本的識字與聽覺理解差異。",
              "text": "林初穗等人的臺灣研究發現，4–6 歲自閉症兒童在識字和聽懂句子上呈現不同的表現。這是學前年齡的研究，帶去跟學齡老師談時，可以把孩子讀字與說出意思的例子分開。"
            }
          ]
        },
        {
          "heading": "帶哪一段去問老師，接著怎麼看？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>挑一個讀得到、卻答不上來的片段。</strong> 例如孩子能逐句讀完故事，遇到「他為什麼回家？」就停住。留下一段原文、問題和孩子的回答。",
              "<strong>請老師一起釐清卡在哪裡。</strong> 可以問「他是沒懂故事前後關係，還是不知道怎麼回答這個問題？」也可以請老師用課堂作業示範。",
              "<strong>約定要看哪一項變化。</strong> 試過一個調整後，回看相近篇幅與題型、用了哪些提示，以及孩子能不能用自己的方式說出意思。需要進一步評估時，請老師協助安排支持。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "school-adjustment"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "talk-about-autism",
      "category": "caregiver",
      "title": "怎麼和孩子談自閉症診斷",
      "ages": [
        "13–17 歲"
      ],
      "time": 5,
      "summary": "從孩子已經想了解的生活經驗開口，約好哪些問題可以再談，以及哪些資訊要和別人分享。",
      "related": "vanaken-diagnosis",
      "situations": [
        "communication",
        "caregiver"
      ],
      "keywords": [
        "診斷",
        "告知",
        "確診",
        "自我理解",
        "認同",
        "揭露"
      ],
      "sourceSection": "訪談研究的結果與限制，聚焦較早知道診斷、自我理解與支持。",
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "這篇以青少年談自身診斷的情境編入 13–17 歲。訪談者當時 16–18 歲，回顧自己過去的經驗。目錄年齡是閱讀情境，告知時機仍要看孩子的問題與溝通方式。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "研究或教材觀點依核准段落整理。行動建議、提問與例子是本指南的生活情境示範。",
      "additionalSources": [
        {
          "id": "sato-diagnosis",
          "section": "以 2015 年問卷及研究限制呈現醫師的告知考量。"
        },
        {
          "id": "crane-autistic-parents-disclosure",
          "section": "方法與表 1、作者綜整的家長觀點和研究限制。"
        },
        {
          "id": "liu-taiwan-youth-diagnosis",
          "section": "臺灣青少年訪談中的自我理解、校園求助及揭露取捨。"
        }
      ],
      "sections": [
        {
          "heading": "孩子想從診斷知道什麼？",
          "list": {
            "items": [
              "診斷可能幫孩子理解自己的感受或找到支持。孩子也可能先在意誰會知道，或想等準備好再聊。",
              "孩子用說、寫、指圖或原本的溝通方式，都可以參與。和孩子談診斷、和別人分享資訊，可以各自找合適的時機。"
            ]
          },
          "taiwanEvidence": [
            "Liu 等訪談八位臺灣 14–18 歲青少年，有人用診斷理解自己，也會依對象決定怎麼分享。結果提供對話線索，個別時機仍需看孩子。"
          ],
          "evidence": [
            "Vanaken 等訪談 18 位比利時自閉症青少年，多數回顧時偏好較早知道診斷，也有人對時機感受不同或顧慮別人知道後的反應。Sato 等的 2015 年日本醫師問卷呈現醫師對家庭理解與解釋時間的考量。 兩份研究受招募範圍與地區限制。",
            "Crane 等的英國家長問卷記錄部分自閉症家長用自己的經驗開啟對話，採機會抽樣且包含自我認同者。"
          ],
          "sourceNotes": [
            {
              "id": "nas-autistic-disclosure-note",
              "section": "When and how should I talk to my child about their diagnosis，限依孩子理解分次談。",
              "text": "英國 National Autistic Society 建議按孩子當下的理解與問題，一次談少量資訊。孩子還想知道什麼，可以留到下一次，再慢慢接著聊。"
            }
          ]
        },
        {
          "heading": "怎麼從孩子自己的經驗開口？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>先問孩子已經知道什麼。</strong> 可以從他提過的教室太吵、臨時換教室很累開始，問他想先談哪一件。",
              "<strong>用一個例子說明診斷，再等他提問。</strong> 可以說「評估結果用了『自閉症』這個詞。我們可以看看哪些地方和你的經驗很像」。如果孩子只想知道能不能在午休借安靜的座位，就先談那項支持。",
              "<strong>一起決定接下來要談什麼、和誰談。</strong> 問孩子希望誰知道、願意分享哪一句話。孩子想先停，可以約好日後用紙條提問，或請診斷團隊陪你們談。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "sharing-autism-information-at-school"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "rest",
      "category": "caregiver",
      "title": "想請親友分擔照顧，怎麼把需求說具體",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "把「能不能幫我一下」換成一件親友接得住、孩子也安心的工作。",
      "related": "li-family",
      "situations": [
        "caregiver"
      ],
      "keywords": [
        "親友",
        "祖父母",
        "分工",
        "照顧者",
        "喘息",
        "交接"
      ],
      "sourceSection": "使用回顧中可辨識為自閉症兒少情境的支援與家庭互動主題。",
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "這篇用目錄的 2–17 歲涵蓋幼兒到青少年的家庭分工情境。引用限於可辨識的自閉症兒少經驗，分工依孩子和照顧者的實際需要安排。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "研究或教材觀點依核准段落整理。行動建議、提問與例子是本指南的生活情境示範。",
      "additionalSources": [
        {
          "id": "vghtpe-autism-home-routines",
          "section": "限家長衛教中協調生活作息及分擔照顧的句子。"
        },
        {
          "id": "mukherjee-autistic-teen-family-support",
          "section": "英國自閉症青少年家長對持續及重新尋求支持的訪談。"
        }
      ],
      "sections": [
        {
          "heading": "換人照顧時，孩子和親友各需要知道什麼？",
          "list": {
            "items": [
              "孩子可能先想知道誰會來、原本的安排會不會變、想休息時可以怎麼說。",
              "分擔可以從接送、陪伴，也可以從買用品或備餐開始。先談一件親友做得來、能給你一些喘息的工作。"
            ]
          },
          "taiwanEvidence": [
            "臺北榮總兒童發展評估中心提醒，照顧者可以一起協調作息和分工。親友時間有限時，可先談一個固定且容易交接的時段。"
          ],
          "evidence": [
            "Li 等的回顧整理接送、照顧分擔及被誤解時的家庭經驗，資料多由家長或祖父母提供。Mukherjee 等的英國自閉症青少年家長訪談補充孩子長大後，照顧需求、服務和家長時間可能不同步，服務條件各地有差異。"
          ],
          "sourceNotes": [
            {
              "id": "chin-taiwan-autism-parent-coping",
              "section": "支援子題，限父母向他人和專業求助的質性經驗。",
              "text": "Chin 等人訪談 14 位臺灣自閉症孩子的家長，尋求他人支援是其中一種因應方式。這能補充家裡怎麼分工的討論，實際由誰協助仍要配合孩子的需要和親友能做的事。"
            }
          ]
        },
        {
          "heading": "怎麼開口，讓親友知道怎麼接手？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>說清楚一件事的起訖。</strong> 例如問「週三可以接他回家嗎？我會準備晚餐」。",
              "<strong>把孩子在意的安排一起交代。</strong> 例如孩子想留在家和阿姨畫圖，就確認阿姨知道他怎麼表示想休息、遇到問題要找誰，以及你會在午餐前接手。",
              "<strong>事後問孩子和親友各想改什麼。</strong> 看看你是否有休息到、孩子是否自在、親友是否做得來。如果直接交接仍很吃力，可以先請親友代買用品或準備餐點。 親友若開始批評孩子，先讓孩子有退出的選擇，再和親友說明可接受的做法。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "choose-parent-support"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "choose-parent-support",
      "category": "caregiver",
      "title": "找家長支持團體前，可以先問什麼",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "先想清楚自己需要被聽見、交換經驗，還是需要專業協助，再問團體怎麼運作。",
      "related": "gao-peer-support",
      "situations": [
        "caregiver",
        "local-support"
      ],
      "keywords": [
        "家長團體",
        "支持團體",
        "同儕",
        "照顧者",
        "心理支持",
        "社會支持"
      ],
      "sourceSection": "質性回顧的作者綜整與限制，聚焦家長同儕支持。",
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "這篇以 2–17 歲孩子的照顧者為目錄受眾。支持團體的參與條件由各團體訂定，研究也各有自己的納入年齡。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "研究或教材觀點依核准段落整理。行動建議、提問與例子是本指南的生活情境示範。",
      "additionalSources": [
        {
          "id": "new-taipei-autism-family-services",
          "section": "新北市 115 年度服務計畫第陸、柒節，限自閉症家庭服務對象及支持方式。"
        },
        {
          "id": "reach-asd-summary",
          "section": "僅用機構所收錄的作者摘要，介紹特定方案的研究設計、主要結果和限制。"
        },
        {
          "id": "mukherjee-autistic-teen-family-support",
          "section": "作者整理的支持管道、不同時期的需求及經驗。"
        }
      ],
      "sections": [
        {
          "heading": "你目前最想從團體得到什麼？",
          "list": {
            "items": [
              "想有人聽你說、交換學校或照顧經驗，和想找專業協助，是不同的需要。先挑一件眼前最想問的事。",
              "同儕交流與專業帶領的方案安排不同。能不能先聽、如何保護隱私、主題是否符合孩子的階段，都會影響你參加得舒不舒服。"
            ]
          },
          "taiwanEvidence": [
            "臺灣的在地例子是新北市 115 年度身心障礙家庭照顧者支持服務，計畫包含定期支持團體，服務實際住在新北、領有身心障礙證明者的家庭，也把自閉症與心智障礙列為優先服務對象。可以向承辦單位詢問場次與參加方式。"
          ],
          "evidence": [
            "Gao 與 Drani 的回顧記錄家長從同儕得到理解與經驗交流，也有人接到負面回饋。Mukherjee 等的英國質性訪談補充青少年家庭想找同階段支持的經驗，未比較團體成效。",
            "Leadbitter 等的試驗摘要顯示，一項為近期確診孩子的照顧者設計的英國專業線上方案，在 52 週時的心理健康量表結果優於對照組。分析有資料缺漏，結果限於該方案與招募情境。"
          ],
          "sourceNotes": [
            {
              "id": "cych-autism-parent-group",
              "section": "嘉基活動報導，限臨床心理師帶領及家長交流。",
              "text": "嘉義基督教醫院曾辦理由臨床心理師帶領的自閉症家長團體，同時留時間讓家長互相交流。聯絡團體時，可以先問一場大約有多少時間講課、多少時間討論家長自己的問題。"
            }
          ]
        },
        {
          "heading": "聯絡團體前，可以怎麼問和怎麼試？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>先寫下一個希望有人理解的問題。</strong> 例如「孩子最近要換班，我想聽其他家長怎麼準備」。",
              "<strong>問清楚帶領方式和分享規則。</strong> 可以問「我能先旁聽嗎？會錄影嗎？如果有人給了我不適合的建議，主持人會怎麼處理？」",
              "<strong>依能負擔的方式試一次，再決定。</strong> 想想你得到什麼、是否受到尊重。如果眼前需要的是自己的心理支持，或問題涉及孩子的健康或教育決定，也可以直接詢問相應的專業人員。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "rest"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "toilet-support-visit",
      "category": "routines",
      "title": "孩子如廁卡關，怎麼向專業人員描述",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲"
      ],
      "time": 5,
      "summary": "用一兩次具體情境說清楚孩子卡在哪裡，帶著問題和兒科或熟悉孩子的專業人員討論。",
      "related": "clarke-daily-living",
      "situations": [
        "sensory",
        "communication"
      ],
      "keywords": [
        "如廁",
        "廁所",
        "尿布",
        "排便",
        "排尿",
        "職能治療",
        "求助"
      ],
      "sourceSection": "使用作者對遠距生活技能支持的研究背景及成果分領域的限制。記錄問題是編輯示範。",
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "本篇的記錄例子以 2–12 歲生活情境整理。回顧涵蓋的年齡與技能各異，請依孩子目前的如廁方式與支持需求使用。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "研究或教材觀點依核准段落整理。行動建議、提問與例子是本指南的生活情境示範。",
      "additionalSources": [
        {
          "id": "little-telehealth-toileting",
          "section": "方法、作者結果與討論，限遠距求助形式及限制。"
        }
      ],
      "sections": [
        {
          "heading": "孩子是在哪個環節需要幫忙？",
          "list": {
            "items": [
              "如廁包含走進去、坐下、處理衣物、沖水和表達不適。孩子在家能做的事，到了陌生或吵雜的廁所可能變難。",
              "描述孩子已經能做哪些步驟、在哪一步停住，能幫專業人員判斷先了解身體不適、環境，還是表達需要。"
            ]
          },
          "evidence": [
            "Clarke 等的回顧包含如廁在內的遠距生活技能支持，有些研究合併多項技能計算，個別成果難以判讀。Little 等的初步研究中，有回饋的家庭接受遠距教練的程度高，使用教材的情況則不同。該研究無對照組，未確定長期效果。"
          ],
          "sourceNotes": [
            {
              "id": "ibalance-autistic-everyday-participation",
              "section": "職能參與段，限如廁時對馬桶或尿布的情境差異。",
              "text": "品恆復健科診所的自閉症衛教提到，有孩子只在有尿布時願意排泄。求助時可以把「什麼情況做得到」一起告訴專業人員，比只說孩子還沒學會上廁所更清楚。"
            }
          ]
        },
        {
          "heading": "帶哪個例子去問專業人員？",
          "paragraphs": [
            "若孩子提到疼痛，或排便、排尿有明顯變化，優先讓醫療人員知道。"
          ],
          "list": {
            "ordered": true,
            "items": [
              "<strong>選一次自然發生的經過。</strong> 寫地點、孩子做了什麼、哪一步卡住、大人提供了什麼協助。有一個比較順的情境也可以帶上。",
              "<strong>分開寫孩子的表達和大人的猜測。</strong> 例如「靠近烘手機時摀耳，說要出去」是一筆觀察。設備聲是否讓他難受，可以和孩子、老師一起確認。",
              "<strong>帶著最想釐清的一件事去問。</strong> 例如「他在家能走進廁所，在學校常到門口就停住，我們該先了解什麼？」也可以請專業人員告訴你下次哪一項最值得觀察。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "sensory-context-notes"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "boys-puberty-privacy",
      "category": "body",
      "title": "男孩進入青春期，怎麼談身體變化與隱私",
      "ages": [
        "9–12 歲"
      ],
      "time": 5,
      "summary": "用孩子聽得懂的詞談正在發生的身體變化，事先約好可以在哪裡、向誰開口。",
      "related": "esa-puberty",
      "situations": [
        "communication"
      ],
      "keywords": [
        "男孩",
        "男生",
        "男性",
        "青春期",
        "身體變化",
        "勃起",
        "隱私",
        "清潔"
      ],
      "sourceSection": "第 3–5、9、15–17、22 頁自有教育文字，聚焦用詞、青春期身體變化與隱私。",
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "9–12 歲是目錄的年齡分組。教材面向澳洲五、六年級，實際以孩子目前的身體變化、理解方式與生活情境為準。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "研究或教材觀點依核准段落整理。行動建議、提問與例子是本指南的生活情境示範。",
      "genderTags": [
        "男"
      ],
      "additionalSources": [
        {
          "id": "dewinter-autistic-sexuality-education",
          "section": "作者共同討論的隱私、自主與性教育需求。"
        }
      ],
      "sections": [
        {
          "heading": "身體變了，孩子想在哪裡、用什麼方式問？",
          "list": {
            "items": [
              "明確的身體詞彙和實際場合能幫孩子理解。一次談一項孩子正在注意的變化，依孩子的發展和溝通方式調整。",
              "孩子可以用說、寫、訊息或溝通工具提問，也可以選希望在哪裡和誰談。"
            ]
          },
          "evidence": [
            "澳洲 Student Wellbeing Hub 的自閉症學生教材建議使用明確身體詞彙，配合學生的發展與溝通方式。Dewinter 等的專家與自閉症當事人討論補充私密感受、同意及求助，適合用作家庭對話的起點。"
          ],
          "sourceNotes": [
            {
              "id": "moe-autism-sex-education",
              "section": "教材國中教育階段，限理解青春期身體變化。",
              "text": "教育部國教署的自閉症性平教材，在國中階段安排認識青春期身體變化。家裡開始談時，可以先從孩子已注意到的變化聊起，再問他希望在哪裡談私密問題。"
            }
          ]
        },
        {
          "heading": "怎麼談身體變化、隱私和求助？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>從孩子提到的一個變化開口。</strong> 例如青春期有時會出現勃起，可以在孩子選的私下場合，用他聽得懂的詞說明。",
              "<strong>一起約好保有隱私的方法。</strong> 談更衣、如廁或需要幫忙時，可以怎麼要求關門、暫停或換人。如果需要看或碰觸，先說明目的並確認他想要的幫忙。",
              "<strong>練一句可以私下問的話。</strong> 例如讓孩子挑一句話或訊息「我有身體的問題想私下問」，在家和學校各選一位他願意找的大人。孩子暫時不想談，可以先約好日後怎麼開口。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "body-boundaries"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "first-period",
      "category": "body",
      "title": "初經前，一起準備用品和求助方式",
      "ages": [
        "9–12 歲"
      ],
      "time": 5,
      "summary": "陪孩子認識月經用品、找出感覺能接受的選項，並約好在學校需要幫忙時怎麼說。",
      "related": "esa-puberty",
      "situations": [
        "sensory",
        "communication"
      ],
      "keywords": [
        "女",
        "女孩",
        "初經",
        "月經",
        "經期",
        "衛生棉",
        "經痛",
        "求助"
      ],
      "sourceSection": "第 3–5、20–22 頁指定自有文字，用於明確溝通、個別感官需要與經期準備。",
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "9–12 歲是目錄的年齡分組。教材面向澳洲五、六年級，實際以孩子目前的身體變化、理解方式與生活情境為準。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "研究或教材觀點依核准段落整理。行動建議、提問與例子是本指南的生活情境示範。",
      "additionalSources": [
        {
          "id": "ellis-periods",
          "section": "只採作者接受稿 PDF 第 3 頁摘要，呈現不同角色的經期支持優先事項。"
        },
        {
          "id": "skommer-periods",
          "section": "作者對初經及青少年相關經期經驗差異的整理。"
        }
      ],
      "genderTags": [
        "女"
      ],
      "sections": [
        {
          "heading": "初經前，孩子想先知道什麼？",
          "list": {
            "items": [
              "孩子可能在意會看到什麼、身體有什麼感覺、用什麼用品，以及不舒服時可以找誰。可以先談孩子最想知道的一件事。",
              "用品的觸感、氣味和廁所環境各可能讓孩子有不同感受。準備和月經有關的用品，可依孩子的感受和實際需要調整。"
            ]
          },
          "evidence": [
            "澳洲 Student Wellbeing Hub 的自閉症學生教材提供用明確詞彙和可理解的方式談經期用品的背景。",
            "Ellis 等的質性回顧摘要顯示，自閉症當事人較重視事前知道會發生什麼、怎麼應對，家長與專業人員則較常注意清潔和獨立處理。Skommer 與 Gunesh 的回顧補充部分自閉症者的感官及情緒經驗。研究對象的年齡與支持需要各異。"
          ],
          "sourceNotes": [
            {
              "id": "moe-autism-sex-education",
              "section": "教材國中青春期單元，限事前備經期用品。",
              "text": "教育部國教署的自閉症性平教材會在課堂上介紹經期用品，讓學生在需要之前先認識。家長可以先和孩子一起確認用品會放在哪裡、在學校要向誰求助。"
            }
          ]
        },
        {
          "heading": "怎麼一起準備用品和在校求助？",
          "paragraphs": [
            "若疼痛或不適影響日常，可把孩子的感受和生活受到的影響帶給醫療人員討論。"
          ],
          "list": {
            "ordered": true,
            "items": [
              "<strong>先認識一件用品。</strong> 用圖、文字或示範說明它的名字、用途和放在哪裡，再和孩子挑比較能接受的材質。",
              "<strong>一起決定收在哪裡、去哪裡換。</strong> 例如孩子願意把衛生棉放書包，但不喜歡有香味的包裝，就先選能接受的用品，再確認校內可更換和丟棄的位置。",
              "<strong>約一種需要時能開口的方式。</strong> 如果孩子習慣傳訊息，可以先和保健室約好怎麼說「我需要用品」或「我不舒服」。下次再問最想調整的是用品、廁所位置還是求助方式。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "body-boundaries"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "body-boundaries",
      "category": "body",
      "title": "有人想牽手或擁抱，怎麼說可以或不要",
      "ages": [
        "9–12 歲"
      ],
      "time": 5,
      "summary": "用日常打招呼的情境練習先問、能拒絕、也能改變主意。",
      "related": "esa-puberty",
      "situations": [
        "communication",
        "school"
      ],
      "keywords": [
        "身體界線",
        "同意",
        "牽手",
        "抱抱",
        "擁抱",
        "拒絕",
        "隱私"
      ],
      "sourceSection": "第 15–17、20 頁自有正文，聚焦私人界線、照顧協助與身體接觸的同意。",
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "9–12 歲是目錄的年齡分組。教材面向澳洲五、六年級，實際以孩子目前的身體變化、理解方式與生活情境為準。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "研究或教材觀點依核准段落整理。行動建議、提問與例子是本指南的生活情境示範。",
      "additionalSources": [
        {
          "id": "dewinter-autistic-sexuality-education",
          "section": "作者共同討論的自主、同意及按需要調整性教育。"
        }
      ],
      "sections": [
        {
          "heading": "怎樣才知道對方願意被碰？",
          "list": {
            "items": [
              "孩子和對方都可以用話、手勢或圖表示願意、拒絕或想停。答應之後也可以改變主意。",
              "對方還沒回應、閃躲或反應不明時，先留出空間。照顧時需要碰觸，也可以先說明原因、提供選項和暫停的方式。"
            ]
          },
          "evidence": [
            "澳洲 Student Wellbeing Hub 的自閉症學生教材以日常接觸談雙方同意，也區分需要照顧協助或立即安全的情況。Dewinter 等的專家及當事人討論提供練習同意與自主的例子，未比較教材或課程效果。"
          ],
          "sourceNotes": [
            {
              "id": "moe-autism-sex-education",
              "section": "教材學前尊重身體自主單元，限擁抱的同意概念。",
              "text": "教育部國教署的自閉症性平教材用擁抱練習身體界線，重點是先詢問並等到對方同意。這個基本概念也可以放到家人見面、想牽手或打招呼的情境。"
            }
          ]
        },
        {
          "heading": "家人想牽手或擁抱時，怎麼練習？",
          "paragraphs": [
            "遇到立即危險，先保護安全，之後再向孩子說明。"
          ],
          "list": {
            "ordered": true,
            "items": [
              "<strong>先問對方，再等回應。</strong> 例如外婆問「我可以抱你嗎？」孩子把手放身後，大人先留出距離，讓孩子選揮手、擊掌或不接觸。",
              "<strong>一聽見或看見想停的訊息就停。</strong> 在孩子願意時，用熟悉的問候示範雙方都能說「不要」或改變主意。",
              "<strong>事後和孩子確認大人有沒有尊重他的選擇。</strong> 若孩子提過不舒服的碰觸，聽他說、先保護安全，並向可信賴的專業人員求助。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "boys-puberty-privacy"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "screen-stop",
      "category": "routines",
      "title": "螢幕活動要結束，先讓孩子知道停在哪裡",
      "ages": [
        "2–5 歲",
        "6–8 歲"
      ],
      "time": 5,
      "summary": "一起選一個看得懂的結束點，說清楚停下來後會去哪裡、下次何時能繼續。",
      "related": "ebrahim-screen",
      "situations": [
        "transitions"
      ],
      "keywords": [
        "3C",
        "螢幕",
        "平板",
        "手機",
        "影片",
        "遊戲",
        "倒數",
        "活動轉換"
      ],
      "sourceSection": "開普敦家長訪談的內容管理、收尾準備與研究限制。",
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "訪談中的孩子實際為 2 歲 10 個月至 7 歲 11 個月。目錄以 2–5 和 6–8 歲兩個年齡帶標示，請依孩子理解提示的方式選用例子。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "研究或教材觀點依核准段落整理。行動建議、提問與例子是本指南的生活情境示範。",
      "additionalSources": [
        {
          "id": "pp-transitions",
          "section": "採用個別化提示與倒數視孩子反應調整的轉換建議。"
        },
        {
          "id": "mayer-digital-citizenship",
          "section": "方法、第二輪專家調查的未達共識事項及局限。"
        }
      ],
      "sections": [
        {
          "heading": "孩子卡在收尾，還是卡在接下來？",
          "list": {
            "items": [
              "孩子可能需要看懂活動在哪裡結束、作品可否存好，以及停下後會做什麼。倒數提醒是否合適，取決於孩子用了之後是安心還是緊張。",
              "同一台裝置也可能用於表達需要。先認清這次要結束的是哪項活動，讓孩子仍可用熟悉的方式溝通。"
            ]
          },
          "evidence": [
            "Ebrahim 等訪談七位家長，記錄家庭用事先提醒等不同方式管理螢幕活動。Positive Partnerships 的轉換資料提醒，倒數是否適用取決於孩子的反應。",
            "Mayer 等的專家調查對部分螢幕安排未達共識，例如用螢幕當獎勵。家長經驗、手冊與專家意見可提供選擇線索，這些來源沒有比較各種收尾方式的效果。"
          ],
          "sourceNotes": [
            {
              "id": "pbs-autistic-media-transitions",
              "section": "螢幕收尾段落，限關閉自動接播的觀點。",
              "text": "發展行為兒科醫師 Jenny Radesky 建議，若下一段影片會自動播放，可以先關掉接播，讓孩子看得到一集真正結束的時刻。"
            },
            {
              "id": "lian-autistic-social-communication",
              "section": "開頭五歲自閉症案例，限平板被收走的情境。",
              "text": "語言治療師連儀分享過一個案例，一位孩子專注聽平板的聲音時，平板突然被收走會讓他很不安。這個例子讓家長多一個可確認的問題：孩子捨不得的是活動本身、偏好的聲音，還是突然被打斷？"
            }
          ]
        },
        {
          "heading": "這次要關螢幕，怎麼先約好停在哪裡？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>確認孩子正在做的是什麼。</strong> 在開始前約一個孩子能看懂的結束點，例如這一段播完或作品存好。",
              "<strong>說明停下來要做什麼。</strong> 例如「這張圖存好就到餐桌」，讓孩子自己按儲存，再指一下餐桌的圖卡。需要時補一句下次何時可以繼續。",
              "<strong>試過再調整提示。</strong> 若倒數讓孩子一直盯著時間，可以改成畫面結束或作品存好的提示。若結束點每次都太遠，下次先挑一個能較快告一段落的活動。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "plan-change"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "school-attendance-talk",
      "category": "school",
      "title": "孩子上學變困難，怎麼和老師談",
      "ages": [
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "把孩子、家庭和老師看到的情境帶到同一場對話，確認哪裡需要支持。",
      "related": "nordin-attendance",
      "situations": [
        "school",
        "feelings",
        "changes"
      ],
      "keywords": [
        "上學困難",
        "拒學",
        "缺席",
        "返校",
        "霸凌",
        "親師合作",
        "校園"
      ],
      "sourceSection": "小學與中學缺席研究的種類、環境情境及限制，供親師討論背景。",
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "範疇回顧涵蓋小學與中學，目錄以 6–17 歲整理親師情境。青少年訪談的例子限於表列 13–17 歲受訪者的背景。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "研究或教材觀點依核准段落整理。行動建議、提問與例子是本指南的生活情境示範。",
      "additionalSources": [
        {
          "id": "lu-taiwan-seventh-grade-peer-support",
          "section": "結果及限制，限自閉症國一同儕協助與排斥背景。"
        },
        {
          "id": "gray-attendance",
          "section": "訪談樣本、校園情境和研究限制。青少年年齡依表 1 採 13–17 歲，正文敘述的年齡範圍與表列不一致。"
        },
        {
          "id": "mullally-child-school-experience",
          "section": "孩子描寫壓力、擁擠、受理解與安全感的作者主題整理。"
        }
      ],
      "sections": [
        {
          "heading": "孩子覺得難的是上學的哪一段？",
          "list": {
            "items": [
              "家裡、校門口和課堂看到的壓力可能不同。聲音、作息、課業、同儕互動或身體感受，都可以從實際情境了解。",
              "能否安心進入活動、遇到困難能否求助，和有沒有到校一樣值得在對話中確認。"
            ]
          },
          "taiwanEvidence": [
            "Lu 等的臺灣研究發現，自閉症國一生遇到困難時有同儕協助，與較少遭排斥有關。研究沒追蹤缺席。和老師談時，可以另外問下課、分組或午餐時，孩子曾向誰求助、老師有沒有看到排斥。"
          ],
          "evidence": [
            "Nordin 等的範疇回顧整理多種上學缺席情境，各研究定義與介入差異大，未評讀研究品質。Gray 等的英格蘭訪談呈現感官、人際、課業及支援經驗，未包含原排除學校的教職員。",
            "Mullally 等的英國 8–14 歲孩子自述補充聲音、擁擠及大人是否理解不適的線索。這些是當事人經驗，未判定個別缺席原因或比較做法效果。"
          ],
          "sourceNotes": [
            {
              "id": "nas-attendance-parent-observation",
              "section": "Strategies you could try at home，限請孩子指出校內最不安的活動或地點。",
              "text": "英國 National Autistic Society 建議，和孩子回看一天的課表時，可以請他指出最吃力的是哪堂課或哪個地方。知道困難常出現在哪一段，家長和學校才有具體的場景可以一起確認。"
            }
          ]
        },
        {
          "heading": "和學校談時，從哪件事開始？",
          "paragraphs": [
            "孩子若提到霸凌、受傷或其他安全疑慮，先請學校了解並處理安全問題。"
          ],
          "list": {
            "ordered": true,
            "items": [
              "<strong>先聽孩子說最難或較自在的一段。</strong> 可以發訊息、圈選課表或指照片。再問他希望讓老師知道哪些事、有沒有願意求助的人。",
              "<strong>請老師對照他看到的情況。</strong> 例如孩子出門前說不想去，後來提到怕排隊進教室的聲音，就問老師當時人流怎麼走、哪一段比較安靜。",
              "<strong>約一個孩子願意試的接應方式。</strong> 確認誰接應、怎麼聯絡、哪天一起回看孩子是否能安心參與。缺席持續或孩子明顯不適時，可請熟悉自閉症的校內外專業人員加入討論。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "school-adjustment"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "early-intervention-first-steps",
      "category": "caregiver",
      "title": "懷疑孩子有自閉特質，早療第一步怎麼走？",
      "ages": [
        "0–1 歲",
        "2–5 歲"
      ],
      "time": 4,
      "summary": "分清發展篩檢、聯合評估、自閉症診斷和資源轉介，先找到可以一起釐清疑問的窗口。",
      "related": "kaohsiung-asd-development-assessment",
      "situations": [
        "local-support",
        "early-intervention"
      ],
      "keywords": [
        "早療",
        "早期療育",
        "發展篩檢",
        "聯合評估",
        "聯評",
        "自閉症評估",
        "通報轉介",
        "疑似自閉症"
      ],
      "sourceSection": "院方聯評簡介及服務流程，限多專業評估、結果解說、後續療育與資源轉介。",
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "學前早療查找情境的參考分組。院方未訂數字適齡，實際服務對象與安排請向院方確認。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依核准範圍整理 ASD 家長面對的流程。提問、觀察重點與生活例子是星泊的編輯示例。",
      "additionalSources": [
        {
          "id": "oneill-asd-assessment-experiences",
          "section": "結果中評估流程、等待與專業溝通的家長觀點。"
        }
      ],
      "sections": [
        {
          "heading": "篩檢、聯評和診斷各能幫你了解什麼？",
          "list": {
            "items": [
              "發展篩檢可協助找出值得再了解的地方。聯合評估由不同專業了解發展和支持需求，自閉症診斷由醫療專業判斷。",
              "同一個孩子在家和托育處可能用不同方式求助。各帶一個實際情境，能幫醫師知道你最想弄清楚什麼。"
            ]
          },
          "taiwanEvidence": [
            "高雄市立聯合醫院的聯評說明提供一個院方例子，實際轉介、掛號與候診方式請向就診院所確認。"
          ],
          "evidence": [
            "O’Neill 與 O’Donnell 的家長經驗回顧整理不同國家的家長需求，可用來準備流程與後續聯絡問題。"
          ],
          "sourceNotes": [
            {
              "id": "chao-taiwan-autism-diagnosis-parents",
              "section": "作者摘要，限尚未確診階段的家長經驗。",
              "text": "Chao 等人的臺灣訪談記錄到，有些家長在評估前很難理解孩子當下的反應。初診時可以先帶一個最想弄清楚的情境，請醫師說明會怎麼了解。"
            }
          ]
        },
        {
          "heading": "帶著哪些事去問第一個窗口？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>先挑一兩件最近的經過。</strong> 例如孩子在托育處常拉著老師走，在家會把打不開的盒子拿給大人。記下當時在做什麼、孩子怎麼表達、你怎麼回應。",
              "<strong>把觀察帶給平常看診的醫師。</strong> 手上已有兒童健康手冊或評估資料可一併帶。問「可以先做發展篩檢嗎？需要安排聯合評估或自閉症相關診察嗎？」",
              "<strong>離開前確認由誰聯絡下一步。</strong> 若建議聯評，問由門診轉介或要自己聯絡聯評中心。也確認等候時能先找哪個早療通報轉介或家庭支持窗口。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "early-intervention-assessment-report"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "early-intervention-assessment-report",
      "category": "caregiver",
      "title": "拿到聯合評估報告，接下來要問什麼？",
      "ages": [
        "0–1 歲",
        "2–5 歲"
      ],
      "time": 4,
      "summary": "把聯評報告帶回結果說明門診，和團隊對照家裡的真實情境，確認一個先做的目標和下一個聯絡窗口。",
      "related": "kaohsiung-asd-development-assessment",
      "situations": [
        "local-support",
        "communication",
        "early-intervention"
      ],
      "keywords": [
        "早療",
        "早期療育",
        "聯合評估",
        "聯評報告",
        "綜合報告書",
        "評估結果",
        "療育目標",
        "回診"
      ],
      "sourceSection": "院方聯評簡介及服務流程第 3–5 點，作為評估後回診解說與後續安排的服務背景。會前問題與例子由星泊整理。",
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "學前早療查找情境的參考分組。院方未訂數字適齡，實際服務對象與安排請向院方確認。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依核准範圍整理 ASD 家長面對的流程。提問、觀察重點與生活例子是星泊的編輯示例。",
      "additionalSources": [
        {
          "id": "oneill-asd-assessment-experiences",
          "section": "結果中診斷回饋、書面資訊及後續支持需求。"
        }
      ],
      "sections": [
        {
          "heading": "報告裡的結果，和生活有什麼關係？",
          "list": {
            "items": [
              "孩子在家、托育處和評估現場可能用不同方式求助或參與。帶一件熟悉情境裡做得順的例子，能讓團隊和你對照評估結果。",
              "把眼前最想改善的一件事帶回結果說明門診，方便一起定下先做什麼，以及用什麼變化來回看。"
            ]
          },
          "taiwanEvidence": [
            "高雄市立聯合醫院的流程涵蓋跨專業評估、結果說明和後續資源。實際報告和在地流程由原團隊說明。"
          ],
          "evidence": [
            "O’Neill 與 O’Donnell 的家長經驗回顧補充家庭在意理解結果與知道接下來找誰。"
          ],
          "sourceNotes": [
            {
              "id": "cg-autism-assessment-children",
              "section": "長庚公開的跨專業診斷與功能評估流程。",
              "text": "長庚紀念醫院的自閉症評估說明提到，團隊會把醫師、心理師、職能治療師及社工的觀察放在一起。拿到報告時，可以請團隊指出哪一部分描述孩子目前的生活能力與所需支持。"
            }
          ]
        },
        {
          "heading": "拿著報告回診，可以依序問什麼？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>圈出一項最不懂的結果。</strong> 問原評估團隊「這一項在日常裡會是什麼樣子？你們看到孩子已經會用哪些方式？」診斷或追蹤安排由原評估醫師說明。",
              "<strong>用一個生活例子談最需要的支持。</strong> 例如孩子在家會用手勢求助，到了托育處卻很少人看得懂。問團隊能否先讓兩邊的大人都認得同一個手勢，並約好怎麼看是否有幫助。",
              "<strong>確認下一步的人和時間。</strong> 離開前問由誰聯絡轉介、需要帶哪份資料、何時回看。如果一次談不完，先確認最需要掌握的一件事和下次可詢問的人。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "early-intervention-try-at-home",
        "early-intervention-subsidy"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "early-intervention-subsidy",
      "category": "caregiver",
      "title": "有自閉症診斷，怎麼查早療費用與交通補助？",
      "ages": [
        "0–1 歲",
        "2–5 歲"
      ],
      "time": 5,
      "summary": "從孩子戶籍地的正式公告查起，確認手上的證明、療育單位、費用項目與送件期限。",
      "related": "tainan-early-intervention-subsidy",
      "situations": [
        "local-support"
      ],
      "keywords": [
        "早療",
        "早期療育",
        "早療補助",
        "療育費",
        "交通費",
        "交通補助",
        "戶籍地",
        "自費療育"
      ],
      "sourceSection": "公告第五至八項，以及同頁「區公所常見退件原因問與答」第一節第 9 題及第三節第 1 題。",
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "0–1 歲、2–5 歲為學前家庭適讀分組，實際補助的年齡條件請查各地方案。",
      "reviewChecked": "2026-11-24",
      "reviewScope": "臺南示例與自閉症專屬問答按核准範圍整理。其他縣市段落僅為查找方式及原創詢問示例。",
      "sections": [
        {
          "heading": "查孩子戶籍地的當期公告",
          "paragraphs": [
            "孩子已有自閉症診斷或聯評資料，你在安排學前早療，想知道哪些支出可以申請補助。 手上的自閉症診斷或聯評報告是和承辦討論的起點。各方案對發展遲緩證明、聯評報告或身心障礙證明的採認不同，先確認孩子適用哪一種資格。",
            "用「縣市名＋早期療育費用補助」搜尋社會局處公告。先看適用年齡、戶籍、是否要完成通報，以及應該找區公所或其他受理窗口。若療育在外縣市，順便問那間院所是否符合規定。"
          ],
          "taiwanEvidence": [
            "以臺南為例，公告列出可採認的文件，附件另有一題說明自閉症家庭以診斷證明書或聯評報告申請時如何查文件。已有身心障礙證明的家庭也可向窗口確認對應資格。",
            "臺南公告只用來示範查找方式。實際請看孩子戶籍地當期公告，向承辦確認資格、補助項目、金額與期限。"
          ]
        },
        {
          "heading": "把手上的文件逐一報給承辦",
          "paragraphs": [
            "說出文件名稱、開立單位、日期及效期。可以問「我們有自閉症診斷和聯評報告，哪一份可以用？需要醫院另外開證明，或是已有的身心障礙證明就能送件嗎？」",
            "例如，孩子在外縣市做語言治療。家長把院所全名、服務項目和報告日期告訴戶籍地承辦，先問院所是否在認可範圍，再問去哪裡送件。",
            "如果窗口認為文件不齊，請對方說明缺的是哪項資格資料、去哪裡補，以及補件和原送件是否有不同期限。"
          ],
          "sourceNotes": [
            {
              "id": "ntpc-early-intervention-cost-subsidies",
              "section": "新北社會局申請條件，限可用的現有文件。",
              "text": "新北市社會局將有效身心障礙證明、符合規定的聯合評估報告等列為可查的文件。若手上只有一張寫自閉症診斷的證明，仍可先請戶籍地承辦確認它是否符合該縣市要求。"
            }
          ]
        },
        {
          "heading": "分開核對要付的費用，再記下截止日",
          "paragraphs": [
            "問療育費和交通費各自的適用條件、健保與自費項目的差別，以及要留哪些收據和紀錄。確認期限從哪一天開始算、能否補件，再把承辦回覆和送件日期寫下來。",
            "翻出現有的文件與收據，記下孩子的戶籍地、早療單位、每筆款項是療育費還是交通費，以及文件效期。"
          ]
        }
      ],
      "relatedArticles": [
        "early-intervention-first-steps",
        "early-intervention-assessment-report"
      ],
      "resource": {
        "group": "benefits",
        "interests": [
          "early-intervention",
          "local-support"
        ],
        "audience": "想查學前早療費用或交通補助的家庭",
        "contact": "孩子戶籍地的社會局處或公告受理窗口",
        "officialSources": [
          "tainan-early-intervention-subsidy"
        ]
      },
      "updatedAt": "2026-11-26"
    },
    {
      "id": "early-intervention-try-at-home",
      "category": "communication",
      "title": "治療師示範的做法，回家怎麼試？",
      "ages": [
        "2–5 歲"
      ],
      "time": 4,
      "summary": "選一段孩子喜歡、家裡排得進去的活動，跟治療師確認最值得試的一步和下次要回報的觀察。",
      "related": "conrad-pact-family-experience",
      "situations": [
        "communication"
      ],
      "keywords": [
        "早療",
        "早期療育",
        "居家練習",
        "家長參與",
        "治療師",
        "回家練習",
        "PACT",
        "親子遊戲"
      ],
      "sourceSection": "第 2.3 節樣本及第 3.1、3.2 節作者對時間安排、個別化及遊戲互動經驗的綜整。",
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "2–5 歲為本文採用的居家遊戲情境分組。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "以質性訪談整理家長經驗及實作困難。提問與例子為原創，未重製 PACT 課程或訪談內容。 補入臺北榮總的日常溝通衛教，限口語和眼前活動相配合的做法。",
      "additionalSources": [
        {
          "id": "vghtpe-autism-home-routines",
          "section": "「溝通能力」段落，限用簡短語句配合手邊的生活動作或遊戲。"
        },
        {
          "id": "binns-preschool-slp",
          "section": "方法、服務形式與照顧者參與方式的調查結果。"
        }
      ],
      "sections": [
        {
          "heading": "為什麼治療室能做，回家有時接不上？",
          "list": {
            "items": [
              "孩子的興趣、疲累程度和活動被打斷的時機，都可能影響他願不願意加入。同一個做法可以和治療師一起換到家裡比較自然的時段。",
              "記一個孩子接得上和一個想停的時刻，能讓治療師看出該調整做法、時機或你手上能分配的時間。"
            ]
          },
          "taiwanEvidence": [
            "臺北榮總兒童發展評估中心建議把簡短語句放進孩子正在做的事。可以請治療師用家裡原本就有的活動示範一次，例如孩子把車推過來時，說一句簡短的話並和他一起玩。"
          ],
          "evidence": [
            "Conrad 等訪談十個在丹麥參與 PACT 的家庭。有人喜歡把互動放進日常，也有人覺得難找時間、做法很難持續。這些訪談也提醒家裡的時間與做法需要一起調整。Binns 等的安大略省語言服務調查記錄不同形式及照顧者參與安排。兩份資料提供實務經驗，未直接比較不同居家安排的效果。"
          ]
        },
        {
          "heading": "怎麼用一小段日常活動試試看？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>請治療師示範一個家裡做得到的動作。</strong> 可以問：「他喜歡玩車。你能用他平常玩的方式示範一次嗎？我要說哪一句、做哪一個動作，又要怎麼知道他想停？」",
              "<strong>用約好的方式試一小段。</strong> 例如先等孩子邀你加入。孩子把車推過來，就一起玩一會兒。孩子把車收走或轉開，就停下或回到原本的玩法。",
              "<strong>下次帶一個順利例子和一個卡住的例子。</strong> 說當時玩什麼、你做了什麼、孩子怎麼接。若根本找不到合適時間，也直接告訴治療師，一起改成家裡做得下去的方式。"
            ]
          },
          "sourceNotes": [
            {
              "id": "pclinic-autism-routine-case",
              "section": "屏基復健科大會摘要，限家長共同挑好在日常練習的目標。",
              "text": "屏東基督教醫院復健科分享過一個 5 歲自閉症孩子的案例。團隊和家長一起選定目標，放進家裡原有的作息，回到療育課時再一起看哪裡需要調整。"
            }
          ]
        }
      ],
      "relatedArticles": [
        "early-intervention-aac"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "early-intervention-aac",
      "category": "communication",
      "title": "孩子很少用口語，怎麼和語言治療師談 AAC？",
      "ages": [
        "2–5 歲"
      ],
      "time": 5,
      "summary": "帶著孩子已經在用的聲音、動作或圖片，討論怎麼讓求助、拒絕和分享更容易被理解。",
      "related": "gevarter-preschool-multimodal-communication",
      "situations": [
        "communication",
        "school"
      ],
      "keywords": [
        "早療",
        "早期療育",
        "AAC",
        "擴大與替代溝通",
        "無口語",
        "少口語",
        "溝通板",
        "語音輔具",
        "語言治療"
      ],
      "sourceSection": "第 2.1 節及第 4.1、4.2、5 節，限樣本、不同表達方式、家長共同規劃及研究限制。",
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "2–5 歲為學前閱讀分組。來源研究納入約 2 歲半至未滿 5 歲的兒童。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "改寫研究對多元表達、共同規劃與限制的敘述。居家、在園提問及例子為原創。",
      "additionalSources": [
        {
          "id": "taiwan-assistive-device-subsidies",
          "section": "法定附表第 94–100 項溝通輔具及辦法的評估、申請範圍。"
        },
        {
          "id": "binns-preschool-slp",
          "section": "作者調查的學前服務、功能性溝通目標與提供方式。"
        }
      ],
      "sections": [
        {
          "heading": "可以先從孩子已經會用的方式開始嗎？",
          "list": {
            "items": [
              "AAC 是「擴大與替代溝通」，可用手勢、圖片、溝通板或語音輔具支持表達。孩子原本的動作、聲音或詞語也能一起帶進討論。",
              "同一個訊息在家裡可能大家都懂，到了教室就不容易被看見。對照具體場景，能幫語言治療師一起挑孩子用得上、也拿得到的方式。"
            ]
          },
          "taiwanEvidence": [
            "臺灣的輔具補助表把自閉症列入部分面對面溝通輔具的適用對象。如果治療師建議評估輔具，可順便問能在哪裡試用、是否需要正式評估、哪些項目可能符合補助。"
          ],
          "evidence": [
            "Gevarter 等的五名學前兒童研究顯示孩子和照顧者使用的表達方式各異，樣本較小。Binns 等的學前自閉症語言服務調查呈現工具及服務安排的多樣性，無法判定哪一項最適合個別孩子。"
          ]
        },
        {
          "heading": "跟語言治療師談時，先帶哪幾個例子？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>各挑一個孩子想求助、拒絕或分享的情境。</strong> 記下孩子如何表達、誰聽得懂，還有在哪裡容易猜錯。",
              "<strong>請治療師用同一個場景比較選項。</strong> 例如孩子在家會把空杯遞給大人，到了教室杯子常在書包裡。問有沒有孩子可順手表示「喝水」、也方便使用家裡語言的方式可以先試。",
              "<strong>和家人、老師約定怎麼回應。</strong> 先挑孩子重視的一項需要，說好孩子怎麼表達、大人怎麼接，以及工具可以放在哪裡、何時回看。孩子已經用原來的手勢表達清楚時，就先回應他的意思。"
            ]
          },
          "sourceNotes": [
            {
              "id": "tungs-family-aac-case",
              "section": "童綜合語言治療個案的公開摘要，限跨情境選溝通需求。",
              "text": "童綜合醫院語言治療組的林昀潔分享過一名 4 歲自閉症孩子的案例。治療師請家長一起比較孩子在家和幼兒園怎麼表達，再依兩邊實際需要選溝通目標。"
            }
          ]
        }
      ],
      "relatedArticles": [
        "needs",
        "disability-certificate-available-services"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "early-intervention-preschool-support",
      "category": "school",
      "title": "早療中的孩子要上幼兒園，怎麼接上學前特教？",
      "ages": [
        "2–5 歲"
      ],
      "time": 5,
      "summary": "在入園前或入園後找到學前特教窗口，把孩子的溝通方式、環境需求和早療經驗帶進教育評估。",
      "related": "taiwan-special-education-assessment",
      "situations": [
        "school",
        "local-support",
        "changes"
      ],
      "keywords": [
        "早療",
        "早期療育",
        "學前特教",
        "幼兒園",
        "入園",
        "鑑定安置",
        "轉銜",
        "IEP",
        "個別化教育計畫"
      ],
      "sourceSection": "第 2、12、23、24 條多元評量、自閉症類別、鑑定及教育需求評估；第 26 條施行日。",
      "additionalSources": [
        {
          "id": "taiwan-special-education-act",
          "section": "第 3、6、19、20、26、31 條，供確認自閉症類別、鑑定安置、學前特教及孩子與照顧者參與。"
        }
      ],
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "依《特殊教育法》第 26 條，身心障礙兒童的特殊教育自 2 歲開始。2–5 歲是本文的學前閱讀分組，申請條件請以縣市公告為準。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依核准範圍整理 ASD 家長面對的流程。提問、觀察重點與生活例子是星泊的編輯示例。",
      "sections": [
        {
          "heading": "園方需要知道孩子在團體裡的哪些需要？",
          "list": {
            "items": [
              "早療評估著重發展和療育需要，學前特教的鑑定安置著重幼兒在園裡的學習和參與。既有早療經驗可以帶到園方一起討論。",
              "說清楚孩子如何表示需要休息、什麼情況比較吃力、哪種提示已經有用，能幫園方知道可以從哪個場景開始支持。"
            ]
          },
          "taiwanEvidence": [
            "教育部《特殊教育學生及幼兒鑑定辦法》說明多元評量與教育需求評估，《特殊教育法》第 31 條規範個別化教育計畫及參與。各縣市的受理方式、期限和文件以當期公告為準。"
          ]
        },
        {
          "heading": "入園前後，各可以找誰、談什麼？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>依孩子是否已入園找窗口。</strong> 尚未入園，可向所在地教育局處或特教資源中心查當年度學前特教鑑定安置。已入園，可先找教保服務人員或園方特教承辦。",
              "<strong>帶一兩個早療和園裡的對照情境。</strong> 例如孩子在早療看圖就知道要收玩具，在園裡聽到突然響起的音樂卻會嚇到。可以問能否提前用他熟悉的圖像提醒，再確認評估要帶哪些文件。",
              "<strong>和園方確認誰跟進、何時回看。</strong> 收到結果後，問支持會如何落實。經鑑定具身心障礙特教資格的幼兒，園方應訂個別化教育計畫（IEP），並邀請孩子及法定代理人或實際照顧者參與。若仍在等結果，可先問園裡有哪些日常安排能試。"
            ]
          },
          "sourceNotes": [
            {
              "id": "taipei-early-childhood-transition-contact",
              "section": "地方窗口表，限幼兒園巡迴輔導及學前特教聯絡。",
              "text": "以臺北市為例，早療通報轉介中心的窗口表可用來找學前鑑定安置及幼兒園巡迴輔導。正在找園所時，可以先問入園前由哪個單位接手目前的支持需要。"
            }
          ]
        }
      ],
      "relatedArticles": [
        "early-intervention-first-grade-transition"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "early-intervention-first-grade-transition",
      "category": "school",
      "title": "快升小一，哪些支持要交接給新老師？",
      "ages": [
        "2–5 歲",
        "6–8 歲"
      ],
      "time": 5,
      "summary": "整理一頁孩子常用的溝通方式、容易吃力的情境和已經有效的支持，帶去談轉銜及入學後的分工。",
      "related": "taiwan-special-education-school-transition",
      "situations": [
        "school",
        "changes",
        "communication"
      ],
      "keywords": [
        "早療",
        "早期療育",
        "升小一",
        "國小入學",
        "入學轉銜",
        "轉銜會議",
        "鑑定安置",
        "IEP",
        "個別化教育計畫"
      ],
      "sourceSection": "第 2 至 4 條和第 6 條，限轉銜計畫、支持資料、進入國小時的會議參與與後續 IEP。",
      "additionalSources": [
        {
          "id": "taiwan-special-education-act",
          "section": "第 3 條第 10 款確認自閉症類別，第 31 條提供 IEP 與照顧者參與的法源。"
        }
      ],
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "2–5 歲與 6–8 歲為入學前後的適讀分組，本篇情境聚焦幼兒園升小一。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "依指定轉銜條文與自閉症類別法源整理。家庭筆記與例子由星泊原創。",
      "sections": [
        {
          "heading": "新老師最需要接上的支持是什麼？",
          "list": {
            "items": [
              "熟悉的求助手勢、安靜的位置或轉換提醒，到新學校也可能有用。請孩子說說最想留哪一項，以及哪件事現在還不確定。",
              "交接寫到新老師可以使用，有助於把原本有效的支持帶進新環境。留下何時回看，才能依孩子的反應調整。"
            ]
          },
          "taiwanEvidence": [
            "教育部《各教育階段身心障礙學生與幼兒轉銜輔導及服務辦法》第 6 條規範召集轉銜會議、邀請照顧者及擬安置學校，並規範安置學校處理資料和支持。《特殊教育法》第 31 條規範個別化教育計畫。交接一頁是編輯整理的示例，各地時程請向當地主管機關確認。"
          ],
          "sourceNotes": [
            {
              "id": "cg-taiwan-autism-school-transition-case",
              "section": "摘要第（五）項，限研究者對幼兒園與國小接續聯繫的建議。",
              "text": "曾馨瑩和梁碧明在幼小轉銜個案研究裡，建議兩階段的老師能直接聯絡。轉銜會議上可以先問清楚下一次由誰跟進。"
            }
          ]
        },
        {
          "heading": "升小一前後，怎麼把支持交接下去？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>確認會議時間和窗口。</strong> 孩子已接受特教服務時，先問原幼兒園或安置單位何時召開轉銜會議、新學校由誰參加。還在安排鑑定或安置時，可向縣市特教窗口確認當期流程。",
              "<strong>把三件事寫成一頁。</strong> 寫「孩子怎麼表達」「在哪個情境比較吃力」「什麼支持已經有效」。例如突然的下課鐘讓孩子摀耳停在座位，就把原本的預告方式和他用來求助的圖卡一起交接。",
              "<strong>跟新學校約定誰做、何時一起看。</strong> 確認第一週求助可以找誰，約個時間聽孩子回饋。若經鑑定安置，請新學校把需求帶進個別化教育計畫（IEP）。已開學的家庭也可以直接約導師和特教承辦談。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "school-transition"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "special-ed-or-disability-certificate",
      "category": "caregiver",
      "title": "孩子確診自閉症，特教鑑定和身障證明要先辦哪一個？",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "先看孩子在哪裡需要支持，再找教育端或社政端。兩種評估各有目的，家長可以按需要分別詢問。",
      "related": "taiwan-special-education-assessment",
      "situations": [
        "local-support",
        "school"
      ],
      "keywords": [
        "身障證明",
        "身障手冊",
        "特教鑑定",
        "特殊生",
        "雙軌",
        "自閉症診斷",
        "申請"
      ],
      "sourceSection": "第 2、12、23、24 條，限自閉症教育鑑定、個別需求及佐證資料。",
      "additionalSources": [
        {
          "id": "taiwan-disability-assessment",
          "section": "第 4、5、7–9 條，供確認身障鑑定與公所窗口。"
        },
        {
          "id": "taiwan-disability-rights-act",
          "section": "第 5–7 條，限鑑定、需求評估及核發。"
        }
      ],
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "2–17 歲涵蓋從學前到高中階段的家庭決策。法定學前特教自 2 歲開始。",
      "reviewChecked": "2026-11-24",
      "reviewScope": "指定的 ASD 研究或適用法規，搭配原創家長提問與情境示例。",
      "sections": [
        {
          "heading": "把目前最急的一件事寫下來",
          "paragraphs": [
            "拿到自閉症診斷，手邊已有報告，老師或親友提到特教鑑定與身心障礙證明，你想知道從哪一步開始。 同一個孩子可能在教室需要有圖像提示的活動安排，也可能在家外出時需要支持。把這兩件事分開說，窗口比較容易釐清可以提供的協助。",
            "在班上跟不上活動、難以求助或團體環境負荷高，可以先與園校談教育支持。若需要家庭照顧者支持、輔具或其他福利，先向公所或社會局處問哪項方案最符合需求。",
            "例如，幼兒在班上不太能向教保員說需要休息，家庭也需要更多照顧者支持。家長先問園方如何啟動學前鑑定，再向公所確認是否有可用服務及證明條件。"
          ],
          "sourceNotes": [
            {
              "id": "moe-autism-educational-assessment-manual",
              "section": "自閉症章發現、篩選與鑑定，限教育資料用途。",
              "text": "教育部特教鑑定說明手冊會請學校蒐集孩子在校表現，用來了解他的教育需求。這些觀察和醫療資料回答的問題不同，家長可以先分別確認學校要了解什麼、鑑定醫院要評估什麼。"
            }
          ]
        },
        {
          "heading": "分別確認受理窗口和資料",
          "paragraphs": [
            "特教可從園校承辦或所在地教育局處問自閉症類別的申請、時程與可用證明。身障鑑定可從戶籍地縣市內的公所開始，查詢鑑定機構與帶件方式。",
            "用兩欄記下「園校裡最想改善的事」和「家庭生活最需要的協助」。各欄挑一個實際例子。"
          ],
          "taiwanEvidence": [
            "臺灣的教育鑑定採多元評量，重點在教育需求。身障鑑定及福利需求評估依另一套法規辦理，包含生活參與及福利支持。",
            "各地受理時程及應備文件看當期公告。教育支持、身障資格和醫療診斷各有判定程序。"
          ]
        },
        {
          "heading": "兩線都有需求就各自問進度",
          "paragraphs": [
            "自閉症診斷與身障證明可供教育鑑定參考。若尚無身障證明，先請園校確認可受理的資料與期程。同一份報告是否可用，由各窗口依當期規定確認。",
            "若兩個窗口都請你找另一邊，問清楚需要的是哪一份文件，以及等候期間是否能先約談或送其他佐證。"
          ]
        }
      ],
      "relatedArticles": [
        "what-disability-assessment-checks"
      ],
      "resource": {
        "group": "assessment",
        "interests": [
          "special-education",
          "disability-certificate",
          "school",
          "local-support"
        ],
        "audience": "想了解孩子的在校支持或身障福利資格的家庭",
        "contact": "園校特教承辦、所在地教育局處或戶籍地公所",
        "officialSources": [
          "taiwan-special-education-assessment",
          "taiwan-disability-assessment"
        ]
      },
      "updatedAt": "2026-11-26"
    },
    {
      "id": "grades-and-special-ed",
      "category": "school",
      "title": "孩子成績不差，但在學校很吃力，要做特教鑑定嗎？",
      "ages": [
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "把老師看到的課業表現和孩子經歷的負荷一起帶進討論，確認目前做法能不能支持孩子參與。",
      "related": "taiwan-special-education-assessment",
      "situations": [
        "school",
        "sensory",
        "feelings"
      ],
      "keywords": [
        "特教鑑定",
        "成績",
        "學校適應",
        "下課",
        "求助",
        "感官負荷",
        "掩飾壓力"
      ],
      "sourceSection": "第 2、12、24 條，限自閉症類別及包含溝通、感官、社會行為與學習的教育需求。",
      "additionalSources": [
        {
          "id": "mullally-child-school-experience",
          "section": "Results 的校園負荷與安全感，保留 8–14 歲自陳限制。"
        }
      ],
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "6–17 歲是學齡閱讀分組。自陳研究樣本 8–14 歲。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "指定的 ASD 研究或適用法規，搭配原創家長提問與情境示例。",
      "sections": [
        {
          "heading": "考得不錯，還有哪些在校需要容易漏看？",
          "list": {
            "items": [
              "孩子能完成作業，也可能在吵雜時段、分組、臨時變動或求助時很吃力。老師在班上看到的情況和孩子回家後的感受，能一起比對。",
              "具體的例子能讓老師知道目前有哪些支持可以先試，也能和特教承辦討論正式鑑定還能釐清哪些教育需要。"
            ]
          },
          "taiwanEvidence": [
            "教育部《特殊教育學生及幼兒鑑定辦法》要求多元評量與綜合研判，是否符合資格由鑑輔會依個別資料處理。"
          ],
          "evidence": [
            "Mullally 等的英國 8–14 歲自閉症孩子自述補充了學生自己經歷的校園負荷。"
          ],
          "sourceNotes": [
            {
              "id": "moe-autism-educational-assessment-manual",
              "section": "自閉症章所列的學業、社會互動等觀察面向。",
              "text": "教育部手冊在自閉症章把學業表現和社會互動分開談。成績不差時，也可以請老師另外說明孩子在分組、下課或換環境時，需要多少協助。"
            }
          ]
        },
        {
          "heading": "怎麼和老師談成績以外的困難？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>請孩子指出最吃力的一段。</strong> 可以指課表、畫教室或選願意談的大人。問當時哪裡最難，以及什麼情況下比較順。",
              "<strong>請老師對照並試一個調整。</strong> 例如作業都能完成，孩子卻說午休後的分組和廣播讓他很累。可先約一個求助訊號，確認誰會回應、何時一起看有沒有幫助。",
              "<strong>需要更多支持時，問鑑定可以多了解什麼。</strong> 請特教承辦說明會蒐集哪些資料、孩子的意見怎麼納入，以及後續可能討論什麼支持。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "before-school-assessment-consent"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "special-ed-mainstream-class",
      "category": "school",
      "title": "通過特教鑑定後，可以留在普通班嗎？",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "可以。從孩子平常在哪裡上課、什麼時間接受支持、誰負責跟進，了解安置方案會怎麼影響一天的生活。",
      "related": "taiwan-special-education-act",
      "situations": [
        "school"
      ],
      "keywords": [
        "特教鑑定",
        "普通班",
        "資源班",
        "巡迴輔導",
        "集中式特教班",
        "安置",
        "IEP"
      ],
      "sourceSection": "第 3、10、13、30、31 條，限自閉症類別、融合、班型、普通班支持及 IEP。",
      "additionalSources": [
        {
          "id": "taiwan-special-education-class-types",
          "section": "第 6 條說明三種班型與普通班課程。"
        },
        {
          "id": "ophir-school-disclosure",
          "section": "教師支持主題提供校園參與經驗，班型定義依臺灣法規。"
        }
      ],
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "2–17 歲涵蓋園校安置的閱讀情境，班型細節依實際學段。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "指定的 ASD 研究或適用法規，搭配原創家長提問與情境示例。",
      "sections": [
        {
          "heading": "在普通班就讀，特教支持會怎麼安排？",
          "list": {
            "items": [
              "可以依孩子的需要，在普通班就讀並接受特教服務。先對照班型會在哪裡上課、什麼時段有支援，再看哪些安排能讓孩子參與。",
              "分散式資源班是在普通班就讀，部分時間接受特教及相關服務。巡迴輔導由教師在孩子所在的場域提供部分時間的服務。",
              "集中式特教班主要在特教班接受服務，依課程設計也可在普通班上部分適性課程。各學段或園校實際可用的安排，請向園校確認。"
            ]
          },
          "taiwanEvidence": [
            "《特殊教育法》第 13、30、31 條與《特殊教育法施行細則》第 6 條說明各班型、普通班支持及個別化教育計畫。個別安置與支持由鑑輔會綜合教育需要。"
          ],
          "evidence": [
            "Ophir 等的質性回顧補充學生在意老師是否理解，以及調整會如何影響同儕互動。"
          ],
          "sourceNotes": [
            {
              "id": "moe-mainstream-class-team",
              "section": "第 4 條依 IEP 的團隊支持。",
              "text": "教育部主管學校的普通班輔導辦法要求普通班老師、特教老師與其他支持人員組成團隊。家長可以依學校適用的規定，確認實際由誰把 IEP 裡的做法帶進普通班。"
            }
          ]
        },
        {
          "heading": "怎麼請園校把一天的安排說具體？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>請對方用一天的課表說明。</strong> 問孩子平常在哪裡上課、哪個時段會有特教支持。例如孩子喜歡自然課，但大型集會的聲音會讓他吃力，可以分別談參與和休息安排。",
              "<strong>確認每一項支持由誰做。</strong> 例如換教室時由誰預告，集會時能在哪裡休息。也問老師請假或換人時，原來的安排怎麼接續。",
              "<strong>把確認的安排和回看日期放進 IEP 討論。</strong> 請孩子說出想保留哪件事，並與園校約什麼時候一起看是否合適。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "school-adjustment"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "before-school-assessment-consent",
      "category": "school",
      "title": "學校建議鑑定，我還在考慮，可以先談什麼？",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "先請老師說明具體觀察、現在可試的支持，以及鑑定能多回答哪些問題，再和孩子一起整理意見。",
      "related": "taiwan-special-education-act",
      "situations": [
        "school",
        "communication"
      ],
      "keywords": [
        "鑑定同意",
        "特教鑑定",
        "家長同意",
        "現在能做什麼",
        "親師溝通",
        "孩子意見"
      ],
      "sourceSection": "第 10、11、20、31 條，限支持、學生意見、同意與通報。",
      "additionalSources": [
        {
          "id": "mullally-child-school-experience",
          "section": "同時呈現孩子報告的過度刺激與不被理解的不同情境。"
        }
      ],
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "2–17 歲是幼兒園至高中閱讀分組。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "指定的 ASD 研究或適用法規，搭配原創家長提問與情境示例。",
      "sections": [
        {
          "heading": "簽同意書前，有哪些事可以先確認？",
          "list": {
            "items": [
              "家長、孩子和老師可能各看到一部分。老師看到孩子離開隊伍時，孩子可能在意哨音、規則變動或想求助時會被同學注意。",
              "可以把鑑定的目的、資料與時程問清楚，也能一起確認目前在班上有哪些支持適合先試、哪些正式服務需要後續程序。"
            ]
          },
          "taiwanEvidence": [
            "《特殊教育法》第 20 條規範同意、徵詢未成年學生意見與不同意時的通報。班上目前可試的安排，仍依孩子和園校的情況討論。"
          ],
          "evidence": [
            "Mullally 等的英國 8–14 歲自閉症孩子自述補充學生觀點。"
          ],
          "sourceNotes": [
            {
              "id": "moe-autism-educational-assessment-manual",
              "section": "自閉症學生的發現、篩選與正式鑑定，限學校資料蒐集的角色。",
              "text": "教育部的特教鑑定說明手冊，把老師的日常觀察與後續綜合研判分開處理。收到建議時，可以先請老師說明已有哪一段課堂觀察、還有哪些問題希望透過鑑定釐清。"
            }
          ]
        },
        {
          "heading": "和老師談之前，可以先問哪三件事？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>請老師說一個實際場景。</strong> 例如體育課常離開隊伍時，可以問發生在哨音響起、規則改變或排隊的哪一刻，也讓孩子用說、寫或指圖說哪裡最難。",
              "<strong>一起約一件現在能試的支持。</strong> 例如先用一個提示，並約好離開隊伍時去哪個位置等。確認誰會跟進、哪一天一起看孩子的感受。",
              "<strong>請承辦說明同意書和還在考慮時的下一步。</strong> 問何時送件、哪些資料會被用到、孩子的意見怎麼進評估。若不同意，請園校說明依法通報主管機關的流程，以及在等候期間可做的事。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "special-ed-mainstream-class"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "what-disability-assessment-checks",
      "category": "caregiver",
      "title": "有自閉症診斷，身障鑑定還會看什麼？",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "鑑定要了解孩子在日常生活能做什麼、靠哪些支持才能做到，以及不同場域有什麼差異。",
      "related": "taiwan-disability-assessment",
      "situations": [
        "local-support"
      ],
      "keywords": [
        "身障鑑定",
        "身心障礙證明",
        "自閉症診斷",
        "功能評估",
        "日常參與",
        "病歷",
        "診斷證明"
      ],
      "sourceSection": "第 4、7、8 條及相關附表，限身體功能、活動參與及環境因素的鑑定程序。",
      "additionalSources": [
        {
          "id": "taiwan-disability-rights-act",
          "section": "第 5–7 條，區分法定鑑定、需求評估與核發。"
        }
      ],
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "2–17 歲是本文例子的閱讀分組，實際鑑定依年齡和個別狀況。",
      "reviewChecked": "2026-11-24",
      "reviewScope": "指定的 ASD 研究或適用法規，搭配原創家長提問與情境示例。",
      "sections": [
        {
          "heading": "問公所及鑑定機構各需要什麼",
          "paragraphs": [
            "孩子確診後，你準備詢問證明，想知道診斷以外需要帶什麼、會談到哪些生活情境。 孩子可能在熟識的人旁邊能用文字求助，在陌生地方卻需要大人幫忙理解問題。把平常用的圖卡、步驟提醒或陪同一起說明。",
            "先確認哪個機構和科別可受理，以及現有診斷、聯評或其他紀錄哪些要帶。若已有近期資料，可問院方能否參考以減少重複評估。",
            "原本的報告只寫診斷時，可以再帶一頁日常觀察，並先問機構是否需要補其他正式資料。"
          ]
        },
        {
          "heading": "用活動情境描述支持程度",
          "paragraphs": [
            "分別想一個孩子通常能自己做、有人提醒可完成、需要較多協助的例子。可選自理、往返熟悉地方或在外求助，補上事情在哪些環境變難。",
            "例如，孩子知道回家的路，但路線臨時更改時會停在原地等大人。家長把兩種情況和能用的求助方式記下來，讓團隊理解差異。"
          ],
          "sourceNotes": [
            {
              "id": "kmuh-disability-evaluation-roles",
              "section": "院方鑑定流程步驟二、三的分工。",
              "text": "高雄市立聯合醫院公開的流程把身體功能和日常活動參與交由不同專業了解。去鑑定前，可以準備一件孩子在哪裡做得到、在哪裡仍需要協助的生活例子。"
            }
          ]
        },
        {
          "heading": "區分鑑定和福利需求評估",
          "paragraphs": [
            "醫療鑑定處理功能及活動參與的判定，地方政府另用需求評估了解家庭需要的支持。離開前確認後續由誰聯絡。",
            "觀察孩子做一件事時，中間需要誰提醒或陪同。把有效支持和孩子擅長的部分也記下來。"
          ],
          "taiwanEvidence": [
            "鑑定辦法列有身體系統構造或功能，以及活動參與與環境因素。家長的日常描述能讓鑑定團隊看到孩子在不同地方需要哪些支持。",
            "本文的提問無法直接換算等級。資格、程度及證明所載內容，依指定機構與主管機關的程序判定。"
          ]
        }
      ],
      "relatedArticles": [
        "disability-certificate-available-services"
      ],
      "resource": {
        "group": "assessment",
        "interests": [
          "disability-certificate"
        ],
        "audience": "準備了解孩子身障鑑定項目的家庭",
        "contact": "戶籍地公所或指定鑑定醫療機構",
        "officialSources": [
          "taiwan-disability-assessment"
        ]
      },
      "updatedAt": "2026-11-26"
    },
    {
      "id": "disability-assessment-under-six",
      "category": "caregiver",
      "title": "孩子還沒滿六歲，可以先評估身障證明嗎？",
      "ages": [
        "0–1 歲",
        "2–5 歲"
      ],
      "time": 5,
      "summary": "可以先詢問。未滿六歲有一般鑑定程序，符合特定條件時另有暫判規定。",
      "related": "taiwan-disability-assessment",
      "situations": [
        "local-support"
      ],
      "keywords": [
        "未滿六歲",
        "身障證明",
        "身障手冊",
        "暫判",
        "發展遲緩",
        "聯評",
        "效期"
      ],
      "sourceSection": "第 5、7–9 條，尤其第 9 條未滿六歲、無法依附表二甲判定時的暫判條件。",
      "additionalSources": [
        {
          "id": "taiwan-disability-rights-act",
          "section": "第 14、15 條供理解效期、重鑑及過渡安排。"
        }
      ],
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "0–5 歲涵蓋未滿六歲的閱讀情境，完整適用條件按第 9 條。",
      "reviewChecked": "2026-11-24",
      "reviewScope": "指定的 ASD 研究或適用法規，搭配原創家長提問與情境示例。",
      "sections": [
        {
          "heading": "帶現有資料向公所和鑑定院所詢問",
          "paragraphs": [
            "孩子還沒上小學，已拿到聯評報告或收到自閉症相關的醫療建議，家長想知道是否一定要等滿六歲。 如果已有聯評報告，可以先把報告記載的領域和孩子現在需要哪些協助整理好，再由鑑定團隊說明適用程序。",
            "確認該找的鑑定科別、要領哪些表單和近期紀錄能否參考，並提到孩子目前年齡。",
            "若窗口拿不準如何處理，可以請他說明目前適用哪項鑑定程序，以及下次向誰確認。"
          ],
          "sourceNotes": [
            {
              "id": "cg-autism-assessment-children",
              "section": "長庚的自閉症診斷及功能報告說明。",
              "text": "長庚紀念醫院的自閉症衛教說明，醫療團隊可同時整理診斷與功能評估。已有醫療報告的家庭，可以先請鑑定院所辨認哪些功能資料能供參考。"
            }
          ]
        },
        {
          "heading": "請醫院說明是否涉及暫判",
          "paragraphs": [
            "依第 9 條，未滿六歲且無法以附表二甲判定類別和程度時，若早療發展評估記載兩項以上發展遲緩並已取得報告，鑑定機構得暫判為輕度。這是該條其中一種情形。",
            "例如，孩子快五歲，目前有聯評報告。家長問院方哪些內容可供這次鑑定參考，再記下年滿六歲前要完成的聯絡事項。"
          ],
          "taiwanEvidence": [
            "第 9 條處理附表二甲無法判定時的特定幼兒情境，是否適用由鑑定機構判斷。",
            "兩項以上的內容請帶報告向團隊確認。早療、教育支持與福利服務的申請也各有自己的規定。"
          ]
        },
        {
          "heading": "看清證明上實際到期日",
          "paragraphs": [
            "依該條暫判者，效期最長到滿六歲後第九十日。若核發了證明，先確認上面的日期，再問社會局處何時辦重鑑與等待期間如何銜接服務。",
            "在聯評報告上找出已評估的領域、評估日、建議的支持及追蹤安排。"
          ]
        }
      ],
      "relatedArticles": [
        "disability-certificate-available-services"
      ],
      "resource": {
        "group": "assessment",
        "interests": [
          "disability-certificate"
        ],
        "audience": "想了解未滿六歲孩子身障鑑定程序的家庭",
        "contact": "戶籍地公所或指定鑑定醫療機構",
        "officialSources": [
          "taiwan-disability-assessment"
        ]
      },
      "updatedAt": "2026-11-26"
    },
    {
      "id": "disability-certificate-available-services",
      "category": "caregiver",
      "title": "自閉症孩子領了身障證明，可以用哪些福利？",
      "ages": [
        "0–1 歲",
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 7,
      "summary": "健保門診基本部分負擔 50 元、國內大眾運輸半價與地方愛心卡、符合條件可申請溝通輔具或臨時照顧。這篇列出可用項目、資格和辦理窗口。",
      "related": "taiwan-disability-rights-act",
      "situations": [
        "local-support",
        "caregiver"
      ],
      "keywords": [
        "身障證明",
        "身障手冊",
        "喘息",
        "照顧者",
        "社會局",
        "輔具",
        "福利",
        "交通",
        "健保費",
        "就醫",
        "生活補助",
        "所得稅",
        "牌照稅",
        "交通半價",
        "溝通輔具",
        "AAC",
        "臨時照顧",
        "學雜費",
        "愛心卡",
        "愛心陪伴卡",
        "交通點數",
        "博愛卡"
      ],
      "sourceSection": "第 7、29、50、51、56、58、59、71 條，限自閉症家庭適用的需求評估、就學、照顧、停車、交通、場館和輔具。 愛心卡地方示例另查<a href=\"https://laws.gov.taipei/law/LawSearch/LawArticleContent/FL038239\" target=\"_blank\" rel=\"noopener noreferrer\">《臺北市敬老悠遊卡及愛心悠遊卡補助辦法》第 2–6 條</a>及<a href=\"https://dosw.gov.taipei/cp.aspx?n=98EA840859DF5D7F\" target=\"_blank\" rel=\"noopener noreferrer\">臺北市政府社會局申辦與使用說明</a>，限持證者及必要陪伴者的資格、窗口及乘車優惠。",
      "additionalSources": [
        {
          "id": "taiwan-assistive-device-subsidies",
          "section": "第 2–4、6、9–10、13、16–17 條與正式附表的第 94–100 項溝通輔具，限自閉症對象、補助條件、評估與請領程序。"
        },
        {
          "id": "new-taipei-autism-family-services",
          "section": "第陸、柒節，限明列自閉症的家庭照顧者支持服務示例。"
        }
      ],
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "0–17 歲為兒少照顧者閱讀分組。各項福利按實際年齡與資格核定。",
      "reviewChecked": "2026-11-25",
      "reviewScope": "核對明列自閉症的地方計畫和輔具附表，並查依法領證的 ASD 兒少適用之中央法規及主管機關公告。限已查項目、期間、資格及窗口。地方愛心卡以臺北市自治規則及社會局公告為例。",
      "sections": [
        {
          "heading": "家庭照顧者支持與臨時照顧",
          "paragraphs": [
            "交通票價和健保門診基本部分負擔可依身分適用。生活補助、輔具與臨時照顧則還要看家戶條件、輔具評估或地方服務資格。",
            "新北市 115 年度照顧者支持計畫明列自閉症，對象包含實際住在新北且已領證者的家庭，提供關懷訪視、視需求安排的社工個案管理及支持團體。地方另有臨時及短期照顧，可由服務員到家或在據點短時間接手。服務依需求評估與地方資格辦理，已使用長照喘息或同時段照顧服務的情況有使用限制。向公所或社會局處詢問。<a href=\"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0050186\" target=\"_blank\" rel=\"noopener noreferrer\">家庭照顧者服務辦法第 8–9 條</a>"
          ],
          "sourceNotes": [
            {
              "id": "ntpc-respite-autistic-families",
              "section": "新北市 2026–2027 年計畫，限自閉症者臨時及短期照顧。",
              "text": "新北市的臨時及短期照顧計畫列有自閉症者。想知道家裡臨時需要有人接手時能不能用，可先向社會局確認需求評估、有服務的時段及承辦單位。"
            }
          ]
        },
        {
          "heading": "溝通輔具補助",
          "paragraphs": [
            "合適的圖卡或設備、語音溝通器等可能有補助。補助基準明列自閉症，但仍要符合各品項的溝通需求、評估及居住條件。例如附表第 94 項圖卡或設備的最高補助基準為 5,000 元，第 95 項低階語音溝通器為 7,000 元。一般戶原則按該項上限的五成計算，實際金額依核定。向戶籍地輔具中心或公所確認品項並送件，收到核定後再購買。<a href=\"https://law.moj.gov.tw/LawClass/LawGetFile.ashx?FileId=0000326887&amp;lan=C\" target=\"_blank\" rel=\"noopener noreferrer\">輔具補助基準表</a>",
            "如果孩子需要用圖卡或語音溝通器表達需求，輔具補助基準有明列自閉症的項目。家庭需要照顧人手時，可以分別查臨時及短期照顧、社工個案管理和家長支持團體。",
            "例如，孩子平常用圖片表達需求，家長想了解能否補助一種溝通器。可以把孩子在哪些場合很難表達、目前用哪些方式記下來，向戶籍地輔具中心確認評估、申請及購買順序。"
          ]
        },
        {
          "heading": "健保門診部分負擔與每月健保費",
          "paragraphs": [
            "持證者在健保特約院所看門診，基本部分負擔按診所層級收 50 元。掛號費、藥品部分負擔或自費項目各按規定。三歲以下參加健保的孩子另有就醫部分負擔補助。孩子本人的健保自付保費依障礙程度補助，輕度四分之一、中度二分之一、重度及極重度全額。保費減免可查投保單位帳單或問健保署。<a href=\"https://www.nhi.gov.tw/ch/cp-5163-9803c-2737-1.html\" target=\"_blank\" rel=\"noopener noreferrer\">健保署門診費用說明</a> · <a href=\"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0050090\" target=\"_blank\" rel=\"noopener noreferrer\">自付保費補助辦法</a> · <a href=\"https://www.nhi.gov.tw/ch/cp-5158-91a83-2737-1.html\" target=\"_blank\" rel=\"noopener noreferrer\">三歲以下兒童等免部分負擔說明</a>"
          ]
        },
        {
          "heading": "搭車、愛心卡與場館門票",
          "paragraphs": [
            "持身障證明搭乘國內大眾運輸可享半價，例如臺鐵、高鐵或客運，這項優待沒有戶籍限制。經需求評估認定需要陪伴者，可有一名必要陪伴者享同樣優惠。搭車時帶著孩子的證明供查驗。<a href=\"https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0050046&amp;flno=58\" target=\"_blank\" rel=\"noopener noreferrer\">身障權益保障法第 58 條</a> · <a href=\"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0050052\" target=\"_blank\" rel=\"noopener noreferrer\">大眾運輸優待辦法</a>",
            "<strong>愛心卡。</strong>孩子領證後，可向戶籍地公所或縣市社會局處詢問地方社福卡。各地卡名、點數、適用路線及應備文件依當地公告。以臺北市為例，設籍並實際居住臺北市的持證孩子，可向市內任一區公所申請。自 2026 年 7 月起，符合資格的愛心卡每月有 600 點，每點可折抵 1 元，可用於指定公車、捷運等。<a href=\"https://dosw.gov.taipei/cp.aspx?n=98EA840859DF5D7F\" target=\"_blank\" rel=\"noopener noreferrer\">臺北市愛心卡申辦與使用說明</a> · <a href=\"#article/county-disability-transit-cards\">查全臺 22 縣市愛心卡額度</a>",
            "<strong>愛心陪伴卡。</strong>查看孩子證明背面的「必要陪伴者優惠措施」欄位。若有「國內大眾運輸工具」註記，可向公所詢問能否一併申辦。陪同孩子乘車時，限一名必要陪伴者依運具規定使用。孩子還在免票年齡時，可先向營運單位確認陪伴者如何刷卡或購票。",
            "<strong>場館門票。</strong>依身障權益保障法，收費的公營或公設民營風景區、康樂場所及文教設施可免費，民營場所依該條適用範圍半價。經需求評估認定的一名必要陪伴者也可享同樣優待。購票時依營運單位查驗方式出示證明。<a href=\"https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0050046&amp;flno=59\" target=\"_blank\" rel=\"noopener noreferrer\">身障權益保障法第 59 條</a>"
          ]
        },
        {
          "heading": "身心障礙者生活補助",
          "paragraphs": [
            "持證後還要審查家戶收入、財產、居住及其他補助或安置情形。以新北市 115 年度公告為例，基本補助每月 4,049、5,437 或 9,485 元，依障礙程度與家戶資格而定。另有 115 年 1 月至 116 年 1 月的弱勢生活補助加發措施，多項加發資格從優擇一。可向戶籍地公所查孩子符合哪一級。<a href=\"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0050189\" target=\"_blank\" rel=\"noopener noreferrer\">生活補助費發給辦法</a> · <a href=\"https://welfare.ntpc.gov.tw/viewService/show/22180?actionName=list2&amp;fromOpa=1\" target=\"_blank\" rel=\"noopener noreferrer\">新北市金額與資格</a> · <a href=\"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0050216\" target=\"_blank\" rel=\"noopener noreferrer\">期間加發辦法</a>"
          ]
        },
        {
          "heading": "綜所稅與接送車輛牌照稅",
          "paragraphs": [
            "孩子領證且由家長列報扶養，115 年度綜所稅的身心障礙特別扣除額為每人 22.7 萬元，於 116 年 5 月申報，金額從所得中扣除。供孩子使用的家用車也可向車籍地稅捐機關查牌照稅減免，每位身障者限一輛，依車主關係、戶籍或車籍地址等條件審核，自用小客車的免稅額以 11,230 元為上限。專用停車位識別證另依行動不便需求評估核發。<a href=\"https://www.dot.gov.tw/singlehtml/ch26?cntId=cf5db69f558d42409aa56c70838e8802\" target=\"_blank\" rel=\"noopener noreferrer\">財政部 115 年度扣除額</a> · <a href=\"https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=G0340003&amp;flno=17\" target=\"_blank\" rel=\"noopener noreferrer\">所得稅法第 17 條</a> · <a href=\"https://www.etax.nat.gov.tw/etwmain/tax-info/understanding/tax-q-and-a/local/vehicle-license-tax/a3Y10l\" target=\"_blank\" rel=\"noopener noreferrer\">財政部牌照稅申辦說明</a>"
          ]
        },
        {
          "heading": "就學費用減免",
          "paragraphs": [
            "符合學籍及家庭年所得不超過 220 萬元等條件，持證學生可辦理就學費用減免。按障礙程度，輕度四成、中度七成、重度及極重度全額，實際可減免項目依學制及既有補助確認。僅持特教鑑定證明、尚未領身障證明的學生，也有準用輕度減免的規定。向學校註冊或承辦單位詢問。<a href=\"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0080043\" target=\"_blank\" rel=\"noopener noreferrer\">就學費用減免辦法第 2–4、6、11 條</a>"
          ]
        },
        {
          "heading": "申請福利時，可以先確認哪些資料？",
          "paragraphs": [
            "先記下孩子年齡、戶籍與實際住哪裡、證明是否已核發及有效期、最需要的服務。問承辦哪些條件可先確認、還在等鑑定時有哪些資源，以及是否要先核准才能購買或使用。",
            "照顧與早療等需求可以分別查詢適用的資源。學前孩子有早療需求時，可先向早療聯評或通報轉介窗口問現有資料能申請哪些服務。<a href=\"#article/early-intervention-first-steps\">查看早療評估與轉介</a>。"
          ],
          "taiwanEvidence": [
            "2026 年 11 月 25 日查核臺灣現行規定。新北市照顧服務及生活補助、臺北市愛心卡為地方示例。家庭照顧服務、輔具及部分減免需個別申請或評估。",
            "孩子是否符合各項資格，由承辦依有效的證明、需求評估、年齡、戶籍或居住地、家戶條件和當期公告核對。"
          ]
        }
      ],
      "relatedArticles": [
        "disability-certificate-and-insurance",
        "county-disability-transit-cards"
      ],
      "resource": {
        "group": "benefits",
        "interests": [
          "benefit-lookup",
          "caregiver"
        ],
        "audience": "已持證或想了解持證資源的家庭",
        "contact": "戶籍地公所或社會局處，個別福利依文中窗口查詢",
        "officialSources": [
          "taiwan-disability-rights-act",
          "taiwan-assistive-device-subsidies"
        ]
      },
      "updatedAt": "2026-11-26"
    },
    {
      "id": "county-disability-transit-cards",
      "category": "caregiver",
      "title": "自閉症孩子的愛心卡有多少點？全臺 22 縣市額度",
      "ages": [
        "0–1 歲",
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 8,
      "summary": "查孩子戶籍地的愛心卡、博愛卡或關懷卡。逐縣市列出交通、農會或藥局等其他用途，以及愛心陪伴卡優惠和官方查詢入口。",
      "updatedAt": "2026-11-26",
      "related": "taiwan-disability-rights-act",
      "situations": [
        "local-support"
      ],
      "keywords": [
        "愛心卡",
        "愛心陪伴卡",
        "博愛卡",
        "關懷卡",
        "長青幸福卡",
        "社福卡",
        "交通補助",
        "交通點數",
        "縣市額度",
        "臺北",
        "臺中",
        "臺南",
        "臺東",
        "台北",
        "台中",
        "台南",
        "台東",
        "農會",
        "藥局",
        "社福點數",
        "掛號費",
        "運動中心",
        "非交通"
      ],
      "sourceSection": "第 58 條適用於符合資格的持證自閉症兒少及一名必要陪伴者。地方交通、其他用途與愛心陪伴卡的優惠由各縣市訂定，各列附承辦機關公告或官方查詢入口。",
      "additionalSources": [
        {
          "id": "taiwan-disability-assessment",
          "section": "以鑑定作業辦法及明列自閉症的附表核對適用對象。地方票卡以有效身心障礙證明及個別資格為準。"
        }
      ],
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "0–17 歲為家長閱讀分組。實際辦卡、免票年齡及陪伴方式依各地資格和運具規定。",
      "reviewChecked": "2026-11-25",
      "reviewScope": "依據自閉症兒少鑑定法源與持證者第 58 條優待，核對 22 縣市針對持證兒少的交通及其他用途、發放週期、共用額度、個別扣抵上限及必要陪伴者優惠。只摘記個別政府措施的事實及連結。",
      "sections": [
        {
          "heading": "先查孩子戶籍地",
          "paragraphs": [
            "自閉症孩子領到身障證明後，可依戶籍地規定辦理愛心卡。各縣市的交通與其他用途以 2026 年 11 月 25 日查核的規定為準，後續上路的項目另標日期。",
            "全國的身障乘車半價依身障證明適用。地方愛心卡還可能提供點數、指定路線免費或特定運具補助。<a href=\"https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=D0050046&amp;flno=58\" target=\"_blank\" rel=\"noopener noreferrer\">身障權益保障法第 58 條</a>",
            "點數若由交通和其他用途共用，農會、藥局或掛號費的個別上限也從這筆點數扣抵。部分卡片可用自己儲值的金額付款。出門前可查運具、特約店家及場館的年齡規定。",
            "「愛陪卡」一欄整理一名必要陪伴者可享的票價或門票優惠。縣市名稱旁的點數額度是孩子的卡片額度。"
          ]
        },
        {
          "heading": "北部",
          "paragraphs": [
            "<span class=\"county-entry\"><strong class=\"county-name\">基隆市</strong><span class=\"county-benefit\"><strong>交通</strong><span>市區公車免費，搭乘次數不限。當地稱為關懷卡。持卡刷乘行駛基隆市區路線的公車，依規定展期。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>市府公布的關懷卡優待以市區公車為主，所查公告未列非交通補助。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>關懷陪伴卡同行搭乘市區公車半價。</span></span><span class=\"county-links\"><a href=\"https://www.klcg.gov.tw/tw/klcg1/4143-280928.html\" target=\"_blank\" rel=\"noopener noreferrer\">基隆市關懷卡申請</a> · <a href=\"https://exlaw.klcg.gov.tw/LawContent.aspx?id=GL000607\" target=\"_blank\" rel=\"noopener noreferrer\">基隆市公車優待辦法</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">臺北市</strong><span class=\"county-budget\">每月 600 點</span><span class=\"county-benefit\"><strong>交通</strong><span>愛心悠遊卡（一）可折抵指定公車、捷運、臺鐵和敬老愛心計程車等。須設籍且實際住在臺北市。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>兒少的一般愛心悠遊卡點數用於交通。市府公布的醫療、部分場館與溫泉折抵，適用於完成敬老資格註記的愛心卡。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>同行搭乘臺北捷運享單程票 4 折，適用的聯營公車及臺鐵半價。愛心陪伴卡沒有社福點數。</span></span><span class=\"county-links\"><a href=\"https://dosw.gov.taipei/cp.aspx?n=98EA840859DF5D7F\" target=\"_blank\" rel=\"noopener noreferrer\">臺北市愛心卡申辦</a> · <a href=\"https://laws.gov.taipei/law/LawSearch/LawArticleContent/FL038239\" target=\"_blank\" rel=\"noopener noreferrer\">臺北市補助辦法</a> · <a href=\"https://www.metro.taipei/cp.aspx?n=CEF54168B23F73B4&amp;s=9C19A1790ED1E5B4\" target=\"_blank\" rel=\"noopener noreferrer\">臺北捷運票價</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">新北市</strong><span class=\"county-budget\">每月 600 點</span><span class=\"county-benefit\"><strong>交通</strong><span>愛心悠遊卡可折抵指定公車、捷運、臺鐵和特約計程車等。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>從同一筆 600 點扣抵。指定國民運動中心的非公益時段入場、租場或課程，每項次最多 50 點。新北市立聯合醫院兩院區及 29 區衛生所的門診掛號費，每次最多 50 點。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>同行搭乘可用電子票證的國內大眾運輸享半價，搭臺北捷運可享單程票 4 折。</span></span><span class=\"county-links\"><a href=\"https://lkk.ntpc.gov.tw/new/home.jsp?id=aa967983e02a861f\" target=\"_blank\" rel=\"noopener noreferrer\">新北市愛心卡申辦</a> · <a href=\"https://service.ntpc.gov.tw/eservice/CaseData.action?itemId=110026\" target=\"_blank\" rel=\"noopener noreferrer\">新北市運動與掛號費規則</a> · <a href=\"https://www.metro.taipei/cp.aspx?n=CEF54168B23F73B4&amp;s=9C19A1790ED1E5B4\" target=\"_blank\" rel=\"noopener noreferrer\">臺北捷運票價</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">桃園市</strong><span class=\"county-budget\">每月 800 點，復興區 1,000 點</span><span class=\"county-benefit\"><strong>交通</strong><span>看孩子的戶籍。實體愛心卡可折抵指定公車、機場捷運、臺鐵和特約計程車等。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>可用同一筆月點數折抵指定運動中心、場地租借和市立游泳池費用。持卡也有指定風景區免門票，例如小烏來風景特區，依場館公告。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>持桃園市愛心陪伴卡同行，指定公車及客運半價，桃園機場捷運享單程票 3.5 折。</span></span><span class=\"county-links\"><a href=\"https://typass.tycg.gov.tw/citizen-card-intro/view?id=03\" target=\"_blank\" rel=\"noopener noreferrer\">桃園市愛心卡申辦</a> · <a href=\"https://typass.tycg.gov.tw/citizen-card-intro/view?id=08\" target=\"_blank\" rel=\"noopener noreferrer\">桃園市愛心陪伴卡</a> · <a href=\"https://www.tymetro.com.tw/tymetro-new/tw/_pages/service/FAQ.php?page=1&amp;v=27\" target=\"_blank\" rel=\"noopener noreferrer\">桃園捷運票價</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">新竹市</strong><span class=\"county-budget\">每月 1,200 點</span><span class=\"county-benefit\"><strong>交通</strong><span>可折抵指定公車、國道客運、臺鐵和特約計程車等。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>新竹市農會及合作藥局，<strong>每月各最多 300 點</strong>，兩項都從同一筆 1,200 點扣抵。藥局可買指定商品，處方藥和酒類除外。指定運動中心游泳池每次補助 50 點、健身房每小時 25 點、場地租借每小時 100 點，使用前請確認場館年齡規定。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>同行搭乘適用公車、臺鐵或捷運享乘車優待，市區公車半價。</span></span><span class=\"county-links\"><a href=\"https://dg-srv.hccg.gov.tw/serviceNotice.do?id=18&amp;rule=guest\" target=\"_blank\" rel=\"noopener noreferrer\">新竹市愛心卡申辦</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">新竹縣</strong><span class=\"county-budget\">每月 1,000 點</span><span class=\"county-benefit\"><strong>交通</strong><span>可折抵指定客運、臺鐵、特約計程車和符合條件的長照交通接送。縣府自 2026 年 10 月調為 1,000 點，部分申辦頁仍顯示舊額度。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>現可折抵指定國民運動中心費用。縣府公告預定 2026 年 12 月 1 日起，指定農會和合作藥局每月各最多 200 點，合作院所門診費用每次可折 50 點，均從同一筆 1,000 點扣抵。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>同行搭乘適用的國內大眾運輸享半價。</span></span><span class=\"county-links\"><a href=\"https://www.hsinchu.gov.tw/News_Content.aspx?n=153&amp;s=311026&amp;sms=8603\" target=\"_blank\" rel=\"noopener noreferrer\">新竹縣點數調整</a> · <a href=\"https://longcare.hsinchu.gov.tw/News_Content.aspx?n=3651&amp;s=311777\" target=\"_blank\" rel=\"noopener noreferrer\">新竹縣愛心卡申辦</a> · <a href=\"https://longcare.hsinchu.gov.tw/News_Video_Content.aspx?n=3552&amp;s=350572\" target=\"_blank\" rel=\"noopener noreferrer\">新竹縣後續開放公告</a> · <a href=\"https://www.hsinchu.gov.tw/News.aspx?_CSN=7&amp;n=2570&amp;sms=10073\" target=\"_blank\" rel=\"noopener noreferrer\">新竹縣愛陪卡優惠</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">宜蘭縣</strong><span class=\"county-benefit\"><strong>交通</strong><span>指定縣內公車免費。以社會福利智慧卡的愛心卡乘車。跨縣市使用時，依運具的身障票價和刷卡規則辦理。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>所查官方愛心卡辦法列的是乘車優待，未列購物、就醫或場館點數。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>同行乘車可享半價，縣內市區公車的陪伴卡優惠票為 10 元。</span></span><span class=\"county-links\"><a href=\"https://yilan.e-land.gov.tw/News_Content.aspx?n=18705&amp;s=372390&amp;sms=16134\" target=\"_blank\" rel=\"noopener noreferrer\">宜蘭縣愛心卡申辦</a> · <a href=\"https://sntroot.e-land.gov.tw/News_Content.aspx?n=10124&amp;s=130386\" target=\"_blank\" rel=\"noopener noreferrer\">宜蘭縣免費乘車要點</a> · <a href=\"https://travel.yilan.gov.tw/zh-tw/local-transport/\" target=\"_blank\" rel=\"noopener noreferrer\">宜蘭縣公車票價</a></span></span>"
          ],
          "sourceNotes": [
            {
              "id": "ntpc-planned-transit-cards",
              "section": "2027 年新北市分階段愛心卡用途規劃。",
              "text": "新北市政府規劃在 2027 年分階段擴大愛心卡用途，包括部分交通與生活消費。這是未來規劃，各項何時開通及適用範圍，以之後的正式公告為準。"
            }
          ]
        },
        {
          "heading": "中部",
          "paragraphs": [
            "<span class=\"county-entry\"><strong class=\"county-name\">苗栗縣</strong><span class=\"county-budget\">每月 700 點</span><span class=\"county-benefit\"><strong>交通</strong><span>敬老愛心卡可折抵簽約客運、臺鐵和特約計程車等，部分用途有各自的上限。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>從同一筆 700 點扣抵。自 2026 年 11 月 1 日起，指定農會小舖每月最多 300 點，每週最多 100 點。同月也有搭特約計程車時，可先看票卡餘額和縣府的折抵規則。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>同行搭乘適用的大眾運輸享半票。</span></span><span class=\"county-links\"><a href=\"https://www.miaoli.gov.tw/News_Content2.aspx?n=295&amp;s=404900\" target=\"_blank\" rel=\"noopener noreferrer\">苗栗縣敬老愛心卡</a> · <a href=\"https://www.tungshiau.gov.tw/News_Content.aspx?n=5784&amp;s=1010065&amp;sms=13115\" target=\"_blank\" rel=\"noopener noreferrer\">苗栗縣農會扣點調整</a> · <a href=\"https://www.miaoli.gov.tw/News_Content2.aspx?n=285&amp;s=424051\" target=\"_blank\" rel=\"noopener noreferrer\">苗栗縣愛陪卡優待</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">臺中市</strong><span class=\"county-budget\">每月 1,000 點，原住民方案 1,500 點</span><span class=\"county-benefit\"><strong>交通</strong><span>可折抵指定公車、客運、捷運、臺鐵和特約計程車等。原住民兒少的核發資格可向區公所確認。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>從同一筆月點數扣抵。到指定衛生所或合作診所就醫，健保門診基本部分負擔每次可折抵 50 點。指定國民運動中心及運動公園也可折抵泳池、體適能設施或場地費，依場館及年齡規定。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>同行搭乘適用的大眾運輸可享半價。愛心陪伴卡沒有社福點數。</span></span><span class=\"county-links\"><a href=\"https://www.society.taichung.gov.tw/461740/post\" target=\"_blank\" rel=\"noopener noreferrer\">臺中市身障愛心卡</a> · <a href=\"https://www.traffic.taichung.gov.tw/content/index.asp?Parser=1%2C7%2C496%2C495\" target=\"_blank\" rel=\"noopener noreferrer\">臺中市愛心陪伴卡優惠</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">彰化縣</strong><span class=\"county-budget\">每月 1,000 點</span><span class=\"county-benefit\"><strong>交通</strong><span>身障者可申辦長青幸福卡的愛心卡。可折抵簽約客運、臺鐵和特約計程車等。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>從同一筆 1,000 點扣抵。簽約農、漁會採買每月合計最多 200 點。合作診所的健保門診基本部分負擔一般每次 50 點，公告所列醫療資源缺乏地區為 40 點。指定國民運動中心游泳池單次補助 50 點、體適能中心單次 30 點。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>同行搭乘適用的公車、客運、捷運或臺鐵等大眾運輸享半價。</span></span><span class=\"county-links\"><a href=\"https://www.chcg.gov.tw/DTO/social/07other/other01_con.aspx?cate_id=7174&amp;data_id=25908&amp;topsn=715\" target=\"_blank\" rel=\"noopener noreferrer\">彰化縣長青幸福卡</a> · <a href=\"https://www.chcg.gov.tw/TSO/huatan/04bulletin/bulletin02_con.aspx?bull_id=438876\" target=\"_blank\" rel=\"noopener noreferrer\">彰化縣農漁會扣點公告</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">南投縣</strong><span class=\"county-budget\">每月 1,000 點</span><span class=\"county-benefit\"><strong>交通</strong><span>敬老愛心卡可折抵簽約客運、臺鐵和特約計程車等。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>縣府公布的現行用途以指定交通服務為主，未列農會、超商、就醫或場館的補助點數。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>同行搭乘縣府簽約客運及捷運半價，臺鐵依適用票價優待。</span></span><span class=\"county-links\"><a href=\"https://welfare.nantou.gov.tw/1486/1009\" target=\"_blank\" rel=\"noopener noreferrer\">南投縣敬老愛心卡</a> · <a href=\"https://www.nantou.gov.tw/big5/news_print.php?cid=75&amp;dptid=376480000&amp;id=168923\" target=\"_blank\" rel=\"noopener noreferrer\">南投縣現行額度</a> · <a href=\"https://glrs.nantou.gov.tw/LawContent.aspx?id=GL000640\" target=\"_blank\" rel=\"noopener noreferrer\">南投縣愛陪卡優惠要點</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">雲林縣</strong><span class=\"county-benefit\"><strong>交通</strong><span>簽約縣內客運免費，搭乘次數不限。敬老愛心卡按符合條件的車資補助，沒有每月固定點數上限。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>所查身障愛心卡規定以簽約路線乘車為主，未列身障兒少適用的購物或就醫補助。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>同行搭乘適用的大眾運輸享半價。愛心陪伴卡沒有另給社福點數。</span></span><span class=\"county-links\"><a href=\"https://www.mlvillage.gov.tw/df_ufiles/040/%E9%99%84%E4%BB%B6%E4%B8%89_%E9%9B%B2%E6%9E%97%E7%B8%A3%E6%95%AC%E8%80%81%E6%84%9B%E5%BF%83%E5%8D%A1%E5%AE%A3%E5%82%B3DM.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">雲林縣愛心卡申辦與搭乘說明</a> · <a href=\"https://social.yunlin.gov.tw/News_Content.aspx?n=8164&amp;s=410787\" target=\"_blank\" rel=\"noopener noreferrer\">雲林縣愛陪卡使用規則</a></span></span>"
          ]
        },
        {
          "heading": "南部",
          "paragraphs": [
            "<span class=\"county-entry\"><strong class=\"county-name\">嘉義市</strong><span class=\"county-budget\">每月 1,200 點</span><span class=\"county-benefit\"><strong>交通</strong><span>愛心乘車卡可折抵指定公車及臺鐵等，自 2026 年 8 月起也可折抵特約計程車車資。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>從同一筆 1,200 點扣抵。嘉義市國民運動中心的游泳池或體適能中心，非公益時段每次可折 30 點。公益時段可依場館規定持卡驗證入場，免扣點。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>同行搭乘適用的大眾運輸享半價。</span></span><span class=\"county-links\"><a href=\"https://www.cna.com.tw/postwrite/chi/433542\" target=\"_blank\" rel=\"noopener noreferrer\">嘉義市政府額度與申辦公告</a> · <a href=\"https://www.cna.com.tw/postwrite/Chi/441656\" target=\"_blank\" rel=\"noopener noreferrer\">嘉義市政府計程車優惠公告</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">嘉義縣</strong><span class=\"county-budget\">每月 1,000 點，阿里山鄉及大埔鄉 1,200 點</span><span class=\"county-benefit\"><strong>交通</strong><span>愛心卡可折抵指定公車、客運、幸福巴士或臺鐵等，依路線和車站規定使用。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>所查縣府愛心卡公告列的是乘車點數，未列運動中心、就醫或購物折抵。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>一名必要陪伴者同行搭乘國內大眾運輸，依法享半價。</span></span><span class=\"county-links\"><a href=\"https://mydata.nat.gov.tw/service/counter/CLI.1tVzkUMako\" target=\"_blank\" rel=\"noopener noreferrer\">嘉義縣愛心卡申辦</a> · <a href=\"https://www.cna.com.tw/postwrite/chi/347023\" target=\"_blank\" rel=\"noopener noreferrer\">嘉義縣政府額度公告</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">臺南市</strong><span class=\"county-benefit\"><strong>交通</strong><span>指定市內公車免費，搭乘次數不限。持市民卡愛心卡刷卡。2026 年公車公告所列的 111 路及雙層巴士除外。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>市民卡說明列有公立景點門票優惠，依各景點規定享優待或免票。這是出示卡片的票價優惠。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>同行搭乘適用市內公車、外縣市公車、捷運或輕軌等享半價。持卡到指定市立景點，也可依景點規定享半票或免費。</span></span><span class=\"county-links\"><a href=\"https://traffic.tainan.gov.tw/PTO/Announcement/trafficcontrolannouncement?PageType=1&amp;id=2d90c844-2215-42e9-94ad-0dfebcf46c7a&amp;pageIndex=11\" target=\"_blank\" rel=\"noopener noreferrer\">臺南市愛心卡乘車優惠</a> · <a href=\"https://sab.tainan.gov.tw/cp.aspx?Create=1&amp;n=21427\" target=\"_blank\" rel=\"noopener noreferrer\">臺南市愛心卡申辦</a> · <a href=\"https://civilcard.tainan.gov.tw/page.asp?orcaid=FCF472C5-17F7-41B9-A29A-B31407EB385C\" target=\"_blank\" rel=\"noopener noreferrer\">臺南市民卡門票優惠</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">高雄市</strong><span class=\"county-budget\">博愛卡每季 2,700 點</span><span class=\"county-benefit\"><strong>交通</strong><span>可折抵指定公車、渡輪、捷運、臺鐵和特約計程車等。自 2026 年 10 月起按季發給。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>從同一筆博愛卡季點數扣抵。指定醫療院所門診掛號費每次最多 50 點，高雄市電影館及內惟戲院電影票每次最多 50 點。特約銀髮健身俱樂部另依各據點服務對象及規則辦理。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>博愛陪伴卡同行搭乘適用的市內公車、渡輪或高雄捷運半價，高雄輕軌免費。</span></span><span class=\"county-links\"><a href=\"https://hsingsin.kcg.gov.tw/cp.aspx?n=E2909B89B7B176B3\" target=\"_blank\" rel=\"noopener noreferrer\">高雄市博愛卡各項扣點</a> · <a href=\"https://mtbu.kcg.gov.tw/FAQs/C004600?id=7473fc7e-d332-4c01-aef8-2ab77b70abd5&amp;pagetype=1\" target=\"_blank\" rel=\"noopener noreferrer\">高雄輕軌票價</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">屏東縣</strong><span class=\"county-budget\">博愛卡每月 1,000 點</span><span class=\"county-benefit\"><strong>交通</strong><span>可折抵指定公車、臺鐵、計程車和部分往返小琉球的交通船。舊卡若仍是 500 點，可到公所過卡更新。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>屏東市國民運動中心的指定項目可從博愛卡每月 1,000 點扣抵，入場資格與適用項目以場館公告為準。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>博愛陪伴卡同行搭乘適用的大眾運輸享半價。</span></span><span class=\"county-links\"><a href=\"https://www.pthg.gov.tw/planjdp/cp.aspx?n=1EDF47490238B419\" target=\"_blank\" rel=\"noopener noreferrer\">屏東縣博愛卡申辦</a></span></span>"
          ]
        },
        {
          "heading": "東部",
          "paragraphs": [
            "<span class=\"county-entry\"><strong class=\"county-name\">花蓮縣</strong><span class=\"county-benefit\"><strong>交通</strong><span>臺鐵每月最高 1,000 元，特約計程車每月最高 1,500 點。兩種運具各有額度。臺鐵補助縣境內路段。特約計程車每趟補助車資七成。指定客運的花蓮縣內路段另可免費搭乘。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>縣府列有持卡的入園優惠，例如遠雄海洋公園及新光兆豐休閒農場。持花蓮愛心卡並帶身分證明、身障證明可依公告免費入園，出發前可向園區核對當期規定。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>同行搭乘適用的大眾運輸享半價。</span></span><span class=\"county-links\"><a href=\"https://sa.hl.gov.tw/Detail_sp/4257cd2ac3d64f259b7b27c1b6d93de5\" target=\"_blank\" rel=\"noopener noreferrer\">花蓮縣愛心卡及車資補助</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">臺東縣</strong><span class=\"county-budget\">博愛卡每月 1,500 點</span><span class=\"county-benefit\"><strong>交通</strong><span>以臺東卡的博愛卡乘車，可用於指定縣內公車、愛心計程車及符合條件的臺鐵車種，依各運具的扣點限制辦理。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>博愛卡可在接受一卡通的特約商店使用自行儲值的金額。縣府每月 1,500 點是交通補助。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>博愛陪伴卡同行搭乘適用的大眾運輸享半價。陪伴卡沒有社福點數。</span></span><span class=\"county-links\"><a href=\"https://www.taitungcity.gov.tw/article/%E3%80%90%E8%80%81%E4%BA%BA%E3%80%81%E8%BA%AB%E9%9A%9C%E7%A6%8F%E5%88%A9%E3%80%91%E5%8F%B0%E6%9D%B1%E5%8D%A1(%E6%95%AC%E8%80%81%E5%8D%A1%E3%80%81%E5%8D%9A%E6%84%9B%E5%8D%A1%E5%8F%8A%E9%99%AA%E4%BC%B4%E5%8D%A1)\" target=\"_blank\" rel=\"noopener noreferrer\">臺東縣博愛卡申辦</a></span></span>"
          ]
        },
        {
          "heading": "離島",
          "paragraphs": [
            "<span class=\"county-entry\"><strong class=\"county-name\">澎湖縣</strong><span class=\"county-benefit\"><strong>交通</strong><span>愛心卡乘車優惠，官方未列固定月額。澎湖 iPASS 愛心卡適用公告所列運具的優待。設籍澎湖的孩子另可查縣民 TPASS 公車或車船方案，由縣府補助月票。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>iPASS 愛心卡可用自行儲值的金額支付指定通路小額消費，也可依收費單位規定用於景點或行政規費。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>同行搭乘適用的公車、客運、捷運或臺鐵享半價。</span></span><span class=\"county-links\"><a href=\"https://www.penghu.gov.tw/society/home.jsp?act=view&amp;dataserno=201606080001&amp;id=247\" target=\"_blank\" rel=\"noopener noreferrer\">澎湖縣愛心卡申辦</a> · <a href=\"https://penghu.tpass.tw/notice-citizen\" target=\"_blank\" rel=\"noopener noreferrer\">澎湖縣民 TPASS</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">金門縣</strong><span class=\"county-benefit\"><strong>交通</strong><span>縣民卡可搭指定縣內公車免費，官方未列固定月額。愛心卡屬實體縣民卡。與必要陪伴者一起使用優惠時，依縣府說明使用兩張實體卡刷卡。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>實體縣民卡可用於圖書借閱，先向圖書館辦理開通。持卡也可依店家規定使用縣民卡特約優惠，官方未另列愛心卡購物點數。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>同行可依縣府票價規定享車船半價優惠。</span></span><span class=\"county-links\"><a href=\"https://www.kinmen.gov.tw/kmcard/cp.aspx?n=461C44FEA65C6DC8\" target=\"_blank\" rel=\"noopener noreferrer\">金門縣愛心卡申辦</a> · <a href=\"https://www.kinmen.gov.tw/kmcard/cp.aspx?n=9302AD93AAD536B4\" target=\"_blank\" rel=\"noopener noreferrer\">金門縣民卡使用問答</a> · <a href=\"https://kmtd.kinmen.gov.tw/News_Content.aspx?Create=1&amp;n=CE79EFB4EF1F256C&amp;s=0688CF796622D509&amp;sms=A2C62D68901B977C\" target=\"_blank\" rel=\"noopener noreferrer\">金門縣民搭車優惠</a> · <a href=\"https://www.kinmen.gov.tw/kmcard/\" target=\"_blank\" rel=\"noopener noreferrer\">金門縣民卡功能與特約優惠</a></span></span>",
            "<span class=\"county-entry\"><strong class=\"county-name\">連江縣</strong><span class=\"county-benefit\"><strong>交通</strong><span>縣民卡搭縣內公車免費，官方未列固定月額。愛心卡是連江縣民卡的一種。搭船時查該航線的票價及縣民海運補助規則。</span></span><span class=\"county-benefit\"><strong>其他</strong><span>縣民卡含電子錢包功能，可依票證規定自行儲值付款。所查公告未列愛心卡非交通補助點數。</span></span><span class=\"county-benefit\"><strong>愛陪卡</strong><span>持縣民愛心陪伴卡搭縣內公車免費。同行搭乘南竿至北竿交通船可享優待票。</span></span><span class=\"county-links\"><a href=\"https://www.matsu.gov.tw/chhtml/content/371050000A0001MC/6073\" target=\"_blank\" rel=\"noopener noreferrer\">連江縣縣民卡申辦</a> · <a href=\"https://www.thb.gov.tw/News_Content_Table.aspx?n=10738&amp;s=212598\" target=\"_blank\" rel=\"noopener noreferrer\">公路局縣民乘車說明</a> · <a href=\"https://www.matsu.gov.tw/chhtml/content/371050000A0001MC/1948\" target=\"_blank\" rel=\"noopener noreferrer\">連江縣愛心卡功能</a> · <a href=\"https://www.matsu.gov.tw/chhtml/content/371050000A0001MC/1953\" target=\"_blank\" rel=\"noopener noreferrer\">連江縣車船優惠</a></span></span>"
          ]
        },
        {
          "heading": "要陪孩子一起搭車，先確認什麼？",
          "paragraphs": [
            "如果孩子常需要大人陪同搭車去學校、早療或回診，先看身障證明背面的「必要陪伴者優惠措施」是否有「國內大眾運輸工具」註記，再問公所如何一併申辦陪伴卡。陪伴卡通常要和孩子的卡搭配使用。孩子屬免票年齡時，可先問營運單位怎麼刷卡或購票。",
            "申辦前先向各縣市窗口確認，未領身分證的孩子可準備哪種身分文件，以及由監護人代辦需要哪些證件。"
          ]
        }
      ],
      "relatedArticles": [
        "disability-certificate-available-services"
      ],
      "resource": {
        "group": "benefits",
        "interests": [
          "benefit-lookup"
        ],
        "audience": "想查愛心卡、博愛卡或陪伴卡的家庭",
        "contact": "孩子戶籍地的公所或社會局處",
        "officialSources": [
          "taiwan-disability-rights-act"
        ],
        "countyJump": true
      }
    },
    {
      "id": "reassess-support-or-disability-certificate",
      "category": "caregiver",
      "title": "孩子的需求變了，特教支持或身障證明可以重評嗎？",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "可以向各自的窗口問。先確認你想調整的是在校支持、證明效期，還是福利服務的內容。",
      "related": "taiwan-special-education-assessment",
      "situations": [
        "local-support",
        "school",
        "changes"
      ],
      "keywords": [
        "特教重新評估",
        "身障重鑑",
        "證明效期",
        "轉銜",
        "需求改變",
        "鑑輔會",
        "IEP"
      ],
      "sourceSection": "第 23、25 條，限特教重新評估的申請與佐證。",
      "additionalSources": [
        {
          "id": "taiwan-disability-rights-act",
          "section": "第 14、15 條，限有效期、重鑑與等待期間的註記安排。"
        },
        {
          "id": "taiwan-disability-assessment",
          "section": "第 10 條，限因障礙情況改變而提出的申請。"
        }
      ],
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "2–17 歲是學前至高中轉銜情境，身障重鑑以證明及個別情況為準。",
      "reviewChecked": "2026-11-24",
      "reviewScope": "指定的 ASD 研究或適用法規，搭配原創家長提問與情境示例。",
      "sections": [
        {
          "heading": "先把需要調整的事分開記",
          "paragraphs": [
            "孩子升學、換到新環境，或原先支持已不合用。你想知道什麼時候能重評，需要帶哪些變化。 孩子可能學會以文字求助，但新學校的大組環境讓他更需要安靜空間。具體變化能幫園校和社政分別判斷接下來該調整哪一項。",
            "在校支持先找園校特教承辦，以現有 IEP 和近期例子談調整。若安置或教育需求已改變，依程序向園校或主管機關提出重評。",
            "例如，升國中後，孩子的學習表現穩定，但更換教室的次數變多。家庭先和學校調整路線支持，另按證明上的日期向公所問重鑑。"
          ],
          "sourceNotes": [
            {
              "id": "moe-autism-educational-assessment-manual",
              "section": "自閉症教育鑑定章，限跨學段複查教育需求的說明。",
              "text": "教育部特教鑑定手冊提醒，跨教育階段時可以重新檢視自閉症學生目前的支持需求。換了學段而卡住的地方不同，可以先把原來仍有用的安排和新遇到的問題分開帶進討論。"
            }
          ]
        },
        {
          "heading": "有身障證明就確認有效日與窗口",
          "paragraphs": [
            "有效期證明原則上可依規定於屆滿前九十日內向戶籍地主管機關申請重新鑑定及需求評估。若障礙情況改變，向承辦確認重鑑和所需資料。"
          ]
        },
        {
          "heading": "問清等待期間如何銜接",
          "paragraphs": [
            "請園校說明哪些既有支持先怎麼做。若原身障證明可能在等候期間到期，詢問主管機關是否適用暫續權益的註記及須完成的程序。",
            "拿出上次 IEP、手上的證明或相關文件，圈出支持項目、聯絡窗口及日期。",
            "若兩邊同時補件，可各自記下缺件、已送資料與下一次聯絡時間。"
          ],
          "taiwanEvidence": [
            "特教重新評估原則上在跨教育階段進行，也可因個別需求改變等原因申請。身障證明另有到期、重鑑與註記規定。",
            "同一時間的特教、身障證明及各福利方案可能有不同期限，請各自核對書面結果。"
          ]
        }
      ],
      "relatedArticles": [
        "disability-certificate-available-services"
      ],
      "resource": {
        "group": "assessment",
        "interests": [
          "special-education",
          "disability-certificate",
          "school"
        ],
        "audience": "孩子的在校支持或持證需求有變動的家庭",
        "contact": "園校特教承辦或戶籍地公所",
        "officialSources": [
          "taiwan-special-education-assessment",
          "taiwan-disability-rights-act"
        ]
      },
      "updatedAt": "2026-11-26"
    },
    {
      "id": "disability-certificate-and-insurance",
      "category": "caregiver",
      "title": "擔心買不到保險，要因此放棄申請身障證明嗎？",
      "ages": [
        "0–1 歲",
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "暫不申請身障證明，不能保證比較好投保。對已有自閉症診斷或就醫紀錄的孩子，要保書問到的事項仍要據實回答。如果孩子現在需要的服務以領證為條件，延後申請也會延後取得那些支持的機會。",
      "related": "taiwan-insurance-underwriting",
      "situations": [
        "local-support"
      ],
      "keywords": [
        "身心障礙證明",
        "身障手冊",
        "商業保險",
        "核保",
        "拒保",
        "健康告知",
        "新投保",
        "加保",
        "保單",
        "身障資格",
        "先不辦",
        "放棄",
        "買不到保險"
      ],
      "sourceSection": "第 7 條第 1 項第 11 款。訂約的健康告知另參考 <a href=\"https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=G0390002&amp;flno=64\" target=\"_blank\" rel=\"noopener noreferrer\">《保險法》第 64 條</a>。 要保書把領證和健康問項分開，見<a href=\"https://law.fsc.gov.tw/LawContent.aspx?id=FL006767\" target=\"_blank\" rel=\"noopener noreferrer\">金管會《人身保險要保書示範內容及注意事項》第二、四點</a>。 拒絕受理或協助送件的申訴管道，見<a href=\"https://www.ey.gov.tw/Page/88F151FFCE5C741E/296bf31e-f0ef-4eed-8d0e-67a399eee315\" target=\"_blank\" rel=\"noopener noreferrer\">金管會的身心障礙者投保權益說明</a>。 投保諮詢窗口參考<a href=\"https://www.lia-roc.org.tw/list_article?article_content=513\" target=\"_blank\" rel=\"noopener noreferrer\">壽險公會金融友善服務問答第 8 題</a>。",
      "additionalSources": [
        {
          "id": "taiwan-ombudsman-autism-insurance",
          "section": "2020 年調查報告第 55、62 頁的自閉症投保案例及其個案性質。申訴程序另見 <a href=\"https://www.foi.org.tw/Article.aspx?Arti=358&amp;Lang=1&amp;lv=3\" target=\"_blank\" rel=\"noopener noreferrer\">金融消費評議中心</a>。 正式未承保的書面理由，見<a href=\"https://law.lia-roc.org.tw/Law/Article?lawno=4&amp;lsid=FL006807\" target=\"_blank\" rel=\"noopener noreferrer\">壽險公會公布的《保險業承保身心障礙者處理原則》第四點</a>。"
        },
        {
          "id": "new-taipei-autism-family-services",
          "section": "115 年度計畫第陸、柒節，限居住、領證條件及明列自閉症的照顧者支持服務。"
        },
        {
          "id": "taiwan-disability-rights-act",
          "section": "第 50、51、58、71 條，限照顧支持、交通及輔具。健保門診基本部分負擔另見<a href=\"https://www.nhi.gov.tw/ch/cp-5163-9803c-2737-1.html\" target=\"_blank\" rel=\"noopener noreferrer\">健保署門診費用說明</a>。"
        },
        {
          "id": "taiwan-assistive-device-subsidies",
          "section": "第 4、6 條與附表面對面溝通項目，限補助資格。"
        }
      ],
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "0–17 歲是照顧者閱讀分組，個別商品的投保年齡按保單規定。",
      "reviewChecked": "2026-11-25",
      "reviewScope": "指定的 ASD 研究或適用法規，搭配原創家長提問與情境示例。",
      "summaryLink": {
        "articleId": "disability-certificate-available-services",
        "label": "查看身障福利清單"
      },
      "sections": [
        {
          "heading": "暫不領證，對投保有什麼影響？",
          "paragraphs": [
            "金管會的要保書範本把領證狀況和健康告知分開。若評估、診斷或就醫紀錄落在要保書書面詢問的事項及期間內，即使尚未領證，仍應據實說明。可以向保險公司索取商品的要保書，確認實際問了什麼。"
          ],
          "taiwanEvidence": [
            "<strong>目前缺少直接比較。</strong>監察院 2020 年的調查記錄過自閉症孩子未領證，家長仍因孩子的就醫紀錄或診斷被口頭勸退。也有家長在業務員得知孩子已領證後被勸退。",
            "<strong>金管會規定。</strong>保險公司須依風險評估，不能僅因身心障礙身分給予不公平待遇。",
            "監察院的案例能說明家長遇過的情況，無法用來比較領證與未領證自閉症兒少的承保率，也無法估計領證會如何影響同一位孩子的核保結果。"
          ],
          "sourceNotes": [
            {
              "id": "lia-underwriting-disability-rules",
              "section": "公會公布的承保處理原則，限個別綜合核保。",
              "text": "壽險公會公布的處理原則要求公司依個別身心狀況及險種等條件綜合評估。只知道孩子有沒有領證，無法據此預估一個商品會不會承保。"
            }
          ]
        },
        {
          "heading": "延後申請，可能影響哪些支持？",
          "paragraphs": [
            "這個問題有兩個時間點：孩子現在可能就需要照顧支持，未來申請的保單則要等到正式核保才知道結果。若還沒查過孩子用得到的服務，單憑「以後可能買不到保險」這個顧慮，無法判斷放棄申請是否對孩子有利。",
            "照顧者支持只是其中一項。身障證明也和健保基本部分負擔、交通票價和溝通輔具補助有關。地方照顧服務可問公所或社會局處，輔具補助可先問戶籍地輔具中心。",
            "身障證明可連結日常的資源，例如國內大眾運輸優惠，或符合評估條件時申請溝通輔具及地方照顧支持。商業保險依保單約定給付。等候保險答覆時，也能先查孩子用得到的身障福利、資格與申請時程。",
            "例如，一個已有自閉症評估紀錄的孩子，家長想申請家庭照顧者支持，也想替孩子加保醫療險。若當地方案要求領證，暫不申請證明就暫時不能以持證者身分使用該方案。加保時，只要要保書問到範圍內的就醫或評估紀錄，家長仍須據實回答。這兩件事可以同時向各自的窗口確認。",
            "<strong>問社會局或公所</strong><br>「我們現在需要照顧者支持。哪一項服務需要先領證？等鑑定期間還能申請哪些協助？」"
          ]
        },
        {
          "heading": "已有保單與新投保，要確認什麼？",
          "paragraphs": [
            "既有保單的保障範圍可查原契約條款。若是想新投保、加保或變更保障，可以問保險公司是否需要重新核保。領證後仍可提出投保申請，結果依商品與個案評估。",
            "<strong>問保險公司</strong><br>「我想替孩子加保○○。請問要重新核保嗎？可以先給我要保書的書面問項嗎？」"
          ]
        },
        {
          "heading": "聽到業務員說「不能保」時",
          "paragraphs": [
            "<strong>還沒交申請資料。</strong>若業務員不協助送件，而家長仍想申請，可向保險公司客服確認這項商品是否有其他受理窗口。",
            "<strong>已把資料交給業務員。</strong>若只收到口頭回覆，可向保險公司查是否收到申請、是否已有核保結果。身心障礙者的案件經正式核保而未承保時，保險公司應書面通知理由。",
            "若業務員拒絕受理或協助送件，可向保險公司申訴。對申訴結果不服，或公司逾期未處理，可依規定向<a href=\"https://www.foi.org.tw/Article.aspx?Arti=358&amp;Lang=1&amp;lv=3\" target=\"_blank\" rel=\"noopener noreferrer\">金融消費評議中心</a>申請評議。"
          ]
        }
      ],
      "relatedArticles": [
        "what-disability-assessment-checks"
      ],
      "resource": {
        "group": "insurance",
        "interests": [
          "insurance-lookup"
        ],
        "audience": "正在考慮替自閉症孩子領證或投保的家庭",
        "contact": "保險公司客服、戶籍地公所或社會局處",
        "officialSources": [
          "taiwan-insurance-underwriting",
          "taiwan-ombudsman-autism-insurance"
        ]
      },
      "updatedAt": "2026-11-26"
    },
    {
      "id": "disability-certificate-and-school-label",
      "category": "school",
      "title": "怕孩子被貼標籤，辦身障證明或特教鑑定前可以先問什麼？",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "可以同時在意孩子能得到的支持和隱私。先問資料的用途、交給誰，以及孩子怎麼參與。",
      "related": "taiwan-special-education-act",
      "situations": [
        "school",
        "communication"
      ],
      "keywords": [
        "貼標籤",
        "身障證明",
        "特教鑑定",
        "校園",
        "保密",
        "個資",
        "孩子意見",
        "轉銜"
      ],
      "sourceSection": "第 10、11、20、31 條。處理健康資料亦參考 <a href=\"https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=I0050021\" target=\"_blank\" rel=\"noopener noreferrer\">《個人資料保護法》第 6、8 條</a>。",
      "additionalSources": [
        {
          "id": "liu-taiwan-youth-diagnosis",
          "section": "作者綜整臺灣青少年如何看待診斷與向學校求助。"
        },
        {
          "id": "ophir-school-disclosure",
          "section": "診斷揭露子主題包含正面與負面經驗。"
        },
        {
          "id": "ng-affiliate-stigma-family",
          "section": "學前家庭連帶污名的關聯研究，不能用來估計申請證明的影響。"
        }
      ],
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "2–17 歲可按年齡調整對話。臺灣訪談樣本為 14–18 歲。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "指定的 ASD 研究或適用法規，搭配原創家長提問與情境示例。",
      "sections": [
        {
          "heading": "孩子想要的支持和隱私，可以一起談嗎？",
          "list": {
            "items": [
              "申請身障證明、做特教鑑定及向老師或同學說明診斷，各有不同用途。孩子可能願意讓負責支持的老師知道，也想參與決定要不要向同儕說。",
              "把「會不會被貼標籤」變成可以確認的問題，例如需要交什麼、有哪些人會看、能不能先和孩子談，以及發生不當公開時誰會處理。"
            ]
          },
          "taiwanEvidence": [
            "Liu 等的臺灣青少年訪談中，有人用診斷理解自己、爭取支持。",
            "《特殊教育法》提供在校支持及學生參與表達意見的制度背景。"
          ],
          "evidence": [
            "Ophir 等回顧記錄了學生對偏見的顧慮及未經同意揭露的經驗。Ng 等的家長問卷可用於理解家庭污名顧慮，無法判定因果。這些研究與前面的臺灣訪談都未直接比較領證與未領證，資料用途和流向仍要向窗口確認。"
          ],
          "sourceNotes": [
            {
              "id": "control-yuan-autistic-student-school-access",
              "section": "監察院個案調查，只採校方拒絕及未妥善支持的事實。",
              "text": "監察院曾調查一名自閉症學生因校方聲稱資源不足而遭拒入學的個案，調查重點是學校如何處理支持需求。家長可以具體追問學校拿到資料後，由誰安排需要的支持。"
            }
          ]
        },
        {
          "heading": "送資料或和園校談之前，可以怎麼問？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>先問受理窗口如何使用資料。</strong> 問蒐集目的、需要哪些內容、哪些角色能看、如何保管及轉銜。可向園校索取個資說明，請承辦解釋適用規定。",
              "<strong>用孩子熟悉的方式問他希望誰知道。</strong> 用話、文字或圖片談哪些事願意分享、想先請誰幫忙。也問學校在會議裡怎麼納入孩子的意見。",
              "<strong>把需要被理解的事說成具體支持。</strong> 例如請班級老師先知道孩子用哪張圖卡、哪裡能安靜休息，再請承辦說明完整報告如何依用途處理。另約定遇到取笑或不當公開，誰處理、何時通知家長。"
            ]
          }
        }
      ],
      "relatedArticles": [
        "sharing-autism-information-at-school"
      ],
      "updatedAt": "2026-11-26"
    },
    {
      "id": "sharing-autism-information-at-school",
      "category": "school",
      "title": "想讓老師懂自閉症孩子的需要，哪些事要說、哪些可以保留？",
      "ages": [
        "2–5 歲",
        "6–8 歲",
        "9–12 歲",
        "13–17 歲"
      ],
      "time": 5,
      "summary": "從眼前需要調整的情境開始。和孩子一起決定對老師、同儕分別要分享哪些資訊。",
      "related": "ophir-school-disclosure",
      "situations": [
        "school",
        "communication",
        "changes"
      ],
      "keywords": [
        "告訴老師",
        "自閉症揭露",
        "學校",
        "同儕",
        "貼標籤",
        "隱私",
        "孩子同意",
        "親師合作"
      ],
      "sourceSection": "Results 的 Disclosure of Autism Diagnosis，限作者對教師與學生觀點的綜整。",
      "additionalSources": [
        {
          "id": "liu-taiwan-youth-diagnosis",
          "section": "臺灣青少年的自我理解與向教育端求助。"
        },
        {
          "id": "taiwan-special-education-act",
          "section": "第 11、31 條的學生意見及 IEP 參與。"
        }
      ],
      "status": "trial",
      "ageBasis": "editorial-context",
      "ageNote": "2–17 歲為親師溝通閱讀分組，向同儕分享的研究以學齡情境為主。",
      "reviewChecked": "2026-11-26",
      "reviewScope": "指定的 ASD 研究或適用法規，搭配原創家長提問與情境示例。",
      "sections": [
        {
          "heading": "老師、同儕和孩子，各需要知道什麼？",
          "list": {
            "items": [
              "眼前需要調整的情境、孩子常用的表達和已有效的安排，可以先和負責支持的老師談。需要哪些正式文件，再請承辦依用途說明。",
              "對同儕分享前，先聽孩子希望誰知道、想達成什麼、要自己說或請誰協助。孩子的想法可以隨時間和情境調整。"
            ]
          },
          "taiwanEvidence": [
            "Liu 等訪談的臺灣青少年會依對象選擇如何分享。",
            "《特殊教育法》說明學生參與表達意見與個別化支持的制度背景，實際分享安排依孩子與園校的情境討論。"
          ],
          "evidence": [
            "Ophir 等的質性回顧記錄，有些學生認為分享能減少誤解或爭取支持，也有人顧慮排擠、經歷未經同意的揭露。 這些資料以學齡經驗為主。與學前孩子談時，可從簡單選項開始。"
          ]
        },
        {
          "heading": "怎麼跟孩子和老師約好分享範圍？",
          "list": {
            "ordered": true,
            "items": [
              "<strong>選一個孩子想改善的情境。</strong> 例如孩子上課需要戴耳罩，先一起想要讓導師知道哪些不舒服、什麼支持有用。",
              "<strong>和孩子約定怎麼回應同學。</strong> 例如孩子願意讓導師說「每個人舒服的環境不同」，但想先保留診斷。也可以和老師約好，遇到追問時怎麼代孩子結束話題。",
              "<strong>確認這次只和哪些人分享，再約個時間問孩子。</strong> 留意孩子覺得安心的程度、願意向誰求助，或想改哪句話，再跟老師一起調整。"
            ]
          },
          "sourceNotes": [
            {
              "id": "nas-autistic-disclosure-note",
              "section": "何時與他人談診斷，限較大孩子與家長分別決定告知對象。",
              "text": "英國 National Autistic Society 建議，和年紀較大的孩子逐一討論想告訴誰。孩子也許願意讓導師知道，對同學則想再等一等，兩種意願可以分開尊重。"
            }
          ]
        }
      ],
      "relatedArticles": [
        "disability-certificate-and-school-label"
      ],
      "updatedAt": "2026-11-26"
    }
  ],
  "withdrawnArticles": [
    {
      "id": "local",
      "title": "認識台灣兒童發展資源"
    },
    {
      "id": "find-evaluation-center",
      "title": "收到轉介後，怎麼找兒童發展聯合評估中心"
    },
    {
      "id": "find-caregiver-support",
      "title": "照顧快撐不住時，先找一個支援窗口"
    },
    {
      "id": "bedtime-phone",
      "title": "睡前還在刷影片，怎麼一起把手機收尾"
    },
    {
      "id": "game-chat",
      "title": "線上遊戲有人加好友，怎麼練習求助"
    },
    {
      "id": "voice-changing",
      "title": "男孩進入變聲期，怎麼說明聲音的變化"
    },
    {
      "id": "gender-expression",
      "title": "有人說「男生不能穿這個」，怎麼和孩子聊"
    }
  ],
  "resourceGroups": [
    {
      "id": "assessment",
      "label": "評估與申請",
      "icon": "check",
      "color": "blue"
    },
    {
      "id": "benefits",
      "label": "補助與生活優惠",
      "icon": "hands",
      "color": "mint"
    },
    {
      "id": "insurance",
      "label": "領證與投保",
      "icon": "lock",
      "color": "sand"
    }
  ]
};
