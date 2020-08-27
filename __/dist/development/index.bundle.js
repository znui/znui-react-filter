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

    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "filter-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "item-label"
    }, item.label), /*#__PURE__*/React.createElement(FilterField, _extends({
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
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-filter", this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement(znui.react.DataView, {
      data: this.props.data,
      itemRender: this.__itemRender,
      onLoading: this.__onLoading,
      onFinished: this.__onFinished
    }), this.state.loading && /*#__PURE__*/React.createElement(loader.Loader, {
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
  '>': {
    text: '大于',
    value: '>',
    icon: 'faGreaterThanEqual'
  },
  '>=': {
    text: '大于等于',
    value: '>=',
    icon: 'faGreaterThanEqual'
  },
  '<': {
    text: '小于',
    value: '<',
    icon: 'faLessThanEqual'
  },
  '<=': {
    text: '小于等于',
    value: '<=',
    icon: 'faLessThanEqual'
  },
  '<>': {
    text: '不等于',
    value: '<>',
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

    if (event.target.tagName == 'INPUT' && (event.target.type == 'text' || event.target.type == 'password')) {
      return false;
    }

    if (!this.state.opt) {
      return alert('The opt is null.'), false;
    }

    if (!event.value) {
      return alert('The value is null.'), false;
    }

    this.props.onFilterChange && this.props.onFilterChange(event, input);
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
      return /*#__PURE__*/React.createElement("div", {
        className: "opt " + (this.state.opt == item ? 'curr' : ''),
        key: index,
        onClick: function onClick() {
          return _this.__onOptItemClick(_opt, index);
        }
      }, _opt.icon && /*#__PURE__*/React.createElement(SVGIcon, {
        icon: _opt.icon
      }), _opt.text && /*#__PURE__*/React.createElement("span", null, _opt.text));
    }
  },
  __iconClickRender: function __iconClickRender() {
    return /*#__PURE__*/React.createElement("ul", {
      className: "zr-filter-field-opts"
    }, /*#__PURE__*/React.createElement(znui.react.DataView, {
      data: [].concat(this.props.opts).concat(['cancel']),
      itemRender: this.__optItemRender
    }));
  },
  __renderIcon: function __renderIcon() {
    if (this.state.icon) {
      return /*#__PURE__*/React.createElement(popup.Dropdown, {
        className: "filter-opt",
        popover: {
          render: this.__iconClickRender,
          onWindowInsideContainerEvent: function onWindowInsideContainerEvent(event, popover) {
            return true;
          }
        }
      }, /*#__PURE__*/React.createElement(SVGIcon, {
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

    var _inputProps = zn.extend({}, this.props, {
      className: znui.react.classname('filter-field-input', this.props.inputClassName),
      onChange: this.__InputChange,
      onEnter: this.__InputEnter
    });

    var _input = this.props.input || this.props.component || this.props.render || inputs.Input;

    if (_input && typeof _input == 'function' && !_input.prototype.isReactComponent) {
      _input = _input.call(null, this, _inputProps);
    }

    var _inputElement = znui.react.createReactElement(_input, _inputProps);

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-filter-field", this.props.className),
      disabled: this.props.disabled
    }, this.__renderIcon(), _inputElement);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRmlsdGVyLmpzIiwid2VicGFjazovLy8uL0ZpbHRlckZpZWxkLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9wdXBcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwiRmlsdGVyRmllbGQiLCJsb2FkZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJkYXRhIiwiX19pdGVtRmlsdGVyQ2hhbmdlIiwiZXZlbnQiLCJpdGVtIiwiaW5kZXgiLCJzZW5kZXIiLCJzdGF0ZSIsIm5hbWUiLCJvcHQiLCJ2YWx1ZSIsInByb3BzIiwib25GaWx0ZXJDaGFuZ2UiLCJfX2l0ZW1SZW5kZXIiLCJsYWJlbCIsIl9fb25Mb2FkaW5nIiwic2V0U3RhdGUiLCJfX29uRmluaXNoZWQiLCJyZW5kZXIiLCJyZWFjdCIsImNsYXNzbmFtZSIsImNsYXNzTmFtZSIsInN0eWxlIiwiU1ZHSWNvbiIsImlucHV0cyIsInBvcHVwIiwiT1BUUyIsInRleHQiLCJpY29uIiwiZ2V0RGVmYXVsdFByb3BzIiwib3B0cyIsIl9fSW5wdXRDaGFuZ2UiLCJpbnB1dCIsIm9wdEljb24iLCJvbkNoYW5nZSIsInRhcmdldCIsInRhZ05hbWUiLCJ0eXBlIiwiYWxlcnQiLCJfX0lucHV0RW50ZXIiLCJvbkNhbmNlbCIsIl9fb25PcHRJdGVtQ2xpY2siLCJvbk9wdENoYW5nZSIsIl9fb3B0SXRlbVJlbmRlciIsIl9vcHQiLCJfX2ljb25DbGlja1JlbmRlciIsImNvbmNhdCIsIl9fcmVuZGVySWNvbiIsIm9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQiLCJwb3BvdmVyIiwiX19pY29uQ2xpY2siLCJpc0hpZGRlbiIsIl9pbnB1dFByb3BzIiwiem4iLCJleHRlbmQiLCJpbnB1dENsYXNzTmFtZSIsIm9uRW50ZXIiLCJfaW5wdXQiLCJjb21wb25lbnQiLCJJbnB1dCIsInByb3RvdHlwZSIsImlzUmVhY3RDb21wb25lbnQiLCJjYWxsIiwiX2lucHV0RWxlbWVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBTCxJQUFjRSxtQkFBTyxDQUFDLG9CQUFELENBQWpDOztBQUNBLElBQUlDLFdBQVcsR0FBR0QsbUJBQU8sQ0FBQyx1Q0FBRCxDQUF6Qjs7QUFDQSxJQUFJRSxN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QkFBTyxDQUFDLDZCQUFELENBREo7QUFFYixpQkFBZUEsbUJBQU8sQ0FBQyx1Q0FBRDtBQUZULENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLCtCQUErQixFQUFFLEk7Ozs7Ozs7Ozs7O0FDQTlDLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLGdDQUFnQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgRmlsdGVyRmllbGQgPSByZXF1aXJlKCcuL0ZpbHRlckZpZWxkJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGaWx0ZXInLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0ZGF0YToge31cblx0XHR9O1xuXHR9LFxuXHRfX2l0ZW1GaWx0ZXJDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaXRlbSwgaW5kZXgpe1xuXHRcdGV2ZW50LmRhdGEgPSBpdGVtO1xuXHRcdGV2ZW50LmluZGV4ID0gaW5kZXg7XG5cdFx0ZXZlbnQuc2VuZGVyID0gdGhpcztcblx0XHR0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV0gPSB7IG5hbWU6IGV2ZW50Lm5hbWUsIG9wdDogZXZlbnQub3B0LCB2YWx1ZTogZXZlbnQudmFsdWUgfTtcblx0XHR0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZXZlbnQsIHRoaXMuc3RhdGUuZGF0YSwgdGhpcyk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRyZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmaWx0ZXItaXRlbVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpdGVtLWxhYmVsXCI+e2l0ZW0ubGFiZWx9PC9kaXY+XG5cdFx0XHQ8RmlsdGVyRmllbGQgY2xhc3NOYW1lPVwiaXRlbS1maWVsZFwiIHsuLi5pdGVtfSBvbkNoYW5nZT17KGV2ZW50KT0+dGhpcy5fX2l0ZW1GaWx0ZXJDaGFuZ2UoZXZlbnQsIGl0ZW0sIGluZGV4KX0gLz5cblx0XHQ8L2Rpdj5cblx0fSxcblx0X19vbkxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRmluaXNoZWQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWZpbHRlclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gb25Mb2FkaW5nPXt0aGlzLl9fb25Mb2FkaW5nfSBvbkZpbmlzaGVkPXt0aGlzLl9fb25GaW5pc2hlZH0gLz5cblx0XHRcdFx0e3RoaXMuc3RhdGUubG9hZGluZyAmJiA8bG9hZGVyLkxvYWRlciBjb250ZW50PVwiLi4uXCIgbG9hZGVyPVwiY2lyY2xlXCIgc2l6ZT1cInNpemUtc21haWxcIiBsYXlvdXQ9XCJmbGV4LXJvd1wiIC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFNWR0ljb24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWljb24nKS5TVkdJY29uO1xudmFyIGlucHV0cyA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaW5wdXQnKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcblxudmFyIE9QVFMgPSB7XG5cdCc9JzogeyB0ZXh0OiAn562J5LqOJywgdmFsdWU6ICc9JywgaWNvbjogJ2ZhRXF1YWxzJyB9LFxuXHQnPic6IHsgdGV4dDogJ+Wkp+S6jicsIHZhbHVlOiAnPicsIGljb246ICdmYUdyZWF0ZXJUaGFuRXF1YWwnIH0sXG5cdCc+PSc6IHsgdGV4dDogJ+Wkp+S6juetieS6jicsIHZhbHVlOiAnPj0nLCBpY29uOiAnZmFHcmVhdGVyVGhhbkVxdWFsJyB9LFxuXHQnPCc6IHsgdGV4dDogJ+Wwj+S6jicsIHZhbHVlOiAnPCcsIGljb246ICdmYUxlc3NUaGFuRXF1YWwnIH0sXG5cdCc8PSc6IHsgdGV4dDogJ+Wwj+S6juetieS6jicsIHZhbHVlOiAnPD0nLCBpY29uOiAnZmFMZXNzVGhhbkVxdWFsJyB9LFxuXHQnPD4nOiB7IHRleHQ6ICfkuI3nrYnkuo4nLCB2YWx1ZTogJzw+JywgaWNvbjogJ2ZhTm90RXF1YWwnIH0sXG5cdCclJzogeyB0ZXh0OiAn55u45Ly8JywgdmFsdWU6ICclJywgaWNvbjogJ2ZhUGVyY2VudCcgfSxcblx0J2NhbmNlbCc6IHsgdGV4dDogJ+WPlua2iCcsIHZhbHVlOiAnY2FuY2VsJywgaWNvbjogJ2ZhVGltZXMnIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSRmlsdGVyRmllbGQnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRvcHRzOiBbJyUnLCAnPSddLFxuXHRcdFx0aWNvbjogJ2ZhRmlsdGVyJyxcblx0XHRcdGNsYXNzTmFtZTogJydcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGljb246IHRoaXMucHJvcHMuaWNvbixcblx0XHRcdG9wdDogdGhpcy5wcm9wcy5vcHQsXG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuXHRcdH1cblx0fSxcblx0X19JbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCl7XG5cdFx0ZXZlbnQubmFtZSA9IHRoaXMucHJvcHMubmFtZTtcblx0XHRldmVudC5vcHQgPSB0aGlzLnN0YXRlLm9wdDtcblx0XHRldmVudC5vcHRJY29uID0gdGhpcy5zdGF0ZS5pY29uO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IGV2ZW50LnZhbHVlXG5cdFx0fSk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBpbnB1dCk7XG5cdFx0aWYoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT0gJ0lOUFVUJyAmJiAoZXZlbnQudGFyZ2V0LnR5cGUgPT0gJ3RleHQnIHx8IGV2ZW50LnRhcmdldC50eXBlID09ICdwYXNzd29yZCcpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYoIXRoaXMuc3RhdGUub3B0KSB7XG5cdFx0XHRyZXR1cm4gYWxlcnQoJ1RoZSBvcHQgaXMgbnVsbC4nKSwgZmFsc2U7XG5cdFx0fVxuXHRcdGlmKCFldmVudC52YWx1ZSkge1xuXHRcdFx0cmV0dXJuIGFsZXJ0KCdUaGUgdmFsdWUgaXMgbnVsbC4nKSwgZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShldmVudCwgaW5wdXQpO1xuXHR9LFxuXHRfX0lucHV0RW50ZXI6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQpe1xuXHRcdGV2ZW50Lm5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XG5cdFx0ZXZlbnQub3B0ID0gdGhpcy5zdGF0ZS5vcHQ7XG5cdFx0ZXZlbnQub3B0SWNvbiA9IHRoaXMuc3RhdGUuaWNvbjtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiBldmVudC52YWx1ZVxuXHRcdH0pO1xuXG5cdFx0aWYoIXRoaXMuc3RhdGUub3B0KSB7XG5cdFx0XHRyZXR1cm4gYWxlcnQoJ1RoZSBvcHQgaXMgbnVsbC4nKSwgZmFsc2U7XG5cdFx0fVxuXHRcdGlmKCFldmVudC52YWx1ZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNhbmNlbCAmJiB0aGlzLnByb3BzLm9uQ2FuY2VsKHRoaXMucHJvcHMubmFtZSk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShldmVudCwgaW5wdXQpO1xuXHR9LFxuXHRfX29uT3B0SXRlbUNsaWNrOiBmdW5jdGlvbiAob3B0LCBpbmRleCl7XG5cdFx0aWYob3B0LnZhbHVlID09ICdjYW5jZWwnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aWNvbjogJ2ZhRmlsdGVyJyxcblx0XHRcdFx0b3B0OiAnJ1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5vbkNhbmNlbCAmJiB0aGlzLnByb3BzLm9uQ2FuY2VsKHRoaXMucHJvcHMubmFtZSksIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGljb246IG9wdC5pY29uLFxuXHRcdFx0b3B0OiBvcHQudmFsdWVcblx0XHR9KTtcblx0XHRpZih0aGlzLnN0YXRlLnZhbHVlKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uT3B0Q2hhbmdlICYmIHRoaXMucHJvcHMub25PcHRDaGFuZ2Uoe1xuXHRcdFx0XHRuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG5cdFx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0XHRvcHQ6IG9wdC52YWx1ZSxcblx0XHRcdFx0b3B0SWNvbjogb3B0Lmljb25cblx0XHRcdH0sIHRoaXMpO1xuXHRcdH1cblx0fSxcblx0X19vcHRJdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfb3B0ID0gT1BUU1tpdGVtXTtcblx0XHRpZihfb3B0KXtcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJvcHQgXCIgKyAodGhpcy5zdGF0ZS5vcHQgPT0gaXRlbSA/ICdjdXJyJyA6ICcnKX0ga2V5PXtpbmRleH0gb25DbGljaz17KCk9PnRoaXMuX19vbk9wdEl0ZW1DbGljayhfb3B0LCBpbmRleCl9ID5cblx0XHRcdFx0e19vcHQuaWNvbiAmJiA8U1ZHSWNvbiBpY29uPXtfb3B0Lmljb259IC8+fVxuXHRcdFx0XHR7X29wdC50ZXh0ICYmIDxzcGFuPntfb3B0LnRleHR9PC9zcGFuPn1cblx0XHRcdDwvZGl2Pjtcblx0XHR9XG5cdH0sXG5cdF9faWNvbkNsaWNrUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gPHVsIGNsYXNzTmFtZT1cInpyLWZpbHRlci1maWVsZC1vcHRzXCI+XG5cdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXtbXS5jb25jYXQodGhpcy5wcm9wcy5vcHRzKS5jb25jYXQoWydjYW5jZWwnXSl9IGl0ZW1SZW5kZXI9e3RoaXMuX19vcHRJdGVtUmVuZGVyfSAvPlxuXHRcdDwvdWw+O1xuXHR9LFxuXHRfX3JlbmRlckljb246IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuaWNvbikge1xuXHRcdFx0cmV0dXJuIDxwb3B1cC5Ecm9wZG93biBcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZmlsdGVyLW9wdFwiIFxuXHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0cmVuZGVyOiB0aGlzLl9faWNvbkNsaWNrUmVuZGVyLFxuXHRcdFx0XHRcdG9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQ6IGZ1bmN0aW9uIChldmVudCwgcG9wb3Zlcil7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8U1ZHSWNvbiBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBpY29uPXt0aGlzLnN0YXRlLmljb259IC8+XG5cdFx0XHQ8L3BvcHVwLkRyb3Bkb3duPjtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmlzSGlkZGVuKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHZhciBfaW5wdXRQcm9wcyA9IHpuLmV4dGVuZCh7fSwgdGhpcy5wcm9wcywge1xuXHRcdFx0Y2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnZmlsdGVyLWZpZWxkLWlucHV0JywgdGhpcy5wcm9wcy5pbnB1dENsYXNzTmFtZSksXG5cdFx0XHRvbkNoYW5nZTogdGhpcy5fX0lucHV0Q2hhbmdlLFxuXHRcdFx0b25FbnRlcjogdGhpcy5fX0lucHV0RW50ZXJcblx0XHR9KTtcblxuXHRcdHZhciBfaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0IHx8IHRoaXMucHJvcHMuY29tcG9uZW50IHx8IHRoaXMucHJvcHMucmVuZGVyIHx8IGlucHV0cy5JbnB1dDtcblx0XHRpZihfaW5wdXQgJiYgdHlwZW9mIF9pbnB1dCA9PSAnZnVuY3Rpb24nICYmICFfaW5wdXQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpe1xuXHRcdFx0X2lucHV0ID0gX2lucHV0LmNhbGwobnVsbCwgdGhpcywgX2lucHV0UHJvcHMpO1xuXHRcdH1cblxuXHRcdHZhciBfaW5wdXRFbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoX2lucHV0LCBfaW5wdXRQcm9wcyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWZpbHRlci1maWVsZFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfT5cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVySWNvbigpIH1cblx0XHRcdFx0eyBfaW5wdXRFbGVtZW50IH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdGaWx0ZXInOiByZXF1aXJlKCcuL0ZpbHRlcicpLFxuICAgICdGaWx0ZXJGaWVsZCc6IHJlcXVpcmUoJy4vRmlsdGVyRmllbGQnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaWNvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImlucHV0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicG9wdXBcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==