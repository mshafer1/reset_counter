(window.webpackJsonpreset_counter=window.webpackJsonpreset_counter||[]).push([[0],{14:function(e,t,n){},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n(2),r=n(4),c=n(3),i=n(5),s=n(0),u=n.n(s),l=n(7),f=n.n(l);n(14);function p(){console.log("Resetting"),function(e,t,n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var a="expires="+o.toUTCString();document.cookie=e+"="+t+";"+a+";path=/"}("reset",(new Date).toUTCString()),window.location.reload()}var m=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return u.a.createElement("button",{class:"padLeft",onClick:function(){return p()}},"Reset")}}]),t}(u.a.Component),d=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=new Date(function(e){var t=e+"=",n=decodeURIComponent(document.cookie);console.log("Cookies: ",document.cookie);var o=n.split(";");console.log(o);for(var a=0;a<o.length;a++){for(var r=o[a];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}("reset")),t=new Date,n=Math.abs(t.getTime()-e.getTime()),o=Math.floor(n/864e5);return o.isNaN()&&p(),u.a.createElement("span",{class:"padLeft"},o," Days")}}]),t}(u.a.Component);f.a.render(u.a.createElement("div",{class:"sign"},u.a.createElement(d,{value:0}),u.a.createElement("p",null,"Since someone reset this sign."),u.a.createElement(m,null)),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.892667d7.chunk.js.map