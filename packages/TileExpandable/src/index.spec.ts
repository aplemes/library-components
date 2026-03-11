import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TileExpandable from './index.vue'

describe('TileExpandable', () => {
  it('renders', () => {
    const wrapper = mount(TileExpandable)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders default slot content', () => {
    const wrapper = mount(TileExpandable, { slots: { default: '<p>Header content</p>' } })
    expect(wrapper.find('.tile-expandable__body').html()).toContain('Header content')
  })

  it('details slot is hidden initially', () => {
    const wrapper = mount(TileExpandable, {
      attachTo: document.body,
      slots: { details: '<p>Details content</p>' }
    })
    expect(wrapper.find('.tile-expandable__content').isVisible()).toBe(false)
    wrapper.unmount()
  })

  it('details slot becomes visible after clicking trigger', async () => {
    const wrapper = mount(TileExpandable, {
      attachTo: document.body,
      slots: { details: '<p>Details content</p>' }
    })
    await wrapper.find('.tile-expandable__trigger').trigger('click')
    expect(wrapper.find('.tile-expandable__content').isVisible()).toBe(true)
    wrapper.unmount()
  })

  it('renders trigger button with label text', () => {
    const wrapper = mount(TileExpandable, { props: { label: 'Expand me' } })
    expect(wrapper.find('.tile-expandable__trigger').text()).toContain('Expand me')
  })

  it('trigger prop overrides label in trigger button', () => {
    const wrapper = mount(TileExpandable, { props: { trigger: 'Custom trigger', label: 'Label' } })
    expect(wrapper.find('.tile-expandable__trigger').text()).toContain('Custom trigger')
  })

  it('applies bordered class when bordered is true', () => {
    const wrapper = mount(TileExpandable, { props: { bordered: true } })
    expect(wrapper.find('.tile-expandable').classes()).toContain('tile-expandable--bordered')
  })

  it('toggles open state on second click', async () => {
    const wrapper = mount(TileExpandable, {
      attachTo: document.body,
      slots: { details: '<p>Details</p>' }
    })
    await wrapper.find('.tile-expandable__trigger').trigger('click')
    expect(wrapper.find('.tile-expandable__content').isVisible()).toBe(true)
    await wrapper.find('.tile-expandable__trigger').trigger('click')
    expect(wrapper.find('.tile-expandable__content').isVisible()).toBe(false)
    wrapper.unmount()
  })
})
