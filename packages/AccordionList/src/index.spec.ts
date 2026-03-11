import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AccordionList from './index.vue'
import AccordionListItem from '../../AccordionListItem/src/index.vue'

describe('AccordionList', () => {
  it('renders with default slot', () => {
    const wrapper = mount(AccordionList, {
      slots: { default: '<div>content</div>' },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('content')
  })

  it('applies bordered appearance class', () => {
    const wrapper = mount(AccordionList, {
      props: { appearance: 'bordered' },
    })
    expect(wrapper.classes()).toContain('accordion-list--bordered')
  })

  it('expands item on click (single behavior)', async () => {
    const wrapper = mount(AccordionList, {
      props: { behavior: 'single' },
      slots: {
        default: `
          <AccordionListItem id="item1" title="Item 1" content="Content 1" />
          <AccordionListItem id="item2" title="Item 2" content="Content 2" />
        `,
      },
      global: {
        components: { AccordionListItem },
      },
    })

    const buttons = wrapper.findAll('button')
    expect(buttons).toHaveLength(2)

    await buttons[0].trigger('click')
    expect(buttons[0].attributes('aria-expanded')).toBe('true')
  })

  it('closes other items in single behavior', async () => {
    const wrapper = mount(AccordionList, {
      props: { behavior: 'single' },
      slots: {
        default: `
          <AccordionListItem id="item1" title="Item 1" content="Content 1" />
          <AccordionListItem id="item2" title="Item 2" content="Content 2" />
        `,
      },
      global: {
        components: { AccordionListItem },
      },
    })

    const buttons = wrapper.findAll('button')

    await buttons[0].trigger('click')
    expect(buttons[0].attributes('aria-expanded')).toBe('true')

    await buttons[1].trigger('click')
    expect(buttons[0].attributes('aria-expanded')).toBe('false')
    expect(buttons[1].attributes('aria-expanded')).toBe('true')
  })

  it('allows multiple items open in multiple behavior', async () => {
    const wrapper = mount(AccordionList, {
      props: { behavior: 'multiple' },
      slots: {
        default: `
          <AccordionListItem id="item1" title="Item 1" content="Content 1" />
          <AccordionListItem id="item2" title="Item 2" content="Content 2" />
        `,
      },
      global: {
        components: { AccordionListItem },
      },
    })

    const buttons = wrapper.findAll('button')

    await buttons[0].trigger('click')
    await buttons[1].trigger('click')

    expect(buttons[0].attributes('aria-expanded')).toBe('true')
    expect(buttons[1].attributes('aria-expanded')).toBe('true')
  })
})
