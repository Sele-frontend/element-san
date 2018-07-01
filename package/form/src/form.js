import {defineComponent} from 'san';
export default defineComponent({

    template:`
        <div class="el-form {{labelPosition?'el-form--label-'+labelPosition:''}}">
            <slot></slot>
        </div>
    `,
    initData() {
        return {
            model:undefined,
            formItem:[],
            labelWidth:'100px',
            rules:{},
            labelPosition:undefined,    //  标签位置，可能为三个值left、top或者为right
            formStatus:'notValidated',
            valid:true,  //  内容有效状态，默认为有效
            size:'',    //  form表单大小
        }
    },
    attached () {
        this.data.get('formItem').forEach( (ele) => {
            if (this.data.get('labelWidth') !== undefined) {
                ele.data.set('labelWidth', this.data.get('labelWidth'));
            }
        });
    },
    messages:{
        'el.Form.addField':function (message) {
            this.data.push('formItem',message.value);
        },
        'el.form.removeField':function (message) {
            const index = this.data.get('formItem').indexOf(message.value);
            this.data.slice('formItem',index,1);
        }
    },
    resetField () {
        this.data.get('formItem').forEach( (ele) => {
            ele.reset();
        })
    },
    validate (callback) {
        /**
         *
         * 表单验证
         *
         */
        let count = 0;
        this.data.get('formItem').forEach( (ele) => {
            if ( ele.getRules() !== undefined){
                count ++;
            }
        })
        let count_2 = 0;
        this.data.get('formItem').forEach(ele=>{
           ele.validate();
           count_2 ++;
           if (count_2 == count) {
               callback();
           }
        });
    }
})
