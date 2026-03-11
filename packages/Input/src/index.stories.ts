import type { Meta, StoryObj } from '@storybook/vue3'
import Input from './index.vue'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'date'],
    },
    size: {
      control: 'select',
      options: ['s', 'm'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    id: 'default-input',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Name',
    modelValue: 'John Doe',
    id: 'with-value',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    modelValue: 'invalid-email',
    error: 'Please enter a valid email address',
    id: 'with-error',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    modelValue: 'Cannot edit this',
    disabled: true,
    id: 'disabled-input',
  },
}

export const Readonly: Story = {
  args: {
    label: 'Read Only',
    modelValue: 'Read only value',
    readonly: true,
    id: 'readonly-input',
  },
}

export const Small: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size...',
    size: 's',
    id: 'small-input',
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password...',
    type: 'password',
    id: 'password-input',
  },
}

export const Email: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
    id: 'email-input',
  },
}

export const WithPrefix: Story = {
  args: {
    label: 'Website',
    placeholder: 'example.com',
    prefix: 'https://',
    id: 'prefix-input',
  },
}

export const WithSuffix: Story = {
  args: {
    label: 'Domain',
    placeholder: 'mysite',
    suffix: '.com',
    id: 'suffix-input',
  },
}
