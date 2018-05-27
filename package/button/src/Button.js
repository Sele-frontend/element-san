import { defineComponent } from 'san';
export default defineComponent({

    template:`
            <div style="background: {{color}}" 
                 class="el-button el-button_{{type}}"
                 onclick="handleClick(e)"
                 onhover="handleHover(e)"
                 onfocus="handleFocus(e)"
                 onblur="handleBlur(e)">
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