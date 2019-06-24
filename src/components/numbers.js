import React, { Component } from 'react'
import Swiper from 'swiper';
import $ from 'jquery';

var content = [
  {
    "title": "Origin",
    "content": "At g0v's first event in 2012, the g0v community used the slogan \"Coding to Transform Society\" to emphasize the spirit of openness, transparency, and citizen participation. "
  },
  {
    "title": "Achievement",
    "content": "Over the past five years, g0v has looked to conform to the spirit of open data and open government. g0v has hosted more than 35 bi-monthly hackathons, each with over 100 participants. In total, over 5,000 people have participated in g0v events, creating hundreds of civic innovation projects. Today, g0v is one of the globe's top three largest civic hacking/open government advocacy communities. "
  },
  {
    "title": "Idea",
    "content": "\"Ask not why nobody is doing this. First admit that you are that 'nobody'.\" Society's problems are not other people's problems, but our collective problems as citizens."
  },
  {
    "title": "Features",
    "content": "g0v doesn't just do coding. It also creates civic tech tools that promote new methods of social engagement. All our projects are listed under open licenses. Anyone is free to directly use, change, join, or develop newer versions of g0v projects. "
  },
  {
    "title": "Influences",
    "content": "The open data and open government movements have improved upon the traditional methods that society has used to protest against government, and created a new model for Taiwanese civil society and government to interact. "
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
          backgroundImage: 'url(images/star-transparent.png), url(images/cover/lines.png)',
          backgroundPosition: 'center center, -250px center',
          backgroundSize: 'cover, 150%'
      }

      return (
         <section id="numbers" className="fw-100 bg-primary relative" style={bgStyle}>
          <div className="container center pv6-ns pv0 relative">
            <div className="pa4 h-330 h-440-s bg-white mw6 hideme hidediv mh6-ns mh0 z1 relative pn">
              <h3 className="show ma0 lh-title pb3 fw5">{content[this.state.id].title}</h3>
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
