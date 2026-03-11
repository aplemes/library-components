<script setup lang="ts">
import { ref, watch } from 'vue'

interface CheckboxOption {
  id: string
  label: string
  value: string
  disabled?: boolean
  isInvalid?: boolean
  indented?: boolean
}

const props = defineProps<{
  name: string
  modelValue?: string[]
  options: CheckboxOption[]
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
  <div :class="['checkbox-group', inline && 'checkbox-group--inline']">
    <div
      v-for="option in options"
      :key="option.id"
      :class="['checkbox-group__item', inline && 'checkbox-group__item--inline', option.indented && 'checkbox-group__item--indented']"
    >
      <input
        :id="option.id"
        type="checkbox"
        class="checkbox-group__input"
        :class="{ 'checkbox-group__input--invalid': option.isInvalid }"
        :name="name"
        :checked="selected.includes(option.value)"
        :disabled="option.disabled"
        :aria-invalid="option.isInvalid"
        @change="onChange(($event.target as HTMLInputElement).checked, option.value)"
      />
      <label v-if="option.label" :for="option.id" class="checkbox-group__label">{{ option.label }}</label>
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.checkbox-group {
  @apply flex flex-col gap-2;
}

.checkbox-group--inline {
  @apply flex-row flex-wrap gap-4;
}

.checkbox-group__item {
  @apply flex items-center gap-2;
}

.checkbox-group__item--indented {
  @apply pl-6;
}

.checkbox-group__input {
  @apply w-4 h-4 rounded-s border border-grey-400 bg-white text-primary cursor-pointer accent-primary;
  @apply focus:ring-2 focus:ring-primary focus:ring-offset-1 focus:outline-none;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}

.checkbox-group__input--invalid {
  @apply border-danger-500;
}

.checkbox-group__label {
  @apply text-sm text-grey-800 cursor-pointer select-none;
}
</style>
