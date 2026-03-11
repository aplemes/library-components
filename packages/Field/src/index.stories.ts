import type { Meta, StoryObj } from '@storybook/vue3'
import Field from './index.vue'

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A field wrapper that provides a label, optional help text, and validation message for form inputs.',
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    requirementText: { control: 'text' },
    helpText: { control: 'text' },
    helpId: { control: 'text' },
    isValid: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    messageId: { control: 'text' },
    message: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'default-input',
    label: 'Email address',
  },
  render: (args) => ({
    components: { Field },
    setup() {
      return { args }
    },
    template: `<Field v-bind="args"><input :id="args.id" type="email" placeholder="you@example.com" class="border rounded px-3 py-2 w-full" /></Field>`,
  }),
}

export const WithHelpText: Story = {
  args: {
    id: 'help-input',
    label: 'Username',
    helpId: 'username-help',
    helpText: 'Must be unique. Letters and numbers only.',
  },
  render: (args) => ({
    components: { Field },
    setup() {
      return { args }
    },
    template: `<Field v-bind="args"><input :id="args.id" type="text" class="border rounded px-3 py-2 w-full" /></Field>`,
  }),
}

export const Invalid: Story = {
  args: {
    id: 'invalid-input',
    label: 'Password',
    isInvalid: true,
    message: 'Password must be at least 8 characters.',
  },
  render: (args) => ({
    components: { Field },
    setup() {
      return { args }
    },
    template: `<Field v-bind="args"><input :id="args.id" type="password" class="border border-red-500 rounded px-3 py-2 w-full" /></Field>`,
  }),
}

export const Valid: Story = {
  args: {
    id: 'valid-input',
    label: 'Email address',
    isValid: true,
    message: 'Email looks good!',
  },
  render: (args) => ({
    components: { Field },
    setup() {
      return { args }
    },
    template: `<Field v-bind="args"><input :id="args.id" type="email" value="user@example.com" class="border border-green-500 rounded px-3 py-2 w-full" /></Field>`,
  }),
}

export const Loading: Story = {
  args: {
    id: 'loading-input',
    label: 'Email address',
    isLoading: true,
    message: 'Checking availability...',
  },
  render: (args) => ({
    components: { Field },
    setup() {
      return { args }
    },
    template: `<Field v-bind="args"><input :id="args.id" type="email" class="border rounded px-3 py-2 w-full" /></Field>`,
  }),
}
