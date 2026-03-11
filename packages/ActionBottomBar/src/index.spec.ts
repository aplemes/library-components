import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ActionBottomBar from './index.vue'

describe('ActionBottomBar', () => {
  it('renders', () => {
    const wrapper = mount(ActionBottomBar)
    expect(wrapper.exists()).toBe(true)
  })

  it('has action-bottom-bar class', () => {
    const wrapper = mount(ActionBottomBar)
    expect(wrapper.classes()).toContain('action-bottom-bar')
  })

  it('renders left slot content', () => {
    const wrapper = mount(ActionBottomBar, {
      slots: { left: '<span class="left-content">Cancel</span>' },
    })
    expect(wrapper.find('.left-content').exists()).toBe(true)
    expect(wrapper.find('.action-bottom-bar__left').text()).toBe('Cancel')
  })

  it('renders right slot content', () => {
    const wrapper = mount(ActionBottomBar, {
      slots: { right: '<button class="save-btn">Save</button>' },
    })
    expect(wrapper.find('.save-btn').exists()).toBe(true)
    expect(wrapper.find('.action-bottom-bar__right').text()).toBe('Save')
  })

  it('renders both slots simultaneously', () => {
    const wrapper = mount(ActionBottomBar, {
      slots: {
        left: '<span>Cancel</span>',
        right: '<button>Save</button>',
      },
    })
    expect(wrapper.find('.action-bottom-bar__left').text()).toBe('Cancel')
    expect(wrapper.find('.action-bottom-bar__right').text()).toBe('Save')
  })

  it('does not have shadow class by default', () => {
    const wrapper = mount(ActionBottomBar)
    expect(wrapper.classes()).not.toContain('action-bottom-bar--shadow')
  })

  it('applies shadow class when shadow prop is true', () => {
    const wrapper = mount(ActionBottomBar, { props: { shadow: true } })
    expect(wrapper.classes()).toContain('action-bottom-bar--shadow')
  })

  it('does not apply shadow class when shadow prop is false', () => {
    const wrapper = mount(ActionBottomBar, { props: { shadow: false } })
    expect(wrapper.classes()).not.toContain('action-bottom-bar--shadow')
  })
})
