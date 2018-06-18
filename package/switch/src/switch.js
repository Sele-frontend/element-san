import {defineComponent} from 'san';
export default defineComponent({

    template:`
        <div class="el-switch 
                    {{disabled?'is-disabled':''}}
                    {{checked?'is-checked':''}}">
            <input class="el-switch__input">
            <span s-if="activeText">{{activeText}}</span>
            <span class="el-switch__core">
                <span class="el-switch__button"></span>
            </span>
            <span s-if="inactiveText">{{inactiveText}}</span>
        </div>
    `,
    initData() {
        return {
            disabled:false,
            checked:false,
        }
    },

    

})
