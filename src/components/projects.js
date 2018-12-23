import React, { Component } from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import Modal from 'react-responsive-modal';
import FontAwesome from 'react-fontawesome';

var modalId = "";

var section =
{
  "title": "Featured Grantees",
  "tagline": "Since 2017, g0v Civic Tech Prototype Grant has gradually brought in substantial resources to allow 19 winning teams and projects to continue their operation. These outstanding projects have successfully created changes!" ,
  "insight": "Insight",
  "idea": "Idea",
  "impact": "Impact",
  "team": "Team Members:",
  "contact": "Contact Information:"
}

var projectListData = [
  {
    "name": "AgriWeather",
    "description": "Micro-meteorological sensors combined with field note APP, and extended to data analysis, AgriWeather can start a new page in argiculture with small-scale farmers.",
    "logo": "images/projects/logo-turt.png",
    "image": ["images/projects/cover-turt.png", "images/projects/insight-turt.png", "images/projects/idea-turt.png", "images/projects/impact-turt.png"],
    "url": "http://agriweather.beehivedt.com/",
    "insight": "Small-scale farmers lack access to open agricultural data such as real-time information and micro-weather reports from the field, meanwhile, they cannot afford expensive equipment to collect such data. it is one of the prime reasons that small-scale farmers in Taiwan have a difficult time cultivating through scientific methods.",
    "idea": "Shaw Wu and tech farmer Xingyan Chen who participated in the Open Hack Farm have set up “AgriWeather” to produce agricultural soil sensors and micro-meteorological boxes to collect data, the received environmental data on dashboards facilitate farmers.",
    "impact": "The AgriWeather core team members quickly grew from three to more than ten people when they received the g0v Grant. They received two grants through their “AgriNote” project, which is a prototype field note app, which has built a bridge for farmers, experts and scholars. All the results of AgriWeather will continue to feed back into Open Hack Farm.",
    "team": "團隊介紹",
    "create": [{"title":"Farmers for Closed Beta", "num":60}, {"title":"Plant Species", "num":600}, {"title":"Date of Fertilizer", "num":3000}],
    "people": "吳君孝／陳幸延／余孟勳／張育誠／林俊廷／施旭峰／寧格致／吳伯彥／蘇文毓／梁芳綺／鍾幸芸／胡靜諭／盧安邦／楊宗儒／許靜宜／林泰佑"
  },
  {
    "name": "COFACTS LINE BOT",
    "description": "Using cooperation between chatbots and people to check and clarify the veracity of information that circulates inside closed LINE groups.",
    "logo": "images/projects/logo-line.png",
    "image": ["images/projects/cover-line.png", "images/projects/insight-line.png", "images/projects/idea-line.png", "images/projects/impact-line.png"],
    "url": "https://cofacts.hacktabl.org/",
    "insight": "Many rumors are spread through LINE. Those rumors may be false or misleading information or wilful deceit. In serious cases, they can severely affect people’s lives.",
    "idea": "By adding the “LINE bot Cofacts” as a friend, LINE users who are not familiar with the use of Google or users who don’t know how to search for information, can directly send a request to the bot to evaluate the veracity of dubious information. The bot then determines the reliability of the information and sends a reply to the user.",
    "impact": "The Cofacts team took part in different national and international meetings - including the National Communications Commission (NCC) discussion meeting on fake news, civic tech forums in Singapore, South Africa, etc. - to demonstrate the social impact of the Cofacts project in the field of fact checking and other related areas. Currently, around 20,000 people use the LINE bot. Nearly 250 pieces of information are reported to the bot each week and 200 editors have joined the Cofacts team online to help deconstruct rumors.",
    "team": "團隊介紹",
    "create": [{"title":"Rumors checked", "num":14121}, {"title":"News items reported each week", "num":250}],
    "people":"郭冠宏（ggm）／梁翔勝（mrorz）／李柏緯（lucien）／魏妤庭（hazel）／李比鄰（billion）／劉澄真（delightfullychoatic）／朱柏澂（darkbtf）"
  },
  {
    "name": "Open Corporate Groups",
    "description": "The \"Open Corporate Groups\" maps the relationship between large-scale conglomerates and companies accused of emitting air pollution, and uses data from the \"Thaubing Project\".",
    "logo": "images/projects/logo-open.png",
    "image": ["images/projects/cover-open.png", "images/projects/insight-open.png", "images/projects/idea-open.png", "images/projects/impact-open.png"],
    "url": "https://thaubing.gcaa.org.tw/companydata/openGroupLanding/index.html",
    "insight": "In the past five years, there have been some conglomerates that have been fined more than $37 million NTD for discharging waste. The government's $3.7 billion NTD investment in water had been eliminated. However, over the past 5 years, the group enjoys tax relief of $2.996 billion NTD. The amount of fines it receives does not equal the amount of subsidies and awards it receives, and leading companies continue to chase high profits at the cost of consuming external environmental costs.",
    "idea": "In order to integrate the \"Thaubing Project\" pollution penalty records, the team compared date from the g0v project \"Taiwan Corporate Data\", and sorted out the uniform number of each company. After half a year of prototyping, it has imported four years of data (2013-2016), totaling more than 1,400 conglomerates and 30,000 companies.",
    "impact": "The Open Corporate Groups emphasizes a slogan of “let enterprises take more responsibility” and expects to make pollution appear through the power of open data. From then on, people will no longer have to passively wait for the government to impose penalties. They can supervise illegal enterprises and report to the government on the basis of actual data.",
    "team": "團隊介紹",
    "create": [{"title":"Environment pollution records", "num":71366}, {"title":"Enterprise groups", "num":1487}],
    "people": "卞中佩／洪申翰／曾虹文／陳奕伶"
  },
  {
    "name": "Taiwan National Treasures",
    "description": "'Taiwan National Treasures' uses crowdsourcing and gamification to digitize image files from historical archives. The project looks to open up previously closed Taiwanese archives once kept away in overseas archives. ",
    "logo": "images/projects/logo-treat.png",
    "image": ["images/projects/cover-treat.png", "images/projects/insight-treat.png", "images/projects/idea-treat.png", "images/projects/impact-treat.png"],
    "url": "https://www.nationaltreasure.tw/",
    "insight": "The US National Archives has currently declassified over 60 million records of Taiwan-related historical records. The vast majority of these records are not digitized. The only way to view these records is by visiting the US National Archives in Washington DC or Maryland. Compared to the Japanese government, which has commissioned a professional team of ten people to digitize for more than 10 years, the Taiwan National Treasures team would like to ask: \"The government doesn’t want to do it, so is it possible that Taiwanese people can do digitalization together?\"",
    "idea": "The Taiwan National Treasure Team calls on designers and engineers to help develop an app that can digitize archive material. The app can automatically assign numbers to volunteers and process 100 to 200 pages of archives in an hour. These digitized archives will be uploaded to the database, and the text in the image will be identified by the program and become searchable data. Meanwhile, the English text can be translated into Chinese, making it easier for the people in Taiwan to read.",
    "impact": "This is an ambitious project. They do not only want to dig up the archives of the US National Archives, but also hope that netizens’ spirit and technological tools will allow Taiwanese people around the world to dig through these treasures. After all, the British Museum, the Dutch East India Company of the Netherlands, Russia, Japan, and Australia all have a lot of archives about Taiwan that has not been studied. At present, the team has established the \"Taiwan National Treasure Foundation\" in the United States, and organizes volunteers to digitize archives in Maryland each month, accumulating more than 100,000 archives online.",
    "team": "團隊介紹",
    "create": [{"title":"Volunteers", "num":50}, {"title":"Digitize archives", "num":200000}],
    "people":"蕭新晟（hsiao-a）／林育正（小風）／莊士杰（Abraham）／張文馨（moon）"
  }
]

