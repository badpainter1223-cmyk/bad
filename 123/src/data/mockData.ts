import { PlatformData, SocialAdData, VideoData, PressReleaseData, ShortVideoData, MedicalEventData } from '../types';

export const platformData: PlatformData[] = [
  // 2024 Data - Added default values for new fields
  { month: '2024-01', website_users: 240994, website_interactions: 304754, youtube: 4578, facebook_followers: 10467, line: 10158, facebook_impressions: 0, facebook_reach: 0, facebook_interactions: 0, instagram_followers: 520, instagram_impressions: 0, instagram_reach: 0, instagram_interactions: 0 },
  { month: '2024-02', website_users: 234355, website_interactions: 295963, youtube: 4728, facebook_followers: 10477, line: 10139, facebook_impressions: 0, facebook_reach: 0, facebook_interactions: 0, instagram_followers: 550, instagram_impressions: 0, instagram_reach: 0, instagram_interactions: 0 },
  { month: '2024-03', website_users: 376488, website_interactions: 446239, youtube: 4867, facebook_followers: 10515, line: 10170, facebook_impressions: 0, facebook_reach: 0, facebook_interactions: 0, instagram_followers: 585, instagram_impressions: 0, instagram_reach: 0, instagram_interactions: 0 },
  { month: '2024-04', website_users: 346002, website_interactions: 448654, youtube: 5001, facebook_followers: 10579, line: 10158, facebook_impressions: 0, facebook_reach: 0, facebook_interactions: 0, instagram_followers: 620, instagram_impressions: 0, instagram_reach: 0, instagram_interactions: 0 },
  { month: '2024-05', website_users: 415027, website_interactions: 500202, youtube: 5158, facebook_followers: 11000, line: 10279, facebook_impressions: 0, facebook_reach: 0, facebook_interactions: 0, instagram_followers: 655, instagram_impressions: 0, instagram_reach: 0, instagram_interactions: 0 },
  { month: '2024-06', website_users: 400319, website_interactions: 484771, youtube: 5315, facebook_followers: 10884, line: 10305, facebook_impressions: 0, facebook_reach: 0, facebook_interactions: 0, instagram_followers: 690, instagram_impressions: 0, instagram_reach: 0, instagram_interactions: 0 },
  { month: '2024-07', website_users: 413945, website_interactions: 509612, youtube: 5438, facebook_followers: 11342, line: 10405, facebook_impressions: 0, facebook_reach: 0, facebook_interactions: 0, instagram_followers: 725, instagram_impressions: 0, instagram_reach: 0, instagram_interactions: 0 },
  { month: '2024-08', website_users: 425578, website_interactions: 536822, youtube: 5548, facebook_followers: 11396, line: 10461, facebook_impressions: 0, facebook_reach: 0, facebook_interactions: 0, instagram_followers: 760, instagram_impressions: 0, instagram_reach: 0, instagram_interactions: 0 },
  { month: '2024-09', website_users: 430055, website_interactions: 521780, youtube: 5724, facebook_followers: 11451, line: 10524, facebook_impressions: 0, facebook_reach: 0, facebook_interactions: 0, instagram_followers: 795, instagram_impressions: 0, instagram_reach: 0, instagram_interactions: 0 },
  { month: '2024-10', website_users: 507463, website_interactions: 622740, youtube: 5863, facebook_followers: 11524, line: 10627, facebook_impressions: 0, facebook_reach: 0, facebook_interactions: 0, instagram_followers: 830, instagram_impressions: 0, instagram_reach: 0, instagram_interactions: 0 },
  { month: '2024-11', website_users: 445562, website_interactions: 570116, youtube: 6028, facebook_followers: 11686, line: 10641, facebook_impressions: 0, facebook_reach: 0, facebook_interactions: 0, instagram_followers: 865, instagram_impressions: 0, instagram_reach: 0, instagram_interactions: 0 },
  { month: '2024-12', website_users: 444442, website_interactions: 581131, youtube: 6187, facebook_followers: 12090, line: 10702, facebook_impressions: 0, facebook_reach: 0, facebook_interactions: 0, instagram_followers: 900, instagram_impressions: 0, instagram_reach: 0, instagram_interactions: 0 },
  
  // 2025 Data with new metrics
  { month: '2025-01', website_users: 404425, website_interactions: 513600, youtube: 6326, facebook_followers: 12657, line: 11021, facebook_impressions: 0, facebook_reach: 0, facebook_interactions: 0, instagram_followers: 915, instagram_impressions: 0, instagram_reach: 0, instagram_interactions: 0 },
  { month: '2025-02', website_users: 428431, website_interactions: 529738, youtube: 6462, facebook_followers: 12967, line: 11054, facebook_impressions: 260000, facebook_reach: 128000, facebook_interactions: 7364, instagram_followers: 931, instagram_impressions: 9720, instagram_reach: 2559, instagram_interactions: 264 },
  { month: '2025-03', website_users: 504388, website_interactions: 634504, youtube: 6625, facebook_followers: 13210, line: 11073, facebook_impressions: 305000, facebook_reach: 144000, facebook_interactions: 6446, instagram_followers: 1005, instagram_impressions: 11000, instagram_reach: 2202, instagram_interactions: 605 },
  { month: '2025-04', website_users: 463346, website_interactions: 600153, youtube: 6819, facebook_followers: 13390, line: 11059, facebook_impressions: 329000, facebook_reach: 145000, facebook_interactions: 4781, instagram_followers: 1044, instagram_impressions: 13000, instagram_reach: 2041, instagram_interactions: 530 },
  { month: '2025-05', website_users: 434702, website_interactions: 568744, youtube: 6970, facebook_followers: 13474, line: 11263, facebook_impressions: 174000, facebook_reach: 55000, facebook_interactions: 6325, instagram_followers: 1060, instagram_impressions: 14000, instagram_reach: 2908, instagram_interactions: 617 },
  { month: '2025-06', website_users: 371159, website_interactions: 436697, youtube: 7270, facebook_followers: 13583, line: 11351, facebook_impressions: 333000, facebook_reach: 118000, facebook_interactions: 1874, instagram_followers: 1063, instagram_impressions: 15000, instagram_reach: 1923, instagram_interactions: 128 },
  { month: '2025-07', website_users: 344462, website_interactions: 453371, youtube: 7450, facebook_followers: 14191, line: 11375, facebook_impressions: 500000, facebook_reach: 159000, facebook_interactions: 10000, instagram_followers: 1074, instagram_impressions: 23000, instagram_reach: 2170, instagram_interactions: 221 },
];

