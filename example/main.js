import "../theme/common/common.less";
// import { elCard, elIcon, elButton, elInput, elInputNumber, elSwitch} from  '../package/index';
// import elementSan from "../dist/element-san.min.js";
import elCard from '../package/card/index.js';
import elIcon from '../package/icon/index.js';
import elButton from '../package/button/index.js';
import elInput from '../package/input/index';
import elInputNumber from '../package/input-number/index';
import elSwitch from '../package/switch/index';
import elRow from '../package/row/index';
import elCol from '../package/col/index';
import elForm from '../package/form/index';
import elFormItem from '../package/form-item/index';
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
                <el-input  placeholder="我是一个测试" prefixFlag="true" icon="search" size="small">
                </el-input>
                <el-input-number size="small" step='0.002' max="100" precisionMode precision="3"></el-input-number>
                <el-switch activeText="打开" inactiveText="关闭" width="40"></el-switch>
                <el-row>
                    <el-col span="4">
                        <el-form model="{=model=}" s-ref="form" size="small">
                            <el-form-item prop="mobile" rule="{{ruleMobile}}" s-ref="item" label="手机号码">
                                <el-input value="{=model.mobile=}"></el-input>
                            </el-form-item>
                            <el-form-item prop="name" s-ref="item" label="姓名">
                                <el-input value="{=model.name=}"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <button on-click="validate">验证</button>
                                <button on-click="reset">重置</button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col span="4">123</el-col>
                    <el-col span="4">123</el-col>
                    <el-col span="4">123</el-col>
                    <el-col span="4">123</el-col>
                    <el-col span="4">123</el-col>
                </el-row>
            </div>`,
    components:{
        'el-card': elCard,
        'el-icon': elIcon,
        'el-button': elButton,
        'el-input': elInput,
        'el-input-number':elInputNumber,
        'el-switch':elSwitch,
        'el-row':elRow,
        'el-col':elCol,
        'el-form':elForm,
        'el-form-item':elFormItem
    },
    initData(){
        return {
            model:{
                'mobile':1234,
                'name':"test",
            },
            ruleMobile: [
                {
                    type: 'string',
                    required: true,
                    message: '请输入手机号码'
                },
                {
                    validator(rule, value, callback) {
                        if (value) {
                            if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
                                callback([new Error('请输入正确的手机号码!')]);
                            }
                            else {
                                callback([]);
                            }
                        }
                        else {
                            callback([new Error('请输入手机号码!')]);
                        }
                    }
                }
            ]
        }
    },

    validate () {
        this.ref('form').validate();
        return false;
    },

    reset () {
        this.ref('form').resetField();
    }
});

let myApp = new MyApp();
myApp.attach(document.getElementById("app"));