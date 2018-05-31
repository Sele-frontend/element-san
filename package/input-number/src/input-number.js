import {defineComponent} from 'san';
import elInput from '../../input/index';
export default defineComponent({

    template:`
        <div class="is-number-{{size}}">
            <div class="el-input-number__decrease {{value==min?'disabled':''}}" on-click="sub(step)">
                <i class="el-icon-minus"></i>
            </div>
            <el-input value="{=value=}" 
                      numberFlag="true" 
                      size="{{size}}"
                      on-click="handleClick" 
                      on-focus="handleFocus" 
                      on-blur="handleBlur" 
                      on-input="handleInput"></el-input>
            <div class="el-input-number__increase {{value==max?'disabled':''}}" on-click="add(step)">
                <i class="el-icon-plus"></i>
            </div>
        </div>
    `,
    initData () {
        return {
            value:0,
            size:'normal',
            step:1,
            min:0,
            max:null,
        };
    },
    created () {
        this.watch('value', function (value) {
            const max = this.data.get('max'),
                min = this.data.get('min')
            if (value <= min) {
                this.data.set('value', min);
            }
            if (max !== null) {
                if (value >= max) {
                    this.data.set('value', max);
                }
            }
        });
    },
    components:{
        'el-input':elInput
    },
    add (n) {
        const value = this.data.get('value');
        n = parseInt(n);
        if (this.data.get('max') !== null) {
            if (value + n >= this.data.get('max')) {
                this.data.set('value', this.data.get('max'));
                return;
            }
        }
        this.data.set('value', value + n);
    },
    sub (n) {
        const value = this.data.get('value');
        n = parseInt(n);
        if (value - n <= this.data.get('min')) {
            this.data.set('value', this.data.get('min'));
            return;
        }
        this.data.set('value', value - n);
    },
    handleClick (e) {
        this.fire(e);
    },
    handleFocus (e) {
        this.fire(e);
    },
    handleBlur (e) {
        this.fire(e);
    },
    handleInput (e) {
        this.fire(e);
    },
});
