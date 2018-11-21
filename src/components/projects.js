import React, { Component } from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import Modal from 'react-responsive-modal';
import FontAwesome from 'react-fontawesome';

var modalId = "";

var section =
{
  "title": "精選 2017 獲獎專案",
  "tagline": "自 2017 年開始，公民科技創新獎助金已陸續為 13 個獲獎團隊帶入實質資源，讓專案得以延續，持續運作。其中更有許多優秀專案，已成功締造實質改變！" ,
  "insight": "洞察 Insight",
  "idea": "計畫 Idea",
  "impact": "影響力 Impact",
  "team": "團隊成員：",
  "contact": "聯絡資訊："
}

var projectListData = [
  {
    "name": "阿龜微氣候",
    "description": "自製田間土壤、氣象感測器，配合數據分析，並延伸到田間紀錄日誌，讓小農更聰明地看天吃飯。",
    "logo": "images/projects/logo-turt.png",
    "image": ["images/projects/cover-turt.png", "images/projects/insight-turt.png", "images/projects/idea-turt.png", "images/projects/impact-turt.png"],
    "url": "http://agriweather.beehivedt.com/",
    "insight": "不開放的農業資料，讓第一線的農民極度缺乏田間微氣候的即時資料，加上負擔不了昂貴的設備，台灣的小農因此難以科學耕作。",
    "idea": "吳君孝與長期參與開源社群的科技農夫陳幸延，成立「阿龜微氣候天眼通」，自製田間土壤感測器、氣象盒子收集農業數據，並將接收到的環境數據彙整到儀表板，方便農友掌握即時田間狀況。",
    "impact": "拿到 g0v 獎助金後，只有兩三人的阿龜核心團隊在一個月內迅速成長至十幾人，並以「阿龜誌」拿到第二次 g0v 獎助金，接著開發田間紀錄日誌 APP，持續以農業資料為基底，架起一座橫跨農民與專家學者的橋樑。阿龜微氣候團隊開發成功的能量也回饋給 Open Hack Farm 社群，以開源科技深耕在地農業。",
    "team": "團隊介紹",
    "create": [{"title":"首波測試農友", "num":60}, {"title":"品種", "num":600}, {"title":"肥料介紹", "num":3000}],
    "people": "吳君孝／陳幸延／余孟勳／張育誠／林俊廷／施旭峰／寧格致／吳伯彥／蘇文毓／梁芳綺／鍾幸芸／胡靜諭／盧安邦／楊宗儒／許靜宜／林泰佑"
  },
  {
    "name": "真的假的 LINE BOT",
    "description": "用聊天機器人和群眾協作查核澄清 Line 封閉群組中的不實資訊。",
    "logo": "images/projects/logo-line.png",
    "image": ["images/projects/cover-line.png", "images/projects/insight-line.png", "images/projects/idea-line.png", "images/projects/impact-line.png"],
    "url": "https://cofacts.hacktabl.org/",
    "insight": "如果說上個世代以政黨顏色區分彼此的小圈圈，那麼這個時代，社交網站就成了新的小圈圈，亦稱同溫層。同溫層不只是取暖、討拍的地方，如今更變成假消息散布的管道、激起衝突以造成動員的場域。現在有許多謠言透過 Line 散佈，這些謠言可能是錯誤的知識、詐騙、蓄意引導，嚴重時甚至會影響大家的生活。",
    "idea": "「真的假的 LINE Bot」讓不擅於使用 Google，資訊搜尋能力較低的使用者，可以在加入「真的假的 LINE Bot」之後，遇上任何 LINE 上不知真假的訊息時，直接轉發給機器人，接著就會收到回覆，判斷訊息的真假。",
    "impact": "真的假的團隊曾參與國家傳播委員會（NCC）關於假新聞的討論，並至新加坡、南非等地參與公民科技論壇，展現專案在資訊查核相關領域的社會影響力。目前約 2 萬人加入「真的假的 LINE Bot」 LINE 好友，每週有將近 250 篇訊息回報，200 位編輯加入線上闢謠。",
    "team": "團隊介紹",
    "create": [{"title":"已闢謠條目", "num":14121}, {"title":"每週訊息回報", "num":250}],
    "people":"郭冠宏（ggm）／梁翔勝（mrorz）／李柏緯（lucien）／魏妤庭（hazel）／李比鄰（billion）／劉澄真（delightfullychoatic）／朱柏澂（darkbtf）"
  },
  {
    "name": "OPEN 集團",
    "description": "「OPEN 集團」梳理出企業所屬集團的關係圖，再串聯「透明足跡」的污染排放資料，讓民眾以集團為單位，檢視排放汙染的企業體，藉此向有違規紀錄的集團施壓，同時呼籲政府正視現行法律的不足。",
    "logo": "images/projects/logo-open.png",
    "image": ["images/projects/cover-open.png", "images/projects/insight-open.png", "images/projects/idea-open.png", "images/projects/impact-open.png"],
    "url": "https://thaubing.gcaa.org.tw/companydata/openGroupLanding/index.html",
    "insight": "曾有集團五年來因排放廢棄物僅被開罰 3700 多萬，造成的廢水汙染讓政府投資治水的 37 億元前功盡棄，但該集團卻在五年間享有 29.96 億元的租稅減免。罰款金額相較於補貼獎勵，根本不值一提，導致違規企業屢屢以消耗環境的外部成本為代價，持續追逐高額利潤。",
    "idea": "為與「透明足跡」的污染裁罰紀錄整併，團隊將 g0v 專案「台灣公司資料」與本專案資料兩相比對，梳理各公司行號的統一編號，歷經半年開發，匯入 2013 - 2016 四年間的資料，總計超過 1,400 個集團、3 萬個公司統一編號。",
    "impact": "OPEN 集團強調「讓企業負起更多責任」，期許透過開放資訊的力量，讓汙染現形，從此民眾不再只能被動等待政府開罰，可以根據實際數據監督違法企業、向政府反映，提醒企業應負起的環境責任。",
    "team": "團隊介紹",
    "create": [{"title":"環境裁罰紀錄", "num":71366}, {"title":"集團彙整", "num":1487}],
    "people": "卞中佩／洪申翰／曾虹文／陳奕伶"
  },
  {
    "name": "國家寶藏",
    "description": "藉由遊戲化的群眾外包，翻拍遺落在海外的台灣相關史料，最後將圖檔文字數位化，建立數位開放的台灣史資料庫。",
    "logo": "images/projects/logo-treat.png",
    "image": ["images/projects/cover-treat.png", "images/projects/insight-treat.png", "images/projects/idea-treat.png", "images/projects/impact-treat.png"],
    "url": "https://www.nationaltreasure.tw/",
    "insight": "美國國家檔案館目前解密開放約六千萬筆、尚未數位化的台灣史料檔案，除非親自前往位於華盛頓 DC 或馬里蘭的美國國家檔案館調閱檔案才能觀看。相較於日本政府委託一個十人上下的專業團隊在美國國家檔案館翻拍十幾年，國家寶藏團隊想問的是：「政府不做，有沒有可能全民一起做『數位翻拍』？」",
    "idea": "國家寶藏團隊找來設計師、工程師，開發翻拍檔案 APP，讓志工像玩遊戲一般，自動指派翻拍編號，一小時可處理 100～200 頁的文件。翻拍後的檔案會自動上傳資料庫，並且透過程式辨識圖片中的文字，數位化成為可搜尋的資料，現在還能將英文自動翻譯成中文，更方便台灣民眾查閱。",
    "impact": "這是一個極具野心的計畫，他們不只想挖美國國家檔案局的檔案，期望同樣的鄉民精神與科技工具可以讓世界各地的台灣人都可以自己挖寶。畢竟大英博物館、荷蘭東印度公司、俄國聖彼得堡、日本、澳洲等地都有大量關於台灣的文獻尚未被研究。目前團隊已在美國成立「臺灣國家寶藏基金會」，每月組織志工團到馬里蘭進行翻拍，累積超過 100,000 筆資料上網。",
    "team": "團隊介紹",
    "create": [{"title":"志工人次", "num":50}, {"title":"翻拍文件", "num":200000}],
    "people":"蕭新晟（hsiao-a）／林育正（小風）／莊士杰（Abraham）／張文馨（moon）"
  }
]

