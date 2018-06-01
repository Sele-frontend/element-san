#input-number
## usage:
```js
import elInputNumber from '../package/input-number/index.js';

在父组件内:
    components:{
        'el-input-number':elInputNumber
     }
```

## API

|  变量  | 可选值   | 说明 |
| ------ | ------ | -------- |
| size   | "small" "normal" "mini" "medium"| normal是正常大小 small是小 mini是最小 medium是适中   |
| min  | type:number | 最小值 |
| max |  type:number | 最大值 |
| precisionFlag| boolean| 是否开启高精度模式|
|precision| type:number| 精度|
|step|type:number|步值|
