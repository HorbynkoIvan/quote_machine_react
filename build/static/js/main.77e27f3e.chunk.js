(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(64)},37:function(e,t,a){},41:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var o,n,c=a(0),r=a.n(c),u=a(23),l=a.n(u),s=a(2),i=a(8),d=a(5),f=a(6),m=a(9),b=a(7),h=a(10),p=(a(37),a(41),function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.fetched;return r.a.createElement("div",{id:"quote-box"},r.a.createElement("div",{className:"quote-text"},r.a.createElement("i",{className:"fa fa-quote-left"}," "),r.a.createElement("span",{id:"text"},e.quote)),r.a.createElement("div",{className:"quote-author"},"- ",r.a.createElement("span",{id:"author"},e.author)),r.a.createElement("div",{className:"buttons"},r.a.createElement("a",{className:"button",id:"tweet-quote",title:"Tweet this quote!",target:"_blank"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"button",id:"tumblr-quote",title:"Post this quote on tumblr!",target:"_blank"},r.a.createElement("i",{className:"fa fa-tumblr"})),r.a.createElement("button",{className:"button",id:"new-quote",onClick:this.props.setNextQuote},"New quote")))}}]),t}(c.Component)),E=a(25),q=a.n(E),y=function(e){function t(e){return Object(d.a)(this,t),Object(m.a)(this,Object(b.a)(t).call(this,e))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchQuotes()}},{key:"render",value:function(){return r.a.createElement("div",{id:"wrapper"},r.a.createElement(p,{fetched:this.props.quotes,setNextQuote:this.props.setNextQuote}),r.a.createElement("div",{className:"myLink"}," by ",r.a.createElement("a",{href:"https://github.com/HorbynkoIvan/quote_machine_react"},"DidIvan")))}}]),t}(c.Component),O={fetchQuotes:function(){return function(e){e({type:"FETCH_QUOTES_START"}),q.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(function(t){return console.log(t.data),o=t.data,e({type:"FETCH_QUOTES_SUCCESS",payload:t.data})}).catch(function(t){throw e({type:"FETCH_QUOTES_FAILURE"}),t})}},setNextQuote:function(){return function(e){e({type:"SET_NEXT_QUOTE",payload:o})}}},S=Object(i.b)(function(e){return{quotes:e.quotes}},O)(y),v=a(26),w=(a(62),a(14)),T=["#e57373","#f06292","#b71c1c","#880e4f","#9c27b0","#673ab7","#4a148c","#311b92","#009688","#4caf50","#00bfa5","#00c853","#64dd17","#5d4037","#616161","#607d8b","#ff9100","#ff3d00","#ff6f00"],j=function(e){var t=e.quotes.length,a=Math.floor(Math.random()*t);return e.quotes[a]},N=function(){var e=Math.floor(Math.random()*T.length),t=document.querySelector("#wrapper"),a=document.querySelector("#new-quote"),o=document.querySelector("#tweet-quote"),n=document.querySelector("#tumblr-quote"),c=document.querySelector(".quote-text"),r=document.querySelector(".quote-author");t.style.backgroundColor=T[e],c.style.color=T[e],r.style.color=T[e],a.style.borderColor=T[e],a.style.color=T[e],o.style.color=T[e],n.style.color=T[e]},_={quote:"",author:""},g=Object(s.combineReducers)({quotes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_QUOTES_SUCCESS":case"SET_NEXT_QUOTE":return n=j(t.payload),N(),Object(w.a)({},e,n);default:return e}}}),C=a(27),Q=Object(s.createStore)(g,Object(v.composeWithDevTools)(Object(s.applyMiddleware)(C.a)));l.a.render(r.a.createElement(i.a,{store:Q},r.a.createElement(S,null)),document.getElementById("root"))}},[[28,2,1]]]);
//# sourceMappingURL=main.77e27f3e.chunk.js.map