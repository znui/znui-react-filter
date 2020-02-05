require('znui-react');
require('znui-react-icon');
require('znui-react-input');
require('znui-react-loader');
require('znui-react-popup');
module.exports = znui.react.registerComponent('filter', {
    components: {
        'Filter': require('./Filter'),
        'FilterField': require('./FilterField')
    }
}).components();