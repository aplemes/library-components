import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FileUploader from './index.vue'

function makeFile(name = 'test.pdf') {
  return new File(['content'], name, { type: 'application/pdf' })
}

describe('FileUploader', () => {
  it('renders the upload button', () => {
    const wrapper = mount(FileUploader, {
      props: { modelValue: [] },
    })
    expect(wrapper.find('.file-uploader__btn').exists()).toBe(true)
  })

  it('shows the upload button label', () => {
    const wrapper = mount(FileUploader, {
      props: { modelValue: [], uploadButtonLabel: 'Select Files' },
    })
    expect(wrapper.text()).toContain('Select Files')
  })

  it('shows file list when showFilesList is true and files exist', () => {
    const file = makeFile('doc.pdf')
    const wrapper = mount(FileUploader, {
      props: { modelValue: [file], showFilesList: true },
    })
    expect(wrapper.find('.file-uploader__list').exists()).toBe(true)
    expect(wrapper.text()).toContain('doc.pdf')
  })

  it('does not show file list when showFilesList is false', () => {
    const file = makeFile('doc.pdf')
    const wrapper = mount(FileUploader, {
      props: { modelValue: [file], showFilesList: false },
    })
    expect(wrapper.find('.file-uploader__list').exists()).toBe(false)
  })

  it('does not show file list when no files', () => {
    const wrapper = mount(FileUploader, {
      props: { modelValue: [], showFilesList: true },
    })
    expect(wrapper.find('.file-uploader__list').exists()).toBe(false)
  })

  it('renders error message when provided', () => {
    const wrapper = mount(FileUploader, {
      props: { modelValue: [], errorMessage: 'Invalid file type' },
    })
    expect(wrapper.text()).toContain('Invalid file type')
  })

  it('renders information text', () => {
    const wrapper = mount(FileUploader, {
      props: { modelValue: [], information: 'Max file size: 5MB' },
    })
    expect(wrapper.text()).toContain('Max file size: 5MB')
  })

  it('applies disabled class when disabled', () => {
    const wrapper = mount(FileUploader, {
      props: { modelValue: [], disabled: true },
    })
    expect(wrapper.find('.file-uploader__drop-zone--disabled').exists()).toBe(true)
  })

  it('renders draggable class when hasDragDrop is true', () => {
    const wrapper = mount(FileUploader, {
      props: { modelValue: [], hasDragDrop: true },
    })
    expect(wrapper.classes()).toContain('file-uploader--draggable')
  })
})
