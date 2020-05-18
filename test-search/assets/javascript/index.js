/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([58,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// re-export env variables (injected during build by dotenv-webpack)
// so that process.env.XXXX is not referenced everywhere in the code base
// + handle default values
var appConfig = {
  lang: process.env.APP_LANG || 'en',
  assetPath: process.env.ASSET_PATH || '',
  urls: {
    en: process.env.URL_en,
    fr: process.env.URL_fr,
    es: process.env.URL_es
  },
  nodeEnv: "production"
};
module.exports = appConfig;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getResourceByNsAndKey; });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var jquery_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var jquery_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_projections_by_country_projections_by_country_resources_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
var _modules_projections_by_country_projections_by_country_resources_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(11, 1);
/* harmony import */ var _modules_header_publication_header_publication_resources_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
var _modules_header_publication_header_publication_resources_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(12, 1);
/* harmony import */ var _modules_header_responsive_header_responsive_resources_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
var _modules_header_responsive_header_responsive_resources_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(13, 1);
/* harmony import */ var _modules_sticky_header_sticky_header_resources_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
var _modules_sticky_header_sticky_header_resources_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(14, 1);
/* harmony import */ var _modules_key_messages_key_messages_resources_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
var _modules_key_messages_key_messages_resources_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(15, 1);
/* harmony import */ var _modules_country_policy_tracker_country_policy_tracker_resources_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);
var _modules_country_policy_tracker_country_policy_tracker_resources_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(16, 1);
/* harmony import */ var _modules_key_facts_slider_key_facts_slider_resources_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17);
var _modules_key_facts_slider_key_facts_slider_resources_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(17, 1);
/* harmony import */ var _modules_key_data_key_data_resources_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18);
var _modules_key_data_key_data_resources_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(18, 1);
/* harmony import */ var _modules_text_block_text_block_resources_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19);
var _modules_text_block_text_block_resources_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(19, 1);
/* harmony import */ var _modules_compare_your_country_compare_your_country_resources_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20);
var _modules_compare_your_country_compare_your_country_resources_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(20, 1);
/* harmony import */ var _modules_key_topics_key_topics_resources_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21);
var _modules_key_topics_key_topics_resources_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(21, 1);
/* harmony import */ var _modules_blockquote_blockquote_resources_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22);
var _modules_blockquote_blockquote_resources_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(22, 1);
/* harmony import */ var _modules_read_more_read_more_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23);
var _modules_read_more_read_more_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(23, 1);
/* harmony import */ var _modules_video_video_resources_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(24);
var _modules_video_video_resources_json__WEBPACK_IMPORTED_MODULE_17___namespace = /*#__PURE__*/__webpack_require__.t(24, 1);
/* harmony import */ var _modules_video_regular_video_regular_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(25);
var _modules_video_regular_video_regular_json__WEBPACK_IMPORTED_MODULE_18___namespace = /*#__PURE__*/__webpack_require__.t(25, 1);
/* harmony import */ var _modules_featured_stories_featured_stories_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(26);
var _modules_featured_stories_featured_stories_json__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(26, 1);
/* harmony import */ var _modules_key_facts_key_facts_resources_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(27);
var _modules_key_facts_key_facts_resources_json__WEBPACK_IMPORTED_MODULE_20___namespace = /*#__PURE__*/__webpack_require__.t(27, 1);
/* harmony import */ var _modules_key_facts2_key_facts2_resources_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(28);
var _modules_key_facts2_key_facts2_resources_json__WEBPACK_IMPORTED_MODULE_21___namespace = /*#__PURE__*/__webpack_require__.t(28, 1);
/* harmony import */ var _modules_publications_publications_economic_resources_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(29);
var _modules_publications_publications_economic_resources_json__WEBPACK_IMPORTED_MODULE_22___namespace = /*#__PURE__*/__webpack_require__.t(29, 1);
/* harmony import */ var _modules_podcast_podcast_resources_json__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(30);
var _modules_podcast_podcast_resources_json__WEBPACK_IMPORTED_MODULE_23___namespace = /*#__PURE__*/__webpack_require__.t(30, 1);
/* harmony import */ var _modules_credits_credits_resources_json__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(31);
var _modules_credits_credits_resources_json__WEBPACK_IMPORTED_MODULE_24___namespace = /*#__PURE__*/__webpack_require__.t(31, 1);
/* harmony import */ var _modules_footer_footer_resources_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(32);
var _modules_footer_footer_resources_json__WEBPACK_IMPORTED_MODULE_25___namespace = /*#__PURE__*/__webpack_require__.t(32, 1);


























var resourceList = [_modules_projections_by_country_projections_by_country_resources_json__WEBPACK_IMPORTED_MODULE_4__, _modules_header_responsive_header_responsive_resources_json__WEBPACK_IMPORTED_MODULE_6__, _modules_header_publication_header_publication_resources_json__WEBPACK_IMPORTED_MODULE_5__, _modules_sticky_header_sticky_header_resources_json__WEBPACK_IMPORTED_MODULE_7__, _modules_key_messages_key_messages_resources_json__WEBPACK_IMPORTED_MODULE_8__, _modules_country_policy_tracker_country_policy_tracker_resources_json__WEBPACK_IMPORTED_MODULE_9__, _modules_key_facts_slider_key_facts_slider_resources_json__WEBPACK_IMPORTED_MODULE_10__, _modules_key_data_key_data_resources_json__WEBPACK_IMPORTED_MODULE_11__, _modules_text_block_text_block_resources_json__WEBPACK_IMPORTED_MODULE_12__, _modules_compare_your_country_compare_your_country_resources_json__WEBPACK_IMPORTED_MODULE_13__, _modules_key_topics_key_topics_resources_json__WEBPACK_IMPORTED_MODULE_14__, _modules_blockquote_blockquote_resources_json__WEBPACK_IMPORTED_MODULE_15__, _modules_read_more_read_more_json__WEBPACK_IMPORTED_MODULE_16__, _modules_video_video_resources_json__WEBPACK_IMPORTED_MODULE_17__, _modules_video_regular_video_regular_json__WEBPACK_IMPORTED_MODULE_18__, _modules_featured_stories_featured_stories_json__WEBPACK_IMPORTED_MODULE_19__, _modules_key_facts_key_facts_resources_json__WEBPACK_IMPORTED_MODULE_20__, _modules_key_facts2_key_facts2_resources_json__WEBPACK_IMPORTED_MODULE_21__, _modules_publications_publications_economic_resources_json__WEBPACK_IMPORTED_MODULE_22__, _modules_podcast_podcast_resources_json__WEBPACK_IMPORTED_MODULE_23__, _modules_credits_credits_resources_json__WEBPACK_IMPORTED_MODULE_24__, _modules_footer_footer_resources_json__WEBPACK_IMPORTED_MODULE_25__];
i18next__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].init({
  lng: _config__WEBPACK_IMPORTED_MODULE_3___default.a.lang,
  debug: _config__WEBPACK_IMPORTED_MODULE_3___default.a.nodeEnv !== 'production',
  resources: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.merge.apply(lodash__WEBPACK_IMPORTED_MODULE_2___default.a, [{}].concat(resourceList))
}, function () {
  jquery_i18next__WEBPACK_IMPORTED_MODULE_1___default.a.init(i18next__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], $, {
    tName: 't',
    // --> appends $.t = i18next.t
    i18nName: 'i18n',
    // --> appends $.i18n = i18next
    handleName: 'localize',
    // --> appends $(selector).localize(opts);
    selectorAttr: 'data-i18n',
    // selector for translating elements
    targetAttr: 'i18n-target',
    // data-() attribute to grab target element to translate (if different than itself)
    optionsAttr: 'i18n-options',
    // data-() attribute that contains options, will load/set if useOptionsAttr = true
    useOptionsAttr: false,
    // see optionsAttr
    parseDefaultValueFromContent: true // parses default values from content ele.val or ele.text

  });
  $('#index-id').localize({
    ns: 'index'
  });
  $('#projections-by-country').localize({
    ns: 'projections-by-country'
  });
  $('#header-publication').localize({
    ns: 'header-publication'
  });
  $('#header-responsive-id').localize({
    ns: 'header-responsive-ns'
  });
  $('#navbar').localize({
    ns: 'sticky-header'
  });
  $('#key-messages').localize({
    ns: 'key-messages'
  });
  $('#country-policy-tracker').localize({
    ns: 'country-policy-tracker'
  });
  $('#key-facts-slider-content').localize({
    ns: 'key-facts-slider-block'
  });
  $('#key-data-block').localize({
    ns: 'key-data'
  });
  $('#text-block').localize({
    ns: 'para-block'
  });
  $('#compare-your-country').localize({
    ns: 'compare-your-country'
  });
  $('#key-topics-block').localize({
    ns: 'key-topics'
  });
  $('#blockquote').localize({
    ns: 'text-blockquote'
  });
  $('#blockquote--no-title').localize({
    ns: 'text-blockquote'
  });
  $('#blockquote--white').localize({
    ns: 'text-blockquote'
  });
  $("#read--more").localize({
    ns: 'text-block'
  });
  $('#key-facts-panels').localize({
    ns: 'key-facts-block'
  });
  $('#key-facts2-id').localize({
    ns: 'key-facts2'
  });
  $('#video-block').localize({
    ns: 'video-block'
  });
  $('#video-regular-id').localize({
    ns: 'video-regular-ns'
  });
  $('#featured-stories-txt').localize({
    ns: 'featured-block'
  });
  $('#discover-report').localize({
    ns: 'publications--economic'
  });
  $('#podcast-block').localize({
    ns: 'podcast'
  });
  $('#credits-block').localize({
    ns: 'credits-id'
  });
  $('#footer').localize({
    ns: 'footer'
  });
});
var getResourceByNsAndKey = function getResourceByNsAndKey(ns, key) {
  return i18next__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getResource(_config__WEBPACK_IMPORTED_MODULE_3___default.a.lang, ns, key);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"projections-by-country\":{\"title\":\"Projection <span class='title--highlight'>by country</span>\",\"subtitle\":\"World GDP growth fell to 2.9% this year – its lowest rate since the financial crisiss.\",\"select-country-constant-title\":\"Search your country\",\"read-button\":\"Country note\",\"projection-button\":\"Economic snapshot\"}},\"fr\":{\"projections-by-country\":{\"title\":\" FR - Projection <span class='title--highlight'>by country</span>\",\"subtitle\":\"Le PIB mondial a diminué pour s’établir à 2.9 % cette année, soit son taux le plus bas depuis la crise financière...\",\"select-country-constant-title\":\"Sélectionner un pays\",\"read-button\":\"Notes par pays\",\"projection-button\":\"Aperçu economique\"}},\"es\":{\"projections-by-country\":{\"title\":\" ES - Projection <span class='title--highlight'>by country</span>\",\"subtitle\":\"El crecimiento del PIB mundial ha caído al 2,9% este año – su nivel más bajo desde la crisis financiera.\",\"select-country-constant-title\":\"Seleccionar un país\",\"read-button\":\"Nota de país\",\"projection-button\":\"Panorama económico\"}}}");

