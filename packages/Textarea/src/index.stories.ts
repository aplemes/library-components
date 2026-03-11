import type { Meta, StoryObj } from '@storybook/vue3'
import Textarea from './index.vue'

const meta: Meta<typeof Textarea> = {
  title: 'Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A multi-line text input field. Supports placeholder text, min/max length constraints, a configurable number of visible rows, invalid state, disabled and read-only modes. Vertically resizable by default.',
      },
    },
  },
  argTypes: {
    id: {
      description: 'Unique HTML id for the textarea element.',
      control: 'text',
    },
    name: {
      description: 'HTML name attribute for form submission.',
      control: 'text',
    },
    modelValue: {
      description: 'Bound text value. Use with `v-model`.',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder text shown when the textarea has no value.',
      control: 'text',
    },
    rows: {
      description: 'Number of visible text lines. Sets the initial height of the textarea.',
      control: 'number',
    },
    minLength: {
      description: 'Minimum number of characters allowed.',
      control: 'number',
    },
    maxLength: {
      description: 'Maximum number of characters allowed.',
      control: 'number',
    },
    disabled: {
      description: 'Disables the textarea, preventing interaction.',
      control: 'boolean',
    },
    isInvalid: {
      description: 'Applies error styling and sets `aria-invalid`.',
      control: 'boolean',
    },
    readonly: {
      description: 'Makes the textarea read-only; value is visible but cannot be edited.',
      control: 'boolean',
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { id: 'ta-default', placeholder: 'Enter your text...', rows: 4 } }
export const WithValue: Story = { args: { id: 'ta-value', modelValue: 'This is some example text.', rows: 4 } }
export const Invalid: Story = { args: { id: 'ta-invalid', modelValue: 'Invalid content', isInvalid: true, rows: 4 } }
export const Disabled: Story = { args: { id: 'ta-disabled', modelValue: 'Cannot edit', disabled: true, rows: 4 } }
export const Readonly: Story = { args: { id: 'ta-readonly', modelValue: 'Read only content', readonly: true, rows: 4 } }
export const WithMaxLength: Story = { args: { id: 'ta-maxlen', placeholder: 'Max 100 chars', maxLength: 100, rows: 4 } }
