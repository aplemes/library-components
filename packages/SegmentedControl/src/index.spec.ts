import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SegmentedControl from './index.vue'

const segments = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'inactive', label: 'Inactive', disabled: true },
]

describe('SegmentedControl', () => {
  it('renders', () => {
    const wrapper = mount(SegmentedControl, { props: { segments } })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders all segments', () => {
    const wrapper = mount(SegmentedControl, { props: { segments } })
    expect(wrapper.findAll('.segmented-control__segment').length).toBe(3)
  })

  it('renders segment labels', () => {
    const wrapper = mount(SegmentedControl, { props: { segments } })
    const btns = wrapper.findAll('.segmented-control__segment')
    expect(btns[0].text()).toBe('All')
    expect(btns[1].text()).toBe('Active')
  })

  it('first segment is selected by default (index mode)', () => {
    const wrapper = mount(SegmentedControl, { props: { segments, modelValue: 0 } })
    expect(wrapper.findAll('.segmented-control__segment')[0].classes()).toContain('segmented-control__segment--selected')
  })

  it('emits update:modelValue when clicking a segment', async () => {
    const wrapper = mount(SegmentedControl, { props: { segments, modelValue: 0 } })
    await wrapper.findAll('.segmented-control__segment')[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([1])
  })

  it('does not emit when clicking a disabled segment', async () => {
    const wrapper = mount(SegmentedControl, { props: { segments, modelValue: 0 } })
    await wrapper.findAll('.segmented-control__segment')[2].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('applies disabled class to disabled segment', () => {
    const wrapper = mount(SegmentedControl, { props: { segments } })
    expect(wrapper.findAll('.segmented-control__segment')[2].classes()).toContain('segmented-control__segment--disabled')
  })

  it('applies full class when full is true', () => {
    const wrapper = mount(SegmentedControl, { props: { segments, full: true } })
    expect(wrapper.find('.segmented-control').classes()).toContain('segmented-control--full')
  })

  it('applies size class for m', () => {
    const wrapper = mount(SegmentedControl, { props: { segments, size: 'm' } })
    expect(wrapper.find('.segmented-control').classes()).toContain('segmented-control--m')
  })
})
