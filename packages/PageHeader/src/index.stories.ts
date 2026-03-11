import type { Meta, StoryObj } from '@storybook/vue3'
import PageHeader from './index.vue'

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'PageHeader is a fundamental component that structures the top part of an interface, serving as a cognitive anchor point. It establishes page context, facilitates navigation, and provides the main actions within the current scope.',
      },
    },
  },
  argTypes: {
    title: {
      description: 'Main title displayed in the page header.',
      control: 'text',
    },
    shadow: {
      description: 'Enables a drop shadow under the page header.',
      control: 'boolean',
    },
    backButton: {
      description: 'Displays a back arrow button in the header.',
      control: 'boolean',
    },
    status: {
      description: 'Status indicator for the page header badge.',
      control: 'select',
      options: ['info', 'success', 'warning', 'danger', 'neutral'],
    },
    statusLabel: {
      description: 'Label text displayed inside the status badge.',
      control: 'text',
    },
    extraInfo: {
      description: 'Additional information text shown below the title.',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Page Title',
  },
}

export const WithBackButton: Story = {
  args: {
    title: 'Page Title',
    backButton: true,
  },
}

export const WithStatus: Story = {
  args: {
    title: 'Order Details',
    status: 'success',
    statusLabel: 'Delivered',
    extraInfo: 'Updated 2 hours ago',
  },
}

export const WithActions: Story = {
  render: () => ({
    components: { PageHeader },
    template: `
      <PageHeader title="Product Management">
        <template #actions>
          <button style="padding: 6px 16px; background: #007a3e; color: white; border: none; border-radius: 4px; cursor: pointer;">Add Product</button>
        </template>
      </PageHeader>
    `,
  }),
}

export const WithTabs: Story = {
  render: () => ({
    components: { PageHeader },
    template: `
      <PageHeader title="Dashboard">
        <template #tabs>
          <nav style="display: flex; gap: 16px; padding: 0 16px;">
            <a style="padding: 8px 0; text-decoration: none; color: #007a3e; border-bottom: 2px solid #007a3e; font-weight: 500;">Overview</a>
            <a style="padding: 8px 0; text-decoration: none; color: #666;">Analytics</a>
            <a style="padding: 8px 0; text-decoration: none; color: #666;">Reports</a>
          </nav>
        </template>
      </PageHeader>
    `,
  }),
}
