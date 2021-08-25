import { expect, it } from '@jest/globals'
import { mount } from '@vue/test-utils'
import { each } from 'async'
import Calculator from '../components/Calculator'

describe('Calculator test inputs', ()=>{
    // it('Test operand1 input value', ()=>{
    //     const wrapper = mount(Calculator)
    //     const op1 = wrapper.find('input[name=operand1]')
    //     op1.setValue('1')
    //     // op1.element.value = '1'
    //     // op1.trigger('input')
    //     expect(wrapper.vm.operand1).toBe(1)
    // })

    // it('Test operand2 input value', ()=>{
    //     const wrapper = mount(Calculator)
    //     const op2 = wrapper.find('input[name=operand2]')
    //     op2.setValue('2')
    //     // op1.element.value = '1'
    //     // op1.trigger('input')
    //     expect(wrapper.vm.operand2).toBe(2)
    // })


    // it('Test plus method', ()=>{
    //     const wrapper = mount(Calculator)
    //     const op1 = wrapper.find('input[name=operand1]')
    //     const op2 = wrapper.find('input[name=operand2]')
    //     const btn = wrapper.find('button#plus')
    //     op1.setValue('5')
    //     op2.setValue('4')

    //     btn.trigger('click')

    //     expect(wrapper.vm.result).toBe(9)
    // })

    // it('Test minus method', ()=>{
    //     const wrapper = mount(Calculator)
    //     const op1 = wrapper.find('input[name=operand1]')
    //     const op2 = wrapper.find('input[name=operand2]')
    //     const btn = wrapper.find('button#minus')
    //     op1.setValue('5')
    //     op2.setValue('4')

    //     btn.trigger('click')

    //     expect(wrapper.vm.result).toBe(1)
    // })

    // it('Test divide method', ()=>{
    //     const wrapper = mount(Calculator)
    //     const op1 = wrapper.find('input[name=operand1]')
    //     const op2 = wrapper.find('input[name=operand2]')
    //     const btn = wrapper.find('button#divide')
    //     op1.setValue('10')
    //     op2.setValue('2')

    //     btn.trigger('click')

    //     expect(wrapper.vm.result).toBe(5)
    // })

    // it('Test multiplication method', ()=>{
    //     const wrapper = mount(Calculator)
    //     const op1 = wrapper.find('input[name=operand1]')
    //     const op2 = wrapper.find('input[name=operand2]')
    //     const btn = wrapper.find('button#multiplication')
    //     op1.setValue('5')
    //     op2.setValue('2')

    //     btn.trigger('click')

    //     expect(wrapper.vm.result).toBe(10)
    // })

    it('Test check show keyboard', ()=>{
        const wrapper = mount(Calculator)
        const showvk = wrapper.find('#showvk');
        showvk.setChecked()

        wrapper.vm.$nextTick().then(() => {
            expect(wrapper.find(".virtual-keyboard").exists()).toBeTruthy()
        })
    })


    it('Test radio button 1 ', ()=>{
        const wrapper = mount(Calculator)
        const op1 = wrapper.find('input[name=operand1]')
        const op2 = wrapper.find('input[name=operand2]')
        const showvk = wrapper.find('#showvk');

        showvk.setChecked()

        wrapper.vm.$nextTick().then(() => {
            const key7 = wrapper.find('#key7')
            const key1 = wrapper.find('#key1')
            //const radio = wrapper.find('input[name=radio]')
            const radios = wrapper.findAll('input[name=radio]')
            radios.setChecked(true);

            key7.trigger('click')
            key1.trigger('click')

            wrapper.vm.$nextTick().then(() => {
                const op1 = wrapper.find('input[name=operand1]')
                expect(op1.element.value).toBe('71');
            })

            

            //console.log(radios);
            // radio.element.selected = true;
            // radio.trigger('change');

            // key7.trigger('click')
            // key1.trigger('click')

            // expect(p1.val()).toBe('71');




            // const radioInput = wrapper.find('input[name=radio]')
            //expect(wrapper.find(".virtual-keyboard").exists()).toBeTruthy()
            //expect(radioInput.exists()).toBeTruthy()

            // radioInput.setChecked()

            // expect(radioInput.element.checked).toBe('true')

            


            // const radioInput = wrapper.find('input[name=radio]')
            // const key7 = wrapper.find('#key7')
            // const key1 = wrapper.find('#key1')
            // const key8 = wrapper.find('#key8')
            // const key5 = wrapper.find('#key5');

            // wrapper.vm.$nextTick().then(() => {
            //     radioInput.setChecked()
            //     expect(radioInput.element.checked).toBeTruthy()
            // })
        })
    })


        // waitForUpdate(() => {
        //     expect(wrapper.find(".virtual-keyboard").isVisible()).toBe(true)
        //     wrapper.vm.showvk = true;
        // })

        //expect(wrapper.vm.showvk).toBe(true)
        



        // showvk.trigger('click')
        // vm.showvk = true;

        // expect(wrapper.find(".virtual_keyboard").exists()).toBe(true)




        // radioInput.setChecked()
        // expect(radioInput.element.checked).toBeTruthy()

        





        // op1.setValue('5')
        // op2.setValue('2')

        // btn.trigger('click')

        // expect(wrapper.vm.result).toBe(10)
    // })
})