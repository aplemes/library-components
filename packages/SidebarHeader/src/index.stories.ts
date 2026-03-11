import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SidebarHeader from './index.vue'

const meta: Meta<typeof SidebarHeader> = {
  title: 'Components/SidebarHeader',
  component: SidebarHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'SidebarHeader renders the header area of a Sidebar. It adapts its layout based on whether the sidebar is expanded or collapsed, showing full content when expanded and icon-only when collapsed.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { SidebarHeader },
    setup() {
      const expanded = ref(true)
      return { expanded }
    },
    template: `
      <div style="background: #191919; width: 256px;">
        <SidebarHeader>
          <img src="https://via.placeholder.com/32" alt="logo" style="width: 32px; height: 32px; border-radius: 4px;" />
          <span style="color: white; font-weight: bold; font-size: 1rem;">My Application</span>
        </SidebarHeader>
      </div>
    `,
  }),
}

export const Collapsed: Story = {
  render: () => ({
    components: { SidebarHeader },
    setup() {
      const expanded = ref(false)
      return { expanded }
    },
    template: `
      <div style="background: #191919; width: 64px;">
        <SidebarHeader>
          <img src="https://via.placeholder.com/32" alt="logo" style="width: 32px; height: 32px; border-radius: 4px;" />
        </SidebarHeader>
      </div>
    `,
  }),
}
