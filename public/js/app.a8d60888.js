(function(e){function t(t){for(var i,n,o=t[0],l=t[1],c=t[2],d=0,m=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},s={app:0},r=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=a("bc3a"),r=a.n(s),n=r.a.create({baseURL:"http://127.0.0.1:3000/",headers:{Accept:"application/json"}}),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("v-app",[a("header",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("h1",[e._v("User Database")])]),a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-items",[a("v-btn",{attrs:{to:"/",text:"",exact:""}},[e._v("Home")]),a("v-btn",{attrs:{to:"/users/new",text:"",exact:""}},[e._v("Add User")]),a("v-btn",{attrs:{to:"/users",text:"",exact:""}},[e._v("Users")])],1)],1)],1)],1),a("v-content",[a("router-view")],1),a("v-footer",{staticClass:"font-weight-medium"},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),a("strong",[e._v("Alvaro A. Gomez Rey")])])],1)],1)],1)},l=[],c={name:"app"},u=c,d=a("2877"),m=a("6544"),p=a.n(m),v=a("7496"),f=a("40dc"),h=a("8336"),b=a("62ad"),w=a("a75b"),x=a("553a"),y=a("71d9"),V=a("2a7f"),N=Object(d["a"])(u,o,l,!1,null,null,null),g=N.exports;p()(N,{VApp:v["a"],VAppBar:f["a"],VBtn:h["a"],VCol:b["a"],VContent:w["a"],VFooter:x["a"],VToolbar:y["a"],VToolbarItems:V["a"]});var A=a("f309");i["a"].use(A["a"]);var C=new A["a"]({}),_=a("8c4f"),I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("h1",[e._v("Bienvenido")]),a("p",[e._v(" En esta aplicación usted puede: "),a("v-list",{attrs:{"two-line":""}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v("Crear Usuarios")]),a("v-list-item-subtitle",[e._v("¡Registre un usuario con username unico, datos personales, descripción y enlace de imagen!")])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v("Visualizar Usuarios")]),a("v-list-item-subtitle",[e._v("Puede ver en una tabla todos los usuarios que existen en la base de datos MongoDB, y puede ver sus perfiles individuales.")])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v("Actualizar Usuarios")]),a("v-list-item-subtitle",[e._v("¿Algo no le parece? Puede cambiar el usuario.")])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v("Eliminar Usuarios")]),a("v-list-item-subtitle",[e._v("Si nadie va a volver a usar ese usuario, pues ya es momento que vaya eliminando eso.")])],1)],1)],1)],1)])},k=[],U={name:"Home"},S=U,E=a("a523"),F=a("8860"),O=a("da13"),R=a("5d23"),j=Object(d["a"])(S,I,k,!1,null,null,null),q=j.exports;p()(j,{VContainer:E["a"],VList:F["a"],VListItem:O["a"],VListItemContent:R["a"],VListItemSubtitle:R["b"],VListItemTitle:R["c"]});var T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-col",[a("h2",[e._v("Add New User")]),a("v-form",{model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"First Name",rules:[e.rules.required]},model:{value:e.name.firstName,callback:function(t){e.$set(e.name,"firstName",t)},expression:"name.firstName"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"Last Name",rules:[e.rules.required]},model:{value:e.name.lastName,callback:function(t){e.$set(e.name,"lastName",t)},expression:"name.lastName"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("v-select",{attrs:{"item-text":"C.C.",items:e.idTypes,rules:[e.rules.required]},model:{value:e.identification.type,callback:function(t){e.$set(e.identification,"type",t)},expression:"identification.type"}})],1),a("v-col",{attrs:{cols:"10"}},[a("v-text-field",{attrs:{label:"Identification",rules:[e.rules.required,e.rules.id]},model:{value:e.identification.number,callback:function(t){e.$set(e.identification,"number",t)},expression:"identification.number"}})],1)],1),a("v-text-field",{attrs:{label:"Username",hint:"At least 8 characters",rules:[e.rules.required,e.rules.username]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("v-text-field",{attrs:{label:"Password",rules:[e.rules.required],type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{label:"Photo"},model:{value:e.photo,callback:function(t){e.photo=t},expression:"photo"}}),a("v-textarea",{attrs:{label:"Description"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),a("v-btn",{attrs:{disabled:!e.isFormValid},on:{click:e.onSubmit}},[e._v("Submit")])],1)],1)],1)},K=[],M=(a("a4d3"),a("e01a"),a("b0c0"),{name:"UserAdd",data:function(){return{isFormValid:!1,name:{firstName:"",lastName:""},identification:{type:"C.C.",number:""},username:"",password:"",photo:"",description:"",rules:{required:function(e){return!!e||"Required"},username:function(e){return e.length>=8||"Min 8 characters"},id:function(e){var t=/^(0|[1-9][0-9]*)$/;return t.test(e)||"Numbers only"}},idTypes:["C.C.","T.I.","NIT"]}},methods:{onSubmit:function(){var e={name:{firstName:this.name.firstName,lastName:this.name.lastName},identification:{type:this.identification.type,number:this.identification.number},username:this.username,password:this.password,photo:this.photo,description:this.description,active:!0};n.post("/users",e).then(this.$router.push({path:"/users"}))}}}),H=M,P=a("4bd4"),B=a("0fd9"),J=a("b974"),X=a("8654"),z=a("a844"),D=Object(d["a"])(H,T,K,!1,null,null,null),L=D.exports;p()(D,{VBtn:h["a"],VCol:b["a"],VContainer:E["a"],VForm:P["a"],VRow:B["a"],VSelect:J["a"],VTextField:X["a"],VTextarea:z["a"]});var W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-col",[a("h2",[e._v("Edit User Info")]),a("v-form",{model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"First Name",rules:[e.rules.required]},model:{value:e.name.firstName,callback:function(t){e.$set(e.name,"firstName",t)},expression:"name.firstName"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"Last Name",rules:[e.rules.required]},model:{value:e.name.lastName,callback:function(t){e.$set(e.name,"lastName",t)},expression:"name.lastName"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("v-select",{attrs:{"item-text":"C.C.",items:e.idTypes,rules:[e.rules.required]},model:{value:e.identification.type,callback:function(t){e.$set(e.identification,"type",t)},expression:"identification.type"}})],1),a("v-col",{attrs:{cols:"10"}},[a("v-text-field",{attrs:{label:"Identification",rules:[e.rules.required,e.rules.id]},model:{value:e.identification.number,callback:function(t){e.$set(e.identification,"number",t)},expression:"identification.number"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"Username",hint:"At least 8 characters",rules:[e.rules.required,e.rules.username]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"Password",rules:[e.rules.required],type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-text-field",{attrs:{label:"Photo"},model:{value:e.photo,callback:function(t){e.photo=t},expression:"photo"}}),a("v-row",[a("v-col",{attrs:{cols:"9"}},[a("v-textarea",{attrs:{label:"Description"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),a("v-col",{attrs:{cols:"3"}},[a("v-switch",{attrs:{label:"Active: "+e.active.toString()},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}})],1)],1),a("v-btn",{attrs:{disabled:!e.isFormValid},on:{click:e.onSubmit}},[e._v("Submit")])],1)],1)],1)},$=[],Z={name:"UserEdit",data:function(){return{isFormValid:!1,name:{firstName:"",lastName:""},identification:{type:"C.C.",number:""},username:"",password:"",photo:"",description:"",active:!1,rules:{required:function(e){return!!e||"Required"},username:function(e){return e.length>=8||"Min 8 characters"},id:function(e){var t=/^(0|[1-9][0-9]*)$/;return t.test(e)||"Numbers only"}},idTypes:["C.C.","T.I.","NIT"]}},created:function(){var e=this,t="/users/"+this.$route.params.id;n.get(t).then((function(t){200==t.status&&(e.name=t.data.name,e.identification=t.data.identification,e.username=t.data.username,e.password=t.data.password,e.photo=t.data.photo,e.description=t.data.description,e.active=t.data.active)}))},methods:{onSubmit:function(){var e={name:{firstName:this.name.firstName,lastName:this.name.lastName},identification:{type:this.identification.type,number:this.identification.number},username:this.username,password:this.password,photo:this.photo,description:this.description,active:this.active};console.log(e);var t="/users/"+this.$route.params.id;n.put(t,e).then(this.$router.push({path:"/users"}))}}},G=Z,Y=a("b73d"),Q=Object(d["a"])(G,W,$,!1,null,null,null),ee=Q.exports;p()(Q,{VBtn:h["a"],VCol:b["a"],VContainer:E["a"],VForm:P["a"],VRow:B["a"],VSelect:J["a"],VSwitch:Y["a"],VTextField:X["a"],VTextarea:z["a"]});var te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{attrs:{headers:e.headers,items:e.users},scopedSlots:e._u([{key:"item.id",fn:function(t){var a=t.item;return[e._v(e._s(a.identification.type)+" "+e._s(a.identification.number))]}},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.viewItem(i)}}},[e._v("mdi-account")]),a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v("mdi-pencil")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v("mdi-delete")])]}}])})],1)],1)],1)},ae=[],ie=(a("c975"),a("a434"),{name:"Users",data:function(){return{users:[],headers:[{text:"Username",align:"start",sortable:!0,value:"username"},{text:"First Name",align:"start",sortable:!0,value:"name.firstName"},{text:"Last Name",align:"start",sortable:!0,value:"name.lastName"},{text:"Identification",align:"start",sortable:!1,value:"id"},{text:"Actions",align:"start",sortable:!1,value:"actions"}]}},created:function(){var e=this;n.get("/users").then((function(t){200==t.status&&(e.users=t.data)}))},methods:{viewItem:function(e){var t="/users/"+e._id;this.$router.push({path:t})},editItem:function(e){var t="/users/"+e._id+"/edit";this.$router.push({path:t})},deleteItem:function(e){var t=this,a=this.users.indexOf(e),i="/users/"+e._id;confirm("Are you sure you want to delete this user?")&&n.delete(i).then((function(e){200==e.status&&t.users.splice(a,1)}))}}}),se=ie,re=a("8fea"),ne=a("132d"),oe=Object(d["a"])(se,te,ae,!1,null,null,null),le=oe.exports;p()(oe,{VCol:b["a"],VContainer:E["a"],VDataTable:re["a"],VIcon:ne["a"],VRow:B["a"]});var ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("v-img",{attrs:{src:this.photo?this.photo:this.defaultPhoto,height:"200","max-height":"200","max-width":"200",contain:"","aspect-ratio":"1"}}),this.active?a("p",[e._v("Activo: Si")]):a("p",[e._v("Activo: No")])],1),a("v-col",{attrs:{cols:"9"}},[a("h1",[e._v(e._s(this.name.firstName)+" "+e._s(this.name.lastName))]),a("h2",[e._v("@"+e._s(this.username))]),a("p",[e._v(e._s(this.identification.type)+" "+e._s(this.identification.number))]),a("p",[e._v(e._s(this.description))]),a("v-text-field",{attrs:{"append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password",rules:[e.rules.required],readonly:""},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}},[e._v(e._s(this.password))])],1)],1)],1)},ue=[],de={name:"User",data:function(){return{show:!1,isFormValid:!1,name:{firstName:"",lastName:""},identification:{type:"C.C.",number:""},username:"",password:"",photo:"",description:"",active:!1,rules:{required:function(e){return!!e||"Required"},username:function(e){return e.length>=8||"Min 8 characters"}},idTypes:["C.C.","T.I.","NIT"],defaultPhoto:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXc3Nz////t7e37+/ve3t7l5eXh4eH4+Pjm5uby8vL19fXv7+/p6ena2tpwjZMDAAAEq0lEQVR4nO2d0XajMAxEARswhv7/765JmjYNIYnlAUas7p597xzJ8kg2TlUZhmEYhmEYhmEYhmEYhmEYhmEYhmEYhgp8+nda/EzopqP/jm1JITxxDL85v0LDMAzDMAzjHd38f2qGIcZhbKa27c7lErshhFhfcMOYFIak8EwSx7p39SOuH5pwjkh2/ULdnc7YtNpVdi/0fRMnzSL9e4Ezg958HT5TeNGoU+SnAhOjPok+NB+HcMa1ujS2MUfdlUmRxE6gr9aUqY1InyKJo1SgFoldkCvUsRY/8DEv0GDjZFXmRs/vb9oigWkp0kssC2HNn6cfmu0XsPvw0iRNBG6F07KhzyVyB/FlU3+KIJavQ/aVCFiHcyN1tIwXiF33PQ1zELO63jWoaw2g0KQ0Za41CIHcaYpRSFxNEZtFouetpiCFxAsRpLCeaNMUpZC31KAUEvfBIIXExRSlkLeYlreH7Aohro1aIcR5UyuEdE+plvIqLBnp61BYNtP/gXfHrzymmPK6tsoXz7xnHLHCktPDX3re3gIzbKsjb6EBLUTiUloBDp9q6lJaQfZ8R31vsQUo7GPDe54P6i3qyCoRZEtr3gMoyH5/gbXYgNrD/0EhrW+DKRxOvw5p77hDfHfNvOdDfHcisiYpbF5KbL1BWz7rXpF6J9CchnWvSHjIwJS30FSgcSL1FAOSpsQj75SmCFtDu99fAGz6tKb0CmDTj6E7WsUrAMM24v3+QnGakicpoJoO3ElalZ+STuRJWrwSR/oQVr7ta6FIF93A7Nhu+C4IMzVqeXHBe6E9HdW8t+CF17/4i8wvIntK3TU9Imr2icczS0T7Prtd+4Oki6K3a38RpKmqJBWlKXfjuyS7x1CWpIIg0p7GrJE7WFQXwuwgqgthlXvWpsmx3chK016TY7uRVU2Jv3VaJ0sh9W29NbIUUk/y1zi/wqxKc36FKtdhVgOlspbmjRR5z+7XyRJI/hn+E77a7C7fBSWjxAuyDy8USZSek6p4zmxGfnFISQtVcDOK++mWb74muUAVL7ZVRQIVRNGXXzdhtqhfvoF8cdE3HefP+3SoO8KzSMJnsAPuW4QrXNkKSs8HXMNyJtyCvsN/AsEYNVUXdHr+JQXyUIGSh62zOW4A0I1brL5nuCMaZD9tm52P7Fxa/bRHdj7Q77cipXeeyhna7X/M0IcDondHv22XfEhyLtjuoazjkvORbX68BfBGMBA3oqvOJr6zjBg8bkkW9u1b4VBVB/HC80ZgBuW4dwQ2AHGiw7A/vMCVRhH08tOGFM4f+QWWGgDyFL1ScqBDXWR+KMhT0IfLmyO/9KciR+uCIGoJoTyINK3EW6TW5ui/OwPZVBX0VOcuyPZEPUkqtacK7MwvkjTVU0lnJBNj1HM6+yCppjoc2w3J8b+mQpMQfCDNO7p4Sv5C1NAZ3pO/I+oqpZKjKV2lVHKKqsmzzeQrJB0Cr5KvUNd2KHGm51cIvMG1C6ZwiTLTZgqfoGWSeMMUmkJ+8hUqaw8Fru30CiHPdO6JKTSF/GRPMUwhHaZwiSlk4/wK8x/sM4VsZJ9bqKul+Scz51c4OF28+WKoXRKmRhfhiYgf/gHZ+1ogqTKAlQAAAABJRU5ErkJggg=="}},created:function(){var e=this,t="/users/"+this.$route.params.id;n.get(t).then((function(t){200==t.status&&(e.name=t.data.name,e.identification=t.data.identification,e.username=t.data.username,e.password=t.data.password,e.photo=t.data.photo,e.description=t.data.description,e.active=t.data.active)}))}},me=de,pe=a("adda"),ve=Object(d["a"])(me,ce,ue,!1,null,null,null),fe=ve.exports;p()(ve,{VCol:b["a"],VContainer:E["a"],VImg:pe["a"],VRow:B["a"],VTextField:X["a"]}),i["a"].use(_["a"]);var he=new _["a"]({routes:[{path:"/users/new",name:"UserAdd",component:L},{path:"/users/:id/edit",name:"UserEdit",component:ee},{path:"/users/:id",name:"User",component:fe},{path:"/users",name:"Users",component:le},{path:"/",name:"Home",component:q}]});i["a"].config.productionTip=!1,new i["a"]({vuetify:C,router:he,render:function(e){return e(g)}}).$mount("#app")}});
//# sourceMappingURL=app.a8d60888.js.map