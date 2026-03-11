import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tag from './index.vue'

describe('Tag', () => {
  it('renders the label', () => {
    const wrapper = mount(Tag, { props: { label: 'Vue' } })
    expect(wrapper.find('.tag__label').text()).toBe('Vue')
  })

  it('renders as a span for informative type', () => {
    const wrapper = mount(Tag, { props: { label: 'Info' } })
    expect(wrapper.find('span.tag').exists()).toBe(true)
  })

  it('renders as a button for interactive type', () => {
    const wrapper = mount(Tag, { props: { label: 'Click', type: 'interactive' } })
    expect(wrapper.find('button.tag').exists()).toBe(true)
  })

  it('renders as a label for selectable type', () => {
    const wrapper = mount(Tag, { props: { label: 'Select me', type: 'selectable', id: 'tag-1' } })
    expect(wrapper.find('label.tag').exists()).toBe(true)
  })

  it('renders an input for selectable type', () => {
    const wrapper = mount(Tag, { props: { label: 'Select me', type: 'selectable', id: 'tag-1' } })
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
  })

  it('emits update:modelValue for selectable', async () => {
    const wrapper = mount(Tag, { props: { label: 'Select', type: 'selectable', id: 'tag-1', modelValue: false } })
    await wrapper.find('input').setValue(true)
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('renders a remove button for removable type', () => {
    const wrapper = mount(Tag, { props: { label: 'Remove me', type: 'removable', id: 'tag-r' } })
    expect(wrapper.find('.tag__remove').exists()).toBe(true)
  })

  it('emits remove-tag with id for removable', async () => {
    const wrapper = mount(Tag, { props: { label: 'Remove', type: 'removable', id: 'tag-r' } })
    await wrapper.find('.tag__remove').trigger('click')
    expect(wrapper.emitted('remove-tag')).toBeTruthy()
    expect(wrapper.emitted('remove-tag')![0]).toEqual(['tag-r'])
  })

  it('applies type class', () => {
    const wrapper = mount(Tag, { props: { label: 'Test', type: 'interactive' } })
    expect(wrapper.find('.tag').classes()).toContain('tag--interactive')
  })

  it('does not apply type class for informative', () => {
    const wrapper = mount(Tag, { props: { label: 'Test' } })
    expect(wrapper.find('.tag').classes()).not.toContain('tag--informative')
  })

  it('applies size class for s', () => {
    const wrapper = mount(Tag, { props: { label: 'Small', size: 's' } })
    expect(wrapper.find('.tag').classes()).toContain('tag--s')
  })

  it('shows contextualised number badge', () => {
    const wrapper = mount(Tag, { props: { label: 'Filter', type: 'contextualised', contextualisedNumber: 5 } })
    expect(wrapper.find('.tag__badge').text()).toBe('5')
  })

  it('is disabled when disabled prop is true for interactive', () => {
    const wrapper = mount(Tag, { props: { label: 'Disabled', type: 'interactive', disabled: true } })
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })
})
