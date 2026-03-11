import type { Meta, StoryObj } from '@storybook/vue3'
import SidebarShortcutItem from './index.vue'

const meta: Meta<typeof SidebarShortcutItem> = {
  title: 'Components/SidebarShortcutItem',
  component: SidebarShortcutItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'SidebarShortcutItem renders a compact navigation link in the sidebar shortcuts area, displaying an icon and short label for quick access to a specific URL.',
      },
    },
  },
  argTypes: {
    label: {
      description: 'Text label displayed below the icon for the shortcut item.',
      control: 'text',
    },
    href: {
      description: 'URL that the shortcut item links to.',
      control: 'text',
    },
    active: {
      description: 'Marks the shortcut as currently active, applying active styling.',
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { SidebarShortcutItem },
    template: `
      <ul style="background: #191919; list-style: none; margin: 0; padding: 8px; display: flex; gap: 8px;">
        <SidebarShortcutItem label="Dashboard" href="/dashboard">
          <template #icon>📊</template>
        </SidebarShortcutItem>
      </ul>
    `,
  }),
}

export const Active: Story = {
  render: () => ({
    components: { SidebarShortcutItem },
    template: `
      <ul style="background: #191919; list-style: none; margin: 0; padding: 8px; display: flex; gap: 8px;">
        <SidebarShortcutItem label="Dashboard" href="/dashboard" :active="true">
          <template #icon>📊</template>
        </SidebarShortcutItem>
        <SidebarShortcutItem label="Orders" href="/orders">
          <template #icon>📦</template>
        </SidebarShortcutItem>
      </ul>
    `,
  }),
}

export const WithoutIcon: Story = {
  render: () => ({
    components: { SidebarShortcutItem },
    template: `
      <ul style="background: #191919; list-style: none; margin: 0; padding: 8px; display: flex; gap: 8px;">
        <SidebarShortcutItem label="Dashboard" href="/dashboard" />
        <SidebarShortcutItem label="Analytics" href="/analytics" />
      </ul>
    `,
  }),
}
