var React = znui.React || require('react');
var FilterField = require('./FilterField');
var loader = require('znui-react-loader');
module.exports = React.createClass({
	displayName:'ZRFilter',
	getInitialState: function (){
		return {
			loading: true,
			data: {}
		};
	},
	__itemFilterChange: function (event, item, index){
		event.data = item;
		event.index = index;
		event.sender = this;
		this.state.data[event.name] = { name: event.name, opt: event.opt, value: event.value };
		this.props.onFilterChange && this.props.onFilterChange(event, this.state.data, this);
	},
	__itemRender: function (item, index){
		return <div key={index} className="filter-item">
			<div className="item-label">{item.label}</div>
			<FilterField className="item-field" {...item} onChange={(event)=>this.__itemFilterChange(event, item, index)} />
		</div>
	},
	__onLoading: function (){
		this.setState({
			loading: true
		});
	},
	__onFinished: function (){
		this.setState({
			loading: false
		});
	},
	render:function(){
		return (
			<div className={znui.react.classname("zr-filter", this.props.className)} style={this.props.style}>
				<znui.react.DataView data={this.props.data} itemRender={this.__itemRender} onLoading={this.__onLoading} onFinished={this.__onFinished} />
				{this.state.loading && <loader.Loader content="..." loader="circle" size="size-smail" layout="flex-row" />}
			</div>
		);
	}
});