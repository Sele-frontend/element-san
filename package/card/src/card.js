import {defineComponent} from 'san';
export default defineComponent({

    template:`
            <div class="el-card is-{{shadow}}-shadow">
                <div class="el-card__header"  
                     s-if="header">
                    <slot name="header">
                    
                    </slot>
                </div>
                <div class="el-card__body">
                    <slot name="body" 
                          style="{{bodyStyle}}">
                    
                    </slot>
                </div>
            </div>
    `,
    initData() {
        return {
            shadow: 'always', //阴影显示样式
            header: false, //是否有header
            bodyStyle: "",
            name:"el-card"
        }
    }


})