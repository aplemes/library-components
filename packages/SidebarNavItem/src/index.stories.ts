import type { Meta, StoryObj } from '@storybook/vue3'
import SidebarNavItem from './index.vue'

const meta: Meta<typeof SidebarNavItem> = {
  title: 'Components/SidebarNavItem',
  component: SidebarNavItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'SidebarNavItem renders a navigation link inside a Sidebar with an optional icon, active state, and disabled state. Renders as an anchor when href is provided, or a button otherwise.',
      },
    },
  },
  argTypes: {
    label: {
      description: 'Text label displayed for the navigation item.',
      control: 'text',
    },
    href: {
      description: 'URL the navigation item links to. When provided, renders as an anchor tag.',
      control: 'text',
    },
    active: {
      description: 'Marks the item as the currently active navigation destination.',
      control: 'boolean',
    },
    disabled: {
      description: 'Disables the navigation item, preventing interaction.',
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { SidebarNavItem },
    template: `
      <ul style="background: #191919; width: 256px; list-style: none; margin: 0; padding: 8px;">
        <SidebarNavItem label="Home" href="/home" />
      </ul>
    `,
  }),
}

export const Active: Story = {
  render: () => ({
    components: { SidebarNavItem },
    template: `
      <ul style="background: #191919; width: 256px; list-style: none; margin: 0; padding: 8px;">
        <SidebarNavItem label="Dashboard" href="/dashboard" :active="true" />
        <SidebarNavItem label="Products" href="/products" />
        <SidebarNavItem label="Settings" href="/settings" />
      </ul>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { SidebarNavItem },
    template: `
      <ul style="background: #191919; width: 256px; list-style: none; margin: 0; padding: 8px;">
        <SidebarNavItem label="Dashboard" href="/dashboard" />
        <SidebarNavItem label="Reports" href="/reports" :disabled="true" />
      </ul>
    `,
  }),
}

export const WithIcon: Story = {
  render: () => ({
    components: { SidebarNavItem },
    template: `
      <ul style="background: #191919; width: 256px; list-style: none; margin: 0; padding: 8px;">
        <SidebarNavItem label="Home" href="/home">
          <template #icon>🏠</template>
        </SidebarNavItem>
        <SidebarNavItem label="Settings" href="/settings" :active="true">
          <template #icon>⚙</template>
        </SidebarNavItem>
      </ul>
    `,
  }),
}
