import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SidebarShortcuts from './index.vue'

describe('SidebarShortcuts', () => {
  it('renders default slot content', () => {
    const wrapper = mount(SidebarShortcuts, {
      slots: { default: '<li class="shortcut">Home</li>' },
    })
    expect(wrapper.find('.shortcut').exists()).toBe(true)
    expect(wrapper.text()).toContain('Home')
  })

  it('renders nav element with correct role', () => {
    const wrapper = mount(SidebarShortcuts)
    expect(wrapper.find('nav').exists()).toBe(true)
    expect(wrapper.find('nav').attributes('role')).toBe('navigation')
  })

  it('renders ul with menu role', () => {
    const wrapper = mount(SidebarShortcuts)
    const ul = wrapper.find('ul')
    expect(ul.exists()).toBe(true)
    expect(ul.attributes('role')).toBe('menu')
  })

  it('renders section element', () => {
    const wrapper = mount(SidebarShortcuts)
    expect(wrapper.element.tagName.toLowerCase()).toBe('section')
  })

  it('renders multiple shortcut items', () => {
    const wrapper = mount(SidebarShortcuts, {
      slots: {
        default: `
          <li class="item-1">Item 1</li>
          <li class="item-2">Item 2</li>
        `,
      },
    })
    expect(wrapper.find('.item-1').exists()).toBe(true)
    expect(wrapper.find('.item-2').exists()).toBe(true)
  })
})
