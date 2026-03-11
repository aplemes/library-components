import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ToggleGroup from './index.vue'

const defaultOptions = [
  { id: 'tog-1', label: 'Option 1', value: 'opt1' },
  { id: 'tog-2', label: 'Option 2', value: 'opt2' },
  { id: 'tog-3', label: 'Option 3', value: 'opt3', disabled: true },
]

describe('ToggleGroup', () => {
  it('renders all options', () => {
    const wrapper = mount(ToggleGroup, { props: { name: 'group', options: defaultOptions } })
    expect(wrapper.findAll('input[type="checkbox"]').length).toBe(3)
  })

  it('renders labels for all options', () => {
    const wrapper = mount(ToggleGroup, { props: { name: 'group', options: defaultOptions } })
    expect(wrapper.findAll('.toggle-group__label').length).toBe(3)
  })

  it('sets name attribute on all inputs', () => {
    const wrapper = mount(ToggleGroup, { props: { name: 'mygroup', options: defaultOptions } })
    wrapper.findAll('input').forEach(input => {
      expect(input.attributes('name')).toBe('mygroup')
    })
  })

  it('checks inputs matching modelValue', () => {
    const wrapper = mount(ToggleGroup, { props: { name: 'group', options: defaultOptions, modelValue: ['opt1'] } })
    const inputs = wrapper.findAll('input')
    expect((inputs[0].element as HTMLInputElement).checked).toBe(true)
    expect((inputs[1].element as HTMLInputElement).checked).toBe(false)
  })

  it('emits update:modelValue when toggle changes', async () => {
    const wrapper = mount(ToggleGroup, { props: { name: 'group', options: defaultOptions, modelValue: [] } })
    await wrapper.findAll('input')[0].setValue(true)
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([['opt1']])
  })

  it('disables the correct option', () => {
    const wrapper = mount(ToggleGroup, { props: { name: 'group', options: defaultOptions } })
    expect(wrapper.findAll('input')[2].attributes('disabled')).toBeDefined()
  })

  it('applies inline class when inline prop is true', () => {
    const wrapper = mount(ToggleGroup, { props: { name: 'group', options: defaultOptions, inline: true } })
    expect(wrapper.find('.toggle-group').classes()).toContain('toggle-group--inline')
  })

  it('does not apply inline class by default', () => {
    const wrapper = mount(ToggleGroup, { props: { name: 'group', options: defaultOptions } })
    expect(wrapper.find('.toggle-group').classes()).not.toContain('toggle-group--inline')
  })

  it('removes value when toggle is unchecked', async () => {
    const wrapper = mount(ToggleGroup, { props: { name: 'group', options: defaultOptions, modelValue: ['opt1', 'opt2'] } })
    await wrapper.findAll('input')[0].setValue(false)
    const emitted = wrapper.emitted('update:modelValue')!
    expect(emitted[emitted.length - 1][0]).not.toContain('opt1')
  })
})
