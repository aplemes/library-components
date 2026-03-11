import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tile from './index.vue'

describe('Tile', () => {
  it('renders', () => {
    const wrapper = mount(Tile)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mount(Tile, { slots: { default: '<p>Main content</p>' } })
    expect(wrapper.find('.tile__body').html()).toContain('Main content')
  })

  it('renders action slot when provided', () => {
    const wrapper = mount(Tile, { slots: { action: '<button>Action</button>' } })
    expect(wrapper.find('.tile__action').exists()).toBe(true)
    expect(wrapper.find('.tile__action').html()).toContain('Action')
  })

  it('does not render action slot container when not provided', () => {
    const wrapper = mount(Tile)
    expect(wrapper.find('.tile__action').exists()).toBe(false)
  })

  it('renders details slot when provided', () => {
    const wrapper = mount(Tile, { slots: { details: '<p>Details content</p>' } })
    expect(wrapper.find('.tile__content').exists()).toBe(true)
    expect(wrapper.find('.tile__content').html()).toContain('Details content')
  })

  it('does not render details section when not provided', () => {
    const wrapper = mount(Tile)
    expect(wrapper.find('.tile__content').exists()).toBe(false)
  })

  it('applies bordered class when bordered is true', () => {
    const wrapper = mount(Tile, { props: { bordered: true } })
    expect(wrapper.find('.tile').classes()).toContain('tile--bordered')
  })

  it('does not apply bordered class by default', () => {
    const wrapper = mount(Tile)
    expect(wrapper.find('.tile').classes()).not.toContain('tile--bordered')
  })

  it('applies secondary class for secondary appearance', () => {
    const wrapper = mount(Tile, { props: { appearance: 'secondary' } })
    expect(wrapper.find('.tile').classes()).toContain('tile--secondary')
  })

  it('does not apply appearance class for primary', () => {
    const wrapper = mount(Tile, { props: { appearance: 'primary' } })
    expect(wrapper.find('.tile').classes()).not.toContain('tile--primary')
  })
})
