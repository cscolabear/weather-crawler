(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},30:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),s=a.n(c),i=a(6),l=(a(29),a(30),a(17)),o=a(18),w=a(22),u=a(19),m=a(23),h=a(5);var g=function(){return r.a.createElement("footer",{className:"footer nes-container is-rounded is-dark"},r.a.createElement("p",null,"Feature Of Project"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/cscolabear/weather-crawler/"},"weather-crawler")," | puppeteer, ci, travis, nodejs"),r.a.createElement("p",null,"Coding by Cola"),r.a.createElement("div",{className:"github-area"},r.a.createElement("a",{href:"https://github.com/cscolabear/weather-crawler",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"nes-octocat animate"}))))},p=function(e){var t=e.city,a=t.checked?"is-checked":"";return r.a.createElement("label",{htmlFor:t.id,className:"tab-label ".concat(a),onClick:function(){return e.onClick(t.id)}},r.a.createElement("span",null,t.county),r.a.createElement("span",{className:"en-county-name"},"/",t.en_county_name))};var _=function(e){var t=e.allDay,a=[];return t.current_title.forEach(function(e,n){a.push(function(e,t){return r.a.createElement("div",{className:"tabs__tab-column-row",key:t},r.a.createElement("h2",null,r.a.createElement("span",null,e.current_title[t]),r.a.createElement("span",{className:"normal"}," - ",e.rainImg[t].alt)),r.a.createElement("div",{className:"tabs__tab-column-row-detail"},r.a.createElement("div",{className:"two-col"},r.a.createElement("p",null,"\u964d\u96e8\u6a5f\u7387 ",r.a.createElement("span",{className:(a=e.rain[t],a>60?"nes-text is-primary":"")},e.rain[t]," %")),r.a.createElement("p",{className:""},e.temperature[t]," \u02daC")),r.a.createElement("div",{className:"two-col-photo"},r.a.createElement("img",{src:e.rainImg[t].src,alt:e.rainImg[t].alt}))));var a}(t,n))}),r.a.createElement("div",{className:"tabs__tab-column"},a)},v=function(e){var t=e.city;return r.a.createElement("div",{className:"tabs__tab-content nes-container is-rounded is-dark"},r.a.createElement("p",{className:"tabs__tab-content__desc"},t.description,r.a.createElement("a",{href:t.target_url,target:"_blank",className:"tab-desc-target-url",rel:"noopener noreferrer"},r.a.createElement("span",{role:"img","aria-label":"hand-single-finger"},"\ud83d\udc49"))),r.a.createElement(_,{allDay:t.all_day}))},d=function(e){r.a.createElement(i.a,null);var t=e.city;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/".concat(t.id,"#tab-").concat(t.id),id:"tab-".concat(t.id)},r.a.createElement(p,{city:t,onClick:e.onClick})),r.a.createElement(h.b,{path:"/".concat(t.id),render:function(){return r.a.createElement(v,{city:t})}}))},b=a(9),y=function(e){return e.toLowerCase().replace(/\s+/gi,"-")},E=function(){return window.location.pathname.replace("/","")},C=function(e){return!!e[E()]},f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(w.a)(this,Object(u.a)(t).call(this,e))).state={data:b.a,current:"taipei-city"},a.updatedAt=new Date(b.b).toString(),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){if(C(b.a)){var e=E();this.handleClick(e)}}},{key:"handleClick",value:function(e){this.setState({current:e})}},{key:"renderTabs",value:function(){var e=this,t=Object.keys(this.state.data),a=[];return t.forEach(function(t,n){var c=e.state.data[t];c&&(c.id=y(c.en_county_name),c.checked=c.id===e.state.current,C(b.a)||a.push(r.a.createElement(h.a,{to:"/".concat(e.state.current),key:"no-match-".concat(n)})),a.push(r.a.createElement(d,{key:"tab-".concat(t),city:c,onClick:function(t){return e.handleClick(t)}})))}),r.a.createElement("div",{className:"tabs"},a)}},{key:"render",value:function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"weather-crawler"),this.renderTabs(),r.a.createElement("span",{className:"mini right"},this.updatedAt),r.a.createElement(g,null)))}}]),t}(n.Component);s.a.render(r.a.createElement(i.a,{basename:"weather-crawler"},r.a.createElement(f,null)),document.getElementById("root"))},9:function(e){e.exports={b:1560764090707,a:{"taipei-city":{public_time:"\u767c\u5e03\u6642\u9593\uff1a06/17 17:00",county:"\u81fa\u5317\u5e02",en_county_name:"Taipei City",description:"\u5929\u6c23\u591a\u96f2\uff0c\u7559\u610f\u5348\u5f8c\u77ed\u66ab\u96f7\u9663\u96e8\uff0c\u6236\u5916\u6d3b\u52d5\u8acb\u591a\u88dc\u5145\u6c34\u5206\uff0c\u6ce8\u610f\u9632\u66ec\u3002\u770b\u66f4\u591a",all_day:{current_title:["\u6628\u665a\u4eca\u6668","\u4eca\u65e5\u767d\u5929","\u4eca\u65e5\u665a\u4e0a"],temperature:["26 - 30","26 - 35","26 - 31"],rain:["10","60","10"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/05.svg",alt:"\u591a\u96f2\u6642\u9670"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/22.svg",alt:"\u591a\u96f2\u5348\u5f8c\u77ed\u66ab\u96f7\u9663\u96e8"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/04.svg",alt:"\u591a\u96f2"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=63"},"kaohsiung-city":{public_time:"\u767c\u5e03\u6642\u9593\uff1a06/17 17:00",county:"\u9ad8\u96c4\u5e02",en_county_name:"Kaohsiung City",description:"\u660e(18)\u65e5\u9ad8\u6eab\u708e\u71b1\uff0c\u8acb\u591a\u88dc\u5145\u6c34\u5206\uff0c\u907f\u514d\u4e2d\u6691\u3002\u770b\u66f4\u591a",all_day:{current_title:["\u6628\u665a\u4eca\u6668","\u4eca\u65e5\u767d\u5929","\u4eca\u65e5\u665a\u4e0a"],temperature:["28 - 31","28 - 34","28 - 32"],rain:["10","10","20"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/05.svg",alt:"\u591a\u96f2\u6642\u9670"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/04.svg",alt:"\u591a\u96f2"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=64"},"new-taipei-city":{public_time:"\u767c\u5e03\u6642\u9593\uff1a06/17 17:00",county:"\u65b0\u5317\u5e02",en_county_name:"New Taipei City",description:"\u5929\u6c23\u591a\u96f2\uff0c\u7559\u610f\u5348\u5f8c\u77ed\u66ab\u96f7\u9663\u96e8\uff0c\u6236\u5916\u6d3b\u52d5\u8acb\u591a\u88dc\u5145\u6c34\u5206\uff0c\u6ce8\u610f\u9632\u66ec\u3002\u770b\u66f4\u591a",all_day:{current_title:["\u6628\u665a\u4eca\u6668","\u4eca\u65e5\u767d\u5929","\u4eca\u65e5\u665a\u4e0a"],temperature:["27 - 30","27 - 35","27 - 31"],rain:["10","50","10"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/05.svg",alt:"\u591a\u96f2\u6642\u9670"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/22.svg",alt:"\u591a\u96f2\u5348\u5f8c\u77ed\u66ab\u96f7\u9663\u96e8"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/04.svg",alt:"\u591a\u96f2"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=65"},"taichung-city":{public_time:"\u767c\u5e03\u6642\u9593\uff1a06/17 17:00",county:"\u81fa\u4e2d\u5e02",en_county_name:"Taichung City",description:"\u3010\u591a\u96f2\u5348\u5f8c\u5c40\u90e8\u77ed\u66ab\u96f7\u9663\u96e8\uff0c\u6ce8\u610f\u9632\u66ec\u3001\u88dc\u5145\u6c34\u5206\u3011\u770b\u66f4\u591a",all_day:{current_title:["\u6628\u665a\u4eca\u6668","\u4eca\u65e5\u767d\u5929","\u4eca\u65e5\u665a\u4e0a"],temperature:["26 - 31","26 - 34","27 - 32"],rain:["10","40","10"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/22.svg",alt:"\u591a\u96f2\u5348\u5f8c\u77ed\u66ab\u96f7\u9663\u96e8"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/04.svg",alt:"\u591a\u96f2"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=66"},"tainan-city":{public_time:"\u767c\u5e03\u6642\u9593\uff1a06/17 17:00",county:"\u81fa\u5357\u5e02",en_county_name:"Tainan City",description:"\u3010\u5c40\u90e8\u77ed\u66ab\u9663\u96e8\u6216\u96f7\u96e8\uff0c\u5916\u51fa\u8acb\u651c\u5e36\u96e8\u5177\u5099\u7528\u3002\u3011\u770b\u66f4\u591a",all_day:{current_title:["\u6628\u665a\u4eca\u6668","\u4eca\u65e5\u767d\u5929","\u4eca\u65e5\u665a\u4e0a"],temperature:["28 - 30","28 - 34","28 - 32"],rain:["10","10","20"],rainImg:[{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/05.svg",alt:"\u591a\u96f2\u6642\u9670"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/04.svg",alt:"\u591a\u96f2"},{src:"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/04.svg",alt:"\u591a\u96f2"}]},target_url:"https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=67"}}}}},[[24,1,2]]]);
//# sourceMappingURL=main.97f5958b.chunk.js.map