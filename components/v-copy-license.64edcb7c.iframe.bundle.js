(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/components/VMediaInfo/VCopyLicense.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_f76cbbf5da9c2936d5fdbb58483aa887/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),attribution_html=__webpack_require__("./src/utils/attribution-html.ts"),VCopyButton=__webpack_require__("./src/components/VCopyButton.vue"),VMediaInfo_VCopyLicensevue_type_script_lang_js_=Object(runtime.b)({name:"VCopyLicense",components:{VCopyButton:VCopyButton.default},props:{media:{type:Object}},setup:function setup(props){var i18n=Object(runtime.q)().i18n,activeTab=Object(runtime.l)("rich");return{activeTab:activeTab,tabs:["rich","html","plain"],setActiveTab:function setActiveTab(tabIdx){return activeTab.value=tabIdx},getAttributionMarkup:function getAttributionMarkup(options){return Object(attribution_html.a)(props.media,i18n,options)}}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VMediaInfo_VCopyLicensevue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_c("h5",{staticClass:"mb-4 text-base md:text-2xl font-semibold"},[_vm._v("\n    "+_vm._s(_vm.$t("media-details.reuse.copy-license.title"))+"\n  ")]),_vm._v(" "),_c("nav",{staticClass:"flex border-b-none",attrs:{role:"tablist"}},_vm._l(_vm.tabs,(function(tab,idx){return _c("button",{key:idx,staticClass:"py-3 md:py-4 px-4 md:px-6 border-t border-x rounded-t-sm bg-white text-sm md:text-base font-semibold relative focus:border-tx focus:outline-none focus:shadow-[0_0_0_1.5px_#c52b9b_inset]",class:[_vm.activeTab===tab?"border-t-dark-charcoal-20 border-x-dark-charcoal-20 -mb-[1px]":"border-tx"],attrs:{role:"tab","aria-controls":"tab-"+tab,"aria-selected":_vm.activeTab===tab},on:{click:function($event){return $event.preventDefault(),_vm.setActiveTab(tab)}}},[_vm._v("\n      "+_vm._s(_vm.$t("media-details.reuse.copy-license."+tab))+"\n    ")])})),0),_vm._v(" "),_vm._l(_vm.tabs,(function(tab,idx){return _c("div",{key:idx,staticClass:"border border-dark-charcoal-20 p-4 md:p-6 text-sm md:text-base focus:border-tx focus:outline-none focus:shadow-[0_0_0_1.5px_#c52b9b_inset] h-[190px] flex flex-col justify-between items-start",class:{hidden:_vm.activeTab!==tab},attrs:{id:"tab-"+tab,"aria-labelledby":tab,role:"tabpanel",tabindex:"0"}},[_c("div",{staticClass:"overflow-y-scroll"},["rich"===tab?_c("div",{attrs:{id:"attribution-rich"},domProps:{innerHTML:_vm._s(_vm.getAttributionMarkup({includeIcons:!1}))}}):_vm._e(),_vm._v(" "),"html"===tab?_c("p",{staticClass:"font-mono break-all",attrs:{id:"attribution-html",dir:"ltr"}},[_vm._v("\n        "+_vm._s(_vm.getAttributionMarkup())+"\n      ")]):_vm._e(),_vm._v(" "),"plain"===tab?_c("div",{attrs:{id:"attribution-plain"}},[_vm._v("\n        "+_vm._s(_vm.getAttributionMarkup({isPlaintext:!0}))+"\n      ")]):_vm._e()]),_vm._v(" "),_c("VCopyButton",{staticClass:"mt-6",attrs:{id:"copyattr-"+tab,el:"#attribution-"+tab}})],1)}))],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VCopyButton:__webpack_require__("./src/components/VCopyButton.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VCopyLicense",exportName:"default",description:"",tags:{},props:[{name:"media",type:{name:"object"}}]}}}]);