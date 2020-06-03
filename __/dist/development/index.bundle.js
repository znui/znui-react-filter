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

    var _props = zn.extend({}, this.props, {
      onChange: this.__InputChange,
      onEnter: this.__InputEnter
    });

    var _component = znui.react.createReactElement(_props.component || _props.render || inputs.Input, _props);

    return /*#__PURE__*/React.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRmlsdGVyLmpzIiwid2VicGFjazovLy8uL0ZpbHRlckZpZWxkLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9wdXBcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwiRmlsdGVyRmllbGQiLCJsb2FkZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJkYXRhIiwiX19pdGVtRmlsdGVyQ2hhbmdlIiwiZXZlbnQiLCJpdGVtIiwiaW5kZXgiLCJzZW5kZXIiLCJzdGF0ZSIsIm5hbWUiLCJvcHQiLCJ2YWx1ZSIsInByb3BzIiwib25GaWx0ZXJDaGFuZ2UiLCJfX2l0ZW1SZW5kZXIiLCJsYWJlbCIsIl9fb25Mb2FkaW5nIiwic2V0U3RhdGUiLCJfX29uRmluaXNoZWQiLCJyZW5kZXIiLCJyZWFjdCIsImNsYXNzbmFtZSIsImNsYXNzTmFtZSIsInN0eWxlIiwiU1ZHSWNvbiIsImlucHV0cyIsInBvcHVwIiwiT1BUUyIsInRleHQiLCJpY29uIiwiZ2V0RGVmYXVsdFByb3BzIiwib3B0cyIsIl9fSW5wdXRDaGFuZ2UiLCJpbnB1dCIsIm9wdEljb24iLCJvbkNoYW5nZSIsInRhcmdldCIsInRhZ05hbWUiLCJhbGVydCIsIl9fSW5wdXRFbnRlciIsIm9uQ2FuY2VsIiwiX19vbk9wdEl0ZW1DbGljayIsIm9uT3B0Q2hhbmdlIiwiX19vcHRJdGVtUmVuZGVyIiwiX29wdCIsIl9faWNvbkNsaWNrUmVuZGVyIiwiY29uY2F0IiwiX19yZW5kZXJJY29uIiwib25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudCIsInBvcG92ZXIiLCJfX2ljb25DbGljayIsImlzSGlkZGVuIiwiX3Byb3BzIiwiem4iLCJleHRlbmQiLCJvbkVudGVyIiwiX2NvbXBvbmVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsImNvbXBvbmVudCIsIklucHV0IiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFMLElBQWNFLG1CQUFPLENBQUMsb0JBQUQsQ0FBakM7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHRCxtQkFBTyxDQUFDLHVDQUFELENBQXpCOztBQUNBLElBQUlFLE1BQU0sR0FBR0YsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFwQjs7QUFDQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixLQUFLLENBQUNPLFdBQU4s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QXdDLEtBQUtULEtBQUwsQ0FBV1UsU0FBbkQsQ0FBaEI7QUFBK0UsY0FBUSxFQUFFLEtBQUtWLEtBQUwsQ0FBV2dEO0FBQXBHLE9BQ0UsS0FBS2IsWUFBTCxFQURGLEVBRUdTLFVBRkgsQ0FERDtBQU1BO0FBdEhpQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7OztBQ2RBNUQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2IsWUFBVUosbUJBQU8sQ0FBQyw2QkFBRCxDQURKO0FBRWIsaUJBQWVBLG1CQUFPLENBQUMsdUNBQUQ7QUFGVCxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSwrQkFBK0IsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E5QyxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsaUNBQWlDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBaEQsYUFBYSxnQ0FBZ0MsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEZpbHRlckZpZWxkID0gcmVxdWlyZSgnLi9GaWx0ZXJGaWVsZCcpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRmlsdGVyJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdGRhdGE6IHt9XG5cdFx0fTtcblx0fSxcblx0X19pdGVtRmlsdGVyQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0sIGluZGV4KXtcblx0XHRldmVudC5kYXRhID0gaXRlbTtcblx0XHRldmVudC5pbmRleCA9IGluZGV4O1xuXHRcdGV2ZW50LnNlbmRlciA9IHRoaXM7XG5cdFx0dGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdID0geyBuYW1lOiBldmVudC5uYW1lLCBvcHQ6IGV2ZW50Lm9wdCwgdmFsdWU6IGV2ZW50LnZhbHVlIH07XG5cdFx0dGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlKGV2ZW50LCB0aGlzLnN0YXRlLmRhdGEsIHRoaXMpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmlsdGVyLWl0ZW1cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1sYWJlbFwiPntpdGVtLmxhYmVsfTwvZGl2PlxuXHRcdFx0PEZpbHRlckZpZWxkIGNsYXNzTmFtZT1cIml0ZW0tZmllbGRcIiB7Li4uaXRlbX0gb25DaGFuZ2U9eyhldmVudCk9PnRoaXMuX19pdGVtRmlsdGVyQ2hhbmdlKGV2ZW50LCBpdGVtLCBpbmRleCl9IC8+XG5cdFx0PC9kaXY+XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1maWx0ZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IG9uTG9hZGluZz17dGhpcy5fX29uTG9hZGluZ30gb25GaW5pc2hlZD17dGhpcy5fX29uRmluaXNoZWR9IC8+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGxvYWRlci5Mb2FkZXIgY29udGVudD1cIi4uLlwiIGxvYWRlcj1cImNpcmNsZVwiIHNpemU9XCJzaXplLXNtYWlsXCIgbGF5b3V0PVwiZmxleC1yb3dcIiAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTVkdJY29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1pY29uJykuU1ZHSWNvbjtcbnZhciBpbnB1dHMgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWlucHV0Jyk7XG52YXIgcG9wdXAgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBvcHVwJyk7XG5cbnZhciBPUFRTID0ge1xuXHQnPSc6IHsgdGV4dDogJ+etieS6jicsIHZhbHVlOiAnPScsIGljb246ICdmYUVxdWFscycgfSxcblx0Jz49JzogeyB0ZXh0OiAn5aSn5LqOJywgdmFsdWU6ICc+PScsIGljb246ICdmYUdyZWF0ZXJUaGFuRXF1YWwnIH0sXG5cdCc9PCc6IHsgdGV4dDogJ+Wwj+S6jicsIHZhbHVlOiAnPTwnLCBpY29uOiAnZmFMZXNzVGhhbkVxdWFsJyB9LFxuXHQnIT0nOiB7IHRleHQ6ICfkuI3nrYnkuo4nLCB2YWx1ZTogJyE9JywgaWNvbjogJ2ZhTm90RXF1YWwnIH0sXG5cdCclJzogeyB0ZXh0OiAn55u45Ly8JywgdmFsdWU6ICclJywgaWNvbjogJ2ZhUGVyY2VudCcgfSxcblx0J2NhbmNlbCc6IHsgdGV4dDogJ+WPlua2iCcsIHZhbHVlOiAnY2FuY2VsJywgaWNvbjogJ2ZhVGltZXMnIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSRmlsdGVyRmllbGQnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRvcHRzOiBbJyUnLCAnPSddLFxuXHRcdFx0aWNvbjogJ2ZhRmlsdGVyJyxcblx0XHRcdGNsYXNzTmFtZTogJydcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGljb246IHRoaXMucHJvcHMuaWNvbixcblx0XHRcdG9wdDogdGhpcy5wcm9wcy5vcHQsXG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuXHRcdH1cblx0fSxcblx0X19JbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCl7XG5cdFx0ZXZlbnQubmFtZSA9IHRoaXMucHJvcHMubmFtZTtcblx0XHRldmVudC5vcHQgPSB0aGlzLnN0YXRlLm9wdDtcblx0XHRldmVudC5vcHRJY29uID0gdGhpcy5zdGF0ZS5pY29uO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IGV2ZW50LnZhbHVlXG5cdFx0fSk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBpbnB1dCk7XG5cdFx0XG5cdFx0aWYoZXZlbnQudGFyZ2V0LnRhZ05hbWUhPSdJTlBVVCcpIHtcblx0XHRcdGlmKCF0aGlzLnN0YXRlLm9wdCkge1xuXHRcdFx0XHRyZXR1cm4gYWxlcnQoJ1RoZSBvcHQgaXMgbnVsbC4nKSwgZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZighZXZlbnQudmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIGFsZXJ0KCdUaGUgdmFsdWUgaXMgbnVsbC4nKSwgZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZXZlbnQsIGlucHV0KTtcblx0XHR9XG5cdH0sXG5cdF9fSW5wdXRFbnRlcjogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCl7XG5cdFx0ZXZlbnQubmFtZSA9IHRoaXMucHJvcHMubmFtZTtcblx0XHRldmVudC5vcHQgPSB0aGlzLnN0YXRlLm9wdDtcblx0XHRldmVudC5vcHRJY29uID0gdGhpcy5zdGF0ZS5pY29uO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IGV2ZW50LnZhbHVlXG5cdFx0fSk7XG5cblx0XHRpZighdGhpcy5zdGF0ZS5vcHQpIHtcblx0XHRcdHJldHVybiBhbGVydCgnVGhlIG9wdCBpcyBudWxsLicpLCBmYWxzZTtcblx0XHR9XG5cdFx0aWYoIWV2ZW50LnZhbHVlKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ2FuY2VsICYmIHRoaXMucHJvcHMub25DYW5jZWwodGhpcy5wcm9wcy5uYW1lKTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlKGV2ZW50LCBpbnB1dCk7XG5cdH0sXG5cdF9fb25PcHRJdGVtQ2xpY2s6IGZ1bmN0aW9uIChvcHQsIGluZGV4KXtcblx0XHRpZihvcHQudmFsdWUgPT0gJ2NhbmNlbCcpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpY29uOiAnZmFGaWx0ZXInLFxuXHRcdFx0XHRvcHQ6ICcnXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB0aGlzLnByb3BzLm9uQ2FuY2VsICYmIHRoaXMucHJvcHMub25DYW5jZWwodGhpcy5wcm9wcy5uYW1lKSwgZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aWNvbjogb3B0Lmljb24sXG5cdFx0XHRvcHQ6IG9wdC52YWx1ZVxuXHRcdH0pO1xuXHRcdGlmKHRoaXMuc3RhdGUudmFsdWUpIHtcblx0XHRcdHRoaXMucHJvcHMub25PcHRDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbk9wdENoYW5nZSh7XG5cdFx0XHRcdG5hbWU6IHRoaXMucHJvcHMubmFtZSxcblx0XHRcdFx0dmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXG5cdFx0XHRcdG9wdDogb3B0LnZhbHVlLFxuXHRcdFx0XHRvcHRJY29uOiBvcHQuaWNvblxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0fVxuXHR9LFxuXHRfX29wdEl0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0dmFyIF9vcHQgPSBPUFRTW2l0ZW1dO1xuXHRcdGlmKF9vcHQpe1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcIm9wdCBcIiArICh0aGlzLnN0YXRlLm9wdCA9PSBpdGVtID8gJ2N1cnInIDogJycpfSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKT0+dGhpcy5fX29uT3B0SXRlbUNsaWNrKF9vcHQsIGluZGV4KX0gPlxuXHRcdFx0XHR7X29wdC5pY29uICYmIDxTVkdJY29uIGljb249e19vcHQuaWNvbn0gLz59XG5cdFx0XHRcdHtfb3B0LnRleHQgJiYgPHNwYW4+e19vcHQudGV4dH08L3NwYW4+fVxuXHRcdFx0PC9kaXY+O1xuXHRcdH1cblx0fSxcblx0X19pY29uQ2xpY2tSZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiA8dWwgY2xhc3NOYW1lPVwienItZmlsdGVyLWZpZWxkLW9wdHNcIj5cblx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e1tdLmNvbmNhdCh0aGlzLnByb3BzLm9wdHMpLmNvbmNhdChbJ2NhbmNlbCddKX0gaXRlbVJlbmRlcj17dGhpcy5fX29wdEl0ZW1SZW5kZXJ9IC8+XG5cdFx0PC91bD47XG5cdH0sXG5cdF9fcmVuZGVySWNvbjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5pY29uKSB7XG5cdFx0XHRyZXR1cm4gPHBvcHVwLkRyb3Bkb3duIFxuXHRcdFx0XHRjbGFzc05hbWU9XCJmaWx0ZXItb3B0XCIgXG5cdFx0XHRcdHBvcG92ZXI9e3tcblx0XHRcdFx0XHRyZW5kZXI6IHRoaXMuX19pY29uQ2xpY2tSZW5kZXIsXG5cdFx0XHRcdFx0b25XaW5kb3dJbnNpZGVDb250YWluZXJFdmVudDogZnVuY3Rpb24gKGV2ZW50LCBwb3BvdmVyKXtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxTVkdJY29uIG9uQ2xpY2s9e3RoaXMuX19pY29uQ2xpY2t9IGljb249e3RoaXMuc3RhdGUuaWNvbn0gLz5cblx0XHRcdDwvcG9wdXAuRHJvcGRvd24+O1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuaXNIaWRkZW4pe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHZhciBfcHJvcHMgPSB6bi5leHRlbmQoe30sIHRoaXMucHJvcHMsIHtcblx0XHRcdG9uQ2hhbmdlOiB0aGlzLl9fSW5wdXRDaGFuZ2UsXG5cdFx0XHRvbkVudGVyOiB0aGlzLl9fSW5wdXRFbnRlclxuXHRcdH0pO1xuXHRcdFxuXHRcdHZhciBfY29tcG9uZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoX3Byb3BzLmNvbXBvbmVudCB8fCBfcHJvcHMucmVuZGVyIHx8IGlucHV0cy5JbnB1dCwgX3Byb3BzKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItZmlsdGVyLWZpZWxkXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckljb24oKX1cblx0XHRcdFx0eyBfY29tcG9uZW50IH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdGaWx0ZXInOiByZXF1aXJlKCcuL0ZpbHRlcicpLFxuICAgICdGaWx0ZXJGaWVsZCc6IHJlcXVpcmUoJy4vRmlsdGVyRmllbGQnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaWNvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImlucHV0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicG9wdXBcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==