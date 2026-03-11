<script setup lang="ts">
import { computed, ref, onBeforeUnmount } from 'vue'

export type ComboboxOption = {
  value: string
  label: string
  disabled?: boolean
}

const props = withDefaults(
  defineProps<{
    modelValue?: string | string[]
    multiple?: boolean
    size?: 's' | 'm'
    disabled?: boolean
    readonly?: boolean
    invalid?: boolean
    clearable?: boolean
    search?: boolean
    placeholder?: string
    searchPlaceholder?: string
    selectLabel?: string
    clearLabel?: string
    options: ComboboxOption[]
  }>(),
  {
    size: 'm',
    placeholder: 'Select an option',
    searchPlaceholder: 'Search...',
    selectLabel: 'Select all',
    clearLabel: 'Clear',
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string | string[]]
  'update:open': [value: boolean]
}>()

const isOpen = ref(false)
const searchText = ref('')
const container = ref<HTMLElement | null>(null)

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

const filteredOptions = computed(() => {
  if (!props.search || !searchText.value) return props.options
  const q = searchText.value.toLowerCase()
  return props.options.filter((o) => o.label.toLowerCase().includes(q))
})

const triggerLabel = computed(() => {
  if (props.multiple) {
    const arr = selection.value as string[]
    if (!arr.length) return props.placeholder
    return arr
      .map((v) => props.options.find((o) => o.value === v)?.label ?? v)
      .join(', ')
  }
  const val = selection.value as string
  return props.options.find((o) => o.value === val)?.label ?? props.placeholder
})

const hasValue = computed(() =>
  props.multiple
    ? (selection.value as string[]).length > 0
    : !!(selection.value as string)
)

function isSelected(option: ComboboxOption): boolean {
  if (props.multiple) {
    return (selection.value as string[]).includes(option.value)
  }
  return selection.value === option.value
}

function toggleOption(option: ComboboxOption) {
  if (option.disabled || props.disabled || props.readonly) return
  if (props.multiple) {
    const arr = selection.value as string[]
    if (arr.includes(option.value)) {
      selection.value = arr.filter((v) => v !== option.value)
    } else {
      selection.value = [...arr, option.value]
    }
  } else {
    selection.value = option.value
    close()
  }
}

function open() {
  if (props.disabled || props.readonly) return
  isOpen.value = true
  emit('update:open', true)
  document.addEventListener('click', handleClickOutside)
}

function close() {
  isOpen.value = false
  emit('update:open', false)
  searchText.value = ''
  document.removeEventListener('click', handleClickOutside)
}

function toggleOpen() {
  isOpen.value ? close() : open()
}

function clearSelection() {
  selection.value = props.multiple ? [] : ''
}

function handleClickOutside(event: MouseEvent) {
  if (container.value && !container.value.contains(event.target as Node)) {
    close()
  }
}

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div
    ref="container"
    class="combobox"
    :class="{
      'combobox--open': isOpen,
      'combobox--invalid': invalid,
      'combobox--s': size === 's',
      'combobox--disabled': disabled,
      'combobox--readonly': readonly,
      'combobox--multiple': multiple,
    }"
  >
    <div class="combobox__trigger">
      <button
        type="button"
        class="combobox__control"
        :disabled="disabled"
        :aria-expanded="isOpen"
        aria-haspopup="listbox"
        @click="toggleOpen"
      >
        {{ triggerLabel }}
      </button>

      <button
        v-if="clearable && hasValue"
        type="button"
        class="combobox__clear"
        aria-label="Clear selection"
        @click.stop="clearSelection"
      >
        &times;
      </button>

      <button
        type="button"
        class="combobox__chevron"
        :tabindex="-1"
        aria-label="Toggle options"
        @click="toggleOpen"
      >
        ▾
      </button>
    </div>

    <div v-if="isOpen" class="combobox__dropdown" role="listbox">
      <div v-if="search" class="combobox__search">
        <input
          v-model="searchText"
          type="text"
          class="combobox__search-input"
          :placeholder="searchPlaceholder"
          @click.stop
        />
      </div>

      <ul class="combobox__list">
        <li
          v-for="option in filteredOptions"
          :key="option.value"
          class="combobox__option"
          :class="{
            'combobox__option--selected': isSelected(option),
            'combobox__option--disabled': option.disabled,
          }"
          role="option"
          :aria-selected="isSelected(option)"
          :aria-disabled="option.disabled"
          @click.stop="toggleOption(option)"
        >
          <span class="combobox__option-prefix">
            <slot name="optionPrefix" />
          </span>
          <span class="combobox__option-label">{{ option.label }}</span>
          <span v-if="isSelected(option)" class="combobox__check" aria-hidden="true">✓</span>
        </li>
        <li v-if="filteredOptions.length === 0" class="combobox__no-results">
          No results found
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";

.combobox {
  @apply relative inline-block w-full;
}

.combobox__trigger {
  @apply flex items-center border border-neutral-300 rounded bg-white overflow-hidden;
}

.combobox--invalid .combobox__trigger {
  @apply border-danger-500;
}

.combobox--disabled .combobox__trigger {
  @apply opacity-50 cursor-not-allowed;
}

.combobox__control {
  @apply flex-1 px-3 py-2 text-sm text-left bg-transparent focus:outline-none cursor-pointer disabled:cursor-not-allowed;
}

.combobox--s .combobox__control {
  @apply px-2 py-1 text-xs;
}

.combobox__clear,
.combobox__chevron {
  @apply px-2 text-neutral-500 hover:text-neutral-800 bg-transparent border-0 cursor-pointer;
}

.combobox__dropdown {
  @apply absolute z-50 w-full mt-1 bg-white border border-neutral-200 rounded shadow-lg;
}

.combobox__search {
  @apply p-2 border-b border-neutral-100;
}

.combobox__search-input {
  @apply w-full border border-neutral-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary;
}

.combobox__list {
  @apply max-h-60 overflow-y-auto py-1;
}

.combobox__option {
  @apply flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-neutral-50;
}

.combobox__option--selected {
  @apply bg-primary-light;
}

.combobox__option--disabled {
  @apply opacity-50 cursor-not-allowed pointer-events-none;
}

.combobox__option-prefix {
  @apply flex-shrink-0;
}

.combobox__option-label {
  @apply flex-1;
}

.combobox__check {
  @apply text-primary text-xs;
}

.combobox__no-results {
  @apply px-3 py-2 text-sm text-neutral-400;
}
</style>
