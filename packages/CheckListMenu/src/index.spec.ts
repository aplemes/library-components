import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CheckListMenu from './index.vue'

const items = [
  { id: 'item1', label: 'Item 1' },
  { id: 'item2', label: 'Item 2' },
  { id: 'item3', label: 'Item 3', disabled: true },
]

describe('CheckListMenu', () => {
  it('renders', () => {
    const wrapper = mount(CheckListMenu, { props: { items } })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders all items', () => {
    const wrapper = mount(CheckListMenu, { props: { items } })
    expect(wrapper.findAll('.check-list-menu__item').length).toBe(3)
  })

  it('renders item labels', () => {
    const wrapper = mount(CheckListMenu, { props: { items } })
    expect(wrapper.findAll('.check-list-menu__label')[0].text()).toBe('Item 1')
  })

  it('marks selected items with checked class', () => {
    const wrapper = mount(CheckListMenu, { props: { items, modelValue: ['item1'] } })
    expect(wrapper.findAll('.check-list-menu__item')[0].classes()).toContain('check-list-menu__item--checked')
    expect(wrapper.findAll('.check-list-menu__item')[1].classes()).not.toContain('check-list-menu__item--checked')
  })

  it('emits update:modelValue when clicking an item', async () => {
    const wrapper = mount(CheckListMenu, { props: { items, modelValue: [] } })
    await wrapper.findAll('.check-list-menu__button')[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([['item1']])
  })

  it('does not emit for disabled item', async () => {
    const wrapper = mount(CheckListMenu, { props: { items, modelValue: [] } })
    await wrapper.findAll('.check-list-menu__button')[2].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('applies outlined class when outlined is true', () => {
    const wrapper = mount(CheckListMenu, { props: { items, outlined: true } })
    expect(wrapper.find('.check-list-menu').classes()).toContain('check-list-menu--outlined')
  })
})
