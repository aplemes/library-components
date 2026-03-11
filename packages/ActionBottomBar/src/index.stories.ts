import type { Meta, StoryObj } from '@storybook/vue3'
import ActionBottomBar from './index.vue'

const meta: Meta<typeof ActionBottomBar> = {
  title: 'Components/ActionBottomBar',
  component: ActionBottomBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A fixed bottom bar for persistent primary and secondary actions. Supports left and right slot areas and an optional top shadow.',
      },
      story: {
        inline: false,
        iframeHeight: 120,
      },
    },
  },
  argTypes: {
    shadow: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    shadow: false,
  },
  render: (args) => ({
    components: { ActionBottomBar },
    setup() {
      return { args }
    },
    template: `
      <div style="position: relative; height: 80px;">
        <ActionBottomBar v-bind="args" style="position: absolute;">
          <template #left><span class="text-sm text-neutral-500">Step 1 of 3</span></template>
          <template #right><button class="px-4 py-2 text-sm bg-primary text-white rounded">Continue</button></template>
        </ActionBottomBar>
      </div>
    `,
  }),
}

export const WithShadow: Story = {
  args: {
    shadow: true,
  },
  render: (args) => ({
    components: { ActionBottomBar },
    setup() {
      return { args }
    },
    template: `
      <div style="position: relative; height: 80px;">
        <ActionBottomBar v-bind="args" style="position: absolute;">
          <template #left><span class="text-sm text-neutral-500">Auto-saved</span></template>
          <template #right><button class="px-4 py-2 text-sm bg-primary text-white rounded">Save</button></template>
        </ActionBottomBar>
      </div>
    `,
  }),
}

export const WithButtons: Story = {
  args: {
    shadow: true,
  },
  render: (args) => ({
    components: { ActionBottomBar },
    setup() {
      return { args }
    },
    template: `
      <div style="position: relative; height: 80px;">
        <ActionBottomBar v-bind="args" style="position: absolute;">
          <template #left>
            <button class="px-4 py-2 text-sm border border-neutral-300 rounded text-neutral-700">Cancel</button>
          </template>
          <template #right>
            <button class="px-4 py-2 text-sm border border-neutral-300 rounded text-neutral-700 mr-2">Save Draft</button>
            <button class="px-4 py-2 text-sm bg-primary text-white rounded">Publish</button>
          </template>
        </ActionBottomBar>
      </div>
    `,
  }),
}
