(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,a){t.exports=a(35)},30:function(t,e,a){},35:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(16),c=a.n(s),i=(a(29),a(30),a(17)),o=a(18),l=a(22),w=a(19),u=a(23),g=a(10),m=a(5);var h=function(){return r.a.createElement("footer",{className:"footer nes-container is-rounded is-dark"},r.a.createElement("p",null,"Feature Of Project"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/cscolabear/weather-crawler/"},"weather-crawler")," | puppeteer, ci, travis, nodejs"),r.a.createElement("p",null,"Coding by Cola"),r.a.createElement("div",{className:"github-area"},r.a.createElement("a",{href:"https://github.com/cscolabear/weather-crawler",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"nes-octocat animate"}))))},_=function(t){var e=t.city,a=e.checked?"is-checked":"";return r.a.createElement("label",{ref:e.ref,className:"tab-label ".concat(a),onClick:function(){return t.onClick(e.id)}},r.a.createElement("span",null,e.county),r.a.createElement("span",{className:"en-county-name"},"/",e.en_county_name))};var p=function(t){var e=t.allDay,a=t.cityId,n=[];return e.current_title.forEach(function(t,s){n.push(function(t,e,a){return r.a.createElement("div",{className:"tabs__tab-column-row",key:"".concat(e,"-").concat(t.current_title[a])},r.a.createElement("h2",null,r.a.createElement("span",null,t.current_title[a]),r.a.createElement("span",{className:"normal"}," - ",t.rainImg[a].alt)),r.a.createElement("div",{className:"tabs__tab-column-row-detail"},r.a.createElement("div",{className:"two-col"},r.a.createElement("p",null,"\u964d\u96e8\u6a5f\u7387 ",r.a.createElement("span",{className:(n=t.rain[a],n>60?"nes-text is-primary":"")},t.rain[a]," %")),r.a.createElement("p",{className:""},t.temperature[a]," \u02daC")),r.a.createElement("div",{className:"two-col-photo"},r.a.createElement("img",{src:t.rainImg[a].src,alt:t.rainImg[a].alt}))));var n}(e,a,s))}),r.a.createElement("div",{className:"tabs__tab-column"},n)},v=function(t){var e=t.city;return r.a.createElement("div",{className:"tabs__tab-content nes-container is-rounded is-dark"},r.a.createElement("p",{className:"tabs__tab-content__desc"},e.description,r.a.createElement("a",{href:e.target_url,target:"_blank",className:"tab-desc-target-url",rel:"noopener noreferrer"},r.a.createElement("span",{role:"img","aria-label":"hand-single-finger"},"\ud83d\udc49"))),r.a.createElement(p,{allDay:e.all_day,cityId:e.id}))},y=a(9),d=function(t){return t.toLowerCase().replace(/\//gi,"").replace(/\s+/gi,"-")},b=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(w.a)(e).call(this,t))).default="taipei-city",a.state={data:y.a,current:a.default},Object.keys(a.state.data).forEach(function(t){a.state.data[t].ref=r.a.createRef()}),a.updatedAt=new Date(y.b).toString(),a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"setCurrent",value:function(t){var e=t.length<=0?this.default:t;if(this.state.current!==e){this.setState({current:e});var a=this.state.data[e].ref.current;a&&a.offsetTop&&window.setTimeout(function(){window.scrollTo({top:a.offsetTop,behavior:"smooth"})},350)}}},{key:"routeGenerator",value:function(){var t=this,e=[];return Object.keys(this.state.data).forEach(function(a){var n=function(t,e){var a=t;return a.id=d(t.en_county_name),a.checked=t.id===e,a}(t.state.data[a],t.state.current),s=r.a.createElement(_,{city:n,onClick:function(e){return t.setCurrent(e)}}),c={link:{to:"/".concat(n.id),view:s},content:{path:"/".concat(n.id),view:function(e){var a=e.location,s=d(a.pathname);return t.setCurrent(s),r.a.createElement(v,{city:n})}}};e.push(c)}),e}},{key:"render",value:function(){var t=this.routeGenerator();return r.a.createElement(g.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"weather-crawler"),r.a.createElement("div",{className:"tabs"},t.map(function(e,a){return r.a.createElement(r.a.Fragment,{key:"route-".concat(e.link.to)},r.a.createElement(g.b,{to:e.link.to},e.link.view),0===a?r.a.createElement(m.a,{exact:!0,path:"/",component:t[a].content.view}):"",r.a.createElement(m.a,{path:e.content.path,component:e.content.view}))})),r.a.createElement("span",{className:"mini right"},this.updatedAt),r.a.createElement(h,null)))}}]),e}(n.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(t){t.exports={b:1609257183236,a:{"taipei-city":{public_time:null,county:" \u7e23\u5e02\u9810\u5831 - \u81fa\u5317\u5e02",en_county_name:"Taipei City",description:"\u92d2\u9762\u901a\u904e\u53ca\u5bd2\u6d41\u8fc5\u901f\u5357\u4e0b\uff0c\u96f2\u91cf\u504f\u591a\u6709\u77ed\u66ab\u96e8\uff0c\u6c23\u6eab\u660e\u986f\u4e0b\u964d\uff0c\u8acb\u6ce8\u610f\u4fdd\u6696\uff0c\u5916\u51fa\u8acb\u651c\u5e36\u96e8\u5177\u5099\u7528\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929","\u660e\u65e5\u665a\u4e0a"],temperature:["14 - 17","9 - 14","6 - 9"],rain:["100","50","30"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/11.svg",alt:"\u9670\u77ed\u66ab\u96e8"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/11.svg",alt:"\u9670\u77ed\u66ab\u96e8"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/11.svg",alt:"\u9670\u77ed\u66ab\u96e8"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=63"},"kaohsiung-city":{public_time:null,county:" \u7e23\u5e02\u9810\u5831 - \u9ad8\u96c4\u5e02",en_county_name:"Kaohsiung City",description:"\u660e(30)\u65e5\u92d2\u9762\u901a\u904e\u53ca\u5bd2\u6d41\u8fc5\u901f\u5357\u4e0b\uff0c\u9ad8\u96c4\u5e02\u70ba\u591a\u96f2\u6642\u6674\u7684\u5929\u6c23\u3002\u4e0b\u5348\u4e4b\u5f8c\u6c23\u6eab\u4e0b\u964d\u660e\u986f\uff0c\u8acb\u6ce8\u610f\u4fdd\u6696\u3002\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929","\u660e\u65e5\u665a\u4e0a"],temperature:["22 - 24","18 - 22","12 - 18"],rain:["0","0","0"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/03.svg",alt:"\u591a\u96f2\u6642\u6674"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/02.svg",alt:"\u6674\u6642\u591a\u96f2"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=64"},"new-taipei-city":{public_time:null,county:" \u7e23\u5e02\u9810\u5831 - \u65b0\u5317\u5e02",en_county_name:"New Taipei City",description:"\u92d2\u9762\u901a\u904e\u53ca\u5bd2\u6d41\u8fc5\u901f\u5357\u4e0b\uff0c\u96f2\u91cf\u504f\u591a\u6709\u77ed\u66ab\u96e8\uff0c\u6c23\u6eab\u660e\u986f\u4e0b\u964d\uff0c\u8acb\u6ce8\u610f\u4fdd\u6696\uff0c\u5916\u51fa\u8acb\u651c\u5e36\u96e8\u5177\u5099\u7528\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929","\u660e\u65e5\u665a\u4e0a"],temperature:["15 - 18","10 - 15","7 - 10"],rain:["100","60","30"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/11.svg",alt:"\u9670\u77ed\u66ab\u96e8"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/11.svg",alt:"\u9670\u77ed\u66ab\u96e8"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/11.svg",alt:"\u9670\u77ed\u66ab\u96e8"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=65"},"taichung-city":{public_time:null,county:" \u7e23\u5e02\u9810\u5831 - \u81fa\u4e2d\u5e02",en_county_name:"Taichung City",description:"\u5bd2\u6d41\u5357\u4e0b\uff0c\u6ce8\u610f\u4fdd\u6696\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929","\u660e\u65e5\u665a\u4e0a"],temperature:["17 - 20","12 - 17","10 - 12"],rain:["0","0","0"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/03.svg",alt:"\u591a\u96f2\u6642\u6674"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/02.svg",alt:"\u6674\u6642\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/02.svg",alt:"\u6674\u6642\u591a\u96f2"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=66"},"tainan-city":{public_time:null,county:" \u7e23\u5e02\u9810\u5831 - \u81fa\u5357\u5e02",en_county_name:"Tainan City",description:"\u3010\u5bd2\u6d41\u5357\u4e0b\uff0c\u6c23\u6eab\u660e\u986f\u4e0b\u964d\uff0c\u6cbf\u6d77\u98a8\u5f37\u6d6a\u5927\uff0c\u7a7a\u6c23\u54c1\u8cea\u4e0d\u4f73\u3011\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929","\u660e\u65e5\u665a\u4e0a"],temperature:["19 - 21","14 - 19","10 - 14"],rain:["0","0","0"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/02.svg",alt:"\u6674\u6642\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/02.svg",alt:"\u6674\u6642\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/04.svg",alt:"\u591a\u96f2"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=67"},"yilan-county":{public_time:null,county:" \u7e23\u5e02\u9810\u5831 - \u5b9c\u862d\u7e23",en_county_name:"Yilan County",description:"\u660e\uff0830\uff09\u65e5\u92d2\u9762\u901a\u904e\u53ca\u5bd2\u6d41\u8fc5\u901f\u5357\u4e0b\uff0c\u6c23\u6eab\u660e\u986f\u4e0b\u964d\u3002\u8acb\u6ce8\u610f\u4fdd\u6696\u3002\u6cbf\u6d77\u5730\u5340\u6709\u9577\u6d6a\u767c\u751f\u7684\u6a5f\u7387\uff0c\u8acb\u6ce8\u610f\u3002\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929","\u660e\u65e5\u665a\u4e0a"],temperature:["15 - 18","9 - 15","6 - 9"],rain:["10","10","0"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/07.svg",alt:"\u9670\u5929"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/07.svg",alt:"\u9670\u5929"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/07.svg",alt:"\u9670\u5929"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=10002"},"hualien-county":{public_time:null,county:" \u7e23\u5e02\u9810\u5831 - \u82b1\u84ee\u7e23",en_county_name:"Hualien County",description:"\u5929\u6c23\u5bd2\u51b7\uff0c\u5c40\u90e8\u77ed\u66ab\u96e8\uff0c\u6cbf\u6d77\u5c0f\u5fc3\u9577\u6d6a\u548c\u5f37\u9663\u98a8\u3002\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929","\u660e\u65e5\u665a\u4e0a"],temperature:["19 - 20","13 - 19","8 - 13"],rain:["10","10","10"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/07.svg",alt:"\u9670\u5929"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/03.svg",alt:"\u591a\u96f2\u6642\u6674"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=10015"}}}}},[[24,1,2]]]);
//# sourceMappingURL=main.6ad24559.chunk.js.map