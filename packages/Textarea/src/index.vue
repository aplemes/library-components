<script setup lang="ts">
import { computed } from 'vue'

/**
 * A text area is an input designed for multi-line text entry, allowing users to input longer content compared to a standard text input.
 */
const props = withDefaults(
  defineProps<{
    /**
     * A unique identifier for the textarea, used to associate the label with the form element.
     */
    id: string
    /**
     * The name attribute for the textarea element, used for form submission.
     */
    name?: string
    /**
     * The current value of the textarea field.
     */
    modelValue?: string | number
    /**
     * Text displayed when the textarea is empty.
     */
    placeholder?: string
    /**
     * If `true`, the textarea is marked as invalid.
     */
    isInvalid?: boolean
    /**
     * If `true`, the textarea is disabled and non-interactive.
     */
    disabled?: boolean
    /**
     * The number of visible text lines in the textarea.
     */
    rows?: number
    /**
     * Minimum number of characters required for the textarea.
     */
    minLength?: number
    /**
     * Maximum number of characters allowed in the textarea.
     */
    maxLength?: number
    /**
     * If `true`, the textarea is read-only (cannot be edited).
     */
    readonly?: boolean
  }>(),
  { rows: 2 }
)

const emit = defineEmits<{
  /**
   * Emits when the textarea value changes, updating the modelValue prop.
   */
  'update:modelValue': [value: string | number]
}>()

const classObject = computed(() => {
  return {
    'is-invalid': props.isInvalid,
  }
})

defineOptions({ inheritAttrs: false })
</script>

<template>
  <textarea
    :id="id"
    class="textarea"
    :class="classObject"
    :aria-invalid="isInvalid"
    :value="modelValue"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :minlength="minLength"
    :maxlength="maxLength"
    :rows="rows"
    :readonly="readonly"
    v-bind="$attrs"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style>
@reference "@/tailwind.css";

.textarea {
  @apply w-full px-3 py-2 text-sm border border-grey-300 rounded-l bg-white text-grey-900 placeholder-grey-400 transition-colors duration-200 resize-y;
  @apply focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary;
  @apply disabled:bg-grey-100 disabled:text-grey-400 disabled:cursor-not-allowed;
}

.textarea.is-invalid {
  @apply border-danger-500 focus:border-danger-500 focus:ring-danger-500;
}
</style>
