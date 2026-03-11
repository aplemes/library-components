import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import SidebarHeader from './index.vue'

describe('SidebarHeader', () => {
  it('renders default slot content', () => {
    const wrapper = mount(SidebarHeader, {
      slots: { default: '<span>Logo</span>' },
      global: {
        provide: { sidebarExpanded: ref(true) },
      },
    })
    expect(wrapper.text()).toContain('Logo')
  })

  it('applies expanded class when expanded', () => {
    const wrapper = mount(SidebarHeader, {
      global: {
        provide: { sidebarExpanded: ref(true) },
      },
    })
    expect(wrapper.classes()).toContain('sidebar-header--expanded')
  })

  it('applies collapsed class when not expanded', () => {
    const wrapper = mount(SidebarHeader, {
      global: {
        provide: { sidebarExpanded: ref(false) },
      },
    })
    expect(wrapper.classes()).toContain('sidebar-header--collapsed')
  })

  it('renders header element', () => {
    const wrapper = mount(SidebarHeader, {
      global: {
        provide: { sidebarExpanded: ref(true) },
      },
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('header')
  })
})
