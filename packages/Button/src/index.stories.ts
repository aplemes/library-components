import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './index.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Interactive button component with multiple variants, appearances, sizes and states. Supports icon slots, loading state and form submission.',
      },
    },
  },
  argTypes: {
    label: {
      description: 'Text label displayed inside the button.',
      control: 'text',
    },
    variant: {
      description: 'Visual style variant of the button.',
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    appearance: {
      description: 'Color appearance modifier applied on top of the variant.',
      control: 'select',
      options: ['standard', 'accent', 'danger', 'inverse'],
    },
    size: {
      description: 'Size of the button.',
      control: 'select',
      options: ['s', 'm', 'l'],
    },
    disabled: {
      description: 'Disables the button, preventing interaction.',
      control: 'boolean',
    },
    ghost: {
      description: 'Renders the button with a transparent background.',
      control: 'boolean',
    },
    outlined: {
      description: 'Renders the button with an outline border instead of a fill.',
      control: 'boolean',
    },
    iconPosition: {
      description: 'Position of the icon slot relative to the label. Use `only` to render icon-only.',
      control: 'select',
      options: ['left', 'right', 'only'],
    },
    type: {
      description: 'HTML button type attribute.',
      control: 'select',
      options: ['button', 'reset', 'submit'],
    },
    isLoading: {
      description: 'Shows a loading spinner and disables the button.',
      control: 'boolean',
    },
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
