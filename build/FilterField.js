"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var SVGIcon = require('znui-react-icon').SVGIcon;

var inputs = require('znui-react-input');

var popup = require('znui-react-popup');

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
    icon: 'fa-times'
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
      return alert('The value is null.'), false;
    }

    this.props.onFilterChange && this.props.onFilterChange(event, input);
  },
  __onOptItemClick: function __onOptItemClick(opt, index) {
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
    return React.createElement("div", {
      className: "opt " + (this.state.opt == item ? 'curr' : ''),
      key: index,
      onClick: function onClick() {
        return _this.__onOptItemClick(_opt, index);
      }
    }, _opt.icon && React.createElement(SVGIcon, {
      icon: _opt.icon
    }), _opt.text && React.createElement("span", null, _opt.text));
  },
  __iconClickRender: function __iconClickRender() {
    return React.createElement("ul", {
      className: "zr-filter-field-opts"
    }, React.createElement(znui.react.DataView, {
      data: this.props.opts,
      itemRender: this.__optItemRender
    }));
  },
  __renderIcon: function __renderIcon() {
    if (this.state.icon) {
      return React.createElement(popup.Dropdown, {
        className: "filter-opt",
        popoverRender: this.__iconClickRender
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

    var _Input = this.props.Input || inputs.Input;

    return React.createElement("div", {
      className: znui.react.classname("zr-filter-field", this.props.className),
      disabled: this.props.disabled
    }, this.__renderIcon(), React.createElement(_Input, _extends({}, this.props, {
      onChange: this.__InputChange,
      onEnter: this.__InputEnter
    })));
  }
});