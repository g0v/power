import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import AnimatedNumber from 'react-animated-number';
import $ from 'jquery';

var view = false;
var section =
{
  "title": "Get ready to witness a “Butterfly effect”!",
  "tagline": "The Butterfly effect asserts that an infinitesimal change can cause a chain reaction that affects the whole system.",
  "intro": "We're g0v, and we've always believed that the innovation and strength behind every good idea in civic tech is like a butterfly flapping its wings. If we can channel sustainable development, and operate in the long term, then we can produce a butterfly effect, and produce results that cause a knock-on effect.",
  "title2": "The g0v Civic Tech Prototype Grant has been set up to generate positive butterfly effects!",
  "intro2": "Why have we set up the g0v \"Civic Tech Prototype Grant\"?",
  "intro3": "For no other reason than to support the advancement of civic tech projects, and to be a generative force that will trigger positive butterfly effects.",
  "contentTitle": "What is the \"g0v Civic Tech Prototype Grant\"?",
  "content": "The grant aims to encourage talented individuals and teams to join the civic tech community and to accelerate the incubation phase of projects. Hosted by g0v Hackathon Organizer Team, the funding of \"g0v Civic Tech Prototype Grant\" is raised from influential media groups, IT firms, and NGOs. The grant awardees are selected based on their projects’ potentials and communal benefits through an open proposal process. Along with the g0v hackathons, g0v Grant hopes to further support projects capable of producing influences, butterfly effects and new possibilities.",
  "number1": ["Proposals", ""],
  "number2": ["Grantee", ""],
  "number3": ["Media Exposure", ""],
  "number4": ["Funds for Grantee", "M TWD"],
  "imageTitle": "Civic Technology Talents",
  "link": "The Grant Website",
  "note": "*Statistics by October 2018."
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
          <h5 className="ma0 tc f5-ns f6">{section.number1[0]}</h5>
          <h1 className="ma0 tc di pr1 f1-ns f2">
          <AnimatedNumber component="text" value="184"
            stepPrecision = {0}
            duration={950} />
          </h1><span>{section.number1[1]}</span>
        </li>
        <li className="dib ma2 w45 tc bg-white pv4-ns pv3 hideme hidediv">
          <h5 className="ma0 tc f5-ns f6">{section.number2[0]}</h5>
          <h1 className="ma0 tc di pr1 f1-ns f2">
          <AnimatedNumber component="text" value="19"
            stepPrecision = {0}
            duration={1250} />
          </h1><span>{section.number2[1]}</span>
        </li>
        <li className="dib ma2 w45 tc bg-white pv4-ns pv3 hideme hidediv">
          <h5 className="ma0 tc f5-ns f6 ph3 ph1-ns">{section.number3[0]}</h5>
          <h1 className="ma0 tc di pr1 f1-ns f2">
          <AnimatedNumber component="text" value="50"
            stepPrecision = {0}
            duration={1550} />
          +</h1><span>{section.number3[1]}</span>
        </li>
        <li className="dib ma2 w45 tc bg-white pv4-ns pv3 hideme hidediv">
          <h5 className="ma0 tc f5-ns f6 ph3 ph1-ns">{section.number4[0]}</h5>
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
          <h1 className="ma0 lh-title pb3 fw7 f2-l f3">{section.title}</h1>
          <p className="ma0 lh-copy fw4 mb4 o-60">{section.tagline}</p>
          <h5 className="ma0 tl mw7 center fw4 f4-l f5 lh-large">{section.intro}</h5>
          </div>
        </div>
        <div className="ma0 pv5 ph4 tc-ns tl bg-secondary white">
          <div className="hideme hidediv">
            <h1 className="ma0 lh-title pb3 fw7 f2-l f3 mw7 center">{section.title2}</h1>
            <h5 className="ma0 tc mw7 center fw4 f4-l f5 lh-large">{section.intro2}<br/>{section.intro3}</h5>
          </div>
        </div>
        <figure className="w-100 tc ma0 bg-primary pb6 relative" style={bgStyle}>
          <div className="hideme hidediv">
            <h4 className="ma0 fw7">{section.imageTitle}</h4>
            <h5 className="ma0 white fw4">Open Source</h5>
            <img src="images/butterfly/CTG_en.svg" width="300" className="absolute" id="ctg" alt="CTG"/>
          </div>
          <div className="removeActive">
            <img src="images/butterfly/people-1.svg" height="180" className="absolute moveActive" id="people-1" width="455" alt="people" />
            <img src="images/butterfly/people-2.svg" height="180" className="absolute moveActive" id="people-2" width="350" alt="people" />
          </div>
          <img className="hideme hidediv" src="images/butterfly/Money_en.svg" id="money" alt="grant" />
          <div className="hidechild">
            <img className="hideme delay-3" src="images/butterfly/CTG-1_en.svg" id="ctg-1" width="255" alt="icon"/>
            <img className="hideme delay-0" src="images/butterfly/CTG-2_en.svg" id="ctg-2" width="255" alt="icon"/>
            <img className="hideme delay-1" src="images/butterfly/CTG-3_en.svg" id="ctg-3" width="300" alt="icon"/>
            <img className="hideme delay-2" src="images/butterfly/CTG-4_en.svg" id="ctg-4" width="300" alt="icon"/>
          </div>
        </figure>
        <div className="ma0 bg-near-white pb5 pt3 ph4">
          <div className="container mw8 center hideme hidediv">
            <div className="cf mt3">
              <div className="fl w-100 w-50-l">
                <div className="pa4-l hidediv hideme tc tl-l">
                  <h5 className="mv3">{section.contentTitle}</h5>
                  <p className="ma0 pt2 tl lh-large p-small">
                    {section.content}
                  </p>
                  <a href="https://grants.g0v.tw/" target="_blank" rel="noopener noreferrer" className="link btn ba b--orange bw1 dib center ph4 br1 btn-hover-white dark-black relative overflow-hidden mt4">
                    <span className="btn-color bg-secondary ba b--orange bw2 w-100 h-100 absolute"></span>
                    <p className="ma0 lh-large tc fw5 pv3 relative mw5">
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
