import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TileClickable from './index.vue'

describe('TileClickable', () => {
  it('renders as button by default', () => {
    const wrapper = mount(TileClickable)
    expect(wrapper.element.tagName.toLowerCase()).toBe('button')
  })

  it('renders as anchor when href is provided', () => {
    const wrapper = mount(TileClickable, { props: { href: 'https://example.com' } })
    expect(wrapper.element.tagName.toLowerCase()).toBe('a')
    expect(wrapper.attributes('href')).toBe('https://example.com')
  })

  it('emits action event on button click', async () => {
    const wrapper = mount(TileClickable)
    await wrapper.trigger('click')
    expect(wrapper.emitted('action')).toBeTruthy()
  })

  it('renders default slot content', () => {
    const wrapper = mount(TileClickable, { slots: { default: '<p>Clickable content</p>' } })
    expect(wrapper.find('.tile-clickable__body').html()).toContain('Clickable content')
  })

  it('renders icon slot on the right by default', () => {
    const wrapper = mount(TileClickable, { slots: { icon: '<span>→</span>' } })
    const icons = wrapper.findAll('.tile-clickable__icon')
    expect(icons.length).toBe(1)
  })

  it('applies bordered class when bordered is true', () => {
    const wrapper = mount(TileClickable, { props: { bordered: true } })
    expect(wrapper.classes()).toContain('tile-clickable--bordered')
  })

  it('applies icon-left class when iconPosition is left', () => {
    const wrapper = mount(TileClickable, { props: { iconPosition: 'left' } })
    expect(wrapper.classes()).toContain('tile-clickable--icon-left')
  })

  it('applies target attribute when provided', () => {
    const wrapper = mount(TileClickable, { props: { href: 'https://example.com', target: '_blank' } })
    expect(wrapper.attributes('target')).toBe('_blank')
  })
})
