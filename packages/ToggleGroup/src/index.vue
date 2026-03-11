<script setup lang="ts">
import { ref, watch } from 'vue'

interface ToggleOption {
  id: string
  label: string
  value: string
  disabled?: boolean
  size?: 's' | 'm'
}

const props = defineProps<{
  name: string
  modelValue?: string[]
  options: ToggleOption[]
  inline?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
}>()

const selected = ref<string[]>(props.modelValue || [])

watch(() => props.modelValue, (v) => { selected.value = v || [] }, { immediate: true })

const onChange = (isChecked: boolean, value: string) => {
  const values = [...selected.value]
  if (isChecked && !values.includes(value)) {
    values.push(value)
  } else {
    const idx = values.indexOf(value)
    if (idx > -1) values.splice(idx, 1)
  }
  selected.value = values
  emit('update:modelValue', values)
}
</script>

<template>
  <div :class="['toggle-group', inline && 'toggle-group--inline']">
    <div
      v-for="option in options"
      :key="option.id"
      :class="['toggle-group__item', option.size === 'm' ? 'toggle-group__item--m' : null]"
    >
      <label class="toggle-group__container" :for="option.id">
        <input
          :id="option.id"
          type="checkbox"
          class="toggle-group__input"
          :name="name"
          :checked="selected.includes(option.value)"
          :disabled="option.disabled"
          @change="onChange(($event.target as HTMLInputElement).checked, option.value)"
        />
        <span class="toggle-group__track" aria-hidden="true">
          <span class="toggle-group__thumb"></span>
        </span>
        <span class="toggle-group__label">{{ option.label }}</span>
      </label>
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.toggle-group {
  @apply flex flex-col gap-2;
}

.toggle-group--inline {
  @apply flex-row flex-wrap gap-4;
}

.toggle-group__item {
  @apply flex;
}

.toggle-group__container {
  @apply inline-flex items-center gap-2 cursor-pointer select-none;
}

.toggle-group__input {
  @apply sr-only;
}

.toggle-group__track {
  @apply relative inline-flex items-center w-10 h-6 rounded-full bg-grey-300 transition-colors duration-200;
}

.toggle-group__input:checked + .toggle-group__track {
  @apply bg-primary;
}

.toggle-group__input:disabled + .toggle-group__track {
  @apply opacity-50 cursor-not-allowed;
}

.toggle-group__thumb {
  @apply absolute left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200;
}

.toggle-group__input:checked + .toggle-group__track .toggle-group__thumb {
  @apply translate-x-4;
}

.toggle-group__label {
  @apply text-sm text-grey-800;
}

.toggle-group__item--m .toggle-group__track {
  @apply w-12 h-7;
}

.toggle-group__item--m .toggle-group__thumb {
  @apply w-6 h-6;
}

.toggle-group__item--m .toggle-group__input:checked + .toggle-group__track .toggle-group__thumb {
  @apply translate-x-5;
}
</style>
