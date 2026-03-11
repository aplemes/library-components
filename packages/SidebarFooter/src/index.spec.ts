import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import SidebarFooter from './index.vue'

describe('SidebarFooter', () => {
  it('renders default slot content', () => {
    const wrapper = mount(SidebarFooter, {
      slots: { default: '<span>User Profile</span>' },
      global: {
        provide: { sidebarExpanded: ref(true) },
      },
    })
    expect(wrapper.text()).toContain('User Profile')
  })

  it('applies expanded class when expanded', () => {
    const wrapper = mount(SidebarFooter, {
      global: {
        provide: { sidebarExpanded: ref(true) },
      },
    })
    expect(wrapper.classes()).toContain('sidebar-footer--expanded')
  })

  it('applies collapsed class when not expanded', () => {
    const wrapper = mount(SidebarFooter, {
      global: {
        provide: { sidebarExpanded: ref(false) },
      },
    })
    expect(wrapper.classes()).toContain('sidebar-footer--collapsed')
  })

  it('renders footer element', () => {
    const wrapper = mount(SidebarFooter, {
      global: {
        provide: { sidebarExpanded: ref(true) },
      },
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('footer')
  })
})
