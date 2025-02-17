var React = znui.React || require('react');
var inputs = require('znui-react-input');
var popup = require('znui-react-popup');

var OPTS = {
	'=': { text: '等于', value: '=', icon: 'faEquals' },
	'>': { text: '大于', value: '>', icon: 'faGreater' },
	'>=': { text: '大于等于', value: '>=', icon: 'faGreaterThanEqual' },
	'<': { text: '小于', value: '<', icon: 'faLess' },
	'<=': { text: '小于等于', value: '<=', icon: 'faLessThanEqual' },
	'<>': { text: '不等于', value: '<>', icon: 'faNotEqual' },
	'%': { text: '相似', value: '%', icon: 'faPercent' },
	'cancel': { text: '取消', value: 'cancel', icon: 'faTimes' }
};

module.exports = React.createClass({
	displayName: 'ZRFilterField',
	getDefaultProps: function (){
		return {
			showOpt: false,
			opts: ['%', '='],
			icon: 'faFilter',
			className: ''
		}
	},
	getInitialState: function() {
		return {
			key: zn.uuid(),
			icon: this.props.icon,
			opt: this.props.opt || ((this.props.opts && this.props.opts.length) ? this.props.opts[0] : null) || "=",
			value: this.props.value
		}
	},
	setValue: function (value){
		if(zn.is(value, 'string')) {
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
	__InputChange: function (event, input){
		event.name = this.props.name;
		event.opt = this.state.opt;
		event.optIcon = this.state.icon;
		this.setState({
			value: event.value
		});
		this.props.onChange && this.props.onChange(event, input);
		if(event.target && event.target.tagName == 'INPUT' && (event.target.type == 'text' || event.target.type == 'password')) {
			return false;
		}

		if(!this.state.opt) {
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
			this.props.onCancel && this.props.onCancel(this.props.name);
		}
		this.props.onFilterChange && this.props.onFilterChange(event, input);
	},
	__onCancleClick: function (evt){
		evt.stopPropagation();
		evt.value = '';
		evt.name = this.props.name;
		evt.opt = this.state.opt;
		evt.optIcon = this.state.icon;
		this.setState({
			key: zn.uuid(),
			value: evt.value
		});

		if(!this.state.opt) {
			return alert('The opt is null.'), false;
		}
		this.props.onCancel && this.props.onCancel(this.props.name);
		this.props.onFilterChange && this.props.onFilterChange(evt, null);
	},
	__onFilterChange: function (){

	},
	__onOptItemClick: function (opt, index){
		if(opt.value == 'cancel') {
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
		if(_opt){
			return (
				<div className={"opt " + (this.state.opt == item ? 'curr' : '')} key={index} onClick={()=>this.__onOptItemClick(_opt, index)} >
					{_opt.icon && this.__iconView(_opt.icon)}
					{_opt.text && <span>{_opt.text}</span>}
				</div>
			);
		}
	},
	__iconClickRender: function (){
		return (
			<ul className="zr-filter-field-opts">
				<znui.react.DataView data={[].concat(this.props.opts).concat(['cancel'])} itemRender={this.__optItemRender} />
			</ul>
		);
	},
	__iconView: function (icon){
		switch(icon){
			case 'faFilter':
				return <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter" className="icon svg-inline--fa fa-filter fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path></svg>;
			case 'faEquals':
				return <svg onClick={this.__iconClick} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="equals" className="icon svg-inline--fa fa-equals fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 304H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32zm0-192H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>;
			case 'faGreater':
				return <svg onClick={this.__iconClick} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="greater-than" className="icon svg-inline--fa fa-greater-than fa-w-12 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1 18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32.003 32.003 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01z"></path></svg>;
			case 'faGreaterThanEqual':
				return <svg onClick={this.__iconClick} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="greater-than-equal" className="icon svg-inline--fa fa-greater-than-equal fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M55.22 107.69l175.56 68.09-175.44 68.05c-18.39 6.03-27.88 24.39-21.2 41l12.09 30.08c6.68 16.61 26.99 25.19 45.38 19.15L393.02 214.2c13.77-4.52 22.98-16.61 22.98-30.17v-15.96c0-13.56-9.21-25.65-22.98-30.17L91.3 17.92c-18.29-6-38.51 2.53-45.15 19.06L34.12 66.9c-6.64 16.53 2.81 34.79 21.1 40.79zM424 400H24c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h400c13.25 0 24-10.75 24-24v-48c0-13.26-10.75-24-24-24z"></path></svg>;
			case 'faLess':
				return <svg onClick={this.__iconClick} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="less-than" className="icon svg-inline--fa fa-less-than fa-w-12 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M365.46 357.74L147.04 255.89l218.47-101.88c16.02-7.47 22.95-26.51 15.48-42.53l-13.52-29C360 66.46 340.96 59.53 324.94 67L18.48 209.91a32.014 32.014 0 0 0-18.48 29v34.24c0 12.44 7.21 23.75 18.48 29l306.31 142.83c16.06 7.49 35.15.54 42.64-15.52l13.56-29.08c7.49-16.06.54-35.15-15.53-42.64z"></path></svg>;
			case 'faLessThanEqual':
				return <svg onClick={this.__iconClick} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="less-than-equal" className="icon svg-inline--fa fa-less-than-equal fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M54.98 214.2l301.41 119.87c18.39 6.03 38.71-2.54 45.38-19.15l12.09-30.08c6.68-16.61-2.82-34.97-21.21-41l-175.44-68.05 175.56-68.09c18.29-6 27.74-24.27 21.1-40.79l-12.03-29.92c-6.64-16.53-26.86-25.06-45.15-19.06L54.98 137.89C41.21 142.41 32 154.5 32 168.07v15.96c0 13.56 9.21 25.65 22.98 30.17zM424 400H24c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h400c13.25 0 24-10.75 24-24v-48c0-13.26-10.75-24-24-24z"></path></svg>;
			case 'faNotEqual':
				return <svg onClick={this.__iconClick} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="not-equal" className="icon svg-inline--fa fa-not-equal fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32h-23.88l51.87-66.81c5.37-7.02 4.04-17.06-2.97-22.43L415.61 3.3c-7.02-5.38-17.06-4.04-22.44 2.97L311.09 112H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h204.56l-74.53 96H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h55.49l-51.87 66.81c-5.37 7.01-4.04 17.05 2.97 22.43L64 508.7c7.02 5.38 17.06 4.04 22.43-2.97L168.52 400H416c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32H243.05l74.53-96H416z"></path></svg>;
			case 'faPercent':
					return <svg onClick={this.__iconClick} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="percent" className="icon svg-inline--fa fa-percent fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M112 224c61.9 0 112-50.1 112-112S173.9 0 112 0 0 50.1 0 112s50.1 112 112 112zm0-160c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm224 224c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM392.3.2l31.6-.1c19.4-.1 30.9 21.8 19.7 37.8L77.4 501.6a23.95 23.95 0 0 1-19.6 10.2l-33.4.1c-19.5 0-30.9-21.9-19.7-37.8l368-463.7C377.2 4 384.5.2 392.3.2z"></path></svg>;
			case 'faTimes':
				return <svg onClick={this.__iconClick} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="icon svg-inline--fa fa-times fa-w-11 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>;
		}
	},
	__renderIcon: function (){
		if(this.props.opts && this.props.opts.length) {
			if(this.state.icon) {
				return (
					<popup.Dropdown 
						className="filter-opt" 
						style={{ display: 'flex' }}
						popover={{
							render: this.__iconClickRender
						}}>
						{this.__iconView(this.state.icon)}
					</popup.Dropdown>
				);
			}
		}

		return null;
	},
	render: function (){
		if(this.props.isHidden){
			return null;
		}

		var _inputProps = zn.extend({}, this.props, {
			key: this.state.key,
			className: znui.react.classname('filter-field-input', this.props.inputClassName),
			onChange: this.__InputChange,
			onEnter: this.__InputEnter
		});

		var _input = this.props.input || this.props.component || this.props.render || inputs.Input;
		if(_input && typeof _input == 'function' && !_input.prototype.isReactComponent){
			_input = _input.call(null, this, _inputProps);
		}

		var _inputElement = znui.react.createReactElement(_input, _inputProps);
		var _style = znui.react.style(this.props.style, { width: this.props.width?(this.props.width + 'px'):null });
		if(!_style.width){
			_style.flex = 1;
		}
		return (
			<div className={znui.react.classname("zr-filter-field", this.props.className)} disabled={this.props.disabled} style={_style}>
				<div className='filter-tools'>
					{ this.props.showOpt && this.__renderIcon() }
					{
						(this.state.value != null && this.state.value != '') && (
							<i onClick={this.__onCancleClick} data-zr-popup-tooltip="取消(Cancel)" className='icon-remove fa fa-remove' />
						)
					}
				</div>
				<div className="input-container">
					{ _inputElement }
				</div>
			</div>
		);
	}
});