/***/ }),
/* 12 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"header-publication\":{\"breadcrumb-link-1-href\":\"http://www.oecd.org/\",\"breadcrumb-link-1-text\":\"OECD Home\",\"breadcrumb-link-2-href\":\"http://www.oecd.org/coronavirus/en\",\"breadcrumb-link-2-text\":\"Coronavirus\",\"title-label\":\"\",\"main-title\":\"Tackling coronavirus (COVID-19)<br><span style='font-size:.8em;font-weight:100'> Contributing to a global effort</span>\",\"sub-title\":\"What are the impacts and consequences of the coronavirus pandemic on our lives and our societies – and what are some of the solutions we can find to boost our healthcare systems, secure our businesses, maintain our jobs and education, and stabilise financial markets and economies?\",\"hashtag-title\":\"#\",\"button-explore-href\":\"#resources\",\"button-explore\":\"Read the Report\"}},\"fr\":{\"header-publication\":{\"breadcrumb-link-1-href\":\"http://www.oecd.org/\",\"breadcrumb-link-1-text\":\"Accueil de l'OCDE\",\"breadcrumb-link-2-href\":\"http://www.oecd.org/coronavirus/fr\",\"breadcrumb-link-2-text\":\"Coronavirus\",\"title\":\"\",\"main-title\":\"Lutte contre le coronavirus (COVID-19) <br><span style='font-size:.8em;font-weight:100'> Pour un effort mondial</span>\",\"sub-title\":\"Quels sont les impacts et les conséquences de la pandémie de coronavirus sur nos vies et nos sociétés - et quelles solutions pouvons-nous trouver pour renforcer nos systèmes de santé, sécuriser nos entreprises, protéger les emplois et l’éducation, et stabiliser les marchés financiers et les économies&nbsp;?\",\"hashtag-title\":\"# [fr]\",\"button-explore-href\":\"#resources\",\"button-explore\":\"Accédez au rapport\"}},\"es\":{\"header-publication\":{\"breadcrumb-link-1-href\":\"http://www.oecd.org/\",\"breadcrumb-link-1-text\":\"oecd.org\",\"breadcrumb-link-2-href\":\"http://www.oecd.org/coronavirus/es\",\"breadcrumb-link-2-text\":\"Coronavirus\",\"title\":\"\",\"main-title\":\"Afrontar el coronavirus (COVID-19)<br><span style='font-size:.8em;font-weight:100'>Unidos en un esfuerzo global</span>\",\"sub-title\":\"¿Cuáles son las repercusiones y consecuencias de la pandemia de coronavirus en nuestras vidas y en nuestras sociedades? ¿Cuáles son algunas de las soluciones que nos permitirán reforzar nuestros sistemas de salud, proteger el empleo y las empresas, garantizar una educación de calidad y estabilizar los mercados financieros y las economías?\",\"hashtag-title\":\"# [es]\",\"button-explore-href\":\"#resources\",\"button-explore\":\"Leer el informe\"}}}");

/***/ }),
/* 13 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"header-responsive-ns\":{\"breadcrumb-link-1-href\":\"http://www.oecd.org/\",\"breadcrumb-link-1-text\":\"OECD Home\",\"breadcrumb-link-2-href\":\"http://www.oecd.org/coronavirus/en\",\"breadcrumb-link-2-text\":\"Coronavirus\",\"title\":\"\",\"main-title\":\"Tackling coronavirus (COVID-19)<br><span style='font-size:.8em;font-weight:100'> Contributing to a global effort</span>\",\"sub-title\":\"What are the impacts and consequences of the coronavirus pandemic on our lives and our societies – and what are some of the solutions we can find to boost our healthcare systems, secure our businesses, maintain our jobs and education, and stabilise financial markets and economies?\"}},\"fr\":{\"header-responsive-ns\":{\"breadcrumb-link-1-href\":\"http://www.oecd.org/\",\"breadcrumb-link-1-text\":\"Accueil\",\"breadcrumb-link-2-href\":\"http://www.oecd.org/coronavirus/fr\",\"breadcrumb-link-2-text\":\"Coronavirus\",\"title\":\"\",\"main-title\":\"Lutte contre le coronavirus (COVID-19) <br><span style='font-size:.8em;font-weight:100'> Pour un effort mondial</span>\",\"sub-title\":\"Quels sont les impacts et les conséquences de la pandémie de coronavirus sur nos vies et nos sociétés - et quelles solutions pouvons-nous trouver pour renforcer nos systèmes de santé, sécuriser nos entreprises, protéger les emplois et l’éducation, et stabiliser les marchés financiers et les économies&nbsp;?\"}},\"es\":{\"header-responsive-ns\":{\"breadcrumb-link-1-href\":\"http://www.oecd.org/\",\"breadcrumb-link-1-text\":\"oecd.org\",\"breadcrumb-link-2-href\":\"http://www.oecd.org/coronavirus/es\",\"breadcrumb-link-2-text\":\"Coronavirus\",\"title\":\"\",\"main-title\":\"Afrontar el coronavirus (COVID-19)<br><span style='font-size:.8em;font-weight:100'>Unidos en un esfuerzo global</span>\",\"sub-title\":\"¿Cuáles son las repercusiones y consecuencias de la pandemia de coronavirus en nuestras vidas y en nuestras sociedades? ¿Cuáles son algunas de las soluciones que nos permitirán reforzar nuestros sistemas de salud, proteger el empleo y las empresas, garantizar una educación de calidad y estabilizar los mercados financieros y las economías?\"}}}");

/***/ }),
/* 14 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"sticky-header\":{\"link-1-text\":\"Key impacts\",\"link-2-text\":\"Policy responses\",\"link-3-text\":\"Data\",\"link-4-text\":\"Country profiles\",\"link-5-text\":\"More Resources\"}},\"fr\":{\"sticky-header\":{\"link-1-text\":\"Principaux impacts\",\"link-2-text\":\"Réponses\",\"link-3-text\":\"Données\",\"link-4-text\":\"Profils par pays\",\"link-5-text\":\"Ressources supplémentaires\"}},\"es\":{\"sticky-header\":{\"link-1-text\":\"Áreas clave\",\"link-2-text\":\"Respuestas\",\"link-3-text\":\"Datos\",\"link-4-text\":\"Perfiles de países\",\"link-5-text\":\"Más Recursos\"}}}");

/***/ }),
/* 15 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"key-messages\":{\"title\":\"Key impacts\",\"para-intro\":\"\",\"tile-1-link-text\":\"Read more\",\"tile-1-title\":\"Stabilising the world economy\",\"tile-1-list-items\":\"<p>Containing the epidemic and limiting its severity is the priority, to help the healthcare sector, affected industries and workers.</p><p>But we must also support vulnerable households and firms, and buffer the shock through tax and credit change easing and flexible working...</p><p>as well as lead a co-ordinated policy response across countries.</p>\",\"tile-1-link-href\":\"http://oe.cd/il/2VU\",\"tile-2-title\":\"Staying apart to stay healthy\",\"tile-2-list-items\":\"<p>In the absence of effective drugs and vaccines to fight Covid-19, co-ordinated containment and mitigation measures are key. </p><p>Without them, the health care systems will not be able to cope with the high number of patients. </p><p>Among measures, social distancing is emerging as the most effective for reducing the amount of people who contract the disease as well as for delaying the disease peak.</p>\",\"tile-2-link-href\":\"http://oe.cd/il/2Vf\",\"tile-3-title\":\"Supporting the tourism sector\",\"tile-3-list-items\":\"<p>Tourism is hard hit by the current crisis, with a projected drop in the international tourism economy of up to 70% in 2020.</p><p>Governments are introducing policies to protect visitors and tourism workers and to ensure that travel and tourism businesses – which are often small companies – survive.</p>\",\"tile-3-link-href\":\"https://read.oecd-ilibrary.org/view/?ref=124_124984-7uf8nm95se&Title=Covid-19:%20Tourism%20Policy%20Responses\",\"tile-4-title\":\"Saving small businesses\",\"tile-4-list-items\":\"<p>Countries are providing measures to help address the short- and long-term consequences of the outbreak.</p><p>These include temporary tax relief, tax cuts and credits, and direct financial support, as well as procurement and payment-delay measures.</p><p>In several countries, commercial banks and central banks are setting up support aimed at SME finance constraints.</p>\",\"tile-4-link-href\":\"https://oecd.dam-broadcast.com/pm_7379_119_119680-di6h3qgi4x.pdf\"}},\"fr\":{\"key-messages\":{\"title\":\"Principaux impacts\",\"para-intro\":\"\",\"tile-1-link-text\":\"En savoir plus\",\"tile-1-title\":\"La stabilisation de l'économie mondiale \",\"tile-1-list-items\":\"<p>La priorité est de contenir l'épidémie et d’en limiter la gravité, et de soutenir ainsi le secteur de la santé ainsi que les industries et les employés touchés.</p><p>Nous devons également soutenir les ménages et les entreprises vulnérables, et amortir le choc en allégeant charge fiscale et frais financiers et en ayant recours au travail flexible.</p><p>Une action coordonnée à l’échelle planétaire s’impose.</p>\",\"tile-1-link-href\":\"http://oe.cd/il/2VU\",\"tile-2-title\":\"Gardez vos distances pour rester en bonne santé\",\"tile-2-list-items\":\"<p style='font-size:.94em'>En l’absence de médicaments et de vaccins pour lutter contre le Covid-19, il est essentiel de coordonner les mesures de confinement et d'atténuation.</p><p style='font-size:.94em'>Sans ces mesures, les systèmes de santé ne pourront faire face à l’afflux de patients.</p><p style='font-size:.94em'>Parmi les mesures recommandées, la distanciation sociale se révèle être la plus efficace pour réduire le nombre de personnes qui contractent la maladie. Cela permet également de retarder le pic de l’épidémie.</p>\",\"tile-2-link-href\":\"https://oecd.dam-broadcast.com/pm_7379_119_119680-di6h3qgi4x.pdf\",\"tile-3-title\":\"Soutenir le secteur du tourisme\",\"tile-3-list-items\":\"<p style='font-size:.99em'>Le tourisme est durement touché par la crise actuelle, avec une baisse prévue de l'économie internationale du tourisme qui pourrait atteindre 70 % en 2020.</p><p style='font-size:.99em'>Les gouvernements mettent en place des politiques visant à protéger les visiteurs et les travailleurs du tourisme et à assurer la survie des entreprises du secteur, qui sont souvent de petites entreprises.</p>\",\"tile-3-link-href\":\"https://read.oecd-ilibrary.org/view/?ref=124_124984-7uf8nm95se&Title=Covid-19:%20Tourism%20Policy%20Responses\"}},\"es\":{\"key-messages\":{\"title\":\"Áreas clave\",\"para-intro\":\"\",\"tile-1-link-text\":\"Leer más\",\"tile-1-title\":\"Estabilizar la economía mundial\",\"tile-1-list-items\":\"<p>La prioridad es contener la epidemia y limitar su gravedad para ayudar al sector de la salud, a las industrias afectadas y a los trabajadores.</p><p>También necesitamos apoyar a los hogares y las empresas más vulnerables, amortiguar el choque mediante la flexibilización fiscal, crediticia y del trabajo.</p><p>Debemos respaldar una respuesta política coordinada entre los países.</p>\",\"tile-1-link-href\":\"http://oe.cd/il/2VU\",\"tile-2-title\":\"Mantener las distancias para mantenerse sano\",\"tile-2-list-items\":\"<p>En ausencia de medicamentos y vacunas eficaces para combatir el COVID-19, las medidas coordinadas de contención y de mitigación son fundamentales.</p><p>Sin ellas, los sistemas de atención sanitaria no podrán hacer frente al elevado número de pacientes. </p><p>El distanciamiento social se perfila como la medida más eficaz para reducir la cantidad de personas que contraen la enfermedad y para retrasar el pico de contagios.</p>\",\"tile-2-link-href\":\"http://oe.cd/il/2Vf\",\"tile-3-title\":\"Apoyar al sector turístico\",\"tile-3-list-items\":\"<p style='font-size:.96em'>El sector turístico se está viendo duramente afectado por la crisis actual, con una disminución prevista de la economía ligada al turismo que podría alcanzar un 70% en 2020.</p><p style='font-size:.96em'>Los gobiernos están implementando políticas dirigidas a proteger a los viajeros y a los trabajadores del sector turístico, así como a asegurar la supervivencia de las empresas del sector, que a menudo son pequeñas empresas.</p>\",\"tile-3-link-href\":\"https://read.oecd-ilibrary.org/view/?ref=124_124984-7uf8nm95se&Title=Covid-19:%20Tourism%20Policy%20Responses\"}}}");

/***/ }),
/* 16 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"country-policy-tracker\":{\"title-1\":\"Country policy tracker\",\"blurb\":\"<span style='font-size:1.2em'>What are countries doing to contain the spread of the coronavirus? How are countries helping people, small businesses and the economy to weather the crisis and beyond? This tool helps you to navigate the global response.</span>\"}},\"fr\":{\"country-policy-tracker\":{\"title-1\":\"Suivi des politiques par pays\",\"blurb\":\"<span style='font-size:1.2em'>Que font les pays pour contenir la propagation du coronavirus? Comment les pays aident-ils les gens, les petites entreprises et l'économie à surmonter la crise et préparer l’après? Cet outil vous aide à explorer la réponse globale.\"}},\"es\":{\"country-policy-tracker\":{\"title-1\":\"Monitoreo de las políticas por país\",\"blurb\":\"<span style='font-size:1.2em'>¿Qué están haciendo los países para contener la propagación del coronavirus? ¿Cómo están ayudando a las personas, las pequeñas empresas y a la economía en general a superar la crisis? Esta herramienta puede ayudar y facilitar respuestas.\"}}}");

/***/ }),
/* 17 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"key-facts-slider-block\":{\"title-1\":\"\",\"para-1\":\"\",\"cite-title-10\":\"COVID-19: Joint actions to win the war\",\"cite-date-10\":\"20 March 2020\",\"cite-para-10\":\"“The coronavirus pandemic is causing large-scale loss of life and severe human suffering. It is a public health crisis without precedent in living memory, which is testing our collective capacity to respond.”\",\"cite-src-10\":\"Angel Gurría, OECD Secretary-General\",\"cite-link-10\":\"\",\"cite-fact-10\":\"\",\"block-right-title\":\"<strong>Read the op-ed</strong>\",\"cite-title-1\":\"Why should countries pull together? \",\"cite-date-1\":\"24 March 2020\",\"cite-para-1\":\"“Countries are taking dramatic measures. But the question is, are countries addressing the same areas? We can do more for people and companies if countries co-ordinate on mutually reinforcing measures. A globally co-ordinated policy response is absolutely crucial.”\",\"cite-src-1\":\"Angel Gurría, OECD Secretary-General\",\"cite-link-1\":\"\",\"cite-fact-1\":\"If G20 economies act collectively to stimulate the economy, growth effects in the median G20 economy are 30% higher after just two years.\",\"cite-title-2\":\"What will be the impact on the global economy?\",\"cite-date-2\":\"23 March 2020\",\"cite-para-2\":\"“When we look at what is happening on the ground we see there is a higher risk of the economy going further down than what we have said so far.”\",\"cite-src-2\":\"Laurence Boone, OECD Chief Economist\",\"cite-link-2\":\"\",\"cite-fact-2\":\"The decline in global growth is hitting all affected regions\",\"cite-title-3\":\"How can countries help companies and citizens to weather this crisis? \",\"cite-date-3\":\"23 March 2020\",\"cite-para-3\":\"“Right now we have a duty to deal with the pandemic. Then we have to look at the economic consequences. A whole reconstruction will be needed. We're calling for the ambition of the Marshall Plan and the vision of the New Deal. There is nothing normal about this moment, we need to throw everything we've got at this crisis.” \",\"cite-src-3\":\"Angel Gurría, OECD Secretary-General \",\"cite-link-3\":\"\",\"cite-fact-3\":\"Most OECD countries have already begun cushioning the blow, in particular for small businesses.\"}},\"fr\":{\"key-facts-slider-block\":{\"title-1\":\"\",\"para-1\":\"\",\"cite-title-10\":\"Coronavirus (COVID-19) : Des actions conjointes pour gagner la guerre\",\"cite-date-10\":\"26 mars 2020\",\"cite-para-10\":\"“La pandémie de coronavirus (COVID-19) entraîne de très lourdes pertes en vies humaines et d’immenses souffrances au sein des populations. Il s’agit d’une crise de santé publique sans précédent de mémoire récente, une crise qui éprouve notre aptitude collective à réagir.”\",\"cite-src-10\":\"Angel Gurría, Secrétaire Général de l’OCDE\",\"cite-link-10\":\"\",\"cite-fact-10\":\"\",\"block-right-title\":\"<strong>Lire la tribune </strong>\",\"cite-title-1\":\"Comment les pays peuvent&#8209;ils aider les entreprises et les citoyens à surmonter cette crise&nbsp;?\",\"cite-date-1\":\"18 mars 2020\",\"cite-para-1\":\"«&nbsp;La protection de la santé des personnes est la première priorité, ensuite, la question du bien-être des personnes est absolument cruciale. Les mesures qui visent à aider les personnes à se confiner et à soutenir les entreprises sont essentielles.&nbsp;»\",\"cite-src-1\":\"Angel Gurría, Secrétaire Général de l’OCDE\",\"cite-link-1\":\"\",\"cite-fact-1\":\"La plupart des pays de l'OCDE ont désormais commencé à amortir le choc, en particulier pour les petites entreprises.\",\"cite-title-2\":\"Quel va être l’impact sur l'économie mondiale&nbsp;?\",\"cite-date-2\":\"2 mars 2020\",\"cite-para-2\":\"«&nbsp;L’économie mondiale se trouve dans la position la plus périlleuse qu’elle ait connue depuis la crise financière mondiale… Les mesures de confinement et la peur de l’infection porteraient un rude coup à la production ainsi qu’aux dépenses.&nbsp;»\",\"cite-src-2\":\"Laurence Boone, Chef économiste de l'OCDE \",\"cite-link-2\":\"\",\"cite-fact-2\":\"Le déclin de la croissance mondiale affecte toutes les régions touchées.\",\"cite-title-3\":\"Pourquoi les pays doivent-ils agir ensemble&nbsp;?\",\"cite-date-3\":\"2 mars 2020\",\"cite-para-3\":\"«&nbsp;Dans une économie et une société connectées à l’échelle planétaire, le coronavirus et ses retombées économiques et sociales sont l’affaire de tous.&nbsp;»\",\"cite-src-3\":\"Laurence Boone, Chef économiste de l'OCDE \",\"cite-link-3\":\"\",\"cite-fact-3\":\"Si les économies du G20 agissent collectivement pour stimuler l'économie, les effets sur la croissance de l'économie médiane du G20 seront 30&nbsp;% plus élevés après seulement deux ans.\"}},\"es\":{\"key-facts-slider-block\":{\"title-1\":\"\",\"para-1\":\"\",\"cite-title-10\":\"Coronavirus (COVID-19): acciones conjuntas para ganar la guerra\",\"cite-date-10\":\"26 marzo 2020\",\"cite-para-10\":\"“La pandemia de coronavirus está teniendo un alto costo en vidas humanas, causando gran sufrimiento e incertidumbre en nuestras sociedades. Se trata de una crisis de salud pública sin precedentes en la historia reciente que está poniendo a prueba nuestra capacidad de respuesta colectiva.”\",\"cite-src-10\":\"Angel Gurría, secretario general de la OCDE\",\"cite-link-10\":\"\",\"cite-fact-10\":\"\",\"block-right-title\":\"<strong>Leer Op-ed </strong>\",\"cite-title-1\":\"¿Cómo pueden los países ayudar a las empresas y a los ciudadanos a superar esta crisis?\",\"cite-date-1\":\"18 marzo 2020\",\"cite-para-1\":\"“Proteger la salud de las personas es lo primero y lo más importante, pero la cuestión de su bienestar también es absolutamente esencial. Las medidas para ayudar a las personas y las empresas durante el confinamiento son vitales”.\",\"cite-src-1\":\"Angel Gurría, secretario general de la OCDE\",\"cite-link-1\":\"\",\"cite-fact-1\":\"La mayoría de los países de la OCDE ya han empezado a amortiguar el golpe, en particular para las pequeñas empresas.\",\"cite-title-2\":\"¿Cuál será el impacto en la economía mundial?\",\"cite-date-2\":\"2 marzo 2020\",\"cite-para-2\":\"“La economía mundial se encuentra en su momento más precario desde la crisis financiera mundial. Las medidas de contención y el miedo a la infección están afectando tanto a la producción como al gasto”.\",\"cite-src-2\":\"Laurence Boone, economista jefe de la OCDE\",\"cite-link-2\":\"\",\"cite-fact-2\":\"La caída en el crecimiento mundial impacta a todas las regiones afectadas.\",\"cite-title-3\":\"¿Por qué deberían unirse los países?\",\"cite-date-3\":\"2 marzo 2020\",\"cite-para-3\":\"“Nuestra economía y sociedad están conectadas globalmente, el coronavirus y sus consecuencias económicas y sociales son un problema de todos”.\",\"cite-src-3\":\"Laurence Boone, economista jefe de la OCDE\",\"cite-link-3\":\"\",\"cite-fact-3\":\"Si las economías del G20 actúan juntas para estimular la economía, en sólo dos años los efectos en el crecimiento de la economía mediana del G20 serán un 30% más altos.\"}}}");

/***/ }),
/* 18 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"key-data\":{\"title-1\":\"Spend more or spend differently? \",\"intro-para-1\":\"\",\"data-href-serie\":\"https://data.oecd.org/\",\"label-href-serie\":\"Discover OECD data\",\"title-secondary-1\":\"\",\"title-secondary-2\":\"\",\"iframe-chart-1\":\"<div class='embed-responsive embed-responsive-16by9'><iframe src='https://data.oecd.org/chart/5SLS' width='860' height='645' style='border: 0' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true'><a href='https://data.oecd.org/chart/5SAE' target='_blank'>OECD Chart: Elderly population, Total, % of population, 1970 – 2014</a></iframe></div>\",\"title-2\":\"How can we protect the most vulnerable?  \",\"iframe-chart-2\":\"<iframe src='https://data.oecd.org/chart/5TfH' width='100%' style='border: 0' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true'><a href='https://data.oecd.org/chart/5TfH' target='_blank'>OECD Chart: Elderly population, Total, % of population, Annual, 1970 – 2018</a></iframe>\",\"legend-href\":\"\",\"legend-verb\":\"Legend here\"}},\"fr\":{\"key-data\":{\"title-1\":\"Le secteur de la santé et de l’action sociale compte-t-il assez d’emplois&nbsp;?\",\"intro-para-1\":\"\",\"data-href-serie\":\"https://data.oecd.org/fr/accueil/\",\"label-href-serie\":\"DÉCOUVREZ LES DONNÉES DE L'OCDE\",\"title-secondary-1\":\"\",\"title-secondary-2\":\"\",\"iframe-chart-1\":\"<a href='https://oe.cd/il/2Vd'  target='_blank'><img class='key-data__img' src='./img/g08-1-fr.jpg' alt='chart' style='width: 100%;'></a>\",\"chart-1-twitter-fr\":\"<div class='ssk-group social' data-title='Le secteur de la santé et de l’action sociale compte-t-il assez d’emplois? #coronavirus #COVID19' data-text=' ➡️' data-url='https://www.oecd.org/coronavirus/fr'><div class='social__word' data-i18n='social-verb'>Partager</div><a class='ssk ssk-twitter social__item social__item--twitter' href=''><img src='./img/twitter--green.svg' alt='Twitter'></a></div>\",\"title-2\":\"Comment pouvons-nous protéger les plus vulnérables&nbsp;?\",\"iframe-chart-2\":\"<iframe src='https://data.oecd.org/chart/5TPB' width='100%' style='border: 0' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true'><a href='https://data.oecd.org/chart/5TPB' target='_blank'>OECD Chart: Elderly population, Total, % of population, Annual, 1970 – 2018</a></iframe>\",\"legend-href\":\"\",\"legend-verb\":\"Legend here\"}},\"es\":{\"key-data\":{\"title-1\":\"¿Gastar más o gastar de forma diferente?\",\"intro-para-1\":\"\",\"data-href-serie\":\"https://data.oecd.org/\",\"label-href-serie\":\"DESCUBRA LOS DATOS DE LA OCDE\",\"title-secondary-1\":\"\",\"title-secondary-2\":\"\",\"iframe-chart-1\":\"<div class='embed-responsive embed-responsive-16by9'><iframe src='https://data.oecd.org/chart/5SLS' width='860' height='645' style='border: 0' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true'><a href='https://data.oecd.org/chart/5SAE' target='_blank'>OECD Chart: Elderly population, Total, % of population, 1970 – 2014</a></iframe></div>\",\"title-2\":\"¿Cómo podemos proteger a los más vulnerables?\",\"iframe-chart-2\":\"<iframe src='https://data.oecd.org/chart/5TfH' width='100%' style='border: 0' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true'><a href='https://data.oecd.org/chart/5TfH' target='_blank'>OECD Chart: Elderly population, Total, % of population, Annual, 1970 – 2018</a></iframe>\",\"legend-href\":\"\",\"legend-verb\":\"Legend here\"}}}");

/***/ }),
/* 19 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"para-block\":{\"title\":\"New OECD outlook on the global economy\",\"title-secondary-1\":\"\",\"text-opener\":\"<p><span style='font-size:1.6em'><strong><i>Efforts to contain virus and save lives should be intensified, and governments should plan stronger, more co-ordinated measures to absorb growing economic blow</i></strong></span></p>\",\"data-ref-fr\":\"<a href='http://oe.cd/il/2Vn' style='font-size:1em' class='link key-facts__link' target='_blank' rel='noopener' alt='op-ed'>OECD SG's Statement at G20 Summit</a><br/>\",\"data-ref-es\":\"<a href='http://oe.cd/il/2VU' style='font-size:1em' class='link key-facts__link' target='_blank' rel='noopener' alt='op-ed'>Initial impact of COVID-19 containment measures</a>\",\"blk-para-1\":\"<p>Increasingly stringent containment measures, needed to slow the spread of the Coronavirus (Covid-19), will necessarily lead to significant short-term declines in GDP for many major economies, according to new OECD projections.</p><p>OECD Secretary General Angel Gurría, in preparation for the G20 Virtual Summit that took place yesterday, unveiled the <a class='text-primary' href='http://oe.cd/il/2VU'>latest OECD estimates</a> showing that the lockdown will directly affect sectors amounting to up to one third of GDP in the major economies. For each month of containment, there will be a loss of 2 percentage points in annual GDP growth. The tourism sector alone faces an output decrease as high as 70%.  Many economies will fall into recession. This is unavoidable, as we need to continue fighting the pandemic, while at the same time increasing efforts to be able to restore economic normality as fast as possible.</p><p><b>“The high costs that public health measures are imposing today are necessary to avoid much more tragic consequences and even worse impacts on our economies tomorrow,” Mr Gurría said, in his G20 Summit <a class='text-primary' href='http://oe.cd/il/2Vn'>Statement</a>. “Millions of deaths and collapsed health care systems will decimate us financially and as a society, so slowing this epidemic and saving human lives must be governments’ first priority.”</b></p><p><b>“Our analysis further underpins the need for sharper action to absorb the shock, and a more co-ordinated response by governments to maintain a lifeline to people, and a private sector that will emerge in a very fragile state when the health crisis is past.”</b></p><p>Mr. Gurría welcomed the outcome of the G20 Virtual Summit, hosted by the Saudi Presidency, and  the resolve shown by the G20 members to use all ammunition to support people and SMEs. In his statement, Mr Gurría built on his recent call for a “<a class='text-primary' href='http://oe.cd/il/2Vv'>global Marshall Plan</a>” to counteract the pandemic’s effects.  To “inoculate” economies to current and future shocks, he urged the G20 Leaders to act immediately, to:</p>\",\"blk-para-2\":\"<ul><li style='line-height: 1.5;'>Recapitalise health and epidemiological systems;</li><li style='line-height: 1.5;'>Mobilise all macro-economic levers: monetary, fiscal, and structural policies;</li><li style='line-height: 1.5;'>Lift existing trade restrictions especially on much needed medical supplies;</li><li style='line-height: 1.5;'>Provide support to vulnerable developing and low-income countries;</li><li style='line-height: 1.5;'>Share and implement best practices to support workers and all individuals, employed and unemployed – particularly the most vulnerable;</li><li style='line-height: 1.5;'>Keep businesses afloat, particularly small and medium-sized firms, with special support packages in hardest hit sectors such as tourism.</li></ul>\",\"blk-para-3\":\"<p>Mr Gurría stressed that the implications for annual GDP growth will ultimately depend on many factors, including the magnitude and duration of national shutdowns, the extent of reduced demand for goods and services in other parts of the economy, and the speed at which significant fiscal and monetary support takes effect.</p><p>In all economies, the majority of this impact comes from the hit to output in retail and wholesale trade, and in professional and real estate services. There are notable cross-country differences in some sectors, with closures of transport manufacturing relatively important in some countries, while the decline in tourist and leisure activities is relatively important in others.</p><p>The impact effect of business closures could result in reductions of 15% or more in the level of output throughout the advanced economies and major emerging-market economies. In the median economy, output would decline by 25%. </p><p>Variations in the impact effect across economies reflect differences in the composition of output. Many countries in which tourism is relatively important could potentially be affected more severely by shutdowns and limitations on travel. At the other extreme, countries with relatively sizeable agricultural and mining sectors, including oil production, may experience smaller initial effects from  containment measures, although output will be subsequently hit by reduced global commodity demand.</p><p>There will also be some variation in the timing of the initial impact on output across economies, reflecting differences in the timing and degree of containment measures. In China, the peak adverse impact on output is already past, with some shutdown measures now being eased.</p><p>The OECD has committed its expertise to support governments in developing  effective policies in any sector necessary to slow the pandemic’s spread and blunt its economic and societal effects – from health, taxes, labour and employment to SMEs, education, science and technology, trade and investment and more.</p>\",\"fig-1\":\"<img src='./img/text-box-fig-1.png' alt='chart'><div class='ssk-group social' data-title='Partial or complete shutdowns will be felt across the economy' data-text=' ➡️' data-url=''><div class='social__word' data-i18n='social-verb'>Share</div><a class='ssk ssk-twitter social__item social__item--twitter' href=''><img src='./img/twitter--green.svg' alt='Twitter'></a></div>\",\"fig-2\":\"<img src='./img/text-box-fig-2.png' alt='chart'><div class='ssk-group social' data-title='The initial impact of containment measures will be felt worldwide' data-text=' ➡️' data-url=''><div class='social__word' data-i18n='social-verb'>Share</div><a class='ssk ssk-twitter social__item social__item--twitter' href=''><img src='./img/twitter--green.svg' alt='Twitter'></a></div>\"}},\"fr\":{\"para-block\":{\"title\":\"Nouvelles perspectives de l'OCDE sur l'économie mondiale\",\"title-secondary-1\":\"\",\"text-opener\":\"<p><span style='font-size:1.6em'><strong><i>Il faut intensifier les efforts pour contenir le virus et sauver des vies et les gouvernements doivent prévoir des mesures plus fortes et mieux coordonnées afin d’absorber le choc économique croissant</i></strong></span></p>\",\"data-ref-fr\":\"<a href='http://oe.cd/il/2VI' style='font-size:1em' class='link key-facts__link' target='_blank' rel='noopener' alt='op-ed'>Déclaration du Secrétaire général au Sommet du G20 sur le COVID-19</a><br/>\",\"data-ref-es\":\"<a href='http://oe.cd/il/2VU' style='font-size:1em' class='link key-facts__link' target='_blank' rel='noopener' alt='op-ed'>Impact initial des mesures de confinement contre le Covid-19</a>\",\"blk-para-1\":\"<p>Les mesures d’endiguement de plus en plus strictes nécessaires pour ralentir la propagation du coronavirus (Covid-19) entraîneront nécessairement une baisse significative du PIB à court terme pour de nombreuses grandes économies, selon les nouvelles projections de l’OCDE.</p><p>En amont du sommet virtuel du G20 qui s’est tenu hier, le Secrétaire général de l’OCDE Angel Gurría a dévoilé les <a class='text-primary' href='http://oe.cd/il/2VU'>dernières estimations de l’OCDE</a>. Elles montrent que le confinement affectera directement les secteurs représentant jusqu’à un tiers du PIB dans les plus grandes économies. Chaque mois de confinement entraîne une perte de 2% dans la croissance du PIB annuel. Le secteur du tourisme est, à lui seul, exposé à une chute de l’activité qui s’élève à 70%. De nombreuses économies se dirigent vers une récession. Cela est inévitable dans la mesure où nous devons continuer à lutter contre la pandémie tout en mobilisant tous nos efforts afin de restaurer une activité économique normale dès que possible.</p><p><b>«&nbsp;Les coûts élevés imposés par les mesures de santé publique prises aujourd’hui sont nécessaires afin d’éviter des conséquences bien plus tragiques et un impact bien pire sur nos économies demain. », a dit M. Gurría dans sa <a class='text-primary' href='http://oe.cd/il/2VI'>Déclaration</a> au Sommet du G20. « Des millions de morts et l’effondrement des systèmes de santé nous décimeraient financièrement et en tant que société : la priorité des gouvernements est donc de ralentir cette épidémie et de sauver des vies humaines.&nbsp;»</b></p><p><b>«&nbsp;Comme le souligne notre analyse, il faut agir plus efficacement afin d’absorber le choc, et mieux coordonner la réponse des gouvernements afin d’offrir une bouée de sauvetage aux individus et à un secteur privé qui émergera de la crise sanitaire dans un état de grande fragilité.&nbsp;»</b></p><p>M. Gurría a salué les conclusions du sommet virtuel du G20, sous la présidence saoudienne, ainsi que la détermination des membres du G20 à utiliser toutes les armes pour soutenir les individus et les PME. Dans sa déclaration, M. Gurría s’appuie sur son appel récent en faveur d’un «&nbsp;<a class='text-primary' href='http://oe.cd/il/2V2'>Plan Marshall mondial</a>&nbsp;» afin de contrer les effets de la pandémie. Pour «&nbsp;inoculer&nbsp;» les économies contre ces chocs actuels et futurs, il a appelé les dirigeants du G20 à agir immédiatement afin de&nbsp;:</p>\",\"blk-para-2\":\"<ul><li style='line-height: 1.5;'>Recapitaliser les systèmes de santé et épidémiologiques&nbsp;;</li><li style='line-height: 1.5;'>Mobiliser tous les leviers macroéconomiques : politiques monétaires, fiscales et structurelles&nbsp;;</li><li style='line-height: 1.5;'>Lever les restrictions commerciales actuelles, en particulier pour les fournitures médicales particulièrement nécessaires&nbsp;;</li><li style='line-height: 1.5;'>Apporter un soutien aux pays en voie de développement et à faible revenu qui sont vulnérables&nbsp;;</li><li style='line-height: 1.5;'>Partager et mettre en œuvre les meilleures pratiques afin de soutenir les travailleurs et tous les individus, qu’ils aient un emploi ou pas – en particulier les plus vulnérables&nbsp;;</li><li style='line-height: 1.5;'>Maintenir les entreprises à flot, notamment les petites et moyennes entreprises, avec des programmes de soutien pour les secteurs les plus affectés tels que le tourisme.</li></ul>\",\"blk-para-3\":\"<p>M. Gurría a souligné que les implications pour la croissance du PIB annuel dépendront en fin de compte de nombreux facteurs, et notamment de l’ampleur et de la durée des fermetures nationales, de l’étendue de la réduction de la demande de biens et services dans d’autres secteurs de l’économie et de la vitesse à laquelle le soutien des politiques fiscales et monétaires prendra effet.</p><p>Dans toutes les économies, cet impact vient en grande partie du coup porté à la production du commerce de détail et de gros, ainsi que sur les services professionnels et immobiliers. Il existe des différences notables entre pays dans certains secteurs : l’arrêt de la production dans le domaine des transports est par exemple relativement important dans certains pays, tandis que le déclin des activités touristiques et de loisirs est relativement important dans d’autres. L’impact des fermetures d’entreprises pourrait entraîner une réduction de 15% ou plus du niveau de production dans les économies avancées et les principales économies de marché émergentes. Dans l’économie médiane, la production déclinerait de 25%.</p><p>Les variations de l'effet d'impact d'une économie à l'autre reflètent les différences dans la composition de la production. De nombreux pays dans lesquels le tourisme est relativement important pourraient être plus sévèrement touchés par les fermetures et les limitations de voyages. À l'autre extrême, les pays dont les secteurs agricole et minier sont relativement importants, y compris la production pétrolière, pourraient subir des effets initiaux plus faibles en raison des mesures d'endiguement, bien que la production soit ensuite touchée par la réduction de la demande mondiale de produits de base.</p><p>Le calendrier de l’impact initial sur la production variera selon les économies, reflétant les différences dans le calendrier et le degré des mesures d’endiguement. En Chine, le pic de l’impact négatif sur la production est déjà passé, et certaines mesures d’arrêt sont en train d’être assouplies.</p><p>L’OCDE a mobilisé son expertise pour aider les gouvernements à élaborer des politiques efficaces dans tous les secteurs nécessaires pour ralentir la propagation de la pandémie et en atténuer les effets économiques et sociétaux dans bien des domaines : santé, fiscalité, travail et emploi, PME, éducation, science et technologie, échanges, investissement etc. Grâce à sa toute nouvelle plateforme lancée en réponse à la crise, l’OCDE fournit en temps utile des données, analyses, conseil et solutions, ainsi que des informations sur les réponses apportées par les pays à travers le monde.</p><p>Pour de plus amples informations, vous êtes invités à contacter la Division des médias de l’OCDE.</p><p><i>Coopérant avec plus d'une centaine de pays, l'OCDE est un forum stratégique international qui promeut des politiques visant à améliorer le bien-être économique et social des populations dans le monde entier.</i></p>\",\"fig-1\":\"<img src='./img/text-box-fig-1-fr.png' alt='chart'><div class='ssk-group social' data-title='Les confinements partiels ou complets auront un impact sur l'ensemble de l'economie' data-text=' ➡️' data-url=''><div class='social__word' data-i18n='social-verb'>Share</div><a class='ssk ssk-twitter social__item social__item--twitter' href=''><img src='./img/twitter--green.svg' alt='Twitter'></a></div>\",\"fig-2\":\"<img src='./img/text-box-fig-2-fr.png' alt='chart'><div class='ssk-group social' data-title='L'impact initial des mesures de confinement se fera sentir dans le monde entier' data-text=' ➡️' data-url=''><div class='social__word' data-i18n='social-verb'>Share</div><a class='ssk ssk-twitter social__item social__item--twitter' href=''><img src='./img/twitter--green.svg' alt='Twitter'></a></div>\"}},\"es\":{\"para-block\":{\"title\":\"La OCDE actualiza sus perspectivas para la economía mundial\",\"title-secondary-1\":\"\",\"text-opener\":\"<p><span style='font-size:1.6em'><strong><i>Los esfuerzos para contener el virus y salvar vidas han de intensificarse. Los gobiernos deben planificar medidas más fuertes y coordinadas para absorber el creciente impacto económico.</i></strong></span></p>\",\"data-ref-fr\":\"<a href='http://oe.cd/il/2VH' style='font-size:1em' class='link key-facts__link' target='_blank' rel='noopener' alt='op-ed'>Declaración del Secretario General en la cumbre del G20</a><br/>\",\"data-ref-es\":\"<a href='http://oe.cd/il/2VU' style='font-size:1em' class='link key-facts__link' target='_blank' rel='noopener' alt='op-ed'>Impacto inicial de las medidas de contención del COVID-19</a>\",\"blk-para-1\":\"<p>Según las nuevas proyecciones de la OCDE, las medidas de contención cada vez más estrictas y necesarias para frenar la propagación del coronavirus (COVID-19) darán lugar a corto plazo a importantes disminuciones del PIB en muchas de las principales economías.</p><p>El Secretario General de la OCDE, Ángel Gurría, dio a conocer las <a class='text-primary' href='http://oe.cd/il/2VU'>últimas estimaciones de la Organización</a> para la cumbre virtual del G20 que tuvo lugar ayer. Dichas estimaciones muestran que el confinamiento afectará directamente a sectores que representan hasta un tercio del PIB en las principales economías. Por cada mes de contención, habrá una pérdida de 2 puntos porcentuales en el crecimiento anual del PIB. El sector del turismo, por sí solo, se enfrenta a una disminución de hasta el 70% en su actividad. Muchas economías entrarán en recesión. Esto es inevitable, ya que tenemos que seguir luchando contra la pandemia, pero al mismo tiempo hemos de enfocar nuestros esfuerzos para poder restaurar la normalidad económica lo más rápido posible.</p><p><b>“Los altos costes que las medidas de salud pública requieren hoy son necesarios para evitar consecuencias mucho más trágicas y un impacto aún mayor en nuestras economías mañana”, afirmó el Sr. Gurría en su <a class='text-primary' href='http://oe.cd/il/2VH'>declaración</a> en la Cumbre del G20. “Millones de muertes y el colapso de los sistemas de salud nos diezmarían financieramente, y también como sociedad. Por ello, frenar esta epidemia y salvar vidas humanas debe ser la prioridad principal de los gobiernos.”</b></p><p><b>“Nuestro análisis subraya aún más la necesidad de actuar con mayor firmeza para amortiguar el golpe, con una respuesta más coordinada de los gobiernos para lanzar una tabla de salvación a las personas y al sector privado, que resurgirá muy debilitado cuando la crisis sanitaria haya pasado.”</b></p><p> El Sr. Gurría valoró positivamente el resultado de la cumbre virtual del G20, auspiciada por la presidencia saudita, y la determinación mostrada por los miembros del G20 para utilizar todos los recursos que sean necesarios para apoyar a las personas y las pymes. En su declaración, el Sr. Gurría desarrolló su reciente llamado a un “<a class='text-primary' href='http://oe.cd/il/2V4'>Plan Marshall Mundial</a>” para contrarrestar los efectos de la pandemia. Para “inmunizar” a los ciudadanos frente a futuras crisis, instó a los líderes del G20 a actuar de manera inmediata, a fin de:</p>\",\"blk-para-2\":\"<ul><li style='line-height: 1.5;'>Recapitalizar los sistemas sanitarios y epidemiológicos;</li><li style='line-height: 1.5;'>Movilizar todas las palancas macroeconómicas: políticas monetarias, fiscales y estructurales;</li><li style='line-height: 1.5;'>Levantar las restricciones comerciales existentes, especialmente en lo que respecta a los suministros médicos tan necesarios;</li><li style='line-height: 1.5;'>Apoyar a los países vulnerables en desarrollo y de bajos ingresos;</li><li style='line-height: 1.5;'>Compartir y aplicar las mejores prácticas para apoyar a los trabajadores y a todas las personas, empleadas o desempleadas, en particular a los más vulnerables;</li><li style='line-height: 1.5;'>Mantener a flote las empresas, en particular las pequeñas y medianas empresas, con paquetes de apoyo especiales para los sectores más afectados, como el turismo.</li></ul>\",\"blk-para-3\":\"<p>El Sr. Gurría subrayó que las consecuencias para el crecimiento anual del PIB dependerán de muchos factores, entre ellos la magnitud y la duración de los confinamientos nacionales, el alcance de la reducción de la demanda de bienes y servicios en otras partes de la economía, y la rapidez con que surta efecto el apoyo de las políticas fiscales y monetarias.</p><p>En todas las economías, la mayor parte de este impacto proviene del golpe a la actividad del comercio minorista y mayorista, y en los servicios profesionales e inmobiliarios. Hay diferencias notables entre los países en algunos sectores: los cierres de plantas de fabricación para el transporte tienen un peso relativamente importante en algunos países, mientras que la disminución en el turismo y las actividades de ocio pesa más en otros.</p><p>El efecto del cierre de empresas podría dar lugar a reducciones del 15% o más en el nivel de producción en todas las economías avanzadas y en las principales economías de mercado emergentes. En la economía mediana, la producción disminuiría en un 25%.</p><p>El efecto de este impacto varía en las distintas economías, reflejando las diferencias sectoriales en la composición de la producción. Aquellos países en los que el turismo es relativamente importante podrían verse afectados con mayor severidad por los cierres y las limitaciones en los viajes. En el otro extremo, los países con sectores agrícolas y mineros relativamente importantes, así como los países productores de petróleo, pueden experimentar unos efectos iniciales más reducidos por causa de las medidas de contención, pero la producción se verá afectada posteriormente por la reducción en la demanda mundial de materias primas.</p><p>También habrá algunas variaciones en las distintas economías con respecto a los tiempos del impacto inicial sobre la producción, reflejando las diferencias en el momento y en la severidad de las medidas de contención adoptadas. En China, el pico de impacto negativo en la producción ya ha pasado, y ahora se están suavizando algunas de las medidas de confinamiento.</p><p>La OCDE se ha comprometido a apoyar a los gobiernos para formular políticas eficaces en cualquier sector para frenar la propagación de la pandemia y mitigar sus efectos económicos y sociales: desde la salud, los impuestos y el empleo, hasta las pymes, la educación, la ciencia y la tecnología, el comercio y la inversión, entre otros.  En respuesta a la crisis, la OCDE ha puesto en marcha una plataforma que proporciona datos y análisis oportunos y exhaustivos, así como información sobre las medidas políticas tomadas por países de todo el mundo.</p><p>Para más información póngase en contacto la Oficina de relaciones con los medios de la OCDE.</p><p>La OCDE es un foro de política mundial, que trabaja con más de 100 países y promueve políticas para mejorar el bienestar económico y social de las personas en todo el mundo.</p>\",\"fig-1\":\"<img src='./img/text-box-fig-1-es.png' alt='chart'><div class='ssk-group social' data-title='El impacto de los confinamientos totales o parciales se sentira en toda la economfa' data-text=' ➡️' data-url=''><div class='social__word' data-i18n='social-verb'>Share</div><a class='ssk ssk-twitter social__item social__item--twitter' href=''><img src='./img/twitter--green.svg' alt='Twitter'></a></div>\",\"fig-2\":\"<img src='./img/text-box-fig-2-es.png' alt='chart'><div class='ssk-group social' data-title='El impacto de las medidas de confinamiento se sentira en todo el mundo' data-text=' ➡️' data-url=''><div class='social__word' data-i18n='social-verb'>Share</div><a class='ssk ssk-twitter social__item social__item--twitter' href=''><img src='./img/twitter--green.svg' alt='Twitter'></a></div>\"}}}");

/***/ }),
/* 20 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"compare-your-country\":{\"title\":\"Coronavirus data <span class='title--highlight'>in real-time</span>\",\"img-src-1\":\"\",\"iframe-src\":\"https://coronaviruswatch.ircai.org/?country=All&dashboard=evolution\"}},\"fr\":{\"compare-your-country\":{\"title\":\"La situation économique se stabilisait avant Covid-19\",\"img-src-1\":\"https://www.oecd.org/perspectives-economiques/mars-2020/img/keydata-1fr.png\",\"iframe-src\":\"https://data.oecd.org/chart/5PLB\"}},\"es\":{\"compare-your-country\":{\"title\":\"La situación económica se estaba estabilizando antes de Covid-19\",\"img-src-1\":\"https://www.oecd.org/perspectivas-economicas/marzo-2020/img/keydata-1es.png\",\"iframe-src\":\"https://data.oecd.org/chart/5PLB\"}}}");

/***/ }),
/* 21 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"key-topics\":{\"title\":\"<span class='title--highlight'>Resources</span>\",\"tile-1-href\":\"https://sdg-pathfinder.org/focus/coronavirus\",\"tile-1-title\":\"Cross IGO content\",\"tile-2-href\":\"https://data.oecd.org/health.htm\",\"tile-2-title\":\"Data portal\",\"tile-3-href\":\"http://www.oecdbetterlifeindex.org/\",\"tile-3-title\":\"Better Life Index \",\"tile-4-href\":\"http://www.data4sdgs.org/resources/covid-19-resources\",\"tile-4-title\":\"Global Partnership for Sustainable Development Data\",\"tile-5-href\":\"https://hundred.org/en/collections/quality-education-for-all-during-coronavirus\",\"tile-5-title\":\"Quality Education for All during Coronavirus\",\"tile-6-href\":\"\",\"tile-6-title\":\"\",\"tiles-learn-more\":\"Learn More\"}},\"fr\":{\"key-topics\":{\"title\":\"<span class='title--highlight'>Ressources</span>\",\"tile-1-href\":\"https://sdg-pathfinder.org/focus/coronavirus\",\"tile-1-title\":\"Contenus issus d’OIG\",\"tile-2-href\":\"https://data.oecd.org/health.htm\",\"tile-2-title\":\"Portail de données\",\"tile-3-href\":\"http://www.oecdbetterlifeindex.org/fr/\",\"tile-3-title\":\"Indicateur du vivre mieux\",\"tile-4-href\":\"http://www.data4sdgs.org/resources/covid-19-resources\",\"tile-4-title\":\"Global Partnership for Sustainable Development Data\",\"tile-5-href\":\"https://hundred.org/en/collections/quality-education-for-all-during-coronavirus\",\"tile-5-title\":\"Quality Education for All during Coronavirus\",\"tile-6-href\":\"\",\"tile-6-title\":\"\",\"tiles-learn-more\":\"En savoir plus\"}},\"es\":{\"key-topics\":{\"title\":\"<span class='title--highlight'>Recursos</span>\",\"tile-1-href\":\"https://sdg-pathfinder.org/focus/coronavirus\",\"tile-1-title\":\"Contenidos de distintas organizaciones internacionales\",\"tile-2-href\":\"https://data.oecd.org/health.htm\",\"tile-2-title\":\"Portal de datos\",\"tile-3-href\":\"http://www.oecdbetterlifeindex.org/es/\",\"tile-3-title\":\"Índice para una Vida Mejor\",\"tile-4-href\":\"http://www.data4sdgs.org/resources/covid-19-resources\",\"tile-4-title\":\"Alianza Global de Datos para el Desarrollo Sostenible\",\"tile-5-href\":\"https://hundred.org/en/collections/quality-education-for-all-during-coronavirus\",\"tile-5-title\":\"Quality Education for All during Coronavirus\",\"tile-6-href\":\"\",\"tile-6-title\":\"\",\"tiles-learn-more\":\"Más información\"}}}");

/***/ }),
/* 22 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"text-blockquote\":{\"title\":\"What will be the impacts on the <span class='title--highlight'>global economy?</span>\",\"cite-link\":\"https://ocde.org\",\"cite-date\":\"2 March 2020\",\"cite-para\":\"The world economy is in its most precarious position since the global financial crisis\",\"cite-name\":\"Laurence Boone, OECD Chief Economist\",\"cite-src\":\"https://oecdecoscope.blog/2020/03/02/tackling-the-fallout-from-the-coronavirus/\",\"no-title--cite-link\":\"https://ocde.org\",\"no-title--cite-date\":\"\",\"no-title--cite-para\":\"I have no title\",\"no-title--cite-src\":\"Laurence Boone, OECD Chief Economist\",\"white--cite-link\":\"https://ocde.org/economy\",\"white--cite-date\":\"july 2018\",\"white--cite-para\":\"\",\"white--cite-src\":\"#OECDEconomicOutlook, https://www.oecd.org/\"}},\"fr\":{\"text-blockquote\":{\"title\":\"FR title <span class='title--highlight'>title</span>\",\"cite-link\":\"https://ocde.org\",\"cite-date\":\"FR date000\",\"cite-para\":\"FR citation\",\"cite-src\":\"FR source\",\"no-title--cite-link\":\"https://ocde.org\",\"no-title--cite-date\":\"FR December 2018\",\"no-title--cite-para\":\"J'ai pas de titre\",\"no-title--cite-src\":\"https://www.oecd-ilibrary.org/\",\"white--cite-link\":\"https://ocde.org/economie\",\"white--cite-date\":\"Juillet 2018\",\"white--cite-para\":\"Mon txt est blanc\",\"white--cite-src\":\"FR #OECDEconomicOutlook, https://www.oecd.org/\"}},\"es\":{\"text-blockquote\":{\"title\":\"ES  <span class='title--highlight'>title</span>\",\"cite-link\":\"https://ocde.org\",\"cite-date\":\"ES date 2018\",\"cite-para\":\"ES  citation\",\"cite-src\":\"ES source https://www.oecd-ilibrary.org/\",\"no-title--cite-link\":\"EShttps://ocde.org\",\"no-title--cite-date\":\"ES December 2018\",\"no-title--cite-para\":\"ES I have no title\",\"no-title--cite-src\":\"ES https://www.oecd-ilibrary.org/\",\"white--cite-link\":\"ES https://ocde.org/economy\",\"white--cite-date\":\"ES july 2018\",\"white--cite-para\":\"ES I'm white\",\"white--cite-src\":\"ES #OECDEconomicOutlook, https://www.oecd.org/\"}}}");

/***/ }),
/* 23 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"text-block\":{\"title-blk\":\"<b>My title here or short sentence,</b> e.g.<br>  The OECD Economic Outlook is the OECD's twice-yearly analysis of the major economic trends and prospects for the next two years.\",\"link-href\":\"https://www.oecd-ilibrary.org/\",\"link-text\":\"Read more\"}},\"fr\":{\"text-block\":{\"title-blk\":\"FR Mon titre/texte ici\",\"link-href\":\"https://www.oecd-ilibrary.org/\",\"link-text\":\"FR label\"}},\"es\":{\"text-block\":{\"title-blk\":\"ES <b>My title here or short sentence,</b>\",\"link-href\":\"https://www.oecd-ilibrary.org/\",\"link-text\":\"ES Read more\"}}}");

/***/ }),
/* 24 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"video-block\":{\"title\":\"Videos\",\"title-secondary-1\":\"\",\"text-1\":\"Watch the  video (<a href='https://www.francetvinfo.fr/replay-radio/l-interview-eco/coronavirus-laurence-boone-ocde-attend-des-mesures-budgetaires-tres-rapides_3842587.html'>France info</a>)\",\"iframe-live-video\":\"<iframe frameborder='0' width='640' height='360' src='https://www.dailymotion.com/embed/video/x7so1xx' allowfullscreen allow='autoplay'></iframe>\",\"src-href-vid1\":\"https://www.facebook.com/konbininews/videos/517565932468039/\",\"label-href-vid1\":\"KONBINI: Laurence Boone on the impact of COVID-19 on the economy of France. 20 March 2020\",\"src-href-vid2\":\"https://oecdcomms-mediahub.keepeek.com/#/media?id=119608&context=folder-search&entity=4612\",\"label-href-vid2\":\"EURONEWS: Laurence Boone on the impact of COVID- 19 on the European economy. 18 March 2020\",\"src-href-vid3\":\"https://oecdcomms-mediahub.keepeek.com/#/media?id=119659&context=folder-search&entity=4609\",\"label-href-vid3\":\"BBC HARDtalk: Laurence Boone, is enough being done to prevent a recession?\",\"iframe-video-1\":\"<iframe width=560 height=349 src=https://player.cnbc.com/p/gZWlPC/cnbc_global?playertype=synd&byGuid=7000127986 frameborder=0 scrolling=no allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen ></iframe>\",\"iframe-video-cite-1\":\"CNBC:  “Life and the economy will not be normalized soon”, OECD Secretary-General Angel Gurría, 23 March 2020\",\"iframe-video-2\":\"<iframe src='https://oecdcomms-mediahub.keepeek.com/pm4wLjj6of' style='border: 0' width='100%' height='100%' frameborder='0' allowfullscreen></iframe>\",\"iframe-video-cite-2\":\"EURONEWS: Laurence Boone on the impact of COVID-19 on the European economy. 18 March 2020\",\"iframe-video-3\":\"<iframe src='https://oecdcomms-mediahub.keepeek.com/pm0h7Hj4re' style='border: 0' width='100%' height='100%' frameborder='0' allowfullscreen></iframe>\",\"iframe-video-cite-3\":\"Deutsche Welle News: OECD Secretary-General Angel Gurría calls for joint action on the Coronavirus crisis, 23 March 2020\"}},\"fr\":{\"video-block\":{\"title\":\"Vidéos\",\"title-secondary-1\":\"\",\"text-1\":\"Regardez la conférence de presse avec Laurence Boone, Chef économiste de l'OCDE.\",\"iframe-video-1\":\"<iframe width=560 height=349 src=https://player.cnbc.com/p/gZWlPC/cnbc_global?playertype=synd&byGuid=7000127986 frameborder=0 scrolling=no allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen ></iframe>\",\"iframe-video-cite-1\":\"CNBC:  “Life and the economy will not be normalized soon”, OECD Secretary-General Angel Gurría, 23 March 2020\",\"iframe-video-2\":\"<iframe src='https://oecdcomms-mediahub.keepeek.com/pm4wLjj6of' style='border: 0' width='100%' height='100%' frameborder='0' allowfullscreen></iframe>\",\"iframe-video-cite-2\":\"EURONEWS: Laurence Boone on the impact of COVID-19 on the European economy. 18 March 2020\",\"iframe-video-3\":\"<iframe src='https://oecdcomms-mediahub.keepeek.com/pm0h7Hj4re' style='border: 0' width='100%' height='100%' frameborder='0' allowfullscreen></iframe>\",\"iframe-video-cite-3\":\"Deutsche Welle News: OECD Secretary-General Angel Gurría calls for joint action on the Coronavirus crisis, 23 March 2020\"}},\"es\":{\"video-block\":{\"title\":\"Videos\",\"title-secondary-1\":\"\",\"text-1\":\"Vea la conferencia de prensa con Laurence Boone, economista jefe de la OCDE.\",\"iframe-video-1\":\"<iframe width=560 height=349 src=https://player.cnbc.com/p/gZWlPC/cnbc_global?playertype=synd&byGuid=7000127986 frameborder=0 scrolling=no allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen ></iframe>\",\"iframe-video-cite-1\":\"CNBC: “La vida y la economía no se normalizarán pronto”, Secretario General de la OCDE, Ángel Gurría, 23 de marzo de 2020. Video en inglés.\",\"iframe-video-2\":\"<iframe src='https://oecdcomms-mediahub.keepeek.com/pm4wLjj6of' style='border: 0' width='100%' height='100%' frameborder='0' allowfullscreen></iframe>\",\"iframe-video-cite-2\":\"EURONEWS: Laurence Boone acerca del impacto del COVID-19 sobre la economía europea. 18 de marzo de 2020. Video en inglés.\",\"iframe-video-3\":\"<iframe src='https://oecdcomms-mediahub.keepeek.com/pm0h7Hj4re' style='border: 0' width='100%' height='100%' frameborder='0' allowfullscreen></iframe>\",\"iframe-video-cite-3\":\"Deutsche Welle Noticias: el secretario general de la OCDE Angel Gurría llama a actuar en conjunto en la crisis del coronavirus, 23 de marzo de 2020. Video en inglés.\"}}}");

/***/ }),
/* 25 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"video-regular-ns\":{\"title\":\"Coronavirus data <span class='title--highlight'>in real-time</span>\",\"title-secondary-1\":\"\",\"text-1\":\"Coronavirus COVID-19 Global Cases\",\"cite-1\":\"by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University\",\"data-href-1\":\"https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6\",\"data-href-label-1\":\"Discover\",\"text-2\":\"Coronavirus spread visualisation\",\"cite-2\":\"by the OECD and JSI using EventRegistry and WHO data\",\"data-href-2\":\"https://www.oecd.ai/covid\",\"data-href-label-2\":\"Discover\"}},\"fr\":{\"video-regular-ns\":{\"title\":\"Coronavirus : Les données <span class='title--highlight'>en temps réel</span>\",\"title-secondary-1\":\"\",\"text-1\":\"Nombre d'infections au coronavirus COVID-19 à travers le monde\",\"cite-1\":\"Center for Systems Science and Engineering (CSSE) de l'université Johns Hopkins\",\"data-href-1\":\"https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6\",\"data-href-label-1\":\"Découvrez\",\"text-2\":\"Visualisation de la propagation du coronavirus\",\"cite-2\":\"OCDE et JSI avec les données de l’OMS et d’EventRegistry\",\"data-href-2\":\"https://www.oecd.ai/covid\",\"data-href-label-2\":\"Découvrez\"}},\"es\":{\"video-regular-ns\":{\"title\":\"Datos sobre el coronavirus <span class='title--highlight'> en tiempo real</span>\",\"title-secondary-1\":\"\",\"text-1\":\"Casos de coronavirus COVID-19\",\"cite-1\":\"según el Centro de Ciencia e Ingeniería de Sistemas (CSSE) de la Universidad Johns Hopkins.\",\"data-href-1\":\"https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6\",\"data-href-label-1\":\"Explorar\",\"text-2\":\"Visualización de la difusión del coronavirus COVID-19 \",\"cite-2\":\"según el Centro de Ciencia e Ingeniería de Sistemas (CSSE) de la Universidad Johns Hopkins.\",\"data-href-2\":\"https://www.oecd.ai/covid\",\"data-href-label-2\":\"Explorar\"}}}");

/***/ }),
/* 26 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"featured-block\":{\"title\":\"(EN) <span class='title--highlight'>Featured</span>stories\",\"text-1\":\"(EN) Paragraph paragraph\",\"list-items\":\"<li>(EN) Trade</li><li>Growth</li><li>Stock</li><li>Markets</li>\"}},\"fr\":{\"featured-block\":{\"title\":\"(FR) <span class='title--highlight'>Titre</span> ici\",\"text-1\":\"(FR) Paragraph paragraph\",\"list-items\":\"<li>(FR) Trade</li><li>Growth</li><li>Stock</li><li>Markets</li>\"}},\"es\":{\"featured-block\":{\"title\":\"(ES) <span class='title--highlight'>Global growth</span>is slow\",\"text-1\":\"(ES) Paragraph paragraph\",\"list-items\":\"<li>(ES) Trade</li><li>Growth</li><li>Stock</li><li>Markets</li>\"}}}");

/***/ }),
/* 27 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"key-facts-block\":{\"title-facts\":\"How resilient were the healthcare systems in Europe <span class='title--highlight'>before the pandemic hit?</span>\",\"label-1\":\"Read More\",\"para-intro\":\"The capacity of countries to cope with the impacts of the coronavirus depends heavily on the state of their health systems. Here’s a 2019 overview of the health systems in Europe (with the European Observatory on Health Systems and Policies, in co-operation with the European Commission).\",\"data-href-serie\":\"https://doi.org/10.1787/25227041\",\"label-href-serie\":\"Discover all reports\",\"para-1\":\"The number of doctors per population in Italy is higher than the OECD average, but one in six are aged over 65. The number of hospital beds is below the OECD average.\",\"data-href-1\":\"https://www.oecd-ilibrary.org/deliver/cef1e5cb-en.pdf?itemId=%2Fcontent%2Fpublication%2Fcef1e5cb-en&mimeType=pdf\",\"img-href-1\":\"./img/Italy-en.png\",\"data-contry-href-1\":\"https://data.oecd.org/italy.htm#profile-health\",\"country-label-1\":\"Country statistical profile\",\"para-2\":\"The number of doctors per population in Spain is higher than the OECD average, whereas the number of nurses is below average. The number of hospital beds is also below OECD average.\",\"data-href-2\":\"https://www.oecd-ilibrary.org/deliver/8f834636-en.pdf?itemId=%2Fcontent%2Fpublication%2F8f834636-en&mimeType=pdf\",\"img-href-2\":\"./img/Spain-en.png\",\"data-contry-href-2\":\"https://data.oecd.org/spain.htm#profile-health\",\"country-label-2\":\"Country statistical profile\",\"para-3\":\"The number of hospital beds and health professionals in Germany is among the highest in OECD countries, hence there is a stronger capacity to respond to public health emergencies.\",\"data-href-3\":\"https://www.oecd-ilibrary.org/deliver/36e21650-en.pdf?itemId=%2Fcontent%2Fpublication%2F36e21650-en&mimeType=pdf\",\"img-href-3\":\"./img/Germany-en.png\",\"data-contry-href-3\":\"https://data.oecd.org/germany.htm#profile-health\",\"country-label-3\":\"Country statistical profile\",\"para-4\":\"The number of doctors per population in France is below the OECD average. There are wide geographic disparities in the density of doctors, with some regions facing greater shortages.\",\"data-href-4\":\"https://www.oecd-ilibrary.org/deliver/d74dbbda-en.pdf?itemId=%2Fcontent%2Fpublication%2Fd74dbbda-en&mimeType=pdf\",\"img-href-4\":\"./img/France-en.png\",\"data-contry-href-4\":\"https://data.oecd.org/france.htm#profile-health\",\"country-label-4\":\"Country statistical profile\",\"para-5\":\"Shortages of health workers are a key challenge and the UK also has a relatively small hospital capacity compared to other OECD countries.\",\"data-href-5\":\"https://www.oecd-ilibrary.org/deliver/744df2e3-en.pdf?itemId=%2Fcontent%2Fpublication%2F744df2e3-en&mimeType=pdf\",\"img-href-5\":\"./img/UK-en.png\",\"data-contry-href-5\":\"https://data.oecd.org/united-kingdom.htm#profile-health\",\"country-label-5\":\"Country statistical profile\"}},\"fr\":{\"key-facts-block\":{\"title-facts\":\"Quelle était la résilience des systèmes de santé en Europe <span class='title--highlight'>avant le déclenchement</span> <span class='title--highlight'>de la pandémie&nbsp;?</span>\",\"label-1\":\"En savoir plus\",\"para-intro\":\"La capacité des pays à faire face aux conséquences du coronavirus dépend fortement de l'état de leurs systèmes de santé. Voici un aperçu des systèmes de santé en Europe en 2019 (avec l’Observatoire européen des systèmes et des politiques de santé, en coopération avec la Commission européenne).\",\"data-href-serie\":\"https://doi.org/10.1787/25227041\",\"label-href-serie\":\"Découvrez tous les rapports en anglais\",\"para-1\":\"Le nombre de médecins par habitant en France est inférieur à la moyenne de l'OCDE. Il existe de grandes disparités géographiques dans la densité des médecins, certaines régions étant confrontées à des pénuries plus importantes.\",\"data-href-1\":\"https://www.oecd-ilibrary.org/docserver/1abb0fea-fr.pdf?expires=1585131011&id=id&accname=ocid84004878&checksum=483DE796CA9F4D633F7A81EEF1A68398\",\"img-href-1\":\"./img/France-fr.png\",\"data-contry-href-1\":\"https://data.oecd.org/france.htm#profile-health\",\"country-label-1\":\"Profil par pays\",\"para-2\":\"Le nombre de médecins par habitant en Italie est supérieur à la moyenne de l'OCDE, mais un sur six a plus de 65 ans. Le nombre de lits d'hôpital est inférieur à la moyenne de l'OCDE.\",\"data-href-2\":\"https://www.oecd-ilibrary.org/deliver/cef1e5cb-en.pdf?itemId=%2Fcontent%2Fpublication%2Fcef1e5cb-en&mimeType=pdf\",\"img-href-2\":\"./img/Italy-en.png\",\"data-contry-href-2\":\"https://data.oecd.org/italy.htm#profile-health\",\"country-label-2\":\"Profil par pays\",\"para-3\":\"Le nombre de médecins par habitant en Espagne est supérieur à la moyenne de l'OCDE, tandis que le nombre d'infirmiers est inférieur à la moyenne. Le nombre de lits d'hôpitaux est également inférieur à la moyenne de l'OCDE.\",\"data-href-3\":\"https://www.oecd-ilibrary.org/deliver/8f834636-en.pdf?itemId=%2Fcontent%2Fpublication%2F8f834636-en&mimeType=pdf\",\"img-href-3\":\"./img/Spain-en.png\",\"data-contry-href-3\":\"https://data.oecd.org/spain.htm#profile-health\",\"country-label-3\":\"Profil par pays\",\"para-4\":\"Le nombre de lits d'hôpitaux et de professionnels de la santé en Allemagne est parmi les plus élevés des pays de l'OCDE, d'où une plus grande capacité à répondre aux urgences de santé publique.\",\"data-href-4\":\"https://www.oecd-ilibrary.org/deliver/36e21650-en.pdf?itemId=%2Fcontent%2Fpublication%2F36e21650-en&mimeType=pdf\",\"img-href-4\":\"./img/Germany-en.png\",\"data-contry-href-4\":\"https://data.oecd.org/germany.htm#profile-health\",\"country-label-4\":\"Profil par pays\",\"para-5\":\"La pénurie de personnel de santé est un défi majeur et le Royaume-Uni a également une capacité hospitalière relativement faible par rapport aux autres pays de l'OCDE.\",\"data-href-5\":\"https://www.oecd-ilibrary.org/deliver/744df2e3-en.pdf?itemId=%2Fcontent%2Fpublication%2F744df2e3-en&mimeType=pdf\",\"img-href-5\":\"./img/UK-en.png\",\"data-contry-href-5\":\"https://data.oecd.org/united-kingdom.htm#profile-health\",\"country-label-5\":\"Profil par pays\"}},\"es\":{\"key-facts-block\":{\"title-facts\":\"¿Cuán resistentes eran los sistemas de salud en Europa <span class='title--highlight'>antes de la pandemia?</span>\",\"label-1\":\"Leer más\",\"para-intro\":\"La capacidad de los países para hacer frente a los impactos del coronavirus depende en gran medida del estado de sus sistemas de salud. Aquí presentamos una visión general de los sistemas de salud de Europa en 2019 (trabajo conjunto de la OCDE y el Observatorio Europeo de Sistemas y Políticas de Salud, en cooperación con la Comisión Europea).\",\"data-href-serie\":\"https://doi.org/10.1787/25227041\",\"label-href-serie\":\"Descubra todos los informes en inglés\",\"para-1\":\"El número de médicos por habitantes en España es superior a la media de la OCDE, mientras que el número de personal de enfermería está por debajo de la media. El número de camas de hospital también está por debajo de la media de la OCDE.\",\"data-href-1\":\"https://www.oecd-ilibrary.org/deliver/2a8a83c8-es.pdf?itemId=%2Fcontent%2Fpublication%2F8f834636-es&mimeType=pdf\",\"img-href-1\":\"./img/Spain-es.png\",\"data-contry-href-1\":\"https://data.oecd.org/spain.htm#profile-health\",\"country-label-1\":\"Perfil estadístico del país\",\"para-2\":\"El número de médicos por habitantes en Italia es superior al promedio de la OCDE, pero uno de cada seis tiene más de 65 años. El número de camas de hospital está por debajo de la media de la OCDE.\",\"data-href-2\":\"https://www.oecd-ilibrary.org/deliver/cef1e5cb-en.pdf?itemId=%2Fcontent%2Fpublication%2Fcef1e5cb-en&mimeType=pdf\",\"img-href-2\":\"./img/Italy-en.png\",\"data-contry-href-2\":\"https://data.oecd.org/italy.htm#profile-health\",\"country-label-2\":\"Perfil estadístico del país\",\"para-3\":\"El número de camas de hospital y profesionales de la salud en Alemania es uno de los más altos de los países de la OCDE, por lo que existe una mayor capacidad para responder a las emergencias de salud pública.\",\"data-href-3\":\"https://www.oecd-ilibrary.org/deliver/36e21650-en.pdf?itemId=%2Fcontent%2Fpublication%2F36e21650-en&mimeType=pdf\",\"img-href-3\":\"./img/Germany-en.png\",\"data-contry-href-3\":\"https://data.oecd.org/germany.htm#profile-health\",\"country-label-3\":\"Perfil estadístico del país\",\"para-4\":\"El número de médicos por habitantes en Francia está por debajo de la media de la OCDE. Existen grandes disparidades geográficas en la densidad de médicos, y algunas regiones enfrentan una mayor escasez que otras.\",\"data-href-4\":\"https://www.oecd-ilibrary.org/deliver/d74dbbda-en.pdf?itemId=%2Fcontent%2Fpublication%2Fd74dbbda-en&mimeType=pdf\",\"img-href-4\":\"./img/France-en.png\",\"data-contry-href-4\":\"https://data.oecd.org/france.htm#profile-health\",\"country-label-4\":\"Perfil estadístico del país\",\"para-5\":\"Reino Unido: La escasez de trabajadores sanitarios es un desafío clave. El Reino Unido también tiene una capacidad hospitalaria relativamente pequeña en comparación con otros países de la OCDE.\",\"data-href-5\":\"https://www.oecd-ilibrary.org/deliver/744df2e3-en.pdf?itemId=%2Fcontent%2Fpublication%2F744df2e3-en&mimeType=pdf\",\"img-href-5\":\"./img/UK-en.png\",\"data-contry-href-5\":\"https://data.oecd.org/united-kingdom.htm#profile-health\",\"country-label-5\":\"Perfil estadístico del país\"}}}");

/***/ }),
/* 28 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"key-facts2\":{\"title-facts\":\"Key policy <span class='title--highlight'>responses from the OECD</span>\",\"para-intro\":\"The OECD is compiling data, analysis and recommendations on a range of topics to address the emerging health, economic and societal crisis, facilitate co-ordination, and contribute to the necessary global action when confronting this enormous collective challenge. This new series brings together policy responses spanning a large range of topics, from health to education and taxes, providing guidance on the short-term measures needed in affected sectors and a specific focus on the vulnerable sectors of society and the economy. Beyond immediate responses, the content aims to provide analysis on the longer-term consequences and impacts, paving the way to recovery with co-ordinated policy responses across countries.\",\"title-evaluating\":\"Initial impact of&nbsp;COVID-19 containment measures\",\"data-href-evaluating-20\":\"http://oe.cd/il/2VU\",\"label-evaluating-1\":\"Read more\",\"title-env\":\"Environmental policy\",\"data-img-href-20\":\"./img/env.png\",\"data-href-env-20\":\"http://oe.cd/il/2VS\",\"label-env-20\":\"Environmental responses to the COVID-19 pandemic\",\"title-flattening\":\"Health policy\",\"data-img-href-10\":\"./img/flattening.jpg\",\"label-flattening-101\":\"Containment and mitigation measures \",\"href-flattening-101\":\"http://oe.cd/il/2VC\",\"label-flattening-102\":\"Health system responses\",\"href-flattening-102\":\"http://oe.cd/il/2VA\",\"title-financial\":\"Financial policy\",\"data-img-href-11\":\"./img/financial.jpg\",\"data-href-financial-11\":\"http://oe.cd/il/2VE\",\"label-financial-11\":\"Financial consumer protection responses to COVID-19\",\"title-tourism\":\"Tourism policy\",\"data-img-href-12\":\"./img/tourism.jpg\",\"data-href-tourism-12\":\"http://oe.cd/il/2VD\",\"label-tourism-12\":\"COVID-19: Tourism policy responses\",\"title-edu-responses\":\"Education policy\",\"data-img-href-1\":\"./img/edu-responses.png\",\"label-edu-responses-1\":\"Education Responses to Covid-19\",\"data-href-edu-responses-1\":\"http://oe.cd/il/2Vy\",\"label-edu-responses-2\":\"SOME LESSONS FROM TALIS\",\"data-href-edu-responses-2\":\"https://www.oecd-forum.org/badges/1420-tackling-covid-19/posts/63740-how-can-teachers-and-school-systems-respond-to-the-covid-19-pandemic-some-lessons-from-talis\",\"label-edu-responses-3\":\"EDUCATION RESPONDING TO THE CORONAVIRUS\",\"data-href-edu-responses-3\":\"https://oecdedutoday.com/education-responding-coronavirus-pandemic/\",\"title-sme\":\"SME policy\",\"data-img-href-2\":\"./img/cfe.jpg\",\"label-1\":\"COVID-19: SME POLICY RESPONSE\",\"para-1\":\"\",\"data-href-1\":\"http://oe.cd/il/2VB\",\"share-text-1\":\"\",\"title-esp\":\"Employment and social policy\",\"data-img-href-3\":\"./img/empl-social-pol-response-card-image-1.png\",\"label-data-13\":\"TUAC and BIAC joint statement\",\"data-href-esp-13\":\"http://oe.cd/il/2W3\",\"label-esp\":\"SUPPORTING PEOPLE AND COMPANIES TO DEAL WITH THE COVID-19\",\"href-esp\":\"http://oe.cd/il/2Vx\",\"title-health\":\"Health systems policy\",\"data-img-href-4\":\"./img/health-pol-response-card-image-1.png\",\"label-health\":\"Read more\",\"href-health\":\"http://oe.cd/il/2V9\",\"title-tax\":\"Tax policy\",\"data-img-href-5\":\"./img/tax.png\",\"label-tax-11\":\"TAX ADMINISTRATION RESPONSES: SUPPORT TO TAXPAYERS\",\"href-tax-11\":\"http://oe.cd/il/2VP\",\"label-tax-10\":\"TAX ADMINISTRATION RESPONSES: BUSINESS CONTINUITY\",\"href-tax-10\":\"http://oe.cd/il/2VQ\",\"label-tax-1\":\"Emergency tax policy\",\"href-tax-1\":\"http://oe.cd/il/2V8\",\"label-tax-2\":\"Tax administration responses\",\"href-tax-2\":\"http://oe.cd/il/2Vz\",\"label-tax-3\":\"Tax in the time of Covid-19\",\"href-tax-3\":\"https://www.oecd-forum.org/users/369395-pascal-saint-amans/posts/63721-tax-in-the-time-of-covid-19\",\"title-regional\":\"Policy responses in Africa\",\"data-img-href-6\":\"./img/reg.png\",\"data-href-regional-1\":\"https://oecd-development-matters.org/2020/03/17/when-covid-19-comes-to-africa/\",\"label-regional-1\":\"When COVID-19 Comes to Africa\"}},\"fr\":{\"key-facts2\":{\"title-facts\":\"Réponses clés <span class='title--highlight'>proposées par l'OCDE</span>\",\"para-intro\":\"L'OCDE va de l’avant et formule des propositions d'adaptation et de changement.\",\"title-evaluating\":\"Impact initial des mesures de confinement contre le Covid&#8209;19\",\"data-href-evaluating-20\":\"http://oe.cd/il/2VU\",\"label-evaluating-1\":\"En savoir plus\",\"title-env\":\"Politique environnementale\",\"data-img-href-20\":\"./img/env.png\",\"data-href-env-20\":\"http://oe.cd/il/2VS\",\"label-env-20\":\"En savoir plus\",\"title-flattening\":\"Politiques des systèmes de santé\",\"data-img-href-10\":\"./img/flattening.jpg\",\"label-flattening-101\":\"Mesures de confinement et d'atténuation\",\"href-flattening-101\":\"http://oe.cd/il/2Vf\",\"label-flattening-102\":\"Réponses des systèmes de santé\",\"href-flattening-102\":\"http://oe.cd/il/2V9\",\"title-financial\":\"Politique en faveur des finances\",\"data-img-href-11\":\"./img/financial.jpg\",\"data-href-financial-11\":\"http://oe.cd/il/2Vh\",\"label-financial-11\":\"COVID-19 : Réponses liées à la protection financière des consommateurs\",\"title-tourism\":\"Politique en faveur du tourisme\",\"data-img-href-12\":\"./img/tourism.jpg\",\"data-href-tourism-12\":\"http://oe.cd/il/2Vg\",\"label-tourism-12\":\"Réponses liées aux politiques du tourisme\",\"title-edu-responses\":\"Réponses de l'éducation\",\"data-img-href-1\":\"./img/edu-responses.png\",\"data-href-edu-responses-1\":\"http://oe.cd/il/2V6\",\"label-edu-responses-1\":\"Réponses de l'éducation au Covid-19\",\"label-edu-responses-2\":\"LEÇONS DE TALIS\",\"data-href-edu-responses-2\":\"https://www.oecd-forum.org/badges/1420-tackling-covid-19/posts/63740-how-can-teachers-and-school-systems-respond-to-the-covid-19-pandemic-some-lessons-from-talis\",\"label-edu-responses-3\":\"RÉPONSES DE L'ÉDUCATION AU CORONAVIRUS\",\"data-href-edu-responses-3\":\"https://oecdedutoday.com/education-responding-coronavirus-pandemic/\",\"title-sme\":\"Politiques en faveur des PME\",\"data-img-href-2\":\"./img/cfe.jpg\",\"label-1\":\"En savoir plus\",\"para-1\":\"\",\"data-href-1\":\"http://oe.cd/il/2Va\",\"share-text-1\":\"\",\"title-esp\":\"Politiques de l’emploi et politiques sociales\",\"data-img-href-3\":\"./img/empl-social-pol-response-card-image-1.png\",\"label-data-13\":\"Déclaration conjointe de TUAC et BIAC\",\"data-href-esp-13\":\"http://oe.cd/il/2W3\",\"label-esp\":\"En savoir plus\",\"href-esp\":\"http://oe.cd/il/2V5\",\"title-tax\":\"Politiques fiscales\",\"data-img-href-5\":\"./img/tax.png\",\"label-tax-11\":\"RÉPONSES DE L'ADMINISTRATION FISCALE : SOUTIEN AUX CONTRIBUABLES\",\"href-tax-11\":\"http://oe.cd/il/2VP\",\"label-tax-10\":\"RÉPONSES DE L'ADMINISTRATION FISCALE : CONTINUITÉ DE L'ACTIVITÉ\",\"href-tax-10\":\"http://oe.cd/il/2VQ\",\"label-tax-1\":\"Politiques fiscales d'urgence\",\"href-tax-1\":\"http://oe.cd/il/2VO\",\"label-tax-2\":\"Réponses de l'administration fiscale à COVID-19\",\"href-tax-2\":\"http://oe.cd/il/2VR\",\"label-tax-3\":\"Les taxes à l'ère du COVID-19\",\"href-tax-3\":\"https://www.oecd-forum.org/users/369395-pascal-saint-amans/posts/63721-tax-in-the-time-of-covid-19\",\"title-regional\":\"Réponses politiques en Afrique\",\"data-img-href-6\":\"./img/reg.png\",\"data-href-regional-1\":\"https://oecd-development-matters.org/2020/03/17/when-covid-19-comes-to-africa/\",\"label-regional-1\":\"Quand le COVID-19 arrive en Afrique\"}},\"es\":{\"key-facts2\":{\"title-facts\":\"Medidas políticas <span class='title--highlight'>clave de la OCDE </span>\",\"para-intro\":\"La OCDE está avanzando con propuestas de adaptación y cambio.\",\"title-evaluating\":\"Impacto inicial de las medidas de contención del COVID-19\",\"data-href-evaluating-20\":\"http://oe.cd/il/2VU\",\"label-evaluating-1\":\"Leer más\",\"title-env\":\"Política medioambiental\",\"data-img-href-20\":\"./img/env.png\",\"data-href-env-20\":\"http://oe.cd/il/2VS\",\"label-env-20\":\"Leer más\",\"title-flattening\":\"Política de sanidad\",\"data-img-href-10\":\"./img/flattening.jpg\",\"label-flattening-101\":\"MEDIDAS DE CONTENCIÓN Y MITIGACIÓN \",\"href-flattening-101\":\"http://oe.cd/il/2Vf\",\"label-flattening-102\":\"RESPUESTAS DEL SISTEMA DE SANIDAD\",\"href-flattening-102\":\"http://oe.cd/il/2V9\",\"title-financial\":\"Políticas fiscales\",\"data-img-href-11\":\"./img/financial.jpg\",\"data-href-financial-11\":\"http://oe.cd/il/2Vh\",\"label-financial-11\":\"Medidas para la protección económica del consumidor frente al COVID-19\",\"title-tourism\":\"Políticas para el turismo\",\"data-img-href-12\":\"./img/tourism.jpg\",\"data-href-tourism-12\":\"http://oe.cd/il/2Vg\",\"label-tourism-12\":\"COVID-19. Respuestas para políticas de turismo\",\"title-edu-responses\":\"Política educativa\",\"data-img-href-1\":\"./img/edu-responses.png\",\"data-href-edu-responses-1\":\"http://oe.cd/il/2V6\",\"label-edu-responses-1\":\"Respuestas educativas al COVID-19\",\"label-edu-responses-2\":\"ALGUNAS LECCIONES DE TALIS\",\"data-href-edu-responses-2\":\"https://www.oecd-forum.org/badges/1420-tackling-covid-19/posts/63740-how-can-teachers-and-school-systems-respond-to-the-covid-19-pandemic-some-lessons-from-talis\",\"label-edu-responses-3\":\"RESPUESTAS DE LA EDUCACIÓN AL CORONAVIRUS\",\"data-href-edu-responses-3\":\"https://oecdedutoday.com/education-responding-coronavirus-pandemic/\",\"title-sme\":\"Política para pymes\",\"data-img-href-2\":\"./img/cfe.jpg\",\"label-1\":\"Leer más\",\"para-1\":\"\",\"data-href-1\":\"http://oe.cd/il/2Va\",\"share-text-1\":\"\",\"title-esp\":\"Política laboral y social\",\"data-img-href-3\":\"./img/empl-social-pol-response-card-image-1.png\",\"label-data-13\":\"Declaración conjunta de TUAC y BIAC\",\"data-href-esp-13\":\"http://oe.cd/il/2W3\",\"label-esp\":\"Leer más\",\"href-esp\":\"http://oe.cd/il/2V5\",\"title-tax\":\"Política fiscal\",\"data-img-href-5\":\"./img/tax.png\",\"label-tax-11\":\"RESPUESTAS DE LA ADMINISTRACIÓN FISCAL: APOYO A LOS CONTRIBUYENTES\",\"href-tax-11\":\"http://oe.cd/il/2VP\",\"label-tax-10\":\"RESPUESTAS DE LA ADMINISTRACIÓN FISCAL: CONTINUIDAD DE LA ACTIVIDAD\",\"href-tax-10\":\"http://oe.cd/il/2VQ\",\"label-tax-1\":\"Leer la política fiscal de emergencia\",\"href-tax-1\":\"http://oe.cd/il/2V8\",\"label-tax-2\":\"Respuestas de la administración fiscal\",\"href-tax-2\":\"http://oe.cd/il/2V7\",\"label-tax-3\":\"Fiscalidad en tiempos de coronavirus\",\"href-tax-3\":\"https://www.oecd-forum.org/users/369395-pascal-saint-amans/posts/63721-tax-in-the-time-of-covid-19\",\"title-regional\":\"Respuestas políticas en África \",\"data-img-href-6\":\"./img/reg.png\",\"data-href-regional-1\":\"https://oecd-development-matters.org/2020/03/17/when-covid-19-comes-to-africa/\",\"label-regional-1\":\"Cuando el coronavirus llega a África\"}}}");

/***/ }),
/* 29 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"publications--economic\":{\"title\":\"<span class='title--highlight'>Key resources</span>\",\"cover-href\":\"https://doi.org/10.1787/7969896b-en\",\"cover-src\":\"img/cover-health.jpeg\",\"cover-alt\":\"Book - Health at a Glance: Europe 2018\",\"intro-title\":\"Health at a Glance: Europe 2018<br>State of Health in the EU Cycle\",\"intro-title2\":\"Bringing health care to the patient<br>An overview of the use of telemedicine in OECD countries\",\"intro-texte\":\"\",\"button-read-the-report-href\":\"http://www.oecd.org/health/health-at-a-glance-europe-23056088.htm\",\"button-read-the-report-text\":\"Health at a Glance\",\"button-focus-href\":\"https://www.oecd-ilibrary.org/social-issues-migration-health/bringing-health-care-to-the-patient_8e56ede7-en\",\"button-focus-text\":\"READ THE wORKING PAPER\",\"link-items-1-href\":\"https://oecdtv.webtv-solution.com/6318/en/press_interim_economic_outlook.html\",\"link-items-1-text\":\"Press Conference\",\"link-items-2-href\":\"http://www.oecd.org/economy/global-economy-faces-gravest-threat-since-the-crisis-as-coronavirus-spreads.htm\",\"link-items-2-text\":\"Press release\",\"link-items-3-href\":\"http://www.oecd.org/economy/outlook/previous-releases/\",\"link-items-3-text\":\"Previous edition\"}},\"fr\":{\"publications--economic\":{\"title\":\"<span class='title--highlight'>Références</span>\",\"cover-href\":\"https://doi.org/10.1787/0262bc62-fr\",\"cover-src\":\"img/publications-key-resources-fr.jpg\",\"cover-alt\":\"Livre - Perspective economique de l'OECD Rapport intermédiaire mars 2020\",\"intro-title\":\"PERSPECTIVES ÉCONOMIQUES DE L’OCDE,<br>Rapport intermédiaire mars 2020\",\"intro-texte\":\"\",\"button-read-the-report-href\":\"https://doi.org/10.1787/0262bc62-fr\",\"button-read-the-report-text\":\"LIRE LE REPORT\",\"button-focus-href\":\"https://oecdecoscope.blog/2020/03/02/coronavirus-leconomie-mondiale-menacee/\",\"button-focus-text\":\"LIRE LE BLOG\",\"link-items-1-href\":\"https://oecdtv.webtv-solution.com/6318/fr/press_interim_economic_outlook.html\",\"link-items-1-text\":\"CONFÉRENCE DE PRESSE\",\"link-items-2-href\":\"http://www.oecd.org/fr/economie/leconomie-mondiale-est-confrontee-a-une-menace-sans-precedent-depuis-la-crise-tandis-que-le-coronavirus-se-propage.htm\",\"link-items-2-text\":\"REVUE DE PRESSE\",\"link-items-3-href\":\"http://www.oecd.org/fr/economie/perspectives/versions-anterieures/\",\"link-items-3-text\":\"VERSIONS ANTÉRIEURES\"}},\"es\":{\"publications--economic\":{\"title\":\"Referencias\",\"cover-href\":\"https://doi.org/10.1787/7969896b-en\",\"cover-src\":\"img/publications-key-resources.jpg\",\"cover-alt\":\"Informe - Perspectivas de la OECD\",\"intro-title\":\"PERSPECTIVAS ECONÓMICAS PROVISIONALES DE LA OCDE,<br>Marzo 2020\",\"intro-texte\":\"\",\"button-read-the-report-href\":\"https://doi.org/10.1787/7969896b-en\",\"button-read-the-report-text\":\"Lee el informe\",\"button-focus-href\":\"https://oecdecoscope.blog/2020/03/02/tackling-the-fallout-from-the-coronavirus/\",\"button-focus-text\":\"Lee el blog\",\"link-items-1-href\":\"https://oecdtv.webtv-solution.com/6318/en/press_interim_economic_outlook.html\",\"link-items-1-text\":\"Conferencia de prensa\",\"link-items-2-href\":\"http://www.oecd.org/economy/global-economy-faces-gravest-threat-since-the-crisis-as-coronavirus-spreads.htm\",\"link-items-2-text\":\"COMUNICADO DE PRENSA\",\"link-items-3-href\":\"http://www.oecd.org/economy/outlook/previous-releases/\",\"link-items-3-text\":\"EDICIONES ANTERIORES\"}}}");

/***/ }),
/* 30 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"podcast\":{\"podcast-title\":\"[EN] <class='title--highlight'>podcast</span> title\",\"podcast-para-1\":\"[EN] This episode of OECD Podcasts investigates.\",\"podcast-href\":\"//w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/578424357&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true\"}},\"fr\":{\"podcast\":{\"podcast-title\":\"[FR] - Podcast title\",\"podcast-para-1\":\"[FR] This episode of OECD Podcasts investigates.\",\"podcast-href\":\"//w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/578424357&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true\"}},\"es\":{\"podcast\":{\"podcast-title\":\"[ES]- Podcast title\",\"podcast-para-1\":\"[ES] This episode of OECD Podcasts investigates.\",\"podcast-href\":\"//w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/578424357&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true\"}}}");

/***/ }),
/* 31 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"credits-id\":{\"para-1\":\"<i>Photo credits ©:   Shutterstock</i>\"}},\"fr\":{\"credits-id\":{\"para-1\":\"<i>Crédits photos ©&nbsp;: Shutterstock</i>\"}},\"es\":{\"credits-id\":{\"para-1\":\"<i>Photo credits ©:  Shutterstock</i>\"}}}");

/***/ }),
/* 32 */
/***/ (function(module) {

/*module.exports = JSON.parse("{\"en\":{\"footer\":{\"site-map-href\":\"https://www.oecd.org/sitemap/\",\"site-map-text\":\"Site Map\",\"contact-us-href\":\"https://www.oecd.org/contact/\",\"contact-us-text\":\"Contact Us\",\"copyright-1\":\"© 2019 Organisation for Economic\",\"copyright-2\":\"Co-operation and Development\",\"terms-href\":\"https://www.oecd.org/termsandconditions/\",\"terms-text\":\"Terms and Conditions\",\"privacy-href\":\"https://www.oecd.org/privacy/\",\"privacy-text\":\"Privacy Policy\",\"follow-us-href\":\"http://www.oecd.org/social-media/\",\"follow-us-text\":\"Follow us (Social Media):\"}},\"fr\":{\"footer\":{\"site-map-href\":\"http://www.oecd.org/fr/plandusite/\",\"site-map-text\":\"Plan du site\",\"contact-us-href\":\"http://www.oecd.org/fr/contact/\",\"contact-us-text\":\"Contactez-nous\",\"copyright-1\":\"© 2019 L'Organisation de coopération\",\"copyright-2\":\"et de développement économiques\",\"terms-href\":\"http://www.oecd.org/fr/conditionsdutilisation/\",\"terms-text\":\"Conditions d'utilisation\",\"privacy-href\":\"https://www.oecd.org/privacy/\",\"privacy-text\":\"Politique de protection des données et de la vie privée\",\"follow-us-href\":\"http://www.oecd.org/social-media/\",\"follow-us-text\":\"Suivez-nous (médias sociaux):\"}},\"es\":{\"footer\":{\"site-map-href\":\"https://www.oecd.org/sitemap/\",\"site-map-text\":\"Site Map \",\"contact-us-href\":\"https://www.oecd.org/contact/\",\"contact-us-text\":\"Contact Us \",\"copyright-1\":\"© 2019 Organisation for Economic \",\"copyright-2\":\"Co-operation and Development \",\"terms-href\":\"https://www.oecd.org/termsandconditions/\",\"terms-text\":\"Terms and Conditions \",\"privacy-href\":\"https://www.oecd.org/privacy/\",\"privacy-text\":\"Privacy Policy \",\"follow-us-href\":\"http://www.oecd.org/social-media/\",\"follow-us-text\":\"Follow us (Social Media): \"}}}");*/

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _header_top_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var _header_top_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_top_scss__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Agence'O - header-top
 * @author Guillaume Bouillon (Agence'O)
 * @created 09/04/2019
 */
 // Burger toggle

$(document).on('click', '.header-top__nav__toggle', function (e) {
  e.preventDefault();
  $(e.currentTarget).toggleClass('is-open');
  $('.header-top__nav').toggleClass('is-open is-hidden');
}); // Submenu toggle

$(document).on('click', '.header-top__nav__link--toggle', function (e) {
  e.preventDefault();
  $(e.currentTarget).parent().toggleClass('is-open').find('.header-top__subnav').toggleClass('is-open visually-hidden');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _main_nav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _main_nav_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_nav_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Agence'O - main-nav
 * @author Guillaume Bouillon (Agence'O)
 * @created 09/04/2019
 */


$('.url-en').attr('href', _config__WEBPACK_IMPORTED_MODULE_1___default.a.urls.en);
$('.url-fr').attr('href', _config__WEBPACK_IMPORTED_MODULE_1___default.a.urls.fr);
$('.url-es').attr('href', _config__WEBPACK_IMPORTED_MODULE_1___default.a.urls.es); // main navigation toggle action

$(document).on('click', '.main-nav__toggle', function (e) {
  $(e.currentTarget).toggleClass('is-open');
  $('.main-nav').toggleClass('is-open');
}); // search-bar toggle action

$(document).on('click', '.main-nav__search-bar__toggle', function (e) {
  $(e.currentTarget).toggleClass('open');
  $('.main-nav__search-bar').toggleClass('open').slideToggle();
});
$(document).on('click', '.main-nav__link--toggle', function (e) {
  // Click on toggle button
  e.preventDefault();
  $('.main-nav__item').not($(e.currentTarget).parent()).removeClass('is-current').find('.main-nav__list').removeClass('is-open');
  $(e.currentTarget).parent().toggleClass('is-current').find('.main-nav__list').toggleClass('is-open');
  e.stopPropagation();
}).on('click', function () {
  // Click outside
  $('.main-nav__item').removeClass('is-current');
  $('.main-nav__list').removeClass('is-open');
}); // Tabs mouseover actions

$('.main-nav__list__item').first().addClass('is-open');
$(document).on('mouseover', '.main-nav__list__link', function (e) {
  $('.main-nav__list__item').removeClass('is-open');
  $(e.currentTarget).parent().addClass('is-open');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var selectric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var selectric__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(selectric__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _key_facts_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(136);
/* harmony import */ var _key_facts_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_key_facts_scss__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Agence'O - key-facts
 * @author Guillaume Bouillon (Agence'O)
 * @created 01/04/2019
 */





var twitterImg = __webpack_require__(43);

var countryIndicatorData = __webpack_require__(44);

var countryIndicatorFrData = __webpack_require__(45);

var projectionByCountryData = __webpack_require__(46); // On document (DOM) ready


$(function () {
  var countryData = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.orderBy(countryIndicatorData, ['name']);

  var countryFrData = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.orderBy(countryIndicatorFrData, ['name']);

  var projectionByCountry = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.orderBy(projectionByCountryData, ['name']);

  var filterData = [];
  var filterFrData = [];
  var filterEconomic = []; // Build Country indicators Block markup

  if ($('#js-key-facts-2[data-lang="en"]').length) {
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(countryData, function (country, index) {
      var container = buildSlide(country);
      var wrapper = $('#js-key-facts-2[data-lang="en"] .key-facts__content')[0];
      wrapper.appendChild(container); // Build filter options

      if (filterData[country.name[0].toLowerCase()] === undefined) {
        filterData[country.name[0].toLowerCase()] = index;
        var filter = $('#js-key-facts-2-filter[data-lang="en"]')[0];
        var filterOption = document.createElement('option');
        filterOption.value = index;
        filterOption.textContent = country.name[0].toUpperCase();
        filter.appendChild(filterOption);
      }
    });
  }

  if ($('#js-key-facts-2[data-lang="fr"]').length) {
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(countryFrData, function (country, index) {
      var container = buildSlide(country);
      var wrapper = $('#js-key-facts-2[data-lang="fr"] .key-facts__content')[0];
      wrapper.appendChild(container); // Build filter options

      if (filterFrData[country.name[0].toLowerCase()] === undefined) {
        filterFrData[country.name[0].toLowerCase()] = index;
        var filter = $('#js-key-facts-2-filter[data-lang="fr"]')[0];
        var filterOption = document.createElement('option');
        filterOption.value = index;
        filterOption.textContent = country.name[0].toUpperCase();
        filter.appendChild(filterOption);
      }
    });
  }

  if ($('#js-key-facts-2--economic[data-lang="en"]').length) {
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(projectionByCountry, function (country, index) {
      console.log(country);
      var container = buildSlide(country);
      var wrapper = $('#js-key-facts-2--economic[data-lang="en"] .key-facts__content')[0];
      wrapper.appendChild(container); // Build filter options

      if (filterEconomic[country.name[0].toLowerCase()] === undefined) {
        filterEconomic[country.name[0].toLowerCase()] = index;
        var filter = $('#js-key-facts-2-filter--economic[data-lang="en"]')[0];
        var filterOption = document.createElement('option');
        filterOption.value = index;
        filterOption.textContent = country.name[0].toUpperCase();
        filter.appendChild(filterOption);
      }
    });
  } // Apply slider to markup


  $('.key-facts__content').each(function (index, item) {
    var slider = $(item);
    slider.slick({
      infinite: false,
      autoplay: false,
      lazyLoad: 'progressive',
      swipeToSlide: true,
      mobileFirst: true,
      dots: false,
      slidesToShow: 1,
      prevArrow: '<button class="slider__control slider__control--prev"><span class="visually-hidden">prev</span></button>',
      nextArrow: '<button class="slider__control slider__control--next"><span class="visually-hidden">next</span></button>',
      appendArrows: slider.parent().find('.slider__controls'),
      arrows: true,
      // the magic
      responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      }]
    });
  });
  $('.filter').selectric().on('change', function (e) {
    var slideIndex = $(e.currentTarget).val();
    var lastSlide = $('#js-key-facts-2 .slick-slide').length - 1;
    var tmp = parseInt(slideIndex) + 1;

    if (tmp != lastSlide) {
      $('#js-key-facts-2 .key-facts__content').slick('slickGoTo', parseInt(slideIndex));
      $('#js-key-facts-2--economic .key-facts__content').slick('slickGoTo', parseInt(slideIndex));
    } else {
      $('#js-key-facts-2 .key-facts__content').slick('slickGoTo', parseInt(slideIndex) - 1);
      $('#js-key-facts-2--economic .key-facts__content').slick('slickGoTo', parseInt(slideIndex) - 1);
    }
  });
});
/**
 * Build single slide
 * @param country
 * @return {HTMLElement}
 */

function buildSlide(country) {
  // Create the iframe
  var container = document.createElement('div');
  container.className = 'key-facts__slide';
  container.dataset.letter = country.name[0].toLowerCase();
  container.textContent = country.name;
  var content = document.createElement('iframe');
  content.src = country.src;
  content.frameBorder = 0;
  content.lazyload = 'on';
  container.appendChild(content);
  var contentLink = document.createElement('a');
  contentLink.textContent = country.title;
  contentLink.href = country.src;
  content.appendChild(contentLink); //
  // Create the link div

  var linksContainer = document.createElement('div');
  linksContainer.className = 'key-facts__link-box';
  container.appendChild(linksContainer);

  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(country.links, function (linkData) {
    var link = document.createElement('a');
    link.className = 'link key-facts__link';
    link.textContent = linkData.title;
    link.href = linkData.url;
    link.target = '_blank';
    link.rel = 'noopener';
    linksContainer.appendChild(link);
  }); // Create the social div


  var socialContainer = document.createElement('div');
  socialContainer.className = 'ssk-group social';
  container.appendChild(socialContainer);

  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(country.social, function (socialData) {
    // Add data for sharing
    socialContainer.setAttribute('data-title', socialData.dataTitle);
    socialContainer.setAttribute('data-text', socialData.dataText);
    socialContainer.setAttribute('data-url', socialData.dataUrl); // Add share word

    var social = document.createElement('div');
    social.className = 'social__word';
    social.textContent = 'Share';
    socialContainer.appendChild(social); // Add all social networks

    var socialPicto = document.createElement('a');
    socialPicto.className = 'ssk ssk-twitter social__item social__item--twitter';
    socialPicto.href = '';
    var picto = document.createElement('img');
    picto.alt = 'Twitter';
    picto.src = twitterImg;
    socialPicto.appendChild(picto);
    socialContainer.appendChild(socialPicto);
    linksContainer.appendChild(socialContainer);
  });

  return container;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/twitter--red.svg";

/***/ }),
/* 44 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Germany\",\"src\":\"https://data.oecd.org/chart/5xyY\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[{\"title\":\"Ländernotiz\",\"url\":\"http://www.oecd.org/germany/Employment-Outlook-Germany-DE.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/germany/Employment-Outlook-Germany-EN.pdf\"}]},{\"name\":\"United States\",\"src\":\"https://data.oecd.org/chart/5xzf\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/unitedstates/Employment-Outlook-UnitedStates-EN.pdf\"}]},{\"name\":\"France\",\"src\":\"https://data.oecd.org/chart/5xzi\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[{\"title\":\"Note pays\",\"url\":\"http://www.oecd.org/fr/france/Employment-Outlook-France-FR.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/france/Employment-Outlook-France-EN.pdf\"}]},{\"name\":\"Canada\",\"src\":\"https://data.oecd.org/chart/5xzo\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/canada/Employment-Outlook-Canada-EN.pdf\"},{\"title\":\"Note pays\",\"url\":\"http://www.oecd.org/fr/canada/Employment-Outlook-Canada-FR.pdf\"}]},{\"name\":\"Spain\",\"src\":\"https://data.oecd.org/chart/5xzs\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[{\"title\":\"Nota país\",\"url\":\"http://www.oecd.org/spain/Employment-Outlook-Spain-ES.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/spain/Employment-Outlook-Spain-EN.pdf\"}]},{\"name\":\"Australia\",\"src\":\"https://data.oecd.org/chart/5xzz\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/australia/Employment-Outlook-Australia-EN.pdf\"}]},{\"name\":\"Austria\",\"src\":\"https://data.oecd.org/chart/5xzB\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[{\"title\":\"Ländernotiz\",\"url\":\"http://www.oecd.org/austria/Employment-Outlook-Austria-DE.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/austria/Employment-Outlook-Austria-EN.pdf\"}]},{\"name\":\"Belgium\",\"src\":\"https://data.oecd.org/chart/5xzE\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Chile\",\"src\":\"https://data.oecd.org/chart/5xzF\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Colombia\",\"src\":\"https://data.oecd.org/chart/5xzI\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Czech Republic\",\"src\":\"https://data.oecd.org/chart/5xzK\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Denmark\",\"src\":\"https://data.oecd.org/chart/5xzM\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Estonia\",\"src\":\"https://data.oecd.org/chart/5xzP\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Finland\",\"src\":\"https://data.oecd.org/chart/5xzR\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Greece\",\"src\":\"https://data.oecd.org/chart/5xA0\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Hungary\",\"src\":\"https://data.oecd.org/chart/5xA3\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Iceland\",\"src\":\"https://data.oecd.org/chart/5xA7\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Ireland\",\"src\":\"https://data.oecd.org/chart/5xA5\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Israel\",\"src\":\"https://data.oecd.org/chart/5xAa\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Italy\",\"src\":\"https://data.oecd.org/chart/5xAd\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[{\"title\":\"Nota paese\",\"url\":\"http://www.oecd.org/italy/Employment-Outlook-Italy-IT.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/italy/Employment-Outlook-Italy-EN.pdf\"}]},{\"name\":\"Japan\",\"src\":\"https://data.oecd.org/chart/5xAf\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[{\"title\":\"Country note (Japanese)\",\"url\":\"http://www.oecd.org/japan/Employment-Outlook-Japan-JP.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/japan/Employment-Outlook-Japan-EN.pdf\"}]},{\"name\":\"Korea\",\"src\":\"https://data.oecd.org/chart/5xAh\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[{\"title\":\"Country note (Korean)\",\"url\":\"http://www.oecd.org/korea/Employment-Outlook-Korea-KO.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/korea/Employment-Outlook-Korea-EN.pdf\"}]},{\"name\":\"Lithuania\",\"src\":\"https://data.oecd.org/chart/5xAj\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Luxembourg\",\"src\":\"https://data.oecd.org/chart/5xAm\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Latvia\",\"src\":\"https://data.oecd.org/chart/5xAo\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Mexico\",\"src\":\"https://data.oecd.org/chart/5xAq\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[{\"title\":\"Nota país\",\"url\":\"http://www.oecd.org/mexico/Employment-Outlook-Mexico-ES.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/mexico/Employment-Outlook-Mexico-EN.pdf\"}]},{\"name\":\"Netherlands\",\"src\":\"https://data.oecd.org/chart/5xAs\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Norway\",\"src\":\"https://data.oecd.org/chart/5xAu\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Poland\",\"src\":\"https://data.oecd.org/chart/5wnI\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Portugal\",\"src\":\"https://data.oecd.org/chart/5wnK\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Slovak Republic\",\"src\":\"https://data.oecd.org/chart/5wnM\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Slovenia\",\"src\":\"https://data.oecd.org/chart/5wnO\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Sweden\",\"src\":\"https://data.oecd.org/chart/5xAx\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Switzerland\",\"src\":\"https://data.oecd.org/chart/5xAA\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"Turkey\",\"src\":\"https://data.oecd.org/chart/5xAC\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"South Africa\",\"src\":\"https://data.oecd.org/chart/5wnV\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[]},{\"name\":\"United Kingdom\",\"src\":\"https://data.oecd.org/chart/5xzV\",\"title\":\"OECD Chart: Employment rate, Total, % of working age population, Annual, 2008 – latest\",\"links\":[{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/unitedkingdom/Employment-Outlook-UnitedKingdom-EN.pdf\"}]}]");

/***/ }),
/* 45 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Allemagne\",\"src\":\"https://data.oecd.org/chart/5xFG\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[{\"title\":\"Ländernotiz\",\"url\":\"http://www.oecd.org/germany/Employment-Outlook-Germany-DE.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/germany/Employment-Outlook-Germany-EN.pdf\"}]},{\"name\":\"États-Unis\",\"src\":\"https://data.oecd.org/chart/5xFM\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/unitedstates/Employment-Outlook-UnitedStates-EN.pdf\"}]},{\"name\":\"France\",\"src\":\"https://data.oecd.org/chart/5xFP\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[{\"title\":\"Note pays\",\"url\":\"http://www.oecd.org/fr/france/Employment-Outlook-France-FR.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/france/Employment-Outlook-France-EN.pdf\"}]},{\"name\":\"Canada\",\"src\":\"https://data.oecd.org/chart/5xFT\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/canada/Employment-Outlook-Canada-EN.pdf\"},{\"title\":\"Note pays\",\"url\":\"http://www.oecd.org/fr/canada/Employment-Outlook-Canada-FR.pdf\"}]},{\"name\":\"Espagne\",\"src\":\"https://data.oecd.org/chart/5xFV\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[{\"title\":\"Nota país\",\"url\":\"http://www.oecd.org/spain/Employment-Outlook-Spain-ES.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/spain/Employment-Outlook-Spain-EN.pdf\"}]},{\"name\":\"Australie\",\"src\":\"https://data.oecd.org/chart/5xFX\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/australia/Employment-Outlook-Australia-EN.pdf\"}]},{\"name\":\"Autriche\",\"src\":\"https://data.oecd.org/chart/5xG0\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[{\"title\":\"Ländernotiz\",\"url\":\"http://www.oecd.org/austria/Employment-Outlook-Austria-DE.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/austria/Employment-Outlook-Austria-EN.pdf\"}]},{\"name\":\"Belgique\",\"src\":\"https://data.oecd.org/chart/5xG4\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Chili\",\"src\":\"https://data.oecd.org/chart/5xG6\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Colombie\",\"src\":\"https://data.oecd.org/chart/5xG6\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"République tchèque\",\"src\":\"https://data.oecd.org/chart/5xGb\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Danemark\",\"src\":\"https://data.oecd.org/chart/5xGd\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Estonie\",\"src\":\"https://data.oecd.org/chart/5xGf\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Finlande\",\"src\":\"https://data.oecd.org/chart/5xGh\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Grèce\",\"src\":\"https://data.oecd.org/chart/5xGj\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Hongrie\",\"src\":\"https://data.oecd.org/chart/5xGk\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Islande\",\"src\":\"https://data.oecd.org/chart/5xGn\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Irlande\",\"src\":\"https://data.oecd.org/chart/5xGp\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Israël\",\"src\":\"https://data.oecd.org/chart/5xGr\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Italie\",\"src\":\"https://data.oecd.org/chart/5xGu\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[{\"title\":\"Nota paese\",\"url\":\"http://www.oecd.org/italy/Employment-Outlook-Italy-IT.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/italy/Employment-Outlook-Italy-EN.pdf\"}]},{\"name\":\"Japon\",\"src\":\"https://data.oecd.org/chart/5xGw\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[{\"title\":\"Note pays (Japonais)\",\"url\":\"http://www.oecd.org/japan/Employment-Outlook-Japan-JP.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/japan/Employment-Outlook-Japan-EN.pdf\"}]},{\"name\":\"Corée\",\"src\":\"https://data.oecd.org/chart/5xGy\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[{\"title\":\"Note pays (Coréen)\",\"url\":\"http://www.oecd.org/korea/Employment-Outlook-Korea-KO.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/korea/Employment-Outlook-Korea-EN.pdf\"}]},{\"name\":\"Lituanie\",\"src\":\"https://data.oecd.org/chart/5xGB\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Luxembourg\",\"src\":\"https://data.oecd.org/chart/5xGD\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Lettonie\",\"src\":\"https://data.oecd.org/chart/5xGF\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Mexique\",\"src\":\"https://data.oecd.org/chart/5xGH\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[{\"title\":\"Nota país\",\"url\":\"http://www.oecd.org/mexico/Employment-Outlook-Mexico-ES.pdf\"},{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/mexico/Employment-Outlook-Mexico-EN.pdf\"}]},{\"name\":\"Pays-Bas\",\"src\":\"https://data.oecd.org/chart/5xGK\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Norvège\",\"src\":\"https://data.oecd.org/chart/5xGM\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Pologne\",\"src\":\"https://data.oecd.org/chart/5xGN\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Portugal\",\"src\":\"https://data.oecd.org/chart/5xGU\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"République slovaque\",\"src\":\"https://data.oecd.org/chart/5wnM\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Slovénie\",\"src\":\"https://data.oecd.org/chart/5xGW\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Suède\",\"src\":\"https://data.oecd.org/chart/5xGY\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Suisse\",\"src\":\"https://data.oecd.org/chart/5xH0\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Turquie\",\"src\":\"https://data.oecd.org/chart/5xH2\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Afrique du Sud\",\"src\":\"https://data.oecd.org/chart/5xH4\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[]},{\"name\":\"Royaume-Uni\",\"src\":\"https://data.oecd.org/chart/5xH6\",\"title\":\"Graphique OCDE: Taux d'emploi, Total, % de la population d'âge actif, Annuelle, 2008 – 2018\",\"links\":[{\"title\":\"Country note\",\"url\":\"http://www.oecd.org/unitedkingdom/Employment-Outlook-UnitedKingdom-EN.pdf\"}]}]");

/***/ }),
/* 46 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Argentina\",\"src\":\"https://data.oecd.org/chart/5wim\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"},{\"title\":\"Español\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Argentina\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Australia\",\"src\":\"https://data.oecd.org/chart/5wis\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Australia\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Austria\",\"src\":\"https://data.oecd.org/chart/5wiw\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Austria\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Belgium\",\"src\":\"https://data.oecd.org/chart/5wiu\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Belgium\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Brazil\",\"src\":\"https://data.oecd.org/chart/5wjo\",\"title\":\"OECD Chart: Inflation forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"},{\"title\":\"Português\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Brazil\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Canada\",\"src\":\"https://data.oecd.org/chart/5wid\",\"title\":\"OECD Chart: Domestic demand forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Canada\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Chile\",\"src\":\"https://data.oecd.org/chart/5wjq\",\"title\":\"OECD Chart: Inflation forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"},{\"title\":\"Español\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Chile\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"China\",\"src\":\"https://data.oecd.org/chart/5wiy\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"China\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Colombia\",\"src\":\"https://data.oecd.org/chart/5wiA\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"},{\"title\":\"Español\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Colombia\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Costa Rica\",\"src\":\"https://data.oecd.org/chart/5wiC\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"},{\"title\":\"Español\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Costa Rica\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Czech Republic\",\"src\":\"https://data.oecd.org/chart/5xIl\",\"title\":\"OECD Chart: Unemployment rate forecast, Total, % of labour force, Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Czech Republic\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Denmark\",\"src\":\"https://data.oecd.org/chart/5xIo\",\"title\":\"OECD Chart: Unemployment rate forecast, Total, % of labour force, Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Denmark\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Estonia\",\"src\":\"https://data.oecd.org/chart/5xI\",\"title\":\"OECD Chart: Unemployment rate forecast, Total, % of labour force, Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Estonia\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Euro area\",\"src\":\"https://data.oecd.org/chart/5wiG\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Euro area\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Finland\",\"src\":\"https://data.oecd.org/chart/5wiI\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Finland\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"France\",\"src\":\"https://data.oecd.org/chart/5xIr\",\"title\":\"OECD Chart: Unemployment rate forecast, Total, % of labour force, Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"France\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Germany\",\"src\":\"https://data.oecd.org/chart/5wiL\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Germany\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Greece\",\"src\":\"https://data.oecd.org/chart/5xIt\",\"title\":\"OECD Chart: Unemployment rate forecast, Total, % of labour force, Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Greece\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Hungary\",\"src\":\"https://data.oecd.org/chart/5wiN\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Hungary\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Iceland\",\"src\":\"https://data.oecd.org/chart/5wiP\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Iceland\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"India\",\"src\":\"https://data.oecd.org/chart/5wiR\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"India\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Indonesia\",\"src\":\"https://data.oecd.org/chart/5wiT\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Indonesia\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Ireland\",\"src\":\"https://data.oecd.org/chart/5wiW\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Ireland\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Israel\",\"src\":\"https://data.oecd.org/chart/5xIw\",\"title\":\"OECD Chart: Unemployment rate forecast, Total, % of labour force, Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Israel\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Italy\",\"src\":\"https://data.oecd.org/chart/5xIz\",\"title\":\"OECD Chart: Unemployment rate forecast, Total, % of labour force, Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Italy\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Japon\",\"src\":\"https://data.oecd.org/chart/5wjs\",\"title\":\"OECD Chart: Inflation forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Japon\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Korea\",\"src\":\"https://data.oecd.org/chart/5wiY\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Korea\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Latvia\",\"src\":\"https://data.oecd.org/chart/5xIB\",\"title\":\"OECD Chart: Unemployment rate forecast, Total, % of labour force, Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Latvia\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Lithuania\",\"src\":\"https://data.oecd.org/chart/5xID\",\"title\":\"OECD Chart: Unemployment rate forecast, Total, % of labour force, Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Lithuania\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Luxembourg\",\"src\":\"https://data.oecd.org/chart/5wj0\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Luxembourg\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Mexico\",\"src\":\"https://data.oecd.org/chart/5wj2\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"},{\"title\":\"Español\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Mexico\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Netherlands\",\"src\":\"https://data.oecd.org/chart/5wj4\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Netherlands\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"New Zealand\",\"src\":\"https://data.oecd.org/chart/5wj6\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"New Zealand\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Norway\",\"src\":\"https://data.oecd.org/chart/5wju\",\"title\":\"OECD Chart: Inflation forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Norway\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Poland\",\"src\":\"https://data.oecd.org/chart/5wj8\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Poland\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Portugal\",\"src\":\"https://data.oecd.org/chart/5xIF\",\"title\":\"OECD Chart: Unemployment rate forecast, Total, % of labour force, Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"},{\"title\":\"Português\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Portugal\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Russia\",\"src\":\"https://data.oecd.org/chart/5wja\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Russia\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Slovak Republic\",\"src\":\"https://data.oecd.org/chart/5wjc\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Slovak Republic\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Slovenia\",\"src\":\"https://data.oecd.org/chart/5wjw\",\"title\":\"OECD Chart: Inflation forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Slovenia\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"South Africa\",\"src\":\"https://data.oecd.org/chart/5wjf\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"South Africa\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Spain\",\"src\":\"https://data.oecd.org/chart/5xIH\",\"title\":\"OECD Chart: Unemployment rate forecast, Total, % of labour force, Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"},{\"title\":\"Español\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Spain\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Sweden\",\"src\":\"https://data.oecd.org/chart/5xIJ\",\"title\":\"OECD Chart: Unemployment rate forecast, Total, % of labour force, Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Sweden\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Switzerland\",\"src\":\"https://data.oecd.org/chart/5wji\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Switzerland\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"Turkey\",\"src\":\"https://data.oecd.org/chart/5wjz\",\"title\":\"OECD Chart: Inflation forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"Turkey\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]},{\"name\":\"United Kingdom\",\"src\":\"https://data.oecd.org/chart/5wjk\",\"title\":\"OECD Chart: Real GDP forecast, Total, Annual growth rate (%), Annual, 2011 – 2020\",\"links\":[{\"title\":\"Country profile\",\"url\":\"#\"},{\"title\":\"Economic snapshot\",\"url\":\"#\"}],\"social\":[{\"dataTitle\":\"United Kingdom\",\"dataText\":\"Find out more ➡️\",\"dataUrl\":\"https://oe.cd/employment-outlook\"}]}]");

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _key_messages_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _key_messages_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_key_messages_scss__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Agence'O - key-messages
 * @author Guillaume Bouillon (Agence'O)
 * @created 02/04/2019
 */

$(document).on('click', '.key-messages', function (e) {
  //e.preventDefault();
  $('.key-messages').removeClass('open');
  $(e.currentTarget).addClass('open');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _key_topics_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(140);
/* harmony import */ var _key_topics_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_key_topics_scss__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Agence'O - key-topics
 * @author Guillaume Bouillon (Agence'O)
 * @created 03/04/2019
 */


$('.key-topics__content').each(function (index, item) {
  var slider = $(item);
  slider.slick({
    infinite: false,
    autoplay: false,
    swipeToSlide: true,
    mobileFirst: true,
    dots: false,
    slidesToShow: 2,
    prevArrow: '<button class="slider__control slider__control--prev"><span class="visually-hidden">prev</span></button>',
    nextArrow: '<button class="slider__control slider__control--next"><span class="visually-hidden">next</span></button>',
    appendArrows: slider.parent().find('.slider__controls'),
    arrows: true,
    rows: 2,
    // the magic
    responsive: [{
      breakpoint: 750,
      settings: {
        slidesToShow: 4,
        rows: 1
      }
    }]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _panel_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var _panel_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_panel_scss__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Agence'O - panel
 * @author Guillaume Bouillon (Agence'O)
 * @created 02/04/2019
 */

$(document).on('click', '.card', function (e) {
  e.preventDefault();
  var target = $(e.currentTarget).data('panel');
  $(target).addClass('open');
});
$(document).on('click', '.panel__close', function (e) {
  e.preventDefault();
  $(e.currentTarget).parent().removeClass('open');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var _pop_in_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _pop_in_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pop_in_scss__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Agence'O - popins
 * @author Axel Baron (Agence'O)
 * @created 01/04/2019
 */


(function ($) {
  $(document).on('click', '.js-play', function (e) {
    e.preventDefault();
    var src = $(e.currentTarget).data('video') || null;

    if (src) {
      putElInPopin("<iframe src=\"".concat(src, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"));
    }
  });
  $(document).on('click', '.pop-in__close, .pop-in__mask', function (e) {
    e.preventDefault();
    $(".pop-in").removeClass('open');
    $(".pop-in__content").html(null);
  });

  function putElInPopin(element) {
    $(".pop-in__content").html(element);
    $(".pop-in").addClass('open');
  }
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _publications_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(146);
/* harmony import */ var _publications_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_publications_scss__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Agence'O - publications
 * @author Guillaume Bouillon (Agence'O)
 * @created 03/04/2019
 */



var coverSrc = Object(_localization__WEBPACK_IMPORTED_MODULE_1__[/* getResourceByNsAndKey */ "a"])('publications--economic', 'cover-src');
$('#publication-economic-cover-img').attr('src', "".concat(_config__WEBPACK_IMPORTED_MODULE_0___default.a.assetPath).concat(coverSrc));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var social_share_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var social_share_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(social_share_kit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _social_sticky_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(148);
/* harmony import */ var _social_sticky_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_social_sticky_scss__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Agence'O - read-more
 * @author Guillaume Bouillon (Agence'O)
 * @created 02/04/2019
 */


SocialShareKit.init({
  facebook: {
    url: window.location.href,
    caption: $(document).find("title").text(),
    picture: 'http://www.oecd.org/media/oecdorg/styleassets/responsive/menu/images/logooecd_en.png'
  },
  twitter: {
    text: '' // via: '@OECD',

  },
  onOpen: function onOpen(targetElement, network, networkUrl, popupWindow) {
    if (network === 'facebook') {
      // console.log('facebook');
      ga('send', 'social', 'Facebook', 'share', window.location.href);
    }

    if (network === 'twitter') {
      // console.log('twitter');
      ga('send', 'social', 'Twitter', 'tweet', window.location.href);
    } else if (network === 'linkedin') {
      // console.log('linkedin');
      ga('send', 'social', 'Linkedin', 'share', window.location.href);
    } else if (network === 'google-plus') {
      // console.log('googleplus');
      ga('send', 'social', 'Googleplus', 'share', window.location.href);
    }
  },
  title: $(document).find("title").text(),
  url: window.location.href
});
$('.ssk-email').attr('href', 'mailto:?body=' + encodeURIComponent(window.location.href) + '&subject=' + jQuery(document).find("title").text()); // Email button

$(document).on('click', '.ssk-email', function () {
  // console.log('email');
  ga('send', 'social', 'Email', 'email', window.location.href);
}); // PDF/Print button

$(document).on('click', '.ssk-emerald', function (e) {
  e.preventDefault();
  window.print();
  ga('send', 'social', 'Print', 'print', window.location.href);
}); // Toggle sticky bar

$(document).on('click', '.social-sticky__item--plus', function (e) {
  e.preventDefault();
  $(e.currentTarget).parent().toggleClass('open');
});
$(window).on('resize', function () {
  if ($(window).width() >= 768) {
    $('.social-sticky').addClass('open');
  }
}).resize();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(0)))

/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sticky_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(150);
/* harmony import */ var _sticky_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sticky_header_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);



var navbar = $('#navbar');
var links = navbar.find('.nav-link');
var burgerButton = navbar.find('.internal-nav__toggle');
var langSelection = navbar.find('.internal-nav__lang-sel');
var sticky = navbar.offset().top + 5;
$('.url-en-sticky-header').attr('href', "".concat(_config__WEBPACK_IMPORTED_MODULE_0___default.a.urls.en).concat(document.location.hash));
$('.url-fr-sticky-header').attr('href', "".concat(_config__WEBPACK_IMPORTED_MODULE_0___default.a.urls.fr).concat(document.location.hash));
$('.url-es-sticky-header').attr('href', "".concat(_config__WEBPACK_IMPORTED_MODULE_0___default.a.urls.es).concat(document.location.hash));

var reactToPageYOffsetChange = function reactToPageYOffsetChange() {
  if (window.pageYOffset >= sticky) {
    navbar.addClass('sticky');
    langSelection.addClass('internal-nav__lang-sel-visible');
  } else {
    navbar.removeClass('sticky');
    langSelection.removeClass('internal-nav__lang-sel-visible');
  }

  links.removeClass('force-visible');
  burgerButton.removeClass('is-open');
};

document.addEventListener('scroll', function () {
  reactToPageYOffsetChange();
});
window.addEventListener('resize', function () {
  sticky = navbar.offset().top + 5;
});
burgerButton.on('click', function () {
  burgerButton.toggleClass('is-open');
  links.toggleClass('force-visible');
});
reactToPageYOffsetChange();
$('body').scrollspy({
  target: '#navbar'
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/promise-polyfill/src/polyfill.js
var polyfill = __webpack_require__(35);

// EXTERNAL MODULE: ./src/modules/banner/banner.scss
var banner = __webpack_require__(100);

// CONCATENATED MODULE: ./src/modules/banner/banner.js
/**
 * Agence'O - banner
 * @author Guillaume Bouillon (Agence'O)
 * @created 01/04/2019
 */

// EXTERNAL MODULE: ./src/modules/blockquote/blockquote.scss
var blockquote = __webpack_require__(102);

// CONCATENATED MODULE: ./src/modules/blockquote/blockquote.js
/**
 * Agence'O - blockquote
 * @author Guillaume Bouillon (Agence'O)
 * @created 02/04/2019
 */

// EXTERNAL MODULE: ./src/modules/breadcrumb/breadcrumb.scss
var breadcrumb = __webpack_require__(104);

// CONCATENATED MODULE: ./src/modules/breadcrumb/breadcrumb.js
/**
 * Agence'O - breadcrumb
 * @author Guillaume Bouillon (Agence'O)
 * @created 02/04/2019
 */

// EXTERNAL MODULE: ./src/modules/card/card.scss
var card = __webpack_require__(106);

// CONCATENATED MODULE: ./src/modules/card/card.js
/**
 * Agence'O - card
 * @author Guillaume Bouillon (Agence'O)
 * @created 02/04/2019
 */

// EXTERNAL MODULE: ./src/modules/compare/compare.scss
var compare = __webpack_require__(108);

// CONCATENATED MODULE: ./src/modules/compare/compare.js
/**
 * Agence'O - compare
 * @author Guillaume Bouillon (Agence'O)
 * @created 04/04/2019
 */

// EXTERNAL MODULE: ./src/modules/footer/footer.scss
var footer = __webpack_require__(110);

// CONCATENATED MODULE: ./src/modules/footer/footer.js
/**
 * Agence'O - footer
 * @author Guillaume Bouillon (Agence'O)
 * @created 03/04/2019
 */

// EXTERNAL MODULE: ./src/modules/header/header.scss
var header = __webpack_require__(118);

// EXTERNAL MODULE: ./src/modules/header/menu.scss
var menu = __webpack_require__(124);

// EXTERNAL MODULE: ./src/modules/header/top/header-top.js
var header_top = __webpack_require__(38);

// EXTERNAL MODULE: ./src/modules/header/site-header/site-header.scss
var site_header = __webpack_require__(128);

// CONCATENATED MODULE: ./src/modules/header/site-header/site-header.js
/**
 * Agence'O - header-header
 * @author Guillaume Bouillon (Agence'O)
 * @created 09/04/2019
 */

// EXTERNAL MODULE: ./src/modules/header/navigation/main-nav.js
var main_nav = __webpack_require__(39);

// CONCATENATED MODULE: ./src/modules/header/header.js
/**
 * Agence'O - header
 * @author Guillaume Bouillon (Agence'O)
 * @created 01/04/2019
 */





// EXTERNAL MODULE: ./src/modules/key-data/key-data.scss
var key_data = __webpack_require__(134);

// CONCATENATED MODULE: ./src/modules/key-data/key-data.js
/**
 * Agence'O - key-data
 * @author Guillaume Bouillon (Agence'O)
 * @created 02/04/2019
 */

// EXTERNAL MODULE: ./src/modules/key-facts/key-facts.js
var key_facts = __webpack_require__(40);

// EXTERNAL MODULE: ./src/modules/key-messages/key-messages.js
var key_messages = __webpack_require__(47);

// EXTERNAL MODULE: ./src/modules/key-topics/key-topics.js
var key_topics = __webpack_require__(48);

// EXTERNAL MODULE: ./src/modules/panel/panel.js
var panel = __webpack_require__(49);

// EXTERNAL MODULE: ./src/modules/pop-in/pop-in.js
var pop_in = __webpack_require__(50);

// EXTERNAL MODULE: ./src/modules/publications/publications.js
var publications = __webpack_require__(51);

// EXTERNAL MODULE: ./src/modules/social-sticky/social-sticky.js
var social_sticky = __webpack_require__(53);

// EXTERNAL MODULE: ./src/modules/sticky-header/sticky-header.js
var sticky_header = __webpack_require__(55);

// EXTERNAL MODULE: ./src/modules/video/video.scss
var video = __webpack_require__(152);

// CONCATENATED MODULE: ./src/modules/video/video.js
/**
 * Agence'O - video
 * @author Guillaume Bouillon (Agence'O)
 * @created 02/04/2019
 */

// EXTERNAL MODULE: ./src/modules/go-top-btn/go-top-btn.scss
var go_top_btn = __webpack_require__(154);

// CONCATENATED MODULE: ./src/modules/go-top-btn/go-top-btn.js
/**
 * Agence'O - go-top-btn
 * @author Axel Baron (Agence'O)
 * @created 12/04/2019
 */


try {
  var bttb = document.getElementById('back-to-top-button'); // go back to top when clicked

  bttb.addEventListener('click', function (e) {
    e.preventDefault();
    document.location.href = '#';
  }); // hide button if already on top, or almost

  document.addEventListener('scroll', function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      bttb.style.display = 'flex';
    } else {
      bttb.style.display = 'none';
    }
  });
} catch (err) {
  console.log("Error while configuring back to top button: ".concat(err));
}
// EXTERNAL MODULE: ./src/modules/credits/credits.scss
var credits = __webpack_require__(156);

// CONCATENATED MODULE: ./src/modules/credits/credits.js
/**
 * Agence'O - compare
 * @author Axel Baron (Agence'O)
 * @created 17/04/2019
 */

// EXTERNAL MODULE: ./node_modules/swiper/js/swiper.js
var swiper = __webpack_require__(33);
var swiper_default = /*#__PURE__*/__webpack_require__.n(swiper);

// EXTERNAL MODULE: ./src/modules/key-facts-slider/key-facts-slider.scss
var key_facts_slider = __webpack_require__(158);

// CONCATENATED MODULE: ./src/modules/key-facts-slider/key-facts-slider.js
/**
 * Agence'O - key-facts-slider
 * @author Axel Baron (Agence'O)
 * @created 29/04/2019
 */


var keyFactsSlider = new swiper_default.a('.key-facts-slider', {
  navigation: {
    nextEl: '.key-facts-slider__next',
    prevEl: '.key-facts-slider__prev'
  },
  slidesPerView: 1,
  loop: true,
  speed: 500
});
// EXTERNAL MODULE: ./src/modules/header-responsive/header-responsive.scss
var header_responsive = __webpack_require__(160);

// CONCATENATED MODULE: ./src/modules/header-responsive/header-responsive.js
/**
 * Agence'O - header publication
 * @author Axel Baron (Agence'O)
 * @created 29/04/2019
 * @author changes Marco Ng
 */

// EXTERNAL MODULE: ./src/modules/header-publication-inner-page-nav/header-publication-inner-page-nav.scss
var header_publication_inner_page_nav = __webpack_require__(162);

// CONCATENATED MODULE: ./src/modules/header-publication-inner-page-nav/header-publication-inner-page-nav.js

// EXTERNAL MODULE: ./src/modules/video-regular/video-regular.scss
var video_regular = __webpack_require__(164);

// CONCATENATED MODULE: ./src/modules/video-regular/video-regular.js
/**
 * Agence'O - video-regular
 * @author Guillaume Bouillon (Agence'O)
 * @created 29/04/2019
 */

// EXTERNAL MODULE: ./src/modules/text-block/text-block.scss
var text_block = __webpack_require__(166);

// CONCATENATED MODULE: ./src/modules/text-block/text-block.js
/**
 * Agence'O - key-data
 * @author Guillaume Bouillon (Agence'O)
 * @created 02/04/2019
 * @modif Marc Nguyen 15/07/2019
 */

// EXTERNAL MODULE: ./src/localization.js
var localization = __webpack_require__(6);

// CONCATENATED MODULE: ./src/index.js
/**
 * Agence'O - index.js
 * @author Guillaume Bouillon (Agence'O)
 * @created 01/03/2019
 */





 // import './modules/projections-by-country/projections-by-country';


 // import './modules/highlight/highlight';
// import './modules/image-separator/image-separator';

 // import './modules/country-policy-tracker/country-policy-tracker';




 // import './modules/podcast/podcast';


 // import './modules/read-more/read-more';





 // import './modules/featured-stories/featured-stories';

 //import './modules/header-publication/header-publication';



 // import './modules/header-video/header-video';




/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 101 */,
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */,
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */,
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */,
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */,
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 125 */,
/* 126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 127 */,
/* 128 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 129 */,
/* 130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 135 */,
/* 136 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 137 */,
/* 138 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 139 */,
/* 140 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 141 */,
/* 142 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 143 */,
/* 144 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 145 */,
/* 146 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 147 */,
/* 148 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 149 */,
/* 150 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 151 */,
/* 152 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 153 */,
/* 154 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 155 */,
/* 156 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 157 */,
/* 158 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 159 */,
/* 160 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 161 */,
/* 162 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 163 */,
/* 164 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 165 */,
/* 166 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);