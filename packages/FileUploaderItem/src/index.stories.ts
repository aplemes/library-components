import type { Meta, StoryObj } from '@storybook/vue3'
import FileUploaderItem from './index.vue'

const sampleFile = new File(['content'], 'document.pdf', { type: 'application/pdf' })

const meta: Meta<typeof FileUploaderItem> = {
  title: 'Components/FileUploaderItem',
  component: FileUploaderItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'FileUploaderItem displays an individual uploaded file with its name, optional information, status indicator, and a delete button.',
      },
    },
  },
  argTypes: {
    file: {
      description: 'The File object to display.',
    },
    valid: {
      description: 'Indicates if the file passes validation rules.',
      control: 'boolean',
    },
    errorMessage: {
      description: 'Error message displayed when the file is invalid.',
      control: 'text',
    },
    deleteButtonLabel: {
      description: 'Label for the delete action button.',
      control: 'text',
    },
    information: {
      description: 'Optional informational text displayed below the file name.',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    file: sampleFile,
    valid: true,
    deleteButtonLabel: 'Delete',
  },
}

export const Invalid: Story = {
  args: {
    file: sampleFile,
    valid: false,
    errorMessage: 'File size exceeds the maximum allowed.',
    deleteButtonLabel: 'Delete',
  },
}

export const WithInformation: Story = {
  args: {
    file: sampleFile,
    valid: true,
    information: 'Uploaded successfully',
    deleteButtonLabel: 'Delete',
  },
}
