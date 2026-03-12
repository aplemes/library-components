import type { Meta, StoryObj } from '@storybook/vue3'
import Input from './index.vue'

const meta: Meta<typeof Input> = {
  title: 'Components/AzInput',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `General-purpose text input field with optional label, error message, prefix/suffix addons and an icon slot. Supports multiple HTML input types, two sizes and read-only and disabled states.

## Installation

\`\`\`bash
yarn add @azulejo-kit/input
\`\`\`

\`\`\`js
import '@azulejo-kit/input/style.css'
\`\`\`

\`\`\`vue
<script setup>
import { AzInput } from '@azulejo-kit/input'
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <Input v-model="value" label="Email" placeholder="name@example.com" type="email" />
</template>
\`\`\``,
      },
    },
  },
  argTypes: {
    modelValue: {
      description: 'Bound input value. Use with `v-model` for two-way binding.',
      control: 'text',
    },
    label: {
      description: 'Text label rendered above the input.',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder text shown when the input has no value.',
      control: 'text',
    },
    id: {
      description: 'HTML id attribute used to associate the label with the input.',
      control: 'text',
    },
    name: {
      description: 'HTML name attribute used for form submission.',
      control: 'text',
    },
    type: {
      description: 'HTML input type.',
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'date'],
    },
    size: {
      description: 'Size of the input field.',
      control: 'select',
      options: ['s', 'm'],
    },
    disabled: {
      description: 'Disables the input, preventing interaction.',
      control: 'boolean',
    },
    readonly: {
      description: 'Makes the input read-only; the value is visible but cannot be edited.',
      control: 'boolean',
    },
    error: {
      description: 'Validation error message shown below the input. Also applies invalid styling.',
      control: 'text',
    },
    prefix: {
      description: 'Static text rendered as an addon before the input (e.g. "https://").',
      control: 'text',
    },
    suffix: {
      description: 'Static text rendered as an addon after the input (e.g. ".com").',
      control: 'text',
    },
    isClearable: {
      description: 'When true, shows a clear (×) button when the input has a value.',
      control: 'boolean',
    },
    clearLabel: {
      description: 'Accessible label for the clear button.',
      control: 'text',
    },
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

export const Clearable: Story = {
  args: {
    label: 'Clearable Input',
    modelValue: 'Some value',
    isClearable: true,
    clearLabel: 'Clear',
    id: 'clearable-input',
  },
}
