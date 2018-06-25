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
        const offset = this.data.get("offset");
        const push = this.data.get("push");
        const pull = this.data.get("pull");
        const span = this.data.get("span");
        let classList = `el-col
                         ${offset?'el-col-offset-'+offset:''}
                         ${push?'el-col-push-'+push:''}
                         ${pull?'el-col-pull-'+pull:''}
                         ${span?'el-col-'+span:''}
                         `;
        this.data.set("classes", classList);
    },
    attached () {
        this.getClasses();
    }
})
