// import { expect, it } from '@jest/globals'
// import { mount } from '@vue/test-utils'
// import Calculator from '../components/Calculator'

// describe('Calculator test inputs', ()=>{
//     it('Test operand1 input value', ()=>{
//         const wrapper = mount(Calculator)
//         const op1 = wrapper.find('input[name=operand1]')
//         op1.setValue('1')
//         // op1.element.value = '1'
//         // op1.trigger('input')
//         expect(wrapper.vm.operand1).toBe(1)
//     })

//     it('Test operand2 input value', ()=>{
//         const wrapper = mount(Calculator)
//         const op2 = wrapper.find('input[name=operand2]')
//         op2.setValue('2')
//         // op1.element.value = '1'
//         // op1.trigger('input')
//         expect(wrapper.vm.operand2).toBe(2)
//     })
// })

// describe('Calculator test operations', ()=>{
//     it('Test method sum', ()=>{
//         const wrapper = mount(Calculator)

//         const op1 = wrapper.find('input[name=operand1]')
//         op1.setValue('1')

//         const op2 = wrapper.find('input[name=operand2]')
//         op2.setValue('2')

//         const btnSum = wrapper.find('button[name="+"]')
//         btnSum.trigger('click')

//         expect(wrapper.vm.result).toBe(3)
//     })

//     it('Test method sub', ()=>{
//         const wrapper = mount(Calculator)

//         const op1 = wrapper.find('input[name=operand1]')
//         op1.setValue('4')

//         const op2 = wrapper.find('input[name=operand2]')
//         op2.setValue('2')

//         const btnSum = wrapper.find('button[name="-"]')
//         btnSum.trigger('click')

//         expect(wrapper.vm.result).toBe(2)
//     })
// })
