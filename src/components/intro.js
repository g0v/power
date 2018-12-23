import React, { Component } from 'react'
import AnimatedNumber from 'react-animated-number';
import $ from 'jquery';

var view = false;

var section =
{
  "title": "What is g0v?",
  "numbers": "From 2012 to 2018, g0v creates...",
  "content": "g0v.tw is an online community that pushes for greater data transparency, and is focused on developing new platforms and tools that help citizens participate in civil society. By substituting the “o” with “0″ in the word “gov”, the new “g0v” not only stands for rethinking the role that government plays from the bottom up, but also represents the way the digital natives generation views the world, in “0s” and “1s.” ",
  "number1": ["Hackathons",""],
  "number2": ["International Summits",""],
  "number3": ["Proposals",""],
  "number4": ["Kenzu",""],
  "number5": ["Contributors","+"],
  "link1": "Let's Hack! >>",
  "link2": "g0v Summit 2018 >>"
}

class Intro extends Component {
    constructor(props) {
      super(props);
      this.state = {
        num: false
      };
    }
    componentDidMount(){

    }

    numbers = () => {
      return (
        <div className="center mt4 mw6">
          <ul className="ma0 pa0 tc">
            <li className="dib center w-50 tc white ph3 hideme hidediv mb5">
              <h1 className="big ma0 tc di pr1 fw2">
              <AnimatedNumber component="text" value="32"
                stepPrecision = {0}
                duration={650} />
              </h1><span>{section.number1[1]}</span>
              <p className="ma0 tc pa0">{section.number1[0]}</p>
              <a className="dib white ma0 pa0" href="https://hack.g0v.tw/" target="_blank" rel="noopener noreferrer"><h6 className="u-line ma0 mt2 o-60">{section.link1}</h6></a>
            </li>
            <li className="dib center w-50 tc white ph3 hideme hidediv mb5">
              <h1 className="big ma0 tc di pr1 fw2">
              <AnimatedNumber component="text" value="3"
                stepPrecision = {0}
                duration={650} />
              </h1><span>{section.number2[1]}</span>
              <p className="ma0 tc pa0">{section.number2[0]}</p>
              <a className="dib white ma0 pa0" href="http://summit.g0v.tw/2018/" target="_blank" rel="noopener noreferrer"><h6 className="u-line ma0 mt2 o-60">{section.link2}</h6></a>
            </li>
            <li className="dib center w-50 tc white ph3 hideme hidediv mb5">
              <h1 className="big ma0 tc di pr1 fw2">
              <AnimatedNumber component="text" value="551"
                stepPrecision = {0}
                duration={950} />
              </h1><span>{section.number3[1]}</span>
              <p className="ma0 tc pa0">{section.number3[0]}</p>
            </li>
            <li className="dib center w-50 tc white ph3 hideme hidediv mb5">
              <h1 className="big ma0 tc di pr1 fw2">
              <AnimatedNumber component="text" value="311"
                stepPrecision = {0}
                duration={950} />
              </h1><span>{section.number4[1]}</span>
              <p className="ma0 tc pa0">{section.number4[0]}</p>
            </li>
            <li className="dib center w-50 tc white ph3 hideme hidediv">
              <h1 className="big ma0 tc di pr1 fw2">
              <AnimatedNumber component="text" value="3000"
                stepPrecision = {0}
                duration={1250} />
              {section.number5[1]}</h1>
              <p className="ma0 tc pa0">{section.number5[0]}</p>
            </li>
          </ul>
        </div>
      )
    }
    render() {
      let num = null;
      if(this.state.num) num = this.numbers();
      var temp = this;
      $(window).scroll( function(){
        if($('#animatedNumber2').length > 0) {
          var bottom_of_object = $('#animatedNumber2').offset().top + $('#animatedNumber2').outerHeight()/4;
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
        backgroundImage: 'url(images/star-transparent.png)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      };
      return (
        <section id="intro" className="fw-100 bg-primary">
          <div className="container center">
            <div className="cf flexbox">
              <div className="fl intro ma0 pt6-l pt5 ph4 pb5 bg-light-gray">
                <div className="ma0 hideme hidediv">
                  <h3 className="ma0 lh-title pb4-l pb3 fw6 tc">{section.title}</h3>
                  <p className="ma0 fw4 lh-large mw6 center">{section.content}</p>
                  <figure className="ma0 hideme hidediv tc pt3">
                    <img src="images/icons/g0v組成_en.png" width="420" alt="g0v-intro" />
                  </figure>
                </div>
              </div>
              <div className="fl intro ma0-l pt6-l pt5 ph4 pb5 bg-primary" id="animatedNumber2" style={bgStyle}>
                <div className="ma0 hideme hidediv">
                <h3 className="ma0 lh-title pb4-l pb3 fw6 white tc">{section.numbers}</h3>
                {num}
                </div>
              </div>
            </div>
          </div>
        </section>
        )
      }
    }
export default Intro