class Projects extends Component {
  componentDidMount() {

  }
  state = {
    open: false,
  };
 
  onOpenModal = (e) => {
    modalId = e.target.dataset.id;
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  numbers = (i,j) => {
    return (
      <li className="center dib-l ma2 w46 tc white z1">
        <h5 className="ma0 tc tracked">{projectListData[i].create[j].title}</h5>
        <h1 className="ma0 tc di pr1">{projectListData[i].create[j].num+"+"}</h1>
      </li>
    )
  };
  contact = (i) => {
    switch(i) {
      case "0":
        return (
          <p><FontAwesome className="pr2" name='envelope'/>Email: shawwu@beehivedt.com<br/><FontAwesome className="pr2" name='slack'/>g0v Slack #shawwu<br/><FontAwesome className="pr2" name='facebook-square'/>Facebook: <a href="https://www.facebook.com/agriweather/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/agriweather/</a><br/>Line: @tyl2003d</p>
        )
      case "1":
        return (
          <p><FontAwesome className="pr2" name='envelope'/>Email: cofacts@googlegroups.com<br/><FontAwesome className="pr2" name='slack'/>g0v slack #cofacts<br/><FontAwesome className="pr2" name='facebook-square'/>Facebook: <a href="https://www.facebook.com/cofacts.tw/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/cofacts.tw/</a></p>
        )
      case "2":
        return (
          <p><FontAwesome className="pr2" name='envelope'/>Email: gcaa.official@gmail.com</p>
        )
      case "3":
        return (
          <p><FontAwesome className="pr2" name='envelope'/>Email: join@nltr.tw<br/><FontAwesome className="pr2" name='slack'/>g0v slack #national-treasure<br/><FontAwesome className="pr2" name='facebook-square'/>Facebook: <a href="https://www.facebook.com/twnationaltreasure" target="_blank" rel="noopener noreferrer">https://www.facebook.com/twnationaltreasure</a></p>
        )
      default:
        return false
    }
  }

  modalContent = (i) => {
    if(projectListData[i]) {
      var large = projectListData[i].image[0];
      //var medium = projectListData[i].image[0].split('.')[0]+'-m.png';
      //var small = projectListData[i].image[0].split('.')[0]+'-s.png';
      var k = large;
      var bgStyle = {
        backgroundImage: 'url('+k+')',
        backgroundPosition: 'center top',
        backgroundSize: 'cover'
      };
      let numberList = [];
      for(var j = 0; j < projectListData[i].create.length; j++) {
        numberList.push(this.numbers(i,j));
      }

      return (
        <div className="pb4">
          <div className="mh-600 flexbox alc bg-dark-black">
            <div className="w-100 mh-600 o-50 absolute pn" style={bgStyle}></div>
            <div className="container mw9 w-85 center white">
              <div className="cf relative z1 flexbox alc">
                <div className="fl w-20-l w-100 pr4-l mb0-l mb4">
                  <img className="ma0" src={projectListData[i].logo} alt={projectListData[i].name} width="240" />
                </div>
                <div className="fl w-75-l w-100">
                  <h1 className="ma0 fw2 tracked">{projectListData[i].name}</h1>
                  <h5 className="mt2 o-90 fw4 mw6 mb0">{projectListData[i].description}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="mt5 container mw9 w-85 center">
            <div className="cf relative z1 flexbox alc">
              <div className="content fl w-50-l w-100 ph3">
                <img src="images/cover/big-butterfly.png" width="100" className="dib" alt="butterfly"/>
                <h3 className="ma0 fw4 mb3 dib"> <span className="o-50">1 • </span>{section.insight}</h3>
                <p className="fw4 mv2 o-70 mw6 pb4 lh-large">{projectListData[i].insight}</p>
              </div>
              <div className="content fl w-50-l w-100 ph3">            
                <img className="mb5-l mb4" src={projectListData[i].image[1]} alt={projectListData[i].name}/>
              </div>
            </div>
            <div className="cf relative z1 flexbox alc">
              <div className="content fl w-50-l w-100 ph3 fo2-l">
                <img src="images/cover/big-butterfly.png" width="100" className="dib" alt="butterfly"/>
                <h3 className="ma0 fw4 mb3 dib"> <span className="o-50">2 • </span>{section.idea}</h3>
                <p className="fw4 mv2 o-70 mw6 pb4 lh-large">{projectListData[i].idea}</p>
              </div>
              <div className="content fl w-50-l w-100 ph3 fo1-l">
                <img className="mb5-l mb4" src={projectListData[i].image[2]} alt={projectListData[i].name}/>
              </div>
            </div>
            <div className="cf relative z1 flexbox alc">
              <div className="content fl w-50-l w-100 ph3">
                <img src="images/cover/big-butterfly.png" width="100" className="dib" alt="butterfly"/>
                <h3 className="ma0 fw4 mb3 dib"> <span className="o-50">3 • </span>{section.impact}</h3>
                <p className="fw4 mv2 o-70 mw6 pb4 lh-large">{projectListData[i].impact}</p>
              </div>
              <div className="content fl w-50-l w-100 ph3">
                <img className="mb5-l mb4" src={projectListData[i].image[3]} alt={projectListData[i].name}/>
              </div>
            </div>
          </div>
            <ParallaxBanner
              className="fw-100 bg-primary pv6-l pv5 bt-orange-small"
              layers={[
                  {
                      image: 'images/star-transparent.png',
                      amount: .1,
                      slowerScrollRate: false,
                  }
              ]}
              style={{
                  height: 'auto',
              }}
            >
              <div className="container mw9 w-85 tc center">
                <ul className="ma0 pa0 tc intro-num">
                  {numberList}
                  <img src="images/介紹人.svg" className="absolute bottom-0" width="450" alt="intro-person" />
                </ul>
              </div>
            </ParallaxBanner>
          <div className="mt5 container mw9 w-85 center">
            <div className="cf relative z1 flexbox lh-large">
              <div className="content fl w-50-l w-100 ph3">
                <h4 className="ma0">{section.team}</h4>
                <p className="mw6">{projectListData[i].people}</p>
              </div>
              <div className="content fl w-50-l w-100 ph3">
                <h4 className="ma0">{section.contact}</h4>
                {this.contact(i)}
              </div>
            </div>
          </div>
        </div>
      );
    }
    else return false;
  }

  project = (i) => {
    //var large = projectListData[i].image[0];
    var medium = projectListData[i].image[0].split('.')[0]+'-m.png';
    //var small = projectListData[i].image[0].split('.')[0]+'-s.png';
    var divStyle = {
      backgroundImage: 'url(' + medium + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };
    return (
      <div className="fl project ma3 cp hideme-more hidediv" data-id={i} onClick={this.onOpenModal}>
        <div className="overflow-hidden center mt0 mb3 bg-white h5 relative br1 pn">
          <span className="bg-dark w-100 h-100 absolute showdiv showme-expand-y"></span>
          <figure className="project-img w-100 h-100 ma0" style={divStyle}></figure>
        </div>
        <div className="pt0 pl5 dash hideme hidediv pn">
          <h4 className="ma0 white fw4">{projectListData[i].name}</h4>
          <p className="white mt2 o-70">{projectListData[i].description}</p>
        </div>
      </div>
    )
  }
  
  render() { 
    let projectList = [];
    for(var i = 0; i < projectListData.length; i++) {
      projectList.push(this.project(i));
    }
    const { open } = this.state;
    return (
      <ParallaxBanner
          className="fw-100"
          layers={[
              {
                  image: 'images/cover-bg.png',
                  amount: .2,
                  slowerScrollRate: false,
              }
          ]}
          style={{
              height: 'auto'
          }}
      >
      <section id="projects" className="fw-100 bg-dark pv6-l pv5"> 
        <div className="container mw9 w-85 center white">
          <h3 className="ma0 lh-title pb4-l pb3 tc fw5 hideme hidediv tracked">{section.title}</h3>
            <h5 className="ma0 lh-large tc mw7 center fw4 o-70 mb5-l mb4 f4-l f5 hideme hidediv">{section.tagline}</h5>
          <div className="cf flexbox center mw74">
            {projectList}
          </div>
        </div>
        <Modal open={open} onClose={this.onCloseModal} little>
          {this.modalContent(modalId)}
        </Modal>
      </section>
      </ParallaxBanner>
    )
  }
}

export default Projects;