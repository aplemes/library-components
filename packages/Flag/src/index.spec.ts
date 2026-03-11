import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Flag from './index.vue'

describe('Flag', () => {
  it('renders the label', () => {
    const wrapper = mount(Flag, { props: { label: 'Sale' } })
    expect(wrapper.find('.flag__label').text()).toBe('Sale')
  })

  it('has flag class', () => {
    const wrapper = mount(Flag, { props: { label: 'New' } })
    expect(wrapper.find('.flag').exists()).toBe(true)
  })

  it('does not apply appearance class for standard', () => {
    const wrapper = mount(Flag, { props: { label: 'New', appearance: 'standard' } })
    expect(wrapper.find('.flag').classes()).not.toContain('flag--standard')
  })

  it('applies danger appearance class', () => {
    const wrapper = mount(Flag, { props: { label: 'Error', appearance: 'danger' } })
    expect(wrapper.find('.flag').classes()).toContain('flag--danger')
  })

  it('applies accent appearance class', () => {
    const wrapper = mount(Flag, { props: { label: 'New', appearance: 'accent' } })
    expect(wrapper.find('.flag').classes()).toContain('flag--accent')
  })

  it('applies inverse appearance class', () => {
    const wrapper = mount(Flag, { props: { label: 'Promo', appearance: 'inverse' } })
    expect(wrapper.find('.flag').classes()).toContain('flag--inverse')
  })
})
