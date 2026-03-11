import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Combobox from './index.vue'

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'disabled-opt', label: 'Disabled', disabled: true },
]

describe('Combobox', () => {
  it('renders the trigger button', () => {
    const wrapper = mount(Combobox, { props: { modelValue: '', options } })
    expect(wrapper.find('.combobox__control').exists()).toBe(true)
  })

  it('shows placeholder when no value selected', () => {
    const wrapper = mount(Combobox, {
      props: { modelValue: '', options, placeholder: 'Pick one' },
    })
    expect(wrapper.find('.combobox__control').text()).toBe('Pick one')
  })

  it('shows selected label when value is set', () => {
    const wrapper = mount(Combobox, {
      props: { modelValue: 'apple', options },
    })
    expect(wrapper.find('.combobox__control').text()).toBe('Apple')
  })

  it('opens dropdown on trigger click', async () => {
    const wrapper = mount(Combobox, { props: { modelValue: '', options } })
    await wrapper.find('.combobox__control').trigger('click')
    expect(wrapper.find('.combobox__dropdown').exists()).toBe(true)
  })

  it('renders all options when open', async () => {
    const wrapper = mount(Combobox, { props: { modelValue: '', options } })
    await wrapper.find('.combobox__control').trigger('click')
    expect(wrapper.findAll('.combobox__option')).toHaveLength(options.length)
  })

  it('selects option and emits update:modelValue', async () => {
    const wrapper = mount(Combobox, { props: { modelValue: '', options } })
    await wrapper.find('.combobox__control').trigger('click')
    const optEls = wrapper.findAll('.combobox__option')
    await optEls[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['apple'])
  })

  it('closes dropdown after selecting in single mode', async () => {
    const wrapper = mount(Combobox, { props: { modelValue: '', options } })
    await wrapper.find('.combobox__control').trigger('click')
    await wrapper.findAll('.combobox__option')[0].trigger('click')
    expect(wrapper.find('.combobox__dropdown').exists()).toBe(false)
  })

  it('supports multi-select', async () => {
    const wrapper = mount(Combobox, {
      props: { modelValue: [], options, multiple: true },
    })
    await wrapper.find('.combobox__control').trigger('click')
    const optEls = wrapper.findAll('.combobox__option')
    await optEls[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['apple']])
  })

  it('deselects in multi-select mode', async () => {
    const wrapper = mount(Combobox, {
      props: { modelValue: ['apple'], options, multiple: true },
    })
    await wrapper.find('.combobox__control').trigger('click')
    await wrapper.findAll('.combobox__option')[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([[]])
  })

  it('filters options when search is enabled', async () => {
    const wrapper = mount(Combobox, {
      props: { modelValue: '', options, search: true },
    })
    await wrapper.find('.combobox__control').trigger('click')
    const input = wrapper.find('.combobox__search-input')
    await input.setValue('an')
    await input.trigger('input')
    const visibleOptions = wrapper.findAll('.combobox__option')
    expect(visibleOptions).toHaveLength(1)
    expect(visibleOptions[0].text()).toContain('Banana')
  })

  it('shows clear button when clearable and value set', () => {
    const wrapper = mount(Combobox, {
      props: { modelValue: 'apple', options, clearable: true },
    })
    expect(wrapper.find('.combobox__clear').exists()).toBe(true)
  })

  it('clears value when clear button clicked', async () => {
    const wrapper = mount(Combobox, {
      props: { modelValue: 'apple', options, clearable: true },
    })
    await wrapper.find('.combobox__clear').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
  })

  it('applies invalid class', () => {
    const wrapper = mount(Combobox, {
      props: { modelValue: '', options, invalid: true },
    })
    expect(wrapper.classes()).toContain('combobox--invalid')
  })

  it('applies disabled class and disables trigger', () => {
    const wrapper = mount(Combobox, {
      props: { modelValue: '', options, disabled: true },
    })
    expect(wrapper.classes()).toContain('combobox--disabled')
    expect(wrapper.find('.combobox__control').attributes('disabled')).toBeDefined()
  })
})
