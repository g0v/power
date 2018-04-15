import React, { Component } from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import Swiper from 'swiper';
import $ from 'jquery';

var section =
{
  "title": "五大類別獲獎專案一覽",
}

var topicListData = [
  {
    "name": "科技與公益",
    "description": "科技陪公益走完最後一哩路",
    "content": "g0v 社群長期與公民團體站在同一個陣線，在開放資料與公眾參與的基礎上，降低議題的參與門檻，也累積議題的能量，讓公民團體與大眾更靠近。",
    "image": ["images/icons/分類科技與公益.png"],
    "projects": [
      {
        "name": "LostSAR - 搜救",
        "url": "http",
        "logo": "images/topography.svg"
      },
      {
        "name": "享食雲 Foodsharing Taiwan",
        "url": "http",
        "logo": "images/topography.svg"
      }
    ]
  },
  {
    "name": "開放政府",
    "description": "開放政府，民間續航",
    "content": "公民科技所作的事，就是讓公民把事情攤開來檢視，以「開放×資料×程式」的策略，從解決資訊落差開始，讓參與的層次前所未有的激發。",
    "image": ["images/icons/分類開放政府.png"],
    "projects": [
      {
        "name": "OPEN 集團",
        "url": "http",
        "logo": "images/topography.svg"
      },
      {
        "name": "司法陽光網－判決書 API 計畫",
        "url": "http",
        "logo": "images/topography.svg"
      },
      {
        "name": "2018 議員投票指南",
        "url": "http",
        "logo": "images/topography.svg"
      }
    ]
  },
  {
    "name": "新資料",
    "description": "這樣也行！創新的資料收集大法",
    "content": "公民科技的介入，將資料從原本不易分享的型態解放出來，這個過程本身即是公民參與的實踐。",
    "image": ["images/icons/分類新資料.png"],
    "projects": [
      {
        "name": "阿龜微氣候天眼通",
        "url": "http",
        "logo": "images/topography.svg"
      },
      {
        "name": "阿龜誌–農務紀錄好幫手",
        "url": "http",
        "logo": "images/topography.svg"
      },
      {
        "name": "美國國會台灣觀測站",
        "url": "http",
        "logo": "images/topography.svg"
      },
      {
        "name": "國家寶藏",
        "url": "http",
        "logo": "images/topography.svg"
      }
    ]
  },
  {
    "name": "資料檢核",
    "description": "自媒體時代，資料查核與再加值",
    "content": "從單方向一元的傳播模式，走向多元分散式的結構化資料，新世代開發者嘗試在媒體領域走出一條新路，也應用在其他大量資料的領域。",
    "image": ["images/icons/分類資料檢核.png"],
    "projects": [
      {
        "name": "真的假的 LINE BOT",
        "url": "http",
        "logo": "images/topography.svg"
      },
      {
        "name": "好工作評論網 GoodJob",
        "url": "http",
        "logo": "images/topography.svg"
      }
    ]
  },
  {
    "name": "社群基礎建設",
    "description": "前瞻也顧後，社群基礎建設整合公民科技力",
    "content": "g0v 揪松團從 2016 年開始推廣社群投入基礎建設工作，希望打造讓更多人投入協作、長期開發的公民科技生態系。",
    "image": ["images/icons/分類社群基礎建設.png"],
    "projects": [
      {
        "name": "中二網（middle2 開放 PaaS 平台）",
        "url": "http",
        "logo": "images/topography.svg"
      },
      {
        "name": "g0v 專案中心（YA0H: Yet Another g0v Hub）",
        "url": "http",
        "logo": "images/topography.svg"
      }
    ]
  }
]

