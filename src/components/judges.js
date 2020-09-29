import React, { Component } from 'react'

var section =
{
  "title": "歷屆評選委員",
}

var judgeListData = [
  {
    "name": "王向榮",
    "title": "李慕約公司 共同創辦人",
    "description": "g0v 社群長期參與者，發起與參與過新聞小幫手、求職小幫手、台灣公司資料、開放政治獻金等專案，希望更透明的政府可以讓大家有更自由幸福的生活。",
    "image": ["images/judges/ronnywang.jpg"]
  },
  {
    "name": "冷彬",
    "title": "富邦文教基金會 總幹事",
    "description": "紐約哥倫比亞大學社工碩士，投身青少年社會工作領域近二十年，不停觀察、思考及嘗試以不同的藝術體驗、公民參與融入青少年團體工作，努力在工作中貫徹青少年自主培力的信念。",
    "image": ["images/judges/rb.jpg"]
  },
  {
    "name": "林大涵",
    "title": "貝殼放大股份有限公司 執行長暨創辦人",
    "description": "高中於九州留學，在學期間不務正業淪為政大台大雙學士候選人，特別喜歡棒球和 ACGN（動畫、漫畫、遊戲、小說），多屬性宅男。\n\n自 2011 年起開始參與群眾集資產業，參與超過 400 件專案，橫跨科技、設計、社會、創作、公益等領域。2014 年 10 月創辦群眾集資顧問公司「貝殼放大」，提供國內外群眾集資專案與 2017 台北世大運等大型品牌行銷規劃諮詢、製作、行銷的全面服務，成立三年累積集資金額已超過新台幣 7 億元。\n\n目前正職與實習生共約 35 名。 2015 年《經理人月刊》頒發 2015 年度臺灣 MVP 經理人，2016 年獲《富比士（福布斯）》雜誌選為 30 under 30 asia.",
    "image": ["images/judges/dhlin.jpg"]
  },
  {
    "name": "吳泰輝",
    "title": "g0v 零時政府 共同發起人",
    "description": "資料視覺化領域與網頁技術專家。近年關注新聞創新領域，為 Hacks/Hackers Taipei Co-Organizer 、公視新媒體諮詢委員以及輔大新媒體技術課程兼任講師。",
    "image": ["images/judges/kirby.jpg"]
  },
  {
    "name": "陳信聰",
    "title": "公共電視論壇節目《有話好說》 製作人兼主持人",
    "description": "曾獲 1999 年竹塹文學獎小說首獎、劇本佳作。曾擔任立法院朱惠良辦公室教育及文化法案助理，新竹香山地區社區營造員，擔任公視新聞記者主跑教育、文化、國防、黨政等路線。現為公共電視論壇節目《有話好說》製作人兼主持人。",
    "image": ["images/judges/stchen.jpg"]
  },
  {
    "name": "陳舜伶",
    "title": "中研院法律所 助研究員",
    "description": "曾服務於自由軟體鑄造場及 CC Taiwan 兩計畫創始團隊，研究主題包括著作權法、資訊法、網路社群治理與發展、開放協作與知識民主。",
    "image": ["images/judges/slchen.jpg"]
  },
  {
    "name": "謝昇佑",
    "title": "好食機 共同創辦人",
    "description": "好食機農食整合有限公司 共同創辦人\n\n主婦聯盟生活消費合作社 顧問\n\n台大食養農創學程 專案助理教授",
    "image": ["images/judges/syhsieh.jpg"]
  },
  {
    "name": "史書華",
    "title": "Hacks/Hackers Taipei 共同發起人",
    "description": "新聞人，目前任職於外媒，遊走台北、北京兩城。曾蹲過紐約，也曾在台灣和香港擔任新聞系所的講師。",
    "image": ["images/judges/silva.jpg"]
  },
  {
    "name": "杜奕瑾",
    "title": "PTT 創站站長、《台灣 AI 實驗室》創辦人",
    "description": "做為 BBS 站 PTT 的創站站長，前微軟公司人工智慧（AI）部門亞太區研究總監，台灣自由軟體協會會長，台灣 AI 實驗室創始人。",
    "image": ["images/judges/ptt.jpg"]
  },
  {
    "name": "陳瑞賓",
    "title": "台灣環境資訊協會 秘書長",
    "description": "目前任職於台灣環境資訊協會。主要工作為推動環境資訊的交流與普及，做為啟動環境保護意識與行動的基礎，以此結合知識與人的力量來推動台灣的環境信託工作，保留台灣土地的活力與希望。",
    "image": ["images/judges/cjb.jpg"]
  },
  {
    "name": "張瑋軒",
    "title": "女人迷 創辦人暨執行長",
    "description": "擅於應用科技結合知識議題，數位時代雜誌選為影響台灣的二十大女性。",
    "image": ["images/judges/cws.jpg"]
  },
  {
    "name": "羅可容",
    "title": "綠色和平 專案主任",
    "description": "2010 年加入國際綠色和平組織擔任區域發展及專案負責人。",
    "image": ["images/judges/lkl.jpg"]
  },
  {
    "name": "高嘉良",
    "title": "g0v 零時政府 共同發起人",
    "description": "參加 1997 年國際資訊奧林匹亞後，進入台大資訊系就讀，即活躍於國內外開放源碼社群，隨後旅居英國倫敦從事軟體開發及顧問工作。2012 年發起 g0v 計畫。",
    "image": ["images/judges/clkao.jpg"]
  },
  {
    "name": "陳昇瑋",
    "title": "中研院資訊科學所研究員、台灣資料科學協會理事長",
    "description": "長期推廣資料科學及其在各領域的應用，發起台灣資料科學協會及台灣資料科學年會，將資料科學引入每個人的專業領域之中，讓資料分析在台灣不再是口號，而是大家真實拿來解決問題及創造價值的工具。",
    "image": ["images/judges/sw.jpg"]
  },
  {
    "name": "蔡淑芳",
    "title": "開拓文教基金會 執行長",
    "description": "帶領開拓團隊建立性別、身障、原住民、災後重建等等不同務領域的服務網站。多年來透過科技濃湯軟體的捐贈平台與資訊運用培訓，扮演著非營利組織與資訊科技之間的橋樑角色。",
    "image": ["images/judges/sf.jpg"]
  },
  {
    "name": "陳順孝",
    "title": "輔大新聞傳播副教授",
    "description": "種過田、擺過地攤、編過報紙頭版，現任輔大新聞傳播系副教授，積極參與公民新聞、獨立媒體、新聞創業。",
    "image": ["images/judges/ss.jpg"]
  },
  {
    "name": "程希瑾",
    "title": "500 Startups 駐台代表",
    "description": "程希瑾是矽谷知名種子基金暨創業育成加速器 500 Startups 的在台 Venture Partner。500 Startups 是由前 Paypal 及 Google 等矽谷知名公司的員工所創立，其種子基金投資遍及全球的社群、搜尋、行動等的網路應用及服務。程小姐自 2014 年加入 500 Startups，協助其台灣的投資項目管理及新事業開發。\n\n在加入 500 Startups 之前，程小姐自 2004 年起共同創辦了三家公司，2004 年她成立了隨想行動科技，開發行動股市看盤下單系統，在台灣證券市場俱有極高的市佔率，後為精誠購併。2008年成立社群遊戲公司嘎姆擂台（Gamelet）。2012 年時成立 Cubie Messenger，是一款以傳輸多媒體訊息為主的行動聊天軟體，在全球逾千萬下載。",
    "image": ["images/judges/cjin.jpg"]
  },
  {
    "name": "黃雋",
    "title": "網絡行動科技 共同創辦人",
    "description": "專注於經營社會企業、服務 NPO 建置網站專案、為 NPO 導入 CRM 計畫將近十年。相信 NPO 是改變社會的重要環節，需要更多人關注與提供合作與服務，希望開放透明的 g0v Grants 專案亦可為此創造更多可能。",
    "image": ["images/judges/jimmyhuang.jpg"]
  },
  {
    "name": "林以涵",
    "title": "社企流 共同創辦人暨執行長",
    "description": "政治大學公共行政學士、美國德州奧斯丁大學公共事務碩士。2012 年創辦「社企流」，期望透過華文串連社會創新創業的資訊與資源，健全生態圈發展。",
    "image": ["images/judges/linyihan.jpg"]
  },
  {
    "name": "吳宜珮",
    "title": "台灣創意設計中心專案總監、美國創新中心顧問",
    "description": "2013 年起引進設置 RedDot 紅點設計博物館、美國創新中心，並於台灣推動辦理首次「魚客松 Fishackathon」及「NASA 黑客松」，擔任 2016 臺北世界設計之都副執行長，代表領取 2017 年 DMI 設計創新獎，長年推動國際合作、設計創新、服務設計、設計導入公共政策等工作。",
    "image": ["images/judges/wuyipei.jpg"]
  },
  {
    "name": "黃瑞茂",
    "title": "淡江大學建築學系 專任副教授",
    "description": "淡水社區工作室主持人、專業者都市改革組織（OURs）常務理事。長期關注臺灣社會轉變過程中，都市空間所面對的種種面向的議題，1993 年成立「淡水社區工作室」參與真實的環境改造工作，特別在歷史城鎮淡水地區從事多年的在地工作。",
    "image": ["images/judges/huangmao.jpg"]
  }
]

class Judges extends Component {
  judges = (i) => {
    return (
      <div className="fl judges ma3 bg-white hidediv hideme br1">
        <div className="pa4">
          <figure className="center mb3">
            <img src={judgeListData[i].image[0]} height="100" alt={judgeListData[i].name} />
          </figure>
          <p className="ma0 tracked o-90 fw6">{judgeListData[i].name}<br/>{judgeListData[i].title}</p>
          <p className="desc mw-320 center o-70 p-small ph2">{judgeListData[i].description}</p>
        </div>
      </div>
    )
  }
  render() {
    let judgeList = [];
    for(var i = 0; i < judgeListData.length; i++) {
      judgeList.push(this.judges(i));
    }
    return (
      <section id="judges" className="fw-100 bg-light pb6-l pb5">
        <br/>
        <div className="container mw9 w-85 center mt5">
          <h3 className="ma0 lh-title pb4-l pb3 tc fw5 hideme hidediv tracked">{section.title}</h3>
          <div className="cf tc flexbox center mw74">
            {judgeList}
          </div>
        </div>
      </section>
    )
  }
}

export default Judges;
