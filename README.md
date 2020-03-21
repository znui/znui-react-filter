# znui-react-filter
Filter Component.

[![npm](https://img.shields.io/npm/v/znui-react-filter.svg)](https://www.npmjs.com/package/znui-react-filter)
[![npm](https://img.shields.io/npm/dm/znui-react-filter.svg)](https://www.npmjs.com/package/znui-react-filter)

## Demo

[Take a look at the demo](https://znui.github.io/znui-react-filter/example/www/index.html)

## Installation

```bash
npm install znui-react-filter -s
```

## Usage

```javascript

var ReactDOM = require('react-dom');
var filter = require('znui-react-filter');

ReactDOM.render(<div className="components">
        <filter.Filter data={[
            { label: '姓名', name: 'name', opt: '=', value: 'yangyxu' },
            { label: '年龄', name: 'age', opt: '=', value: '20' },
            { label: '性别', name: 'sex', opt: '=', value: '男' }
        ]} onFilterChange={(event, data, filter)=>console.log(data)} />
        <filter.FilterField onFilterChange={(event)=>console.log(event)} />
        <filter.FilterField opts={['=', '%', '!=']} />
    </div>, document.getElementById('container'));

```

## License

MIT