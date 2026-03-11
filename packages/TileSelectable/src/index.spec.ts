import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TileSelectable from './index.vue'

describe('TileSelectable', () => {
  it('renders', () => {
    const wrapper = mount(TileSelectable, { props: { modelValue: false } })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mount(TileSelectable, {
      props: { modelValue: false },
      slots: { default: '<p>Selectable content</p>' }
    })
    expect(wrapper.find('.tile-selectable__body').html()).toContain('Selectable content')
  })

  it('renders checkbox input by default', () => {
    const wrapper = mount(TileSelectable, { props: { modelValue: false } })
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
  })

  it('renders radio input when inputType is radio', () => {
    const wrapper = mount(TileSelectable, { props: { modelValue: false, inputType: 'radio' } })
    expect(wrapper.find('input[type="radio"]').exists()).toBe(true)
  })

  it('reflects modelValue as checked', () => {
    const wrapper = mount(TileSelectable, { props: { modelValue: true } })
    expect((wrapper.find('input[type="checkbox"]').element as HTMLInputElement).checked).toBe(true)
  })

  it('emits update:modelValue on checkbox change', async () => {
    const wrapper = mount(TileSelectable, { props: { modelValue: false } })
    await wrapper.find('input[type="checkbox"]').setValue(true)
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('applies selected class when modelValue is true', () => {
    const wrapper = mount(TileSelectable, { props: { modelValue: true } })
    expect(wrapper.find('.tile-selectable').classes()).toContain('tile-selectable--selected')
  })

  it('applies bordered class when bordered is true', () => {
    const wrapper = mount(TileSelectable, { props: { modelValue: false, bordered: true } })
    expect(wrapper.find('.tile-selectable').classes()).toContain('tile-selectable--bordered')
  })

  it('renders details slot when provided', () => {
    const wrapper = mount(TileSelectable, {
      props: { modelValue: false },
      slots: { details: '<p>Details</p>' }
    })
    expect(wrapper.find('.tile-selectable__content').html()).toContain('Details')
  })

  it('hides input when hideInput is true', () => {
    const wrapper = mount(TileSelectable, { props: { modelValue: false, hideInput: true } })
    expect(wrapper.find('input').exists()).toBe(false)
  })
})
