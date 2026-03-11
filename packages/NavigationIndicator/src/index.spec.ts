import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavigationIndicator from './index.vue'

describe('NavigationIndicator', () => {
  it('renders', () => {
    const wrapper = mount(NavigationIndicator, { props: { steps: 4, modelValue: 0 } })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders correct number of dots', () => {
    const wrapper = mount(NavigationIndicator, { props: { steps: 5, modelValue: 0 } })
    expect(wrapper.findAll('.navigation-indicator__dot').length).toBe(5)
  })

  it('marks active dot', () => {
    const wrapper = mount(NavigationIndicator, { props: { steps: 4, modelValue: 2 } })
    expect(wrapper.findAll('.navigation-indicator__dot')[2].classes()).toContain('navigation-indicator__dot--active')
  })

  it('emits update:modelValue when clicking a dot', async () => {
    const wrapper = mount(NavigationIndicator, { props: { steps: 4, modelValue: 0 } })
    await wrapper.findAll('.navigation-indicator__dot')[2].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([2])
  })

  it('renders prev/next arrows when action is true', () => {
    const wrapper = mount(NavigationIndicator, { props: { steps: 4, modelValue: 1, action: true } })
    expect(wrapper.find('.navigation-indicator__arrow--prev').exists()).toBe(true)
    expect(wrapper.find('.navigation-indicator__arrow--next').exists()).toBe(true)
  })

  it('does not render arrows when action is false', () => {
    const wrapper = mount(NavigationIndicator, { props: { steps: 4, modelValue: 1, action: false } })
    expect(wrapper.find('.navigation-indicator__arrow--prev').exists()).toBe(false)
  })

  it('emits action with previous when clicking prev arrow', async () => {
    const wrapper = mount(NavigationIndicator, { props: { steps: 4, modelValue: 2, action: true } })
    await wrapper.find('.navigation-indicator__arrow--prev').trigger('click')
    expect(wrapper.emitted('action')).toBeTruthy()
    expect(wrapper.emitted('action')![0]).toEqual(['previous'])
  })

  it('emits action with next when clicking next arrow', async () => {
    const wrapper = mount(NavigationIndicator, { props: { steps: 4, modelValue: 1, action: true } })
    await wrapper.find('.navigation-indicator__arrow--next').trigger('click')
    expect(wrapper.emitted('action')).toBeTruthy()
    expect(wrapper.emitted('action')![0]).toEqual(['next'])
  })

  it('renders player section when player is true', () => {
    const wrapper = mount(NavigationIndicator, { props: { steps: 4, modelValue: 0, player: true } })
    expect(wrapper.find('.navigation-indicator__player').exists()).toBe(true)
  })
})
