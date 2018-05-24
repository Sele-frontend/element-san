# Card组件

## usage:
```js
import elCard from '../package/card/index.js';

在父组件内:
    components:{
        'el-card':elCard,
     }
```

## API

|  变量  | 可选值   | 说明 |
| ------ | ------ | -------- |
| shadow   | "always" "hover" "never" | always表示默认有阴影 hover表示hover时有阴影 never表示无阴影   |
| header  | true false | true时显示卡片头 false不显示 默认为false   |
| bodyStyle | 自定义样式(String)  | body的自定义样式 |
