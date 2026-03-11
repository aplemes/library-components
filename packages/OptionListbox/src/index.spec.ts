import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import OptionListbox from './index.vue'

const options = [
  { value: 'alpha', label: 'Alpha' },
  { value: 'beta', label: 'Beta' },
  { value: 'gamma', label: 'Gamma' },
  { value: 'disabled-opt', label: 'Disabled', disabled: true },
]

describe('OptionListbox', () => {
  it('does not render when open is false', () => {
    const wrapper = mount(OptionListbox, {
      props: { modelValue: '', options, open: false },
    })
    expect(wrapper.find('.option-listbox').exists()).toBe(false)
  })

  it('renders when open is true', () => {
    const wrapper = mount(OptionListbox, {
      props: { modelValue: '', options, open: true },
    })
    expect(wrapper.find('.option-listbox').exists()).toBe(true)
  })

  it('renders all options', () => {
    const wrapper = mount(OptionListbox, {
      props: { modelValue: '', options, open: true },
    })
    expect(wrapper.findAll('.option-listbox__item')).toHaveLength(options.length)
  })

  it('marks selected option', () => {
    const wrapper = mount(OptionListbox, {
      props: { modelValue: 'alpha', options, open: true },
    })
    const items = wrapper.findAll('.option-listbox__item')
    expect(items[0].classes()).toContain('option-listbox__item--selected')
  })

  it('emits update:modelValue when option clicked', async () => {
    const wrapper = mount(OptionListbox, {
      props: { modelValue: '', options, open: true },
    })
    await wrapper.findAll('.option-listbox__item')[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['alpha'])
  })

  it('emits close after single select', async () => {
    const wrapper = mount(OptionListbox, {
      props: { modelValue: '', options, open: true },
    })
    await wrapper.findAll('.option-listbox__item')[0].trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('supports multi-select', async () => {
    const wrapper = mount(OptionListbox, {
      props: { modelValue: [], options, open: true, multiple: true },
    })
    await wrapper.findAll('.option-listbox__item')[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['alpha']])
  })

  it('deselects in multi-select', async () => {
    const wrapper = mount(OptionListbox, {
      props: { modelValue: ['alpha'], options, open: true, multiple: true },
    })
    await wrapper.findAll('.option-listbox__item')[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([[]])
  })

  it('filters options when search is enabled', async () => {
    const wrapper = mount(OptionListbox, {
      props: { modelValue: '', options, open: true, search: true },
    })
    const input = wrapper.find('.option-listbox__search-input')
    await input.setValue('bet')
    await input.trigger('input')
    const items = wrapper.findAll('.option-listbox__item')
    expect(items).toHaveLength(1)
    expect(items[0].text()).toContain('Beta')
  })

  it('shows search input when search prop is true', () => {
    const wrapper = mount(OptionListbox, {
      props: { modelValue: '', options, open: true, search: true },
    })
    expect(wrapper.find('.option-listbox__search-input').exists()).toBe(true)
  })

  it('applies disabled class to disabled options', () => {
    const wrapper = mount(OptionListbox, {
      props: { modelValue: '', options, open: true },
    })
    const disabledItem = wrapper.findAll('.option-listbox__item').find((item) =>
      item.classes().includes('option-listbox__item--disabled')
    )
    expect(disabledItem).toBeTruthy()
  })
})