export const socialAdData: SocialAdData[] = [
  { id: 1, campaignName: '骨科(鍾玉軒醫師)脊椎微創手術廣告', startDate: '2024-05-01', endDate: '2024-05-30', reach: 25339, clicks: 4553, landingPageVisits: 22, conversions: 4, cost: 3021 },
  { id: 2, campaignName: '大腸直腸外科(邱錫雄醫師)痔瘡廣告 (4月)', startDate: '2024-04-01', endDate: '2024-04-07', reach: 16952, clicks: 545, landingPageVisits: 8, conversions: 2, cost: 1000 },
  { id: 3, campaignName: '大腸直腸外科(邱錫雄醫師)痔瘡廣告 (8月)', startDate: '2024-08-05', endDate: '2024-08-27', reach: 42834, clicks: 1117, landingPageVisits: 79, conversions: 17, cost: 3403 },
  { id: 4, campaignName: '胸腔內外科肺癌預防LDCT廣告', startDate: '2024-06-20', endDate: '2024-07-20', reach: 30511, clicks: 3318, landingPageVisits: 16, conversions: 6, cost: 3000 },
  { id: 5, campaignName: '耳鼻喉科(林奐宇醫師)鼻中膈彎曲廣告', startDate: '2024-06-01', endDate: '2024-06-30', reach: 35383, clicks: 553, landingPageVisits: 122, conversions: 8, cost: 2744 },
  { id: 6, campaignName: '整形外科(呂明川醫師)靜脈曲張廣告', startDate: '2024-09-02', endDate: '2024-10-01', reach: 24790, clicks: 836, landingPageVisits: 55, conversions: 4, cost: 3000 },
  { id: 7, campaignName: '泌尿外科軟式輸尿管鏡廣告', startDate: '2024-11-06', endDate: '2024-11-25', reach: 17836, clicks: 1315, landingPageVisits: 2, conversions: 0, cost: 2085 },
  { id: 8, campaignName: '耳鼻喉科(林奐宇醫師)呼吸中止症廣告', startDate: '2024-11-12', endDate: '2024-11-15', reach: 13543, clicks: 707, landingPageVisits: 41, conversions: 4, cost: 1067 },
  { id: 9, campaignName: '泌尿科達文西影片_呂謹亨醫師', startDate: '2025-03-27', endDate: '2025-04-02', reach: 42838, clicks: 11, landingPageVisits: 0, conversions: 0, cost: 499 },
  { id: 10, campaignName: '婦產科講座_温醫師、黃醫師', startDate: '2025-04-01', endDate: '2025-04-13', reach: 39869, clicks: 1839, landingPageVisits: 483, conversions: 52, cost: 2931 },
  { id: 11, campaignName: '腸外科發炎性腸道疾病_陳周誠醫師', startDate: '2025-04-10', endDate: '2025-04-16', reach: 11832, clicks: 2345, landingPageVisits: 0, conversions: 0, cost: 491 },
  { id: 12, campaignName: '骨科講座_魏伯翰醫師', startDate: '2025-04-19', endDate: '2025-05-02', reach: 27931, clicks: 1070, landingPageVisits: 566, conversions: 70, cost: 2611 },
  { id: 13, campaignName: '兒科主動脈弓縮窄新聞_何季麟醫師', startDate: '2025-04-22', endDate: '2025-04-27', reach: 11450, clicks: 222, landingPageVisits: 219, conversions: 19, cost: 494 },
  { id: 14, campaignName: '胸外科達文西淋巴癌新聞_賴重佑部長', startDate: '2025-05-06', endDate: '2025-05-11', reach: 18715, clicks: 1915, landingPageVisits: 114, conversions: 24, cost: 998 },
  { id: 15, campaignName: '骨科腕隧道症候群_魏醫師', startDate: '2025-05-26', endDate: '2025-06-10', reach: 41012, clicks: 1420, landingPageVisits: 449, conversions: 60, cost: 2998 },
  { id: 16, campaignName: '胸內科菸槍肺癌新聞_劉旭崇醫師', startDate: '2025-06-01', endDate: '2025-06-15', reach: 18021, clicks: 1255, landingPageVisits: 0, conversions: 0, cost: 1032 },
  { id: 17, campaignName: '泌尿科-攝護腺癌_周聖峰醫師', startDate: '2025-06-09', endDate: '2025-06-19', reach: 13461, clicks: 402, landingPageVisits: 179, conversions: 12, cost: 995 },
  { id: 18, campaignName: '大腸癌廣告_陳周誠醫師', startDate: '2025-06-12', endDate: '2025-07-01', reach: 39560, clicks: 2243, landingPageVisits: 320, conversions: 41, cost: 3634 },
  { id: 19, campaignName: '胸外科達文西肋骨固定新聞_杜承哲醫師', startDate: '2025-06-17', endDate: '2025-06-27', reach: 15355, clicks: 463, landingPageVisits: 281, conversions: 20, cost: 998 },
  { id: 20, campaignName: '整外科狐臭手術_呂明川醫師', startDate: '2025-06-22', endDate: '2025-07-02', reach: 12796, clicks: 512, landingPageVisits: 89, conversions: 10, cost: 999 },
  { id: 21, campaignName: '大腸直腸科_新聞_陳周誠醫師', startDate: '2025-06-27', endDate: '2025-07-07', reach: 18536, clicks: 584, landingPageVisits: 232, conversions: 24, cost: 996 },
  { id: 22, campaignName: '婦科術式推廣(子宮脫垂)_温醫師', startDate: '2025-06-30', endDate: '2025-07-14', reach: 37367, clicks: 2406, landingPageVisits: 0, conversions: 0, cost: 2798 },
  { id: 23, campaignName: '胸腔科肺癌免疫治療講座_劉杜鎮醫師', startDate: '2025-07-02', endDate: '2025-07-20', reach: 45147, clicks: 1078, landingPageVisits: 120, conversions: 16, cost: 3423 },
  { id: 24, campaignName: '泌尿科講座_周聖峰醫師', startDate: '2025-07-08', endDate: '2025-07-23', reach: 37652, clicks: 1178, landingPageVisits: 484, conversions: 29, cost: 2998 },
  { id: 25, campaignName: '泌尿外科_達文西新聞_呂謹亨醫師', startDate: '2025-07-13', endDate: '2025-07-23', reach: 16586, clicks: 420, landingPageVisits: 75, conversions: 9, cost: 997 },
  { id: 26, campaignName: '婦科新聞_子宮脫垂_温亭虹醫師', startDate: '2025-08-04', endDate: '2025-08-14', reach: 14462, clicks: 1389, landingPageVisits: 163, conversions: 25, cost: 998 },
  { id: 27, campaignName: '一般外科新聞_疝氣達文西_孫賢斌醫師', startDate: '2025-08-07', endDate: '2025-08-17', reach: 15751, clicks: 432, landingPageVisits: 261, conversions: 28, cost: 998 },
];

