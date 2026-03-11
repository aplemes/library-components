<script setup lang="ts">
import { computed } from 'vue'

/**
 * A radio button is a selection control that allows users to choose a single option from a list of mutually exclusive choices. Unlike checkboxes, only one option can be selected at a time within the same group.
 */
const props = defineProps<{
  /**
   * A unique identifier for the radio, used to associate the label with the form element.
   */
  id: string
  /**
   * The name attribute for the radio element, typically used for form submission.
   */
  name?: string
  /**
   * The text label displayed next to the radio.
   */
  label?: string
  /**
   * The radio's checked state, bound via v-model.
   */
  modelValue?: boolean
  /**
   * If `true`, applies an invalid state to the radio.
   */
  isInvalid?: boolean
  /**
   * If `true`, disables the radio, making it non-interactive.
   */
  disabled?: boolean
}>()

const classObject = computed(() => {
  return {
    'is-invalid': props.isInvalid,
  }
})

const emit = defineEmits<{
  /**
   * Emits when the radio value changes, updating the modelValue prop.
   */
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
      :class="classObject"
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

.radio__input.is-invalid {
  @apply border-danger-500;
}

.radio__label {
  @apply text-sm text-grey-800 cursor-pointer select-none;
}
</style>
