<script setup lang="ts">
import { ref } from 'vue'

type ActionItem = {
  id: string
  label: string
  disabled?: boolean
  divider?: boolean
}

const props = withDefaults(
  defineProps<{
    title?: string
    position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
    items: ActionItem[]
  }>(),
  {
    position: 'bottom-right',
  },
)

const emit = defineEmits<{
  close: []
  action: [id: string]
}>()

defineSlots<{
  activator?: () => any
}>()

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}

function close() {
  isOpen.value = false
  emit('close')
}

function onClickItem(item: ActionItem) {
  if (item.disabled) return
  emit('action', item.id)
  close()
}
</script>

<template>
  <div class="action-listbox" :class="`action-listbox--${position}`">
    <div class="action-listbox__activator" @click="toggle">
      <slot name="activator" />
    </div>

    <div v-if="isOpen" class="action-listbox__dropdown">
      <div v-if="title" class="action-listbox__header">
        <h3 class="action-listbox__title">{{ title }}</h3>
        <button type="button" class="action-listbox__close" aria-label="Close" @click="close">✕</button>
      </div>

      <ul class="action-listbox__list" role="menu">
        <template v-for="(item, index) in items" :key="`item-${index}`">
          <li v-if="item.divider" class="action-listbox__divider" role="separator" />
          <li
            class="action-listbox__item"
            :class="{ 'action-listbox__item--disabled': item.disabled }"
            role="menuitem"
          >
            <button
              type="button"
              class="action-listbox__button"
              :disabled="item.disabled"
              @click="onClickItem(item)"
            >
              {{ item.label }}
            </button>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.action-listbox {
  @apply relative inline-block;
}

.action-listbox__activator {
  @apply cursor-pointer;
}

.action-listbox__dropdown {
  @apply absolute z-50 min-w-48 bg-white rounded-lg shadow-lg border border-grey-200;
}

.action-listbox--bottom-right .action-listbox__dropdown {
  @apply top-full right-0 mt-1;
}

.action-listbox--bottom-left .action-listbox__dropdown {
  @apply top-full left-0 mt-1;
}

.action-listbox--top-right .action-listbox__dropdown {
  @apply bottom-full right-0 mb-1;
}

.action-listbox--top-left .action-listbox__dropdown {
  @apply bottom-full left-0 mb-1;
}

.action-listbox__header {
  @apply flex items-center justify-between px-4 py-3 border-b border-grey-200;
}

.action-listbox__title {
  @apply text-sm font-semibold text-grey-800 m-0;
}

.action-listbox__close {
  @apply text-grey-500 hover:text-grey-800 cursor-pointer border-none bg-transparent;
}

.action-listbox__list {
  @apply list-none m-0 p-1;
}

.action-listbox__divider {
  @apply h-px bg-grey-200 my-1;
}

.action-listbox__item--disabled .action-listbox__button {
  @apply opacity-50 cursor-not-allowed;
}

.action-listbox__button {
  @apply w-full text-left px-3 py-2 text-sm text-grey-700 rounded-md cursor-pointer border-none bg-transparent hover:bg-grey-100 transition-colors duration-200;
}
</style>
