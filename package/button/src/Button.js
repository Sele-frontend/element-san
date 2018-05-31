import { defineComponent } from 'san';
export default defineComponent({

    template:`
            <div style="background: {{color}}" 
                 class="el-button el-button_{{type}}"
                 on-click="handleClick(e)"
                 on-hover="handleHover(e)"
                 on-focus="handleFocus(e)"
                 on-blur="handleBlur(e)">
                <span class="el-button_content">
                    <slot>
                       
                    </slot>
                </span>
            </div>
    `,
    initData() {
        return {
            type: 'standard',
            name: 'el-button',
            color: '#4199ee',
        }
    },
    handleClick(e) {
        this.fire('click',e);
    },
    handleHover(e) {
        this.fire('hover',e);
    },
    handleFocus(e) {
        this.fire('focus',e);
    },
    handleBlur(e) {
        this.fire('blur',e);
    }

})