import {defineComponent} from 'san';
import { transition } from 'san-transition';
import schema from 'async-validator';

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
              <div
                s-if="validateState === 'error' && showMessage"
                class="el-form-item__error"
                s-transition="hook(el-zoom-in-top)"
              >
                {{validateMessage}}
              </div>
          </div>
        </div>
    `,
    initData() {
        return {
            classes:'',
            validateState:'',
            required:'',
            size:'',
            labelFor:'',
            inlineMessage:'',
            form:'',
            prop:'',
            rule:undefined,
            validateMessage:'',
            showMessage:true,
        }
    },
    created () {
        this.getForm();
        this.getFieldValue();
        this.dispatch('el.Form.addField', this);
    },
    attached () {
        this.data.set('classes', this.getClasses());
        this.watch('validateState', function () {
            this.data.set('classes', this.getClasses());
        });
    },
    
    /**
     * get the value of the field
     */
    getFieldValue: function () {
        const form = this.data.get('form');
        let model;
        try {
            model = form.data.get('model');
        } catch (e) {
            console.warn(e);
        }
        const prop = this.data.get('prop');
        if (!model || !prop) {
            return ;
        }
        this.data.set('fieldValue', model[prop]);
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
        try {
            if (this.parent.parent.el.classList[0] !== "el-form") {
                throw "PLEASE PUT THE EL-FORM-ITEM IN EL-FORM";
            }
            this.data.set('form', this.parent.parent);
        } catch (e) {
            console.warn(e);
        }
    },
    reset () {

    },
    validate () {

        //  if there is not any rules , just return.
        const rule = this.getRules();
        const value = this.getFieldValue();
        const requiredState = this.data.get("required");
        if (rule === undefined) {
            return ;
        }
        this.data.set('validateState', "validating");
        if (requiredState == true) {
            if (value == '') {
                this.data.set('validateState', 'error');
            }
        }
        const label = this.data.get('prop');
        let descriptor = {};
        descriptor[label] = rule;
        let validator = new schema(descriptor),
            input = {};
        input[label] = value;

        validator.validate(input, (error) => {
            if (error) {
                this.data.set('validateState', 'error');
                console.log('error');
            } else {
                this.data.set('validateState', 'success');
                console.log('success');
            }
        })
    },
    disposed () {
        this.dispatch("el.form.removeField", this);
    },
    getRules () {
        let rules;
        const prop = this.data.get('prop');
        if (!prop) {
            return undefined;
        }
        try {
            if ( (rules = this.data.get('rule')) != undefined ) {
                return rules;
            } else if ( (rules = this.data.get('form').data.get('rules'))[prop] != undefined ) {
                return rules;
            }
            return undefined;
        } catch (e) {
            console.error(e);
        }
    },
    hook:transition,

})
