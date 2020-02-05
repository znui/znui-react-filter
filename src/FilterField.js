var React = znui.React || require('react');
var SVGIcon = require('znui-react-icon').SVGIcon;
var inputs = require('znui-react-input');
var popup = require('znui-react-popup');

var OPTS = {
	'=': { text: '等于', value: '=', icon: 'faEquals' },
	'>=': { text: '大于', value: '>=', icon: 'faGreaterThanEqual' },
	'=<': { text: '小于', value: '=<', icon: 'faLessThanEqual' },
	'!=': { text: '不等于', value: '!=', icon: 'faNotEqual' },
	'%': { text: '相似', value: '%', icon: 'faPercent' },
	'cancel': { text: '取消', value: 'cancel', icon: 'fa-times' }
};

module.exports = React.createClass({
	displayName: 'ZRFilterField',
	getDefaultProps: function (){
		return {
			opts: ['%', '='],
			icon: 'faFilter',
			className: ''
		}
	},
	getInitialState: function() {
		return {
			icon: this.props.icon,
			opt: this.props.opt,
			value: this.props.value
		}
	},
	__InputChange: function (event, input){
		event.name = this.props.name;
		event.opt = this.state.opt;
		event.optIcon = this.state.icon;
		this.setState({
			value: event.value
		});
		this.props.onChange && this.props.onChange(event, input);
		
		if(event.target.tagName!='INPUT') {
			if(!this.state.opt) {
				return alert('The opt is null.'), false;
			}
			if(!event.value) {
				return alert('The value is null.'), false;
			}
			this.props.onFilterChange && this.props.onFilterChange(event, input);
		}
	},
	__InputEnter: function (event, input){
		event.name = this.props.name;
		event.opt = this.state.opt;
		event.optIcon = this.state.icon;
		this.setState({
			value: event.value
		});

		if(!this.state.opt) {
			return alert('The opt is null.'), false;
		}
		if(!event.value) {
			return alert('The value is null.'), false;
		}
		this.props.onFilterChange && this.props.onFilterChange(event, input);
	},
	__onOptItemClick: function (opt, index){
		this.setState({
			icon: opt.icon,
			opt: opt.value
		});
		if(this.state.value) {
			this.props.onOptChange && this.props.onOptChange({
				name: this.props.name,
				value: this.state.value,
				opt: opt.value,
				optIcon: opt.icon
			}, this);
		}
	},
	__optItemRender: function (item, index){
		var _opt = OPTS[item];
		return <div className={"opt " + (this.state.opt == item ? 'curr' : '')} key={index} onClick={()=>this.__onOptItemClick(_opt, index)} >
			{_opt.icon && <SVGIcon icon={_opt.icon} />}
			{_opt.text && <span>{_opt.text}</span>}
		</div>;
	},
	__iconClickRender: function (){
		return <ul className="zr-filter-field-opts">
			<znui.react.DataView data={this.props.opts} itemRender={this.__optItemRender} />
		</ul>;
	},
	__renderIcon: function (){
		if(this.state.icon) {
			return <popup.Dropdown className="filter-opt" popoverRender={this.__iconClickRender} >
				<SVGIcon onClick={this.__iconClick} icon={this.state.icon} />
			</popup.Dropdown>;
		}

		return null;
	},
	render: function (){
		if(this.props.isHidden){
			return null;
		}
		var _Input = this.props.Input || inputs.Input;
		return (
			<div className={znui.react.classname("zr-filter-field", this.props.className)} disabled={this.props.disabled}>
				{this.__renderIcon()}
				<_Input {...this.props} onChange={this.__InputChange} onEnter={this.__InputEnter} />
			</div>
		);
	}
});