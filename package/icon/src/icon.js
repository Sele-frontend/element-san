/**
 * @Author: xu 
 * @Date: 2018-05-23 20:07:29 
 * @Last Modified by: xu
 * @Last Modified time: 2018-05-23 22:51:27
 */

import san, {DataTypes} from 'san';

export default san.defineComponent({
    template: `<i class="{{ 'el-icon-'+name }}"></i>`,

    initData() {
        
        return {
            name: 'ElIcon'
        };
    },
    dataTypes: {
        size: DataTypes.string
    }
});