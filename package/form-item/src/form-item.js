import {defineComponent} from 'san';
export default defineComponent({

    template:`
        <div class="el-form-item {{classes}}">
            <label for="{=labelFor=}" 
                   class="el-form-item__label" 
                   style="{=labelStyle=}" 
                   s-if="label">
                <slot name="label">{{label + form.labelSuffix}}</slot>
            </label>
            <div class="el-form-item__content" style="{=contentStyle=}">
            <slot></slot>
            <transition name="el-zoom-in-top">
              <div
                s-if="validateState === 'error' && showMessage && form.showMessage"
                class="el-form-item__error"
                :class="{
                  'el-form-item__error--inline': typeof inlineMessage === 'boolean'
                    ? inlineMessage
                    : (elForm && elForm.inlineMessage || false)
                }"
              >
                {{validateMessage}}
              </div>
            </transition>
          </div>
        </div>
    `,
    initData() {
        return {
            classes:'',
            validateState:'',
            isRequired:'',
            size:'',
            labelFor:'',
            inlineMessage:'',
            form:'',
        }
    },
    created () {

    },
    attached () {
        this.data.set('classes', this.getClasses());
        this.getForm();
    },

    /**
     *  get the classes of the form item
     */
    getClasses () {
        const validateState = this.data.get('validateState');
        const isRequired = this.data.get('isRequired');
        const size = this.data.get('size');
        let classes = '';
        switch (validateState) {
            case 'error':
                    classes += 'is-error ';
                    break;
            case 'validating':
                    classes += 'is-validating ';
                    break;
            case 'success':
                    classes += 'is-success ';
        }
        if (isRequired) {
            classes += 'is-required ';
        }
        if (size) {
            classes += `el-form-item--${size}`;
        }
        return classes;
    },
    getForm () {
        this.data.set('form', this.parent.parent);
    },
    reset () {

    },
    disposed () {
        this.dispatch("el.form.removeField", this);
    }

})
