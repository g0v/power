import React, { Component } from 'react'
import Swiper from 'swiper';
import $ from 'jquery';

var section =
{
  "title": "從 2012 到 2019， g0v 創造了…",
  "powerby": "揪松團在獎助金網站介紹徵件辦法、合作夥伴與獲獎專案一覽，獲獎專案網站或其他形式服務須至少在持續營運一年內註明 Powered by g0v，並連結回「Powered by g0v」頁面。"
}

var content = [
  {
    "title": "緣起",
    "content": "2012 年，g0v 台灣零時政府社群以「寫程式改造社會」為口號，強調開放透明、公民參與的精神，正式號召第一場活動。"
  },
  {
    "title": "成就",
    "content": "五年來，g0v 本著開放資料、開放政府的精神，已舉辦二十餘次百人大黑客松，超過五千人次參與，共同發想數百個專案，為全球前三大開放政府運動社群之一。"
  },
  {
    "title": "理念",
    "content": "不要問為什麼沒有人做這個，先承認你就是「沒有人」！社會問題不是別人的問題，而是身為公民的、我們的問題。"
  },
  {
    "title": "特色",
    "content": "不只寫程式，g0v 打造公民科技工具來促進公民參與的新實踐，所有成果都以開放授權的方式公開，任何人都可以直接使用、改作、加入協作或發展出更新的版本。"
  },
  {
    "title": "影響",
    "content": "這場開放資料、開放政府運動，也打破民間與政府對抗的傳統運動路線，開創出台灣公民社會與政府互動的新模式。"
  }
]

class Numbers extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: 0
      };
    }
    componentDidMount = () => {
      /* Init Swiper */
      var swiperPhoto = new Swiper('#swiperPhoto', {
        pagination: '#intro-pag',
        paginationClickable: true,
        resistanceRatio: .1,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: 4000,
        onInit: function () {

        },
        onSlideChangeStart: function(){
          $('.show').addClass('none');
        },
        onSlideChangeEnd: function(){
          this.setState({id:swiperPhoto.activeIndex});
          $('.show').removeClass('none');
        }.bind(this)
      });
    }

    render() {
      var divStyleList = [];
      for(var i = 0; i < 5; i++) {
        var divStyle = {
          backgroundImage: 'url(images/numbers/g0v-0'+i+'.jpg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        };
        divStyleList.push(divStyle);
      }
      var bgStyle = {
          backgroundImage: 'url(images/star-transparent.png), url(images/cover/lines.png)',
          backgroundPosition: 'center center, -250px center',
          backgroundSize: 'cover, 150%'
      }

      return (
         <section id="numbers" className="fw-100 bg-primary relative" style={bgStyle}>
          <div className="container center pv6-ns pv0 relative">
            <div className="pa4 h-250 h-300-s bg-white mw6 hideme hidediv mh6-ns mh0 z1 relative pn">
              <h3 className="show ma0 lh-title pb3 fw5 tracked">{content[this.state.id].title}</h3>
              <p className="show ma0 mw6 lh-copy fw4">{content[this.state.id].content}</p>
              <h5 className="tr o-50 mv0 fw1 absolute bottom-right">{(this.state.id+1)+"/5"}</h5>
              <div id="intro-pag" className="swiper-pagination z1 absolute"></div>
            </div>
            <div id="swiperPhoto" className="swiper-container center absolute">
              <div className="swiper-wrapper">
                <div className="swiper-slide" style={divStyleList[0]}></div>
                <div className="swiper-slide" style={divStyleList[1]}></div>
                <div className="swiper-slide" style={divStyleList[2]}></div>
                <div className="swiper-slide" style={divStyleList[3]}></div>
                <div className="swiper-slide" style={divStyleList[4]}></div>
              </div>
            </div>
          </div>
        </section>
        )
      }
    }
export default Numbers
