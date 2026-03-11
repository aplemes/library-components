import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Toaster from './index.vue'

const meta: Meta<typeof Toaster> = {
  title: 'Components/Toaster',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Toaster is a temporary notification that appears briefly on screen to provide feedback without interrupting the user\'s workflow. It supports auto-dismiss with optional progress bar.',
      },
    },
  },
  argTypes: {
    open: {
      description: 'Controls visibility of the toaster notification.',
      control: 'boolean',
    },
    position: {
      description: 'Corner position where the toaster appears on screen.',
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
    description: {
      description: 'Main message text displayed in the toaster.',
      control: 'text',
    },
    status: {
      description: 'Visual style and semantic status of the toaster.',
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
    closable: {
      description: 'Shows a close button to manually dismiss the toaster.',
      control: 'boolean',
    },
    progress: {
      description: 'Displays a progress bar showing the remaining timeout duration.',
      control: 'boolean',
    },
    timeout: {
      description: 'Duration in milliseconds before auto-dismissing. Set to 0 to disable.',
      control: 'number',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  render: () => ({
    components: { Toaster },
    setup() { return { open: ref(true) } },
    template: `<Toaster v-model:open="open" description="This is an informational message." status="info" :timeout="0" />`,
  }),
}

export const Success: Story = {
  render: () => ({
    components: { Toaster },
    setup() { return { open: ref(true) } },
    template: `<Toaster v-model:open="open" description="Your changes have been saved successfully." status="success" :timeout="0" />`,
  }),
}

export const Warning: Story = {
  render: () => ({
    components: { Toaster },
    setup() { return { open: ref(true) } },
    template: `<Toaster v-model:open="open" description="Please review your settings before continuing." status="warning" :timeout="0" />`,
  }),
}

export const Danger: Story = {
  render: () => ({
    components: { Toaster },
    setup() { return { open: ref(true) } },
    template: `<Toaster v-model:open="open" description="An error occurred. Please try again." status="danger" :timeout="0" />`,
  }),
}

export const WithAction: Story = {
  render: () => ({
    components: { Toaster },
    setup() { return { open: ref(true) } },
    template: `
      <Toaster v-model:open="open" description="File deleted." status="info" :timeout="0">
        <template #action>
          <button style="background: none; border: none; text-decoration: underline; cursor: pointer; font-size: 0.875rem;">Undo</button>
        </template>
      </Toaster>
    `,
  }),
}

export const WithProgress: Story = {
  render: () => ({
    components: { Toaster },
    setup() { return { open: ref(true) } },
    template: `<Toaster v-model:open="open" description="Auto-dismissing in 5 seconds." status="info" :timeout="5000" progress />`,
  }),
}
