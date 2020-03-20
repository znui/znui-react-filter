(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Filter.js":
/*!*******************!*\
  !*** ./Filter.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var FilterField = __webpack_require__(/*! ./FilterField */ "./FilterField.js");

var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");

module.exports = React.createClass({
  displayName: 'ZRFilter',
  getInitialState: function getInitialState() {
    return {
      loading: true,
      data: {}
    };
  },
  __itemFilterChange: function __itemFilterChange(event, item, index) {
    event.data = item;
    event.index = index;
    event.sender = this;
    this.state.data[event.name] = {
      name: event.name,
      opt: event.opt,
      value: event.value
    };
    this.props.onFilterChange && this.props.onFilterChange(event, this.state.data, this);
  },
  __itemRender: function __itemRender(item, index) {
    var _this = this;

    return React.createElement("div", {
      key: index,
      className: "filter-item"
    }, React.createElement("div", {
      className: "item-label"
    }, item.label), React.createElement(FilterField, _extends({
      className: "item-field"
    }, item, {
      onChange: function onChange(event) {
        return _this.__itemFilterChange(event, item, index);
      }
    })));
  },
  __onLoading: function __onLoading() {
    this.setState({
      loading: true
    });
  },
  __onFinished: function __onFinished() {
    this.setState({
      loading: false
    });
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname("zr-filter", this.props.className),
      style: this.props.style
    }, React.createElement(znui.react.DataView, {
      data: this.props.data,
      itemRender: this.__itemRender,
      onLoading: this.__onLoading,
      onFinished: this.__onFinished
    }), this.state.loading && React.createElement(loader.Loader, {
      content: "...",
      loader: "circle",
      size: "size-smail",
      layout: "flex-row"
    }));
  }
});

/***/ }),

/***/ "./FilterField.js":
/*!************************!*\
  !*** ./FilterField.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var SVGIcon = __webpack_require__(/*! znui-react-icon */ "znui-react-icon").SVGIcon;

var inputs = __webpack_require__(/*! znui-react-input */ "znui-react-input");

var popup = __webpack_require__(/*! znui-react-popup */ "znui-react-popup");

