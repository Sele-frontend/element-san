import {defineComponent} from 'san';
export default defineComponent({

    template:`
        <div class="{{classes}}" style="{{style}}">
            <slot></slot>
        </div>
    `,
    initData () {
        return {
            classes:"",
            style:"",
            gutter:0,
        }
    },
    getClasses () {
        return "el-row";
    },
    attached () {
        this.data.set("classes", this.getClasses())
    }
})