export const videoData: VideoData[] = [
  { id: 1, date: '2025-07-21', title: '「肚子鼓一包」別拖！疝氣拖延竟恐腸壞死？醫師解析疝氣治療、手術！', department: '一般外科', doctor: '顧永隆', views: 327, likes: 7 },
  { id: 2, date: '2025-07-02', title: '腳常腫、癢、走不遠？當心你已經靜脈曲張了！醫師推薦復發率最低的治療方法', department: '整形外科', doctor: '呂明川', views: 242, likes: 8 },
  { id: 3, date: '2025-06-25', title: '原來鼻塞會毀臉型、害你睡不好？醫師揭鼻中膈彎曲的影響', department: '耳鼻喉科', doctor: '賴俊毓', views: 346, likes: 5 },
  { id: 4, date: '2025-06-18', title: '這樣治療大腸癌？5年存活率從4.9%升到15.3%！', department: '大腸直腸外科', doctor: '陳周誠', views: 643, likes: 24 },
  { id: 5, date: '2025-06-11', title: '大腸癌前兆出現在馬桶裡？醫師教你從便便型態看警訊！大腸癌如何治療？', department: '大腸直腸外科', doctor: '陳周誠', views: 2020, likes: 34 },
  { id: 6, date: '2025-05-21', title: '胃食道逆流怎麼辦？症狀、原因、改善方法一次看', department: '胃腸肝膽科', doctor: '張安迪', views: 262, likes: 5 },
  { id: 7, date: '2025-04-23', title: '總是腰痠、頻尿？可能是子宮脫垂！', department: '婦產科', doctor: '温亭虹', views: 865, likes: 3 },
  { id: 8, date: '2025-04-09', title: '腹瀉、腹痛、血便？年輕人當心發炎性腸道疾病（IBD）', department: '大腸直腸外科', doctor: '陳周誠', views: 560, likes: 22 },
  { id: 9, date: '2025-03-26', title: '泌尿外科達文西手術納入健保，6大疾病受惠！', department: '泌尿外科', doctor: '呂謹亨', views: 650, likes: 7 },
  { id: 10, date: '2025-03-19', title: 'PSA指數飆高怎麼辦？小心攝護腺癌早期警訊！', department: '泌尿外科', doctor: '周聖峰', views: 2266, likes: 24 },
  { id: 11, date: '2025-02-27', title: '打鼾、缺氧、半夜驚醒！恐是「睡眠呼吸中止症」', department: '耳鼻喉科', doctor: '林奐宇', views: 743, likes: 7 },
  { id: 12, date: '2025-02-13', title: '如何早期發現攝護腺癌？50歲以上男性必做這些檢查！', department: '泌尿外科', doctor: '周聖峰', views: 1383, likes: 9 },
  { id: 13, date: '2025-01-21', title: '睡不好又打呼❗小心睡眠呼吸中止症｜達文西手術治療解決睡眠困擾', department: '耳鼻喉科', doctor: '林奐宇', views: 3699, likes: 18 },
  { id: 14, date: '2024-12-26', title: '肺癌手術怎麼選?達文西納健保降低手術風險', department: '胸腔外科', doctor: '杜承哲', views: 1582, likes: 26 },
  { id: 15, date: '2024-12-12', title: '達文西手臂手術是什麼？擴增46項納健保!', department: '外科部', doctor: '賴重佑', views: 3424, likes: 30 },
  { id: 16, date: '2024-11-15', title: '甲狀腺有腫塊，我該怎麼辦？', department: '耳鼻喉科', doctor: '林奐宇', views: 2573, likes: 12 },
  { id: 17, date: '2024-11-06', title: '胃鏡縮胃減重手術！術後隔天返回工作崗位', department: '胃腸肝膽科', doctor: '張安迪', views: 956, likes: 10 },
  { id: 18, date: '2024-10-16', title: '不戒菸二度心肌梗塞險喪命 救護人員與醫院聯手串起生命之鏈_急診室', department: '急診室', doctor: 'N/A', views: 240, likes: 5 },
  { id: 19, date: '2024-10-08', title: '泌尿道結石預防與治療', department: '泌尿外科', doctor: '江冠忠', views: 259, likes: 3 },
  { id: 20, date: '2024-09-24', title: '狐臭、汗臭如何分辨?微創旋轉刀永久消除狐臭', department: '整形外科', doctor: '呂明川', views: 537, likes: 3 },
  { id: 21, date: '2024-09-13', title: '腎結石常見錯誤迷思！腎結石手術該怎麼選？', department: '泌尿外科', doctor: '周聖峰', views: 2454, likes: 11 },
  { id: 22, date: '2024-08-19', title: '脊椎病變雙腳麻痛難行 微創內視鏡減壓手術新選擇_骨科鍾玉軒醫師', department: '骨科', doctor: '鍾玉軒', views: 9326, likes: 92 },
  { id: 23, date: '2024-08-13', title: '如何避免幼兒意外傷害', department: '兒科', doctor: '蕭昌泓', views: 268, likes: 1 },
  { id: 24, date: '2024-07-16', title: '澄清堅強骨科陣容 給您健康好「骨」力_骨科', department: '骨科', doctor: 'N/A', views: 1228, likes: 10 },
  { id: 25, date: '2024-07-09', title: '什麼是安寧緩和醫療?', department: '家庭醫學科', doctor: '林彥廷', views: 3977, likes: 29 },
  { id: 26, date: '2024-06-25', title: '幼兒口腔保健', department: '兒科', doctor: '黃元韻', views: 224, likes: 6 },
  { id: 27, date: '2024-06-18', title: '子宮肌瘤手術怎麼選？微創3D腹腔鏡 立體影像輔助更精準', department: '婦產科', doctor: '謝保群', views: 5300, likes: 45 },
  { id: 28, date: '2024-06-11', title: '子宮肌瘤、內膜異位會自己消失嗎?飲食禁忌有哪些？', department: '婦產科', doctor: '謝保群', views: 3639, likes: 38 },
  { id: 29, date: '2024-05-14', title: '脊椎滑脫壓迫神經 脊椎微創手術效果佳', department: '骨科', doctor: '鍾玉軒', views: 11000, likes: 131 },
  { id: 30, date: '2024-04-24', title: '做完靜脈曲張手術會復發嗎？如何才能完整治療？', department: '整形外科', doctor: '呂明川', views: 3383, likes: 15 },
  { id: 31, date: '2024-04-17', title: '我有腕隧道症候群嗎? 如何自我檢測?', department: '骨科', doctor: '魏伯翰', views: 9197, likes: 26 },
  { id: 32, date: '2024-03-28', title: '肺癌精準治療 3D影像單孔胸腔鏡手術', department: '胸腔外科', doctor: '杜承哲', views: 2250, likes: 11 },
  { id: 33, date: '2024-03-19', title: '肋骨骨折了！ 如何復原與治療？', department: '胸腔外科', doctor: '杜承哲', views: 10000, likes: 108 },
  { id: 34, date: '2024-02-14', title: '肝癌不可怕？肝癌患者如何保持身體健康！？_胃腸科黃仁杰醫師', department: '胃腸科', doctor: '黃仁杰', views: 687, likes: 22 },
  { id: 35, date: '2024-01-24', title: '椎間盤突出怎麼辦?微創脊椎內視鏡手術一天就出院！', department: '骨科', doctor: '鍾玉軒', views: 15000, likes: 165 },
  { id: 36, date: '2024-01-09', title: '突發耳聾怎麼辦？PRP治療提高聽力恢復的機會', department: '耳鼻喉科', doctor: '徐毓婷', views: 5129, likes: 53 }
];

