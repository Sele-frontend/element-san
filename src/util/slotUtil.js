export default {

    /**
     * 判断el组件是否有某个slot
     * @param el
     * @param slotName
     * @returns {boolean}
     */
    hasSlot(el,slotName) {
        return el.slot(slotName)[0].children.length>0;
    }
}