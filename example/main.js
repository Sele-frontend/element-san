import "../theme/common/common.less";
// import elementSan from "../dist/element-san.min.js";
import elCard from '../package/card/index.js';
import elIcon from '../package/icon/index.js';
import elButton from '../package/button/index.js';
import elInput from '../package/input/index';
import elInputNumber from '../package/input-number/index';
import elSwitch from '../package/switch/index';
// let {elCard, elIcon, elButton, elInput, elInputNumber} = elementSan;

import san from 'san';

let MyApp = san.defineComponent({
    template:`<div>
                <p class="test">我是一个成功的测试</p>
                <el-card header="true" shadow="hover">
                    <div slot="header">我是头</div>
                    <div slot="body">我是身子</div>
                </el-card>
                <el-icon name="edit"></el-icon>
                <el-button type="standard">按钮</el-button>
                <el-button type="lovely" color="red">按钮</el-button>
                <el-button type="circle" color="#233352">嘤</el-button>
                <el-input  placeholder="我是一个测试" prefixFlag="true" icon="search">
                </el-input>
                <el-input-number size="medium" step='0.002' max="100" precisionMode precision="3"></el-input-number>
                <el-switch activeColor="red"></el-switch>
            </div>`,
    components:{
        'el-card': elCard,
        'el-icon': elIcon,
        'el-button': elButton,
        'el-input': elInput,
        'el-input-number':elInputNumber,
        'el-switch':elSwitch,
    },
    initData(){
        return {

        }
    },
});

let myApp = new MyApp();
myApp.attach(document.getElementById("app"));