import { defineComponent } from 'san';
import { transition } from 'san-transition';
export default defineComponent({

    template:`
        <div s-transition="hook('dialog-fade')">
            <div class="el-dialog__wrapper">
            </div>
        </div>
    `,
    initData() {
        return {

        }
    },
    hook:transition,
})
