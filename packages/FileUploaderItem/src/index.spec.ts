import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FileUploaderItem from './index.vue'

function makeFile(name = 'test.pdf', size = 1024) {
  return new File(['content'], name, { type: 'application/pdf' })
}

describe('FileUploaderItem', () => {
  it('renders file name', () => {
    const file = makeFile('document.pdf')
    const wrapper = mount(FileUploaderItem, {
      props: { file },
    })
    expect(wrapper.text()).toContain('document.pdf')
  })

  it('renders delete button', () => {
    const wrapper = mount(FileUploaderItem, {
      props: { file: makeFile() },
    })
    expect(wrapper.find('.file-uploader-item__delete-btn').exists()).toBe(true)
  })

  it('emits delete when delete button is clicked', async () => {
    const wrapper = mount(FileUploaderItem, {
      props: { file: makeFile() },
    })
    await wrapper.find('.file-uploader-item__delete-btn').trigger('click')
    expect(wrapper.emitted('delete')).toHaveLength(1)
  })

  it('applies error class when valid is false', () => {
    const wrapper = mount(FileUploaderItem, {
      props: { file: makeFile(), valid: false },
    })
    expect(wrapper.classes()).toContain('file-uploader-item--error')
  })

  it('does not apply error class when valid is true', () => {
    const wrapper = mount(FileUploaderItem, {
      props: { file: makeFile(), valid: true },
    })
    expect(wrapper.classes()).not.toContain('file-uploader-item--error')
  })

  it('renders error message when valid is false', () => {
    const wrapper = mount(FileUploaderItem, {
      props: { file: makeFile(), valid: false, errorMessage: 'File too large' },
    })
    expect(wrapper.text()).toContain('File too large')
  })

  it('does not render error message when valid is true', () => {
    const wrapper = mount(FileUploaderItem, {
      props: { file: makeFile(), valid: true, errorMessage: 'File too large' },
    })
    expect(wrapper.find('.file-uploader-item__error').exists()).toBe(false)
  })

  it('renders information text', () => {
    const wrapper = mount(FileUploaderItem, {
      props: { file: makeFile(), information: 'Max 5MB' },
    })
    expect(wrapper.text()).toContain('Max 5MB')
  })

  it('renders name slot', () => {
    const wrapper = mount(FileUploaderItem, {
      props: { file: makeFile() },
      slots: { name: '<span class="custom-name">Custom Name</span>' },
    })
    expect(wrapper.find('.custom-name').exists()).toBe(true)
  })
})
