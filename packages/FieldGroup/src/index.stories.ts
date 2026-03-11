import type { Meta, StoryObj } from '@storybook/vue3'
import FieldGroup from './index.vue'

const meta: Meta<typeof FieldGroup> = {
  title: 'Components/FieldGroup',
  component: FieldGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A fieldset wrapper for grouped form inputs like radio buttons or checkboxes, providing a legend, help text, and validation message.',
      },
    },
  },
  argTypes: {
    legend: { control: 'text' },
    requirementText: { control: 'text' },
    helpText: { control: 'text' },
    isValid: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    message: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const radioOptions = `
  <label class="flex items-center gap-2"><input type="radio" name="plan" value="basic" /> Basic</label>
  <label class="flex items-center gap-2"><input type="radio" name="plan" value="pro" /> Pro</label>
  <label class="flex items-center gap-2"><input type="radio" name="plan" value="enterprise" /> Enterprise</label>
`

export const Default: Story = {
  args: {
    legend: 'Select a plan',
  },
  render: (args) => ({
    components: { FieldGroup },
    setup() {
      return { args, radioOptions }
    },
    template: `<FieldGroup v-bind="args"><label class="flex items-center gap-2"><input type="radio" name="plan" value="basic" /> Basic</label><label class="flex items-center gap-2"><input type="radio" name="plan" value="pro" /> Pro</label></FieldGroup>`,
  }),
}

export const WithHelpText: Story = {
  args: {
    legend: 'Notification preferences',
    helpText: 'Choose how you want to be notified.',
  },
  render: (args) => ({
    components: { FieldGroup },
    setup() {
      return { args }
    },
    template: `<FieldGroup v-bind="args"><label class="flex items-center gap-2"><input type="checkbox" /> Email</label><label class="flex items-center gap-2"><input type="checkbox" /> SMS</label></FieldGroup>`,
  }),
}

export const Invalid: Story = {
  args: {
    legend: 'Select a plan',
    isInvalid: true,
    message: 'Please select at least one option.',
  },
  render: (args) => ({
    components: { FieldGroup },
    setup() {
      return { args }
    },
    template: `<FieldGroup v-bind="args"><label class="flex items-center gap-2"><input type="radio" name="plan2" value="basic" /> Basic</label><label class="flex items-center gap-2"><input type="radio" name="plan2" value="pro" /> Pro</label></FieldGroup>`,
  }),
}

export const Valid: Story = {
  args: {
    legend: 'Select a plan',
    isValid: true,
    message: 'Great choice!',
  },
  render: (args) => ({
    components: { FieldGroup },
    setup() {
      return { args }
    },
    template: `<FieldGroup v-bind="args"><label class="flex items-center gap-2"><input type="radio" name="plan3" value="pro" checked /> Pro</label><label class="flex items-center gap-2"><input type="radio" name="plan3" value="enterprise" /> Enterprise</label></FieldGroup>`,
  }),
}
