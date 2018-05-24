import { defineComponent } from 'san';
export default defineComponent({

    template:`
            <div style="background: {{color}}" class="el-button el-button_{{type}}">
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
    }

})