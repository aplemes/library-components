<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    id: string
    name?: string
    label?: string
    modelValue?: boolean
    size?: 's' | 'm'
    disabled?: boolean
  }>(),
  { size: 's' }
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const wrapperClass = computed(() => [
  'toggle',
  props.size !== 's' ? `toggle--${props.size}` : null,
])

defineOptions({ inheritAttrs: false })
</script>

<template>
  <div :class="wrapperClass">
    <label class="toggle__container" :for="id">
      <input
        :id="id"
        type="checkbox"
        class="toggle__input"
        :name="name"
        :checked="modelValue"
        :disabled="disabled"
        v-bind="$attrs"
        @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
      />
      <span class="toggle__track" aria-hidden="true">
        <span class="toggle__thumb"></span>
      </span>
      <span v-if="label" class="toggle__label">{{ label }}</span>
    </label>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.toggle__container {
  @apply inline-flex items-center gap-2 cursor-pointer select-none;
}

.toggle__input {
  @apply sr-only;
}

.toggle__track {
  @apply relative inline-flex items-center w-10 h-6 rounded-full bg-grey-300 transition-colors duration-200;
}

.toggle--m .toggle__track {
  @apply w-12 h-7;
}

.toggle__input:checked + .toggle__track {
  @apply bg-primary;
}

.toggle__input:disabled + .toggle__track {
  @apply opacity-50 cursor-not-allowed;
}

.toggle__thumb {
  @apply absolute left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200;
}

.toggle__input:checked + .toggle__track .toggle__thumb {
  @apply translate-x-4;
}

.toggle--m .toggle__thumb {
  @apply w-6 h-6;
}

.toggle--m .toggle__input:checked + .toggle__track .toggle__thumb {
  @apply translate-x-5;
}

.toggle__label {
  @apply text-sm text-grey-800;
}

.toggle__input:disabled ~ .toggle__label {
  @apply opacity-50 cursor-not-allowed;
}
</style>
