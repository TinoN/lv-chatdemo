/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/df/dev/chatdemo/node_modules/vue-loader/lib/component-normalizer.js'\n    at Error (native)");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/df/dev/chatdemo/node_modules/css-loader/lib/css-base.js'\n    at Error (native)");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/df/dev/chatdemo/node_modules/vue-style-loader/lib/addStylesClient.js'\n    at Error (native)");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
module.exports = __webpack_require__(57);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Example_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ChatMessage_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ChatLog_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ChatComposer_vue__ = __webpack_require__(52);

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(13);

window.Vue = __webpack_require__(38);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// 170713: not working, problem with require
/**
 for future (170714, auch mit npm 5.3.0 funktioniet es nicht):

    npm -v shouldn't return 5.2 //not relevant actually
    rm -rf node_modules
    npm cache clear --force
    rm -rf package-lock.json
    npm install

    evtl nach dem ganzen spass einfach rechner neustarten...
	
**/
// Vue.component('example', require('./components/Example.vue'));
// Vue.component('chat-log', require('./components/ChatLog.vue'));
// Vue.component('chat-message', require('./components/ChatMessage.vue'));
// Vue.component('chat-composer', require('./components/ChatComposer.vue'));

//FIX:





Vue.component('example', __WEBPACK_IMPORTED_MODULE_0__components_Example_vue__["a" /* default */]);
Vue.component('chat-message', __WEBPACK_IMPORTED_MODULE_1__components_ChatMessage_vue__["a" /* default */]);
Vue.component('chat-log', __WEBPACK_IMPORTED_MODULE_2__components_ChatLog_vue__["a" /* default */]);
Vue.component('chat-composer', __WEBPACK_IMPORTED_MODULE_3__components_ChatComposer_vue__["a" /* default */]);

//root scope:
var app = new Vue({
  el: '#app',
  data: {
    messagesGlobal: [{
      message: 'hey',
      user: 'john'
    }, {
      message: 'hello',
      user: 'vivi'
    }]
  },
  methods: {
    addMessage: function addMessage(message) {
      //add to existing messages
      this.messagesGlobal.push(message);
      console.log('message added');
    }
  }
});

// const app = new Vue({
//     el: '.app',
//     components: [
//       'example'
//     ]
// });

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__(14);

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = __webpack_require__(16);

  __webpack_require__(17);
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(18);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

/***/ }),
/* 14 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/df/dev/chatdemo/node_modules/lodash/lodash.js'\n    at Error (native)");

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/df/dev/chatdemo/node_modules/jquery/dist/jquery.js'\n    at Error (native)");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/df/dev/chatdemo/node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'\n    at Error (native)");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/df/dev/chatdemo/node_modules/axios/index.js'\n    at Error (native)");

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/df/dev/chatdemo/node_modules/vue/dist/vue.common.js'\n    at Error (native)");

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_266575ab_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Example_vue__ = __webpack_require__(40);
var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_266575ab_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Example_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Example.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Example.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-266575ab", Component.options)
  } else {
    hotAPI.reload("data-v-266575ab", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 col-md-offset-2"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Example Component")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                    I'm an example component!\n                ")])])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-266575ab", esExports)
  }
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_ChatLog_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24079c0d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_ChatLog_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(42)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_ChatLog_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24079c0d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_ChatLog_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/ChatLog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatLog.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24079c0d", Component.options)
  } else {
    hotAPI.reload("data-v-24079c0d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("22f91962", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24079c0d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatLog.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24079c0d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatLog.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n.chat-log .chat-message:nth-child(even){\n\tbackground-color:#ccc;\n}\n", ""]);

// exports


/***/ }),
/* 44 */,
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

// messages is defined in chat.blad.php on <chat-log>
/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['messages']
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "chat-log"
  }, [_c('h2', [_vm._v("CHATLOG")]), _vm._v(" "), _vm._l((_vm.messages), function(singleMessage) {
    return _c('chat-message', {
      key: singleMessage.user,
      attrs: {
        "messageToPass": singleMessage
      }
    })
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-24079c0d", esExports)
  }
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_ChatMessage_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24654260_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_ChatMessage_vue__ = __webpack_require__(51);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(48)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_ChatMessage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24654260_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_ChatMessage_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/ChatMessage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatMessage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24654260", Component.options)
  } else {
    hotAPI.reload("data-v-24654260", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("8c4e3d44", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24654260\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatMessage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24654260\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatMessage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n.chat-message {\n\tpadding: 1rem;\n}\n.chat-message > p {\n\tmargin-bottom: .5rem;\n}\n", ""]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	//accepting properties
	//messageToPass is passed from ChatLog.vue
	props: ['messageToPass']
	//following is LOCAL DATA
	// data () {
	// 	return {
	// 		message: "this is some message text",
	// 		user: "john doe"
	// 	}
	// }
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "chat-message"
  }, [_c('p', [_vm._v(_vm._s(_vm.messageToPass.message))]), _vm._v(" "), _c('small', [_vm._v(_vm._s(_vm.messageToPass.user))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-24654260", esExports)
  }
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_ChatComposer_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_060fd227_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_ChatComposer_vue__ = __webpack_require__(56);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(53)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_ChatComposer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_060fd227_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_ChatComposer_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/ChatComposer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ChatComposer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-060fd227", Component.options)
  } else {
    hotAPI.reload("data-v-060fd227", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0747ccf9", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-060fd227\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatComposer.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-060fd227\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChatComposer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n.chat-composer {\n\tdisplay: flex;\n}\n.chat-composer input {\n\tflex: 1 auto;\n}\n.chat-composer button {\n\tborder-radius: 0;\n}\n", ""]);

// exports


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
		return {
			messageText: 'default'
		};
	},

	methods: {
		//event emitters and listeners from vue
		//$emit is for passing
		//messageSent can be called on the element it was called (<chat-composer> in chat.blade.php)
		//in this.$emit 'messagesent' darf keine grossbuchstaben enthalten!!! (??????....)
		sendMessage: function sendMessage() {
			this.$emit('messagesent', {
				message: this.messageText,
				user: 'john doooooe'
			});
			this.messageText = '';
		}
	}
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "chat-composer"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.messageText),
      expression: "messageText"
    }],
    attrs: {
      "type": "text",
      "name": "message",
      "placeholder": "start typing your message..."
    },
    domProps: {
      "value": (_vm.messageText)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.sendMessage($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.messageText = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.sendMessage
    }
  }, [_vm._v("SEND")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-060fd227", esExports)
  }
}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n@import \"node_modules/bootstrap-sass/assets/stylesheets/bootstrap\";\n^\n      File to import not found or unreadable: node_modules/bootstrap-sass/assets/stylesheets/bootstrap.\nParent style sheet: stdin\n      in /home/df/dev/chatdemo/resources/assets/sass/app.scss (line 9, column 1)\n    at runLoaders (/home/df/dev/chatdemo/node_modules/webpack/lib/NormalModule.js:193:19)\n    at /home/df/dev/chatdemo/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /home/df/dev/chatdemo/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/home/df/dev/chatdemo/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/home/df/dev/chatdemo/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.<anonymous> (/home/df/dev/chatdemo/node_modules/async/dist/async.js:2244:31)\n    at Object.callback (/home/df/dev/chatdemo/node_modules/async/dist/async.js:906:16)\n    at options.error (/home/df/dev/chatdemo/node_modules/node-sass/lib/index.js:294:32)");

/***/ })
/******/ ]);