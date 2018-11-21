import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import AnimatedNumber from 'react-animated-number';
import $ from 'jquery';

var view = false;
var section =
{
  "title": "準備好，見證一場「蝴蝶效應」！",
  "title2": "公民科技創新獎助金，為引發正向蝴蝶效應而生！",
  "intro2": "「公民科技創新獎助金」為什麼存在？",
  "intro3": "不為別的，是為「支持專案推進，引發正向蝴蝶效應」的關鍵推力而生！",
  "tagline": "蝴蝶效應（Butterfly effect），指一個微小的變化，就能帶動整個系統的巨大連鎖反應。",
  "intro": "我們是 g0v，一直相信，每一個公民科技好點子背後的創意與力量，都像是一隻輕拍翅膀的蝴蝶，若能導入持續開發、長期營運的人力與資源，就能引發蝴蝶效應，產生足以扭轉未來的成果。",
  "contentTitle": "什麼是「公民科技創新獎助金」？",
  "content": "為鼓勵更多優秀的人才投入新型態民主實驗場、加速孵化更多成果產出，固定舉辦大松的 g0v 零時政府揪松團除了持續雙月黑客松活動，亦號召國內外各大具社會影響力之媒體、科技產業募集「公民科技創新獎助金」，並設計參與評選機制，獎助具有潛力且有助公共利益的專案，投入原型開發或維護營運。",
  "number1": ["累積總提案", "件"],
  "number2": ["已獲獎專案", "件"],
  "number3": ["媒體報導", "篇"],
  "number4": ["已發放獎金", "萬元"],
  "imageTitle": "創意、公民科技人才",
  "link": "瀏覽獎助金官方網站",
  "note": "*此數字統計截止至 2018 年 10 月份。"
}

