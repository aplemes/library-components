import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import AccordionListItem from './index.vue'

function mountWithProvide(props = {}, openIds: string[] = []) {
  const openIdsRef = ref(openIds)
  const toggle = (id: string) => {
    const idx = openIdsRef.value.indexOf(id)
    if (idx >= 0) {
      openIdsRef.value.splice(idx, 1)
    } else {
      openIdsRef.value.push(id)
    }
  }
  return mount(AccordionListItem, {
    props: { id: 'test', title: 'Test Title', ...props },
    global: {
      provide: {
        accordionOpenIds: openIdsRef,
        accordionToggle: toggle,
      },
    },
  })
}

describe('AccordionListItem', () => {
  it('renders title', () => {
    const wrapper = mountWithProvide({ title: 'My Title' })
    expect(wrapper.text()).toContain('My Title')
  })

  it('renders subtitle when provided', () => {
    const wrapper = mountWithProvide({ title: 'Title', subtitle: 'Sub text' })
    expect(wrapper.text()).toContain('Sub text')
  })

  it('renders content prop as fallback', () => {
    const wrapper = mountWithProvide({ title: 'Title', content: 'Fallback content' })
    expect(wrapper.text()).toContain('Fallback content')
  })

  it('renders slot content', () => {
    const wrapper = mount(AccordionListItem, {
      props: { id: 'test', title: 'Title' },
      slots: { default: '<p>Custom slot content</p>' },
      global: {
        provide: {
          accordionOpenIds: ref([]),
          accordionToggle: () => {},
        },
      },
    })
    expect(wrapper.text()).toContain('Custom slot content')
  })

  it('shows as collapsed when not in openIds', () => {
    const wrapper = mountWithProvide({ id: 'item1', title: 'Title' }, [])
    const button = wrapper.find('button')
    expect(button.attributes('aria-expanded')).toBe('false')
  })

  it('shows as expanded when in openIds', () => {
    const wrapper = mountWithProvide({ id: 'item1', title: 'Title' }, ['item1'])
    const button = wrapper.find('button')
    expect(button.attributes('aria-expanded')).toBe('true')
  })

  it('calls toggle when button is clicked', async () => {
    const openIdsRef = ref<string[]>([])
    let toggled = ''
    const wrapper = mount(AccordionListItem, {
      props: { id: 'test', title: 'Title' },
      global: {
        provide: {
          accordionOpenIds: openIdsRef,
          accordionToggle: (id: string) => { toggled = id },
        },
      },
    })
    await wrapper.find('button').trigger('click')
    expect(toggled).toBe('test')
  })
})
