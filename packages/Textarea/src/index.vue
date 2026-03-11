<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    id: string
    name?: string
    modelValue?: string | number
    placeholder?: string
    isInvalid?: boolean
    disabled?: boolean
    rows?: number
    minLength?: number
    maxLength?: number
    readonly?: boolean
  }>(),
  { rows: 2 }
)

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const textareaClass = computed(() => [
  'textarea',
  props.isInvalid ? 'textarea--invalid' : null,
])

defineOptions({ inheritAttrs: false })
</script>

<template>
  <textarea
    :id="id"
    :class="textareaClass"
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

.textarea--invalid {
  @apply border-danger-500 focus:border-danger-500 focus:ring-danger-500;
}
</style>
