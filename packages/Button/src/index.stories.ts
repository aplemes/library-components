import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './index.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    appearance: {
      control: 'select',
      options: ['standard', 'accent', 'danger', 'inverse'],
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right', 'only'],
    },
    type: {
      control: 'select',
      options: ['button', 'reset', 'submit'],
    },
    disabled: { control: 'boolean' },
    ghost: { control: 'boolean' },
    outlined: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'secondary',
  },
}

export const Ghost: Story = {
  args: {
    label: 'Button',
    variant: 'ghost',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
  },
}

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 's',
  },
}

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'l',
  },
}

export const Accent: Story = {
  args: {
    label: 'Accent Button',
    appearance: 'accent',
  },
}

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    appearance: 'danger',
  },
}

export const Inverse: Story = {
  args: {
    label: 'Inverse Button',
    appearance: 'inverse',
  },
}

export const Loading: Story = {
  args: {
    label: 'Loading...',
    isLoading: true,
  },
}

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    outlined: true,
  },
}

export const Submit: Story = {
  args: {
    label: 'Submit Form',
    type: 'submit',
  },
}
