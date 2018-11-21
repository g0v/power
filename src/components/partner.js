import React, { Component } from 'react'

var section =
{
  "title": "獎助金合作夥伴",
  "powerby": "揪松團在獎助金網站介紹徵件辦法、合作夥伴與獲獎專案一覽，獲獎專案網站或其他形式服務須至少在持續營運一年內註明 Powered by g0v，並連結回「Powered by g0v」頁面。"
}

var partnerListData = [
  {
    "name": "聯合報系願景工程",
    "description": "願景工程不只報導，還有行動，你我合作，正向改變。",
    "image": ["images/partners/logo-lian.svg"]
  },
  {
    "name": "台灣大哥大基金會",
    "description": "希望成為「數位匯流的領航者」，帶動公益科技化，使社會效益極大化。",
    "image": ["images/partners/logo-taiwan.svg"]
  },
  {
    "name": "前政委蔡玉玲律師",
    "description": "2013 年入閣擔任行政院政務委員，隔年結緣 g0v 並在黑客松提案，由 g0v 志工建置「vTaiwan」。",
    "image": ["images/partners/logo-yulin.svg"]
  },
  {
    "name": "Openfind",
    "description": "長期致力於網際網路相關技術研發，提供高品質、高穩定與高擴充性的軟體與服務。",
    "image": ["images/partners/logo-openfind.svg"]
  },
  {
    "name": "天氣風險管理開發",
    "description": "台灣第一家民間氣象公司，服務客戶跨及媒體、運輸、製造、物流、通路等超過 170 家企業。",
    "image": ["images/partners/logo-weather.svg"]
  },
  {
    "name": "開放文化基金會",
    "description": "藉由法人組織的力量，協助台灣開放源碼社群的推廣與倡議。",
    "image": ["images/partners/logo-ocf.svg"]
  }
]

class Partner extends Component {
  partner = (i) => {
    return (
      <div className="fl partners ma3 bg-white hidediv hideme br1">
        <div className="pa4">
          <figure className="center mb3">
            <img src={partnerListData[i].image[0]} height="100" alt={partnerListData[i].name} />
          </figure>
          <p className="ma0 tracked o-90 pt3 fw6">{partnerListData[i].name}</p>
          <p className="mw-320 center o-70 p-small ph2">{partnerListData[i].description}</p>
        </div>
      </div>
    )
  }
  render() {
    let partnerList = [];
    for(var i = 0; i < partnerListData.length; i++) {
      partnerList.push(this.partner(i));
    }
    return (
      <section id="partner" className="fw-100 bg-light pb6-l pb5">
        <div className="mb6-l mb5 pv5 bg-dark">
          <div className="mw8 w-85 center">
            <div className="cf">
              <div className="fl w-25-l w-100 ma0 pa3 tc-ns hideme hidediv">
                <img src="images/powered-by-g0v.svg" height="57" alt="g0v-poweredby" />
              </div>
              <div className="fl w-75-l w-100 ma0 pa3 hideme hidediv white">
                <p className="fw4 ma0 pa0 lh-large">{section.powerby}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mw9 w-85 center">
          <h3 className="ma0 lh-title pb4-l pb3 tc fw5 hideme hidediv tracked">{section.title}</h3>
          <div className="cf tc flexbox center mw74">
            {partnerList}
          </div>
        </div>
      </section>
    )
  }
}

export default Partner;