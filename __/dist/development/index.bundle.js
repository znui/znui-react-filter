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

    var _style = znui.react.style(this.props.style, {
      width: this.props.width ? this.props.width + 'px' : null
    });

    if (!_style.width) {
      _style.flex = 1;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-filter-field", this.props.className),
      disabled: this.props.disabled,
      style: _style
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRmlsdGVyLmpzIiwid2VicGFjazovLy8uL0ZpbHRlckZpZWxkLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb3B1cFwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJGaWx0ZXJGaWVsZCIsImxvYWRlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImRhdGEiLCJfX2l0ZW1GaWx0ZXJDaGFuZ2UiLCJldmVudCIsIml0ZW0iLCJpbmRleCIsInNlbmRlciIsInN0YXRlIiwibmFtZSIsIm9wdCIsInZhbHVlIiwicHJvcHMiLCJvbkZpbHRlckNoYW5nZSIsIl9faXRlbVJlbmRlciIsImxhYmVsIiwiX19vbkxvYWRpbmciLCJzZXRTdGF0ZSIsIl9fb25GaW5pc2hlZCIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJpbnB1dHMiLCJwb3B1cCIsIk9QVFMiLCJ0ZXh0IiwiaWNvbiIsImdldERlZmF1bHRQcm9wcyIsInNob3dPcHQiLCJvcHRzIiwibGVuZ3RoIiwic2V0VmFsdWUiLCJfZXZlbnQiLCJvcHRJY29uIiwib25DaGFuZ2UiLCJfX0lucHV0Q2hhbmdlIiwiaW5wdXQiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwidHlwZSIsInpuIiwiZXJyb3IiLCJfX0lucHV0RW50ZXIiLCJhbGVydCIsIm9uQ2FuY2VsIiwiX19vbk9wdEl0ZW1DbGljayIsIm9uT3B0Q2hhbmdlIiwiX19vcHRJdGVtUmVuZGVyIiwiX29wdCIsIl9faWNvblZpZXciLCJfX2ljb25DbGlja1JlbmRlciIsImNvbmNhdCIsIl9faWNvbkNsaWNrIiwiX19yZW5kZXJJY29uIiwiaXNIaWRkZW4iLCJfaW5wdXRQcm9wcyIsImV4dGVuZCIsImlucHV0Q2xhc3NOYW1lIiwib25FbnRlciIsIl9pbnB1dCIsImNvbXBvbmVudCIsIklucHV0IiwicHJvdG90eXBlIiwiaXNSZWFjdENvbXBvbmVudCIsImNhbGwiLCJfaW5wdXRFbGVtZW50IiwiY3JlYXRlUmVhY3RFbGVtZW50IiwiX3N0eWxlIiwid2lkdGgiLCJmbGV4IiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFMLElBQWNFLG1CQUFPLENBQUMsb0JBQUQsQ0FBakM7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHRCxtQkFBTyxDQUFDLHVDQUFELENBQXpCOztBQUNBLElBQUlF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O0FDQWhELGFBQWEsZ0NBQWdDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBGaWx0ZXJGaWVsZCA9IHJlcXVpcmUoJy4vRmlsdGVyRmllbGQnKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkZpbHRlcicsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRkYXRhOiB7fVxuXHRcdH07XG5cdH0sXG5cdF9faXRlbUZpbHRlckNoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpdGVtLCBpbmRleCl7XG5cdFx0ZXZlbnQuZGF0YSA9IGl0ZW07XG5cdFx0ZXZlbnQuaW5kZXggPSBpbmRleDtcblx0XHRldmVudC5zZW5kZXIgPSB0aGlzO1xuXHRcdHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXSA9IHsgbmFtZTogZXZlbnQubmFtZSwgb3B0OiBldmVudC5vcHQsIHZhbHVlOiBldmVudC52YWx1ZSB9O1xuXHRcdHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShldmVudCwgdGhpcy5zdGF0ZS5kYXRhLCB0aGlzKTtcblx0fSxcblx0X19pdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZpbHRlci1pdGVtXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbGFiZWxcIj57aXRlbS5sYWJlbH08L2Rpdj5cblx0XHRcdDxGaWx0ZXJGaWVsZCBjbGFzc05hbWU9XCJpdGVtLWZpZWxkXCIgey4uLml0ZW19IG9uQ2hhbmdlPXsoZXZlbnQpPT50aGlzLl9faXRlbUZpbHRlckNoYW5nZShldmVudCwgaXRlbSwgaW5kZXgpfSAvPlxuXHRcdDwvZGl2PlxuXHR9LFxuXHRfX29uTG9hZGluZzogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiB0cnVlXG5cdFx0fSk7XG5cdH0sXG5cdF9fb25GaW5pc2hlZDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH0pO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItZmlsdGVyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHQ8em51aS5yZWFjdC5EYXRhVmlldyBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IGl0ZW1SZW5kZXI9e3RoaXMuX19pdGVtUmVuZGVyfSBvbkxvYWRpbmc9e3RoaXMuX19vbkxvYWRpbmd9IG9uRmluaXNoZWQ9e3RoaXMuX19vbkZpbmlzaGVkfSAvPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxsb2FkZXIuTG9hZGVyIGNvbnRlbnQ9XCIuLi5cIiBsb2FkZXI9XCJjaXJjbGVcIiBzaXplPVwic2l6ZS1zbWFpbFwiIGxheW91dD1cImZsZXgtcm93XCIgLz59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgaW5wdXRzID0gcmVxdWlyZSgnem51aS1yZWFjdC1pbnB1dCcpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xuXG52YXIgT1BUUyA9IHtcblx0Jz0nOiB7IHRleHQ6ICfnrYnkuo4nLCB2YWx1ZTogJz0nLCBpY29uOiAnZmFFcXVhbHMnIH0sXG5cdCc+JzogeyB0ZXh0OiAn5aSn5LqOJywgdmFsdWU6ICc+JywgaWNvbjogJ2ZhR3JlYXRlcicgfSxcblx0Jz49JzogeyB0ZXh0OiAn5aSn5LqO562J5LqOJywgdmFsdWU6ICc+PScsIGljb246ICdmYUdyZWF0ZXJUaGFuRXF1YWwnIH0sXG5cdCc8JzogeyB0ZXh0OiAn5bCP5LqOJywgdmFsdWU6ICc8JywgaWNvbjogJ2ZhTGVzcycgfSxcblx0Jzw9JzogeyB0ZXh0OiAn5bCP5LqO562J5LqOJywgdmFsdWU6ICc8PScsIGljb246ICdmYUxlc3NUaGFuRXF1YWwnIH0sXG5cdCc8Pic6IHsgdGV4dDogJ+S4jeetieS6jicsIHZhbHVlOiAnPD4nLCBpY29uOiAnZmFOb3RFcXVhbCcgfSxcblx0JyUnOiB7IHRleHQ6ICfnm7jkvLwnLCB2YWx1ZTogJyUnLCBpY29uOiAnZmFQZXJjZW50JyB9LFxuXHQnY2FuY2VsJzogeyB0ZXh0OiAn5Y+W5raIJywgdmFsdWU6ICdjYW5jZWwnLCBpY29uOiAnZmFUaW1lcycgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJGaWx0ZXJGaWVsZCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNob3dPcHQ6IGZhbHNlLFxuXHRcdFx0b3B0czogWyclJywgJz0nXSxcblx0XHRcdGljb246ICdmYUZpbHRlcicsXG5cdFx0XHRjbGFzc05hbWU6ICcnXG5cdFx0fVxuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpY29uOiB0aGlzLnByb3BzLmljb24sXG5cdFx0XHRvcHQ6IHRoaXMucHJvcHMub3B0IHx8ICgodGhpcy5wcm9wcy5vcHRzICYmIHRoaXMucHJvcHMub3B0cy5sZW5ndGgpID8gdGhpcy5wcm9wcy5vcHRzWzBdIDogbnVsbCkgfHwgXCI9XCIsXG5cdFx0XHR2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuXHRcdH1cblx0fSxcblx0c2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG5cdFx0dmFyIF9ldmVudCA9IHtcblx0XHRcdG5hbWU6IHRoaXMucHJvcHMubmFtZSxcblx0XHRcdG9wdDogdGhpcy5zdGF0ZS5vcHQgfHwgJz0nLFxuXHRcdFx0b3B0SWNvbjogdGhpcy5zdGF0ZS5pY29uLFxuXHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0fTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdH0pO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShfZXZlbnQpO1xuXHRcdHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShfZXZlbnQpO1xuXHR9LFxuXHRfX0lucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0KXtcblx0XHRldmVudC5uYW1lID0gdGhpcy5wcm9wcy5uYW1lO1xuXHRcdGV2ZW50Lm9wdCA9IHRoaXMuc3RhdGUub3B0O1xuXHRcdGV2ZW50Lm9wdEljb24gPSB0aGlzLnN0YXRlLmljb247XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogZXZlbnQudmFsdWVcblx0XHR9KTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGlucHV0KTtcblx0XHRpZihldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT0gJ0lOUFVUJyAmJiAoZXZlbnQudGFyZ2V0LnR5cGUgPT0gJ3RleHQnIHx8IGV2ZW50LnRhcmdldC50eXBlID09ICdwYXNzd29yZCcpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYoIXRoaXMuc3RhdGUub3B0KSB7XG5cdFx0XHRyZXR1cm4gem4uZXJyb3IoJ1RoZSBvcHQgaXMgbnVsbC4nKSwgZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdC8qXG5cdFx0aWYoZXZlbnQudmFsdWUgPT09IG51bGwgfHwgZXZlbnQudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHpuLmVycm9yKCdUaGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWQuJyksIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKCFldmVudC52YWx1ZSAmJiAhdGhpcy5wcm9wcy5lbXB0eVZhbHVlRW5hYmxlZCl7XG5cdFx0XHRyZXR1cm4gem4uZXJyb3IoXCJUaGUgdmFsdWUgaXMgJycgb3IgMC5cIiksIGZhbHNlO1xuXHRcdH1cblx0XHQqL1xuXHRcdFxuXHRcdHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShldmVudCwgaW5wdXQsIHRoaXMpO1xuXHR9LFxuXHRfX0lucHV0RW50ZXI6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQpe1xuXHRcdGV2ZW50Lm5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XG5cdFx0ZXZlbnQub3B0ID0gdGhpcy5zdGF0ZS5vcHQ7XG5cdFx0ZXZlbnQub3B0SWNvbiA9IHRoaXMuc3RhdGUuaWNvbjtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiBldmVudC52YWx1ZVxuXHRcdH0pO1xuXG5cdFx0aWYoIXRoaXMuc3RhdGUub3B0KSB7XG5cdFx0XHRyZXR1cm4gYWxlcnQoJ1RoZSBvcHQgaXMgbnVsbC4nKSwgZmFsc2U7XG5cdFx0fVxuXHRcdGlmKCFldmVudC52YWx1ZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNhbmNlbCAmJiB0aGlzLnByb3BzLm9uQ2FuY2VsKHRoaXMucHJvcHMubmFtZSk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShldmVudCwgaW5wdXQpO1xuXHR9LFxuXHRfX29uT3B0SXRlbUNsaWNrOiBmdW5jdGlvbiAob3B0LCBpbmRleCl7XG5cdFx0aWYob3B0LnZhbHVlID09ICdjYW5jZWwnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aWNvbjogJ2ZhRmlsdGVyJyxcblx0XHRcdFx0b3B0OiAnJ1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5vbkNhbmNlbCAmJiB0aGlzLnByb3BzLm9uQ2FuY2VsKHRoaXMucHJvcHMubmFtZSksIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGljb246IG9wdC5pY29uLFxuXHRcdFx0b3B0OiBvcHQudmFsdWVcblx0XHR9KTtcblx0XHRpZih0aGlzLnN0YXRlLnZhbHVlKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uT3B0Q2hhbmdlICYmIHRoaXMucHJvcHMub25PcHRDaGFuZ2Uoe1xuXHRcdFx0XHRuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG5cdFx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0XHRvcHQ6IG9wdC52YWx1ZSxcblx0XHRcdFx0b3B0SWNvbjogb3B0Lmljb25cblx0XHRcdH0sIHRoaXMpO1xuXHRcdH1cblx0fSxcblx0X19vcHRJdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfb3B0ID0gT1BUU1tpdGVtXTtcblx0XHRpZihfb3B0KXtcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJvcHQgXCIgKyAodGhpcy5zdGF0ZS5vcHQgPT0gaXRlbSA/ICdjdXJyJyA6ICcnKX0ga2V5PXtpbmRleH0gb25DbGljaz17KCk9PnRoaXMuX19vbk9wdEl0ZW1DbGljayhfb3B0LCBpbmRleCl9ID5cblx0XHRcdFx0e19vcHQuaWNvbiAmJiB0aGlzLl9faWNvblZpZXcoX29wdC5pY29uKX1cblx0XHRcdFx0e19vcHQudGV4dCAmJiA8c3Bhbj57X29wdC50ZXh0fTwvc3Bhbj59XG5cdFx0XHQ8L2Rpdj47XG5cdFx0fVxuXHR9LFxuXHRfX2ljb25DbGlja1JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIDx1bCBjbGFzc05hbWU9XCJ6ci1maWx0ZXItZmllbGQtb3B0c1wiPlxuXHRcdFx0PHpudWkucmVhY3QuRGF0YVZpZXcgZGF0YT17W10uY29uY2F0KHRoaXMucHJvcHMub3B0cykuY29uY2F0KFsnY2FuY2VsJ10pfSBpdGVtUmVuZGVyPXt0aGlzLl9fb3B0SXRlbVJlbmRlcn0gLz5cblx0XHQ8L3VsPjtcblx0fSxcblx0X19pY29uVmlldzogZnVuY3Rpb24gKGljb24pe1xuXHRcdHN3aXRjaChpY29uKXtcblx0XHRcdGNhc2UgJ2ZhRmlsdGVyJzpcblx0XHRcdFx0cmV0dXJuIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImZpbHRlclwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZmlsdGVyIGZhLXctMTYgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00ODcuOTc2IDBIMjQuMDI4QzIuNzEgMC04LjA0NyAyNS44NjYgNy4wNTggNDAuOTcxTDE5MiAyMjUuOTQxVjQzMmMwIDcuODMxIDMuODIxIDE1LjE3IDEwLjIzNyAxOS42NjJsODAgNTUuOThDMjk4LjAyIDUxOC42OSAzMjAgNTA3LjQ5MyAzMjAgNDg3Ljk4VjIyNS45NDFsMTg0Ljk0Ny0xODQuOTdDNTIwLjAyMSAyNS44OTYgNTA5LjMzOCAwIDQ4Ny45NzYgMHpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSAnZmFFcXVhbHMnOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZXF1YWxzXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1lcXVhbHMgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQxNiAzMDRIMzJjLTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJ2MzJjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmgzODRjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtMzJjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMnptMC0xOTJIMzJjLTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJ2MzJjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmgzODRjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtMzJjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMnpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSAnZmFHcmVhdGVyJzpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImdyZWF0ZXItdGhhblwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZ3JlYXRlci10aGFuIGZhLXctMTIgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zNjUuNTIgMjA5Ljg1TDU5LjIyIDY3LjAxYy0xNi4wNi03LjQ5LTM1LjE1LS41NC00Mi42NCAxNS41MkwzLjAxIDExMS42MWMtNy40OSAxNi4wNi0uNTQgMzUuMTUgMTUuNTIgNDIuNjRMMjM2Ljk2IDI1Ni4xIDE4LjQ5IDM1Ny45OUMyLjQ3IDM2NS40Ni00LjQ2IDM4NC41IDMuMDEgNDAwLjUybDEzLjUyIDI5QzI0IDQ0NS41NCA0My4wNCA0NTIuNDcgNTkuMDYgNDQ1bDMwNi40Ny0xNDIuOTFhMzIuMDAzIDMyLjAwMyAwIDAgMCAxOC40OC0yOXYtMzQuMjNjLS4wMS0xMi40NS03LjIxLTIzLjc2LTE4LjQ5LTI5LjAxelwiPjwvcGF0aD48L3N2Zz47XG5cdFx0XHRjYXNlICdmYUdyZWF0ZXJUaGFuRXF1YWwnOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZ3JlYXRlci10aGFuLWVxdWFsXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1ncmVhdGVyLXRoYW4tZXF1YWwgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTU1LjIyIDEwNy42OWwxNzUuNTYgNjguMDktMTc1LjQ0IDY4LjA1Yy0xOC4zOSA2LjAzLTI3Ljg4IDI0LjM5LTIxLjIgNDFsMTIuMDkgMzAuMDhjNi42OCAxNi42MSAyNi45OSAyNS4xOSA0NS4zOCAxOS4xNUwzOTMuMDIgMjE0LjJjMTMuNzctNC41MiAyMi45OC0xNi42MSAyMi45OC0zMC4xN3YtMTUuOTZjMC0xMy41Ni05LjIxLTI1LjY1LTIyLjk4LTMwLjE3TDkxLjMgMTcuOTJjLTE4LjI5LTYtMzguNTEgMi41My00NS4xNSAxOS4wNkwzNC4xMiA2Ni45Yy02LjY0IDE2LjUzIDIuODEgMzQuNzkgMjEuMSA0MC43OXpNNDI0IDQwMEgyNGMtMTMuMjUgMC0yNCAxMC43NC0yNCAyNHY0OGMwIDEzLjI1IDEwLjc1IDI0IDI0IDI0aDQwMGMxMy4yNSAwIDI0LTEwLjc1IDI0LTI0di00OGMwLTEzLjI2LTEwLjc1LTI0LTI0LTI0elwiPjwvcGF0aD48L3N2Zz47XG5cdFx0XHRjYXNlICdmYUxlc3MnOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwibGVzcy10aGFuXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1sZXNzLXRoYW4gZmEtdy0xMiBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzg0IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTM2NS40NiAzNTcuNzRMMTQ3LjA0IDI1NS44OWwyMTguNDctMTAxLjg4YzE2LjAyLTcuNDcgMjIuOTUtMjYuNTEgMTUuNDgtNDIuNTNsLTEzLjUyLTI5QzM2MCA2Ni40NiAzNDAuOTYgNTkuNTMgMzI0Ljk0IDY3TDE4LjQ4IDIwOS45MWEzMi4wMTQgMzIuMDE0IDAgMCAwLTE4LjQ4IDI5djM0LjI0YzAgMTIuNDQgNy4yMSAyMy43NSAxOC40OCAyOWwzMDYuMzEgMTQyLjgzYzE2LjA2IDcuNDkgMzUuMTUuNTQgNDIuNjQtMTUuNTJsMTMuNTYtMjkuMDhjNy40OS0xNi4wNi41NC0zNS4xNS0xNS41My00Mi42NHpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSAnZmFMZXNzVGhhbkVxdWFsJzpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImxlc3MtdGhhbi1lcXVhbFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtbGVzcy10aGFuLWVxdWFsIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01NC45OCAyMTQuMmwzMDEuNDEgMTE5Ljg3YzE4LjM5IDYuMDMgMzguNzEtMi41NCA0NS4zOC0xOS4xNWwxMi4wOS0zMC4wOGM2LjY4LTE2LjYxLTIuODItMzQuOTctMjEuMjEtNDFsLTE3NS40NC02OC4wNSAxNzUuNTYtNjguMDljMTguMjktNiAyNy43NC0yNC4yNyAyMS4xLTQwLjc5bC0xMi4wMy0yOS45MmMtNi42NC0xNi41My0yNi44Ni0yNS4wNi00NS4xNS0xOS4wNkw1NC45OCAxMzcuODlDNDEuMjEgMTQyLjQxIDMyIDE1NC41IDMyIDE2OC4wN3YxNS45NmMwIDEzLjU2IDkuMjEgMjUuNjUgMjIuOTggMzAuMTd6TTQyNCA0MDBIMjRjLTEzLjI1IDAtMjQgMTAuNzQtMjQgMjR2NDhjMCAxMy4yNSAxMC43NSAyNCAyNCAyNGg0MDBjMTMuMjUgMCAyNC0xMC43NSAyNC0yNHYtNDhjMC0xMy4yNi0xMC43NS0yNC0yNC0yNHpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSAnZmFOb3RFcXVhbCc6XG5cdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9e3RoaXMuX19pY29uQ2xpY2t9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJub3QtZXF1YWxcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLW5vdC1lcXVhbCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDE2IDIwOGMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi0zMmMwLTE3LjY3LTE0LjMzLTMyLTMyLTMyaC0yMy44OGw1MS44Ny02Ni44MWM1LjM3LTcuMDIgNC4wNC0xNy4wNi0yLjk3LTIyLjQzTDQxNS42MSAzLjNjLTcuMDItNS4zOC0xNy4wNi00LjA0LTIyLjQ0IDIuOTdMMzExLjA5IDExMkgzMmMtMTcuNjcgMC0zMiAxNC4zMy0zMiAzMnYzMmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDIwNC41NmwtNzQuNTMgOTZIMzJjLTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJ2MzJjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmg1NS40OWwtNTEuODcgNjYuODFjLTUuMzcgNy4wMS00LjA0IDE3LjA1IDIuOTcgMjIuNDNMNjQgNTA4LjdjNy4wMiA1LjM4IDE3LjA2IDQuMDQgMjIuNDMtMi45N0wxNjguNTIgNDAwSDQxNmMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi0zMmMwLTE3LjY3LTE0LjMzLTMyLTMyLTMySDI0My4wNWw3NC41My05Nkg0MTZ6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgJ2ZhUGVyY2VudCc6XG5cdFx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInBlcmNlbnRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXBlcmNlbnQgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTExMiAyMjRjNjEuOSAwIDExMi01MC4xIDExMi0xMTJTMTczLjkgMCAxMTIgMCAwIDUwLjEgMCAxMTJzNTAuMSAxMTIgMTEyIDExMnptMC0xNjBjMjYuNSAwIDQ4IDIxLjUgNDggNDhzLTIxLjUgNDgtNDggNDgtNDgtMjEuNS00OC00OCAyMS41LTQ4IDQ4LTQ4em0yMjQgMjI0Yy02MS45IDAtMTEyIDUwLjEtMTEyIDExMnM1MC4xIDExMiAxMTIgMTEyIDExMi01MC4xIDExMi0xMTItNTAuMS0xMTItMTEyLTExMnptMCAxNjBjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDggNDggMjEuNSA0OCA0OC0yMS41IDQ4LTQ4IDQ4ek0zOTIuMy4ybDMxLjYtLjFjMTkuNC0uMSAzMC45IDIxLjggMTkuNyAzNy44TDc3LjQgNTAxLjZhMjMuOTUgMjMuOTUgMCAwIDEtMTkuNiAxMC4ybC0zMy40LjFjLTE5LjUgMC0zMC45LTIxLjktMTkuNy0zNy44bDM2OC00NjMuN0MzNzcuMiA0IDM4NC41LjIgMzkyLjMuMnpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSAnZmFUaW1lcyc6XG5cdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9e3RoaXMuX19pY29uQ2xpY2t9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJ0aW1lc1wiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtdGltZXMgZmEtdy0xMSBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzUyIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2elwiPjwvcGF0aD48L3N2Zz47XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckljb246IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMub3B0cyAmJiB0aGlzLnByb3BzLm9wdHMubGVuZ3RoKSB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLmljb24pIHtcblx0XHRcdFx0cmV0dXJuIDxwb3B1cC5Ecm9wZG93biBcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmaWx0ZXItb3B0XCIgXG5cdFx0XHRcdFx0cG9wb3Zlcj17e1xuXHRcdFx0XHRcdFx0cmVuZGVyOiB0aGlzLl9faWNvbkNsaWNrUmVuZGVyXG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0e3RoaXMuX19pY29uVmlldyh0aGlzLnN0YXRlLmljb24pfVxuXHRcdFx0XHQ8L3BvcHVwLkRyb3Bkb3duPjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmlzSGlkZGVuKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHZhciBfaW5wdXRQcm9wcyA9IHpuLmV4dGVuZCh7fSwgdGhpcy5wcm9wcywge1xuXHRcdFx0Y2xhc3NOYW1lOiB6bnVpLnJlYWN0LmNsYXNzbmFtZSgnZmlsdGVyLWZpZWxkLWlucHV0JywgdGhpcy5wcm9wcy5pbnB1dENsYXNzTmFtZSksXG5cdFx0XHRvbkNoYW5nZTogdGhpcy5fX0lucHV0Q2hhbmdlLFxuXHRcdFx0b25FbnRlcjogdGhpcy5fX0lucHV0RW50ZXJcblx0XHR9KTtcblxuXHRcdHZhciBfaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0IHx8IHRoaXMucHJvcHMuY29tcG9uZW50IHx8IHRoaXMucHJvcHMucmVuZGVyIHx8IGlucHV0cy5JbnB1dDtcblx0XHRpZihfaW5wdXQgJiYgdHlwZW9mIF9pbnB1dCA9PSAnZnVuY3Rpb24nICYmICFfaW5wdXQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpe1xuXHRcdFx0X2lucHV0ID0gX2lucHV0LmNhbGwobnVsbCwgdGhpcywgX2lucHV0UHJvcHMpO1xuXHRcdH1cblxuXHRcdHZhciBfaW5wdXRFbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoX2lucHV0LCBfaW5wdXRQcm9wcyk7XG5cdFx0dmFyIF9zdHlsZSA9IHpudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgeyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aD8odGhpcy5wcm9wcy53aWR0aCArICdweCcpOm51bGwgfSk7XG5cdFx0aWYoIV9zdHlsZS53aWR0aCl7XG5cdFx0XHRfc3R5bGUuZmxleCA9IDE7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1maWx0ZXItZmllbGRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gc3R5bGU9e19zdHlsZX0+XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5zaG93T3B0ICYmIHRoaXMuX19yZW5kZXJJY29uKCkgfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHtfaW5wdXRFbGVtZW50IH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnRmlsdGVyJzogcmVxdWlyZSgnLi9GaWx0ZXInKSxcbiAgICAnRmlsdGVyRmllbGQnOiByZXF1aXJlKCcuL0ZpbHRlckZpZWxkJylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImlucHV0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicG9wdXBcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==