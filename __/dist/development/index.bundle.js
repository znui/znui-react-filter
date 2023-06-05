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
      key: zn.uuid(),
      icon: this.props.icon,
      opt: this.props.opt || (this.props.opts && this.props.opts.length ? this.props.opts[0] : null) || "=",
      value: this.props.value
    };
  },
  setValue: function setValue(value) {
    if (zn.is(value, 'string')) {
      value = value.trim();
    }

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
  __onCancleClick: function __onCancleClick(evt) {
    evt.stopPropagation();
    evt.value = '';
    evt.name = this.props.name;
    evt.opt = this.state.opt;
    evt.optIcon = this.state.icon;
    this.setState({
      key: zn.uuid(),
      value: evt.value
    });

    if (!this.state.opt) {
      return alert('The opt is null.'), false;
    }

    this.props.onCancel && this.props.onCancel(this.props.name);
    this.props.onFilterChange && this.props.onFilterChange(evt, null);
  },
  __onFilterChange: function __onFilterChange() {},
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
          style: {
            display: 'flex'
          },
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
      key: this.state.key,
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
    }, /*#__PURE__*/React.createElement("div", {
      className: "filter-tools"
    }, this.props.showOpt && this.__renderIcon(), this.state.value != null && this.state.value != '' && /*#__PURE__*/React.createElement("i", {
      onClick: this.__onCancleClick,
      "data-zr-popup-tooltip": "\u53D6\u6D88\u641C\u7D22\u67E5\u8BE2",
      className: "icon-remove fa fa-remove"
    })), /*#__PURE__*/React.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRmlsdGVyLmpzIiwid2VicGFjazovLy8uL0ZpbHRlckZpZWxkLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb3B1cFwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJGaWx0ZXJGaWVsZCIsImxvYWRlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImRhdGEiLCJfX2l0ZW1GaWx0ZXJDaGFuZ2UiLCJldmVudCIsIml0ZW0iLCJpbmRleCIsInNlbmRlciIsInN0YXRlIiwibmFtZSIsIm9wdCIsInZhbHVlIiwicHJvcHMiLCJvbkZpbHRlckNoYW5nZSIsIl9faXRlbVJlbmRlciIsImxhYmVsIiwiX19vbkxvYWRpbmciLCJzZXRTdGF0ZSIsIl9fb25GaW5pc2hlZCIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJpbnB1dHMiLCJwb3B1cCIsIk9QVFMiLCJ0ZXh0IiwiaWNvbiIsImdldERlZmF1bHRQcm9wcyIsInNob3dPcHQiLCJvcHRzIiwia2V5Iiwiem4iLCJ1dWlkIiwibGVuZ3RoIiwic2V0VmFsdWUiLCJpcyIsInRyaW0iLCJfZXZlbnQiLCJvcHRJY29uIiwib25DaGFuZ2UiLCJfX0lucHV0Q2hhbmdlIiwiaW5wdXQiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwidHlwZSIsImVycm9yIiwiX19JbnB1dEVudGVyIiwiYWxlcnQiLCJvbkNhbmNlbCIsIl9fb25DYW5jbGVDbGljayIsImV2dCIsInN0b3BQcm9wYWdhdGlvbiIsIl9fb25GaWx0ZXJDaGFuZ2UiLCJfX29uT3B0SXRlbUNsaWNrIiwib25PcHRDaGFuZ2UiLCJfX29wdEl0ZW1SZW5kZXIiLCJfb3B0IiwiX19pY29uVmlldyIsIl9faWNvbkNsaWNrUmVuZGVyIiwiY29uY2F0IiwiX19pY29uQ2xpY2siLCJfX3JlbmRlckljb24iLCJkaXNwbGF5IiwiaXNIaWRkZW4iLCJfaW5wdXRQcm9wcyIsImV4dGVuZCIsImlucHV0Q2xhc3NOYW1lIiwib25FbnRlciIsIl9pbnB1dCIsImNvbXBvbmVudCIsIklucHV0IiwicHJvdG90eXBlIiwiaXNSZWFjdENvbXBvbmVudCIsImNhbGwiLCJfaW5wdXRFbGVtZW50IiwiY3JlYXRlUmVhY3RFbGVtZW50IiwiX3N0eWxlIiwid2lkdGgiLCJmbGV4IiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLEtBQUssR0FBR0MsSUFBSSxD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QVNDO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDR3lCLGFBREgsQ0FURCxDQUREO0FBZUE7QUF0TmlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDZkFoRixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYixZQUFVSixtQkFBTyxDQUFDLDZCQUFELENBREo7QUFFYixpQkFBZUEsbUJBQU8sQ0FBQyx1Q0FBRDtBQUZULENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsaUNBQWlDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBaEQsYUFBYSxnQ0FBZ0MsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEZpbHRlckZpZWxkID0gcmVxdWlyZSgnLi9GaWx0ZXJGaWVsZCcpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSRmlsdGVyJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdGRhdGE6IHt9XG5cdFx0fTtcblx0fSxcblx0X19pdGVtRmlsdGVyQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0sIGluZGV4KXtcblx0XHRldmVudC5kYXRhID0gaXRlbTtcblx0XHRldmVudC5pbmRleCA9IGluZGV4O1xuXHRcdGV2ZW50LnNlbmRlciA9IHRoaXM7XG5cdFx0dGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdID0geyBuYW1lOiBldmVudC5uYW1lLCBvcHQ6IGV2ZW50Lm9wdCwgdmFsdWU6IGV2ZW50LnZhbHVlIH07XG5cdFx0dGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlKGV2ZW50LCB0aGlzLnN0YXRlLmRhdGEsIHRoaXMpO1xuXHR9LFxuXHRfX2l0ZW1SZW5kZXI6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmlsdGVyLWl0ZW1cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1sYWJlbFwiPntpdGVtLmxhYmVsfTwvZGl2PlxuXHRcdFx0PEZpbHRlckZpZWxkIGNsYXNzTmFtZT1cIml0ZW0tZmllbGRcIiB7Li4uaXRlbX0gb25DaGFuZ2U9eyhldmVudCk9PnRoaXMuX19pdGVtRmlsdGVyQ2hhbmdlKGV2ZW50LCBpdGVtLCBpbmRleCl9IC8+XG5cdFx0PC9kaXY+XG5cdH0sXG5cdF9fb25Mb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHR9KTtcblx0fSxcblx0X19vbkZpbmlzaGVkOiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fSk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1maWx0ZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gaXRlbVJlbmRlcj17dGhpcy5fX2l0ZW1SZW5kZXJ9IG9uTG9hZGluZz17dGhpcy5fX29uTG9hZGluZ30gb25GaW5pc2hlZD17dGhpcy5fX29uRmluaXNoZWR9IC8+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGxvYWRlci5Mb2FkZXIgY29udGVudD1cIi4uLlwiIGxvYWRlcj1cImNpcmNsZVwiIHNpemU9XCJzaXplLXNtYWlsXCIgbGF5b3V0PVwiZmxleC1yb3dcIiAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBpbnB1dHMgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWlucHV0Jyk7XG52YXIgcG9wdXAgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBvcHVwJyk7XG5cbnZhciBPUFRTID0ge1xuXHQnPSc6IHsgdGV4dDogJ+etieS6jicsIHZhbHVlOiAnPScsIGljb246ICdmYUVxdWFscycgfSxcblx0Jz4nOiB7IHRleHQ6ICflpKfkuo4nLCB2YWx1ZTogJz4nLCBpY29uOiAnZmFHcmVhdGVyJyB9LFxuXHQnPj0nOiB7IHRleHQ6ICflpKfkuo7nrYnkuo4nLCB2YWx1ZTogJz49JywgaWNvbjogJ2ZhR3JlYXRlclRoYW5FcXVhbCcgfSxcblx0JzwnOiB7IHRleHQ6ICflsI/kuo4nLCB2YWx1ZTogJzwnLCBpY29uOiAnZmFMZXNzJyB9LFxuXHQnPD0nOiB7IHRleHQ6ICflsI/kuo7nrYnkuo4nLCB2YWx1ZTogJzw9JywgaWNvbjogJ2ZhTGVzc1RoYW5FcXVhbCcgfSxcblx0Jzw+JzogeyB0ZXh0OiAn5LiN562J5LqOJywgdmFsdWU6ICc8PicsIGljb246ICdmYU5vdEVxdWFsJyB9LFxuXHQnJSc6IHsgdGV4dDogJ+ebuOS8vCcsIHZhbHVlOiAnJScsIGljb246ICdmYVBlcmNlbnQnIH0sXG5cdCdjYW5jZWwnOiB7IHRleHQ6ICflj5bmtognLCB2YWx1ZTogJ2NhbmNlbCcsIGljb246ICdmYVRpbWVzJyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdaUkZpbHRlckZpZWxkJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2hvd09wdDogZmFsc2UsXG5cdFx0XHRvcHRzOiBbJyUnLCAnPSddLFxuXHRcdFx0aWNvbjogJ2ZhRmlsdGVyJyxcblx0XHRcdGNsYXNzTmFtZTogJydcblx0XHR9XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGtleTogem4udXVpZCgpLFxuXHRcdFx0aWNvbjogdGhpcy5wcm9wcy5pY29uLFxuXHRcdFx0b3B0OiB0aGlzLnByb3BzLm9wdCB8fCAoKHRoaXMucHJvcHMub3B0cyAmJiB0aGlzLnByb3BzLm9wdHMubGVuZ3RoKSA/IHRoaXMucHJvcHMub3B0c1swXSA6IG51bGwpIHx8IFwiPVwiLFxuXHRcdFx0dmFsdWU6IHRoaXMucHJvcHMudmFsdWVcblx0XHR9XG5cdH0sXG5cdHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuXHRcdGlmKHpuLmlzKHZhbHVlLCAnc3RyaW5nJykpIHtcblx0XHRcdHZhbHVlID0gdmFsdWUudHJpbSgpO1xuXHRcdH1cblx0XHR2YXIgX2V2ZW50ID0ge1xuXHRcdFx0bmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuXHRcdFx0b3B0OiB0aGlzLnN0YXRlLm9wdCB8fCAnPScsXG5cdFx0XHRvcHRJY29uOiB0aGlzLnN0YXRlLmljb24sXG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9O1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0fSk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKF9ldmVudCk7XG5cdFx0dGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlKF9ldmVudCk7XG5cdH0sXG5cdF9fSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQpe1xuXHRcdGV2ZW50Lm5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XG5cdFx0ZXZlbnQub3B0ID0gdGhpcy5zdGF0ZS5vcHQ7XG5cdFx0ZXZlbnQub3B0SWNvbiA9IHRoaXMuc3RhdGUuaWNvbjtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiBldmVudC52YWx1ZVxuXHRcdH0pO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgaW5wdXQpO1xuXHRcdGlmKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQudGFnTmFtZSA9PSAnSU5QVVQnICYmIChldmVudC50YXJnZXQudHlwZSA9PSAndGV4dCcgfHwgZXZlbnQudGFyZ2V0LnR5cGUgPT0gJ3Bhc3N3b3JkJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZighdGhpcy5zdGF0ZS5vcHQpIHtcblx0XHRcdHJldHVybiB6bi5lcnJvcignVGhlIG9wdCBpcyBudWxsLicpLCBmYWxzZTtcblx0XHR9XG5cdFx0XG5cdFx0Lypcblx0XHRpZihldmVudC52YWx1ZSA9PT0gbnVsbCB8fCBldmVudC52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gem4uZXJyb3IoJ1RoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZC4nKSwgZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYoIWV2ZW50LnZhbHVlICYmICF0aGlzLnByb3BzLmVtcHR5VmFsdWVFbmFibGVkKXtcblx0XHRcdHJldHVybiB6bi5lcnJvcihcIlRoZSB2YWx1ZSBpcyAnJyBvciAwLlwiKSwgZmFsc2U7XG5cdFx0fVxuXHRcdCovXG5cdFx0XG5cdFx0dGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlKGV2ZW50LCBpbnB1dCwgdGhpcyk7XG5cdH0sXG5cdF9fSW5wdXRFbnRlcjogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCl7XG5cdFx0ZXZlbnQubmFtZSA9IHRoaXMucHJvcHMubmFtZTtcblx0XHRldmVudC5vcHQgPSB0aGlzLnN0YXRlLm9wdDtcblx0XHRldmVudC5vcHRJY29uID0gdGhpcy5zdGF0ZS5pY29uO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IGV2ZW50LnZhbHVlXG5cdFx0fSk7XG5cblx0XHRpZighdGhpcy5zdGF0ZS5vcHQpIHtcblx0XHRcdHJldHVybiBhbGVydCgnVGhlIG9wdCBpcyBudWxsLicpLCBmYWxzZTtcblx0XHR9XG5cdFx0aWYoIWV2ZW50LnZhbHVlKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ2FuY2VsICYmIHRoaXMucHJvcHMub25DYW5jZWwodGhpcy5wcm9wcy5uYW1lKTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlKGV2ZW50LCBpbnB1dCk7XG5cdH0sXG5cdF9fb25DYW5jbGVDbGljazogZnVuY3Rpb24gKGV2dCl7XG5cdFx0ZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGV2dC52YWx1ZSA9ICcnO1xuXHRcdGV2dC5uYW1lID0gdGhpcy5wcm9wcy5uYW1lO1xuXHRcdGV2dC5vcHQgPSB0aGlzLnN0YXRlLm9wdDtcblx0XHRldnQub3B0SWNvbiA9IHRoaXMuc3RhdGUuaWNvbjtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGtleTogem4udXVpZCgpLFxuXHRcdFx0dmFsdWU6IGV2dC52YWx1ZVxuXHRcdH0pO1xuXG5cdFx0aWYoIXRoaXMuc3RhdGUub3B0KSB7XG5cdFx0XHRyZXR1cm4gYWxlcnQoJ1RoZSBvcHQgaXMgbnVsbC4nKSwgZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25DYW5jZWwgJiYgdGhpcy5wcm9wcy5vbkNhbmNlbCh0aGlzLnByb3BzLm5hbWUpO1xuXHRcdHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShldnQsIG51bGwpO1xuXHR9LFxuXHRfX29uRmlsdGVyQ2hhbmdlOiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRfX29uT3B0SXRlbUNsaWNrOiBmdW5jdGlvbiAob3B0LCBpbmRleCl7XG5cdFx0aWYob3B0LnZhbHVlID09ICdjYW5jZWwnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aWNvbjogJ2ZhRmlsdGVyJyxcblx0XHRcdFx0b3B0OiAnJ1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5vbkNhbmNlbCAmJiB0aGlzLnByb3BzLm9uQ2FuY2VsKHRoaXMucHJvcHMubmFtZSksIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGljb246IG9wdC5pY29uLFxuXHRcdFx0b3B0OiBvcHQudmFsdWVcblx0XHR9KTtcblx0XHRpZih0aGlzLnN0YXRlLnZhbHVlKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uT3B0Q2hhbmdlICYmIHRoaXMucHJvcHMub25PcHRDaGFuZ2Uoe1xuXHRcdFx0XHRuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG5cdFx0XHRcdHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0XHRvcHQ6IG9wdC52YWx1ZSxcblx0XHRcdFx0b3B0SWNvbjogb3B0Lmljb25cblx0XHRcdH0sIHRoaXMpO1xuXHRcdH1cblx0fSxcblx0X19vcHRJdGVtUmVuZGVyOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdHZhciBfb3B0ID0gT1BUU1tpdGVtXTtcblx0XHRpZihfb3B0KXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtcIm9wdCBcIiArICh0aGlzLnN0YXRlLm9wdCA9PSBpdGVtID8gJ2N1cnInIDogJycpfSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKT0+dGhpcy5fX29uT3B0SXRlbUNsaWNrKF9vcHQsIGluZGV4KX0gPlxuXHRcdFx0XHRcdHtfb3B0Lmljb24gJiYgdGhpcy5fX2ljb25WaWV3KF9vcHQuaWNvbil9XG5cdFx0XHRcdFx0e19vcHQudGV4dCAmJiA8c3Bhbj57X29wdC50ZXh0fTwvc3Bhbj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cdH0sXG5cdF9faWNvbkNsaWNrUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHVsIGNsYXNzTmFtZT1cInpyLWZpbHRlci1maWVsZC1vcHRzXCI+XG5cdFx0XHRcdDx6bnVpLnJlYWN0LkRhdGFWaWV3IGRhdGE9e1tdLmNvbmNhdCh0aGlzLnByb3BzLm9wdHMpLmNvbmNhdChbJ2NhbmNlbCddKX0gaXRlbVJlbmRlcj17dGhpcy5fX29wdEl0ZW1SZW5kZXJ9IC8+XG5cdFx0XHQ8L3VsPlxuXHRcdCk7XG5cdH0sXG5cdF9faWNvblZpZXc6IGZ1bmN0aW9uIChpY29uKXtcblx0XHRzd2l0Y2goaWNvbil7XG5cdFx0XHRjYXNlICdmYUZpbHRlcic6XG5cdFx0XHRcdHJldHVybiA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJmaWx0ZXJcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWZpbHRlciBmYS13LTE2IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDg3Ljk3NiAwSDI0LjAyOEMyLjcxIDAtOC4wNDcgMjUuODY2IDcuMDU4IDQwLjk3MUwxOTIgMjI1Ljk0MVY0MzJjMCA3LjgzMSAzLjgyMSAxNS4xNyAxMC4yMzcgMTkuNjYybDgwIDU1Ljk4QzI5OC4wMiA1MTguNjkgMzIwIDUwNy40OTMgMzIwIDQ4Ny45OFYyMjUuOTQxbDE4NC45NDctMTg0Ljk3QzUyMC4wMjEgMjUuODk2IDUwOS4zMzggMCA0ODcuOTc2IDB6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgJ2ZhRXF1YWxzJzpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImVxdWFsc1wiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZXF1YWxzIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MTYgMzA0SDMyYy0xNy42NyAwLTMyIDE0LjMzLTMyIDMydjMyYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMzg0YzE3LjY3IDAgMzItMTQuMzMgMzItMzJ2LTMyYzAtMTcuNjctMTQuMzMtMzItMzItMzJ6bTAtMTkySDMyYy0xNy42NyAwLTMyIDE0LjMzLTMyIDMydjMyYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMzg0YzE3LjY3IDAgMzItMTQuMzMgMzItMzJ2LTMyYzAtMTcuNjctMTQuMzMtMzItMzItMzJ6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgJ2ZhR3JlYXRlcic6XG5cdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9e3RoaXMuX19pY29uQ2xpY2t9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJncmVhdGVyLXRoYW5cIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWdyZWF0ZXItdGhhbiBmYS13LTEyIFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzODQgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMzY1LjUyIDIwOS44NUw1OS4yMiA2Ny4wMWMtMTYuMDYtNy40OS0zNS4xNS0uNTQtNDIuNjQgMTUuNTJMMy4wMSAxMTEuNjFjLTcuNDkgMTYuMDYtLjU0IDM1LjE1IDE1LjUyIDQyLjY0TDIzNi45NiAyNTYuMSAxOC40OSAzNTcuOTlDMi40NyAzNjUuNDYtNC40NiAzODQuNSAzLjAxIDQwMC41MmwxMy41MiAyOUMyNCA0NDUuNTQgNDMuMDQgNDUyLjQ3IDU5LjA2IDQ0NWwzMDYuNDctMTQyLjkxYTMyLjAwMyAzMi4wMDMgMCAwIDAgMTguNDgtMjl2LTM0LjIzYy0uMDEtMTIuNDUtNy4yMS0yMy43Ni0xOC40OS0yOS4wMXpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSAnZmFHcmVhdGVyVGhhbkVxdWFsJzpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImdyZWF0ZXItdGhhbi1lcXVhbFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZ3JlYXRlci10aGFuLWVxdWFsIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01NS4yMiAxMDcuNjlsMTc1LjU2IDY4LjA5LTE3NS40NCA2OC4wNWMtMTguMzkgNi4wMy0yNy44OCAyNC4zOS0yMS4yIDQxbDEyLjA5IDMwLjA4YzYuNjggMTYuNjEgMjYuOTkgMjUuMTkgNDUuMzggMTkuMTVMMzkzLjAyIDIxNC4yYzEzLjc3LTQuNTIgMjIuOTgtMTYuNjEgMjIuOTgtMzAuMTd2LTE1Ljk2YzAtMTMuNTYtOS4yMS0yNS42NS0yMi45OC0zMC4xN0w5MS4zIDE3LjkyYy0xOC4yOS02LTM4LjUxIDIuNTMtNDUuMTUgMTkuMDZMMzQuMTIgNjYuOWMtNi42NCAxNi41MyAyLjgxIDM0Ljc5IDIxLjEgNDAuNzl6TTQyNCA0MDBIMjRjLTEzLjI1IDAtMjQgMTAuNzQtMjQgMjR2NDhjMCAxMy4yNSAxMC43NSAyNCAyNCAyNGg0MDBjMTMuMjUgMCAyNC0xMC43NSAyNC0yNHYtNDhjMC0xMy4yNi0xMC43NS0yNC0yNC0yNHpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSAnZmFMZXNzJzpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImxlc3MtdGhhblwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtbGVzcy10aGFuIGZhLXctMTIgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM4NCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zNjUuNDYgMzU3Ljc0TDE0Ny4wNCAyNTUuODlsMjE4LjQ3LTEwMS44OGMxNi4wMi03LjQ3IDIyLjk1LTI2LjUxIDE1LjQ4LTQyLjUzbC0xMy41Mi0yOUMzNjAgNjYuNDYgMzQwLjk2IDU5LjUzIDMyNC45NCA2N0wxOC40OCAyMDkuOTFhMzIuMDE0IDMyLjAxNCAwIDAgMC0xOC40OCAyOXYzNC4yNGMwIDEyLjQ0IDcuMjEgMjMuNzUgMTguNDggMjlsMzA2LjMxIDE0Mi44M2MxNi4wNiA3LjQ5IDM1LjE1LjU0IDQyLjY0LTE1LjUybDEzLjU2LTI5LjA4YzcuNDktMTYuMDYuNTQtMzUuMTUtMTUuNTMtNDIuNjR6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgJ2ZhTGVzc1RoYW5FcXVhbCc6XG5cdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9e3RoaXMuX19pY29uQ2xpY2t9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJsZXNzLXRoYW4tZXF1YWxcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWxlc3MtdGhhbi1lcXVhbCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTQuOTggMjE0LjJsMzAxLjQxIDExOS44N2MxOC4zOSA2LjAzIDM4LjcxLTIuNTQgNDUuMzgtMTkuMTVsMTIuMDktMzAuMDhjNi42OC0xNi42MS0yLjgyLTM0Ljk3LTIxLjIxLTQxbC0xNzUuNDQtNjguMDUgMTc1LjU2LTY4LjA5YzE4LjI5LTYgMjcuNzQtMjQuMjcgMjEuMS00MC43OWwtMTIuMDMtMjkuOTJjLTYuNjQtMTYuNTMtMjYuODYtMjUuMDYtNDUuMTUtMTkuMDZMNTQuOTggMTM3Ljg5QzQxLjIxIDE0Mi40MSAzMiAxNTQuNSAzMiAxNjguMDd2MTUuOTZjMCAxMy41NiA5LjIxIDI1LjY1IDIyLjk4IDMwLjE3ek00MjQgNDAwSDI0Yy0xMy4yNSAwLTI0IDEwLjc0LTI0IDI0djQ4YzAgMTMuMjUgMTAuNzUgMjQgMjQgMjRoNDAwYzEzLjI1IDAgMjQtMTAuNzUgMjQtMjR2LTQ4YzAtMTMuMjYtMTAuNzUtMjQtMjQtMjR6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgJ2ZhTm90RXF1YWwnOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwibm90LWVxdWFsXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1ub3QtZXF1YWwgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQxNiAyMDhjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtMzJjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMmgtMjMuODhsNTEuODctNjYuODFjNS4zNy03LjAyIDQuMDQtMTcuMDYtMi45Ny0yMi40M0w0MTUuNjEgMy4zYy03LjAyLTUuMzgtMTcuMDYtNC4wNC0yMi40NCAyLjk3TDMxMS4wOSAxMTJIMzJjLTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJ2MzJjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmgyMDQuNTZsLTc0LjUzIDk2SDMyYy0xNy42NyAwLTMyIDE0LjMzLTMyIDMydjMyYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoNTUuNDlsLTUxLjg3IDY2LjgxYy01LjM3IDcuMDEtNC4wNCAxNy4wNSAyLjk3IDIyLjQzTDY0IDUwOC43YzcuMDIgNS4zOCAxNy4wNiA0LjA0IDIyLjQzLTIuOTdMMTY4LjUyIDQwMEg0MTZjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtMzJjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMkgyNDMuMDVsNzQuNTMtOTZINDE2elwiPjwvcGF0aD48L3N2Zz47XG5cdFx0XHRjYXNlICdmYVBlcmNlbnQnOlxuXHRcdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9e3RoaXMuX19pY29uQ2xpY2t9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJwZXJjZW50XCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1wZXJjZW50IGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMTIgMjI0YzYxLjkgMCAxMTItNTAuMSAxMTItMTEyUzE3My45IDAgMTEyIDAgMCA1MC4xIDAgMTEyczUwLjEgMTEyIDExMiAxMTJ6bTAtMTYwYzI2LjUgMCA0OCAyMS41IDQ4IDQ4cy0yMS41IDQ4LTQ4IDQ4LTQ4LTIxLjUtNDgtNDggMjEuNS00OCA0OC00OHptMjI0IDIyNGMtNjEuOSAwLTExMiA1MC4xLTExMiAxMTJzNTAuMSAxMTIgMTEyIDExMiAxMTItNTAuMSAxMTItMTEyLTUwLjEtMTEyLTExMi0xMTJ6bTAgMTYwYy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4IDQ4IDIxLjUgNDggNDgtMjEuNSA0OC00OCA0OHpNMzkyLjMuMmwzMS42LS4xYzE5LjQtLjEgMzAuOSAyMS44IDE5LjcgMzcuOEw3Ny40IDUwMS42YTIzLjk1IDIzLjk1IDAgMCAxLTE5LjYgMTAuMmwtMzMuNC4xYy0xOS41IDAtMzAuOS0yMS45LTE5LjctMzcuOGwzNjgtNDYzLjdDMzc3LjIgNCAzODQuNS4yIDM5Mi4zLjJ6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgJ2ZhVGltZXMnOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwidGltZXNcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXRpbWVzIGZhLXctMTEgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDM1MiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJJY29uOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLm9wdHMgJiYgdGhpcy5wcm9wcy5vcHRzLmxlbmd0aCkge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5pY29uKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PHBvcHVwLkRyb3Bkb3duIFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmlsdGVyLW9wdFwiIFxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19XG5cdFx0XHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0XHRcdHJlbmRlcjogdGhpcy5fX2ljb25DbGlja1JlbmRlclxuXHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHR7dGhpcy5fX2ljb25WaWV3KHRoaXMuc3RhdGUuaWNvbil9XG5cdFx0XHRcdFx0PC9wb3B1cC5Ecm9wZG93bj5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmlzSGlkZGVuKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHZhciBfaW5wdXRQcm9wcyA9IHpuLmV4dGVuZCh7fSwgdGhpcy5wcm9wcywge1xuXHRcdFx0a2V5OiB0aGlzLnN0YXRlLmtleSxcblx0XHRcdGNsYXNzTmFtZTogem51aS5yZWFjdC5jbGFzc25hbWUoJ2ZpbHRlci1maWVsZC1pbnB1dCcsIHRoaXMucHJvcHMuaW5wdXRDbGFzc05hbWUpLFxuXHRcdFx0b25DaGFuZ2U6IHRoaXMuX19JbnB1dENoYW5nZSxcblx0XHRcdG9uRW50ZXI6IHRoaXMuX19JbnB1dEVudGVyXG5cdFx0fSk7XG5cblx0XHR2YXIgX2lucHV0ID0gdGhpcy5wcm9wcy5pbnB1dCB8fCB0aGlzLnByb3BzLmNvbXBvbmVudCB8fCB0aGlzLnByb3BzLnJlbmRlciB8fCBpbnB1dHMuSW5wdXQ7XG5cdFx0aWYoX2lucHV0ICYmIHR5cGVvZiBfaW5wdXQgPT0gJ2Z1bmN0aW9uJyAmJiAhX2lucHV0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KXtcblx0XHRcdF9pbnB1dCA9IF9pbnB1dC5jYWxsKG51bGwsIHRoaXMsIF9pbnB1dFByb3BzKTtcblx0XHR9XG5cblx0XHR2YXIgX2lucHV0RWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9pbnB1dCwgX2lucHV0UHJvcHMpO1xuXHRcdHZhciBfc3R5bGUgPSB6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHsgd2lkdGg6IHRoaXMucHJvcHMud2lkdGg/KHRoaXMucHJvcHMud2lkdGggKyAncHgnKTpudWxsIH0pO1xuXHRcdGlmKCFfc3R5bGUud2lkdGgpe1xuXHRcdFx0X3N0eWxlLmZsZXggPSAxO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItZmlsdGVyLWZpZWxkXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9IHN0eWxlPXtfc3R5bGV9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyLXRvb2xzJz5cblx0XHRcdFx0XHR7IHRoaXMucHJvcHMuc2hvd09wdCAmJiB0aGlzLl9fcmVuZGVySWNvbigpIH1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQodGhpcy5zdGF0ZS52YWx1ZSAhPSBudWxsICYmIHRoaXMuc3RhdGUudmFsdWUgIT0gJycpICYmIChcblx0XHRcdFx0XHRcdFx0PGkgb25DbGljaz17dGhpcy5fX29uQ2FuY2xlQ2xpY2t9IGRhdGEtenItcG9wdXAtdG9vbHRpcD1cIuWPlua2iOaQnOe0ouafpeivolwiIGNsYXNzTmFtZT0naWNvbi1yZW1vdmUgZmEgZmEtcmVtb3ZlJyAvPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0eyBfaW5wdXRFbGVtZW50IH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnRmlsdGVyJzogcmVxdWlyZSgnLi9GaWx0ZXInKSxcbiAgICAnRmlsdGVyRmllbGQnOiByZXF1aXJlKCcuL0ZpbHRlckZpZWxkJylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImlucHV0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicG9wdXBcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==