/*global FB*/
import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { ParallaxBanner } from 'react-scroll-parallax';

var section =
{
  "title": "Take Actions",
  "tagline": "Join us and create more butterfly effects!",
  "facebook": "Share to Facebook"
}

var shareListData = [
  {
    "name": "Sign Up for the Hackathon",
    "description": "Looking for a place to relieve some sweat and blood? Come join us at hack.g0v.tw",
    "action": "More Information",
    "url": "https://hack.g0v.tw/",
    "img": "報名黑客松"
  },
  {
    "name": "Support the Grant initiative",
    "description": "Sponsor us. Help us achieve even more possibilities.",
    "action": "Donate Now",
    "url": "https://g0vjothon.typeform.com/to/jycWXK",
    "img": "贊助獎助金"
  },
  {
    "name": "The Newest Annual Report",
    "description": "The 2018 Annual Report to know stories.",
    "action": "Download Now",
    "url": "https://drive.google.com/file/d/1mV89GPIm7wSNci1gkeF_idy1odS4E5UD/view?usp=sharing",
    "img": "下載最新年鑑"
  }
]

class Share extends Component {
  share = (i) => {
    return (
      <div className="push fl relative">
        <span className="bg-white w-100 h-100 absolute showdiv showme-expand-y delay"></span>
        <span className="bg-primary w-100 h-100 absolute showdiv showme-expand-y"></span>
        <div className="bg-white pv4 hover-bg-light-gray bg-animate tc">
          <figure className="mb2 center">
            <img src={"images/icons/CTA"+shareListData[i].img+".png"} width="200" alt={shareListData[i].name}/>
          </figure>
          <h5 className="ma0 ph4">{shareListData[i].name}</h5>
          <p className="mw-320 mb4 center tc ph4 h2 p-small">{shareListData[i].description}</p>
          <a href={shareListData[i].url} target="_blank" className="link btn ba b--orange bg-white hover-white bw1 dib center ph4 br1 dark-black relative overflow-hidden mt4">
            <span className="btn-color bg-secondary ba b--orange bw2 w-100 h-100 absolute"></span>
            <p className="ma0 lh-title tc fw5 pv3 relative">
              {shareListData[i].action}
              <FontAwesome className="pl2" name='long-arrow-right'/>
            </p>
          </a>
        </div>
      </div>
    )
  }
  socialShare = () => {
    if (typeof FB !== 'undefined') {
      FB.ui({
        method: 'share',
        href: "https://grants.g0v.tw/power",
      }, function(response){});
    }
  }
  render() {
    let shareList = [];
    for(var i = 0; i < shareListData.length; i++) {
      shareList.push(this.share(i));
    }
    return (
      <div>
        <section id="share" className="fw-100 bg-white pt5"> 
          <h3 className="ma0 lh-title pb4-l pb3 tc fw5 hideme hidediv">{section.title}</h3>
          <h5 className="ma0 lh-copy tc mw7 center fw4 f4-l f5 o-70 mb4 hideme hidediv">{section.tagline}</h5>
          <div className="cf flexbox">
            {shareList}
          </div>
        </section>
        <ParallaxBanner
          className="fw-100 bg-dark pv5"
          layers={[
              {
                  image: 'images/cover-bg.png',
                  amount: 0.5,
                  slowerScrollRate: false,
              }
          ]}
          style={{
              height: '184px',
          }}
        >
          <div className="container mw9 w-85 tc center">
            <div className="cp link btn ba b--white bw1 dib center ph4 br1 white btn-hover-black relative overflow-hidden" onClick={this.socialShare}>
              <span className="btn-color bg-white w-100 h-100 absolute b--white bw2 ba"></span>
              <p className="ma0 lh-title tc fw5 pv3 relative">
                <FontAwesome className="pr2" name='facebook-square'/>
                {section.facebook}
              </p>
            </div>
          </div>
        </ParallaxBanner>
      </div>
    )
  }
}

export default Share;

        
