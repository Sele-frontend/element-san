# Icon图标
提供了一套常用的图标集合

## 使用方法

直接通过设置类名为 el-icon-iconName 来使用即可。例如：
```html
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
```

有icon属性的组件，可通过设置icon属性使用，例如：
```html
<el-button type="primary" icon="el-icon-search">搜索</el-button>
```

直接使用Icon组件，例如：
```js
import Icon from '../package/icon/index.js';

// 在父组件内:
components:{
    'el-icom':Icon,
}
```