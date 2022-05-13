(window.webpackJsonp=window.webpackJsonp||[]).push([[204,20,207],{"./src/components/VLoadMore.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.16.5/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist_runtime=(__webpack_require__("./node_modules/.pnpm/regenerator-runtime@0.13.9/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_65wlx5o2tqutnvp5xnmeqoviq4/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),media=__webpack_require__("./src/stores/media/index.ts"),search=__webpack_require__("./src/stores/search.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VButton=__webpack_require__("./src/components/VButton.vue"),VLoadMorevue_type_script_lang_ts_=Object(dist_runtime.b)({name:"VLoadMore",components:{VButton:VButton.default},setup:function setup(){var i18n=Object(use_i18n.a)(),mediaStore=Object(media.a)(),searchStore=Object(search.b)(),canLoadMore=Object(dist_runtime.a)((function(){return""!==searchStore.searchTerm&&mediaStore.fetchState.canFetch&&mediaStore.resultCount>0})),onLoadMore=function(){var _ref=Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(canLoadMore.value){_context.next=2;break}return _context.abrupt("return");case 2:return _context.next=4,mediaStore.fetchMedia({shouldPersistMedia:!0});case 4:case"end":return _context.stop()}}),_callee)})));return function onLoadMore(){return _ref.apply(this,arguments)}}(),isFetching=Object(dist_runtime.a)((function(){return mediaStore.fetchState.isFetching}));return{buttonLabel:Object(dist_runtime.a)((function(){return i18n.t("browse-page.load")})),isFetching:isFetching,onLoadMore:onLoadMore,canLoadMore:canLoadMore}}}),components_VLoadMorevue_type_script_lang_ts_=VLoadMorevue_type_script_lang_ts_,componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_torcc22v432l5frgfm27uvclra/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VLoadMorevue_type_script_lang_ts_,(function(){var _h=this.$createElement;return(this._self._c||_h)("VButton",{directives:[{name:"show",rawName:"v-show",value:this.canLoadMore,expression:"canLoadMore"}],attrs:{size:"large",variant:"full",disabled:this.isFetching,"data-testid":"load-more"},on:{click:this.onLoadMore}},[this._v("\n  "+this._s(this.buttonLabel)+"\n")])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__("./src/components/VButton.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VLoadMore",exportName:"default",description:"",tags:{}}},"./src/composables/use-load-more.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useLoadMore}));__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.string.trim.js");var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.16.5/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/.pnpm/regenerator-runtime@0.13.9/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_65wlx5o2tqutnvp5xnmeqoviq4/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),_stores_media__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stores/media/index.ts"),useLoadMore=function useLoadMore(props){var canLoadMore=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_3__.a)((function(){return""!==props.searchTerm.trim()})),onLoadMore=function(){var _ref=Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(regeneratorRuntime.mark((function _callee(){var mediaStore;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(mediaStore=Object(_stores_media__WEBPACK_IMPORTED_MODULE_4__.a)(),!canLoadMore.value){_context.next=4;break}return _context.next=4,mediaStore.fetchMedia({shouldPersistMedia:!0});case 4:case"end":return _context.stop()}}),_callee)})));return function onLoadMore(){return _ref.apply(this,arguments)}}();return{canLoadMore:canLoadMore,onLoadMore:onLoadMore}}},"./src/pages/search/audio.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_65wlx5o2tqutnvp5xnmeqoviq4/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),use_load_more=__webpack_require__("./src/composables/use-load-more.js"),use_media_query=__webpack_require__("./src/composables/use-media-query.ts"),use_browser_detection=__webpack_require__("./src/composables/use-browser-detection.ts"),use_focus_filters=__webpack_require__("./src/composables/use-focus-filters.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),focus_management=__webpack_require__("./src/utils/focus-management.ts"),VAudioTrack=__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VGridSkeleton=__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue"),search_page_types=__webpack_require__("./src/pages/search/search-page.types.ts"),search_audiovue_type_script_lang_ts_=Object(runtime.b)({name:"AudioSearch",components:{VAudioTrack:VAudioTrack.default,VGridSkeleton:VGridSkeleton.default,VLoadMore:VLoadMore.default},props:search_page_types.propTypes,setup:function setup(props){var i18n=Object(use_i18n.a)();Object(runtime.r)({title:"".concat(props.searchTerm," | Openverse")});var results=Object(runtime.a)((function(){return props.resultItems.audio})),isMinScreenMd=Object(use_media_query.a)("md",{shouldPassInSSR:!0}),isMobile=Object(use_browser_detection.b)(),audioTrackSize=Object(runtime.a)((function(){return!isMinScreenMd.value||isMobile?"s":props.isFilterVisible?"l":"m"})),isError=Object(runtime.a)((function(){return!!props.fetchState.fetchingError})),errorHeader=Object(runtime.a)((function(){var type=i18n.t("browse-page.search-form.audio");return i18n.t("browse-page.fetching-error",{type:type})})),focusFilters=Object(use_focus_filters.a)(),_useLoadMore=Object(use_load_more.a)(props);return{results:results,audioTrackSize:audioTrackSize,isError:isError,errorHeader:errorHeader,handleShiftTab:function handleShiftTab(event,i){0===i&&focusFilters.focusFilterSidebar(event,focus_management.a.Last)},canLoadMore:_useLoadMore.canLoadMore,onLoadMore:_useLoadMore.onLoadMore}},head:{}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_torcc22v432l5frgfm27uvclra/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(search_audiovue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("section",[0!==_vm.results.length||_vm.fetchState.isFinished?_vm._e():_c("VGridSkeleton",{attrs:{"is-for-tab":"audio"}}),_vm._v(" "),_vm._l(_vm.results,(function(audio,i){return _c("VAudioTrack",{key:audio.id,staticClass:"mb-8 md:mb-10",attrs:{audio:audio,size:_vm.audioTrackSize,layout:"row"},on:{"shift-tab":function($event){return _vm.handleShiftTab($event,i)}}})})),_vm._v(" "),_c("VLoadMore")],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VGridSkeleton:__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue").default,VAudioTrack:__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"AudioSearch",exportName:"default",description:"",tags:{}}},"./src/pages/search/search-page.types.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"propTypes",(function(){return propTypes}));var propTypes={resultItems:{type:Object,required:!0},fetchState:{type:Object,required:!0},isFilterVisible:{type:Boolean,required:!1},searchTerm:{type:String,required:!0},supported:{type:Boolean,required:!1}}}}]);