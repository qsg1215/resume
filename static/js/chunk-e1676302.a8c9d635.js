(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1676302"],{"2c16":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container"},[t._m(0),t._v(" "),n("div",[n("tinymce",{attrs:{height:300},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),n("div",{staticClass:"editor-content",domProps:{innerHTML:t._s(t.content)}})])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",[t._v("\n    Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction.\n    "),n("a",{staticClass:"link-type",attrs:{target:"_blank",href:"https://panjiachen.github.io/vue-element-admin-site/component/rich-editor.html"}},[t._v("Documentation")])])}],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen},style:{width:t.containerWidth}},[n("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),n("div",{staticClass:"editor-custom-btn-container"},[n("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:t.imageSuccessCBK}})],1)])},s=[],c=(n("ac6a"),n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-container"},[n("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("\n    upload\n  ")]),t._v(" "),n("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":t.fileList,"show-file-list":!0,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload,action:"https://httpbin.org/post","list-type":"picture-card"}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("\n        Click upload\n      ")])],1),t._v(" "),n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("\n      Cancel\n    ")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("\n      Confirm\n    ")])],1)],1)}),r=[],l=(n("456d"),{name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var t=this;return Object.keys(this.listObj).every(function(e){return t.listObj[e].hasSuccess})},handleSubmit:function(){var t=this,e=Object.keys(this.listObj).map(function(e){return t.listObj[e]});this.checkAllSuccess()?(this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!")},handleSuccess:function(t,e){for(var n=e.uid,i=Object.keys(this.listObj),o=0,a=i.length;o<a;o++)if(this.listObj[i[o]].uid===n)return this.listObj[i[o]].url=t.files.file,void(this.listObj[i[o]].hasSuccess=!0)},handleRemove:function(t){for(var e=t.uid,n=Object.keys(this.listObj),i=0,o=n.length;i<o;i++)if(this.listObj[n[i]].uid===e)return void delete this.listObj[n[i]]},beforeUpload:function(t){var e=this,n=window.URL||window.webkitURL,i=t.uid;return this.listObj[i]={},new Promise(function(o,a){var s=new Image;s.src=n.createObjectURL(t),s.onload=function(){e.listObj[i]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},o(!0)})}}}),u=l,d=(n("fd60"),n("2877")),h=Object(d["a"])(u,c,r,!1,null,"3fefeeec",null),m=h.exports,f=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],p=f,y=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],b=y,g=(n("ac4d"),n("8a81"),[]);function v(){return window.tinymce}var w=function(t,e){var n=document.getElementById(t),i=e||function(){};if(!n){var o=document.createElement("script");o.src=t,o.id=t,document.body.appendChild(o),g.push(i);var a="onload"in o?s:c;a(o)}function s(e){e.onload=function(){this.onerror=this.onload=null;for(var t=0,n=g;t<n.length;t++){var i=n[t];i(null,e)}g=null},e.onerror=function(){this.onerror=this.onload=null,i(new Error("Failed to load "+t),e)}}function c(t){t.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var e=!0,n=!1,i=void 0;try{for(var o,a=g[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var s=o.value;s(null,t)}}catch(c){n=!0,i=c}finally{try{e||null==a.return||a.return()}finally{if(n)throw i}}g=null}}}n&&i&&(v()?i(null,n):g.push(i))},_=w,k="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",C={name:"Tinymce",components:{editorImage:m},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?"".concat(t,"px"):t}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(e.tinymceId).setContent(t||"")})}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var t=this;_(k,function(e){e?t.$message.error(e.message):t.initTinymce()})},initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["en"],height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:b,menubar:this.menubar,plugins:p,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp SetContent",function(){t.hasChange=!0,t.$emit("input",n.getContent())})},setup:function(t){t.on("FullscreenStateChanged",function(t){e.fullscreen=t.state})}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach(function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))})}}},j=C,S=(n("9adc"),Object(d["a"])(j,a,s,!1,null,"c6234f8a",null)),O=S.exports,x={name:"TinymceDemo",components:{Tinymce:O},data:function(){return{content:'<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>\n        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>\n      </ul>'}}},T=x,I=(n("7bca"),Object(d["a"])(T,i,o,!1,null,"7fa0b140",null));e["default"]=I.exports},"7bca":function(t,e,n){"use strict";var i=n("913e"),o=n.n(i);o.a},"913e":function(t,e,n){},"9adc":function(t,e,n){"use strict";var i=n("fcb3"),o=n.n(i);o.a},dc65:function(t,e,n){},fcb3:function(t,e,n){},fd60:function(t,e,n){"use strict";var i=n("dc65"),o=n.n(i);o.a}}]);