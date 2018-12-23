import React, { Component } from 'react'
import Tooltip from 'rc-tooltip'

var section =
{
  "title": "Partners",
  "powerby": "Projects that receive an award need to mark their website with a \"powered by g0v\" insignia, and link back to the \"powered by g0v\" official website for at least one year. "
}

var partnerListData = [
  {
    "name": "Vision Project, United Daily News Group",
    "description": "\"Vision Project\" isn't just news, it's a call to action. Let's cooperate to make positive change. ",
    "image": ["images/partners/logo-lian.svg"]
  },
  {
    "name": "Taiwan Mobile Foundation",
    "description": "We hope to become the leader in digital convergence and promote public welfare with technology in order to maximize social benefits.",
    "image": ["images/partners/logo-taiwan.svg"]
  },
  {
    "name": "Former Minister without Portfolio and lawyer Jaclyn Tsai",
    "description": "Ms. Tsai joined the Executive Yuan as Minister without Portfolio in 2013. She proposed the \"vTaiwan\" platform at a g0v hackathon in 2014, and worked with g0v volunteers to co-create the platform. ",
    "image": ["images/partners/logo-yulin.svg"]
  },
  {
    "name": "Chunghwa Telecom",
    "description": "Chunghwa Telecom is the largest telecommunications company in Taiwan and the incumbent mobile, PSTN and broadband carrier there.",
    "image": ["images/partners/logo-cht.png"]
  },
  {
    "name": "AppWorks",
    "description": "Started in 2010, AppWorks Accelerator is the turbo engine built for seed-stage startups and your connection to our network of 328 startups and 925 founders, the largest of its kind in Asia.",
    "image": ["images/partners/logo-appworks.png"]
  },
  {
    "name": "EasyCard Corp.",
    "description": "The EasyCard Corporation was officially established in March 2000 and launched a contactless smartcard, they has extended its reach to island-wide public transit, moreover, to people by serving as a tool for small-value payments, as well as used at leisure facilities, hospitals, government agencies and library self-checkout kiosks.",
    "image": ["images/partners/logo-easycard.png"]
  },
  {
  "name": "Openfind",
  "description": "Openfind is committed to Internet-related technology R&D, and provide high quality, stable, and scalable software and services.",
  "image": ["images/partners/logo-openfind.svg"]
  },
  {
  "name": "Weatherrisk",
  "description": "Weatherrisk is the first private weather company in Taiwan, serving customers at more than 170 companies across media, transportation, manufacturing, logistics, and distributing.",
  "image": ["images/partners/logo-weather.svg"]
  },
  {
  "name": "Open Culture Foundation",
  "description": "OCF supports local communities in advocating for the use of open technologies in a broad range of sectors, including open source software, open hardware, and open data.",
  "image": ["images/partners/logo-ocf.svg"]
  },
  ]

class Partner extends Component {
  partner = (i) => {
    var ratio = {
      objectFit: "contain"
    }
    return (
      <div className="fl partners ma3 bg-white hidediv hideme br1">
        <div className="pa4">
          <Tooltip placement="bottom" mouseLeaveDelay={0} trigger={['hover']} overlay={<span><span class='fw7 f5 mv3'>{partnerListData[i].name}</span><br/>{partnerListData[i].description}</span>}>
            <figure className="center mb3 tc">
              <img src={partnerListData[i].image[0]} height="100" alt={partnerListData[i].name} style={ratio}/>
            </figure>
            {/*
            <p className="tc ma0 o-90 pt3 fw6">{partnerListData[i].name}</p>
            <p className="tl mw-320 center o-70 p-small ph2">{partnerListData[i].description}</p>
            */}
          </Tooltip>
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
          <h3 className="ma0 lh-title pb4-l pb3 tc fw5 hideme hidediv">{section.title}</h3>
          <div className="cf flexbox center mw74">
            {partnerList}
          </div>
        </div>
      </section>
    )
  }
}

export default Partner;
