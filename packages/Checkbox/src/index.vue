<script setup lang="ts">
import { computed } from 'vue'

/**
 * A checkbox is an interactive component used to select or deselect an option, typically within a list of choices. It allows users to make multiple selections independently and is often accompanied by a label for clarity. Checkboxes are commonly used in forms, filters, settings, and preference selections to provide a simple and intuitive way to enable or disable specific options.
 */
const props = defineProps<{
  /**
   * A unique identifier for the checkbox, used to associate the label with the form element.
   */
  id: string
  /**
   * The name attribute for the checkbox element, typically used for form submission.
   */
  name?: string
  /**
   * The text label displayed next to the checkbox.
   */
  label?: string
  /**
   * The checkbox's checked state, bound via v-model.
   */
  modelValue?: boolean
  /**
   * Sets the checkbox to an indeterminate state (partially selected).
   */
  indeterminate?: boolean
  /**
   * If `true`, applies an invalid state to the checkbox.
   */
  isInvalid?: boolean
  /**
   * If `true`, disables the checkbox, making it non-interactive.
   */
  disabled?: boolean
  /**
   * If `true`, indent the checkbox.
   */
  indented?: boolean
}>()

const classObject = computed(() => {
  return {
    'is-invalid': props.isInvalid,
  }
})

const classObjectCheckbox = computed(() => {
  return {
    'checkbox--indented': props.indented,
  }
})

const emit = defineEmits<{
  /**
   * Emits when the checkbox value changes, updating the modelValue prop.
   */
  'update:modelValue': [value: boolean]
}>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <div class="checkbox" :class="classObjectCheckbox">
    <input
      :id="id"
      type="checkbox"
      class="checkbox__input"
      :class="classObject"
      :name="name"
      :checked="modelValue"
      :indeterminate="indeterminate"
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

.checkbox__input.is-invalid {
  @apply border-danger-500 accent-danger-500;
}

.checkbox__label {
  @apply text-sm text-grey-800 cursor-pointer select-none;
}
</style>
