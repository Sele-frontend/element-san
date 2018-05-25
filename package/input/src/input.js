import {defineComponent} from 'san';
import slotUtil from '../../../src/util/slotUtil';

export default defineComponent({

    template:`
        <div class="el-input">
            <div s-if="!textarea">
                <div class="el-input-group__prepend" s-if="prependFlag">
                    <slot name="prepend"></slot>
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
                       class="el_input__inner">
                 <div class="el-input-group__append" s-if="appendFlag">
                        <slot name="append"></slot>
                 </div>
            </div>
            <div s-if="textarea" class="el-textarea">
                <textarea cols="30"
                          rows="10"
                          value="{=value=}" 
                          placeholder="{=placeholder=}" 
                          disabled="{=disabled=}" 
                          readonly="{=readonly=}" 
                          on-click="handleClick" 
                          on-focus="handleFocus" 
                          on-blur="handleBlur" 
                          on-input="handleInput"></textarea>
            </div>
        </div>
    `,
    initData() {
        return {
            prependFlag:true,
            appendFlag:true,
            textarea:false,
            value:"",
            placeholder:"",
            disabled:false,
            readonly:false,
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
    }
})
