<script setup lang="ts">
import { ref, computed, watch } from 'vue'

export type ListboxOption = {
  value: string
  label: string
  disabled?: boolean
}

const props = withDefaults(
  defineProps<{
    modelValue?: string | string[]
    id?: string
    open?: boolean
    multiple?: boolean
    readonly?: boolean
    search?: boolean
    searchPlaceholder?: string
    selectLabel?: string
    clearLabel?: string
    options: ListboxOption[]
  }>(),
  {
    searchPlaceholder: 'Search...',
    selectLabel: 'Select all',
    clearLabel: 'Clear',
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string | string[]]
  open: []
  close: []
}>()

const searchText = ref('')

const filteredOptions = computed(() => {
  if (!props.search || !searchText.value) return props.options
  const q = searchText.value.toLowerCase()
  return props.options.filter((o) => o.label.toLowerCase().includes(q))
})

const selection = computed({
  get() {
    if (props.multiple) {
      return Array.isArray(props.modelValue) ? props.modelValue : []
    }
    return typeof props.modelValue === 'string' ? props.modelValue : ''
  },
  set(val: string | string[]) {
    emit('update:modelValue', val)
  },
})

function isSelected(option: ListboxOption): boolean {
  if (props.multiple) {
    return (selection.value as string[]).includes(option.value)
  }
  return selection.value === option.value
}

function toggleOption(option: ListboxOption) {
  if (option.disabled || props.readonly) return
  if (props.multiple) {
    const arr = selection.value as string[]
    if (arr.includes(option.value)) {
      selection.value = arr.filter((v) => v !== option.value)
    } else {
      selection.value = [...arr, option.value]
    }
  } else {
    selection.value = option.value
    emit('close')
  }
}

function clearSelection() {
  selection.value = props.multiple ? [] : ''
}

watch(
  () => props.open,
  (val) => {
    if (!val) searchText.value = ''
  }
)
</script>

<template>
  <div
    v-if="open"
    class="option-listbox"
    role="listbox"
    :aria-multiselectable="multiple"
  >
    <div v-if="search" class="option-listbox__search">
      <input
        v-model="searchText"
        type="text"
        class="option-listbox__search-input"
        :placeholder="searchPlaceholder"
        @click.stop
      />
    </div>

    <ul class="option-listbox__list">
      <li
        v-for="option in filteredOptions"
        :key="option.value"
        class="option-listbox__item"
        :class="{
          'option-listbox__item--selected': isSelected(option),
          'option-listbox__item--disabled': option.disabled,
          'option-listbox__item--readonly': readonly,
        }"
        role="option"
        :aria-selected="isSelected(option)"
        :aria-disabled="option.disabled"
        @click="toggleOption(option)"
      >
        <span class="option-listbox__prefix">
          <slot name="optionPrefix" />
        </span>
        <span class="option-listbox__label">{{ option.label }}</span>
        <span v-if="isSelected(option)" class="option-listbox__check" aria-hidden="true">✓</span>
      </li>
      <li v-if="filteredOptions.length === 0" class="option-listbox__empty">
        No results found
      </li>
    </ul>
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";

.option-listbox {
  @apply bg-white border border-neutral-200 rounded shadow-lg overflow-hidden;
}

.option-listbox__search {
  @apply p-2 border-b border-neutral-100;
}

.option-listbox__search-input {
  @apply w-full border border-neutral-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary;
}

.option-listbox__list {
  @apply max-h-60 overflow-y-auto py-1;
}

.option-listbox__item {
  @apply flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-neutral-50;
}

.option-listbox__item--selected {
  @apply bg-primary-light;
}

.option-listbox__item--disabled {
  @apply opacity-50 cursor-not-allowed pointer-events-none;
}

.option-listbox__item--readonly {
  @apply cursor-default pointer-events-none;
}

.option-listbox__prefix {
  @apply flex-shrink-0;
}

.option-listbox__label {
  @apply flex-1;
}

.option-listbox__check {
  @apply text-primary text-xs;
}

.option-listbox__empty {
  @apply px-3 py-2 text-sm text-neutral-400;
}
</style>
