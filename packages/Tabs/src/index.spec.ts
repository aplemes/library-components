import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tabs from './index.vue'

const sampleTabs = [
  { id: 'tab1', label: 'Tab 1' },
  { id: 'tab2', label: 'Tab 2' },
  { id: 'tab3', label: 'Tab 3', disabled: true },
]

describe('Tabs', () => {
  it('renders', () => {
    const wrapper = mount(Tabs, { props: { tabs: sampleTabs } })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders all tabs', () => {
    const wrapper = mount(Tabs, { props: { tabs: sampleTabs } })
    expect(wrapper.findAll('.tabs__tab').length).toBe(3)
  })

  it('renders tab labels', () => {
    const wrapper = mount(Tabs, { props: { tabs: sampleTabs } })
    const tabs = wrapper.findAll('.tabs__tab')
    expect(tabs[0].text()).toBe('Tab 1')
    expect(tabs[1].text()).toBe('Tab 2')
  })

  it('first tab is selected by default (index mode)', () => {
    const wrapper = mount(Tabs, { props: { tabs: sampleTabs, modelValue: 0 } })
    expect(wrapper.findAll('.tabs__tab')[0].classes()).toContain('tabs__tab--selected')
  })

  it('emits update:modelValue when clicking a tab (index mode)', async () => {
    const wrapper = mount(Tabs, { props: { tabs: sampleTabs, modelValue: 0 } })
    await wrapper.findAll('.tabs__tab')[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([1])
  })

  it('does not emit when clicking a disabled tab', async () => {
    const wrapper = mount(Tabs, { props: { tabs: sampleTabs, modelValue: 0 } })
    await wrapper.findAll('.tabs__tab')[2].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('applies disabled class to disabled tab', () => {
    const wrapper = mount(Tabs, { props: { tabs: sampleTabs } })
    expect(wrapper.findAll('.tabs__tab')[2].classes()).toContain('tabs__tab--disabled')
  })

  it('shows divider when divider is true', () => {
    const wrapper = mount(Tabs, { props: { tabs: sampleTabs, divider: true } })
    expect(wrapper.find('.tabs__divider').exists()).toBe(true)
  })

  it('does not show divider by default', () => {
    const wrapper = mount(Tabs, { props: { tabs: sampleTabs } })
    expect(wrapper.find('.tabs__divider').exists()).toBe(false)
  })

  it('applies centered class when centered is true', () => {
    const wrapper = mount(Tabs, { props: { tabs: sampleTabs, centered: true } })
    expect(wrapper.find('.tabs').classes()).toContain('tabs--centered')
  })
})
