(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17aaa324"],{"2f8e":function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return l});var s=a("b775");function i(t){return Object(s["a"])({url:"/riskMag/riskResource/list",method:"get",params:t})}function l(t){return Object(s["a"])({url:"/riskMag/riskView/list",method:"get",params:t})}},"2fe9":function(t,e,a){},"884d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"riskViewDetail"},[a("div",{staticClass:"close"},[a("router-link",{attrs:{to:"/riskMag/riskView"}},[a("i",{staticClass:"el-icon-close",staticStyle:{"font-size":"24px"}})])],1),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"content-container"},[a("div",{staticClass:"left"},[a("div",{staticClass:"label"},[t._v("基本信息:")]),t._v(" "),a("div",{staticClass:"base-info"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"colContent"},[a("span",{staticClass:"base-label"},[t._v("标段名称:")]),t._v(" "),a("span",{staticClass:"base-centent"},[t._v("土建01标")])])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"colContent"},[a("span",{staticClass:"base-label"},[t._v("风险源类型:")]),t._v(" "),a("span",{staticClass:"base-centent"},[t._v("基坑施工")])])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"colContent"},[a("span",{staticClass:"base-label"},[t._v("巡查时间:")]),t._v(" "),a("span",{staticClass:"base-centent"},[t._v("2019-5-6 12:21:32")])])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"colContent"},[a("span",{staticClass:"base-label"},[t._v("负责人:")]),t._v(" "),a("span",{staticClass:"base-centent"},[t._v("张三丰")])])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"colContent"},[a("span",{staticClass:"base-label"},[t._v("填报人:")]),t._v(" "),a("span",{staticClass:"base-centent"},[t._v("张思")])])])],1)],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"label"},[t._v("检查类别:")]),t._v(" "),a("div",{staticClass:"check-type-item"},[a("div",[a("div",{staticClass:"check-type"},[a("div",{staticClass:"title"},[t._v("明挖法")]),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"operation cursorText"},[a("span",{on:{click:function(e){t.show2=!t.show2}}},[t._v(t._s(t.show2?"收起":"展开"))]),t._v(" "),a("i",{class:[t.show2?"el-icon-arrow-up":"el-icon-arrow-down","open-icon"]})])]),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-top"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show2,expression:"show2"}]},[a("div",{staticClass:"tabel"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"element-loading-background":"rgba(0, 0, 0, 0.1)",center:"",data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"type",label:"巡查类别",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"content",label:"巡查检查内容"}}),t._v(" "),a("el-table-column",{attrs:{prop:"result","header-align":"center",align:"center",label:"巡查检查结果",width:"120"}})],1)],1),t._v(" "),a("div",[a("div",{staticClass:"photo-title"},[t._v("现场照片")]),t._v(" "),a("div",{staticClass:"image-container"},t._l(t.fileList,function(t,e){return a("div",[a("el-image",{key:e,staticClass:"image-item",attrs:{src:t.url,fit:"contain"}})],1)}),0)])])])],1)]),t._v(" "),a("div",{staticClass:"check-type-item"},[a("div",[a("div",{staticClass:"check-type"},[a("div",{staticClass:"title"},[t._v("矿山法")]),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"operation cursorText"},[a("span",{on:{click:function(e){t.show3=!t.show3}}},[t._v(t._s(t.show3?"收起":"展开"))]),t._v(" "),a("i",{class:[t.show3?"el-icon-arrow-up":"el-icon-arrow-down","open-icon"]})])]),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-top"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show3,expression:"show3"}]},[a("div",{staticClass:"tabel"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"element-loading-background":"rgba(0, 0, 0, 0.1)",center:"",data:t.tableData1,border:""}},[a("el-table-column",{attrs:{prop:"type",label:"巡查类别",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"content",label:"巡查检查内容"}}),t._v(" "),a("el-table-column",{attrs:{prop:"result","header-align":"center",align:"center",label:"巡查检查结果",width:"120"}}),t._v(" "),a("template",{slot:"empty"},[a("div",[a("i",{staticClass:"iconfont icon-shibaibiaoqing1",staticStyle:{"font-size":"16px","margin-right":"10px"}}),t._v("暂无数据~\n                                        ")])])],2)],1)])])],1)]),t._v(" "),a("div",{staticClass:"check-type-item"},[a("div",[a("div",{staticClass:"check-type"},[a("div",{staticClass:"title"},[t._v("盾构法")]),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"operation cursorText"},[a("span",{on:{click:function(e){t.show3=!t.show3}}},[t._v(t._s(t.show3?"收起":"展开"))]),t._v(" "),a("i",{class:[t.show3?"el-icon-arrow-up":"el-icon-arrow-down","open-icon"]})])]),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-top"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show3,expression:"show3"}]},[a("div",{staticClass:"tabel"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"element-loading-background":"rgba(0, 0, 0, 0.1)",center:"",data:t.tableData1,border:""}},[a("el-table-column",{attrs:{prop:"type",label:"巡查类别",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"content",label:"巡查检查内容"}}),t._v(" "),a("el-table-column",{attrs:{prop:"result","header-align":"center",align:"center",label:"巡查检查结果",width:"120"}}),t._v(" "),a("template",{slot:"empty"},[a("div",[a("i",{staticClass:"iconfont icon-shibaibiaoqing1",staticStyle:{"font-size":"16px","margin-right":"10px"}}),t._v("暂无数据~\n                                        ")])])],2)],1)])])],1)]),t._v(" "),a("div",{staticClass:"check-type-item"},[a("div",[a("div",{staticClass:"check-type"},[a("div",{staticClass:"title"},[t._v("周边环境")]),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"operation cursorText"},[a("span",{on:{click:function(e){t.show3=!t.show3}}},[t._v(t._s(t.show3?"收起":"展开"))]),t._v(" "),a("i",{class:[t.show3?"el-icon-arrow-up":"el-icon-arrow-down","open-icon"]})])]),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-top"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show3,expression:"show3"}]},[a("div",{staticClass:"tabel"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"element-loading-background":"rgba(0, 0, 0, 0.1)",center:"",data:t.tableData1,border:""}},[a("el-table-column",{attrs:{prop:"type",label:"巡查类别",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"content",label:"巡查检查内容"}}),t._v(" "),a("el-table-column",{attrs:{prop:"result","header-align":"center",align:"center",label:"巡查检查结果",width:"120"}}),t._v(" "),a("template",{slot:"empty"},[a("div",[a("i",{staticClass:"iconfont icon-shibaibiaoqing1",staticStyle:{"font-size":"16px","margin-right":"10px"}}),t._v("暂无数据~\n                                        ")])])],2)],1)])])],1)]),t._v(" "),a("div",{staticClass:"check-type-item"},[a("div",[a("div",{staticClass:"check-type"},[a("div",{staticClass:"title"},[t._v("监测设施")]),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"operation cursorText"},[a("span",{on:{click:function(e){t.show3=!t.show3}}},[t._v(t._s(t.show3?"收起":"展开"))]),t._v(" "),a("i",{class:[t.show3?"el-icon-arrow-up":"el-icon-arrow-down","open-icon"]})])]),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-top"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show3,expression:"show3"}]},[a("div",{staticClass:"tabel"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"element-loading-background":"rgba(0, 0, 0, 0.1)",center:"",data:t.tableData1,border:""}},[a("el-table-column",{attrs:{prop:"type",label:"巡查类别",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"content",label:"巡查检查内容"}}),t._v(" "),a("el-table-column",{attrs:{prop:"result","header-align":"center",align:"center",label:"巡查检查结果",width:"120"}}),t._v(" "),a("template",{slot:"empty"},[a("div",[a("i",{staticClass:"iconfont icon-shibaibiaoqing1",staticStyle:{"font-size":"16px","margin-right":"10px"}}),t._v("暂无数据~\n                                        ")])])],2)],1)])])],1)]),t._v(" "),a("div",{staticClass:"check-type-item"},[a("div",[a("div",{staticClass:"check-type"},[a("div",{staticClass:"title"},[t._v("其他")]),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"operation cursorText"},[a("span",{on:{click:function(e){t.show3=!t.show3}}},[t._v(t._s(t.show3?"收起":"展开"))]),t._v(" "),a("i",{class:[t.show3?"el-icon-arrow-up":"el-icon-arrow-down","open-icon"]})])]),t._v(" "),a("transition",{attrs:{name:"el-zoom-in-top"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show3,expression:"show3"}]},[a("div",{staticClass:"tabel"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"element-loading-background":"rgba(0, 0, 0, 0.1)",center:"",data:t.tableData1,border:""}},[a("el-table-column",{attrs:{prop:"type",label:"巡查类别",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"content",label:"巡查检查内容"}}),t._v(" "),a("el-table-column",{attrs:{prop:"result","header-align":"center",align:"center",label:"巡查检查结果",width:"120"}}),t._v(" "),a("template",{slot:"empty"},[a("div",[a("i",{staticClass:"iconfont icon-shibaibiaoqing1",staticStyle:{"font-size":"16px","margin-right":"10px"}}),t._v("暂无数据~\n                                        ")])])],2)],1)])])],1)]),t._v(" "),a("div",{staticClass:"label"},[t._v("巡查监测综合评价:")]),t._v(" "),t._m(3)])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[t._v("富华路站")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"other-lable"},[a("div",{staticClass:"title"},[t._v("施工进度")]),t._v(" "),a("div",{staticClass:"content"},[t._v("支撑体系变形情况、桩间土稳定及止水帷幕渗漏情况、墙后土体沉陷、裂缝及滑移情况、基坑涌土、流沙、管涌及其他情况。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"other-lable"},[a("div",{staticClass:"title"},[t._v("风险源描述：")]),t._v(" "),a("div",{staticClass:"content"},[t._v("这里是风险描述，字段长度为720px，超过换行显示。这里是风险描述，字段长度为720px，超过换行显示。这里是风险描述，字段长度为720px，超过换行显示。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"other-lable"},[a("div",{staticClass:"title"},[t._v("风险源描述：")]),t._v(" "),a("div",{staticClass:"content"},[t._v("这里是综合评价，若无数据，显示“暂无数据”，字段长度不超过720px，这里是综合评价，若无数据，显示“暂无数据”，字段长度不超过720px，这里是综合评价，若无数据，显示“暂无数据”，字段长度不超过720px，")])])}],l=(a("2f8e"),{name:"riskViewDetail",components:{},data:function(){return{show2:!1,show3:!1,modalVisible:!1,fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}],tableData:[{type:"支护结构自身情况",content:"这里是巡查检查内容，可换行显示 这里是巡查检查内容，可换行显示 这里是巡查检查内容，可换行显示-04-03 20:46",result:"正常"},{type:"施工情况",content:"这里是巡查检查内容，可换行显示 这里是巡查检查内容，可换行显示 这里是巡查检查内容，可换行显示-04-03 20:46",result:"正常"},{type:"降水情况",content:"这里是巡查检查内容，可换行显示 这里是巡查检查内容示 这里是巡查检查内容示 这里是巡查检查内容示 这里是巡查检查内容示 这里是巡查检查内容示 这里是巡查检查内容示 这里是巡查检查内容示 这里是巡查检查内容示 这里是巡查检查内容示 这里是巡查检查内容示 这里是巡查检查内容，可换行显示 这里是巡查检查内容，可换行显示-04-03 20:46",result:"正常"}],tableData1:[]}},computed:{},created:function(){},methods:{}}),n=l,o=(a("9531"),a("fd62"),a("2877")),c=Object(o["a"])(n,s,i,!1,null,"ee8a3538",null);e["default"]=c.exports},9531:function(t,e,a){"use strict";var s=a("2fe9"),i=a.n(s);i.a},9579:function(t,e,a){},fd62:function(t,e,a){"use strict";var s=a("9579"),i=a.n(s);i.a}}]);