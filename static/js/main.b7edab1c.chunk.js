(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/glimpse.495f51bb.png"},24:function(e,t,a){e.exports=a(45)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/project1.c813712d.png"},37:function(e,t,a){e.exports=a.p+"static/media/oncall.62913216.jpeg"},38:function(e,t,a){e.exports=a.p+"static/media/spotify.e895b36f.png"},39:function(e,t,a){e.exports=a.p+"static/media/burning-earth.a5afe93a.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/shiny.b01f7020.png"},41:function(e,t,a){e.exports=a.p+"static/media/tinder.8c204870.png"},42:function(e,t,a){e.exports=a.p+"static/media/tetris.88384db4.png"},43:function(e,t,a){e.exports=a.p+"static/media/brickbreaker.8054d824.png"},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(21),r=a.n(i),c=(a(29),a(13)),s=a(1),o=(a(11),a(3)),m=a(4),d=a(6),u=a(5),p=a(14),E=a.n(p),h=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){(new E.a.WOW).init()}},{key:"navEffect",value:function(){window.addEventListener("scroll",(function(){var e=document.getElementById("navbar"),t=e.getBoundingClientRect(),a=document.getElementById("my-background").getBoundingClientRect();t.y<=-t.height&&e.classList.add("fade-in-nav"),-a.height<a.top&&e.classList.remove("fade-in-nav")}))}},{key:"render",value:function(){return l.a.createElement("div",{id:"my-background",className:"background"},l.a.createElement("div",{id:"stars"}),l.a.createElement("div",{id:"stars2"}),l.a.createElement("div",{id:"stars3"}),l.a.createElement("div",{className:"top-container flex"},l.a.createElement("h1",null,"Kelson Flint",l.a.createElement("br",null),"Full Stack Developer"),l.a.createElement("div",{className:"block-contact"},l.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),l.a.createElement("a",{href:"https://github.com/kelsonflint"},l.a.createElement("i",{className:"fa fa-github"})),l.a.createElement("a",{href:"https://www.instagram.com/kelsonflint/?hl=en"},l.a.createElement("i",{className:"fa fa-instagram"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/kelsonflint/"},l.a.createElement("i",{className:"fa fa-linkedin"}))),l.a.createElement("button",{className:"work-button "+this.props.bounceIn,"data-wow-offset":"0",onClick:function(){var e=document.getElementById("projects");window.scrollTo({top:e.offsetTop,behavior:"smooth"})}},"View my work"),l.a.createElement("button",{className:"work-button "+this.props.bounceIn,"data-wow-offset":"0",onClick:function(){var e=document.getElementById("about-container");window.scrollTo({top:e.offsetTop,behavior:"smooth"})}},"View my resume")))}}]),a}(l.a.Component),f=(a(30),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"about-container",className:"content-containers container text-center mt-5"},l.a.createElement("h1",{id:"project-header"},"About Me"),l.a.createElement("body",{id:"top"},l.a.createElement("div",{id:"cv",class:"instaFade"},l.a.createElement("div",{class:"mainDetails"},l.a.createElement("div",{id:"name"},l.a.createElement("h1",{class:"quickFade delayTwo"},"Kelson Flint"),l.a.createElement("h2",{class:"quickFade delayThree"},"Software Engineer")),l.a.createElement("div",{id:"contactDetails",class:"quickFade delayFour"},l.a.createElement("ul",null,l.a.createElement("li",null,"e: ",l.a.createElement("a",{href:"mailto:kelson.flint@gmail.com",target:"_blank"},"kelson.flint@gmail.com")),l.a.createElement("li",null,"w: ",l.a.createElement("a",{href:"http://www.kelsonflint.com"},"www.kelsonflint.com")),l.a.createElement("li",null,"m: (818)-835-6130"))),l.a.createElement("div",{class:"clear"})),l.a.createElement("div",{id:"mainArea",class:"quickFade delayFive"},l.a.createElement("section",null,l.a.createElement("article",null,l.a.createElement("div",{class:"sectionTitle"},l.a.createElement("h1",null,"Personal Profile")),l.a.createElement("div",{class:"sectionContent"},l.a.createElement("p",null,"I am a capable full-stack developer and an ambitious quick learner who is looking to explore the depths of computing through building intuitive software. I am a creative thinker who pays strong attention to detail and always thinks backward from the customer."),l.a.createElement("p",null,"Pursuing a B.S. in Informatics with a minor in Mathematical Physics. Graduating in June 2021"))),l.a.createElement("div",{class:"clear"})),l.a.createElement("section",null,l.a.createElement("div",{class:"sectionTitle"},l.a.createElement("h1",null,"Work Experience")),l.a.createElement("div",{class:"sectionContent"},l.a.createElement("article",null,l.a.createElement("h2",null,"Software Development Engineer Intern at Amazon"),l.a.createElement("p",{class:"subDetails"},"June 2020 - September 2020"),l.a.createElement("ul",null,l.a.createElement("li",null,"Designed and implemented a full-stack server-less solution for overhauling Amazon Oncall's notification system."),l.a.createElement("li",null,"Developed a functional back-end to store, process, and send notification data using Java and multiple AWS Services."),l.a.createElement("li",null,"Built a front-end UI using React/Redux to interact with my back-end services."),l.a.createElement("li",null,"Developed strong skills in debugging, unit testing, and performance optimization"),l.a.createElement("li",null,"Worked well independently and on a team to solve problems."),l.a.createElement("br",null))),l.a.createElement("article",null,l.a.createElement("h2",null,"Software developer at Glimpse Wearables"),l.a.createElement("p",{class:"subDetails"},"October 2018 - June 2019"),l.a.createElement("ul",null,l.a.createElement("li",null,"Startup funded by Amazon Catalyst."),l.a.createElement("li",null,"Led the development of a Swift iOS app that worked in conjunction with our own hardware."),l.a.createElement("li",null,"Assisted the design and development backend services including databases, API\u2019s, and customizable requests for all front-end services."),l.a.createElement("br",null))),l.a.createElement("article",null,l.a.createElement("h2",null,"Intern at Revel"),l.a.createElement("p",{class:"subDetails"},"Summer 2017"),l.a.createElement("ul",null,l.a.createElement("li",null,"Developed and updated the store interface using HTML, CSS, and JavaScript."),l.a.createElement("li",null,"Exposed to back end development, marketing strategies, and Golang."),l.a.createElement("li",null,"Learned the importance of communication and cross-functional teamwork."),l.a.createElement("br",null)))),l.a.createElement("div",{class:"clear"})),l.a.createElement("section",null,l.a.createElement("div",{class:"sectionTitle"},l.a.createElement("h1",null,"Key Skills")),l.a.createElement("div",{class:"sectionContent"},l.a.createElement("ul",{class:"keySkills"},l.a.createElement("li",null,"Java"),l.a.createElement("li",null,"Python"),l.a.createElement("li",null,"Xcode w/ Swift"),l.a.createElement("li",null,"Unity w/ C#"),l.a.createElement("li",null,"Git"),l.a.createElement("li",null,"Microsoft Office"),l.a.createElement("li",null,"React.js"),l.a.createElement("li",null,"R/Rstudio"))),l.a.createElement("div",{class:"clear"})),l.a.createElement("section",null,l.a.createElement("div",{class:"sectionTitle"},l.a.createElement("h1",null,"Education")),l.a.createElement("div",{class:"sectionContent"},l.a.createElement("article",null,l.a.createElement("h2",null,"University of Washington - Seattle"),l.a.createElement("p",{class:"subDetails"},"B.S. in Informatics (2021) - 3.60 GPA"),l.a.createElement("p",null,"Concetration in Data Science and Information Architecture"),l.a.createElement("p",null,"Minor in Mathematical Physics"))),l.a.createElement("div",{class:"clear"})),l.a.createElement("section",null,l.a.createElement("div",{class:"sectionTitle"},l.a.createElement("h1",null,"Interests")),l.a.createElement("div",{class:"sectionContent"},l.a.createElement("ul",{class:"keySkills"},l.a.createElement("li",null,"Software Development"),l.a.createElement("li",null,"Quantum Computing"),l.a.createElement("li",null,"Machine Learning"),l.a.createElement("li",null,"Data Science"),l.a.createElement("li",null,"Climbing"),l.a.createElement("li",null,"Esports"))),l.a.createElement("div",{class:"clear"}))))))}}]),a}(l.a.Component)),b=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).title=e.title,n.description=e.description,n.image=e.image,n.big=e.big,n.detailed=e.detailed,n.website=e.website,n.git=e.git,n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.props.big?l.a.createElement("div",{class:"col"},l.a.createElement("div",{class:"card text-white bg-dark mb-3"},l.a.createElement("img",{class:"card-img-top",src:this.props.image,alt:"project image"}),l.a.createElement("div",{class:"card-body"},l.a.createElement("h5",{id:"card-title",class:"card-title"},this.props.title),l.a.createElement("p",{id:"card-description",class:"card-text"},this.props.description),l.a.createElement("div",null,this.props.detailed?l.a.createElement(c.b,{to:"/glimpse",class:"btn btn-primary"},"Read more"):l.a.createElement("div",null),this.props.website.length>0?l.a.createElement("a",{href:this.props.website,class:"btn btn-primary"}," Website "):l.a.createElement("div",null),this.props.git.length>0?l.a.createElement("a",{href:this.props.git,id:"link",class:"btn btn-primary"}," Github "):l.a.createElement("div",null))))):l.a.createElement("div",{class:"col-md-4"},l.a.createElement("div",{class:"card text-white bg-dark mb-2"},l.a.createElement("img",{class:"card-img-top",src:this.props.image,alt:"project image"}),l.a.createElement("div",{class:"card-body"},l.a.createElement("h5",{id:"card-title",class:"card-title"},this.props.title),l.a.createElement("p",{id:"card-description",class:"card-text"},this.props.description),l.a.createElement("div",{id:"links"},this.props.website.length>0?l.a.createElement("a",{href:this.props.website,id:"link",class:"btn btn-primary"}," Website "):l.a.createElement("div",null),this.props.detailed.length>0?l.a.createElement(c.b,{to:this.props.detailed,id:"link",class:"btn btn-primary"},"Read more"):l.a.createElement("div",null),this.props.git.length>0?l.a.createElement("a",{href:this.props.git,id:"link",class:"btn btn-primary"}," Github "):l.a.createElement("div",null))))))}}]),a}(l.a.Component);b.defaultProps={title:"project",description:"project description",image:a(36),big:!1,detailed:"",website:"",git:""};var v=a(23),g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{id:"projects"},l.a.createElement("h1",{id:"project-header"},"My Projects"),l.a.createElement("div",{className:"project-row"},l.a.createElement(b,{id:"big-card",title:"Amazon Web Services Summer Internship",description:"Designed and implemented a full-stack solution for overhauling Amazon Oncall's notification system. I developed the back-end using Java and multiple AWS Services (Lambda, Step Functions, DynamoDB, S3). I built the UI using React/Redux to interact with my back-end services.",image:a(37),big:!0})),l.a.createElement("div",{id:"first",className:"project-row"},l.a.createElement(b,{id:"glimpseApp",title:"Glimpse iOS App",description:"Startup app funded by Amazon Catalyst",image:a(20),detailed:"/glimpse",website:"https://www.glimpsewearables.com/"}),l.a.createElement(b,{title:"Spotify Jams",description:"React app that utlizes the Spotify API to build playlists",image:a(38),big:!0,git:"https://github.com/kelsonflint/spotify-jams"})),l.a.createElement(v.Parallax,{bgImage:a(39),strength:500},l.a.createElement("h1",{id:"project-header"},"Hot Stuff"),l.a.createElement("div",{className:"project-row"},l.a.createElement(b,{id:"hot",title:"Climate Analysis Shiny App",description:"An interactive data analysis of the effects of greenhouse gases on global climate change.",image:a(40),big:!0,website:"https://swierj.shinyapps.io/final-kelsonflint/"}),l.a.createElement(b,{id:"hot",title:"Tinder Bot",description:"Infinite swipes using Python and Selenium",image:a(41),git:"https://github.com/kelsonflint/tinderbot"}))),l.a.createElement("h1",{id:"project-header"},"Some Extras"),l.a.createElement("div",{id:"games",className:"project-row"},l.a.createElement(b,{title:"Tetris Remake",description:"My first python project using Pygame",image:a(42),git:"https://github.com/kelsonflint/Tetris"}),l.a.createElement(b,{title:"Brick Breaker",description:"A simple Javascript web app",image:a(43),git:"https://github.com/kelsonflint/brickbreaker"})))}}]),n}(l.a.Component),w=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).about=l.a.createRef(),n.projects=l.a.createRef(),n.contact=l.a.createRef(),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){(new E.a.WOW).init()}},{key:"navEffect",value:function(){window.addEventListener("scroll",(function(){}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,{ref:this.navEffect,id:"my-background",aboutRef:this.about,bounceIn:"wow bounceIn"}),l.a.createElement("nav",{id:"navbar",class:"navbar navbar-expand-md navbar-dark"},l.a.createElement("div",{class:"container"},l.a.createElement("a",{className:"navbar-brand",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}},"KelsonFlint.com"),l.a.createElement("button",{type:"button",class:"navbar-toggler collapsed","data-toggle":"collapse","data-target":"#main-nav"},l.a.createElement("span",{class:"menu-icon-bar"}),l.a.createElement("span",{class:"menu-icon-bar"}),l.a.createElement("span",{class:"menu-icon-bar"})),l.a.createElement("div",{id:"main-nav",class:"collapse navbar-collapse"},l.a.createElement("ul",{class:"navbar-nav ml-auto"},l.a.createElement("li",null,l.a.createElement("a",{id:"navlink",onClick:function(){var e=document.getElementById("projects");window.scrollTo({top:e.offsetTop,behavior:"smooth"})},class:"btn-style nav-item nav-link"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{id:"navlink",onClick:function(){var e=document.getElementById("about-container");window.scrollTo({top:e.offsetTop,behavior:"smooth"})},class:"btn-style nav-item nav-link"},"About")))))),l.a.createElement(g,{ref:this.projects,id:"projects"}),l.a.createElement(f,{ref:this.about,id:"about-container",bounceLeft:"wow bounceInLeft",fadeInLeft:"wow fadeInLeft",fadeInRight:"wow fadeInRight",fadeIn:"wow fadeIn",tada:"wow fadeIn"}))}}]),a}(l.a.Component),k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{class:"navbar navbar-expand-md navbar-dark"},l.a.createElement("link",{href:"/your-path-to-fontawesome/css/fontawesome.css",rel:"stylesheet"}),l.a.createElement("link",{href:"/your-path-to-fontawesome/css/brands.css",rel:"stylesheet"}),l.a.createElement("link",{href:"/your-path-to-fontawesome/css/solid.css",rel:"stylesheet"}),l.a.createElement("div",{class:"container"},l.a.createElement("div",null),l.a.createElement("a",{href:"/",class:"navbar-brand"},"KelsonFlint.com")))}}]),a}(l.a.Component),y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"stars"}),l.a.createElement("div",{id:"stars2"}),l.a.createElement("div",{id:"stars3"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("img",{id:"project-pic",src:a(20),alt:"glimpse-app",width:"50%"})),l.a.createElement("div",{id:"highlight-info",className:"col"},l.a.createElement("h5",null,"About the project:"),l.a.createElement("p",null,"I led the development of this Swift iOS app while working on a research startup funded by Amazon Catalyst. The app worked in conjunction with our own custom hardware to capture and display moments from a rare perspective. "),l.a.createElement("br",null),l.a.createElement("h5",null,"Technology used:"),l.a.createElement("p",null,"SwiftUI, Python w/ Django, AWS"),l.a.createElement("br",null),l.a.createElement("h5",null,"Github:"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/kelsonflint/GlimpseApp"},"Glimpse Repository")),l.a.createElement("br",null),l.a.createElement("h5",null,"Website:"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.glimpsewearables.com/"},"Glimpse Wearables")))))}}]),n}(l.a.Component);a(44);var j=function(){return l.a.createElement(c.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/glimpse"},l.a.createElement(k,null),l.a.createElement(y,null)),l.a.createElement(s.a,{path:"/about"},l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(w,null)))),l.a.createElement(s.a,{path:"/"},l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(w,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.b7edab1c.chunk.js.map