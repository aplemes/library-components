import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import FileUploader from './index.vue'

const meta: Meta<typeof FileUploader> = {
  title: 'Components/FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'FileUploader allows users to upload one or multiple files by selecting them manually. It provides real-time feedback on file status including validation errors.',
      },
    },
  },
  argTypes: {
    modelValue: {
      description: 'Array of currently selected File objects.',
    },
    accept: {
      description: 'Accepted file types (e.g., ".pdf,.png" or "image/*").',
      control: 'text',
    },
    multiple: {
      description: 'Enables selecting multiple files at once.',
      control: 'boolean',
    },
    disabled: {
      description: 'Disables the entire file uploader.',
      control: 'boolean',
    },
    title: {
      description: 'Main title shown in drag-and-drop mode.',
      control: 'text',
    },
    subtitle: {
      description: 'Subtitle shown in drag-and-drop mode.',
      control: 'text',
    },
    uploadButtonLabel: {
      description: 'Label for the upload button.',
      control: 'text',
    },
    deleteButtonLabel: {
      description: 'Label for the delete button in file items.',
      control: 'text',
    },
    hasDragDrop: {
      description: 'Enables drag-and-drop functionality.',
      control: 'boolean',
    },
    showFilesList: {
      description: 'Controls display of the uploaded files list.',
      control: 'boolean',
    },
    maxSize: {
      description: 'Maximum allowed file size in bytes.',
      control: 'number',
    },
    information: {
      description: 'Informational text displayed below the upload area.',
      control: 'text',
    },
    errorMessage: {
      description: 'Error message displayed below the upload area.',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { FileUploader },
    setup() {
      const files = ref<File[]>([])
      return { files }
    },
    template: `<FileUploader v-model="files" />`,
  }),
}

export const WithDragDrop: Story = {
  render: () => ({
    components: { FileUploader },
    setup() {
      const files = ref<File[]>([])
      return { files }
    },
    template: `
      <FileUploader
        v-model="files"
        has-drag-drop
        title="Drag & drop your files here"
        subtitle="or"
        upload-button-label="Browse Files"
        multiple
      />
    `,
  }),
}

export const WithInformation: Story = {
  render: () => ({
    components: { FileUploader },
    setup() {
      const files = ref<File[]>([])
      return { files }
    },
    template: `
      <FileUploader
        v-model="files"
        information="Accepted formats: PDF, PNG, JPG. Max size: 5MB"
        multiple
      />
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { FileUploader },
    setup() {
      return { files: ref<File[]>([]) }
    },
    template: `<FileUploader v-model="files" disabled />`,
  }),
}
