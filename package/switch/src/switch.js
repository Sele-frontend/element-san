import {defineComponent} from 'san';
export default defineComponent({

    template:`
        <div class="el-switch 
                    {{disabled?'switch-is-disabled':''}}
                    {{checked?'switch-is-checked':''}}"
                    on-click="changeValue">
            <input class="el-switch__input"
                   type="checkbox"
                   on-change="handleChange"
                   name="{=name=}"
                   value="{=value=}">
            <span s-if="inactiveText" 
                  class="el-switch__label--left"
                  s-ref="leftLabel">
                  {{inactiveText}}
            </span>
            <span class="el-switch__core" 
                  style="width:{{width}}px;" 
                  s-ref="core">
                <span class="el-switch__button" 
                      s-ref="button">
                </span>
            </span>
            <span s-if="activeText" 
                  class="el-switch__label--right"
                  s-ref="rightLabel">
                  {{activeText}}
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
            activeValue:true,   //  switch打开时的值，默认为true
            inactiveValue:false,    //  switch关闭时的值，默认为false
            name:'',    //  switch对应的name
        }
    },
    handleChange () {

    },
    changeValue () {
        if (!this.data.get('disabled')) {
            const state = this.data.get('checked');
            this.data.set('checked', !state);
            if(!state === true) {
                this.data.set('value', this.data.get('activeValue'));
            } else {
                this.data.set('value', this.data.get('inactiveValue'));
            }
        }
    },
    changeColor (state) {
        if (state === false) {
            this.ref('core').style.background = this.data.get("inactiveColor");
            this.ref('leftLabel').style.color = "rgb(64, 155, 255)";
            this.ref('rightLabel').style.color = "";
        } else {
            this.ref('core').style.background = this.data.get("activeColor");
            this.ref('leftLabel').style.color = "";
            this.ref('rightLabel').style.color = "rgb(64, 155, 255)";
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
    attached () {
        this.changeColor(this.data.get('checked'));
        const state = this.data.get('checked');
        if (state === true) {
            this.data.set('value', this.data.get('activeValue'));
        } else {
            this.data.set('value', this.data.get('inactiveValue')); 
        }
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
