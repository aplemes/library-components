<script setup lang="ts">
const props = defineProps<{
  id: string
  name?: string
  label?: string
  modelValue?: boolean
  indeterminate?: boolean
  isInvalid?: boolean
  disabled?: boolean
  indented?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <div :class="['checkbox', indented && 'checkbox--indented']">
    <input
      :id="id"
      type="checkbox"
      class="checkbox__input"
      :class="{ 'checkbox__input--invalid': isInvalid }"
      :name="name"
      :checked="modelValue"
      :disabled="disabled"
      :aria-invalid="isInvalid"
      v-bind="$attrs"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <label v-if="label" :for="id" class="checkbox__label">{{ label }}</label>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.checkbox {
  @apply flex items-center gap-2;
}

.checkbox--indented {
  @apply pl-6;
}

.checkbox__input {
  @apply w-4 h-4 rounded-s border border-grey-400 bg-white text-primary cursor-pointer accent-primary;
  @apply focus:ring-2 focus:ring-primary focus:ring-offset-1 focus:outline-none;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}

.checkbox__input--invalid {
  @apply border-danger-500 accent-danger-500;
}

.checkbox__label {
  @apply text-sm text-grey-800 cursor-pointer select-none;
}
</style>
