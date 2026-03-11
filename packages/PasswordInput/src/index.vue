<script setup lang="ts">
import { computed, ref } from 'vue'

/**
 * A password input is a specialized input field used to securely enter and manage passwords.
 */
const props = withDefaults(
  defineProps<{
    /**
     * A unique identifier for the password input element, used to associate the label with the form element.
     */
    id: string
    /**
     * The name attribute for the password input element, typically used for form submission.
     */
    name?: string
    /**
     * The current value of the password input field.
     */
    modelValue?: string | number
    /**
     * A placeholder text to show in the password input when it is empty.
     */
    placeholder?: string
    /**
     * If `true`, applies an invalid state to the password input.
     */
    isInvalid?: boolean
    /**
     * If `true`, disables the password input, making it non-interactive.
     */
    disabled?: boolean
    /**
     * If `true`, the password input is read-only (cannot be edited).
     */
    readonly?: boolean
    /**
     * If `true`, a clear button will appear when the password input has a value.
     */
    isClearable?: boolean
    /**
     * The label text for the clear button.
     */
    clearLabel?: string
    /**
     * Labels of the button displayed when showing or hiding the password.
     */
    buttonLabel?: {
      show: string
      hide: string
    }
  }>(),
  {
    clearLabel: 'Clear content',
    buttonLabel: () => ({ show: 'Show', hide: 'Hide' }),
  }
)

const classObject = computed(() => ({
  'is-invalid': props.isInvalid,
}))

const modelValue = ref(props.modelValue)
const isVisible = ref(false)

const clearValue = () => {
  modelValue.value = ''
  emit('update:modelValue', '')
}

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}

const inputType = computed(() => (isVisible.value ? 'text' : 'password'))

const ariaChecked = computed(() => (isVisible.value ? 'true' : 'false'))

const emit = defineEmits<{
  /**
   * Emits when the input value changes, updating the `modelValue` prop.
   */
  'update:modelValue': [value: string | number]
}>()

defineOptions({ inheritAttrs: false })
</script>

<template>
  <div class="pwd-input" :class="classObject">
    <input
      class="pwd-input__control"
      :id="id"
      :type="inputType"
      :name="name"
      :value="props.modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-invalid="isInvalid"
      :readonly="readonly"
      v-bind="$attrs"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <div v-if="isClearable && props.modelValue" class="pwd-input__controls">
      <button class="pwd-input__clear" @click="clearValue">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
        </svg>
        <span class="pwd-input__clear-label">{{ clearLabel }}</span>
      </button>
    </div>
    <button
      type="button"
      class="pwd-input__toggle"
      role="switch"
      :aria-checked="ariaChecked"
      :disabled="disabled"
      @click="toggleVisibility"
    >
      {{ isVisible ? buttonLabel?.hide : buttonLabel?.show }}
    </button>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.pwd-input {
  @apply relative flex items-center border border-grey-300 rounded-l bg-white transition-colors duration-200;
  @apply focus-within:border-primary focus-within:ring-1 focus-within:ring-primary;
}

.pwd-input.is-invalid {
  @apply border-danger-500 focus-within:border-danger-500 focus-within:ring-danger-500;
}

.pwd-input__control {
  @apply flex-1 px-3 py-2 text-sm bg-transparent text-grey-900 placeholder-grey-400 border-none outline-none;
  @apply disabled:text-grey-400 disabled:cursor-not-allowed;
}

.pwd-input__controls {
  @apply flex items-center pr-1 flex-shrink-0;
}

.pwd-input__clear {
  @apply flex items-center gap-1 text-grey-400 hover:text-grey-600 transition-colors bg-transparent border-none cursor-pointer p-0;
}

.pwd-input__clear-label {
  @apply sr-only text-xs;
}

.pwd-input__toggle {
  @apply px-2 py-1 text-xs font-medium text-primary hover:text-primary-dark transition-colors bg-transparent border-none cursor-pointer;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}
</style>