export const shortVideoData: ShortVideoData[] = [
  { id: 1, date: '2025-08-18', title: '心臟病年輕化?早期不能忽略的求救警訊', department: '心臟血管內科', doctor: '孫德光醫師', shorts_views: 427, shorts_likes: 2, reels_views: 219, reels_likes: 2, reels_shares: 0 },
  { id: 2, date: '2025-08-11', title: '眼睛、嘴巴、皮膚都很乾？小心不是缺水，乾燥症是免疫系統出問題！', department: '免疫風濕科', doctor: '孟家駒醫師', shorts_views: 1145, shorts_likes: 15, reels_views: 828, reels_likes: 22, reels_shares: 6 },
  { id: 3, date: '2025-08-04', title: '為何男人比女人更容易心肌梗塞？', department: '心臟血管內科', doctor: '孫德光醫師', shorts_views: 1327, shorts_likes: 13, reels_views: 518, reels_likes: 12, reels_shares: 1 },
  { id: 4, date: '2025-07-23', title: '大腸癌正在年輕化！小心這些大腸癌的警訊', department: '大腸直腸外科', doctor: '陳周誠醫師', shorts_views: 2582, shorts_likes: 26, reels_views: 637, reels_likes: 18, reels_shares: 1 },
  { id: 5, date: '2025-07-22', title: '突然瘀青？出血？可能是「這些疾病」警訊！', department: '血液腫瘤科', doctor: '李宥丞醫師', shorts_views: 1457, shorts_likes: 14, reels_views: 562, reels_likes: 11, reels_shares: 2 },
  { id: 6, date: '2025-06-17', title: '上班族和學生，為什麼容易確診新冠肺炎?', department: '胸腔內科', doctor: '謝佳珍醫師', shorts_views: 672, shorts_likes: 10, reels_views: 600, reels_likes: 16, reels_shares: 1 },
  { id: 7, date: '2025-05-08', title: '鼻功能整形一次搞定鼻塞、塌鼻！', department: '耳鼻喉科', doctor: '賴俊毓醫師', shorts_views: 2138, shorts_likes: 12, reels_views: 2274, reels_likes: 14, reels_shares: 15 },
  { id: 8, date: '2025-04-11', title: '自我檢測心血管健康🚦心肌梗塞', department: '心臟血管內科', doctor: '劉昱成醫師', shorts_views: 15360, shorts_likes: 121, reels_views: 764, reels_likes: 7, reels_shares: 4 },
  { id: 9, date: '2025-03-27', title: '看達文西機械手臂縫葡萄，就知道手術傷口縫合多細緻！', department: '耳鼻喉科', doctor: '林奐宇醫師', shorts_views: 10694, shorts_likes: 121, reels_views: 1124, reels_likes: 20, reels_shares: 0 },
  { id: 10, date: '2025-03-11', title: '女性 #漏尿 困擾不尷尬💡改善有方法', department: '婦產科', doctor: '温亭虹醫師', shorts_views: 1802, shorts_likes: 18, reels_views: 661, reels_likes: 11, reels_shares: 2 },
  { id: 11, date: '2025-02-20', title: '#肺阻塞 年奪5千命！「咳痰喘」別輕忽！', department: '胸腔內科', doctor: '謝佳珍醫師', shorts_views: 3218, shorts_likes: 58, reels_views: 870, reels_likes: 21, reels_shares: 5 },
  { id: 12, date: '2025-02-11', title: '#大腸癌 發生率這麼高！秒懂治療方式', department: '大腸直腸外科', doctor: '陳周誠醫師', shorts_views: 2541, shorts_likes: 47, reels_views: 1103, reels_likes: 13, reels_shares: 10 },
  { id: 13, date: '2025-01-08', title: '達文西手術能有多精細，挑戰摺紙鶴給你看❗', department: '胸腔外科', doctor: '杜承哲醫師', shorts_views: 4517, shorts_likes: 77, reels_views: 4517, reels_likes: 61, reels_shares: 20 },
  { id: 14, date: '2024-12-19', title: '#打呼、睡不飽！😴 可能是 #睡眠呼吸中止症 在作怪⁉️', department: '耳鼻喉科', doctor: '林奐宇醫師', shorts_views: 669, shorts_likes: 8, reels_views: 468, reels_likes: 8, reels_shares: 3 },
  { id: 15, date: '2024-12-05', title: '#達文西手術 納入 #健保給付 大大減輕負擔🙌補助費用大公開❗️', department: '胸腔外科', doctor: '賴重佑醫師', shorts_views: 3284, shorts_likes: 48, reels_views: 777, reels_likes: 11, reels_shares: 0 },
  { id: 16, date: '2024-11-05', title: '輕易擊碎 #結石 原因大公開！#軟式輸尿管鏡碎石術 沒有傷口', department: '泌尿外科', doctor: '周聖峰醫師', shorts_views: 0, shorts_likes: 0, reels_views: 599, reels_likes: 7, reels_shares: 2 },
  { id: 17, date: '2024-09-20', title: '「#經痛」就只能吃止痛藥嗎❓', department: '婦產科', doctor: '黃兆麒醫師', shorts_views: 0, shorts_likes: 0, reels_views: 661, reels_likes: 3, reels_shares: 7 },
  { id: 18, date: '2024-09-18', title: '為什麼會 #經痛 ❓', department: '婦產科', doctor: '黃兆麒醫師', shorts_views: 0, shorts_likes: 0, reels_views: 999, reels_likes: 12, reels_shares: 7 },
  { id: 19, date: '2024-09-09', title: 'B肝C肝真的不可怕！怕的是沒有好好跟醫師配合治療！', department: '胃腸肝膽科', doctor: '黃仁杰醫師', shorts_views: 0, shorts_likes: 0, reels_views: 362, reels_likes: 4, reels_shares: 0 },
  { id: 20, date: '2024-08-23', title: '「你篩了嗎？」B、C型肝炎篩檢 45-79歲免費', department: '胃腸肝膽科', doctor: '黃仁杰醫師', shorts_views: 0, shorts_likes: 0, reels_views: 544, reels_likes: 5, reels_shares: 0 },
  { id: 21, date: '2024-09-05', title: '#低劑量電腦斷層可以發現早期肺癌！', department: '胸腔外科', doctor: '杜承哲醫師', shorts_views: 0, shorts_likes: 0, reels_views: 1218, reels_likes: 13, reels_shares: 3 },
  { id: 22, date: '2024-08-01', title: '夏天要當心「結石」！？', department: '泌尿科', doctor: '周聖峰醫師', shorts_views: 0, shorts_likes: 0, reels_views: 622, reels_likes: 7, reels_shares: 9 },
  { id: 23, date: '2024-07-26', title: '過敏可以改善預防嗎❓', department: '免疫風濕科', doctor: '孟家駒醫師', shorts_views: 0, shorts_likes: 0, reels_views: 597, reels_likes: 5, reels_shares: 1 },
  { id: 24, date: '2024-06-11', title: '脊椎微創手術與傳統手術的差異', department: '骨科', doctor: '鍾玉軒醫師', shorts_views: 2620, shorts_likes: 36, reels_views: 686, reels_likes: 12, reels_shares: 1 },
  { id: 25, date: '2024-06-11', title: '脊椎盤突出一定要開刀嗎？', department: '骨科', doctor: '鍾玉軒醫師', shorts_views: 469, shorts_likes: 6, reels_views: 795, reels_likes: 12, reels_shares: 1 },
  { id: 26, date: '2024-06-12', title: '你知道膝蓋退化是可以預防的嗎❓', department: '骨科', doctor: '王稚暉醫師', shorts_views: 0, shorts_likes: 0, reels_views: 592, reels_likes: 8, reels_shares: 3 },
  { id: 27, date: '2024-05-21', title: '少做這兩個NG傷膝蓋動作❗️', department: '骨科', doctor: '王稚暉醫師', shorts_views: 0, shorts_likes: 0, reels_views: 1527, reels_likes: 13, reels_shares: 17 },
];

