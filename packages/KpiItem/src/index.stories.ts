import type { Meta, StoryObj } from '@storybook/vue3'
import KpiItem from './index.vue'

const meta: Meta<typeof KpiItem> = {
  title: 'Components/KpiItem',
  component: KpiItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'KpiItem displays Key Performance Indicators with a value, trend indicator, label, and optional status. Used in dashboards and analytics to highlight critical metrics.',
      },
    },
  },
  argTypes: {
    value: {
      description: 'The current KPI value to display prominently.',
      control: 'text',
    },
    trend: {
      description: 'Trend direction indicator (up=green, down=red, neutral=gray).',
      control: 'select',
      options: ['up', 'down', 'neutral'],
    },
    label: {
      description: 'Descriptive label shown above or near the value.',
      control: 'text',
    },
    status: {
      description: 'Optional status badge displayed below the value.',
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
    information: {
      description: 'Additional context information shown with the trend.',
      control: 'text',
    },
    size: {
      description: 'Size variant controlling the overall scale of the KPI display.',
      control: 'select',
      options: ['s', 'm', 'l'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: '1,234',
    label: 'Total Sales',
    size: 'm',
  },
}

export const TrendUp: Story = {
  args: {
    value: '€24,500',
    label: 'Monthly Revenue',
    trend: 'up',
    information: '+12% vs last month',
    size: 'm',
  },
}

export const TrendDown: Story = {
  args: {
    value: '3.2%',
    label: 'Return Rate',
    trend: 'down',
    information: '-0.8% vs last month',
    size: 'm',
  },
}

export const WithStatus: Story = {
  args: {
    value: '98.5%',
    label: 'Uptime',
    trend: 'up',
    status: 'success',
    size: 'm',
  },
}

export const Large: Story = {
  args: {
    value: '€1.2M',
    label: 'Annual Revenue',
    trend: 'up',
    information: '+23% vs last year',
    size: 'l',
  },
}

export const Small: Story = {
  args: {
    value: '42',
    label: 'Open Tickets',
    trend: 'neutral',
    size: 's',
  },
}
