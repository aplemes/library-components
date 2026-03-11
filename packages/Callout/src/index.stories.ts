import type { Meta, StoryObj } from '@storybook/vue3'
import Callout from './index.vue'

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Callout highlights additional information that can assist users with tips, extra details, or helpful guidance without signaling a critical status or alert.',
      },
    },
  },
  argTypes: {
    title: {
      description: 'Title text displayed in the callout.',
      control: 'text',
    },
    description: {
      description: 'Description text providing detail in the callout.',
      control: 'text',
    },
    appearance: {
      description: 'Visual appearance variant of the callout.',
      control: 'select',
      options: ['info', 'warning', 'success', 'danger', 'neutral'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    title: 'Information',
    description: 'This is an informational callout providing additional context.',
    appearance: 'info',
  },
}

export const Warning: Story = {
  args: {
    title: 'Warning',
    description: 'Please review this before proceeding with your action.',
    appearance: 'warning',
  },
}

export const Success: Story = {
  args: {
    title: 'Success',
    description: 'Your action has been completed successfully.',
    appearance: 'success',
  },
}

export const Danger: Story = {
  args: {
    title: 'Error',
    description: 'Something went wrong. Please try again.',
    appearance: 'danger',
  },
}

export const Neutral: Story = {
  args: {
    title: 'Note',
    description: 'A neutral note with no specific status.',
    appearance: 'neutral',
  },
}

export const WithFooter: Story = {
  render: () => ({
    components: { Callout },
    template: `
      <Callout title="Action Required" description="You need to confirm this action." appearance="warning">
        <template #footer>
          <button style="padding: 4px 12px; background: #f59e0b; color: white; border: none; border-radius: 4px; cursor: pointer;">Confirm</button>
          <button style="padding: 4px 12px; background: transparent; border: 1px solid #f59e0b; color: #92400e; border-radius: 4px; cursor: pointer;">Cancel</button>
        </template>
      </Callout>
    `,
  }),
}