export const medicalEventData: MedicalEventData[] = [
  { 
    id: 1, 
    date: '2024-03-26', 
    theme: '脊椎退化了？', 
    speaker: '骨科 鍾玉軒醫師', 
    registered: 69, 
    attended: 59,
    sources: [
      { name: '親友推薦', percentage: 37 }, 
      { name: '官網', percentage: 17 }, 
      { name: '粉絲團', percentage: 17 },
      { name: 'LINE@', percentage: 15 },
      { name: '社區', percentage: 14 }
    ],
    audience: [
      { name: '醫師病患', percentage: 2 },
      { name: '醫院病患', percentage: 58 },
      { name: '非病患', percentage: 40 }
    ]
  },
  { 
    id: 2, 
    date: '2024-09-25', 
    theme: '久咳不癒！難道是肺癌…', 
    speaker: '胸腔外科 杜承哲醫師ft.篩檢個管', 
    registered: 64, 
    attended: 32,
    sources: [
      { name: '官網', percentage: 23 }, 
      { name: '粉絲團', percentage: 54 },
      { name: '社區', percentage: 23 }
    ],
    audience: [
      { name: '醫師病患', percentage: 3 },
      { name: '醫院病患', percentage: 58 },
      { name: '非病患', percentage: 39 }
    ]
  },
  { 
    id: 3, 
    date: '2024-12-09', 
    theme: '打呼！鼾聲大作怎麼辦？', 
    speaker: '耳鼻喉科 林奐宇醫師', 
    registered: 65, 
    attended: 29,
    sources: [
      { name: '官網', percentage: 17 }, 
      { name: '粉絲團', percentage: 25 },
      { name: 'LINE@', percentage: 38 },
      { name: '社區', percentage: 20 }
    ],
    audience: [
      { name: '醫師病患', percentage: 5 },
      { name: '醫院病患', percentage: 77 },
      { name: '非病患', percentage: 18 }
    ]
  },
  { 
    id: 4, 
    date: '2025-04-16', 
    theme: '大腸癌防治', 
    speaker: '大腸直腸外科陳周誠醫師ft.營養師', 
    registered: 79, 
    attended: 56,
    sources: [
      { name: '官網', percentage: 17 }, 
      { name: '粉絲團', percentage: 8 },
      { name: 'LINE@', percentage: 27 },
      { name: '社區', percentage: 30 },
      { name: '醫師告知', percentage: 18 }
    ],
    audience: [
      { name: '醫師病患', percentage: 22 },
      { name: '醫院病患', percentage: 62 },
      { name: '非病患', percentage: 15 }
    ]
  },
  { 
    id: 5, 
    date: '2025-04-30', 
    theme: '婦女失禁與脫垂治療', 
    speaker: '婦科温醫師+婦科黃醫師', 
    registered: 60, 
    attended: 41,
    sources: [
      { name: '官網', percentage: 26 }, 
      { name: '粉絲團', percentage: 32 },
      { name: 'LINE@', percentage: 28 },
      { name: '社區', percentage: 14 }
    ],
    audience: [
      { name: '温醫師患者', percentage: 0 },
      { name: '黃醫師病患', percentage: 5 },
      { name: '醫院病患', percentage: 70 },
      { name: '非病患', percentage: 25 }
    ]
  },
  { 
    id: 6, 
    date: '2025-05-09', 
    theme: '手部疾病與微創治療', 
    speaker: '骨科魏伯翰醫師', 
    registered: 73, 
    attended: 44,
    sources: [
      { name: '官網', percentage: 13 }, 
      { name: '粉絲團', percentage: 27 },
      { name: 'LINE@', percentage: 37 },
      { name: '社區', percentage: 23 }
    ],
    audience: [
      { name: '醫師病患', percentage: 2 },
      { name: '醫院病患', percentage: 86 },
      { name: '非病患', percentage: 12 }
    ]
  },
  { 
    id: 7, 
    date: '2025-07-24', 
    theme: '肺癌防治與免疫治療', 
    speaker: '胸腔內科劉杜鎮醫師ft.篩檢個管', 
    registered: 70, 
    attended: 42,
    sources: [
      { name: '官網', percentage: 14 }, 
      { name: '粉絲團', percentage: 28 },
      { name: 'LINE@', percentage: 31 },
      { name: '社區', percentage: 27 }
    ],
    audience: [
      { name: '醫師病患', percentage: 13 },
      { name: '醫院病患', percentage: 67 },
      { name: '非病患', percentage: 20 }
    ]
  },
  { 
    id: 8, 
    date: '2025-07-29', 
    theme: '攝護腺癌預防治療', 
    speaker: '泌尿外科周聖峰醫師', 
    registered: 43, 
    attended: 29,
    sources: [
      { name: '官網', percentage: 46 }, 
      { name: '粉絲團', percentage: 32 },
      { name: 'LINE@', percentage: 14 },
      { name: '社區', percentage: 8 }
    ],
    audience: [
      { name: '醫師病患', percentage: 5 },
      { name: '醫院病患', percentage: 79 },
      { name: '非病患', percentage: 16 }
    ]
  },
];


