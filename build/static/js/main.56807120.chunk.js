(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),i=c(19),r=c.n(i),d=(c(26),c(27),c(9)),o=c(10),l=c(13),j=c(12),h=c(11),b=(c(28),function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var s;return Object(d.a)(this,c),(s=t.call(this,e)).covidTotal=function(){fetch("".concat("https://api.covidindiatracker.com/total.json")).then((function(e){return e.json()})).then((function(e){if(null!==e){var t=e.deaths,c=e.confirmed,n=e.recovered;s.setState({deaths:t,confirm:c,recover:n})}})).catch((function(e){return console.log(e.message)}))},s.stateCovid=function(){fetch("".concat("https://api.covidindiatracker.com/state_data.json")).then((function(e){return e.json()})).then((function(e){if(e){var t=e;s.setState({covidStates:t}),console.log(t)}console.log(s.state.covidStates)})).catch((function(e){return console.log(e.message)}))},s.state={covidStates:[],deaths:null,recover:null,confirm:null},s}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.covidTotal(),this.stateCovid()}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"row text-center",children:[Object(s.jsx)("div",{className:"col-sm-4",children:Object(s.jsxs)("div",{className:"card confirmcard shadow bg-white rounded",children:[Object(s.jsx)("div",{className:"card-body",children:this.state.confirm}),Object(s.jsx)("div",{className:"card-footer",children:"Confirmed"})]})}),Object(s.jsx)("div",{className:"col-sm-4",children:Object(s.jsxs)("div",{className:"card recoverCard shadow bg-white rounded",children:[Object(s.jsx)("div",{className:"card-body",children:this.state.recover}),Object(s.jsx)("div",{className:"card-footer",children:"Recovered"})]})}),Object(s.jsx)("div",{className:"col-sm-4",children:Object(s.jsxs)("div",{className:"card deathCard shadow bg-white rounded",children:[Object(s.jsx)("div",{className:"card-body",children:this.state.deaths}),Object(s.jsx)("div",{className:"card-footer",children:"Deaths"})]})})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md-12",children:Object(s.jsx)("div",{className:"table table-responsive mx-auto p-5",children:Object(s.jsxs)("table",{className:"table table-responsive table-hover table-bordered",children:[Object(s.jsxs)("thead",{className:"thead-dark",children:[Object(s.jsx)("th",{children:"State"}),Object(s.jsx)("th",{children:"Confirmed"}),Object(s.jsx)("th",{children:"Recovered"}),Object(s.jsx)("th",{children:"Deaths"})]}),Object(s.jsx)("tbody",{children:this.state.covidStates.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{children:[" ",Object(s.jsx)(h.b,{to:"/district/"+e.id,children:e.state})]}),Object(s.jsx)("td",{children:e.confirmed}),Object(s.jsx)("td",{children:e.recovered}),Object(s.jsx)("td",{children:e.deaths})]},t)}))})]})})})})]})})}}]),c}(n.Component)),u=c(2),m=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var s;return Object(d.a)(this,c),(s=t.call(this,e)).districtDetails=function(){fetch("".concat("https://api.covidindiatracker.com/state_data.json")).then((function(e){return e.json()})).then((function(e){if(e){var t=e.filter((function(e){return e.id===s.state.id})),c=t[0].districtData,n=t[0].state;s.setState({districtData:c,stateName:n})}})).catch((function(e){return console.log(e.message)}))},s.state={id:s.props.match.params.id,districtData:null,stateName:null},console.log("id:",s.state.id),s}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.districtDetails()}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"row",style:{alignItems:"center",padding:"50px",justifyItems:"center"},children:[Object(s.jsx)("div",{className:"col-md-12 jumbotron text-center",children:Object(s.jsxs)("h1",{children:[this.state.stateName," Covid Details"]})}),Object(s.jsx)("div",{className:"col-md-12",children:Object(s.jsx)("div",{className:"table table-responsive",children:Object(s.jsxs)("table",{className:"table table-hover table-bordered",style:{alignItems:"center",justifyContent:"center"},children:[Object(s.jsxs)("thead",{className:"thead-dark",children:[Object(s.jsx)("th",{children:"District"}),Object(s.jsx)("th",{children:"Confirmed"}),Object(s.jsx)("th",{children:"Recovered"}),Object(s.jsx)("th",{children:"Deaths"})]}),Object(s.jsx)("tbody",{children:this.state.districtData&&this.state.districtData.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.name}),Object(s.jsx)("td",{children:e.confirmed}),Object(s.jsx)("td",{children:e.recovered}),Object(s.jsx)("td",{children:e.deaths})]},t)}))})]})})})]}),"distic"]})}}]),c}(n.Component);var v=function(){return Object(s.jsx)(h.a,{children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{exact:!0,path:"/",component:b}),Object(s.jsx)(u.a,{exact:!0,path:"/district/:id",component:m})]})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),O()}},[[34,1,2]]]);
//# sourceMappingURL=main.56807120.chunk.js.map