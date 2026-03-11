<script setup lang="ts">
import { computed } from 'vue'

interface SelectOption {
  id?: string
  text: string
  value: string | number
  attributes?: Record<string, string | boolean | number>
  disabled?: boolean
}

const props = withDefaults(
  defineProps<{
    id: string
    name?: string
    options: SelectOption[]
    modelValue?: string | number
    placeholder?: string
    isInvalid?: boolean
    disabled?: boolean
    size?: 's' | 'm'
    readonly?: boolean
  }>(),
  { size: 'm' }
)

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const wrapperClass = computed(() => [
  'select',
  props.size !== 'm' ? `select--${props.size}` : null,
])

const controlClass = computed(() => [
  'select__control',
  props.isInvalid ? 'select__control--invalid' : null,
  props.readonly ? 'select__control--readonly' : null,
])

defineOptions({ inheritAttrs: false })
</script>

<template>
  <div :class="wrapperClass">
    <select
      :id="id"
      :class="controlClass"
      :name="name"
      :value="modelValue"
      :disabled="disabled"
      v-bind="$attrs"
      @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option v-if="placeholder" value="" disabled>-- {{ placeholder }} --</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        v-bind="option.attributes"
        :disabled="option.disabled"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.select {
  @apply relative inline-block w-full;
}

.select__control {
  @apply w-full px-3 py-2 text-sm border border-grey-300 rounded-l bg-white text-grey-900 transition-colors duration-200 appearance-none cursor-pointer;
  @apply focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary;
  @apply disabled:bg-grey-100 disabled:text-grey-400 disabled:cursor-not-allowed;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23808080' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
}

.select--s .select__control {
  @apply px-2 py-1 text-xs;
  padding-right: 2rem;
}

.select__control--invalid {
  @apply border-danger-500 focus:border-danger-500 focus:ring-danger-500;
}

.select__control--readonly {
  @apply pointer-events-none bg-grey-100;
}
</style>