export const pressReleaseData: PressReleaseData[] = [
  // 撰稿人_依璇
  { id: 1, author: '依璇', date: '2024-01-08', department: '耳鼻喉科', doctor: '林奐宇醫師', topic: '聲音沙啞喉嚨卡卡 63歲單身男竟罹患下咽癌四期', mediaCount: 13 },
  { id: 2, author: '依璇', date: '2024-04-01', department: '小兒科', doctor: '何季麟醫師', topic: '腸病毒來勢洶洶 醫示警4月恐有一波大流行', mediaCount: 7 },
  { id: 3, author: '依璇', date: '2025-02-03', department: '胸腔內科/家醫科', doctor: '惠群醫師, 廖彥惠醫師', topic: '口罩遮口鼻且要定期換！醫籲對抗流感4招：打疫苗最有效', mediaCount: 5 },
  
  // 撰稿人_吳建基
  { id: 4, author: '吳建基', date: '2024-01-23', department: '營養課', doctor: '營養師', topic: '天寒心暖 澄清醫院「健康龍乎力」', mediaCount: 1 },
  { id: 5, author: '吳建基', date: '2024-01-29', department: '心臟內科', doctor: '劉昱成醫師', topic: '激情喊「凍蒜」突心痛 45歲女差點生命急凍', mediaCount: 16 },
  { id: 6, author: '吳建基', date: '2024-02-13', department: '內科部/兒科', doctor: '惠群醫師, 廖子涵醫師', topic: '初一到初三小孩多流感 成人染新冠 醫籲戴好口罩', mediaCount: 5 },
  { id: 7, author: '吳建基', date: '2024-03-04', department: '家醫科', doctor: '蔡崇煌醫師', topic: '確診新冠後暴瘦10公斤 年輕工程師竟罹致命糖尿病', mediaCount: 25 },
  { id: 8, author: '吳建基', date: '2024-03-18', department: '急診', doctor: '鄭清萬醫師', topic: '打個大噴嚏險奪命 65歲男竟這原因主動脈破裂長達40公分', mediaCount: 30 },
  { id: 9, author: '吳建基', date: '2024-04-08', department: '核子醫學科', doctor: '楊朝瑋醫師', topic: '78歲婦人急喘肺積水 正子造影查出卵巢和輸卵管有癌腫瘤', mediaCount: 23 },
  { id: 10, author: '吳建基', date: '2024-04-22', department: '皮膚科', doctor: '柯偉立醫師', topic: '男子右腰突鼓脹 醫師：帶狀疱疹致腹壁肌肉鬆弛', mediaCount: 31 },
  { id: 11, author: '吳建基', date: '2024-05-22', department: '整形外科', doctor: '呂明川醫師', topic: '準新娘耳廓缺損 自體肋軟種出如真耳', mediaCount: 16 },
  { id: 12, author: '吳建基', date: '2024-06-11', department: '放射腫瘤科', doctor: '許維中醫師', topic: '保住胸口愛的印記 醫殲滅乳癌展開美麗圖騰的守護戰', mediaCount: 22 },
  { id: 13, author: '吳建基', date: '2024-06-24', department: '胃腸肝膽科', doctor: '李政祺醫師', topic: '30歲女上吐下瀉掛急診 罕見嗜酸性腸胃炎！竟是塵蟎惹的禍', mediaCount: 28 },
  { id: 14, author: '吳建基', date: '2024-07-16', department: '神經外科', doctor: '廖本立醫師', topic: '沒有三高、頭部撞擊 20多歲竟腦中風', mediaCount: 21 },
  { id: 15, author: '吳建基', date: '2024-07-19', department: '院方', doctor: '鍾信誠副院長', topic: '澄清醫療體系 展現綠色醫療發展決心', mediaCount: 0 },
  { id: 16, author: '吳建基', date: '2024-08-05', department: '整形外科', doctor: '黃仁詮醫師', topic: '整形外科新技術！用「這1物」取代縫線 術後傷口癒合更美觀', mediaCount: 13 },
  { id: 17, author: '吳建基', date: '2024-08-27', department: '急診', doctor: '蔡哲宏醫師', topic: '2度心肌梗塞瀕死被救回 40歲壯男立志當CPR宣傳大使', mediaCount: 16 },
  { id: 18, author: '吳建基', date: '2024-09-09', department: '護理部', doctor: 'N/A', topic: '澄清醫院與弘光科大合作 設二技護理學分班', mediaCount: 8 },
  { id: 19, author: '吳建基', date: '2024-09-16', department: '放射腫瘤科', doctor: '梁家郡醫師', topic: '頻尿卻甩不出來！工作狂台商內褲全濕 腫瘤忍8年「長到膀胱」', mediaCount: 21 },
  { id: 20, author: '吳建基', date: '2024-10-16', department: '免疫科', doctor: '孟家駒醫師', topic: '42歲婦人常摔破碗碟 醫師查出她患了這個病', mediaCount: 23 },
  { id: 21, author: '吳建基', date: '2024-11-15', department: '內分泌科', doctor: '黃怡文醫師', topic: '30歲男160公斤患2型糖尿病 口服自費新藥減7公斤', mediaCount: 22 },
  { id: 22, author: '吳建基', date: '2024-11-18', department: '心臟內科', doctor: '張耿豪醫師', topic: '心跳忽快.呼吸喘 冠狀動脈已完全阻塞', mediaCount: 22 },
  { id: 23, author: '吳建基', date: '2024-12-23', department: '社服課', doctor: 'N/A', topic: '新民高中手鐘報佳音', mediaCount: 0 },
  { id: 24, author: '吳建基', date: '2025-02-03', department: '家醫科', doctor: '詹育儒醫師', topic: '40歲工程師連6年健檢「滿江紅」不理 醫搖頭：比75歲阿公還慘', mediaCount: 21 },
  { id: 25, author: '吳建基', date: '2025-03-03', department: '核子醫學科', doctor: '楊朝瑋醫師', topic: '7旬翁食道癌復發吞嚥困難 正子斷層揪出癌細胞', mediaCount: 18 },
  { id: 26, author: '吳建基', date: '2025-03-18', department: '骨科', doctor: '王稚暉醫師', topic: '地磚師傅騎車急煞跌倒 膝蓋撞地劇痛！手術重建恢復行走', mediaCount: 10 },
  { id: 27, author: '吳建基', date: '2025-04-21', department: '皮膚科', doctor: '柯偉立醫師', topic: '男子茂密頭髮突掉落 醫師：罹患梅毒造成', mediaCount: 30 },
  { id: 28, author: '吳建基', date: '2025-05-26', department: '胸腔內科', doctor: '劉旭崇醫師', topic: '老菸槍罹「肺癌惡霸」小細胞肺癌 增加免疫治療控制病情', mediaCount: 16 },
  { id: 29, author: '吳建基', date: '2025-06-09', department: '胸腔外科', doctor: '杜承哲醫師', topic: '因車禍造成右側肋骨連枷胸 透過連枷胸達文西手術縮小傷口', mediaCount: 12 },
  { id: 30, author: '吳建基', date: '2025-06-16', department: '大腸直腸外科', doctor: '陳周誠醫師', topic: '女子便後出血以為痔瘡 就醫檢查直腸癌移轉肝臟', mediaCount: 25 },
  { id: 31, author: '吳建基', date: '2025-07-09', department: '婦產科', doctor: '温亭虹醫師', topic: '陰道卡卡還摸到肉團 醫：自然產婦女7成子宮脫垂', mediaCount: 15 },
  { id: 32, author: '吳建基', date: '2025-07-21', department: '一般外科', doctor: '孫賢斌醫師', topic: '銀行員搬鈔票錢幣搬到疝氣！兩側「壘球大」靠達文西救回', mediaCount: 17 },
  
  // 撰稿人_Makoto
  { id: 33, author: 'Makoto', date: '2024-02-19', department: '胃腸肝膽科', doctor: '黃仁杰醫師', topic: '罹肝炎抗肝癌從不鬆懈 72歲勇爺一圓半馬夢', mediaCount: 10 },
  { id: 34, author: 'Makoto', date: '2024-03-25', department: '骨科', doctor: '鍾玉軒醫師', topic: '坐骨神經痛影響日常生活 醫師建議把握治療黃金期', mediaCount: 11 },
  { id: 35, author: 'Makoto', date: '2024-07-01', department: '感染科', doctor: '陳賢孟醫師', topic: '台中男罕見本土球黴菌感染 醫曝1類型環境易生菌種', mediaCount: 20 },
  { id: 36, author: 'Makoto', date: '2024-07-22', department: '胃腸肝膽科', doctor: '何士奇醫師', topic: '壯年男不菸不酒！十二指腸卻長惡腫瘤 4徵兆恐是罕見壺腹癌警訊', mediaCount: 11 },
  { id: 37, author: 'Makoto', date: '2024-08-12', department: '骨科', doctor: '鍾玉軒醫師', topic: '61歲男脊椎病變雙腳麻痛難行 微創內視鏡減壓手術重拾登山樂', mediaCount: 7 },
  { id: 38, author: 'Makoto', date: '2024-12-08', department: '胃腸肝膽科', doctor: '張安迪醫師', topic: '婦「便便不成形」 大腸「肝曲」揪出5公分腫瘤', mediaCount: 12 },
  { id: 39, author: 'Makoto', date: '2025-01-07', department: '整形外科', doctor: '呂明川醫師', topic: '6旬婦靜脈曲張惡化 醫：心肺衰竭、肺栓塞機率高', mediaCount: 14 },
  { id: 40, author: 'Makoto', date: '2025-02-24', department: '胸腔外科', doctor: '賴重佑醫師', topic: '罕見！17歲高中生長出12公分惡性腫瘤 手術取出重逾半公斤', mediaCount: 16 },
  { id: 41, author: 'Makoto', date: '2025-02-26', department: '社服課', doctor: '大同扶輪社', topic: '大同扶輪社捐行動輔具 暖心扶助早產寶寶與行動不便者', mediaCount: 1 },
  { id: 42, author: 'Makoto', date: '2025-04-02', department: '小兒科/心臟外科', doctor: '何季麟醫師, 吳慧中醫師', topic: '無情玩笑！台中娃出生3天患主動脈弓縮窄 心衰竭差點休克', mediaCount: 10 },
  { id: 43, author: 'Makoto', date: '2025-04-28', department: '胸腔外科', doctor: '賴重佑醫師', topic: '6旬翁扁桃腺發炎 竟罹瀰漫性大型B細胞淋巴癌', mediaCount: 6 },
  { id: 44, author: 'Makoto', date: '2025-06-30', department: '泌尿科', doctor: '呂謹亨醫師', topic: '女老師輸尿管結石腰痛到不能睡 達文西輔助手術排除解尿障礙', mediaCount: 6 },
  { id: 45, author: 'Makoto', date: '2025-07-28', department: '胃腸肝膽科', doctor: '謝翰廷醫師', topic: '7成人腹超異常！你爆肝了嗎？醫揭「無聲殺手」警訊', mediaCount: 9 },
  { id: 46, author: 'Makoto', date: '2025-08-11', department: '耳鼻喉科', doctor: '賴俊毓醫師', topic: '5歲男童反覆中耳炎、睡覺打呼竟是「呼吸中止症」 醫：缺氧恐影響發育', mediaCount: 8 },
];
