# switch
## usage:
```js
import elSwitch from '../package/switch/index.js';

在父组件内:
    components:{
        'el-switch':elSwitch
     }
```

## API

|  变量  | 可选值   | 说明 |
| ------ | ------ | -------- |
| width   | type:number| switch的宽度  |
| disabled  | type:boolean | 是否可用 |
| activeText |  type:string | switch打开时的文字描述 |
| inactiveText | type:string | switch关闭时的文字描述 |
| activeColor | type:string | switch打开时的背景色 |
| inactiveColor | type:string | switch关闭时的背景色 |
| activeValue  |  type:string | switch打开时的value  |
| inactiveValue  |  type:string | switch关闭时的value  |
| name  | type:name | switch对应的name属性 |