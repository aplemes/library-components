<script setup lang="ts">
const props = defineProps<{
  id: string
  name?: string
  label?: string
  modelValue?: boolean
  isInvalid?: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <div class="radio">
    <input
      :id="id"
      type="radio"
      class="radio__input"
      :class="{ 'radio__input--invalid': isInvalid }"
      :name="name"
      :checked="modelValue"
      :disabled="disabled"
      :aria-invalid="isInvalid"
      v-bind="$attrs"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <label v-if="label" :for="id" class="radio__label">{{ label }}</label>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.radio {
  @apply flex items-center gap-2;
}

.radio__input {
  @apply w-4 h-4 border border-grey-400 bg-white text-primary cursor-pointer accent-primary;
  @apply focus:ring-2 focus:ring-primary focus:ring-offset-1 focus:outline-none;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}

.radio__input--invalid {
  @apply border-danger-500;
}

.radio__label {
  @apply text-sm text-grey-800 cursor-pointer select-none;
}
</style>
