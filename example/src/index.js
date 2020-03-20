require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var filter = require('../../src/index');

znui.react.createApplication({
    render: <div className="components">
        <filter.Filter data={[
            { label: '姓名', name: 'name', opt: '=', value: 'yangyxu' },
            { label: '年龄', name: 'age', opt: '=', value: '20' },
            { label: '性别', name: 'sex', opt: '=', value: '男' }
        ]} onFilterChange={(event, data, filter)=>console.log(data)} />
        <filter.FilterField onFilterChange={(event)=>console.log(event)} />
        <filter.FilterField opts={['=', '%', '!=']} />
    </div>
});