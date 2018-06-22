import {defineComponent} from 'san';
export default defineComponent({

    template:`
        <div class="{{classes}}" style="{{style}}">
            <slot></slot>
        </div>
    `,
    initData() {
        return {
            classes:"",
            style:"",
            push:"",
            span:"",
            offset:"",
            pull:"",
        }
    },
    getClasses () {
        let classList = `el-col
                         el-col-offset-${this.data.get("offset")}
                         el-col-push-${this.data.get("push")}
                         el-col-pull-${this.data.get("pull")}
                         el-col-${this.data.get('span')}`;
        this.data.set("classes", classList);
    },
    attached () {
        this.getClasses();
    }
})
