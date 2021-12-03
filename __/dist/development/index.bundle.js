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
      showOpt: false,
      opts: ['%', '='],
      icon: 'faFilter',
      className: ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      icon: this.props.icon,
      opt: this.props.opt || (this.props.opts && this.props.opts.length ? this.props.opts[0] : null) || "=",
      value: this.props.value
    };
  },
  setValue: function setValue(value) {
    var _event = {
      name: this.props.name,
      opt: this.state.opt || '=',
      optIcon: this.state.icon,
      value: value
    };
    this.setState({
      value: value
    });
    this.props.onChange && this.props.onChange(_event);
    this.props.onFilterChange && this.props.onFilterChange(_event);
  },
  __InputChange: function __InputChange(event, input) {
    event.name = this.props.name;
    event.opt = this.state.opt;
    event.optIcon = this.state.icon;
    this.setState({
      value: event.value
    });
    this.props.onChange && this.props.onChange(event, input);

    if (event.target && event.target.tagName == 'INPUT' && (event.target.type == 'text' || event.target.type == 'password')) {
      return false;
    }

    if (!this.state.opt) {
      return zn.error('The opt is null.'), false;
    }
    /*
    if(event.value === null || event.value === undefined) {
    	return zn.error('The value is null or undefined.'), false;
    }
    	if(!event.value && !this.props.emptyValueEnabled){
    	return zn.error("The value is '' or 0."), false;
    }
    */


    this.props.onFilterChange && this.props.onFilterChange(event, input, this);
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
    if (this.props.opts && this.props.opts.length) {
      if (this.state.icon) {
        return /*#__PURE__*/React.createElement(popup.Dropdown, {
          className: "filter-opt",
          popover: {
            render: this.__iconClickRender
          }
        }, this.__iconView(this.state.icon));
      }
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
    }, this.props.showOpt && this.__renderIcon(), /*#__PURE__*/React.createElement("div", {
      className: "input-container"
    }, _inputElement));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRmlsdGVyLmpzIiwid2VicGFjazovLy8uL0ZpbHRlckZpZWxkLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb3B1cFwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJGaWx0ZXJGaWVsZCIsImxvYWRlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImRhdGEiLCJfX2l0ZW1GaWx0ZXJDaGFuZ2UiLCJldmVudCIsIml0ZW0iLCJpbmRleCIsInNlbmRlciIsInN0YXRlIiwibmFtZSIsIm9wdCIsInZhbHVlIiwicHJvcHMiLCJvbkZpbHRlckNoYW5nZSIsIl9faXRlbVJlbmRlciIsImxhYmVsIiwiX19vbkxvYWRpbmciLCJzZXRTdGF0ZSIsIl9fb25GaW5pc2hlZCIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJpbnB1dHMiLCJwb3B1cCIsIk9QVFMiLCJ0ZXh0IiwiaWNvbiIsImdldERlZmF1bHRQcm9wcyIsInNob3dPcHQiLCJvcHRzIiwibGVuZ3RoIiwic2V0VmFsdWUiLCJfZXZlbnQiLCJvcHRJY29uIiwib25DaGFuZ2UiLCJfX0lucHV0Q2hhbmdlIiwiaW5wdXQiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwidHlwZSIsInpuIiwiZXJyb3IiLCJfX0lucHV0RW50ZXIiLCJhbGVydCIsIm9uQ2FuY2VsIiwiX19vbk9wdEl0ZW1DbGljayIsIm9uT3B0Q2hhbmdlIiwiX19vcHRJdGVtUmVuZGVyIiwiX29wdCIsIl9faWNvblZpZXciLCJfX2ljb25DbGlja1JlbmRlciIsImNvbmNhdCIsIl9faWNvbkNsaWNrIiwiX19yZW5kZXJJY29uIiwiaXNIaWRkZW4iLCJfaW5wdXRQcm9wcyIsImV4dGVuZCIsImlucHV0Q2xhc3NOYW1lIiwib25FbnRlciIsIl9pbnB1dCIsImNvbXBvbmVudCIsIklucHV0IiwicHJvdG90eXBlIiwiaXNSZWFjdENvbXBvbmVudCIsImNhbGwiLCJfaW5wdXRFbGVtZW50IiwiY3JlYXRlUmVhY3RFbGVtZW50IiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFMLElBQWNFLG1CQUFPLENBQUMsb0JBQUQsQ0FBakM7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHRCxtQkFBTyxDQUFDLHVDQUFELENBQXpCOztBQUNBLElBQUlFLE1BQU0sR0FBR0YsbUJBQU8sQ0FBQyw0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O0FBRUQsUUFBSVUsYUFBYSxHQUFHM0UsSUFBSSxDQUFDNEIsS0FBTCxDQUFXZ0Qsa0JBQVgsQ0FBOEJQLE1BQTlCLEVBQXNDSixXQUF0QyxDQUFwQjs7QUFDQSx3QkFDQztBQUFLLGVBQVMsRUFBRWpFLElBQUksQ0FBQzRCLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQixpQkFBckIsRUFBd0MsS0FBS1QsS0FBTCxDQUFXVSxTQUFuRCxDQUFoQjtBQUErRSxjQUFRLEVBQUUsS0FBS1YsS0FBTCxDQUFXeUQ7QUFBcEcsT0FDRyxLQUFLekQsS0FBTCxDQUFXa0IsT0FBWCxJQUFzQixLQUFLeUIsWUFBTCxFQUR6QixlQUVDO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRVksYUFERixDQUZELENBREQ7QUFRQTtBQTNLaUMsQ0FBbEIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNmQXZFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiLFlBQVVKLG1CQUFPLENBQUMsNkJBQUQsQ0FESjtBQUViLGlCQUFlQSxtQkFBTyxDQUFDLHVDQUFEO0FBRlQsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLGdDQUFnQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgRmlsdGVyRmllbGQgPSByZXF1aXJlKCcuL0ZpbHRlckZpZWxkJyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJGaWx0ZXInLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0ZGF0YToge31cblx0XHR9O1xuXHR9LFxuXHRfX2l0ZW1GaWx0ZXJDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaXRlbSwgaW5kZXgpe1xuXHRcdGV2ZW50LmRhdGEgPSBpdGVtO1xuXHRcdGV2ZW50LmluZGV4ID0gaW5kZXg7XG5cdFx0ZXZlbnQuc2VuZGVyID0gdGhpcztcblx0XHR0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV0gPSB7IG5hbWU6IGV2ZW50Lm5hbWUsIG9wdDogZXZlbnQub3B0LCB2YWx1ZTogZXZlbnQudmFsdWUgfTtcblx0XHR0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZXZlbnQsIHRoaXMuc3RhdGUuZGF0YSwgdGhpcyk7XG5cdH0sXG5cdF9faXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRyZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmaWx0ZXItaXRlbVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpdGVtLWxhYmVsXCI+e2l0ZW0ubGFiZWx9PC9kaXY+XG5cdFx0XHQ8RmlsdGVyRmllbGQgY2xhc3NOYW1lPVwiaXRlbS1maWVsZFwiIHsuLi5pdGVtfSBvbkNoYW5nZT17KGV2ZW50KT0+dGhpcy5fX2l0ZW1GaWx0ZXJDaGFuZ2UoZXZlbnQsIGl0ZW0sIGluZGV4KX0gLz5cblx0XHQ8L2Rpdj5cblx0fSxcblx0X19vbkxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogdHJ1ZVxuXHRcdH0pO1xuXHR9LFxuXHRfX29uRmluaXNoZWQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLWZpbHRlclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBpdGVtUmVuZGVyPXt0aGlzLl9faXRlbVJlbmRlcn0gb25Mb2FkaW5nPXt0aGlzLl9fb25Mb2FkaW5nfSBvbkZpbmlzaGVkPXt0aGlzLl9fb25GaW5pc2hlZH0gLz5cblx0XHRcdFx0e3RoaXMuc3RhdGUubG9hZGluZyAmJiA8bG9hZGVyLkxvYWRlciBjb250ZW50PVwiLi4uXCIgbG9hZGVyPVwiY2lyY2xlXCIgc2l6ZT1cInNpemUtc21haWxcIiBsYXlvdXQ9XCJmbGV4LXJvd1wiIC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGlucHV0cyA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaW5wdXQnKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcblxudmFyIE9QVFMgPSB7XG5cdCc9JzogeyB0ZXh0OiAn562J5LqOJywgdmFsdWU6ICc9JywgaWNvbjogJ2ZhRXF1YWxzJyB9LFxuXHQnPic6IHsgdGV4dDogJ+Wkp+S6jicsIHZhbHVlOiAnPicsIGljb246ICdmYUdyZWF0ZXInIH0sXG5cdCc+PSc6IHsgdGV4dDogJ+Wkp+S6juetieS6jicsIHZhbHVlOiAnPj0nLCBpY29uOiAnZmFHcmVhdGVyVGhhbkVxdWFsJyB9LFxuXHQnPCc6IHsgdGV4dDogJ+Wwj+S6jicsIHZhbHVlOiAnPCcsIGljb246ICdmYUxlc3MnIH0sXG5cdCc8PSc6IHsgdGV4dDogJ+Wwj+S6juetieS6jicsIHZhbHVlOiAnPD0nLCBpY29uOiAnZmFMZXNzVGhhbkVxdWFsJyB9LFxuXHQnPD4nOiB7IHRleHQ6ICfkuI3nrYnkuo4nLCB2YWx1ZTogJzw+JywgaWNvbjogJ2ZhTm90RXF1YWwnIH0sXG5cdCclJzogeyB0ZXh0OiAn55u45Ly8JywgdmFsdWU6ICclJywgaWNvbjogJ2ZhUGVyY2VudCcgfSxcblx0J2NhbmNlbCc6IHsgdGV4dDogJ+WPlua2iCcsIHZhbHVlOiAnY2FuY2VsJywgaWNvbjogJ2ZhVGltZXMnIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSRmlsdGVyRmllbGQnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzaG93T3B0OiBmYWxzZSxcblx0XHRcdG9wdHM6IFsnJScsICc9J10sXG5cdFx0XHRpY29uOiAnZmFGaWx0ZXInLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJ1xuXHRcdH1cblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWNvbjogdGhpcy5wcm9wcy5pY29uLFxuXHRcdFx0b3B0OiB0aGlzLnByb3BzLm9wdCB8fCAoKHRoaXMucHJvcHMub3B0cyAmJiB0aGlzLnByb3BzLm9wdHMubGVuZ3RoKSA/IHRoaXMucHJvcHMub3B0c1swXSA6IG51bGwpIHx8IFwiPVwiLFxuXHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudmFsdWVcblx0XHR9XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdHZhciBfZXZlbnQgPSB7XG5cdFx0XHRuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG5cdFx0XHRvcHQ6IHRoaXMuc3RhdGUub3B0IHx8ICc9Jyxcblx0XHRcdG9wdEljb246IHRoaXMuc3RhdGUuaWNvbixcblx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdH07XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9KTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoX2V2ZW50KTtcblx0XHR0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoX2V2ZW50KTtcblx0fSxcblx0X19JbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCl7XG5cdFx0ZXZlbnQubmFtZSA9IHRoaXMucHJvcHMubmFtZTtcblx0XHRldmVudC5vcHQgPSB0aGlzLnN0YXRlLm9wdDtcblx0XHRldmVudC5vcHRJY29uID0gdGhpcy5zdGF0ZS5pY29uO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IGV2ZW50LnZhbHVlXG5cdFx0fSk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBpbnB1dCk7XG5cdFx0aWYoZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC50YWdOYW1lID09ICdJTlBVVCcgJiYgKGV2ZW50LnRhcmdldC50eXBlID09ICd0ZXh0JyB8fCBldmVudC50YXJnZXQudHlwZSA9PSAncGFzc3dvcmQnKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKCF0aGlzLnN0YXRlLm9wdCkge1xuXHRcdFx0cmV0dXJuIHpuLmVycm9yKCdUaGUgb3B0IGlzIG51bGwuJyksIGZhbHNlO1xuXHRcdH1cblx0XHRcblx0XHQvKlxuXHRcdGlmKGV2ZW50LnZhbHVlID09PSBudWxsIHx8IGV2ZW50LnZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB6bi5lcnJvcignVGhlIHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkLicpLCBmYWxzZTtcblx0XHR9XG5cblx0XHRpZighZXZlbnQudmFsdWUgJiYgIXRoaXMucHJvcHMuZW1wdHlWYWx1ZUVuYWJsZWQpe1xuXHRcdFx0cmV0dXJuIHpuLmVycm9yKFwiVGhlIHZhbHVlIGlzICcnIG9yIDAuXCIpLCBmYWxzZTtcblx0XHR9XG5cdFx0Ki9cblx0XHRcblx0XHR0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZXZlbnQsIGlucHV0LCB0aGlzKTtcblx0fSxcblx0X19JbnB1dEVudGVyOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0KXtcblx0XHRldmVudC5uYW1lID0gdGhpcy5wcm9wcy5uYW1lO1xuXHRcdGV2ZW50Lm9wdCA9IHRoaXMuc3RhdGUub3B0O1xuXHRcdGV2ZW50Lm9wdEljb24gPSB0aGlzLnN0YXRlLmljb247XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogZXZlbnQudmFsdWVcblx0XHR9KTtcblxuXHRcdGlmKCF0aGlzLnN0YXRlLm9wdCkge1xuXHRcdFx0cmV0dXJuIGFsZXJ0KCdUaGUgb3B0IGlzIG51bGwuJyksIGZhbHNlO1xuXHRcdH1cblx0XHRpZighZXZlbnQudmFsdWUpIHtcblx0XHRcdHRoaXMucHJvcHMub25DYW5jZWwgJiYgdGhpcy5wcm9wcy5vbkNhbmNlbCh0aGlzLnByb3BzLm5hbWUpO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZXZlbnQsIGlucHV0KTtcblx0fSxcblx0X19vbk9wdEl0ZW1DbGljazogZnVuY3Rpb24gKG9wdCwgaW5kZXgpe1xuXHRcdGlmKG9wdC52YWx1ZSA9PSAnY2FuY2VsJykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGljb246ICdmYUZpbHRlcicsXG5cdFx0XHRcdG9wdDogJydcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMub25DYW5jZWwgJiYgdGhpcy5wcm9wcy5vbkNhbmNlbCh0aGlzLnByb3BzLm5hbWUpLCBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpY29uOiBvcHQuaWNvbixcblx0XHRcdG9wdDogb3B0LnZhbHVlXG5cdFx0fSk7XG5cdFx0aWYodGhpcy5zdGF0ZS52YWx1ZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbk9wdENoYW5nZSAmJiB0aGlzLnByb3BzLm9uT3B0Q2hhbmdlKHtcblx0XHRcdFx0bmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcblx0XHRcdFx0b3B0OiBvcHQudmFsdWUsXG5cdFx0XHRcdG9wdEljb246IG9wdC5pY29uXG5cdFx0XHR9LCB0aGlzKTtcblx0XHR9XG5cdH0sXG5cdF9fb3B0SXRlbVJlbmRlcjogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHR2YXIgX29wdCA9IE9QVFNbaXRlbV07XG5cdFx0aWYoX29wdCl7XG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wib3B0IFwiICsgKHRoaXMuc3RhdGUub3B0ID09IGl0ZW0gPyAnY3VycicgOiAnJyl9IGtleT17aW5kZXh9IG9uQ2xpY2s9eygpPT50aGlzLl9fb25PcHRJdGVtQ2xpY2soX29wdCwgaW5kZXgpfSA+XG5cdFx0XHRcdHtfb3B0Lmljb24gJiYgdGhpcy5fX2ljb25WaWV3KF9vcHQuaWNvbil9XG5cdFx0XHRcdHtfb3B0LnRleHQgJiYgPHNwYW4+e19vcHQudGV4dH08L3NwYW4+fVxuXHRcdFx0PC9kaXY+O1xuXHRcdH1cblx0fSxcblx0X19pY29uQ2xpY2tSZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiA8dWwgY2xhc3NOYW1lPVwienItZmlsdGVyLWZpZWxkLW9wdHNcIj5cblx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e1tdLmNvbmNhdCh0aGlzLnByb3BzLm9wdHMpLmNvbmNhdChbJ2NhbmNlbCddKX0gaXRlbVJlbmRlcj17dGhpcy5fX29wdEl0ZW1SZW5kZXJ9IC8+XG5cdFx0PC91bD47XG5cdH0sXG5cdF9faWNvblZpZXc6IGZ1bmN0aW9uIChpY29uKXtcblx0XHRzd2l0Y2goaWNvbil7XG5cdFx0XHRjYXNlICdmYUZpbHRlcic6XG5cdFx0XHRcdHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJmaWx0ZXJcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWZpbHRlciBmYS13LTE2IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDg3Ljk3NiAwSDI0LjAyOEMyLjcxIDAtOC4wNDcgMjUuODY2IDcuMDU4IDQwLjk3MUwxOTIgMjI1Ljk0MVY0MzJjMCA3LjgzMSAzLjgyMSAxNS4xNyAxMC4yMzcgMTkuNjYybDgwIDU1Ljk4QzI5OC4wMiA1MTguNjkgMzIwIDUwNy40OTMgMzIwIDQ4Ny45OFYyMjUuOTQxbDE4NC45NDctMTg0Ljk3QzUyMC4wMjEgMjUuODk2IDUwOS4zMzggMCA0ODcuOTc2IDB6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgJ2ZhRXF1YWxzJzpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImVxdWFsc1wiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZXF1YWxzIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MTYgMzA0SDMyYy0xNy42NyAwLTMyIDE0LjMzLTMyIDMydjMyYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMzg0YzE3LjY3IDAgMzItMTQuMzMgMzItMzJ2LTMyYzAtMTcuNjctMTQuMzMtMzItMzItMzJ6bTAtMTkySDMyYy0xNy42NyAwLTMyIDE0LjMzLTMyIDMydjMyYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMzg0YzE3LjY3IDAgMzItMTQuMzMgMzItMzJ2LTMyYzAtMTcuNjctMTQuMzMtMzItMzItMzJ6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgJ2ZhR3JlYXRlcic6XG5cdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9e3RoaXMuX19pY29uQ2xpY2t9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJncmVhdGVyLXRoYW5cIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWdyZWF0ZXItdGhhbiBmYS13LTEyIFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzODQgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzY1LjUyIDIwOS44NUw1OS4yMiA2Ny4wMWMtMTYuMDYtNy40OS0zNS4xNS0uNTQtNDIuNjQgMTUuNTJMMy4wMSAxMTEuNjFjLTcuNDkgMTYuMDYtLjU0IDM1LjE1IDE1LjUyIDQyLjY0TDIzNi45NiAyNTYuMSAxOC40OSAzNTcuOTlDMi40NyAzNjUuNDYtNC40NiAzODQuNSAzLjAxIDQwMC41MmwxMy41MiAyOUMyNCA0NDUuNTQgNDMuMDQgNDUyLjQ3IDU5LjA2IDQ0NWwzMDYuNDctMTQyLjkxYTMyLjAwMyAzMi4wMDMgMCAwIDAgMTguNDgtMjl2LTM0LjIzYy0uMDEtMTIuNDUtNy4yMS0yMy43Ni0xOC40OS0yOS4wMXpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSAnZmFHcmVhdGVyVGhhbkVxdWFsJzpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImdyZWF0ZXItdGhhbi1lcXVhbFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZ3JlYXRlci10aGFuLWVxdWFsIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01NS4yMiAxMDcuNjlsMTc1LjU2IDY4LjA5LTE3NS40NCA2OC4wNWMtMTguMzkgNi4wMy0yNy44OCAyNC4zOS0yMS4yIDQxbDEyLjA5IDMwLjA4YzYuNjggMTYuNjEgMjYuOTkgMjUuMTkgNDUuMzggMTkuMTVMMzkzLjAyIDIxNC4yYzEzLjc3LTQuNTIgMjIuOTgtMTYuNjEgMjIuOTgtMzAuMTd2LTE1Ljk2YzAtMTMuNTYtOS4yMS0yNS42NS0yMi45OC0zMC4xN0w5MS4zIDE3LjkyYy0xOC4yOS02LTM4LjUxIDIuNTMtNDUuMTUgMTkuMDZMMzQuMTIgNjYuOWMtNi42NCAxNi41MyAyLjgxIDM0Ljc5IDIxLjEgNDAuNzl6TTQyNCA0MDBIMjRjLTEzLjI1IDAtMjQgMTAuNzQtMjQgMjR2NDhjMCAxMy4yNSAxMC43NSAyNCAyNCAyNGg0MDBjMTMuMjUgMCAyNC0xMC43NSAyNC0yNHYtNDhjMC0xMy4yNi0xMC43NS0yNC0yNC0yNHpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSAnZmFMZXNzJzpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImxlc3MtdGhhblwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtbGVzcy10aGFuIGZhLXctMTIgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zNjUuNDYgMzU3Ljc0TDE0Ny4wNCAyNTUuODlsMjE4LjQ3LTEwMS44OGMxNi4wMi03LjQ3IDIyLjk1LTI2LjUxIDE1LjQ4LTQyLjUzbC0xMy41Mi0yOUMzNjAgNjYuNDYgMzQwLjk2IDU5LjUzIDMyNC45NCA2N0wxOC40OCAyMDkuOTFhMzIuMDE0IDMyLjAxNCAwIDAgMC0xOC40OCAyOXYzNC4yNGMwIDEyLjQ0IDcuMjEgMjMuNzUgMTguNDggMjlsMzA2LjMxIDE0Mi44M2MxNi4wNiA3LjQ5IDM1LjE1LjU0IDQyLjY0LTE1LjUybDEzLjU2LTI5LjA4YzcuNDktMTYuMDYuNTQtMzUuMTUtMTUuNTMtNDIuNjR6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgJ2ZhTGVzc1RoYW5FcXVhbCc6XG5cdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9e3RoaXMuX19pY29uQ2xpY2t9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJsZXNzLXRoYW4tZXF1YWxcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWxlc3MtdGhhbi1lcXVhbCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTQuOTggMjE0LjJsMzAxLjQxIDExOS44N2MxOC4zOSA2LjAzIDM4LjcxLTIuNTQgNDUuMzgtMTkuMTVsMTIuMDktMzAuMDhjNi42OC0xNi42MS0yLjgyLTM0Ljk3LTIxLjIxLTQxbC0xNzUuNDQtNjguMDUgMTc1LjU2LTY4LjA5YzE4LjI5LTYgMjcuNzQtMjQuMjcgMjEuMS00MC43OWwtMTIuMDMtMjkuOTJjLTYuNjQtMTYuNTMtMjYuODYtMjUuMDYtNDUuMTUtMTkuMDZMNTQuOTggMTM3Ljg5QzQxLjIxIDE0Mi40MSAzMiAxNTQuNSAzMiAxNjguMDd2MTUuOTZjMCAxMy41NiA5LjIxIDI1LjY1IDIyLjk4IDMwLjE3ek00MjQgNDAwSDI0Yy0xMy4yNSAwLTI0IDEwLjc0LTI0IDI0djQ4YzAgMTMuMjUgMTAuNzUgMjQgMjQgMjRoNDAwYzEzLjI1IDAgMjQtMTAuNzUgMjQtMjR2LTQ4YzAtMTMuMjYtMTAuNzUtMjQtMjQtMjR6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgJ2ZhTm90RXF1YWwnOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwibm90LWVxdWFsXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1ub3QtZXF1YWwgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQxNiAyMDhjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtMzJjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMmgtMjMuODhsNTEuODctNjYuODFjNS4zNy03LjAyIDQuMDQtMTcuMDYtMi45Ny0yMi40M0w0MTUuNjEgMy4zYy03LjAyLTUuMzgtMTcuMDYtNC4wNC0yMi40NCAyLjk3TDMxMS4wOSAxMTJIMzJjLTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJ2MzJjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmgyMDQuNTZsLTc0LjUzIDk2SDMyYy0xNy42NyAwLTMyIDE0LjMzLTMyIDMydjMyYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoNTUuNDlsLTUxLjg3IDY2LjgxYy01LjM3IDcuMDEtNC4wNCAxNy4wNSAyLjk3IDIyLjQzTDY0IDUwOC43YzcuMDIgNS4zOCAxNy4wNiA0LjA0IDIyLjQzLTIuOTdMMTY4LjUyIDQwMEg0MTZjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtMzJjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMkgyNDMuMDVsNzQuNTMtOTZINDE2elwiPjwvcGF0aD48L3N2Zz47XG5cdFx0XHRjYXNlICdmYVBlcmNlbnQnOlxuXHRcdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9e3RoaXMuX19pY29uQ2xpY2t9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJwZXJjZW50XCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1wZXJjZW50IGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMTIgMjI0YzYxLjkgMCAxMTItNTAuMSAxMTItMTEyUzE3My45IDAgMTEyIDAgMCA1MC4xIDAgMTEyczUwLjEgMTEyIDExMiAxMTJ6bTAtMTYwYzI2LjUgMCA0OCAyMS41IDQ4IDQ4cy0yMS41IDQ4LTQ4IDQ4LTQ4LTIxLjUtNDgtNDggMjEuNS00OCA0OC00OHptMjI0IDIyNGMtNjEuOSAwLTExMiA1MC4xLTExMiAxMTJzNTAuMSAxMTIgMTEyIDExMiAxMTItNTAuMSAxMTItMTEyLTUwLjEtMTEyLTExMi0xMTJ6bTAgMTYwYy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4IDQ4IDIxLjUgNDggNDgtMjEuNSA0OC00OCA0OHpNMzkyLjMuMmwzMS42LS4xYzE5LjQtLjEgMzAuOSAyMS44IDE5LjcgMzcuOEw3Ny40IDUwMS42YTIzLjk1IDIzLjk1IDAgMCAxLTE5LjYgMTAuMmwtMzMuNC4xYy0xOS41IDAtMzAuOS0yMS45LTE5LjctMzcuOGwzNjgtNDYzLjdDMzc3LjIgNCAzODQuNS4yIDM5Mi4zLjJ6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgJ2ZhVGltZXMnOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwidGltZXNcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXRpbWVzIGZhLXctMTEgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM1MiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJJY29uOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLm9wdHMgJiYgdGhpcy5wcm9wcy5vcHRzLmxlbmd0aCkge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5pY29uKSB7XG5cdFx0XHRcdHJldHVybiA8cG9wdXAuRHJvcGRvd24gXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmlsdGVyLW9wdFwiIFxuXHRcdFx0XHRcdHBvcG92ZXI9e3tcblx0XHRcdFx0XHRcdHJlbmRlcjogdGhpcy5fX2ljb25DbGlja1JlbmRlclxuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdHt0aGlzLl9faWNvblZpZXcodGhpcy5zdGF0ZS5pY29uKX1cblx0XHRcdFx0PC9wb3B1cC5Ecm9wZG93bj47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5pc0hpZGRlbil7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHR2YXIgX2lucHV0UHJvcHMgPSB6bi5leHRlbmQoe30sIHRoaXMucHJvcHMsIHtcblx0XHRcdGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ2ZpbHRlci1maWVsZC1pbnB1dCcsIHRoaXMucHJvcHMuaW5wdXRDbGFzc05hbWUpLFxuXHRcdFx0b25DaGFuZ2U6IHRoaXMuX19JbnB1dENoYW5nZSxcblx0XHRcdG9uRW50ZXI6IHRoaXMuX19JbnB1dEVudGVyXG5cdFx0fSk7XG5cblx0XHR2YXIgX2lucHV0ID0gdGhpcy5wcm9wcy5pbnB1dCB8fCB0aGlzLnByb3BzLmNvbXBvbmVudCB8fCB0aGlzLnByb3BzLnJlbmRlciB8fCBpbnB1dHMuSW5wdXQ7XG5cdFx0aWYoX2lucHV0ICYmIHR5cGVvZiBfaW5wdXQgPT0gJ2Z1bmN0aW9uJyAmJiAhX2lucHV0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXtcblx0XHRcdF9pbnB1dCA9IF9pbnB1dC5jYWxsKG51bGwsIHRoaXMsIF9pbnB1dFByb3BzKTtcblx0XHR9XG5cblx0XHR2YXIgX2lucHV0RWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9pbnB1dCwgX2lucHV0UHJvcHMpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1maWx0ZXItZmllbGRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0+XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5zaG93T3B0ICYmIHRoaXMuX19yZW5kZXJJY29uKCkgfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHtfaW5wdXRFbGVtZW50IH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnRmlsdGVyJzogcmVxdWlyZSgnLi9GaWx0ZXInKSxcbiAgICAnRmlsdGVyRmllbGQnOiByZXF1aXJlKCcuL0ZpbHRlckZpZWxkJylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImlucHV0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicG9wdXBcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==