var OPTS = {
  '=': {
    text: '等于',
    value: '=',
    icon: 'faEquals'
  },
  '>=': {
    text: '大于',
    value: '>=',
    icon: 'faGreaterThanEqual'
  },
  '=<': {
    text: '小于',
    value: '=<',
    icon: 'faLessThanEqual'
  },
  '!=': {
    text: '不等于',
    value: '!=',
    icon: 'faNotEqual'
  },
  '%': {
    text: '相似',
    value: '%',
    icon: 'faPercent'
  },
  'cancel': {
    text: '取消',
    value: 'cancel',
    icon: 'faTimes'
  }
};
module.exports = React.createClass({
  displayName: 'ZRFilterField',
  getDefaultProps: function getDefaultProps() {
    return {
      opts: ['%', '='],
      icon: 'faFilter',
      className: ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      icon: this.props.icon,
      opt: this.props.opt,
      value: this.props.value
    };
  },
  __InputChange: function __InputChange(event, input) {
    event.name = this.props.name;
    event.opt = this.state.opt;
    event.optIcon = this.state.icon;
    this.setState({
      value: event.value
    });
    this.props.onChange && this.props.onChange(event, input);

    if (event.target.tagName != 'INPUT') {
      if (!this.state.opt) {
        return alert('The opt is null.'), false;
      }

      if (!event.value) {
        return alert('The value is null.'), false;
      }

      this.props.onFilterChange && this.props.onFilterChange(event, input);
    }
  },
  __InputEnter: function __InputEnter(event, input) {
    event.name = this.props.name;
    event.opt = this.state.opt;
    event.optIcon = this.state.icon;
    this.setState({
      value: event.value
    });

    if (!this.state.opt) {
      return alert('The opt is null.'), false;
    }

    if (!event.value) {
      this.props.onCancel && this.props.onCancel(this.props.name);
    }

    this.props.onFilterChange && this.props.onFilterChange(event, input);
  },
  __onOptItemClick: function __onOptItemClick(opt, index) {
    if (opt.value == 'cancel') {
      this.setState({
        icon: 'faFilter',
        opt: ''
      });
      return this.props.onCancel && this.props.onCancel(this.props.name), false;
    }

    this.setState({
      icon: opt.icon,
      opt: opt.value
    });

    if (this.state.value) {
      this.props.onOptChange && this.props.onOptChange({
        name: this.props.name,
        value: this.state.value,
        opt: opt.value,
        optIcon: opt.icon
      }, this);
    }
  },
  __optItemRender: function __optItemRender(item, index) {
    var _this = this;

    var _opt = OPTS[item];

    if (_opt) {
      return React.createElement("div", {
        className: "opt " + (this.state.opt == item ? 'curr' : ''),
        key: index,
        onClick: function onClick() {
          return _this.__onOptItemClick(_opt, index);
        }
      }, _opt.icon && React.createElement(SVGIcon, {
        icon: _opt.icon
      }), _opt.text && React.createElement("span", null, _opt.text));
    }
  },
  __iconClickRender: function __iconClickRender() {
    return React.createElement("ul", {
      className: "zr-filter-field-opts"
    }, React.createElement(znui.react.DataView, {
      data: [].concat(this.props.opts).concat(['cancel']),
      itemRender: this.__optItemRender
    }));
  },
  __renderIcon: function __renderIcon() {
    if (this.state.icon) {
      return React.createElement(popup.Dropdown, {
        className: "filter-opt",
        popover: {
          render: this.__iconClickRender,
          onWindowInsideContainerEvent: function onWindowInsideContainerEvent(event, popover) {
            return true;
          }
        }
      }, React.createElement(SVGIcon, {
        onClick: this.__iconClick,
        icon: this.state.icon
      }));
    }

    return null;
  },
  render: function render() {
    if (this.props.isHidden) {
      return null;
    }

    var _props = zn.extend({}, this.props, {
      onChange: this.__InputChange,
      onEnter: this.__InputEnter
    });

    var _component = znui.react.createReactElement(_props.component || _props.render || inputs.Input, _props);

    return React.createElement("div", {
      className: znui.react.classname("zr-filter-field", this.props.className),
      disabled: this.props.disabled
    }, this.__renderIcon(), _component);
  }
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'Filter': __webpack_require__(/*! ./Filter */ "./Filter.js"),
  'FilterField': __webpack_require__(/*! ./FilterField */ "./FilterField.js")
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "znui-react-icon":
/*!***********************!*\
  !*** external "icon" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["icon"]; }());

/***/ }),

/***/ "znui-react-input":
/*!************************!*\
  !*** external "input" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["input"]; }());

/***/ }),

/***/ "znui-react-loader":
/*!*************************!*\
  !*** external "loader" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["loader"]; }());

/***/ }),

