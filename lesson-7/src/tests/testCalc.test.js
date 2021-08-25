import { expect, it } from '@jest/globals'
import { mount } from '@vue/test-utils'
import { each } from 'async'
import Calculator from '../components/Calculator'

describe('Calculator test inputs', ()=>{
    it('Test operand1 input value', ()=>{
        const wrapper = mount(Calculator)
        const op1 = wrapper.find('input[name=operand1]')
        op1.setValue('1')

        expect(wrapper.vm.operand1).toBe(1)
    })

    it('Test operand2 input value', ()=>{
        const wrapper = mount(Calculator)
        const op2 = wrapper.find('input[name=operand2]')
        op2.setValue('2')

        expect(wrapper.vm.operand2).toBe(2)
    })


    it('Test plus method', ()=>{
        const wrapper = mount(Calculator)
        const op1 = wrapper.find('input[name=operand1]')
        const op2 = wrapper.find('input[name=operand2]')
        const btn = wrapper.find('button#plus')
        op1.setValue('5')
        op2.setValue('4')

        btn.trigger('click')

        expect(wrapper.vm.result).toBe(9)
    })

    it('Test minus method', ()=>{
        const wrapper = mount(Calculator)
        const op1 = wrapper.find('input[name=operand1]')
        const op2 = wrapper.find('input[name=operand2]')
        const btn = wrapper.find('button#minus')
        op1.setValue('5')
        op2.setValue('4')

        btn.trigger('click')

        expect(wrapper.vm.result).toBe(1)
    })

    it('Test divide method', ()=>{
        const wrapper = mount(Calculator)
        const op1 = wrapper.find('input[name=operand1]')
        const op2 = wrapper.find('input[name=operand2]')
        const btn = wrapper.find('button#divide')
        op1.setValue('10')
        op2.setValue('2')

        btn.trigger('click')

        expect(wrapper.vm.result).toBe(5)
    })

    it('Test multiplication method', ()=>{
        const wrapper = mount(Calculator)
        const op1 = wrapper.find('input[name=operand1]')
        const op2 = wrapper.find('input[name=operand2]')
        const btn = wrapper.find('button#multiplication')
        op1.setValue('5')
        op2.setValue('2')

        btn.trigger('click')

        expect(wrapper.vm.result).toBe(10)
    })

    it('Test check show keyboard', async () => {
        const wrapper = mount(Calculator)
        const showvk = wrapper.find('#showvk');
        await showvk.setChecked()

        expect(wrapper.find(".virtual-keyboard").exists()).toBeTruthy()
    })

    it('Test calc keyboard, operand 1', async () => {
        const wrapper = mount(Calculator)
        const showvk = wrapper.find('#showvk');

        await showvk.setChecked()

        const radio1 = wrapper.find('input.radio-operand1');

        await radio1.setChecked()

        const key7 = wrapper.find('#key7')
        const key1 = wrapper.find('#key1')

        key7.trigger('click')
        key1.trigger('click')

        expect(wrapper.vm.operand1).toBe(71)  
    })

    it('Test calc keyboard, operand 2', async () => {
        const wrapper = mount(Calculator)
        const showvk = wrapper.find('#showvk');

        await showvk.setChecked()

        const radio2 = wrapper.find('.radio-operand2');

        await radio2.setChecked()

        const key8 = wrapper.find('#key8')
        const key5 = wrapper.find('#key5');

        key8.trigger('click')
        key5.trigger('click')

        expect(wrapper.vm.operand2).toBe(85)  
    })

    it('Test calculator work', async () => {
        const wrapper = mount(Calculator)
        const showvk = wrapper.find('#showvk');
        const btn = wrapper.find('button#plus')

        await showvk.setChecked()

        //operator 1
        const radio1 = wrapper.find('input.radio-operand1');

        await radio1.setChecked()

        const key7 = wrapper.find('#key7')
        const key1 = wrapper.find('#key1')

        key7.trigger('click')
        key1.trigger('click')

        //operator 2
        const radio2 = wrapper.find('.radio-operand2');

        await radio2.setChecked()

        const key8 = wrapper.find('#key8')
        const key5 = wrapper.find('#key5');

        key8.trigger('click')
        key5.trigger('click')

        //click on plus button
        btn.trigger('click');

        expect(wrapper.vm.result).toBe(156)
    })

    it('Test delete keyboard, operand 2', async () => {
        const wrapper = mount(Calculator)
        const showvk = wrapper.find('#showvk');

        await showvk.setChecked()

        const radio2 = wrapper.find('.radio-operand2');
        const del = wrapper.find('#delete');

        await radio2.setChecked()

        const key8 = wrapper.find('#key8')
        const key5 = wrapper.find('#key5');

        key8.trigger('click')
        key5.trigger('click')

        //delete symbol
        del.trigger('click')

        expect(wrapper.vm.operand2).toBe(8)  
    })
})