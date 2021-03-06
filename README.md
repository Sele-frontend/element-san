# ELEMENT-SAN
<p align="center">
  <img src="https://camo.githubusercontent.com/a290f602d8248dd069fe4fc9eb7dfec86014183a/68747470733a2f2f62616964752e6769746875622e696f2f73616e2f696d672f6c6f676f2d636f6c6f7266756c2e737667" width="200px" height="200px" style="display:inline-block">
  
  <img src="https://camo.githubusercontent.com/462f24153b8e8739c8ea71f7102585c4cb0e1575/68747470733a2f2f63646e2e7261776769742e636f6d2f456c656d6546452f656c656d656e742f6465762f656c656d656e745f6c6f676f2e737667" width="200px" height="200px">
</p>

---------------------------------------------------
<p align="center">
  <a><img src="https://img.shields.io/npm/v/element-san.svg?style=flat"></a>
  <a><img src="https://www.travis-ci.org/Sele-frontend/element-san.svg?branch=master"></a>
</p>
A San UI Tookit,idea from element.
一个高质量的san组件库，移植自element

正在紧锣密鼓的施工中

## 如何使用

1.通过npm安装
```
npm install element-san --save
```
2.按需引入组件
```
<template>
<div>
    <el-input></el-input>
</div>
</template>
<script>
import elementSan from 'element-san';
const elInput = elementSan.elInput;

export default {
    components: {
        'el-input': elInput,
    }
};
</script>
```

## 组件说明文档

完整的组件文档暂时还没有完成，在各个组件文件夹下有各个组件的说明文档，package文件夹下是各个组件

## 开发人员（按照拼音顺序排序）：

| 姓名   | github                        |
| ------ | ----------------------------- |
| 崔晋瑜 | https://github.com/cuijinyu   |
| 李彦俊 | https://github.com/yanjun0501 |
| 钱锟   | https://github.com/hmqk1995   |
| 刘放 | https://github.com/yuedou      |
| 徐帅武 | https://github.com/xluos      |

## 开发进度

| 组件名 | 进度   | 开发人员 |
| ------ | ------ | -------- |
| datepicker   | 开发中 | 崔晋瑜   |
| icon  | 完成  | 徐帅武   |
| layout | 开发中  | 钱锟    |
| button | 开发中 | 李彦俊   |
|  card | 完成   |  崔晋瑜   |
| input  | 完成部分 | 崔晋瑜  |
| radio |  开发中 | 徐帅武  |
| input-number | 完成 | 崔晋瑜 |
| switch  | 完成 | 崔晋瑜  |
| message | 开发中 | 崔晋瑜 |
| form-item | 开发中 | 崔晋瑜 |
| form | 开发中 | 崔晋瑜 |
| row | 完成 | 崔晋瑜 |
| col | 完成 | 崔晋瑜 |