/***/ "znui-react-popup":
/*!************************!*\
  !*** external "popup" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["popup"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRmlsdGVyLmpzIiwid2VicGFjazovLy8uL0ZpbHRlckZpZWxkLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9wdXBcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwiRmlsdGVyRmllbGQiLCJsb2FkZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJkYXRhIiwiX19pdGVtRmlsdGVyQ2hhbmdlIiwiZXZlbnQiLCJpdGVtIiwiaW5kZXgiLCJzZW5kZXIiLCJzdGF0ZSIsIm5hbWUiLCJvcHQiLCJ2YWx1ZSIsInByb3BzIiwib25GaWx0ZXJDaGFuZ2UiLCJfX2l0ZW1SZW5kZXIiLCJsYWJlbCIsIl9fb25Mb2FkaW5nIiwic2V0U3RhdGUiLCJfX29uRmluaXNoZWQiLCJyZW5kZXIiLCJyZWFjdCIsImNsYXNzbmFtZSIsImNsYXNzTmFtZSIsInN0eWxlIiwiU1ZHSWNvbiIsImlucHV0cyIsInBvcHVwIiwiT1BUUyIsInRleHQiLCJpY29uIiwiZ2V0RGVmYXVsdFByb3BzIiwib3B0cyIsIl9fSW5wdXRDaGFuZ2UiLCJpbnB1dCIsIm9wdEljb24iLCJvbkNoYW5nZSIsInRhcmdldCIsInRhZ05hbWUiLCJhbGVydCIsIl9fSW5wdXRFbnRlciIsIm9uQ2FuY2VsIiwiX19vbk9wdEl0ZW1DbGljayIsIm9uT3B0Q2hhbmdlIiwiX19vcHRJdGVtUmVuZGVyIiwiX29wdCIsIl9faWNvbkNsaWNrUmVuZGVyIiwiY29uY2F0IiwiX19yZW5kZXJJY29uIiwib25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudCIsInBvcG92ZXIiLCJfX2ljb25DbGljayIsImlzSGlkZGVuIiwiX3Byb3BzIiwiem4iLCJleHRlbmQiLCJvbkVudGVyIiwiX2NvbXBvbmVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsImNvbXBvbmVudCIsIklucHV0IiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFMLElBQWNFLG1CQUFPLENBQUMsb0JBQUQsQ0FBakM7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHRCxtQkFBTyxDQUFDLHVDQUFELENBQXpCOztBQUNBLElBQUlFLE1BQU0sR0FBR0YsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFwQjs7QUFDQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixLQUFLLENBQUNPLFdBQU4s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TCxDQUFXVSxTQUFuRCxDQUFoQjtBQUErRSxjQUFRLEVBQUUsS0FBS1YsS0FBTCxDQUFXZ0Q7QUFBcEcsT0FDRSxLQUFLYixZQUFMLEVBREYsRUFFR1MsVUFGSCxDQUREO0FBTUE7QUF0SGlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDZEE1RCxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYixZQUFVSixtQkFBTyxDQUFDLDZCQUFELENBREo7QUFFYixpQkFBZUEsbUJBQU8sQ0FBQyx1Q0FBRDtBQUZULENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLCtCQUErQixFQUFFLEk7Ozs7Ozs7Ozs7O0FDQTlDLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLGdDQUFnQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgRmlsdGVyRmllbGQgPSByZXF1aXJlKCcuL0ZpbHRlckZpZWxkJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGaWx0ZXInLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0ZGF0YToge31cblx0XHR9O1xuXHR9LFxuXHRfX2l0ZW1GaWx0ZXJDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaXRlbSwgaW5kZXgpe1xuXHRcdGV2ZW50LmRhdGEgPSBpdGVtO1xuXHRcdGV2ZW50LmluZGV4ID0gaW5kZXg7XG5cdFx0ZXZlbnQuc2VuZGVyID0gdGhpcztcblx0XHR0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV0gPSB7IG5hbWU6IGV2ZW50Lm5hbWUsIG9wdDogZXZlbnQub3B0LCB2YWx1ZTogZXZlbnQudmFsdWUgfTtcblx0XHR0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZXZlbnQsIHRoaXMuc3RhdGUuZGF0YSwgdGhpcyk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRyZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmaWx0ZXItaXRlbVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpdGVtLWxhYmVsXCI+e2l0ZW0ubGFiZWx9PC9kaXY+XG5cdFx0XHQ8RmlsdGVyRmllbGQgY2xhc3NOYW1lPVwiaXRlbS1maWVsZFwiIHsuLi5pdGVtfSBvbkNoYW5nZT17KGV2ZW50KT0+dGhpcy5fX2l0ZW1GaWx0ZXJDaGFuZ2UoZXZlbnQsIGl0ZW0sIGluZGV4KX0gLz5cblx0XHQ8L2Rpdj5cblx0fSxcblx0X19vbkxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRmluaXNoZWQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWZpbHRlclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gb25Mb2FkaW5nPXt0aGlzLl9fb25Mb2FkaW5nfSBvbkZpbmlzaGVkPXt0aGlzLl9fb25GaW5pc2hlZH0gLz5cblx0XHRcdFx0e3RoaXMuc3RhdGUubG9hZGluZyAmJiA8bG9hZGVyLkxvYWRlciBjb250ZW50PVwiLi4uXCIgbG9hZGVyPVwiY2lyY2xlXCIgc2l6ZT1cInNpemUtc21haWxcIiBsYXlvdXQ9XCJmbGV4LXJvd1wiIC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFNWR0ljb24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWljb24nKS5TVkdJY29uO1xudmFyIGlucHV0cyA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaW5wdXQnKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcblxudmFyIE9QVFMgPSB7XG5cdCc9JzogeyB0ZXh0OiAn562J5LqOJywgdmFsdWU6ICc9JywgaWNvbjogJ2ZhRXF1YWxzJyB9LFxuXHQnPj0nOiB7IHRleHQ6ICflpKfkuo4nLCB2YWx1ZTogJz49JywgaWNvbjogJ2ZhR3JlYXRlclRoYW5FcXVhbCcgfSxcblx0Jz08JzogeyB0ZXh0OiAn5bCP5LqOJywgdmFsdWU6ICc9PCcsIGljb246ICdmYUxlc3NUaGFuRXF1YWwnIH0sXG5cdCchPSc6IHsgdGV4dDogJ+S4jeetieS6jicsIHZhbHVlOiAnIT0nLCBpY29uOiAnZmFOb3RFcXVhbCcgfSxcblx0JyUnOiB7IHRleHQ6ICfnm7jkvLwnLCB2YWx1ZTogJyUnLCBpY29uOiAnZmFQZXJjZW50JyB9LFxuXHQnY2FuY2VsJzogeyB0ZXh0OiAn5Y+W5raIJywgdmFsdWU6ICdjYW5jZWwnLCBpY29uOiAnZmFUaW1lcycgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJGaWx0ZXJGaWVsZCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG9wdHM6IFsnJScsICc9J10sXG5cdFx0XHRpY29uOiAnZmFGaWx0ZXInLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJ1xuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWNvbjogdGhpcy5wcm9wcy5pY29uLFxuXHRcdFx0b3B0OiB0aGlzLnByb3BzLm9wdCxcblx0XHRcdHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG5cdFx0fVxuXHR9LFxuXHRfX0lucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0KXtcblx0XHRldmVudC5uYW1lID0gdGhpcy5wcm9wcy5uYW1lO1xuXHRcdGV2ZW50Lm9wdCA9IHRoaXMuc3RhdGUub3B0O1xuXHRcdGV2ZW50Lm9wdEljb24gPSB0aGlzLnN0YXRlLmljb247XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogZXZlbnQudmFsdWVcblx0XHR9KTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGlucHV0KTtcblx0XHRcblx0XHRpZihldmVudC50YXJnZXQudGFnTmFtZSE9J0lOUFVUJykge1xuXHRcdFx0aWYoIXRoaXMuc3RhdGUub3B0KSB7XG5cdFx0XHRcdHJldHVybiBhbGVydCgnVGhlIG9wdCBpcyBudWxsLicpLCBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmKCFldmVudC52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gYWxlcnQoJ1RoZSB2YWx1ZSBpcyBudWxsLicpLCBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShldmVudCwgaW5wdXQpO1xuXHRcdH1cblx0fSxcblx0X19JbnB1dEVudGVyOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0KXtcblx0XHRldmVudC5uYW1lID0gdGhpcy5wcm9wcy5uYW1lO1xuXHRcdGV2ZW50Lm9wdCA9IHRoaXMuc3RhdGUub3B0O1xuXHRcdGV2ZW50Lm9wdEljb24gPSB0aGlzLnN0YXRlLmljb247XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogZXZlbnQudmFsdWVcblx0XHR9KTtcblxuXHRcdGlmKCF0aGlzLnN0YXRlLm9wdCkge1xuXHRcdFx0cmV0dXJuIGFsZXJ0KCdUaGUgb3B0IGlzIG51bGwuJyksIGZhbHNlO1xuXHRcdH1cblx0XHRpZighZXZlbnQudmFsdWUpIHtcblx0XHRcdHRoaXMucHJvcHMub25DYW5jZWwgJiYgdGhpcy5wcm9wcy5vbkNhbmNlbCh0aGlzLnByb3BzLm5hbWUpO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZXZlbnQsIGlucHV0KTtcblx0fSxcblx0X19vbk9wdEl0ZW1DbGljazogZnVuY3Rpb24gKG9wdCwgaW5kZXgpe1xuXHRcdGlmKG9wdC52YWx1ZSA9PSAnY2FuY2VsJykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGljb246ICdmYUZpbHRlcicsXG5cdFx0XHRcdG9wdDogJydcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMub25DYW5jZWwgJiYgdGhpcy5wcm9wcy5vbkNhbmNlbCh0aGlzLnByb3BzLm5hbWUpLCBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpY29uOiBvcHQuaWNvbixcblx0XHRcdG9wdDogb3B0LnZhbHVlXG5cdFx0fSk7XG5cdFx0aWYodGhpcy5zdGF0ZS52YWx1ZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbk9wdENoYW5nZSAmJiB0aGlzLnByb3BzLm9uT3B0Q2hhbmdlKHtcblx0XHRcdFx0bmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcblx0XHRcdFx0b3B0OiBvcHQudmFsdWUsXG5cdFx0XHRcdG9wdEljb246IG9wdC5pY29uXG5cdFx0XHR9LCB0aGlzKTtcblx0XHR9XG5cdH0sXG5cdF9fb3B0SXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX29wdCA9IE9QVFNbaXRlbV07XG5cdFx0aWYoX29wdCl7XG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wib3B0IFwiICsgKHRoaXMuc3RhdGUub3B0ID09IGl0ZW0gPyAnY3VycicgOiAnJyl9IGtleT17aW5kZXh9IG9uQ2xpY2s9eygpPT50aGlzLl9fb25PcHRJdGVtQ2xpY2soX29wdCwgaW5kZXgpfSA+XG5cdFx0XHRcdHtfb3B0Lmljb24gJiYgPFNWR0ljb24gaWNvbj17X29wdC5pY29ufSAvPn1cblx0XHRcdFx0e19vcHQudGV4dCAmJiA8c3Bhbj57X29wdC50ZXh0fTwvc3Bhbj59XG5cdFx0XHQ8L2Rpdj47XG5cdFx0fVxuXHR9LFxuXHRfX2ljb25DbGlja1JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIDx1bCBjbGFzc05hbWU9XCJ6ci1maWx0ZXItZmllbGQtb3B0c1wiPlxuXHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17W10uY29uY2F0KHRoaXMucHJvcHMub3B0cykuY29uY2F0KFsnY2FuY2VsJ10pfSBpdGVtUmVuZGVyPXt0aGlzLl9fb3B0SXRlbVJlbmRlcn0gLz5cblx0XHQ8L3VsPjtcblx0fSxcblx0X19yZW5kZXJJY29uOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnN0YXRlLmljb24pIHtcblx0XHRcdHJldHVybiA8cG9wdXAuRHJvcGRvd24gXG5cdFx0XHRcdGNsYXNzTmFtZT1cImZpbHRlci1vcHRcIiBcblx0XHRcdFx0cG9wb3Zlcj17e1xuXHRcdFx0XHRcdHJlbmRlcjogdGhpcy5fX2ljb25DbGlja1JlbmRlcixcblx0XHRcdFx0XHRvbldpbmRvd0luc2lkZUNvbnRhaW5lckV2ZW50OiBmdW5jdGlvbiAoZXZlbnQsIHBvcG92ZXIpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9fT5cblx0XHRcdFx0PFNWR0ljb24gb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gaWNvbj17dGhpcy5zdGF0ZS5pY29ufSAvPlxuXHRcdFx0PC9wb3B1cC5Ecm9wZG93bj47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pc0hpZGRlbil7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0dmFyIF9wcm9wcyA9IHpuLmV4dGVuZCh7fSwgdGhpcy5wcm9wcywge1xuXHRcdFx0b25DaGFuZ2U6IHRoaXMuX19JbnB1dENoYW5nZSxcblx0XHRcdG9uRW50ZXI6IHRoaXMuX19JbnB1dEVudGVyXG5cdFx0fSk7XG5cdFx0XG5cdFx0dmFyIF9jb21wb25lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChfcHJvcHMuY29tcG9uZW50IHx8IF9wcm9wcy5yZW5kZXIgfHwgaW5wdXRzLklucHV0LCBfcHJvcHMpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1maWx0ZXItZmllbGRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVySWNvbigpfVxuXHRcdFx0XHR7IF9jb21wb25lbnQgfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ0ZpbHRlcic6IHJlcXVpcmUoJy4vRmlsdGVyJyksXG4gICAgJ0ZpbHRlckZpZWxkJzogcmVxdWlyZSgnLi9GaWx0ZXJGaWVsZCcpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJpY29uXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaW5wdXRcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2FkZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwb3B1cFwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9