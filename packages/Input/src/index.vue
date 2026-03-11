<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: string | number
    label?: string
    placeholder?: string
    disabled?: boolean
    error?: string
    type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'date'
    id?: string
    name?: string
    readonly?: boolean
    size?: 's' | 'm'
    prefix?: string
    suffix?: string
  }>(),
  {
    type: 'text',
    size: 'm',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const inputClasses = computed(() => [
  'input__control',
  props.size === 's' ? 'input__control--s' : null,
  props.error ? 'input__control--invalid' : null,
])

const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="input">
    <label v-if="label" :for="id" class="input__label">{{ label }}</label>

    <div class="input__wrapper">
      <span v-if="$slots.icon" class="input__icon">
        <slot name="icon" />
      </span>

      <span v-if="prefix" class="input__addon">{{ prefix }}</span>

      <input
        :id="id"
        :class="inputClasses"
        :value="modelValue"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :aria-invalid="!!error"
        v-bind="$attrs"
        @input="onInput"
      />

      <span v-if="suffix" class="input__addon">{{ suffix }}</span>
    </div>

    <span v-if="error" class="input__error">{{ error }}</span>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.input {
  @apply flex flex-col gap-1;
}

.input__label {
  @apply text-sm font-medium text-grey-700;
}

.input__wrapper {
  @apply relative flex items-center;
}

.input__icon {
  @apply absolute left-3 flex items-center justify-center w-4 h-4 text-grey-500 pointer-events-none;
}

.input__addon {
  @apply flex items-center px-3 py-2 bg-grey-100 border border-grey-300 text-grey-600 text-sm;
}

.input__addon:first-child {
  @apply rounded-l border-r-0;
}

.input__addon:last-child {
  @apply rounded-r border-l-0;
}

.input__control {
  @apply w-full px-3 py-2 text-sm border border-grey-300 rounded-l bg-white text-grey-900 placeholder-grey-400 transition-colors duration-200;
  @apply focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary;
  @apply disabled:bg-grey-100 disabled:text-grey-400 disabled:cursor-not-allowed;
}

.input__control--s {
  @apply px-2 py-1 text-xs;
}

.input__control--invalid {
  @apply border-danger-500 focus:border-danger-500 focus:ring-danger-500;
}

.input__error {
  @apply text-xs text-danger-500;
}
</style>