class Projects extends Component {
  componentDidMount() {

  }
  state = {
    open: false,
  };

  onOpenModal = (e) => {
    modalId = e.target.dataset.id;
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  numbers = (i,j) => {
    return (
      <li className="center dib-l ma2 w46 tc white z1">
        <h5 className="ma0 tc">{projectListData[i].create[j].title}</h5>
        <h1 className="ma0 tc di pr1">{projectListData[i].create[j].num+"+"}</h1>
      </li>
    )
  };
  contact = (i) => {
    switch(i) {
      case "0":
        return (
          <p><FontAwesome className="pr2" name='envelope'/>Email: shawwu@beehivedt.com<br/><FontAwesome className="pr2" name='slack'/>g0v Slack #shawwu<br/><FontAwesome className="pr2" name='facebook-square'/>Facebook: <a href="https://www.facebook.com/agriweather/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/agriweather/</a><br/>Line: @tyl2003d</p>
        )
      case "1":
        return (
          <p><FontAwesome className="pr2" name='envelope'/>Email: cofacts@googlegroups.com<br/><FontAwesome className="pr2" name='slack'/>g0v slack #cofacts<br/><FontAwesome className="pr2" name='facebook-square'/>Facebook: <a href="https://www.facebook.com/cofacts.tw" target="_blank" rel="noopener noreferrer">https://www.facebook.com/cofacts.tw</a></p>
        )
      case "2":
        return (
          <p><FontAwesome className="pr2" name='envelope'/>Email: gcaa.official@gmail.com</p>
        )
      case "3":
        return (
          <p><FontAwesome className="pr2" name='envelope'/>Email: join@nltr.tw<br/><FontAwesome className="pr2" name='slack'/>g0v slack #national-treasure<br/><FontAwesome className="pr2" name='facebook-square'/>Facebook: <a href="https://www.facebook.com/twnationaltreasure" target="_blank" rel="noopener noreferrer">https://www.facebook.com/twnationaltreasure</a></p>
        )
      default:
        return false
    }
  }

  modalContent = (i) => {
    if(projectListData[i]) {
      var large = projectListData[i].image[0];
      //var medium = projectListData[i].image[0].split('.')[0]+'-m.png';
      //var small = projectListData[i].image[0].split('.')[0]+'-s.png';
      var k = large;
      var bgStyle = {
        backgroundImage: 'url('+k+')',
        backgroundPosition: 'center top',
        backgroundSize: 'cover'
      };
      let numberList = [];
      for(var j = 0; j < projectListData[i].create.length; j++) {
        numberList.push(this.numbers(i,j));
      }

      return (
        <div className="pb4">
          <div className="mh-600 flexbox alc bg-dark-black">
            <div className="w-100 mh-600 o-50 absolute pn" style={bgStyle}></div>
            <div className="container mw9 w-85 center white">
              <div className="cf relative z1 flexbox alc">
                <div className="fl w-20-l w-100 pr4-l mb0-l mb4">
                  <img className="ma0" src={projectListData[i].logo} alt={projectListData[i].name} width="240" />
                </div>
                <div className="fl w-75-l w-100">
                  <h1 className="ma0 fw2">{projectListData[i].name}</h1>
                  <h5 className="mt2 o-90 fw4 mw6 mb0">{projectListData[i].description}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="mt5 container mw9 w-85 center">
            <div className="cf relative z1 flexbox alc">
              <div className="content fl w-50-l w-100 ph3">
                <img src="images/cover/big-butterfly.png" width="100" className="dib" alt="butterfly"/>
                <h3 className="ma0 fw4 mb3 dib"> <span className="o-50">1 • </span>{section.insight}</h3>
                <p className="fw4 mv2 o-70 mw6 pb4 lh-large">{projectListData[i].insight}</p>
              </div>
              <div className="content fl w-50-l w-100 ph3">
                <img className="mb5-l mb4" src={projectListData[i].image[1]} alt={projectListData[i].name}/>
              </div>
            </div>
            <div className="cf relative z1 flexbox alc">
              <div className="content fl w-50-l w-100 ph3 fo2-l">
                <img src="images/cover/big-butterfly.png" width="100" className="dib" alt="butterfly"/>
                <h3 className="ma0 fw4 mb3 dib"> <span className="o-50">2 • </span>{section.idea}</h3>
                <p className="fw4 mv2 o-70 mw6 pb4 lh-large">{projectListData[i].idea}</p>
              </div>
              <div className="content fl w-50-l w-100 ph3 fo1-l">
                <img className="mb5-l mb4" src={projectListData[i].image[2]} alt={projectListData[i].name}/>
              </div>
            </div>
            <div className="cf relative z1 flexbox alc">
              <div className="content fl w-50-l w-100 ph3">
                <img src="images/cover/big-butterfly.png" width="100" className="dib" alt="butterfly"/>
                <h3 className="ma0 fw4 mb3 dib"> <span className="o-50">3 • </span>{section.impact}</h3>
                <p className="fw4 mv2 o-70 mw6 pb4 lh-large">{projectListData[i].impact}</p>
              </div>
              <div className="content fl w-50-l w-100 ph3">
                <img className="mb5-l mb4" src={projectListData[i].image[3]} alt={projectListData[i].name}/>
              </div>
            </div>
          </div>
            <ParallaxBanner
              className="fw-100 bg-primary pv6-l pv5 bt-orange-small"
              layers={[
                  {
                      image: 'images/star-transparent.png',
                      amount: .1,
                      slowerScrollRate: false,
                  }
              ]}
              style={{
                  height: 'auto',
              }}
            >
              <div className="container mw9 w-85 tc center">
                <ul className="ma0 pa0 tc intro-num">
                  {numberList}
                  <img src="images/介紹人.svg" className="absolute bottom-0" width="450" alt="intro-person" />
                </ul>
              </div>
            </ParallaxBanner>
          <div className="mt5 container mw9 w-85 center">
            <div className="cf relative z1 flexbox lh-large">
              <div className="content fl w-50-l w-100 ph3">
                <h4 className="ma0">{section.team}</h4>
                <p className="mw6">{projectListData[i].people}</p>
              </div>
              <div className="content fl w-50-l w-100 ph3">
                <h4 className="ma0">{section.contact}</h4>
                {this.contact(i)}
              </div>
            </div>
          </div>
        </div>
      );
    }
    else return false;
  }

  project = (i) => {
    //var large = projectListData[i].image[0];
    var medium = projectListData[i].image[0].split('.')[0]+'-m.png';
    //var small = projectListData[i].image[0].split('.')[0]+'-s.png';
    var divStyle = {
      backgroundImage: 'url(' + medium + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };
    return (
      <div className="fl project ma3 cp hideme-more hidediv" data-id={i} onClick={this.onOpenModal}>
        <div className="overflow-hidden center mt0 mb3 bg-white h5 relative br1 pn">
          <span className="bg-dark w-100 h-100 absolute showdiv showme-expand-y"></span>
          <figure className="project-img w-100 h-100 ma0" style={divStyle}></figure>
        </div>
        <div className="pt0 pl5-ns pl0 dash hideme hidediv pn">
          <h4 className="ma0 white fw4">{projectListData[i].name}</h4>
          <p className="white mt2 o-70">{projectListData[i].description}</p>
        </div>
      </div>
    )
  }

  render() {
    let projectList = [];
    for(var i = 0; i < projectListData.length; i++) {
      projectList.push(this.project(i));
    }
    const { open } = this.state;
    return (
      <ParallaxBanner
          className="fw-100"
          layers={[
              {
                  image: 'images/cover-bg.png',
                  amount: .2,
                  slowerScrollRate: false,
              }
          ]}
          style={{
              height: 'auto'
          }}
      >
      <section id="projects" className="fw-100 bg-dark pv6-l pv5">
        <div className="container mw9 w-85 center white">
          <h3 className="ma0 lh-title pb4-l pb3 tc fw5 hideme hidediv">{section.title}</h3>
            <h5 className="ma0 lh-large tc mw7 center fw4 o-70 mb5-l mb4 f4-l f5 hideme hidediv">{section.tagline}</h5>
          <div className="cf flexbox center mw74">
            {projectList}
          </div>
        </div>
        <Modal open={open} onClose={this.onCloseModal} little>
          {this.modalContent(modalId)}
        </Modal>
      </section>
      </ParallaxBanner>
    )
  }
}

export default Projects;
