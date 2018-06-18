import {defineComponent} from 'san';
export default defineComponent({

    template:`
        <div class="el-switch 
                    {{disabled?'is-disabled':''}}
                    {{checked?'is-checked':''}}"
                    on-click="changeValue">
            <input class="el-switch__input"
                   type="checkbox"
                   on-change="handleChange"
                   value="{=value=}">
            <span s-if="activeText" 
                  class="el-switch__label--left">
                  {{activeText}}
            </span>
            <span class="el-switch__core" 
                  style="width:{{width}}px;" 
                  s-ref="core">
                <span class="el-switch__button" 
                      s-ref="button">
                </span>
            </span>
            <span s-if="inactiveText" 
                  class="el-switch__label--right">
                  {{inactiveText}}
            </span>
        </div>
    `,
    initData () {
        return {
            disabled:false, //  是否禁用switch,默认为false
            checked:false,
            value:'',
            width:'40',   //  switch的宽度,默认为40px
            activeColor:'#409EFF', //  switch Active时的背景颜色,默认为#409EFF
            inactiveColor:'#C0CCDA',   //  switch inactive时的背景颜色,默认为#C0CCDA
            activeText:'',  //  switch Active时的文字，默认为空
            inactiveText:'',    //  switch inactive时的文字，默认为空
        }
    },
    handleChange () {

    },
    changeValue () {
        if (!this.data.get('disabled')) {
            const state = this.data.get('checked');
            this.data.set('checked', !state);
        }
    },
    changeColor (state) {
        if (state === false) {
            this.ref('core').style.background = this.data.get("inactiveColor");
        } else {
            this.ref('core').style.background = this.data.get("activeColor");
        }
    },
    hasText () {
        const activeText = this.data.get('activeText');
        const inactiveText = this.data.get('inactiveText');
        if (activeText !== '' || inactiveText !== '') {
            return true;
        } else {
            return false;
        }
    },
    inited () {
        this.watch('checked', function (value) {
            if (value === false) {
                this.ref('button').style.transform = "";    
            } else {
                this.ref('button').style.transform = `translate3d(${this.data.get('width') - 20}px,0px,0px)`;
            }
            this.changeColor(value);
        })
    }
})
