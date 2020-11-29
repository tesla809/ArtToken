(this["webpackJsonpipfs-webui"]=this["webpackJsonpipfs-webui"]||[]).push([[15],{1001:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(30),s=a.n(l);t.a=function(e){var t=e.value;if(!t)return null;var a=s()(t),n=a.protoNames().concat(["ipfs","p2p"]),l=a.toString().split("/");return r.a.createElement("div",{className:"charcoal-muted monospace"},l.map((function(e,t){return r.a.createElement("span",{key:t},r.a.createElement("span",{className:n.includes(e)?"force-select":"force-select charcoal"},e),t<l.length-1?"/":"")})))}},1004:function(e,t,a){"use strict";var n=a(52),r=a(0),l=a.n(r),s=a(35),c=a(156),o=a(795),i=a(158),m=a.n(i),d=a(894),p=a(215),u=a(830),f=function(e){return l.a.createElement("svg",Object.assign({viewBox:"0 0 100 100"},e),l.a.createElement("path",{d:"M82.84 71.14L55.06 23a5.84 5.84 0 0 0-10.12 0L17.16 71.14a5.85 5.85 0 0 0 5.06 8.77h55.56a5.85 5.85 0 0 0 5.06-8.77zm-30.1-.66h-5.48V65h5.48zm0-10.26h-5.48V38.46h5.48z"}))},b="unix",h="windowsPS",E="windowsCMD";t.a=Object(s.b)("selectIpfsConnected","selectApiUrl",Object(o.a)("welcome")((function(e){var t=e.t,a=(e.apiUrl,e.connected,e.sameOrigin),s=e.ipfsApiAddress,o=e.doUpdateIpfsApiAddress,i=Object(r.useState)(b),v=Object(n.a)(i,2),g=v[0],w=v[1],N=["http://localhost:3000","http://127.0.0.1:5001","https://webui.ipfs.io"],y=window.location.origin,j=-1===N.indexOf(y);return l.a.createElement(p.a,{className:"pv3 ph4 lh-copy charcoal"},l.a.createElement("div",{className:"flex flex-wrap items-center"},l.a.createElement(f,{style:{height:76},className:"fill-red mr",role:"presentation"}),l.a.createElement("h1",{className:"montserrat fw4 charcoal ma0 f3 red"},t("app:status.couldNotConnect"))),l.a.createElement(c.a,{i18nKey:"notConnected.paragraph1",t:t},l.a.createElement("p",{className:"fw6 mb3"},"Check out the installation guide in the ",l.a.createElement("a",{className:"link blue",href:"https://docs.ipfs.io/install/command-line-quick-start/",target:"_blank",rel:"noopener noreferrer"},"IPFS Docs"),", or try these common fixes:")),l.a.createElement("ol",{className:"pl3 pt2"},l.a.createElement(c.a,{i18nKey:"notConnected.paragraph2",t:t},l.a.createElement("li",{className:"mb3"},"Is your IPFS daemon running? Try starting or restarting it from your terminal:")),l.a.createElement(u.a,{title:"Any Shell"},l.a.createElement("code",{className:"db"},l.a.createElement("b",{className:"no-select"},"$ "),"ipfs daemon"),l.a.createElement("code",{className:"db"},"Initializing daemon..."),l.a.createElement("code",{className:"db"},"API server listening on /ip4/127.0.0.1/tcp/5001")),!a&&l.a.createElement("div",null,l.a.createElement(c.a,{i18nKey:"notConnected.paragraph3",t:t},l.a.createElement("li",{className:"mb3 mt4"},"Is your IPFS API configured to allow ",l.a.createElement("a",{className:"link blue",href:"https://github.com/ipfs-shipyard/ipfs-webui#configure-ipfs-api-cors-headers"},"cross-origin (CORS) requests"),"? If not, run these commands and then start your daemon from the terminal:")),l.a.createElement("div",{className:"br1 overflow-hidden"},l.a.createElement("div",{className:"f7 mb0 sans-serif charcoal pv1 pl2 bg-black-20 flex items-center overflow-x-auto"},l.a.createElement("button",{onClick:function(){return w(b)},className:m()("pointer mr3 ttu tracked",g===b&&"fw7")},"Unix & MacOS"),l.a.createElement("button",{onClick:function(){return w(h)},className:m()("pointer mr3 ttu tracked",g===h&&"fw7")},"Windows Powershell"),l.a.createElement("button",{onClick:function(){return w(E)},className:m()("pointer ttu tracked",g===E&&"fw7")},"Windows CMD")),l.a.createElement("div",{className:"bg-black-70 snow pa2 f7 lh-copy monospace nowrap overflow-x-auto"},g===b&&l.a.createElement("div",null,l.a.createElement("code",{className:"db"},l.a.createElement("b",{className:"no-select"},"$ "),"ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '[",j&&'"'.concat(y,'", '),'"',N.join('", "'),"\"]'"),l.a.createElement("code",{className:"db"},l.a.createElement("b",{className:"no-select"},"$ "),'ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods \'["PUT", "POST"]\'')),g===h&&l.a.createElement("div",null,l.a.createElement("code",{className:"db"},l.a.createElement("b",{className:"no-select"},"$ "),"ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '[",j&&'\\"'.concat(y,'\\", '),'\\"',N.join('\\", \\"'),"\\\"]'"),l.a.createElement("code",{className:"db"},l.a.createElement("b",{className:"no-select"},"$ "),'ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods \'[\\"PUT\\", \\"POST\\"]\'')),g===E&&l.a.createElement("div",null,l.a.createElement("code",{className:"db"},l.a.createElement("b",{className:"no-select"},"$ "),'ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[',j&&'"""'.concat(y,'""", '),'"""',N.join('""", """'),'"""]"'),l.a.createElement("code",{className:"db"},l.a.createElement("b",{className:"no-select"},"$ "),'ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods "["""PUT""", """POST"""]"'))))),l.a.createElement(c.a,{i18nKey:"notConnected.paragraph4",t:t},l.a.createElement("li",{className:"mt4 mb3"},"Is your IPFS API on a port other than 5001? If your node is configured with a ",l.a.createElement("a",{className:"link blue",href:"https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#addresses",target:"_blank",rel:"noopener noreferrer"},"custom API address"),", enter it here.")),l.a.createElement(d.a,{t:t,defaultValue:s||"",updateAddress:o})))})))},1758:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(127),s=a(156),c=a(795),o=a(35),i=a(126),m=a(217),d=a.n(m),p=Object(c.a)("status")((function(e){var t=e.t,a=e.peersCount,n=e.repoSize,l=d()(n||0,{round:1});return r.a.createElement("header",null,r.a.createElement("h1",{className:"montserrat fw2 f3 charcoal ma0 pt0 pb2"},r.a.createElement(s.a,{i18nKey:"app:status.connectedToIpfs",t:t},"Connected to IPFS")),r.a.createElement("p",{className:"montserrat fw4 f5 ma0 pb3 lh-copy"},r.a.createElement("span",{className:"db dib-ns"},r.a.createElement(s.a,{i18nKey:"StatusConnected.paragraph1",t:t,defaults:"Hosting <0>{repoSize} of files</0>",values:{repoSize:l},components:[r.a.createElement("a",{className:"link blue",href:"#/files"},"?")]})),r.a.createElement("span",{className:"dn di-ns gray"}," \u2014 "),r.a.createElement("span",{className:"db mt1 mt0-ns dib-ns"},r.a.createElement(s.a,{i18nKey:"StatusConnected.paragraph2",t:t,defaults:"Discovered <0>{peersCount} peers</0>",values:{peersCount:a.toString()},components:[r.a.createElement("a",{className:"link blue",href:"#/peers"},"?")]}))))})),u=Object(o.b)("selectPeersCount","selectRepoSize",p),f=a(830),b=a(215),h=Object(c.a)("status")((function(e){var t=e.t;return r.a.createElement(b.a,{className:"mt3 pa3"},r.a.createElement("h2",{className:"ttu yellow tracked f6 fw4 aqua mt0 mb4"},t("bandwidthStats")),r.a.createElement("p",{className:"mw6 mr2 lh-copy charcoal f6"},r.a.createElement(s.a,{i18nKey:"bandwidthStatsDisabled",t:t},"You have the bandwidth metrics disabled. You can enable them by typing the command bellow or changing the key ",r.a.createElement("code",null,"Swarm.DisableBandwidthMetrics")," to ",r.a.createElement("code",null,"false")," on",r.a.createElement("a",{className:"link blue",href:"#/settings"},"Settings"),". Then, you need to restart the IPFS daemon to apply the changes.")),r.a.createElement(f.a,{className:"mw6"},r.a.createElement("code",{className:"db"},r.a.createElement("b",{className:"no-select"},"$ "),"ipfs config --json Swarm.DisableBandwidthMetrics false")))})),E=a(1004),v=a(69),g=a(70),w=a(89),N=a(88),y={"go-ipfs":{url:"https://github.com/ipfs/go-ipfs"},"js-ipfs":{url:"https://github.com/ipfs/js-ipfs"}},j=function(e){var t=e.agent,a=e.version;if(!a)return"";if("js-ipfs"===t){var n="".concat(y["js-ipfs"].url,"/releases/tag/v").concat(a);return r.a.createElement("a",{href:n,className:"link blue ml2",target:"_blank",rel:"noopener noreferrer"},"v",a)}return" v".concat(a)},k=function(e){var t=e.agentVersion;if(!t)return r.a.createElement("span",null,"Unknown");var a=t.split("/").filter((function(e){return!!e})),n=a[0],l=function(e){var t=y[e];return t?t.url:null}(n),s=a[1];return l?r.a.createElement("span",null,r.a.createElement("a",{href:l,className:"link blue",target:"_blank",rel:"noopener noreferrer"},n),r.a.createElement(j,{agent:n,version:s})):r.a.createElement("span",null,n,r.a.createElement(j,{agent:n,version:s}))},O=a(38),C=function(e){var t=e.term,a=e.desc,n=e.advanced,l=e.termWidth;return r.a.createElement("div",{className:"dt dt--fixed pt2 mw9 lh-copy"},r.a.createElement(S,{width:l},t),r.a.createElement(A,{advanced:n},a))},S=function(e){var t=e.children,a=e.width,n=void 0===a?100:a;return r.a.createElement("dt",{className:"db ma0 pb1 pb0-ns dtc-ns silver tracked ttu f7",style:{width:n}},t)},A=function(e){var t=e.children,a=e.advanced;return r.a.createElement("dd",{className:"db dtc-ns ma0 charcoal monospace ".concat(a?"word-wrap pa2 f7 bg-white-80":"truncate f7 f6-ns")},t)},I=function(e){var t=e.children,a=e.className,n=void 0===a?"ma0":a,l=Object(O.a)(e,["children","className"]);return r.a.createElement("dl",Object.assign({className:n},l),t)},x=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"getField",value:function(e,t,a){return e&&e[t]?a?a(e[t]):e[t]:""}},{key:"getVersion",value:function(e){var t=this.getField(e,"agentVersion");return t?t.split("/").join(" "):""}},{key:"render",value:function(){var e=this.props,t=e.t,a=e.identity;return r.a.createElement(I,null,r.a.createElement(C,{term:t("terms.peerId"),desc:this.getField(a,"id")}),r.a.createElement(C,{term:t("terms.agent"),desc:r.a.createElement(k,{agentVersion:this.getField(a,"agentVersion")})}))}}]),a}(r.a.Component),P=Object(o.b)("selectIdentity",Object(c.a)("app")(x)),T=a(48),D=a(30),F=a.n(D),L=a(1001),M=a(318),H={"js-ipfs-api":{url:"https://github.com/ipfs/js-ipfs-api"},"js-ipfs":{url:"https://github.com/ipfs/js-ipfs"},"window.ipfs":{url:"https://github.com/ipfs-shipyard/ipfs-companion"},"ipfs-companion":{url:"https://github.com/ipfs-shipyard/ipfs-companion"}},U=function(e){var t=e.name,a=function(e){return H[e]||{name:e}}(t);return a.url?r.a.createElement("a",{href:a.url,className:"link blue",target:"_blank",rel:"noopener noreferrer"},a.name||t):r.a.createElement("span",null,a.name||t)};function B(e){try{return F()(e),!0}catch(t){return!1}}var _=Object(o.b)("selectIdentity","selectIpfsProvider","selectIpfsApiAddress","selectGatewayUrl","selectIsNodeInfoOpen","doSetIsNodeInfoOpen",Object(c.a)("status")((function(e){var t,a,n,l=e.t,s=e.identity,c=e.ipfsProvider,o=e.ipfsApiAddress,i=e.gatewayUrl,m=e.isNodeInfoOpen,d=e.doSetIsNodeInfoOpen,p=null,u=null;s&&(a="publicKey",p=(t=s)&&t[a]?n?n(t[a]):t[a]:"",u=Object(T.a)(new Set(s.addresses)).sort().map((function(e){return r.a.createElement(L.a,{key:e,value:e})})));var f;return r.a.createElement(M.a,{className:"mt3 f6",summaryText:l("app:terms.advanced"),open:m,onClick:function(e){d(!m),e.preventDefault()}},r.a.createElement(I,{className:"mt3"},r.a.createElement(C,{advanced:!0,term:l("app:terms.gateway"),desc:i}),"httpClient"===c?r.a.createElement(C,{advanced:!0,term:l("app:terms.api"),desc:r.a.createElement("div",{id:"http-api-address",className:"flex items-center"},B(o)?r.a.createElement(L.a,{value:o}):(f=o,"string"!==typeof f?l("customApiConfig"):f),r.a.createElement("a",{className:"ml2 link blue sans-serif fw6",href:"#/settings"},l("app:actions.edit")))}):r.a.createElement(C,{advanced:!0,term:l("app:terms.api"),desc:r.a.createElement(U,{name:c})}),r.a.createElement(C,{advanced:!0,term:l("app:terms.addresses"),desc:u}),r.a.createElement(C,{advanced:!0,term:l("app:terms.publicKey"),desc:p})))}))),K=a(2),z=a(33),V=a.n(z),$=a(1163),J=function(e){var t=e.children,a=Object(O.a)(e,["children"]);return r.a.createElement("h2",Object.assign({className:"ttu tracked f6 fw4 teal mt0 mb4"},a),t)},R=d.a.partial({round:1,exponent:2,bits:!0}),Y=d.a.partial({round:0,bits:!0,output:"array"}),W={defaultFontFamily:"'Inter UI', system-ui, sans-serif",responsive:!0,tooltips:{mode:"x",position:"nearest",enabled:!1},hover:{mode:"index"},scales:{xAxes:[{type:"time",time:{minUnit:"second"}}],yAxes:[{stacked:!0,ticks:{callback:function(e){return R(e)+"/s"},suggestedMax:2e5,maxTicksLimit:5}}]},legend:{display:!0,position:"bottom"}},q=function(e){var t=e.t,a=e.bw,n=e.show,l=e.pos;return n?r.a.createElement("div",{className:"sans-serif absolute bg-white pa2 br3",style:{top:"".concat(l.top+window.scrollY,"px"),left:"".concat(l.left,"px"),transform:"translateY(calc(-100% - 20px))",filter:"drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.2))"}},r.a.createElement("div",{className:"absolute",style:{bottom:"-14px",left:"0",width:"0",height:"0",borderTop:"20px solid white",borderRight:"20px solid transparent"}}),r.a.createElement("div",{className:"dt"},r.a.createElement("div",{className:"dt-row"},r.a.createElement("span",{className:"dtc f7 charcoal tr"},t("app:terms.in").toLowerCase(),":"),r.a.createElement("span",{className:"f4 ml1 charcoal-muted"},a.in[0]),r.a.createElement("span",{className:"f7 charcoal-muted"},a.in[1],"/s")),r.a.createElement("div",{className:"dt-row"},r.a.createElement("span",{className:"dtc f7 charcoal tr"},t("app:terms.out").toLowerCase(),":"),r.a.createElement("span",{className:"f4 ml1 charcoal-muted"},a.out[0]),r.a.createElement("span",{className:"f7 charcoal-muted"},a.out[1],"/s")))):null},G=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).getTooltip=function(e){var t=document.getElementById("node_bw_chart");return t||((t=document.createElement("div")).id="node_bw_chart",document.body.appendChild(t)),V.a.render(r.a.createElement(q,{t:e,show:!1}),t),t},e.data=function(){var t=e.props,a=t.t,n=t.nodeBandwidthChartData;return function(e){var t=e.getContext("2d"),r=t.createLinearGradient(e.width/2,0,e.width/2,e.height);r.addColorStop(0,"#70c5cd"),r.addColorStop(1,"#c6f1f3");var l=t.createLinearGradient(e.width/2,0,e.width/2,e.height/2);return l.addColorStop(0,"#f19237"),l.addColorStop(1,"#f9d1a6"),{datasets:[{label:a("app:terms.in"),data:n.in,borderColor:r,backgroundColor:r,pointRadius:2,cubicInterpolationMode:"monotone"},{label:a("app:terms.out"),data:n.out,borderColor:l,backgroundColor:l,pointRadius:2,cubicInterpolationMode:"monotone"}]}}},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.tooltip=document.createElement("div"),this.tooltip.id="node_bw_chart",document.body.appendChild(this.tooltip)}},{key:"componentDidUpdate",value:function(){V.a.render(r.a.createElement(q,{show:!1}),this.tooltip)}},{key:"render",value:function(){var e=this.props,t=e.t,a=e.animatedPoints,n=e.nodeBandwidthChartData;if(0===n.in.length)return null;var l=this.tooltip,s=Object(K.a)(Object(K.a)({},W),{},{tooltips:Object(K.a)(Object(K.a)({},W.tooltips),{},{custom:function(e){var a={show:!0};if(0===e.opacity)a.show=!1;else{a.bw={in:Y(e.dataPoints[0].yLabel),out:Y(e.dataPoints[1].yLabel)};var n=this._chart.canvas.getBoundingClientRect();a.pos={left:n.left+e.caretX,top:n.top+e.caretY}}V.a.render(r.a.createElement(q,Object.assign({t:t},a)),l)}}),animation:{duration:n.in.length<=a?1e3:0}});return r.a.createElement("div",null,r.a.createElement(J,null,t("bandwidthOverTime")),r.a.createElement($.Line,{data:this.data(),options:s}))}}]),a}(r.a.Component);G.defaultProps={animatedPoints:500};var X=Object(o.b)("selectNodeBandwidthChartData",Object(c.a)("status")(G)),Q=function(e){return 2*e*Math.PI},Z=function(e){var t,a=e.total,n=void 0===a?100:a,l=e.title,s=e.filled,c=void 0===s?0:s,o=e.noSpeed,i=void 0!==o&&o,m=e.color,p=void 0===m?"#FF6384":m,u={options:{legend:{display:!1},tooltips:{enabled:!1},maintainAspectRatio:!1,cutoutPercentage:80,rotation:(t=.7,(1-t+.5)*Math.PI),circumference:Q(.7)},data:{labels:["Speed","Nothing"],datasets:[{data:[c,c>n?0:n-c],backgroundColor:[p,"#DEDEDE"],hoverBackgroundColor:[p,"#DEDEDE"],borderWidth:[0,0]}]}},f=d()(c,{output:"array",round:0,bits:!i});return r.a.createElement("div",{className:"relative tc center overflow-hidden",style:{width:"11em",height:"9em"}},r.a.createElement("div",{style:{width:"11em",height:"11em",marginTop:"-1em"}},r.a.createElement($.Doughnut,u)),r.a.createElement("div",{className:"absolute",style:{top:"60%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement("span",{className:"f3"},f[0]),r.a.createElement("span",{className:"ml1 f7"},f[1],i?"":"/s"),r.a.createElement("span",{className:"db f7 fw5"},l)))},ee=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={downSpeed:{filled:0,total:125e3},upSpeed:{filled:0,total:125e3}},e}return Object(g.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.props.nodeBandwidth,n=a?parseInt(a.rateIn.toFixed(0),10):0,r=a?parseInt(a.rateOut.toFixed(0),10):0;n===t.downSpeed.filled&&r===t.upSpeed.filled||this.setState({downSpeed:{filled:n,total:Math.max(n,t.downSpeed.total)},upSpeed:{filled:r,total:Math.max(r,t.upSpeed.total)}})}},{key:"render",value:function(){var e=this.props.t,t=this.state,a=t.downSpeed,n=t.upSpeed;return r.a.createElement("div",null,r.a.createElement(J,null,e("networkTraffic")),r.a.createElement("div",{className:"flex flex-column justify-between",style:{maxWidth:400}},r.a.createElement("div",{className:"mh2 mv3 mt0-l"},r.a.createElement(Z,Object.assign({title:e("app:terms.upSpeed"),color:"#f39021"},n))),r.a.createElement("div",{className:"mh2 mt3 mt0-l"},r.a.createElement(Z,Object.assign({title:e("app:terms.downSpeed"),color:"#69c4cd"},a)))))}}]),a}(r.a.Component),te=Object(o.b)("selectNodeBandwidth",Object(c.a)("status")(ee)),ae=a(157),ne=function(e){var t=e.className,a=e.label,n=e.yesLabel,l=e.noLabel,s=e.onYes,c=e.onNo,o=e.detailsLabel,i=void 0===o?"More info...":o,m=e.detailsLink;return r.a.createElement("div",{className:"f6 pv3 pv2-ns ph3 tc bg-snow charcoal ".concat(t)},r.a.createElement("span",{className:"fw4 lh-copy dib mb2"},a,m&&r.a.createElement("a",{href:m,className:"dib focus-outline link blue ml2"},i)),r.a.createElement("span",{className:"dib"},r.a.createElement(ae.a,{className:"ml3 mv1 tc",bg:"bg-green",onClick:s},n),r.a.createElement(ae.a,{className:"ml3 mv1 tc",color:"charcoal",bg:"bg-snow-muted",onClick:c},l)))},re=a(160),le=a(218),se=a(810);t.default=Object(o.b)("selectIpfsConnected","selectNodeBandwidthEnabled","selectAnalyticsAskToEnable","selectToursEnabled","doEnableAnalytics","doDisableAnalytics",Object(se.a)(Object(c.a)("status")((function(e){var t=e.t,a=e.ipfsConnected,n=e.analyticsAskToEnable,c=e.doEnableAnalytics,o=e.doDisableAnalytics,m=e.toursEnabled,d=e.handleJoyrideCallback,p=e.nodeBandwidthEnabled;return r.a.createElement("div",{"data-id":"StatusPage",className:"mw9 center"},r.a.createElement(l.Helmet,null,r.a.createElement("title",null,t("title")," | IPFS")),r.a.createElement(b.a,{className:"pa3 joyride-status-node",style:{minHeight:0}},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"flex-auto"},a?r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(P,null),r.a.createElement("div",{className:"pt2"},r.a.createElement(_,null))):r.a.createElement("div",null,r.a.createElement(E.a,null))))),a&&n&&r.a.createElement(ne,{className:"mt3",label:t("AskToEnable.label"),yesLabel:t("app:actions.ok"),noLabel:t("app:actions.noThanks"),detailsLabel:t("app:actions.moreInfo"),detailsLink:"#/settings/analytics",onYes:c,onNo:o}),r.a.createElement("div",{style:{opacity:a?1:.4}},p?r.a.createElement(b.a,{className:"mt3 pa3"},r.a.createElement("div",{className:"flex flex-column flex-row-l joyride-status-charts"},r.a.createElement("div",{className:"pr0 pr2-l flex-auto"},r.a.createElement(X,null)),r.a.createElement("div",{className:"dn db-l pl3 pr5"},r.a.createElement(te,null)))):r.a.createElement(h,null),r.a.createElement(i.b,{run:m,steps:re.e.getSteps({t:t,Trans:s.a}),styles:re.e.styles,callback:d,continuous:!0,scrollToFirstStep:!0,locale:Object(le.a)(t),showProgress:!0})))}))))},810:function(e,t,a){"use strict";var n=a(69),r=a(70),l=a(89),s=a(88),c=a(0),o=a.n(c),i=a(35),m=a(126);t.a=function(e){var t=function(t){Object(l.a)(c,t);var a=Object(s.a)(c);function c(){var e;Object(n.a)(this,c);for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).handleJoyrideCallback=function(t){var a=e.props.doDisableTours,n=t.action,r=t.status;("close"===n||[m.a.FINISHED].includes(r))&&a()},e}return Object(r.a)(c,[{key:"render",value:function(){return o.a.createElement(e,Object.assign({handleJoyrideCallback:this.handleJoyrideCallback},this.props))}}]),c}(o.a.Component);return Object(i.b)("doDisableTours",t)}},830:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(158),s=a.n(l);t.a=function(e){var t=e.title,a=void 0===t?"Shell":t,n=e.children,l=e.className;return r.a.createElement("div",{className:s()("br1 overflow-hidden",l)},r.a.createElement("div",{className:"f7 mb0 sans-serif ttu tracked charcoal pv1 pl2 bg-black-20"},a),r.a.createElement("div",{className:"bg-black-70 snow pa2 f7 lh-copy monospace nowrap overflow-x-auto"},n))}},894:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(14),s=a(52),c=a(0),o=a.n(c),i=a(35),m=a(795),d=a(157),p=function(e){return null==e?"":"string"===typeof e?e:JSON.stringify(e)};t.a=Object(i.b)("doUpdateIpfsApiAddress","selectIpfsApiAddress",Object(m.a)("app")((function(e){var t=e.t,a=e.doUpdateIpfsApiAddress,n=e.ipfsApiAddress,i=Object(c.useState)(p(n)),m=Object(s.a)(i,2),u=m[0],f=m[1],b=function(){var e=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a(u);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("form",{onSubmit:b},o.a.createElement("input",{id:"api-address","aria-label":t("apiAddressForm.apiLabel"),type:"text",className:"w-100 lh-copy monospace f5 pl1 pv1 mb2 charcoal input-reset ba b--black-20 br1 focus-outline",onChange:function(e){return f(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&b(e)},value:u}),o.a.createElement("div",{className:"tr"},o.a.createElement(d.a,{className:"tc"},t("actions.submit"))))})))}}]);
//# sourceMappingURL=15.9e6822e6.chunk.js.map