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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function PrintComm(id, comm_json) {\n  post_div = document.getElementById(\"post_\" + id);\n  var comm = document.createElement('div');\n  comm[\"class\"] = \"comment\";\n  comm.id = \"comm_\" + comm_json.id;\n  comm.innerHTML = \"<strong class='email'>\" + comm_json.email + \"</strong><br><div class='comm_body'>\" + comm_json.body + \"</div><br>\";\n  post_div.append(comm);\n}\n\nfunction LoadCommentsForPost(id) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments?postId=' + id, false);\n  xhr.send();\n\n  if (xhr.status == 200) {\n    comms = JSON.parse(xhr.responseText);\n    PrintComm(id, comms[0]);\n    PrintComm(id, comms[1]);\n    PrintComm(id, comms[2]);\n  }\n}\n\nfunction PrintPost(id, post_json) {\n  posts_div = document.getElementById(\"user_\" + id + \"_posts\");\n  var post = document.createElement('div');\n  post[\"class\"] = \"post\";\n  post.id = \"post_\" + post_json.id;\n  post.innerHTML = \"<strong class='title'>\" + post_json.title + \"</strong><br><div class='body'>\" + post_json.body + \"</div><br>\";\n  posts_div.append(post);\n  LoadCommentsForPost(post_json.id);\n}\n\nfunction LoadPostsForUser(id) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts?userId=' + id, false);\n  xhr.send();\n\n  if (xhr.status == 200) {\n    posts = JSON.parse(xhr.responseText);\n    PrintPost(id, posts[0]);\n    PrintPost(id, posts[1]);\n    PrintPost(id, posts[2]);\n  }\n}\n\nfunction PrintUser(user) {\n  var usr = document.createElement('div');\n  usr.id = \"user_\" + user.id;\n  usr.innerHTML = \"<strong class='fam'>\" + user.name + \"</strong><br><a href='http://\" + user.website + \"/' class='website'>\" + user.website + \"</a><br><div id=\" + \"user_\" + user.id + \"_posts></div><br>\";\n  document.body.append(usr);\n  LoadPostsForUser(user.id);\n}\n\nfunction LoadUser(id) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/' + id + '/', false);\n  xhr.send();\n\n  if (xhr.status == 200) {\n    user = JSON.parse(xhr.responseText);\n    PrintUser(user);\n  }\n}\n\nLoadUser(1);\nLoadUser(2);\nLoadUser(3);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });