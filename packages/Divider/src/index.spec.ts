import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Divider from './index.vue'

describe('Divider', () => {
  it('renders with divider class', () => {
    const wrapper = mount(Divider)
    expect(wrapper.find('.divider').exists()).toBe(true)
  })

  it('applies horizontal class by default', () => {
    const wrapper = mount(Divider)
    expect(wrapper.find('.divider__line').classes()).toContain('divider__line--horizontal')
  })

  it('applies vertical class when orientation is vertical', () => {
    const wrapper = mount(Divider, { props: { orientation: 'vertical' } })
    expect(wrapper.find('.divider__line').classes()).toContain('divider__line--vertical')
  })

  it('does not apply appearance class for primary (default)', () => {
    const wrapper = mount(Divider)
    expect(wrapper.find('.divider__line').classes()).not.toContain('divider__line--primary')
  })

  it('applies secondary appearance class', () => {
    const wrapper = mount(Divider, { props: { appearance: 'secondary' } })
    expect(wrapper.find('.divider__line').classes()).toContain('divider__line--secondary')
  })

  it('does not apply size class for default size s', () => {
    const wrapper = mount(Divider)
    expect(wrapper.find('.divider__line').classes()).not.toContain('divider__line--s')
  })

  it('applies size class for m', () => {
    const wrapper = mount(Divider, { props: { size: 'm' } })
    expect(wrapper.find('.divider__line').classes()).toContain('divider__line--m')
  })

  it('renders slot content', () => {
    const wrapper = mount(Divider, { slots: { default: '<span>OR</span>' } })
    expect(wrapper.text()).toContain('OR')
  })
})
