<script setup lang="ts">
interface RadioOption {
  id: string
  label: string
  value: string
  disabled?: boolean
}

const props = defineProps<{
  name: string
  modelValue?: string
  options: RadioOption[]
  isInvalid?: boolean
  inline?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div :class="['radio-group', inline && 'radio-group--inline']">
    <div
      v-for="option in options"
      :key="option.id"
      :class="['radio-group__item', inline && 'radio-group__item--inline']"
    >
      <input
        :id="option.id"
        type="radio"
        class="radio-group__input"
        :class="{ 'radio-group__input--invalid': isInvalid }"
        :name="name"
        :checked="modelValue === option.value"
        :disabled="option.disabled"
        :aria-invalid="isInvalid"
        @change="($event.target as HTMLInputElement).checked && emit('update:modelValue', option.value)"
      />
      <label :for="option.id" class="radio-group__label">{{ option.label }}</label>
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.radio-group {
  @apply flex flex-col gap-2;
}

.radio-group--inline {
  @apply flex-row flex-wrap gap-4;
}

.radio-group__item {
  @apply flex items-center gap-2;
}

.radio-group__input {
  @apply w-4 h-4 border border-grey-400 bg-white text-primary cursor-pointer accent-primary;
  @apply focus:ring-2 focus:ring-primary focus:ring-offset-1 focus:outline-none;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}

.radio-group__input--invalid {
  @apply border-danger-500;
}

.radio-group__label {
  @apply text-sm text-grey-800 cursor-pointer select-none;
}
</style>
