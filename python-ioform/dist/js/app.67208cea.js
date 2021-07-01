(function(t){function e(e){for(var o,c,s=e[0],r=e[1],l=e[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var r=n[s];0!==a[r]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},i=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"194d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a=n("b85c"),i=(n("b0c0"),n("d3b7"),n("ddb0"),n("5502")),c=Object(i["a"])({state:function(){return{url:"http://localhost;8000",username:"guest",password:"guest",status:"starting",socket:null,input:{},inputLogin:{input_rows:[{id:"url",label:"Server URL",placeholder:"http(s)://<server>:<port>",information:"URL for socket.io server that this client is communicating with."},{id:"username",label:"Username"},{id:"password",label:"Password",type:"password"}],values:{url:window.location.href,username:"guest",password:"guest"}},output:{text:""}}},mutations:{setStatus:function(t,e){t.status=e},setState:function(t,e){if(!((null===e||void 0===e?void 0:e.name)in t))return console.log("No name: ".concat(e.name," found!"));t[e.name]=e.value?e.value:null},setInputValue:function(t,e){if(!t[e.name])return console.log("No input name ".concat(e.name," found!"));t[e.name].values||(t[e.name].values={}),t[e.name].values[e.id]=e.value},setInputRows:function(t,e){if(!t[e.name])return console.log("No input name ".concat(e.name," found!"));var n=t[e.name];n.input_rows=e.input_rows,n.values||(n.values={});var o,i=Object(a["a"])(n.input_rows);try{for(i.s();!(o=i.n()).done;){var c=o.value;n.values[c.id]||(n.values[c.id]=c.value)}}catch(s){i.e(s)}finally{i.f()}},setOutputText:function(t,e){if(!t[e.name])return console.log("No output name ".concat(e.name," found!"));t[e.name].text=e.text}}}),s=c,r={id:"app",class:"d-flex flex-column p-0"};function l(t,e,n,a,i,c){var s=Object(o["m"])("Header"),l=Object(o["m"])("InputForm"),u=Object(o["m"])("Output");Object(o["m"])("Login");return Object(o["g"])(),Object(o["c"])(o["a"],null,[Object(o["e"])("div",r,[Object(o["e"])(s),Object(o["e"])(l,{name:i.input_name,class:"border border-2 rounded-3 mt-2 ms-2 me-2 p-2 d-flex overflow-auto"},{footer:Object(o["r"])((function(){return[Object(o["e"])("button",{class:"btn btn-primary",onClick:e[1]||(e[1]=function(t){return c.sendData()})},"Send")]})),_:1},8,["name"]),Object(o["e"])(u,{name:i.output_name,class:"m-2"},null,8,["name"])]),Object(o["d"])("",!0)],64)}var u={class:"pt-1 pb-1 bg-dark text-white"},d={class:"d-flex align-items-center justify-content-between"},p={class:"form-floating ms-1"},b=Object(o["e"])("label",{for:"floatingStatus"},"Current Status",-1),m=Object(o["e"])("div",null,[Object(o["e"])("button",{type:"button",class:"btn btn-outline-light me-1","data-bs-toggle":"modal","data-bs-target":"#loginModal"},"Login ")],-1),f={class:"modal fade",id:"loginModal",tabindex:"-1","aria-labelledby":"loginModalLabel","aria-hidden":"true"},h={class:"modal-dialog"},v={class:"modal-content"},g=Object(o["e"])("div",{class:"modal-header"},[Object(o["e"])("h5",{class:"modal-title text-dark",id:"loginModalLabel"},"Server Login"),Object(o["e"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),O={class:"modal-body text-dark"},j={class:"modal-footer"},y=Object(o["e"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function x(t,e,n,a,i,c){var s=Object(o["m"])("InputForm");return Object(o["g"])(),Object(o["c"])("div",u,[Object(o["e"])("div",d,[Object(o["e"])("div",p,[Object(o["e"])("input",{readonly:"",type:"text",class:"form-control bg-dark text-white",id:"floatingStatus",placeholder:"Status",value:t.$store.state.status},null,8,["value"]),b]),m]),Object(o["e"])("div",f,[Object(o["e"])("div",h,[Object(o["e"])("div",v,[g,Object(o["e"])("div",O,[Object(o["e"])(s,{name:i.name},null,8,["name"])]),Object(o["e"])("div",j,[y,Object(o["e"])("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:e[1]||(e[1]=function(){return c.login&&c.login.apply(c,arguments)})},"Save changes")])])])])])}var w=n("1da1"),k=(n("96cf"),Object(o["t"])("data-v-3e350f9e"));Object(o["i"])("data-v-3e350f9e");var _={class:"p-0"},C={key:0,class:"w-100"},S={class:"d-flex flex-grow-1"},I={class:"d-flex flex-column justify-content-between"},$=Object(o["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-info-circle",viewBox:"0 0 16 16"},[Object(o["e"])("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(o["e"])("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})],-1),R={class:"d-flex flex-column justify-content-between w-100"},T={class:"d-flex justify-content-end m-1"},M={key:1,class:"alert alert-danger w-100",role:"alert"};Object(o["h"])();var L=k((function(t,e,n,a,i,c){return Object(o["g"])(),Object(o["c"])("div",_,[n.name&&c.inputs.length?(Object(o["g"])(),Object(o["c"])("div",C,[Object(o["e"])("div",null,[Object(o["l"])(t.$slots,"header",{},void 0,!0)]),Object(o["e"])("div",S,[Object(o["e"])("div",I,[(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["k"])(c.inputs,(function(t){return Object(o["g"])(),Object(o["c"])("div",{key:t.id,class:"m-1 d-flex justify-content-end"},["textarea"==t.type?(Object(o["g"])(),Object(o["c"])("label",{key:0,class:"m-1 float-right text-nowrap",style:t.style,for:t.id},Object(o["n"])(t.label),13,["for"])):(Object(o["g"])(),Object(o["c"])("label",{key:1,class:"m-1 float-right text-nowrap",for:t.id},Object(o["n"])(t.label),9,["for"])),Object(o["e"])("span",{class:"m-1 float-right","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:t.information},[$],8,["title"])])})),128))]),Object(o["e"])("div",R,[(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["k"])(c.inputs,(function(t){return Object(o["g"])(),Object(o["c"])("div",{key:t.id,class:"m-1"},["select"==t.type?(Object(o["g"])(),Object(o["c"])("select",{key:0,class:"form-select",name:t.id,id:n.name+t.id,value:c.config.values[t.id],onChange:e[1]||(e[1]=function(){return c.inputChange&&c.inputChange.apply(c,arguments)}),"aria-label":"select-input"},[(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["k"])(t.options,(function(t){return Object(o["g"])(),Object(o["c"])("option",{key:t.text,value:t.value},Object(o["n"])(t.text),9,["value"])})),128))],40,["name","id","value"])):"file"==t.type?(Object(o["g"])(),Object(o["c"])("input",{key:1,class:"form-control",name:t.id,id:n.name+t.id,type:t.type,onChange:e[2]||(e[2]=function(){return c.inputChange&&c.inputChange.apply(c,arguments)})},null,40,["name","id","type"])):"textarea"==t.type?(Object(o["g"])(),Object(o["c"])("textarea",{key:2,class:"form-control",style:t.style,name:t.id,id:n.name+t.id,value:c.config.values[t.id],onChange:e[3]||(e[3]=function(){return c.inputChange&&c.inputChange.apply(c,arguments)}),placeholder:t.placeholder},"\r\n                    ",44,["name","id","value","placeholder"])):(Object(o["g"])(),Object(o["c"])("input",{key:3,class:"form-control",name:t.id,id:n.name+t.id,value:c.config.values[t.id],onChange:e[4]||(e[4]=function(){return c.inputChange&&c.inputChange.apply(c,arguments)}),onClick:e[5]||(e[5]=function(){return c.inputClick&&c.inputClick.apply(c,arguments)}),type:t.type,placeholder:t.placeholder},null,40,["name","id","value","type","placeholder"]))])})),128))])]),Object(o["e"])("div",T,[Object(o["l"])(t.$slots,"footer",{},void 0,!0)])])):(Object(o["g"])(),Object(o["c"])("div",M,[Object(o["e"])("p",null,Object(o["n"])(i.error_msg),1)]))])})),P=(n("d81d"),n("4de4"),{name:"InputForm",props:{name:String},data:function(){return{values:{},buffers:{},error_msg:"Form configuration is not available"}},computed:{config:function(){return this.$store.state[this.name]},inputs:function(){var t=this.config;if(null!==t&&void 0!==t&&t.input_rows){var e=t.input_rows.filter((function(t){return t.id})).map((function(t){return{id:t.id,options:t.options,label:t.label?t.label:t.id,type:t.type?t.type:"text",placeholder:t.placeholder?t.placeholder:"",information:t.information?t.information:"",class:"checkbox"==t.type?"form-check-input checkbox-inline":"form-control",style:"textarea"==t.type?"resize: none;height: 100px":null}}));return e}return[]}},methods:{inputClick:function(t){var e;"file"==(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.type)&&(t.target.value="")},inputChange:function(t){var e,n,o=this;if(null!==t&&void 0!==t&&null!==(e=t.target)&&void 0!==e&&null!==(n=e.files)&&void 0!==n&&n.length){var a={name:this.name,id:c,value:""},i=t.target.files[0],c=t.target.name,s=new FileReader;s.onload=function(t){var e={name:o.name,id:c,value:t.target.result};o.$store.commit("setInputValue",e)},s.onerror=function(t){alert(t)},i.size>1048576?(this.$store.commit("setInputValue",a),t.target.value="",alert("File is larger than 1MByte!")):s.readAsText(i)}else{var r={name:this.name,id:t.target.name,value:t.target.value};this.$store.commit("setInputValue",r)}}},mounted:function(){console.log("Mounted Input:",this.name)}});P.render=L,P.__scopeId="data-v-3e350f9e";var A=P,D={name:"Headers",components:{InputForm:A},data:function(){return{name:"inputLogin"}},computed:{count:function(){return this.$store.state.count}},methods:{login:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var e,n,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.state[this.name].values,n=this.$store.state.socket,t.next=4,n.stop();case 4:n.username=e.username,n.password=e.password,n.url=e.url,n.start().then((function(){return n.getConfig()})).then((function(t){o.$store.commit("setInputRows",{name:"input",input_rows:t})})).catch((function(t){console.log(t)}));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){console.log("Mounted: Header ")}};D.render=x;var F=D,z=(n("ac1f"),n("841c"),Object(o["t"])("data-v-99c560f2"));Object(o["i"])("data-v-99c560f2");var U={id:"right-main-column",class:"d-flex flex-column flex-grow-1 overflow-auto"},V={class:"d-flex flex-column flex-fill"},N={class:"d-flex"},B={class:"btn-group mr-3"},E=Object(o["e"])("i",{class:"bi-save2"},null,-1),H=Object(o["e"])("i",{class:"bi-x-circle"},null,-1),J=Object(o["e"])("i",{class:"bi bi-funnel"},null,-1),q=Object(o["e"])("i",{class:"bi bi-search"},null,-1),G={class:"row row-cols-lg-auto g-3 align-items-center"},K={class:"col-12"},Q={class:"input-group"},W=Object(o["e"])("div",{class:"input-group-append"},null,-1);Object(o["h"])();var X=z((function(t,e,n,a,i,c){return Object(o["g"])(),Object(o["c"])("div",U,[Object(o["e"])("div",V,[Object(o["e"])("div",N,[Object(o["e"])("div",B,[Object(o["e"])("button",{type:"button",class:"btn btn-small btn-outline-secondary",onClick:e[1]||(e[1]=function(){return c.save&&c.save.apply(c,arguments)}),"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Save"},[E]),Object(o["e"])("button",{type:"button",class:"btn btn-small btn-outline-secondary",onClick:e[2]||(e[2]=function(){return c.deleteOutput&&c.deleteOutput.apply(c,arguments)}),"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Delete"},[H]),Object(o["e"])("button",{type:"button",class:"btn btn-small btn-outline-secondary",onClick:e[3]||(e[3]=function(){return c.selectText&&c.selectText.apply(c,arguments)}),"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Filter"},[J]),Object(o["e"])("button",{type:"button",class:"btn btn-small btn-outline-secondary",onClick:e[4]||(e[4]=function(){return c.selectText&&c.selectText.apply(c,arguments)}),"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Search"},[q])]),Object(o["e"])("form",G,[Object(o["e"])("div",K,[Object(o["e"])("div",Q,[Object(o["s"])(Object(o["e"])("input",{"onUpdate:modelValue":e[5]||(e[5]=function(e){return t.search=e}),type:"text",class:"form-control ms-1",placeholder:"Search","aria-label":"Searcg","aria-describedby":"Search"},null,512),[[o["o"],t.search]]),W])])])]),Object(o["s"])(Object(o["e"])("textarea",{class:"mt-1 d-flex flex-grow-1 h-100 form-control terminal text-white bg-dark",id:"TextAreaOutput",rows:"10",value:c.output,onChange:e[6]||(e[6]=function(){return c.outputChange&&c.outputChange.apply(c,arguments)})},"\r\n        ",40,["value"]),[[o["p"],t.$store.state[n.name].text.length>0]])])])})),Y=n("21a6"),Z={name:"Output",props:{name:String},data:function(){return{search:""}},computed:{output:function(){var t,e;return null!==(t=this.$store.state[this.name])&&void 0!==t&&t.text?null===(e=this.$store.state[this.name])||void 0===e?void 0:e.text:""}},methods:{deleteOutput:function(){var t={name:this.name,text:""};this.$store.commit("setOutputText",t),console.log("DELETED",this.name)},outputChange:function(t){var e={name:this.name,text:t.target.value};console.log(e),this.$store.commit("setOutputText",e)},selectText:function(){var t=this.search,e=this.$store.state[this.name].text,n=e.search(t);if(n>=0&&t.length){var o=document.getElementById("TextAreaOutput");o.focus(),o.setSelectionRange(n,n+t.length)}},save:function(){var t=new Blob([this.$store.state[this.name].text],{type:"text/plain;charset=utf-8"});Object(Y["saveAs"])(t,this.name+".txt")}},mounted:function(){console.log("Mounted Output:",this.name)}};n("68b4");Z.render=X,Z.__scopeId="data-v-99c560f2";var tt=Z,et=n("53ca"),nt=n("d4ec"),ot=n("bee2"),at=(n("3ca3"),n("2b3d"),n("8e27")),it=console,ct=function(){function t(e,n,o){Object(nt["a"])(this,t),"object"===Object(et["a"])(n)&&null!==n?(this.username=n.name,this.password=n.token,this.url=n.url):(this.username=n||"anonymous",this.password=o||"anonymous",this.url=e);try{this.url=e}catch(a){console.log("INVALID URL:",this.url)}this.sio_url=this.url.origin,this.sio_path=new URL("socket.io",this.url),this.sio_opts={reconnection:!0,path:this.sio_path},this.connectionRetryMs=1e4,this.socket=null,this.reconnectAttempt=0,this.stopped=!1,this.socketId=null,this.auth=!1,this.log=it,this.proxy=null}return Object(ot["a"])(t,[{key:"start",value:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var e,n,o,a,i,c=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.socket=Object(at["io"])(this.url,{reconnection:!1}),e=this.socket,a=new Promise((function(t,e){n=t,o=e})),i=function t(){s.commit("setStatus","Reconnecting..."),setTimeout((function(){e.io.open((function(e){e&&t()}))}),2e3)},e.on("connect",(function(){c.socketId=e.id,console.log("Socket.io connected with id:",e.id),s.commit("setStatus","connected"),n(!0)})),e.on("disconnect",(function(t){console.log("Socket.io disconnect with id:",c.socketId,"reason:",t),s.commit("setStatus","Disconnected")})),e.on("connect_error",(function(t){c.socketId||(s.commit("setStatus","Connection error: ".concat(t)),o(t))})),e.io.on("close",i),e.onAny((function(t,e){if("data"==t&&"string"==typeof e){var n=s.state.output.text+e,o={name:"output",value:{text:n}};s.commit("setState",o)}else"data"==t&&"object"==Object(et["a"])(e)&&e.name?s.commit("setState",e):console.log('Incoming event "'.concat(t,'" is invalid!'))})),t.abrupt("return",a);case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"stop",value:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=this.socket;case 1:if(!e||!e.connected){t.next=7;break}return e.disconnect(!0),t.next=5,new Promise((function(t){setTimeout(t,100)}));case 5:t.next=1;break;case 7:return t.abrupt("return",!0);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getConfig",value:function(){var t=this;return new Promise((function(e,n){try{t.socket.emit("config","guest",(function(t){e(t)}))}catch(o){n(o)}}))}},{key:"sendData",value:function(t){var e=this;return new Promise((function(n,o){try{e.socket.emit("data",t,(function(t){n(t)}))}catch(a){o(a)}}))}}]),t}(),st=ct,rt={name:"App",components:{InputForm:A,Output:tt,Header:F},data:function(){return{input_name:"input",output_name:"output",url:window.location.href,test_input_rows:[{id:"id1"},{id:"id2"},{id:"id3"},{id:"id4"},{id:"id5"},{id:"id6"},{id:"id7"},{id:"id8"},{id:"text1",type:"textarea"},{id:"id2"}]}},methods:{sendData:function(){var t=this.$store.state.socket,e=this.$store.state[this.input_name].values;t.sendData(e)}},mounted:function(){var t=this,e=new st(this.url),n=this.$store;n.commit("setState",{name:"socket",value:e}),e.start().then((function(){return e.getConfig()})).then((function(e){n.commit("setInputRows",{name:t.input_name,input_rows:e})})).catch((function(e){console.log(e),n.commit("setInputRows",{name:"input",input_rows:t.test_input_rows})}))}};n("fa29");rt.render=l;var lt=rt,ut=(n("ab8b"),n("7b17"),Object(o["b"])(lt));ut.use(s),ut.mount("#app")},"68b4":function(t,e,n){"use strict";n("194d")},fa29:function(t,e,n){"use strict";n("fb2d")},fb2d:function(t,e,n){}});
//# sourceMappingURL=app.67208cea.js.map