class Butterfly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: false
    };
  }
  componentDidMount = () => {
    
  }
  numbers = () => {
    return (
      <ul className="ma0 pa0 tc">
        <li className="dib ma2 w45 tc bg-white pv4-ns pv3 hideme hidediv">
          <h5 className="ma0 tc tracked f5-ns f6">{section.number1[0]}</h5>
          <h1 className="ma0 tc di pr1 f1-ns f2">
          <AnimatedNumber component="text" value="184"
            stepPrecision = {0}
            duration={950} />
          </h1><span>{section.number1[1]}</span>
        </li>
        <li className="dib ma2 w45 tc bg-white pv4-ns pv3 hideme hidediv">
          <h5 className="ma0 tc tracked f5-ns f6">{section.number2[0]}</h5>
          <h1 className="ma0 tc di pr1 f1-ns f2">
          <AnimatedNumber component="text" value="19"
            stepPrecision = {0}
            duration={1250} />
          </h1><span>{section.number2[1]}</span>
        </li>
        <li className="dib ma2 w45 tc bg-white pv4-ns pv3 hideme hidediv">
          <h5 className="ma0 tc tracked f5-ns f6">{section.number3[0]}</h5>
          <h1 className="ma0 tc di pr1 f1-ns f2">
          <AnimatedNumber component="text" value="50"
            stepPrecision = {0}
            duration={1550} />
          +</h1><span>{section.number3[1]}</span>
        </li>
        <li className="dib ma2 w45 tc bg-white pv4-ns pv3 hideme hidediv">
          <h5 className="ma0 tc tracked f5-ns f6">{section.number4[0]}</h5>
          <h1 className="ma0 tc di pr1 f1-ns f2">
          <AnimatedNumber component="text" value="881"
            stepPrecision = {0}
            duration={1850} />
          </h1><span>{section.number4[1]}</span>
        </li>
      </ul>
    )
  }
  render() {
    let num = null;
    if(this.state.num) num = this.numbers();
    var temp = this;
    $(window).scroll( function(){      
      if($('#animatedNumber1').length > 0) {
        var bottom_of_object = $('#animatedNumber1').offset().top + $('#animatedNumber1').outerHeight()/4;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
          if(!view) {
            temp.setState({num: true});
            view = true;
          }
        }
      }
    });
    var bgStyle = {
      backgroundImage: 'url(images/butterfly/butterfly-tri.svg), url(images/star-transparent.png)',
      backgroundPosition: 'center top, center center',
      backgroundSize: '1600px, cover',
      backgroundRepeat: 'no-repeat, no-repeat'
    };

    return ( 
      <section id="butterfly" className="fw-100"> 
        <div className="ma0 pv5 ph4 tc-ns tl bg-white">
          <div className="hideme hidediv">
          <h1 className="ma0 lh-title pb3 fw7 tracked f2-l f3">{section.title}</h1>
          <p className="ma0 lh-copy fw4 mb4 o-60">{section.tagline}</p>
          <h5 className="ma0 tl mw7 center fw4 f4-l f5 lh-large">{section.intro}</h5>
          </div>
        </div>
        <div className="ma0 pv5 ph4 tc-ns tl bg-secondary white">
          <div className="hideme hidediv">
            <h1 className="ma0 lh-title pb3 fw7 tracked f2-l f3">{section.title2}</h1>
            <h5 className="ma0 tc mw7 center fw4 f4-l f5 lh-large">{section.intro2}<br/>{section.intro3}</h5>
          </div>
        </div>
        <figure className="w-100 tc ma0 bg-primary pb6 relative" style={bgStyle}>
          <div className="hideme hidediv">
            <h4 className="ma0 fw7">{section.imageTitle}</h4>
            <h5 className="ma0 white fw4">Open Source</h5>
            <img src="images/butterfly/CTG.svg" width="300" className="absolute" id="ctg" alt="CTG"/>
          </div>
          <div className="removeActive">
            <img src="images/butterfly/people-1.svg" height="180" className="absolute moveActive" id="people-1" width="455" alt="people" />
            <img src="images/butterfly/people-2.svg" height="180" className="absolute moveActive" id="people-2" width="350" alt="people" />
          </div>
          <img className="hideme hidediv" src="images/butterfly/Money.svg" id="money" alt="grant" />
          <div className="hidechild">
            <img className="hideme delay-3" src="images/butterfly/CTG-1.svg" id="ctg-1" width="255" alt="icon"/>
            <img className="hideme delay-0" src="images/butterfly/CTG-2.svg" id="ctg-2" width="255" alt="icon"/>
            <img className="hideme delay-1" src="images/butterfly/CTG-3.svg" id="ctg-3" width="300" alt="icon"/>
            <img className="hideme delay-2" src="images/butterfly/CTG-4.svg" id="ctg-4" width="300" alt="icon"/>
          </div>
        </figure>
        <div className="ma0 bg-near-white pb5 pt3 ph4">
          <div className="container mw8 center hideme hidediv">
            <div className="cf mt3">
              <div className="fl w-100 w-50-l">
                <div className="pa4-l hidediv hideme tc tl-l">
                  <h5 className="mv3">{section.contentTitle}</h5>
                  <p className="ma0 pt2 tl lh-large">
                    {section.content}
                  </p>
                  <a href="https://grants.g0v.tw/" target="_blank" rel="noopener noreferrer" className="link btn ba b--orange bw1 dib center ph4 br1 btn-hover-white dark-black relative overflow-hidden mt4">
                    <span className="btn-color bg-secondary ba b--orange bw2 w-100 h-100 absolute"></span>
                    <p className="ma0 lh-title tc fw5 pv3 relative">
                      {section.link}
                      <FontAwesome className="pl2" name='long-arrow-right'/>
                    </p>
                  </a>
                </div>
              </div>
              <div className="numbers fl w-100 w-50-l mt5 mt0-l" id="animatedNumber1" >
                <div className="pt4-l center">
                  {num}
                  <h6 className="ma0 mt2 tc o-30">{section.note}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
    }
  }
export default Butterfly
