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
    icon: 'faGreater'
  },
  '>=': {
    text: '大于等于',
    value: '>=',
    icon: 'faGreaterThanEqual'
  },
  '<': {
    text: '小于',
    value: '<',
    icon: 'faLess'
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
      }, _opt.icon && this.__iconView(_opt.icon), _opt.text && /*#__PURE__*/React.createElement("span", null, _opt.text));
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
  __iconView: function __iconView(icon) {
    switch (icon) {
      case 'faFilter':
        return /*#__PURE__*/React.createElement("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "filter",
          className: "icon svg-inline--fa fa-filter fa-w-16 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"
        }));

      case 'faEquals':
        return /*#__PURE__*/React.createElement("svg", {
          onClick: this.__iconClick,
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "equals",
          className: "icon svg-inline--fa fa-equals fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M416 304H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32zm0-192H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
        }));

      case 'faGreater':
        return /*#__PURE__*/React.createElement("svg", {
          onClick: this.__iconClick,
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "greater-than",
          className: "icon svg-inline--fa fa-greater-than fa-w-12 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 384 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1 18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32.003 32.003 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01z"
        }));

      case 'faGreaterThanEqual':
        return /*#__PURE__*/React.createElement("svg", {
          onClick: this.__iconClick,
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "greater-than-equal",
          className: "icon svg-inline--fa fa-greater-than-equal fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M55.22 107.69l175.56 68.09-175.44 68.05c-18.39 6.03-27.88 24.39-21.2 41l12.09 30.08c6.68 16.61 26.99 25.19 45.38 19.15L393.02 214.2c13.77-4.52 22.98-16.61 22.98-30.17v-15.96c0-13.56-9.21-25.65-22.98-30.17L91.3 17.92c-18.29-6-38.51 2.53-45.15 19.06L34.12 66.9c-6.64 16.53 2.81 34.79 21.1 40.79zM424 400H24c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h400c13.25 0 24-10.75 24-24v-48c0-13.26-10.75-24-24-24z"
        }));

      case 'faLess':
        return /*#__PURE__*/React.createElement("svg", {
          onClick: this.__iconClick,
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "less-than",
          className: "icon svg-inline--fa fa-less-than fa-w-12 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 384 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M365.46 357.74L147.04 255.89l218.47-101.88c16.02-7.47 22.95-26.51 15.48-42.53l-13.52-29C360 66.46 340.96 59.53 324.94 67L18.48 209.91a32.014 32.014 0 0 0-18.48 29v34.24c0 12.44 7.21 23.75 18.48 29l306.31 142.83c16.06 7.49 35.15.54 42.64-15.52l13.56-29.08c7.49-16.06.54-35.15-15.53-42.64z"
        }));

      case 'faLessThanEqual':
        return /*#__PURE__*/React.createElement("svg", {
          onClick: this.__iconClick,
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "less-than-equal",
          className: "icon svg-inline--fa fa-less-than-equal fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M54.98 214.2l301.41 119.87c18.39 6.03 38.71-2.54 45.38-19.15l12.09-30.08c6.68-16.61-2.82-34.97-21.21-41l-175.44-68.05 175.56-68.09c18.29-6 27.74-24.27 21.1-40.79l-12.03-29.92c-6.64-16.53-26.86-25.06-45.15-19.06L54.98 137.89C41.21 142.41 32 154.5 32 168.07v15.96c0 13.56 9.21 25.65 22.98 30.17zM424 400H24c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h400c13.25 0 24-10.75 24-24v-48c0-13.26-10.75-24-24-24z"
        }));

      case 'faNotEqual':
        return /*#__PURE__*/React.createElement("svg", {
          onClick: this.__iconClick,
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "not-equal",
          className: "icon svg-inline--fa fa-not-equal fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M416 208c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32h-23.88l51.87-66.81c5.37-7.02 4.04-17.06-2.97-22.43L415.61 3.3c-7.02-5.38-17.06-4.04-22.44 2.97L311.09 112H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h204.56l-74.53 96H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h55.49l-51.87 66.81c-5.37 7.01-4.04 17.05 2.97 22.43L64 508.7c7.02 5.38 17.06 4.04 22.43-2.97L168.52 400H416c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32H243.05l74.53-96H416z"
        }));

      case 'faPercent':
        return /*#__PURE__*/React.createElement("svg", {
          onClick: this.__iconClick,
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "percent",
          className: "icon svg-inline--fa fa-percent fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M112 224c61.9 0 112-50.1 112-112S173.9 0 112 0 0 50.1 0 112s50.1 112 112 112zm0-160c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm224 224c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM392.3.2l31.6-.1c19.4-.1 30.9 21.8 19.7 37.8L77.4 501.6a23.95 23.95 0 0 1-19.6 10.2l-33.4.1c-19.5 0-30.9-21.9-19.7-37.8l368-463.7C377.2 4 384.5.2 392.3.2z"
        }));

      case 'faTimes':
        return /*#__PURE__*/React.createElement("svg", {
          onClick: this.__iconClick,
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "times",
          className: "icon svg-inline--fa fa-times fa-w-11 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 352 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
        }));
    }
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
      }, this.__iconView(this.state.icon));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRmlsdGVyLmpzIiwid2VicGFjazovLy8uL0ZpbHRlckZpZWxkLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb3B1cFwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJGaWx0ZXJGaWVsZCIsImxvYWRlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImRhdGEiLCJfX2l0ZW1GaWx0ZXJDaGFuZ2UiLCJldmVudCIsIml0ZW0iLCJpbmRleCIsInNlbmRlciIsInN0YXRlIiwibmFtZSIsIm9wdCIsInZhbHVlIiwicHJvcHMiLCJvbkZpbHRlckNoYW5nZSIsIl9faXRlbVJlbmRlciIsImxhYmVsIiwiX19vbkxvYWRpbmciLCJzZXRTdGF0ZSIsIl9fb25GaW5pc2hlZCIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJpbnB1dHMiLCJwb3B1cCIsIk9QVFMiLCJ0ZXh0IiwiaWNvbiIsImdldERlZmF1bHRQcm9wcyIsIm9wdHMiLCJfX0lucHV0Q2hhbmdlIiwiaW5wdXQiLCJvcHRJY29uIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwidHlwZSIsImFsZXJ0IiwiX19JbnB1dEVudGVyIiwib25DYW5jZWwiLCJfX29uT3B0SXRlbUNsaWNrIiwib25PcHRDaGFuZ2UiLCJfX29wdEl0ZW1SZW5kZXIiLCJfb3B0IiwiX19pY29uVmlldyIsIl9faWNvbkNsaWNrUmVuZGVyIiwiY29uY2F0IiwiX19pY29uQ2xpY2siLCJfX3JlbmRlckljb24iLCJvbldpbmRvd0luc2lkZUNvbnRhaW5lckV2ZW50IiwicG9wb3ZlciIsImlzSGlkZGVuIiwiX2lucHV0UHJvcHMiLCJ6biIsImV4dGVuZCIsImlucHV0Q2xhc3NOYW1lIiwib25FbnRlciIsIl9pbnB1dCIsImNvbXBvbmVudCIsIklucHV0IiwicHJvdG90eXBlIiwiaXNSZWFjdENvbXBvbmVudCIsImNhbGwiLCJfaW5wdXRFbGVtZW50IiwiY3JlYXRlUmVhY3RFbGVtZW50IiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFMLElBQWNFLG1CQUFPLENBQUMsb0JBQUQsQ0FBakM7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHRCxtQkFBTyxDQUFDLHVDQUFELENBQXpCOztBQUNBLElBQUlFLE1BQU0sR0FBR0YsbUJBQU8sQ0FBQyw0Q0FBRCxD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LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgRmlsdGVyRmllbGQgPSByZXF1aXJlKCcuL0ZpbHRlckZpZWxkJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGaWx0ZXInLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0ZGF0YToge31cblx0XHR9O1xuXHR9LFxuXHRfX2l0ZW1GaWx0ZXJDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaXRlbSwgaW5kZXgpe1xuXHRcdGV2ZW50LmRhdGEgPSBpdGVtO1xuXHRcdGV2ZW50LmluZGV4ID0gaW5kZXg7XG5cdFx0ZXZlbnQuc2VuZGVyID0gdGhpcztcblx0XHR0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV0gPSB7IG5hbWU6IGV2ZW50Lm5hbWUsIG9wdDogZXZlbnQub3B0LCB2YWx1ZTogZXZlbnQudmFsdWUgfTtcblx0XHR0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZXZlbnQsIHRoaXMuc3RhdGUuZGF0YSwgdGhpcyk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRyZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmaWx0ZXItaXRlbVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpdGVtLWxhYmVsXCI+e2l0ZW0ubGFiZWx9PC9kaXY+XG5cdFx0XHQ8RmlsdGVyRmllbGQgY2xhc3NOYW1lPVwiaXRlbS1maWVsZFwiIHsuLi5pdGVtfSBvbkNoYW5nZT17KGV2ZW50KT0+dGhpcy5fX2l0ZW1GaWx0ZXJDaGFuZ2UoZXZlbnQsIGl0ZW0sIGluZGV4KX0gLz5cblx0XHQ8L2Rpdj5cblx0fSxcblx0X19vbkxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRmluaXNoZWQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWZpbHRlclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gb25Mb2FkaW5nPXt0aGlzLl9fb25Mb2FkaW5nfSBvbkZpbmlzaGVkPXt0aGlzLl9fb25GaW5pc2hlZH0gLz5cblx0XHRcdFx0e3RoaXMuc3RhdGUubG9hZGluZyAmJiA8bG9hZGVyLkxvYWRlciBjb250ZW50PVwiLi4uXCIgbG9hZGVyPVwiY2lyY2xlXCIgc2l6ZT1cInNpemUtc21haWxcIiBsYXlvdXQ9XCJmbGV4LXJvd1wiIC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGlucHV0cyA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaW5wdXQnKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcblxudmFyIE9QVFMgPSB7XG5cdCc9JzogeyB0ZXh0OiAn562J5LqOJywgdmFsdWU6ICc9JywgaWNvbjogJ2ZhRXF1YWxzJyB9LFxuXHQnPic6IHsgdGV4dDogJ+Wkp+S6jicsIHZhbHVlOiAnPicsIGljb246ICdmYUdyZWF0ZXInIH0sXG5cdCc+PSc6IHsgdGV4dDogJ+Wkp+S6juetieS6jicsIHZhbHVlOiAnPj0nLCBpY29uOiAnZmFHcmVhdGVyVGhhbkVxdWFsJyB9LFxuXHQnPCc6IHsgdGV4dDogJ+Wwj+S6jicsIHZhbHVlOiAnPCcsIGljb246ICdmYUxlc3MnIH0sXG5cdCc8PSc6IHsgdGV4dDogJ+Wwj+S6juetieS6jicsIHZhbHVlOiAnPD0nLCBpY29uOiAnZmFMZXNzVGhhbkVxdWFsJyB9LFxuXHQnPD4nOiB7IHRleHQ6ICfkuI3nrYnkuo4nLCB2YWx1ZTogJzw+JywgaWNvbjogJ2ZhTm90RXF1YWwnIH0sXG5cdCclJzogeyB0ZXh0OiAn55u45Ly8JywgdmFsdWU6ICclJywgaWNvbjogJ2ZhUGVyY2VudCcgfSxcblx0J2NhbmNlbCc6IHsgdGV4dDogJ+WPlua2iCcsIHZhbHVlOiAnY2FuY2VsJywgaWNvbjogJ2ZhVGltZXMnIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSRmlsdGVyRmllbGQnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRvcHRzOiBbJyUnLCAnPSddLFxuXHRcdFx0aWNvbjogJ2ZhRmlsdGVyJyxcblx0XHRcdGNsYXNzTmFtZTogJydcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGljb246IHRoaXMucHJvcHMuaWNvbixcblx0XHRcdG9wdDogdGhpcy5wcm9wcy5vcHQsXG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuXHRcdH1cblx0fSxcblx0X19JbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCl7XG5cdFx0ZXZlbnQubmFtZSA9IHRoaXMucHJvcHMubmFtZTtcblx0XHRldmVudC5vcHQgPSB0aGlzLnN0YXRlLm9wdDtcblx0XHRldmVudC5vcHRJY29uID0gdGhpcy5zdGF0ZS5pY29uO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IGV2ZW50LnZhbHVlXG5cdFx0fSk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBpbnB1dCk7XG5cdFx0aWYoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT0gJ0lOUFVUJyAmJiAoZXZlbnQudGFyZ2V0LnR5cGUgPT0gJ3RleHQnIHx8IGV2ZW50LnRhcmdldC50eXBlID09ICdwYXNzd29yZCcpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYoIXRoaXMuc3RhdGUub3B0KSB7XG5cdFx0XHRyZXR1cm4gYWxlcnQoJ1RoZSBvcHQgaXMgbnVsbC4nKSwgZmFsc2U7XG5cdFx0fVxuXHRcdGlmKCFldmVudC52YWx1ZSkge1xuXHRcdFx0cmV0dXJuIGFsZXJ0KCdUaGUgdmFsdWUgaXMgbnVsbC4nKSwgZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShldmVudCwgaW5wdXQpO1xuXHR9LFxuXHRfX0lucHV0RW50ZXI6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQpe1xuXHRcdGV2ZW50Lm5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XG5cdFx0ZXZlbnQub3B0ID0gdGhpcy5zdGF0ZS5vcHQ7XG5cdFx0ZXZlbnQub3B0SWNvbiA9IHRoaXMuc3RhdGUuaWNvbjtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiBldmVudC52YWx1ZVxuXHRcdH0pO1xuXG5cdFx0aWYoIXRoaXMuc3RhdGUub3B0KSB7XG5cdFx0XHRyZXR1cm4gYWxlcnQoJ1RoZSBvcHQgaXMgbnVsbC4nKSwgZmFsc2U7XG5cdFx0fVxuXHRcdGlmKCFldmVudC52YWx1ZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNhbmNlbCAmJiB0aGlzLnByb3BzLm9uQ2FuY2VsKHRoaXMucHJvcHMubmFtZSk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShldmVudCwgaW5wdXQpO1xuXHR9LFxuXHRfX29uT3B0SXRlbUNsaWNrOiBmdW5jdGlvbiAob3B0LCBpbmRleCl7XG5cdFx0aWYob3B0LnZhbHVlID09ICdjYW5jZWwnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aWNvbjogJ2ZhRmlsdGVyJyxcblx0XHRcdFx0b3B0OiAnJ1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5vbkNhbmNlbCAmJiB0aGlzLnByb3BzLm9uQ2FuY2VsKHRoaXMucHJvcHMubmFtZSksIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGljb246IG9wdC5pY29uLFxuXHRcdFx0b3B0OiBvcHQudmFsdWVcblx0XHR9KTtcblx0XHRpZih0aGlzLnN0YXRlLnZhbHVlKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uT3B0Q2hhbmdlICYmIHRoaXMucHJvcHMub25PcHRDaGFuZ2Uoe1xuXHRcdFx0XHRuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG5cdFx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0XHRvcHQ6IG9wdC52YWx1ZSxcblx0XHRcdFx0b3B0SWNvbjogb3B0Lmljb25cblx0XHRcdH0sIHRoaXMpO1xuXHRcdH1cblx0fSxcblx0X19vcHRJdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfb3B0ID0gT1BUU1tpdGVtXTtcblx0XHRpZihfb3B0KXtcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJvcHQgXCIgKyAodGhpcy5zdGF0ZS5vcHQgPT0gaXRlbSA/ICdjdXJyJyA6ICcnKX0ga2V5PXtpbmRleH0gb25DbGljaz17KCk9PnRoaXMuX19vbk9wdEl0ZW1DbGljayhfb3B0LCBpbmRleCl9ID5cblx0XHRcdFx0e19vcHQuaWNvbiAmJiB0aGlzLl9faWNvblZpZXcoX29wdC5pY29uKX1cblx0XHRcdFx0e19vcHQudGV4dCAmJiA8c3Bhbj57X29wdC50ZXh0fTwvc3Bhbj59XG5cdFx0XHQ8L2Rpdj47XG5cdFx0fVxuXHR9LFxuXHRfX2ljb25DbGlja1JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIDx1bCBjbGFzc05hbWU9XCJ6ci1maWx0ZXItZmllbGQtb3B0c1wiPlxuXHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17W10uY29uY2F0KHRoaXMucHJvcHMub3B0cykuY29uY2F0KFsnY2FuY2VsJ10pfSBpdGVtUmVuZGVyPXt0aGlzLl9fb3B0SXRlbVJlbmRlcn0gLz5cblx0XHQ8L3VsPjtcblx0fSxcblx0X19pY29uVmlldzogZnVuY3Rpb24gKGljb24pe1xuXHRcdHN3aXRjaChpY29uKXtcblx0XHRcdGNhc2UgJ2ZhRmlsdGVyJzpcblx0XHRcdFx0cmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImZpbHRlclwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZmlsdGVyIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00ODcuOTc2IDBIMjQuMDI4QzIuNzEgMC04LjA0NyAyNS44NjYgNy4wNTggNDAuOTcxTDE5MiAyMjUuOTQxVjQzMmMwIDcuODMxIDMuODIxIDE1LjE3IDEwLjIzNyAxOS42NjJsODAgNTUuOThDMjk4LjAyIDUxOC42OSAzMjAgNTA3LjQ5MyAzMjAgNDg3Ljk4VjIyNS45NDFsMTg0Ljk0Ny0xODQuOTdDNTIwLjAyMSAyNS44OTYgNTA5LjMzOCAwIDQ4Ny45NzYgMHpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSAnZmFFcXVhbHMnOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZXF1YWxzXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1lcXVhbHMgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQxNiAzMDRIMzJjLTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJ2MzJjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmgzODRjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtMzJjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMnptMC0xOTJIMzJjLTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJ2MzJjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmgzODRjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtMzJjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMnpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSAnZmFHcmVhdGVyJzpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImdyZWF0ZXItdGhhblwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZ3JlYXRlci10aGFuIGZhLXctMTIgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zNjUuNTIgMjA5Ljg1TDU5LjIyIDY3LjAxYy0xNi4wNi03LjQ5LTM1LjE1LS41NC00Mi42NCAxNS41MkwzLjAxIDExMS42MWMtNy40OSAxNi4wNi0uNTQgMzUuMTUgMTUuNTIgNDIuNjRMMjM2Ljk2IDI1Ni4xIDE4LjQ5IDM1Ny45OUMyLjQ3IDM2NS40Ni00LjQ2IDM4NC41IDMuMDEgNDAwLjUybDEzLjUyIDI5QzI0IDQ0NS41NCA0My4wNCA0NTIuNDcgNTkuMDYgNDQ1bDMwNi40Ny0xNDIuOTFhMzIuMDAzIDMyLjAwMyAwIDAgMCAxOC40OC0yOXYtMzQuMjNjLS4wMS0xMi40NS03LjIxLTIzLjc2LTE4LjQ5LTI5LjAxelwiPjwvcGF0aD48L3N2Zz47XG5cdFx0XHRjYXNlICdmYUdyZWF0ZXJUaGFuRXF1YWwnOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZ3JlYXRlci10aGFuLWVxdWFsXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1ncmVhdGVyLXRoYW4tZXF1YWwgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTU1LjIyIDEwNy42OWwxNzUuNTYgNjguMDktMTc1LjQ0IDY4LjA1Yy0xOC4zOSA2LjAzLTI3Ljg4IDI0LjM5LTIxLjIgNDFsMTIuMDkgMzAuMDhjNi42OCAxNi42MSAyNi45OSAyNS4xOSA0NS4zOCAxOS4xNUwzOTMuMDIgMjE0LjJjMTMuNzctNC41MiAyMi45OC0xNi42MSAyMi45OC0zMC4xN3YtMTUuOTZjMC0xMy41Ni05LjIxLTI1LjY1LTIyLjk4LTMwLjE3TDkxLjMgMTcuOTJjLTE4LjI5LTYtMzguNTEgMi41My00NS4xNSAxOS4wNkwzNC4xMiA2Ni45Yy02LjY0IDE2LjUzIDIuODEgMzQuNzkgMjEuMSA0MC43OXpNNDI0IDQwMEgyNGMtMTMuMjUgMC0yNCAxMC43NC0yNCAyNHY0OGMwIDEzLjI1IDEwLjc1IDI0IDI0IDI0aDQwMGMxMy4yNSAwIDI0LTEwLjc1IDI0LTI0di00OGMwLTEzLjI2LTEwLjc1LTI0LTI0LTI0elwiPjwvcGF0aD48L3N2Zz47XG5cdFx0XHRjYXNlICdmYUxlc3MnOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwibGVzcy10aGFuXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1sZXNzLXRoYW4gZmEtdy0xMiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzg0IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM2NS40NiAzNTcuNzRMMTQ3LjA0IDI1NS44OWwyMTguNDctMTAxLjg4YzE2LjAyLTcuNDcgMjIuOTUtMjYuNTEgMTUuNDgtNDIuNTNsLTEzLjUyLTI5QzM2MCA2Ni40NiAzNDAuOTYgNTkuNTMgMzI0Ljk0IDY3TDE4LjQ4IDIwOS45MWEzMi4wMTQgMzIuMDE0IDAgMCAwLTE4LjQ4IDI5djM0LjI0YzAgMTIuNDQgNy4yMSAyMy43NSAxOC40OCAyOWwzMDYuMzEgMTQyLjgzYzE2LjA2IDcuNDkgMzUuMTUuNTQgNDIuNjQtMTUuNTJsMTMuNTYtMjkuMDhjNy40OS0xNi4wNi41NC0zNS4xNS0xNS41My00Mi42NHpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSAnZmFMZXNzVGhhbkVxdWFsJzpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImxlc3MtdGhhbi1lcXVhbFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtbGVzcy10aGFuLWVxdWFsIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01NC45OCAyMTQuMmwzMDEuNDEgMTE5Ljg3YzE4LjM5IDYuMDMgMzguNzEtMi41NCA0NS4zOC0xOS4xNWwxMi4wOS0zMC4wOGM2LjY4LTE2LjYxLTIuODItMzQuOTctMjEuMjEtNDFsLTE3NS40NC02OC4wNSAxNzUuNTYtNjguMDljMTguMjktNiAyNy43NC0yNC4yNyAyMS4xLTQwLjc5bC0xMi4wMy0yOS45MmMtNi42NC0xNi41My0yNi44Ni0yNS4wNi00NS4xNS0xOS4wNkw1NC45OCAxMzcuODlDNDEuMjEgMTQyLjQxIDMyIDE1NC41IDMyIDE2OC4wN3YxNS45NmMwIDEzLjU2IDkuMjEgMjUuNjUgMjIuOTggMzAuMTd6TTQyNCA0MDBIMjRjLTEzLjI1IDAtMjQgMTAuNzQtMjQgMjR2NDhjMCAxMy4yNSAxMC43NSAyNCAyNCAyNGg0MDBjMTMuMjUgMCAyNC0xMC43NSAyNC0yNHYtNDhjMC0xMy4yNi0xMC43NS0yNC0yNC0yNHpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSAnZmFOb3RFcXVhbCc6XG5cdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9e3RoaXMuX19pY29uQ2xpY2t9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJub3QtZXF1YWxcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLW5vdC1lcXVhbCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDE2IDIwOGMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi0zMmMwLTE3LjY3LTE0LjMzLTMyLTMyLTMyaC0yMy44OGw1MS44Ny02Ni44MWM1LjM3LTcuMDIgNC4wNC0xNy4wNi0yLjk3LTIyLjQzTDQxNS42MSAzLjNjLTcuMDItNS4zOC0xNy4wNi00LjA0LTIyLjQ0IDIuOTdMMzExLjA5IDExMkgzMmMtMTcuNjcgMC0zMiAxNC4zMy0zMiAzMnYzMmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDIwNC41NmwtNzQuNTMgOTZIMzJjLTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJ2MzJjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmg1NS40OWwtNTEuODcgNjYuODFjLTUuMzcgNy4wMS00LjA0IDE3LjA1IDIuOTcgMjIuNDNMNjQgNTA4LjdjNy4wMiA1LjM4IDE3LjA2IDQuMDQgMjIuNDMtMi45N0wxNjguNTIgNDAwSDQxNmMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi0zMmMwLTE3LjY3LTE0LjMzLTMyLTMyLTMySDI0My4wNWw3NC41My05Nkg0MTZ6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgJ2ZhUGVyY2VudCc6XG5cdFx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInBlcmNlbnRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXBlcmNlbnQgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTExMiAyMjRjNjEuOSAwIDExMi01MC4xIDExMi0xMTJTMTczLjkgMCAxMTIgMCAwIDUwLjEgMCAxMTJzNTAuMSAxMTIgMTEyIDExMnptMC0xNjBjMjYuNSAwIDQ4IDIxLjUgNDggNDhzLTIxLjUgNDgtNDggNDgtNDgtMjEuNS00OC00OCAyMS41LTQ4IDQ4LTQ4em0yMjQgMjI0Yy02MS45IDAtMTEyIDUwLjEtMTEyIDExMnM1MC4xIDExMiAxMTIgMTEyIDExMi01MC4xIDExMi0xMTItNTAuMS0xMTItMTEyLTExMnptMCAxNjBjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDggNDggMjEuNSA0OCA0OC0yMS41IDQ4LTQ4IDQ4ek0zOTIuMy4ybDMxLjYtLjFjMTkuNC0uMSAzMC45IDIxLjggMTkuNyAzNy44TDc3LjQgNTAxLjZhMjMuOTUgMjMuOTUgMCAwIDEtMTkuNiAxMC4ybC0zMy40LjFjLTE5LjUgMC0zMC45LTIxLjktMTkuNy0zNy44bDM2OC00NjMuN0MzNzcuMiA0IDM4NC41LjIgMzkyLjMuMnpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSAnZmFUaW1lcyc6XG5cdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9e3RoaXMuX19pY29uQ2xpY2t9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJ0aW1lc1wiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtdGltZXMgZmEtdy0xMSBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzUyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2elwiPjwvcGF0aD48L3N2Zz47XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckljb246IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuaWNvbikge1xuXHRcdFx0cmV0dXJuIDxwb3B1cC5Ecm9wZG93biBcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZmlsdGVyLW9wdFwiIFxuXHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0cmVuZGVyOiB0aGlzLl9faWNvbkNsaWNrUmVuZGVyLFxuXHRcdFx0XHRcdG9uV2luZG93SW5zaWRlQ29udGFpbmVyRXZlbnQ6IGZ1bmN0aW9uIChldmVudCwgcG9wb3Zlcil7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH19PlxuXHRcdFx0XHR7dGhpcy5fX2ljb25WaWV3KHRoaXMuc3RhdGUuaWNvbil9XG5cdFx0XHQ8L3BvcHVwLkRyb3Bkb3duPjtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmlzSGlkZGVuKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHZhciBfaW5wdXRQcm9wcyA9IHpuLmV4dGVuZCh7fSwgdGhpcy5wcm9wcywge1xuXHRcdFx0Y2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnZmlsdGVyLWZpZWxkLWlucHV0JywgdGhpcy5wcm9wcy5pbnB1dENsYXNzTmFtZSksXG5cdFx0XHRvbkNoYW5nZTogdGhpcy5fX0lucHV0Q2hhbmdlLFxuXHRcdFx0b25FbnRlcjogdGhpcy5fX0lucHV0RW50ZXJcblx0XHR9KTtcblxuXHRcdHZhciBfaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0IHx8IHRoaXMucHJvcHMuY29tcG9uZW50IHx8IHRoaXMucHJvcHMucmVuZGVyIHx8IGlucHV0cy5JbnB1dDtcblx0XHRpZihfaW5wdXQgJiYgdHlwZW9mIF9pbnB1dCA9PSAnZnVuY3Rpb24nICYmICFfaW5wdXQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpe1xuXHRcdFx0X2lucHV0ID0gX2lucHV0LmNhbGwobnVsbCwgdGhpcywgX2lucHV0UHJvcHMpO1xuXHRcdH1cblxuXHRcdHZhciBfaW5wdXRFbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoX2lucHV0LCBfaW5wdXRQcm9wcyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWZpbHRlci1maWVsZFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfT5cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVySWNvbigpIH1cblx0XHRcdFx0eyBfaW5wdXRFbGVtZW50IH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdGaWx0ZXInOiByZXF1aXJlKCcuL0ZpbHRlcicpLFxuICAgICdGaWx0ZXJGaWVsZCc6IHJlcXVpcmUoJy4vRmlsdGVyRmllbGQnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaW5wdXRcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2FkZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwb3B1cFwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9