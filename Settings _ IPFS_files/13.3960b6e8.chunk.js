(this["webpackJsonpipfs-webui"]=this["webpackJsonpipfs-webui"]||[]).push([[13],{1735:function(e){e.exports=JSON.parse('{"ar":{"locale":"ar","nativeName":"\u0627\u0644\u0639\u0631\u0628\u064a\u0629","englishName":"Arabic"},"ca":{"locale":"ca","nativeName":"Catal\xe0","englishName":"Catalan"},"cs":{"locale":"cs","nativeName":"\u010ce\u0161tina","englishName":"Czech"},"da":{"locale":"da","nativeName":"Dansk","englishName":"Danish"},"de":{"locale":"de","nativeName":"Deutsch","englishName":"German"},"en":{"locale":"en","nativeName":"English","englishName":"English"},"es":{"locale":"es","nativeName":"Espa\xf1ol","englishName":"Spanish"},"fr":{"locale":"fr","nativeName":"Fran\xe7ais","englishName":"French"},"it":{"locale":"it","nativeName":"Italiano","englishName":"Italian"},"ja-JP":{"locale":"ja-JP","nativeName":"\u65e5\u672c\u8a9e","englishName":"Japanese"},"ko-KR":{"locale":"ko-KR","nativeName":"\ud55c\uad6d\uc5b4 (\u97e9\u56fd)","englishName":"Korean (Korea)"},"nl":{"locale":"nl","nativeName":"Nederlands","englishName":"Dutch"},"no":{"locale":"no","nativeName":"Norsk","englishName":"Norwegian"},"pl":{"locale":"pl","nativeName":"Polski","englishName":"Polish"},"pt":{"locale":"pt","nativeName":"Portugu\xeas","englishName":"Portuguese"},"ro":{"locale":"ro","nativeName":"Rom\xe2n\u0103","englishName":"Romanian"},"ru":{"locale":"ru","nativeName":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439","englishName":"Russian"},"sk":{"locale":"sk","nativeName":"Sloven\u010dina","englishName":"Slovak"},"sv":{"locale":"sv","nativeName":"Svenska","englishName":"Swedish"},"zh-CN":{"locale":"zh-CN","nativeName":"\u4e2d\u6587\uff08\u4e2d\u56fd\uff09","englishName":"Chinese Simplified (China)"},"zh-HK":{"locale":"zh-HK","nativeName":"\u4e2d\u6587\uff08\u9999\u6e2f\uff09","englishName":"Chinese Traditional (Hong Kong)"},"zh-TW":{"locale":"zh-TW","nativeName":"\u4e2d\u6587\uff08\u53f0\u7063\uff09","englishName":"Chinese Traditional (Taiwan)"}}')},1744:function(e,a){ace.define("ace/theme/ipfs_dark",["require","exports","module","ace/lib/dom"],(function(e,a,n){a.isDark=!0,a.cssClass="ace-ipfs-dark",a.cssText="\n  .ace-ipfs-dark .ace_gutter {\n  background: #0b3a53;\n  color: #9ad4db;\n  }\n  .ace-ipfs-dark .ace_print-margin {\n  width: 1px;\n  background: #69c4cd;\n  }\n  .ace-ipfs-dark {\n  background-color: #0b3a53;\n  color: #9ad4db;\n  }\n  .ace-ipfs-dark .ace_entity.ace_other.ace_attribute-name,\n  .ace-ipfs-dark .ace_storage {\n  color: #f7f8fa;\n  }\n  .ace-ipfs-dark .ace_rparen,\n  .ace-ipfs-dark .ace_lparen {\n    color: #9ad4db;\n  }\n  .ace-ipfs-dark .ace_cursor,\n  .ace-ipfs-dark .ace_string.ace_regexp {\n  color: #ea5037\n  }\n  .ace-ipfs-dark .ace_marker-layer .ace_active-line,\n  .ace-ipfs-dark .ace_marker-layer .ace_selection {\n  background: rgba(255, 255, 255, 0.1)\n  }\n  .ace-ipfs-dark.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #244e66;\n  }\n  .ace-ipfs-dark .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n  }\n  .ace-ipfs-dark .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(147, 161, 161, 0.50)\n  }\n  .ace-ipfs-dark .ace_gutter-active-line {\n  background-color: #244e66\n  }\n  .ace-ipfs-dark .ace_marker-layer .ace_selected-word {\n  border: 1px solid #244e66\n  }\n  .ace-ipfs-dark .ace_invisible {\n  color: rgba(147, 161, 161, 0.50)\n  }\n  .ace-ipfs-dark .ace_keyword,\n  .ace-ipfs-dark .ace_meta,\n  .ace-ipfs-dark .ace_support.ace_class,\n  .ace-ipfs-dark .ace_support.ace_type {\n  color: #0aca9f\n  }\n  .ace-ipfs-dark .ace_constant.ace_character,\n  .ace-ipfs-dark .ace_constant.ace_other {\n  color: #f36149\n  }\n  .ace-ipfs-dark .ace_constant.ace_language {\n  color: #f9a13e\n  }\n  .ace-ipfs-dark .ace_constant.ace_numeric {\n  color: #f39021\n  }\n  .ace-ipfs-dark .ace_fold {\n  background-color: #69c4cd;\n  border-color: #93A1A1\n  }\n  .ace-ipfs-dark .ace_entity.ace_name.ace_function,\n  .ace-ipfs-dark .ace_entity.ace_name.ace_tag,\n  .ace-ipfs-dark .ace_support.ace_function,\n  .ace-ipfs-dark .ace_variable,\n  .ace-ipfs-dark .ace_variable.ace_language {\n  color: #edf0f4\n  }\n  .ace-ipfs-dark .ace_string {\n  color: #0aca9f\n  }\n  .ace-ipfs-dark .ace_comment {\n  font-style: italic;\n  color: #657B83\n  }\n  .ace-ipfs-dark .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNg0Db1ZVCxc/sPAAd4AlUHlLenAAAAAElFTkSuQmCC) right repeat-y\n  }",e("../lib/dom").importCssString(a.cssText,a.cssClass)}))},1760:function(e,a,n){"use strict";n.r(a),n.d(a,"SettingsPage",(function(){return K})),n.d(a,"SettingsPageContainer",(function(){return J})),n.d(a,"TranslatedSettingsPage",(function(){return W}));var t=n(69),c=n(70),l=n(89),s=n(88),r=n(0),i=n.n(r),o=n(127),m=n(35),d=n(156),u=n(795),p=n(126),g=n(160),f=n(810),h=n(218),b=n(317),v=n(215),E=n(157),N=n(230),k=n(1735),C=function(e){if(!e)return"Unknown";var a=k[e];if(!a){var n=k[e.split("-")[0]];return n&&n.nativeName||k.en.englishName}return a.nativeName},y=n(846),w=n(38),S=n(831),O=function(e){return i.a.createElement("svg",Object.assign({viewBox:"0 0 100 100"},e),i.a.createElement("path",{d:"M76.1 16.42c-.81 0-23.86 4.63-43.07 8.52a13.27 13.27 0 0 1-1.48.16c-4.6.39-15.38 1.3-15.38 16.56 0 9.6 4.68 14.68 9.42 16.42l.06 17.67a7.78 7.78 0 0 0 7.5 7.83c2.93 0 9.79 0 9.79-5.08v-.14L40.93 58h5.2c.65.15 3.4.84 6.55 1.62 20.32 5.05 22.75 5.6 23.26 5.6 7.37 0 12.72-10.19 12.72-24.28 0-14.22-5.28-24.52-12.56-24.52zM46 55a30.82 30.82 0 0 1-3.85-14.81 30.46 30.46 0 0 1 3.75-14.67l-.16-.08c8.34-1.68 16.93-3.4 22.86-4.57-3.17 3.82-5.32 10.3-5.65 17.91 0 .68-.05 1.37-.05 2.07v2c.31 7.34 2.31 13.63 5.29 17.51-4.8-1.18-10.77-2.66-14.84-3.68C46.53 55 46.53 55 46.3 55zm30.17-35.58c5.33.09 9.49 9.49 9.49 21.48v.1c0 11.85-4.22 21.15-9.64 21.24-.5-.08-2.5-.55-5.2-1.21-2.48-2.29-4.46-6.39-5.54-11.46 3.08-.09 5.48-3.92 5.48-8.8s-2.38-8.68-5.44-8.77c1.14-5.22 3.25-9.4 5.86-11.6 2.73-.57 4.55-.92 4.99-.98zm-11.12 14h.12c2.22 0 4.09 3.34 4.09 7.3s-1.87 7.31-4.09 7.31H65a41.13 41.13 0 0 1-.58-5.34v-3.77a43.13 43.13 0 0 1 .63-5.46zm-31.9 47.16a4.8 4.8 0 0 1-4.5-4.83l-.06-17.84 9.29-.37 2.06 21c-.08 1.81-3.66 2.04-6.79 2.04zM39.28 55a1.51 1.51 0 0 0-1.11.49v.05l-10 .4a1.4 1.4 0 0 0-.67-.41c-1.39-.36-8.29-2.7-8.29-13.86 0-12.5 8.22-13.19 12.63-13.57a15.6 15.6 0 0 0 1.83-.21l10.43-2.12a31.71 31.71 0 0 0-3.46 14.41A32.29 32.29 0 0 0 44.28 55z"}))},x=function(e){var a=e.t,n=(e.tReady,e.onLeave),t=(e.link,e.className),c=Object(w.a)(e,["t","tReady","onLeave","link","className"]);return i.a.createElement(S.a,Object.assign({},c,{className:t,onCancel:n,style:{maxWidth:"40em"}}),i.a.createElement(S.c,{icon:O},i.a.createElement("p",{className:"charcoal w-80 center"},a("languageModal.description")),i.a.createElement("div",{className:"pa2 flex flex-wrap"},N.b.map((function(e){return i.a.createElement("button",{key:"lang-".concat(e),className:"pa2 w-33 flex nowrap bg-transparent bn outline-0 blue justify-center",onClick:function(){return function(e){N.a.changeLanguage(e),n()}(e)}},C(e))}))),i.a.createElement("p",{className:"lh-copy charcoal f6"},a("languageModal.translationProjectIntro"),i.a.createElement("br",null),i.a.createElement("a",{href:"https://www.transifex.com/ipfs/public/",rel:"noopener noreferrer",target:"_blank",className:"link blue"},a("languageModal.translationProjectLink")))),i.a.createElement(S.b,null,i.a.createElement(E.a,{className:"ma2 tc",bg:"bg-gray",onClick:n},a("app:actions.close"))))};x.defaultProps={className:""};var _=x,j=function(e){Object(l.a)(n,e);var a=Object(s.a)(n);function n(){var e;Object(t.a)(this,n);for(var c=arguments.length,l=new Array(c),s=0;s<c;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={isLanguageModalOpen:!1},e.onLanguageEditOpen=function(){return e.setState({isLanguageModalOpen:!0})},e.onLanguageEditClose=function(){return e.setState({isLanguageModalOpen:!1})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.t;return i.a.createElement(r.Fragment,null,i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"pr4 flex items-center lh-copy charcoal f5 fw5",style:{height:40}},C(N.a.language)),i.a.createElement(E.a,{className:"tc",minWidth:100,onClick:this.onLanguageEditOpen},e("app:actions.change"))),i.a.createElement(y.a,{show:this.state.isLanguageModalOpen,onLeave:this.onLanguageEditClose},i.a.createElement(_,{className:"outline-0",onLeave:this.onLanguageEditClose,t:e})))}}]),n}(r.Component),A=n(316),L=n(894),T=n(1736),I=n.n(T),M=(n(1742),n(1744),function(e){Object(l.a)(n,e);var a=Object(s.a)(n);function n(){return Object(t.a)(this,n),a.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,a=e.value,n=e.readOnly,t=e.onChange,c=Math.max(500,16*a.split("\n").length);return i.a.createElement("div",{className:"pv3 bg-navy br2"},i.a.createElement(I.a,{value:a,readOnly:n,onChange:t,mode:"json",theme:"ipfs_dark",width:"100%",height:c+"px",fontSize:12,showPrintMargin:!1,showGutter:!0,editorProps:{$blockScrolling:1/0},setOptions:{showLineNumbers:!0,tabSize:2}}))}}]),n}(i.a.Component)),P=n(162),z=n(229),R=Object(m.b)("selectExperiments","doExpToggleAction",(function(e){var a=e.doExpToggleAction,n=e.experiments,t=e.t;if(n&&n.length>0){var c=function(e,a){return t("Experiments.".concat(a?"".concat(a,".").concat(e):"".concat(e)))};return i.a.createElement(v.a,{className:"mb3 pa4 lh-copy"},i.a.createElement(z.a,null,t("experiments")),i.a.createElement("p",{className:"db mv4 f6 charcoal mw7"},c("description")),i.a.createElement("div",{className:"flex flex-wrap pb3"},n.map((function(e){var n=e.key,t=e.actionUrls,l=e.enabled,s=e.blocked;return i.a.createElement("div",{key:n,className:"pa3 mr3 mb3 mw6 br3 bg-white dib f6 ba b1 b--light-gray"},i.a.createElement("h3",null,c("title",n)),i.a.createElement("p",{className:"charcoal"},c("description",n)),i.a.createElement(P.a,{className:"dib",disabled:s,onChange:function(){return a(n,l)},checked:l,label:i.a.createElement("span",{className:"fw5 f6"},c("label",n))}),t&&i.a.createElement("div",{className:"mv3"},t.map((function(e,a){return i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",key:e.key,className:"link blue pr2 ".concat(a>0&&"bl b1 pl2 b--light-gray"),href:e.url},c(e.key))}))))}))))}return null})),D=n(896),F=n(856),H=n(18),K=function(e){var a=e.t,n=e.tReady,t=e.isIpfsConnected,c=e.isConfigBlocked,l=e.isLoading,s=e.isSaving,r=e.hasSaveFailed,m=e.hasSaveSucceded,u=e.hasErrors,f=e.hasLocalChanges,b=e.hasExternalChanges,N=e.config,k=e.onChange,C=e.onReset,y=e.onSave,w=e.editorKey,S=e.analyticsEnabled,O=e.doToggleAnalytics,x=e.toursEnabled,_=e.handleJoyrideCallback,T=e.isCliTutorModeEnabled,I=e.doToggleCliTutorMode,H=e.command;return i.a.createElement("div",{"data-id":"SettingsPage",className:"mw9 center"},i.a.createElement(o.Helmet,null,i.a.createElement("title",null,a("title")," | IPFS")),i.a.createElement(v.a,{className:"mb3 pa4 joyride-settings-customapi"},i.a.createElement("div",{className:"lh-copy charcoal"},i.a.createElement(z.a,null,a("app:terms.apiAddress")),i.a.createElement(d.a,{i18nKey:"apiDescription",t:a},i.a.createElement("p",null,"If your node is configured with a ",i.a.createElement("a",{className:"link blue",href:"https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#addresses",target:"_blank",rel:"noopener noreferrer"},"custom API address"),", including a port other than the default 5001, enter it here.")),i.a.createElement(L.a,null))),i.a.createElement(v.a,{className:"mb3 pa4"},i.a.createElement("div",{className:"mb4 joyride-settings-language"},i.a.createElement(z.a,null,a("language")),i.a.createElement(j,{t:a})),i.a.createElement("div",{className:"joyride-settings-analytics"},i.a.createElement(z.a,null,a("analytics")),i.a.createElement(A.a,{t:a,doToggleAnalytics:O,analyticsEnabled:S}))),i.a.createElement(R,{t:a}),i.a.createElement(v.a,{className:"mb3 pa4"},i.a.createElement("div",{className:"charcoal"},i.a.createElement(z.a,null,a("cliTutorMode")),i.a.createElement(P.a,{className:"dib",onChange:I,checked:T,label:i.a.createElement("span",{className:"f5 lh-copy"},a("cliToggle.label"))}),i.a.createElement(d.a,{i18nKey:"cliDescription",t:a},i.a.createElement("p",{className:"f6 mv2"},'Enable this option to display a "view code" ',i.a.createElement(F.a,{className:"dib v-mid icon mh1 fill-charcoal",viewBox:"14 20 70 66",style:{height:24}})," icon next to common IPFS commands. Clicking it opens a modal with that command's CLI code, so you can paste it into the IPFS command-line interface in your terminal.")))),t&&i.a.createElement(v.a,{className:"mb3 pa4 joyride-settings-config"},i.a.createElement(z.a,null,a("config")),i.a.createElement("div",{className:"flex pb3"},i.a.createElement("div",{className:"flex-auto"},i.a.createElement("div",{className:"mw7"},i.a.createElement(B,{t:a,tReady:n,config:N,isIpfsConnected:t,isConfigBlocked:c,isLoading:l,hasExternalChanges:b,hasSaveFailed:r,hasSaveSucceded:m}))),N?i.a.createElement("div",{className:"flex flex-column justify-center flex-row-l items-center-l"},i.a.createElement(D.a,{showIcon:!0,config:N,t:a,command:H}),i.a.createElement(E.a,{minWidth:100,height:40,bg:"bg-charcoal",className:"tc",disabled:s||!f&&!b,onClick:C},a("app:actions.reset")),i.a.createElement(U,{t:a,tReady:n,hasErrors:u,hasSaveFailed:r,hasSaveSucceded:m,hasLocalChanges:f,hasExternalChanges:b,isSaving:s,onClick:y})):null),N?i.a.createElement(M,{value:N,onChange:k,readOnly:s,key:w}):null),i.a.createElement(p.b,{run:x,steps:g.d.getSteps({t:a,Trans:d.a}),styles:g.d.styles,callback:_,continuous:!0,scrollToFirstStep:!0,locale:Object(h.a)(a),showProgress:!0}))},U=function(e){var a=e.t,n=e.hasErrors,t=e.hasSaveFailed,c=e.hasSaveSucceded,l=e.isSaving,s=e.hasLocalChanges,r=e.hasExternalChanges,o=e.onClick,m=c?"bg-green":"bg-teal";return i.a.createElement(E.a,{minWidth:100,height:40,className:"mt2 mt0-l ml2-l tc",bg:m,disabled:!s||n,danger:t||r,onClick:o},c&&!t?i.a.createElement(b.a,{height:16,className:"fill-snow",style:{transform:"scale(3)"}}):a(l?"app:actions.saving":"app:actions.save"))},B=function(e){var a=e.t,n=e.isIpfsConnected,t=e.isConfigBlocked,c=e.hasExternalChanges,l=e.hasSaveFailed,s=e.hasSaveSucceded,r=e.isLoading,o=e.config;return t?i.a.createElement("p",{className:"ma0 lh-copy charcoal f5 mw7"},a("configApiNotAvailable")):n?o?c?i.a.createElement("p",{className:"ma0 lh-copy red f5 mw7"},i.a.createElement(d.a,{i18nKey:"settingsHaveChanged",t:a},"The settings have changed, please click ",i.a.createElement("strong",null,"Reset")," to update the editor contents")):l?i.a.createElement("p",{className:"ma0 lh-copy red fw6 f5 mw7"},a("errorOccured"),i.a.createElement("span",{className:"db fw4 f6 charcoal-muted"},a("checkConsole"))):s?i.a.createElement("p",{className:"ma0 lh-copy green fw6 f5 mw7"},a("changesSaved"),i.a.createElement("span",{className:"db fw4 f6 charcoal-muted"},a("settingsWillBeUsedNextTime"))):i.a.createElement("p",{className:"ma0 mr2 lh-copy charcoal f5"},a("ipfsConfigDescription")," ",i.a.createElement("a",{href:"https://github.com/ipfs/go-ipfs/blob/master/docs/config.md",rel:"noopener noreferrer",target:"_blank",className:"link blue"},a("ipfsConfigHelp"))):i.a.createElement("p",{className:"ma0 lh-copy charcoal f5 mw7"},a(r?"fetchingSettings":"settingsUnavailable")):i.a.createElement("p",{className:"ma0 lh-copy charcoal f5 mw7"},a("ipfsDaemonOffline"))},J=function(e){Object(l.a)(n,e);var a=Object(s.a)(n);function n(){var e;Object(t.a)(this,n);for(var c=arguments.length,l=new Array(c),s=0;s<c;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={hasErrors:!1,hasLocalChanges:!1,hasExternalChanges:!1,editableConfig:e.props.config,editorKey:Date.now()},e.onChange=function(a){e.setState({hasErrors:!e.isValidJson(a),hasLocalChanges:e.props.config!==a,editableConfig:a})},e.onReset=function(){e.setState({hasErrors:!1,hasLocalChanges:!1,hasExternalChanges:!1,editableConfig:e.props.config,editorKey:Date.now()})},e.onSave=function(){e.props.doSaveConfig(e.state.editableConfig)},e}return Object(c.a)(n,[{key:"isValidJson",value:function(e){try{return JSON.parse(e),!0}catch(a){return!1}}},{key:"isRecent",value:function(e){return e>Date.now()-3e3}},{key:"componentDidUpdate",value:function(e){var a=this;if(this.props.configSaveLastSuccess!==e.configSaveLastSuccess&&setTimeout((function(){return a.onReset()}),3e3),e.config!==this.props.config){if(!e.config||this.isRecent(this.props.configSaveLastSuccess))return this.setState({editableConfig:this.props.config});if(this.props.config!==this.state.editableConfig)return this.setState({hasExternalChanges:!0})}}},{key:"render",value:function(){var e=this.props,a=e.t,n=e.tReady,t=e.isConfigBlocked,c=e.ipfsConnected,l=e.configIsLoading,s=e.configLastError,r=e.configIsSaving,o=e.configSaveLastSuccess,m=e.configSaveLastError,d=e.isIpfsDesktop,u=e.analyticsEnabled,p=e.doToggleAnalytics,g=e.toursEnabled,f=e.handleJoyrideCallback,h=e.isCliTutorModeEnabled,b=e.doToggleCliTutorMode,v=this.state,E=v.hasErrors,N=v.hasLocalChanges,k=v.hasExternalChanges,C=v.editableConfig,y=v.editorKey,w=this.isRecent(o),S=this.isRecent(m),O=l||!C&&!s;return i.a.createElement(K,{t:a,tReady:n,isIpfsConnected:c,isConfigBlocked:t,isLoading:O,isSaving:r,hasSaveFailed:S,hasSaveSucceded:w,hasErrors:E,hasLocalChanges:N,hasExternalChanges:k,config:C,editorKey:y,onChange:this.onChange,onReset:this.onReset,onSave:this.onSave,isIpfsDesktop:d,analyticsEnabled:u,doToggleAnalytics:p,toursEnabled:g,handleJoyrideCallback:f,doToggleCliTutorMode:b,isCliTutorModeEnabled:h,command:H.g[H.f.UPDATE_IPFS_CONFIG]()})}}]),n}(i.a.Component),W=Object(u.a)("settings")(J);a.default=Object(m.b)("selectConfig","selectIpfsConnected","selectIsConfigBlocked","selectConfigLastError","selectConfigIsLoading","selectConfigIsSaving","selectConfigSaveLastSuccess","selectConfigSaveLastError","selectIsIpfsDesktop","selectToursEnabled","selectAnalyticsEnabled","doToggleAnalytics","doSaveConfig","selectIsCliTutorModeEnabled","doToggleCliTutorMode",Object(f.a)(W))},810:function(e,a,n){"use strict";var t=n(69),c=n(70),l=n(89),s=n(88),r=n(0),i=n.n(r),o=n(35),m=n(126);a.a=function(e){var a=function(a){Object(l.a)(r,a);var n=Object(s.a)(r);function r(){var e;Object(t.a)(this,r);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=n.call.apply(n,[this].concat(c))).handleJoyrideCallback=function(a){var n=e.props.doDisableTours,t=a.action,c=a.status;("close"===t||[m.a.FINISHED].includes(c))&&n()},e}return Object(c.a)(r,[{key:"render",value:function(){return i.a.createElement(e,Object.assign({handleJoyrideCallback:this.handleJoyrideCallback},this.props))}}]),r}(i.a.Component);return Object(o.b)("doDisableTours",a)}},830:function(e,a,n){"use strict";var t=n(0),c=n.n(t),l=n(158),s=n.n(l);a.a=function(e){var a=e.title,n=void 0===a?"Shell":a,t=e.children,l=e.className;return c.a.createElement("div",{className:s()("br1 overflow-hidden",l)},c.a.createElement("div",{className:"f7 mb0 sans-serif ttu tracked charcoal pv1 pl2 bg-black-20"},n),c.a.createElement("div",{className:"bg-black-70 snow pa2 f7 lh-copy monospace nowrap overflow-x-auto"},t))}},831:function(e,a,n){"use strict";n.d(a,"b",(function(){return r})),n.d(a,"c",(function(){return i})),n.d(a,"a",(function(){return o}));var t=n(38),c=n(0),l=n.n(c),s=n(128),r=function(e){var a=e.justify,n=e.className,c=e.children,s=Object(t.a)(e,["justify","className","children"]);return l.a.createElement("div",Object.assign({className:"flex justify-".concat(a," pa2 ").concat(n),style:{backgroundColor:"#f4f6f8"}},s),c)};r.defaultProps={justify:"between",className:""};var i=function(e){var a=e.className,n=e.icon,c=e.title,s=e.children,r=Object(t.a)(e,["className","icon","title","children"]);return n=l.a.createElement(n,{className:"fill-gray w3"}),l.a.createElement("div",Object.assign({className:"ph2 pv3 tc ".concat(a)},r),l.a.createElement("div",{className:"center bg-snow br-100 flex justify-center items-center",style:{width:"80px",height:"80px"}},n),l.a.createElement("p",{className:"charcoal-muted fw5"},c),s)};i.defaultProps={className:""};var o=function(e){var a=e.onCancel,n=e.children,c=e.className,r=Object(t.a)(e,["onCancel","children","className"]);return l.a.createElement("div",Object.assign({className:"".concat(c," bg-white w-80 shadow-4 sans-serif relative"),style:{maxWidth:"30em"}},r),a&&l.a.createElement(s.a,{className:"absolute pointer w2 h2 top-0 right-0 fill-gray",onClick:a}),n)};o.defaultProps={onCancel:null,className:""}},846:function(e,a,n){"use strict";var t=n(38),c=n(0),l=n.n(c),s=n(1003);function r(e){var a=e.children,n=e.show,c=e.onLeave,r=e.className,i=Object(t.a)(e,["children","show","onLeave","className"]);return l.a.createElement(s.a,Object.assign({},i,{show:n,className:"".concat(r," fixed top-0 left-0 right-0 bottom-0 z-max flex items-center justify-around"),renderBackdrop:function(e){return l.a.createElement("div",Object.assign({className:"fixed top-0 left-0 right-0 bottom-0 bg-black o-50"},e))},onKeyDown:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),"Escape"===e.key&&c()},onBackdropClick:c}),a)}r.defaultProps={className:""},a.a=r},856:function(e,a,n){"use strict";var t=n(0),c=n.n(t);a.a=function(e){return c.a.createElement("svg",Object.assign({viewBox:"0 0 100 100"},e),c.a.createElement("path",{d:"M75 24H25.11c-4.19 0-8 4.11-8 8.61v35.26a8.29 8.29 0 0 0 8 8.13H75a8.11 8.11 0 0 0 7.87-8.13V32.61C82.91 28.55 79.54 24 75 24zm-49.89 3H75c2.74 0 4.87 3 4.87 5.61v1.32H20.09v-1.32c0-2.83 2.49-5.61 5.02-5.61zm-5 39.59V35.93h59.8v30.66zM75 73H25.11a5.28 5.28 0 0 1-4.95-4.41h59.67A5.09 5.09 0 0 1 75 73z"}),c.a.createElement("circle",{cx:26.22,cy:30.54,r:1.33}),c.a.createElement("path",{d:"M30.49 31.88a1.34 1.34 0 1 0-1.33-1.34 1.34 1.34 0 0 0 1.33 1.34zm4.28 0a1.34 1.34 0 1 0-1.34-1.34 1.34 1.34 0 0 0 1.34 1.34zm4.4 19.55l5-5a1.28 1.28 0 0 0-1.81-1.81l-5.87 5.88a1.3 1.3 0 0 0 0 1.84l5.87 5.88a1.28 1.28 0 0 0 1.81-1.81zm23.58-.92l-5.88-5.88a1.28 1.28 0 1 0-1.8 1.81l5 5-5 5a1.28 1.28 0 1 0 1.8 1.81l5.88-5.88a1.27 1.27 0 0 0 .38-.92 1.31 1.31 0 0 0-.38-.94zM51 42.85A1.38 1.38 0 0 0 49.44 44l-2.37 14.41a1.39 1.39 0 0 0 2.75.45l2.37-14.41a1.39 1.39 0 0 0-1.19-1.6z"}))}},857:function(e,a,n){"use strict";var t=n(0),c=n.n(t);a.a=function(e){return c.a.createElement("svg",Object.assign({viewBox:"0 0 100 100"},e),c.a.createElement("path",{d:"M76.3 61.6H23.7c-3.1 0-5.6 2.5-5.6 5.6v7.5c0 3.1 2.5 5.6 5.6 5.6h52.7c3.1 0 5.6-2.5 5.6-5.6v-7.5c-.1-3.1-2.6-5.6-5.7-5.6zm2.4 13.1c0 1.3-1 2.3-2.3 2.3H23.7c-1.3 0-2.3-1-2.3-2.3v-7.5c0-1.3 1-2.3 2.3-2.3h52.7c1.3 0 2.3 1 2.3 2.3v7.5z"}),c.a.createElement("path",{d:"M64.9 68.8c-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2zm0 3.3c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zm7.7-3.3c-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-1.2-1-2.2-2.2-2.2zm0 3.3c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zM50.8 57.2l11.8-11.8c.8-.8.2-2.1-.9-2h-5.9V20.9c0-.7-.5-1.2-1.2-1.2h-9.5c-.7 0-1.2.5-1.2 1.2v22.5H38c-1.1 0-1.6 1.3-.9 2l11.8 11.8c.7.5 1.5.5 1.9 0zM41 45.8h5.4V22.1h7.1v23.7H59l-9 8.9-9-8.9z"}))}},894:function(e,a,n){"use strict";var t=n(1),c=n.n(t),l=n(14),s=n(52),r=n(0),i=n.n(r),o=n(35),m=n(795),d=n(157),u=function(e){return null==e?"":"string"===typeof e?e:JSON.stringify(e)};a.a=Object(o.b)("doUpdateIpfsApiAddress","selectIpfsApiAddress",Object(m.a)("app")((function(e){var a=e.t,n=e.doUpdateIpfsApiAddress,t=e.ipfsApiAddress,o=Object(r.useState)(u(t)),m=Object(s.a)(o,2),p=m[0],g=m[1],f=function(){var e=Object(l.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),n(p);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return i.a.createElement("form",{onSubmit:f},i.a.createElement("input",{id:"api-address","aria-label":a("apiAddressForm.apiLabel"),type:"text",className:"w-100 lh-copy monospace f5 pl1 pv1 mb2 charcoal input-reset ba b--black-20 br1 focus-outline",onChange:function(e){return g(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&f(e)},value:p}),i.a.createElement("div",{className:"tr"},i.a.createElement(d.a,{className:"tc"},a("actions.submit"))))})))},896:function(e,a,n){"use strict";var t=n(38),c=n(0),l=n.n(c),s=n(35),r=n(831),i=n(856),o=n(157),m=n(846),d=n(830),u=n(857),p=n(18),g=function(e){var a=e.command,n=e.t,c=e.onLeave,s=e.className,m=e.downloadConfig,g=Object(t.a)(e,["command","t","onLeave","className","downloadConfig"]);return l.a.createElement(r.a,Object.assign({},g,{className:s,onCancel:c,style:{maxWidth:"40em"}}),l.a.createElement(r.c,{icon:i.a},l.a.createElement("p",{className:"charcoal w-80 center",style:{lineHeight:"1.3"}},n("app:cliModal.description")),l.a.createElement("p",{className:"charcoal-muted w-90 center"},a&&a===p.g[p.f.UPDATE_IPFS_CONFIG]()?n("app:cliModal.extraNotes"):""),l.a.createElement("div",null,l.a.createElement(d.a,{className:"tl",title:"Shell"},l.a.createElement("code",{className:"db"},l.a.createElement("b",{className:"no-select"},"$ "),a)))),l.a.createElement(r.b,null,l.a.createElement("div",null,l.a.createElement(o.a,{className:"ma2 tc",bg:"bg-gray",onClick:c},n("app:actions.close"))),l.a.createElement("div",{className:"flex items-center"},a&&a===p.g[p.f.UPDATE_IPFS_CONFIG]()?l.a.createElement(u.a,{onClick:m,className:"dib fill-link pointer",style:{height:38}}):l.a.createElement("div",null),l.a.createElement(o.a,{className:"ma2 tc",onClick:function(){return e=a,void navigator.clipboard.writeText(e).then((function(){c()}));var e}},n("app:actions.copy")))))};g.defaultProps={className:""},a.a=Object(s.b)("doOpenCliTutorModal","selectIsCliTutorModalOpen","selectIsCliTutorModeEnabled",(function(e){var a=e.t,n=e.filesPage,t=e.isCliTutorModeEnabled,s=e.onLeave,r=e.isCliTutorModalOpen,o=e.command,d=e.config,u=e.showIcon,p=e.doOpenCliTutorModal;return t?n?l.a.createElement(g,{className:"outline-0",onLeave:s,t:a,command:o}):l.a.createElement(c.Fragment,null,u?l.a.createElement(i.a,{onClick:function(){return p(!0)},className:"dib fill-link pointer mh2",style:{height:44}}):l.a.createElement("div",null),l.a.createElement(m.a,{show:r,onLeave:function(){return p(!1)}},l.a.createElement(g,{className:"outline-0",onLeave:function(){return p(!1)},t:a,command:o,downloadConfig:function(){return function(e){var a=window.URL.createObjectURL(new Blob([e])),n=document.createElement("a");n.style.display="none",n.href=a,n.download="settings.json",document.body.appendChild(n),n.click(),window.URL.revokeObjectURL(a)}(d)}}))):null}))}}]);
//# sourceMappingURL=13.3960b6e8.chunk.js.map