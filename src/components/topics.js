import React, { Component } from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import Swiper from 'swiper';
import $ from 'jquery';

var section =
{
  "title": "Five Categories of Winning Projects",
}

var topicListData = [
  {
    "name": "Technology and Charity",
    "description": "Tech can accompany civil society organizations (CSOs) to complete the last mile.",
    "content": "Through the foundation of open data and civic engagement, the g0v community accompanies CSOs for the long haul. It helps reduce divides and accumulates energy on issues, bringing CSOs closer to the public. ",
    "image": ["images/icons/分類科技與公益.png"],
    "projects": [
      {
        "name": "LostSAR Search & Rescue",
        "url": "https://lostsar.github.io/",
        "logo": "images/logos/logo1-1.png"
      },
      {
        "name": "Foodsharing Taiwan",
        "url": "https://foodsharing.tw",
        "logo": "images/logos/logo1-2.png"
      },
      {
        "name": "Homeless Helper",
        "url": "https://homeless-helper.doyouaflavor.tw/",
        "logo": "images/logos/logo1-3.png"
      }
    ]
  },
  {
    "name": "Open Government",
    "description": "Open Government, public engagement",
    "content": "What civic tech does is allow citizens to spread things out for closer inspection and use the “open × data × program” strategy to eliminate digital divides, creating new advantages and opportunities for social engagement.",
    "image": ["images/icons/分類開放政府.png"],
    "projects": [
      {
        "name": "Open Corporate Groups",
        "url": "https://thaubing.gcaa.org.tw",
        "logo": "images/logos/logo2-1.png"
      },
      {
        "name": "Verdict Search",
        "url": "https://sunshine.jrf.org.tw/search",
        "logo": "images/logos/logo2-2.png"
      },
      {
        "name": "Councillor Voter Guide",
        "url": "https://councils.g0v.tw",
        "logo": "images/logos/logo2-3.png"
      },
      {
        "name": "Flataiwan",
        "url": "https://flataiwan.com",
        "logo": "images/logos/logo2-4.jpg"
      },
      {
        "name": "Opentaipower",
        "url": "https://opentaipower.g0v.tw/",
        "logo": "images/logos/logo2-5.png"
      }
    ]
  },
  {
    "name": "New Data",
    "description": "This works! Innovative Data Collection",
    "content": "Since the dawn of civic tech, data that was once difficult to access has now become open. This process itself is the practice of social engagement.",
    "image": ["images/icons/分類新資料.png"],
    "projects": [
      {
        "name": "AgriWeather",
        "url": "https://github.com/Agriweather",
        "logo": "images/logos/logo3-1.png"
      },
      {
        "name": "AgriNote",
        "url": "http://agriweather.beehivedt.com/",
        "logo": "images/logos/logo3-2.png"
      },
      {
        "name": "Taiwan Watch: Taiwan Affairs in the US Congress",
        "url": "https://www.taiwanwatch.org",
        "logo": "images/logos/logo3-3.png"
      },
      {
        "name": "Taiwan National Treasures",
        "url": "https://nationaltreasure.tw",
        "logo": "images/logos/logo3-4.png"
      },
      {
        "name": "AiR",
        "url": "https://plant-tw.github.io",
        "logo": "images/logos/logo3-5.png"
      },
      {
        "name": "ChhoeTaigi",
        "url": "https://chhoe.taigi.info/",
        "logo": "images/logos/logo3-6.png"
      }
    ]
  },
  {
    "name": "Data Check",
    "description": "Data Check and Value Added in the Self-Media Generation",
    "content": "From a one-way communication model to multiple, decentralized, and structured data, a new generation of developers are attempting to develop a new path in the field of media and apply it to other areas of big data.",
    "image": ["images/icons/分類資料檢核.png"],
    "projects": [
      {
        "name": "COFACTS LINE BOT",
        "url": "https://cofacts.g0v.tw/",
        "logo": "images/logos/logo4-1.png"
      },
      {
        "name": "GoodJob",
        "url": "https://www.goodjob.life/",
        "logo": "images/logos/logo4-2.png"
      },
      {
        "name": "Labor Helper",
        "url": "https://tw-shift-schedule.firebaseapp.com/",
        "logo": "images/logos/logo4-3.png"
      }
    ]
  },
  {
    "name": "Community Infrastructure",
    "description": "Looking ahead and back, the g0v’s infrastructure integrated with citizen’s technology.",
    "content": "Starting in 2016, the g0v Jothon Group began to promote the community's investment in infrastructure construction. It hopes to create a civic tech ecosystem that will allow more people to collaborate and develop over long periods of time.",
    "image": ["images/icons/分類社群基礎建設.png"],
    "projects": [
      {
        "name": "middle2",
        "url": "https://middle2.com/",
        "logo": "images/logos/logo5-1.svg"
      },
      {
        "name": "YA0H: Yet Another g0v Hub",
        "url": "https://amb.g0v.tw",
        "logo": "images/logos/logo5-2.svg"
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
      autoHeight: true,
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
        <li className="projectList w-100 bg-near-white">
          <a className="flexbox alc pa3-l pa1 bw1 br2 ba b--near-white near-black mv2 w-100 f4-l f5 lh-large" href={topicListData[i].projects[k].url} target="_blank">
            <img src={topicListData[i].projects[k].logo} height="75" alt="logo"/>
            <div className="pa3">
              <h6 className="o-50 ma0 fw4 tiny">2017</h6>
              {topicListData[i].projects[k].name}
            </div>
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
          <h4 className="ma0 o-90 pt3 fw6">{topicListData[i].name}
          <h1 className="absolute p-large o-10">{"0"+(i+1)}</h1>
          </h4>
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
              <img className="mw-301" src={topicListData[i].image[0]} width="100%" alt={topicListData[i].name}/>
            </figure>
          </div>
          <div className="fl w-75-l w-100 mw7-l ph5-l">
            <h1 className="mv0 o-20">{"0"+(i+1)}</h1>
            <h1 className="mv0">{topicListData[i].name}</h1>
            <h4 className="mv1 o-60 lh-title">{topicListData[i].description}</h4>
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
          <h3 className="ma0 lh-title pb4-l pb5 tc fw5 hideme hidediv">{section.title}</h3>
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
