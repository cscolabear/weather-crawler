(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,a){t.exports=a(35)},30:function(t,e,a){},35:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(16),c=a.n(s),i=(a(29),a(30),a(17)),o=a(18),l=a(22),w=a(19),u=a(23),g=a(10),m=a(5);var h=function(){return r.a.createElement("footer",{className:"footer nes-container is-rounded is-dark"},r.a.createElement("p",null,"Feature Of Project"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/cscolabear/weather-crawler/"},"weather-crawler")," | puppeteer, ci, travis, nodejs"),r.a.createElement("p",null,"Coding by Cola"),r.a.createElement("div",{className:"github-area"},r.a.createElement("a",{href:"https://github.com/cscolabear/weather-crawler",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"nes-octocat animate"}))))},_=function(t){var e=t.city,a=e.checked?"is-checked":"";return r.a.createElement("label",{ref:e.ref,className:"tab-label ".concat(a),onClick:function(){return t.onClick(e.id)}},r.a.createElement("span",null,e.county),r.a.createElement("span",{className:"en-county-name"},"/",e.en_county_name))};var p=function(t){var e=t.allDay,a=t.cityId,n=[];return e.current_title.forEach(function(t,s){n.push(function(t,e,a){return r.a.createElement("div",{className:"tabs__tab-column-row",key:"".concat(e,"-").concat(t.current_title[a])},r.a.createElement("h2",null,r.a.createElement("span",null,t.current_title[a]),r.a.createElement("span",{className:"normal"}," - ",t.rainImg[a].alt)),r.a.createElement("div",{className:"tabs__tab-column-row-detail"},r.a.createElement("div",{className:"two-col"},r.a.createElement("p",null,"\u964d\u96e8\u6a5f\u7387 ",r.a.createElement("span",{className:(n=t.rain[a],n>60?"nes-text is-primary":"")},t.rain[a]," %")),r.a.createElement("p",{className:""},t.temperature[a]," \u02daC")),r.a.createElement("div",{className:"two-col-photo"},r.a.createElement("img",{src:t.rainImg[a].src,alt:t.rainImg[a].alt}))));var n}(e,a,s))}),r.a.createElement("div",{className:"tabs__tab-column"},n)},v=function(t){var e=t.city;return r.a.createElement("div",{className:"tabs__tab-content nes-container is-rounded is-dark"},r.a.createElement("p",{className:"tabs__tab-content__desc"},e.description,r.a.createElement("a",{href:e.target_url,target:"_blank",className:"tab-desc-target-url",rel:"noopener noreferrer"},r.a.createElement("span",{role:"img","aria-label":"hand-single-finger"},"\ud83d\udc49"))),r.a.createElement(p,{allDay:e.all_day,cityId:e.id}))},y=a(9),d=function(t){return t.toLowerCase().replace(/\//gi,"").replace(/\s+/gi,"-")},b=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(w.a)(e).call(this,t))).default="taipei-city",a.state={data:y.a,current:a.default},Object.keys(a.state.data).forEach(function(t){a.state.data[t].ref=r.a.createRef()}),a.updatedAt=new Date(y.b).toString(),a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"setCurrent",value:function(t){var e=t.length<=0?this.default:t;if(this.state.current!==e){this.setState({current:e});var a=this.state.data[e].ref.current;a&&a.offsetTop&&window.setTimeout(function(){window.scrollTo({top:a.offsetTop,behavior:"smooth"})},350)}}},{key:"routeGenerator",value:function(){var t=this,e=[];return Object.keys(this.state.data).forEach(function(a){var n=function(t,e){var a=t;return a.id=d(t.en_county_name),a.checked=t.id===e,a}(t.state.data[a],t.state.current),s=r.a.createElement(_,{city:n,onClick:function(e){return t.setCurrent(e)}}),c={link:{to:"/".concat(n.id),view:s},content:{path:"/".concat(n.id),view:function(e){var a=e.location,s=d(a.pathname);return t.setCurrent(s),r.a.createElement(v,{city:n})}}};e.push(c)}),e}},{key:"render",value:function(){var t=this.routeGenerator();return r.a.createElement(g.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"weather-crawler"),r.a.createElement("div",{className:"tabs"},t.map(function(e,a){return r.a.createElement(r.a.Fragment,{key:"route-".concat(e.link.to)},r.a.createElement(g.b,{to:e.link.to},e.link.view),0===a?r.a.createElement(m.a,{exact:!0,path:"/",component:t[a].content.view}):"",r.a.createElement(m.a,{path:e.content.path,component:e.content.view}))})),r.a.createElement("span",{className:"mini right"},this.updatedAt),r.a.createElement(h,null)))}}]),e}(n.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(t){t.exports={b:1622135110808,a:{"taipei-city":{public_time:null,county:" \u7e23\u5e02\u9810\u5831 - \u81fa\u5317\u5e02",en_county_name:"Taipei City",description:"\u767d\u5929\u9ad8\u6eab\u708e\u71b1\uff0c\u61c9\u591a\u88dc\u5145\u6c34\u5206\u4e26\u6ce8\u610f\u9632\u66ec\uff0c\u665a\u8d77\u6709\u5c40\u90e8\u77ed\u66ab\u9663\u96e8\u6216\u96f7\u96e8\uff0c\u665a\u6b78\u6c11\u773e\u8acb\u651c\u5e36\u96e8\u5177\u5099\u7528\u3002\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929","\u660e\u65e5\u665a\u4e0a"],temperature:["26 - 29","26 - 36","25 - 31"],rain:["10","20","50"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/03.svg",alt:"\u591a\u96f2\u6642\u6674"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/18.svg",alt:"\u9670\u77ed\u66ab\u9663\u96e8\u6216\u96f7\u96e8"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=63"},"kaohsiung-city":{public_time:null,county:" \u7e23\u5e02\u9810\u5831 - \u9ad8\u96c4\u5e02",en_county_name:"Kaohsiung City",description:"\u660e(28)\u65e5\u591a\u96f2\u6642\u6674\u3002\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929","\u660e\u65e5\u665a\u4e0a"],temperature:["29 - 30","29 - 33","29 - 32"],rain:["30","20","30"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/08.svg",alt:"\u591a\u96f2\u77ed\u66ab\u9663\u96e8"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/03.svg",alt:"\u591a\u96f2\u6642\u6674"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/18.svg",alt:"\u9670\u77ed\u66ab\u9663\u96e8\u6216\u96f7\u96e8"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=64"},"new-taipei-city":{public_time:null,county:" \u7e23\u5e02\u9810\u5831 - \u65b0\u5317\u5e02",en_county_name:"New Taipei City",description:"\u767d\u5929\u9ad8\u6eab\u708e\u71b1\uff0c\u61c9\u591a\u88dc\u5145\u6c34\u5206\u4e26\u6ce8\u610f\u9632\u66ec\uff0c\u665a\u8d77\u6709\u5c40\u90e8\u77ed\u66ab\u9663\u96e8\u6216\u96f7\u96e8\uff0c\u665a\u6b78\u6c11\u773e\u8acb\u651c\u5e36\u96e8\u5177\u5099\u7528\u3002\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929","\u660e\u65e5\u665a\u4e0a"],temperature:["27 - 29","27 - 36","26 - 31"],rain:["10","20","50"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/03.svg",alt:"\u591a\u96f2\u6642\u6674"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/18.svg",alt:"\u9670\u77ed\u66ab\u9663\u96e8\u6216\u96f7\u96e8"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=65"},"taichung-city":{public_time:null,county:" \u7e23\u5e02\u9810\u5831 - \u81fa\u4e2d\u5e02",en_county_name:"Taichung City",description:"\u591a\u96f2\uff0c\u9ad8\u6eab\u708e\u71b1\u4e14\u7d2b\u5916\u7dda\u5f37\uff0c\u5348\u5f8c\u5c71\u5340\u6709\u5c40\u90e8\u77ed\u66ab\u96f7\u9663\u96e8\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929","\u660e\u65e5\u665a\u4e0a"],temperature:["28 - 29","28 - 35","28 - 33"],rain:["20","20","30"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/18.svg",alt:"\u9670\u77ed\u66ab\u9663\u96e8\u6216\u96f7\u96e8"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=66"},"tainan-city":{public_time:null,county:" \u7e23\u5e02\u9810\u5831 - \u81fa\u5357\u5e02",en_county_name:"Tainan City",description:"\u3010\u767d\u5929\u7d2b\u5916\u7dda\u5f37\uff0c\u5167\u9678\u8fd1\u5c71\u5340\u9177\u71b1\uff0c\u614e\u9632\u4e2d\u6691\u3011\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929","\u660e\u65e5\u665a\u4e0a"],temperature:["29 - 30","29 - 32","29 - 31"],rain:["30","20","30"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/08.svg",alt:"\u591a\u96f2\u77ed\u66ab\u9663\u96e8"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/03.svg",alt:"\u591a\u96f2\u6642\u6674"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/18.svg",alt:"\u9670\u77ed\u66ab\u9663\u96e8\u6216\u96f7\u96e8"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=67"},"yilan-county":{public_time:null,county:" \u7e23\u5e02\u9810\u5831 - \u5b9c\u862d\u7e23",en_county_name:"Yilan County",description:"\u660e\uff0828\uff09\u65e5\u5b9c\u862d\u5730\u5340\u5929\u6c23\u70ba\u591a\u96f2\u5348\u5f8c\u77ed\u66ab\u96f7\u9663\u96e8\u3002\u7d2b\u5916\u7dda\u6307\u6578\u70ba\u904e\u91cf\u7d1a\uff0c\u6236\u5916\u6d3b\u52d5\u8acb\u6ce8\u610f\u9632\u66ec\u4e26\u591a\u88dc\u5145\u6c34\u5206\u3002\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929","\u660e\u65e5\u665a\u4e0a"],temperature:["26 - 27","26 - 32","25 - 29"],rain:["10","50","40"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/22.svg",alt:"\u591a\u96f2\u5348\u5f8c\u77ed\u66ab\u96f7\u9663\u96e8"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/18.svg",alt:"\u9670\u77ed\u66ab\u9663\u96e8\u6216\u96f7\u96e8"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=10002"},"hualien-county":{public_time:null,county:" \u7e23\u5e02\u9810\u5831 - \u82b1\u84ee\u7e23",en_county_name:"Hualien County",description:"\u9ad8\u6eab\u708e\u71b1,\u6ce8\u610f\u9632\u66ec\u4e26\u591a\u88dc\u5145\u6c34\u4efd\u4ee5\u514d\u4e2d\u6691.\u6d77\u9762\u98a8\u6d6a\u5927,\u8acb\u6ce8\u610f!\u770b\u66f4\u591a",all_day:{current_title:["\u4eca\u665a\u660e\u6668","\u660e\u65e5\u767d\u5929","\u660e\u65e5\u665a\u4e0a"],temperature:["26 - 28","27 - 31","26 - 29"],rain:["10","10","10"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/07.svg",alt:"\u9670\u5929"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=10015"}}}}},[[24,1,2]]]);
//# sourceMappingURL=main.07f2b924.chunk.js.map