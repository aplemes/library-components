import type { Meta, StoryObj } from '@storybook/vue3'
import IconButton from './index.vue'

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'select', options: ['standard', 'accent', 'danger', 'inverse'] },
    size: { control: 'select', options: ['s', 'm', 'l'] },
    ghost: { control: 'boolean' },
    outlined: { control: 'boolean' },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof meta>

const iconSlot = `<template #icon><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></template>`

export const Default: Story = {
  args: { ariaLabel: 'Go back' },
  render: (args) => ({ components: { IconButton }, setup() { return { args } }, template: `<IconButton v-bind="args">${iconSlot}</IconButton>` }),
}
export const Ghost: Story = {
  args: { ghost: true, ariaLabel: 'Go back' },
  render: (args) => ({ components: { IconButton }, setup() { return { args } }, template: `<IconButton v-bind="args">${iconSlot}</IconButton>` }),
}
export const Outlined: Story = {
  args: { outlined: true, ariaLabel: 'Go back' },
  render: (args) => ({ components: { IconButton }, setup() { return { args } }, template: `<IconButton v-bind="args">${iconSlot}</IconButton>` }),
}
export const Danger: Story = {
  args: { appearance: 'danger', ariaLabel: 'Delete' },
  render: (args) => ({ components: { IconButton }, setup() { return { args } }, template: `<IconButton v-bind="args">${iconSlot}</IconButton>` }),
}
export const Small: Story = {
  args: { size: 's', ariaLabel: 'Small button' },
  render: (args) => ({ components: { IconButton }, setup() { return { args } }, template: `<IconButton v-bind="args">${iconSlot}</IconButton>` }),
}
export const Loading: Story = {
  args: { isLoading: true, ariaLabel: 'Loading' },
  render: (args) => ({ components: { IconButton }, setup() { return { args } }, template: `<IconButton v-bind="args">${iconSlot}</IconButton>` }),
}
