import "../theme/common/common.less";
// import elementSan from "../dist/element-san.min.js";
import elCard from '../package/card/index.js';
import elIcon from '../package/icon/index.js';
import elButton from '../package/button/index.js';
import elInput from '../package/input/index';
import elInputNumber from '../package/input-number/index';
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
                    <!--<div style="height: 50px">-->
                        <el-input-number size="normal" step='0.002' max="100" precisionMode precision="3"></el-input-number>
                    <!--</div>-->
                    <!--<div style="height: 50px">-->
                        <el-input-number size="normal" step='0.002' max="100" precisionMode precision="3" disabled="true"></el-input-number>
                    <!--</div>-->
            </div>`,
    components:{
        'el-card': elCard,
        'el-icon': elIcon,
        'el-button': elButton,
        'el-input': elInput,
        'el-input-number':elInputNumber,
    },
    initData(){
        return {

        }
    },
});

let myApp = new MyApp();
myApp.attach(document.getElementById("app"));