(window.webpackJsonp=window.webpackJsonp||[]).push([[14,19],{"./src/components/VMediaInfo/VCopyLicense.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_65wlx5o2tqutnvp5xnmeqoviq4/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),attribution_html=__webpack_require__("./src/utils/attribution-html.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VTabs=__webpack_require__("./src/components/VTabs/VTabs.vue"),VTab=__webpack_require__("./src/components/VTabs/VTab.vue"),VLicenseTabPanel=__webpack_require__("./src/components/VMediaInfo/VLicenseTabPanel.vue"),tabs=["rich","html","plain"],VMediaInfo_VCopyLicensevue_type_script_lang_ts_=Object(runtime.b)({name:"VCopyLicense",components:{VTabs:VTabs.default,VTab:VTab.default,VLicenseTabPanel:VLicenseTabPanel.default},props:{media:{type:Object,required:!0}},setup:function setup(props){var i18n=Object(use_i18n.a)();return{tabs:tabs,getAttributionMarkup:function getAttributionMarkup(options){return Object(attribution_html.a)(props.media,i18n,options)}}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_torcc22v432l5frgfm27uvclra/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VMediaInfo_VCopyLicensevue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_c("h5",{staticClass:"mb-4 text-base md:text-2xl font-semibold",attrs:{id:"copy-license-title"}},[_vm._v("\n    "+_vm._s(_vm.$t("media-details.reuse.copy-license.title"))+"\n  ")]),_vm._v(" "),_c("VTabs",{attrs:{label:"#copy-license-title"},scopedSlots:_vm._u([{key:"tabs",fn:function(){return _vm._l(_vm.tabs,(function(tab){return _c("VTab",{key:tab,attrs:{id:tab}},[_vm._v("\n        "+_vm._s(_vm.$t("media-details.reuse.copy-license."+tab))+"\n      ")])}))},proxy:!0}])},[_vm._v(" "),_c("VLicenseTabPanel",{attrs:{tab:_vm.tabs[0]}},[_c("div",{domProps:{innerHTML:_vm._s(_vm.getAttributionMarkup({includeIcons:!1}))}})]),_vm._v(" "),_c("VLicenseTabPanel",{attrs:{tab:_vm.tabs[1]}},[_c("p",{staticClass:"font-mono break-all",attrs:{id:"attribution-html",dir:"ltr"}},[_vm._v("\n        "+_vm._s(_vm.getAttributionMarkup())+"\n      ")])]),_vm._v(" "),_c("VLicenseTabPanel",{attrs:{tab:_vm.tabs[2]}},[_vm._v("\n      "+_vm._s(_vm.getAttributionMarkup({isPlaintext:!0}))+"\n    ")])],1)],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VTab:__webpack_require__("./src/components/VTabs/VTab.vue").default,VLicenseTabPanel:__webpack_require__("./src/components/VMediaInfo/VLicenseTabPanel.vue").default,VTabs:__webpack_require__("./src/components/VTabs/VTabs.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VCopyLicense",exportName:"default",description:"",tags:{},props:[{name:"media",type:{name:"Media"},required:!0}]}},"./src/components/VMediaInfo/VLicenseTabPanel.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_65wlx5o2tqutnvp5xnmeqoviq4/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),VCopyButton=__webpack_require__("./src/components/VCopyButton.vue"),VTabPanel=__webpack_require__("./src/components/VTabs/VTabPanel.vue"),VMediaInfo_VLicenseTabPanelvue_type_script_lang_ts_=Object(runtime.b)({name:"VLicenseTabPanel",components:{VCopyButton:VCopyButton.default,VTabPanel:VTabPanel.default},props:{tab:{type:String,required:!0}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_torcc22v432l5frgfm27uvclra/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VMediaInfo_VLicenseTabPanelvue_type_script_lang_ts_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("VTabPanel",{staticClass:"h-[190px] flex flex-col justify-between items-start text-sm md:text-base",attrs:{id:this.tab}},[_c("div",{staticClass:"overflow-y-auto"},[this._t("default")],2),this._v(" "),_c("VCopyButton",{staticClass:"mt-6",attrs:{id:"copyattr-"+this.tab,el:"#panel-"+this.tab}})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VCopyButton:__webpack_require__("./src/components/VCopyButton.vue").default,VTabPanel:__webpack_require__("./src/components/VTabs/VTabPanel.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VLicenseTabPanel",exportName:"default",description:"",tags:{},props:[{name:"tab",type:{name:"string"},required:!0}],slots:[{name:"default"}]}}}]);