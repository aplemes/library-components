import type { Meta, StoryObj } from '@storybook/vue3'
import Textarea from './index.vue'

const meta: Meta<typeof Textarea> = {
  title: 'Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    readonly: { control: 'boolean' },
    rows: { control: 'number' },
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
