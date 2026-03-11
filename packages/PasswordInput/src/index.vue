<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    id: string
    name?: string
    modelValue?: string | number
    placeholder?: string
    isInvalid?: boolean
    disabled?: boolean
    readonly?: boolean
    isClearable?: boolean
    clearLabel?: string
    showLabel?: string
    hideLabel?: string
  }>(),
  { clearLabel: 'Clear', showLabel: 'Show', hideLabel: 'Hide' }
)

const emit = defineEmits<{ 'update:modelValue': [value: string | number] }>()
defineOptions({ inheritAttrs: false })

const isVisible = ref(false)
const inputType = computed(() => isVisible.value ? 'text' : 'password')
const toggleVisibility = () => { isVisible.value = !isVisible.value }
const clearValue = () => emit('update:modelValue', '')
const inputClass = computed(() => ['pwd-input', props.isInvalid ? 'pwd-input--invalid' : null])
</script>

<template>
  <div :class="inputClass" class="pwd-input__wrapper">
    <input
      :id="id"
      class="pwd-input__control"
      :type="inputType"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :aria-invalid="isInvalid"
      v-bind="$attrs"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <div class="pwd-input__actions">
      <button
        v-if="isClearable && modelValue"
        type="button"
        class="pwd-input__clear"
        :aria-label="clearLabel"
        @click="clearValue"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
        </svg>
      </button>
      <button
        type="button"
        class="pwd-input__toggle"
        :aria-pressed="isVisible"
        :disabled="disabled"
        @click="toggleVisibility"
      >
        {{ isVisible ? hideLabel : showLabel }}
      </button>
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.pwd-input__wrapper {
  @apply relative flex items-center;
}

.pwd-input__control {
  @apply w-full px-3 py-2 pr-24 text-sm border border-grey-300 rounded-l bg-white text-grey-900 placeholder-grey-400 transition-colors duration-200;
  @apply focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary;
  @apply disabled:bg-grey-100 disabled:text-grey-400 disabled:cursor-not-allowed;
}

.pwd-input--invalid .pwd-input__control {
  @apply border-danger-500 focus:border-danger-500 focus:ring-danger-500;
}

.pwd-input__actions {
  @apply absolute right-0 flex items-center gap-1 pr-2;
}

.pwd-input__clear {
  @apply flex items-center justify-center text-grey-400 hover:text-grey-600 transition-colors;
}

.pwd-input__toggle {
  @apply px-2 py-1 text-xs font-medium text-primary hover:text-primary-dark transition-colors;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}
</style>
