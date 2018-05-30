import {defineComponent} from 'san';
import elIcon from '../../icon/index';
import slotUtil from '../../../src/util/slotUtil';

export default defineComponent({

    template:`
        <div class="el-input {{prefixFlag?'el-input--prefix':''}} {{suffixFlag?'el-input--suffix':''}} is-{{size}}">
            <div s-if="!textarea">
                <div class="el-input-group__prepend" s-if="prependFlag">
                    <slot name="prepend"></slot>
                </div>
                <div class="el-input__prefix" s-if="prefixFlag">
                    <div class="el-input__icon">
                        <el-icon name="{{icon}}"></el-icon>
                    </div>
                </div>
                <div class="el-input__suffix" s-if="suffixFlag">
                    <div class="el-input__icon">
                        <el-icon name="{{icon}}"></el-icon>
                    </div>
                </div>
                <input type="text" 
                       s-if="!textarea"  
                       type="text" 
                       value="{=value=}" 
                       placeholder="{=placeholder=}" 
                       disabled="{=disabled=}" 
                       readonly="{=readonly=}" 
                       on-click="handleClick" 
                       on-focus="handleFocus" 
                       on-blur="handleBlur" 
                       on-input="handleInput"
                       class="el_input__inner el-input--{{size}}">
                 <div class="el-input-group__append" s-if="appendFlag">
                        <slot name="append"></slot>
                 </div>
            </div>
            <div s-if="textarea" class="el-textarea">
                <textarea cols="20"
                          rows="5"
                          value="{=value=}" 
                          placeholder="{=placeholder=}" 
                          disabled="{=disabled=}" 
                          readonly="{=readonly=}" 
                          on-click="handleClick" 
                          on-focus="handleFocus" 
                          on-blur="handleBlur" 
                          on-input="handleInput"
                          class="el_textarea__inner"></textarea>
            </div>
        </div>
    `,
    initData() {
        return {
            prependFlag:true,
            appendFlag:true,
            textarea:false,
            prefixFlag:false,
            suffixFlag:false,
            prefixIcon:"",
            value:"",
            placeholder:"",
            disabled:false,
            readonly:false,
            size:"normal",
        }
    },
    attached() {
        if(!slotUtil.hasSlot(this,"prepend")) {
            this.data.set("prependFlag",false);
        }
        if(!slotUtil.hasSlot(this,"append")) {
            this.data.set("appendFlag",false);
        }
    },
    handleClick(e) {
        this.fire(e);
    },
    handleFocus(e) {
        this.fire(e);
    },
    handleBlur(e) {
        this.fire(e);
    },
    handleInput(e) {
        this.fire(e);
    },
    components:{
        'el-icon':elIcon
    }
})
