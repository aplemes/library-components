import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NumberBadge from './index.vue'

describe('NumberBadge', () => {
  it('renders the label number', () => {
    const wrapper = mount(NumberBadge, { props: { label: 5 } })
    expect(wrapper.find('.number-badge').text()).toBe('5')
  })

  it('has number-badge class', () => {
    const wrapper = mount(NumberBadge, { props: { label: 3 } })
    expect(wrapper.find('.number-badge').exists()).toBe(true)
  })

  it('does not apply appearance class for standard', () => {
    const wrapper = mount(NumberBadge, { props: { label: 1 } })
    expect(wrapper.find('.number-badge').classes()).not.toContain('number-badge--standard')
  })

  it('applies danger appearance class', () => {
    const wrapper = mount(NumberBadge, { props: { label: 9, appearance: 'danger' } })
    expect(wrapper.find('.number-badge').classes()).toContain('number-badge--danger')
  })

  it('applies accent appearance class', () => {
    const wrapper = mount(NumberBadge, { props: { label: 2, appearance: 'accent' } })
    expect(wrapper.find('.number-badge').classes()).toContain('number-badge--accent')
  })

  it('does not apply size class for default size s', () => {
    const wrapper = mount(NumberBadge, { props: { label: 1 } })
    expect(wrapper.find('.number-badge').classes()).not.toContain('number-badge--s')
  })

  it('applies size class for m', () => {
    const wrapper = mount(NumberBadge, { props: { label: 99, size: 'm' } })
    expect(wrapper.find('.number-badge').classes()).toContain('number-badge--m')
  })
})
