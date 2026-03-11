import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import KpiItem from './index.vue'

describe('KpiItem', () => {
  it('renders value', () => {
    const wrapper = mount(KpiItem, {
      props: { value: '1,234' },
    })
    expect(wrapper.text()).toContain('1,234')
  })

  it('renders numeric value', () => {
    const wrapper = mount(KpiItem, {
      props: { value: 42 },
    })
    expect(wrapper.text()).toContain('42')
  })

  it('renders label when provided', () => {
    const wrapper = mount(KpiItem, {
      props: { value: '100', label: 'Revenue' },
    })
    expect(wrapper.text()).toContain('Revenue')
  })

  it('applies medium size class by default', () => {
    const wrapper = mount(KpiItem, {
      props: { value: '100' },
    })
    expect(wrapper.classes()).toContain('kpi-item--m')
  })

  it('applies small size class', () => {
    const wrapper = mount(KpiItem, {
      props: { value: '100', size: 's' },
    })
    expect(wrapper.classes()).toContain('kpi-item--s')
  })

  it('applies large size class', () => {
    const wrapper = mount(KpiItem, {
      props: { value: '100', size: 'l' },
    })
    expect(wrapper.classes()).toContain('kpi-item--l')
  })

  it('applies trend-up class for up trend', () => {
    const wrapper = mount(KpiItem, {
      props: { value: '100', trend: 'up' },
    })
    expect(wrapper.find('.kpi-item__trend--up').exists()).toBe(true)
  })

  it('applies trend-down class for down trend', () => {
    const wrapper = mount(KpiItem, {
      props: { value: '100', trend: 'down' },
    })
    expect(wrapper.find('.kpi-item__trend--down').exists()).toBe(true)
  })

  it('applies trend-neutral class for neutral trend', () => {
    const wrapper = mount(KpiItem, {
      props: { value: '100', trend: 'neutral' },
    })
    expect(wrapper.find('.kpi-item__trend--neutral').exists()).toBe(true)
  })

  it('renders status badge when status is provided', () => {
    const wrapper = mount(KpiItem, {
      props: { value: '100', status: 'success' },
    })
    expect(wrapper.find('.kpi-item__badge').exists()).toBe(true)
    expect(wrapper.find('.kpi-item__badge--success').exists()).toBe(true)
  })

  it('renders information text', () => {
    const wrapper = mount(KpiItem, {
      props: { value: '100', information: '+5% vs last month' },
    })
    expect(wrapper.text()).toContain('+5% vs last month')
  })
})
