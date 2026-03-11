import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BuiltInMenu from './index.vue'

const items = [
  { id: 'home', label: 'Home' },
  { id: 'profile', label: 'Profile' },
  { id: 'settings', label: 'Settings', disabled: true },
]

describe('BuiltInMenu', () => {
  it('renders', () => {
    const wrapper = mount(BuiltInMenu, { props: { items } })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders all items', () => {
    const wrapper = mount(BuiltInMenu, { props: { items } })
    expect(wrapper.findAll('.built-in-menu__item').length).toBe(3)
  })

  it('renders item labels', () => {
    const wrapper = mount(BuiltInMenu, { props: { items } })
    expect(wrapper.findAll('.built-in-menu__label')[0].text()).toBe('Home')
    expect(wrapper.findAll('.built-in-menu__label')[1].text()).toBe('Profile')
  })

  it('applies selected class to active item', () => {
    const wrapper = mount(BuiltInMenu, { props: { items, modelValue: 'home' } })
    expect(wrapper.findAll('.built-in-menu__item')[0].classes()).toContain('built-in-menu__item--selected')
  })

  it('emits update:modelValue on item click', async () => {
    const wrapper = mount(BuiltInMenu, { props: { items } })
    await wrapper.findAll('.built-in-menu__button')[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['home'])
  })

  it('does not emit for disabled item', async () => {
    const wrapper = mount(BuiltInMenu, { props: { items } })
    await wrapper.findAll('.built-in-menu__button')[2].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('applies outlined class when outlined is true', () => {
    const wrapper = mount(BuiltInMenu, { props: { items, outlined: true } })
    expect(wrapper.find('.built-in-menu').classes()).toContain('built-in-menu--outlined')
  })
})
