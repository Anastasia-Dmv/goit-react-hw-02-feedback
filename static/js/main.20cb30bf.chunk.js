(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=n(7),u=n(1),i=n(2),s=n(4),b=n(3),p=function(e){Object(s.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return r.a.createElement("div",null,r.a.createElement("h3",null,"Statistics"),r.a.createElement("p",null,"Good:",t),r.a.createElement("p",null,"Neutral:",n),r.a.createElement("p",null,"Bad:",a),r.a.createElement("p",null,"Total:",c),r.a.createElement("p",null,"Positive feedback:",c&&o,"%"))}}]),n}(a.Component),d=function(e){Object(s.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.onLeaveFeedback;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("button",{key:e,type:"button",name:e,onClick:function(){return n(e)}},e)})))}}]),n}(a.Component),m=function(e){Object(s.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,t),n)}}]),n}(a.Component),f=function(e){Object(s.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,e))}}]),n}(a.Component),v=function(e){Object(s.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.handleLeaveFeedback=function(t){e.setState((function(e){return Object(l.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return(100*e.state.good/e.countTotalFeedback()).toFixed()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback();return r.a.createElement(m,{title:"Please leave feedback"},r.a.createElement(d,{options:Object.keys(this.state),onLeaveFeedback:this.handleLeaveFeedback}),c>0?r.a.createElement(p,{good:t,neutral:n,bad:a,total:c,positivePercentage:this.countPositiveFeedbackPercentage()}):r.a.createElement(f,{message:"No feedback given"}))}}]),n}(a.Component),h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null))};o.a.render(r.a.createElement(a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.20cb30bf.chunk.js.map