class Topics extends Component {
  componentDidMount() {
    /* Init Swiper */
    var swiper = new Swiper('#swiperTopic-container', {
      pagination: '#topic-pag',
      slidesPerView: 1,
      paginationClickable: true,
      resistanceRatio: .4,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 100,
      onSlideChangeStart: function(){
        $('.show2').addClass('none');
      },
      onSlideChangeEnd: function(){
        $('.show2').removeClass('none');
      }
    });
    $('.slide').each(function(index){
      $(this).click(function(){
        swiper.slideTo(index+1);
      })
    })
  }
  projectList = (i,k) => {
    return (
        <li className="projectList w-100">
          <a className="flexbox alc pa3 ba b--light-gray near-black mv2 w-100" href={topicListData[i].projects[k].url}>
            <img className="pr3" src={topicListData[i].projects[k].logo} height="40" width="40" alt="logo"/>
            {topicListData[i].projects[k].name}
          </a>
        </li>
    )
  }
  topicIntro = (i) => {
    return (
      <li className="slide dib tc pa2 hideme hidediv relative w-third-l w-100 cp">
          <figure className="center mb3 dn db-l">
            <img className="icon" src={topicListData[i].image[0]} width="100%" alt={topicListData[i].name}/>
          </figure>
          <h3 className="ma0 tracked o-90 pt3 fw6">{topicListData[i].name}
          <h1 className="absolute p-large o-10">{"0"+(i+1)}</h1>
          </h3>
          <p className="mw-320 center o-70 ph2 mt4 mb0-l mb4">{topicListData[i].description}</p>
      </li>
    )
  }
  topicContent = (i) => {
    let projectItems = [];
    for(var k = 0; k < topicListData[i].projects.length; k++) {
      projectItems.push(this.projectList(i,k));
    }
    return (
      <div className="swiper-slide ph5-l ph0 pt4-l">
        <div className="mt5-l">
          <div className="fl w-25-l w-100 tc">
            <figure className="center">
              <img className="mw-320" src={topicListData[i].image[0]} width="100%" alt={topicListData[i].name}/>
            </figure>
          </div>
          <div className="fl w-75-l w-100 mw7-l ph5-l">
            <h1 className="mv0 o-20">{"0"+(i+1)}</h1>
            <h1 className="mv0">{topicListData[i].name}</h1>
            <h3 className="mv1 o-60">{topicListData[i].description}</h3>
            <p>{topicListData[i].content}</p>
            <ul className="list pa0 mt4">{projectItems}</ul>
          </div>
        </div>
      </div>
    )
  }
  numbers = () => {
    let topicIntroList = [];
    for(var i = 0; i < topicListData.length; i++) {
      topicIntroList.push(this.topicIntro(i));
    }
    return (
      <div className="numbers fl w-100">
        <div className="pt4 center">
          <ul className="ma0 pa0 tc center flexbox jcc">
            {topicIntroList}
          </ul>
        </div>
      </div>
    )
  }
  topics = () => {
    let topicSlide = [];
    for(var i = 0; i < topicListData.length; i++) {
      topicSlide.push(this.topicContent(i));
    }
    return topicSlide;
  }

  render() { 
    return (
    <ParallaxBanner
          className="fw-100"
          layers={[
              {
                  image: 'images/cover/lines.png',
                  amount: .2,
                  slowerScrollRate: false,
              }
          ]}
          style={{
              height: 'auto'
          }}
      >
      <section id="topics" className="fw-100 bg-white pv6-l pv5"> 
        <div className="container mw9 w-85 center">
          <h3 className="ma0 lh-title pb4 tc fw5 hideme hidediv tracked">{section.title}</h3>
          <div id="swiperTopic-container" className="swiper-container center relative">
            <div className="swiper-wrapper">
              <div className="swiper-slide ph5-l ph0">
                {this.numbers()}
              </div>
              {this.topics()}
            </div>
            <div className="swiper-button-prev dn db-l z1"></div>
            <div className="swiper-button-next dn db-l z1"></div>
          </div>
          <div id="topic-pag" className="swiper-pagination mt3"></div>
        </div>
      </section>
      </ParallaxBanner>
    )
  }
}

export default Topics;