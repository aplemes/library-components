<script setup lang="ts">
import { computed } from 'vue'

/**
 * A select component allows users to choose a single option from a predefined list within a native dropdown menu.
 */
const props = withDefaults(
  defineProps<{
    /**
     * A unique identifier for the select, used to associate the label with the form element.
     */
    id: string
    /**
     * The name attribute for the select element, used for form submission.
     */
    name?: string
    /**
     * Define the available choices for the select element.
     */
    options: Array<{
      id?: string
      text: string
      value: string | number
      attributes?: Record<string, string | boolean | number>
      disabled?: boolean
    }>
    /**
     * The current value of the select.
     */
    modelValue?: string | number
    /**
     * Text displayed when the select has no selected value.
     */
    placeholder?: string
    /**
     * If `true`, the select is marked as invalid.
     */
    isInvalid?: boolean
    /**
     * If `true`, the select is disabled and non-interactive.
     */
    disabled?: boolean
    /**
     * Determines the size of the select.
     */
    size?: 's' | 'm'
    /**
     * If `true`, the select is read-only (cannot be edited).
     */
    readonly?: boolean
  }>(),
  { size: 'm' }
)

const emit = defineEmits<{
  /**
   * Emits when the select value changes, updating the modelValue prop.
   */
  'update:modelValue': [value: string | number]
}>()

const wrapperClass = computed(() => ({
  [`select--${props.size}`]: props.size && props.size !== 'm',
}))

const classObject = computed(() => {
  return {
    'select__control--readonly': props.readonly,
    'is-invalid': props.isInvalid,
  }
})

defineOptions({ inheritAttrs: false })
</script>

<template>
  <div
    :class="{
      'select': true,
      [`select--${props.size}`]: props.size && props.size !== 'm',
    }"
  >
    <select
      :id="id"
      class="select__control"
      :class="classObject"
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

.select__control.is-invalid {
  @apply border-danger-500 focus:border-danger-500 focus:ring-danger-500;
}

.select__control--readonly {
  @apply pointer-events-none bg-grey-100;
}
</style>
