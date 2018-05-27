import "../theme/common/common.less";
import elCard from '../package/card/index.js';
import elIcon from '../package/icon/index.js';
import elButton from '../package/button/index.js';
import elInput from '../package/input/index';
import elementSan from '../dist/element-san.min.js';


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
                <el-input disabled placeholder="我是一个测试">
                </el-input>
            </div>`,
    components:{
        'el-card': elementSan.elCard,
        'el-icon': elementSan.elIcon,
        'el-button': elementSan.elButton,
        'el-input': elementSan.elInput
    },
    initData(){
        return {

        }
    },
});

let myApp = new MyApp();
myApp.attach(document.getElementById("app"));