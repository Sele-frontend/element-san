import {defineComponent} from 'san';
import elInput from '../../input/index';

const getPrecision = function (value) {
    if (value === undefined) {
        return 0;
    }
    const valueString = value.toString();
    const dotPosition = valueString.indexOf(".");
    let precision = 0;
    if (dotPosition !== -1) {
        precision =  valueString.length - dotPosition - 1;
    }
    return precision;
}

const toPrecision = function (value, precision) {
    return parseFloat(parseFloat(Number(value).toFixed(precision)));
}

export default defineComponent({

    template:`
        <div class="is-number-{{size}}">
            <div></div>
            <div class="el-input-number__decrease 
                        {{value==min?'disabled':''}}" 
                        on-click="sub(step)" 
                        s-if="!precisionMode">
                <i class="el-icon-minus"></i>
            </div>
            <div class="el-input-number__decrease 
                        {{value==min?'disabled':''}}" 
                        on-click="subPrecision(step)" 
                        s-if="precisionMode">
                <i class="el-icon-minus"></i>
            </div>
            <el-input value="{=value=}" 
                      numberFlag="true" 
                      size="{{size}}"
                      on-click="handleClick" 
                      on-focus="handleFocus" 
                      on-blur="handleBlur" 
                      on-input="handleInput"></el-input>
            <div class="el-input-number__increase 
                       {{value==max?'disabled':''}}" 
                       on-click="add(step)" 
                       s-if="!precisionMode">
                <i class="el-icon-plus"></i>
            </div>
            <div class="el-input-number__increase 
                        {{value==max?'disabled':''}}" 
                        on-click="addPrecision(step)" 
                        s-if="precisionMode">
                <i class="el-icon-plus"></i>
            </div>
            <div></div>
        </div>
    `,
    initData () {
        return {
            value:0,
            size:'normal',
            step:1,
            min:0,
            max:null,
            precisionMode:false,
            precision:2,    //  精度默认为2
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
        if (this.data.get('precisionMode') === true) {
            const precision = this.data.get("precision");
            if (getPrecision(this.data.get('step')) > precision) {
                console.warn('[ELEMENTSAN WARN][INPUT_NUMBER]:precision should not be less than the decimal places of step');
            }
        }
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
    addPrecision (n) {
        const value = this.data.get('value');
        const precision = this.data.get('precision');
        const precisionFactor = Math.pow(10, precision);
        n = parseFloat(n);
        let tempValue = (precisionFactor * n + precisionFactor * value) / precisionFactor;
        tempValue = toPrecision(tempValue, precision);
        this.data.set('value', tempValue);
    },
    subPrecision (n) {
        const value = this.data.get('value');
        const precision = this.data.get('precision');
        const precisionFactor = Math.pow(10, precision);
        n = parseFloat(n);
        let tempValue = (precisionFactor * value - precisionFactor * n) / precisionFactor;
        tempValue = toPrecision(tempValue, precision);
        this.data.set('value', tempValue);
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
