(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./src/components/VMetaSearch/VMetaSearchForm.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.function.name.js");var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_f76cbbf5da9c2936d5fdbb58483aa887/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),get_additional_sources=__webpack_require__("./src/utils/get-additional-sources.ts"),focus_management=__webpack_require__("./src/utils/focus-management.ts"),emits=__webpack_require__("./src/types/emits.ts"),VMetaSourceList=__webpack_require__("./src/components/VMetaSearch/VMetaSourceList.vue"),VMetaSearch_VMetaSearchFormvue_type_script_lang_ts_=Object(runtime.b)({name:"VMetaSearchForm",components:{VMetaSourceList:VMetaSourceList.default},props:{query:{type:Object,required:!0},type:{type:String,required:!0},isSupported:{type:Boolean,default:!1},hasNoResults:{type:Boolean,required:!0}},emits:{tab:Object(emits.a)()},setup:function setup(props,_ref){var emit=_ref.emit,sectionRef=Object(runtime.l)(),unsupportedByUseFilter=Object(runtime.a)((function(){return Object(get_additional_sources.a)(props.type).filter((function(source){return!source.supportsUseFilters})).map((function(source){return source.name})).join(", ")})),lastFocusableElement=Object(runtime.a)((function(){var focusable=Object(focus_management.c)(sectionRef.value);return focusable[focusable.length-1]}));return{sectionRef:sectionRef,unsupportedByUseFilter:unsupportedByUseFilter,handleTab:function handleTab(event){event.target===lastFocusableElement.value&&emit("tab",event)}}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_css-loader@5.2.7/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VMetaSearch_VMetaSearchFormvue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("section",{key:_vm.type,ref:"sectionRef",staticClass:"p-6 meta-search text-center mt-12",attrs:{"data-testid":"meta-search-form"},on:{keydown:function($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")||$event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey?null:_vm.handleTab.apply(null,arguments)}}},[_c("header",{staticClass:"mb-10"},[_vm.hasNoResults?_c("i18n",{staticClass:"text-4xl mb-2",attrs:{path:"meta-search.form.no-results-title",tag:"h4"},scopedSlots:_vm._u([{key:"type",fn:function(){return[_vm._v(_vm._s(_vm.type))]},proxy:!0},{key:"query",fn:function(){return[_vm._v(_vm._s(_vm.query.q))]},proxy:!0}])}):_c("i18n",{staticClass:"text-4xl mb-2",attrs:{path:_vm.isSupported?"meta-search.form.supported-title":"meta-search.form.unsupported-title",tag:"h4"},scopedSlots:_vm._u([{key:"openverse",fn:function(){return[_vm._v("Openverse")]},proxy:!0},{key:"type",fn:function(){return[_vm._v("\n        "+_vm._s(_vm.type)+"\n      ")]},proxy:!0}],null,!1,196258084)}),_vm._v(" "),_c("i18n",{attrs:{path:"meta-search.form.caption",tag:"p"},scopedSlots:_vm._u([{key:"type",fn:function(){return[_vm._v(_vm._s(_vm.type))]},proxy:!0},{key:"break",fn:function(){return[_c("br")]},proxy:!0},{key:"filter",fn:function(){return[_vm._v(_vm._s(_vm.unsupportedByUseFilter))]},proxy:!0}])})],1),_vm._v(" "),_c("VMetaSourceList",{staticClass:"md:justify-center mt-6 mb-10",attrs:{type:_vm.type,query:_vm.query}}),_vm._v(" "),_c("p",{staticClass:"text-sm font-semibold max-w-3xl my-0 mx-auto"},[_vm._v("\n    "+_vm._s(_vm.$t("meta-search.caption",{openverse:"Openverse"}))+"\n  ")])],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VMetaSourceList:__webpack_require__("./src/components/VMetaSearch/VMetaSourceList.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VMetaSearchForm",exportName:"default",description:"",tags:{},props:[{name:"query",type:{name:"ApiQueryParams"},required:!0},{name:"type",type:{name:"MediaType"},required:!0},{name:"isSupported",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasNoResults",type:{name:"boolean"},required:!0}],events:[{name:"tab"}]}}}]);