<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    id: string
    name?: string
    modelValue?: string
    isInvalid?: boolean
    disabled?: boolean
    size?: 's' | 'm'
    readonly?: boolean
    isClearable?: boolean
    clearLabel?: string
  }>(),
  {
    size: 'm',
    clearLabel: 'Clear',
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const internalValue = ref(props.modelValue ?? '')

watch(
  () => props.modelValue,
  (val) => {
    internalValue.value = val ?? ''
  }
)

const wrapperClasses = computed(() => ({
  'date-picker--s': props.size === 's',
  'date-picker--invalid': props.isInvalid,
}))

function onInput(event: Event) {
  const val = (event.target as HTMLInputElement).value
  internalValue.value = val
  emit('update:modelValue', val)
}

function clearValue() {
  internalValue.value = ''
  emit('update:modelValue', '')
}
</script>

<template>
  <div class="date-picker" :class="wrapperClasses">
    <input
      :id="id"
      class="date-picker__control"
      type="date"
      :name="name"
      :value="internalValue"
      :disabled="disabled"
      :readonly="readonly"
      :aria-invalid="isInvalid || undefined"
      @input="onInput"
    />
    <div v-if="isClearable && internalValue" class="date-picker__clear">
      <button type="button" class="date-picker__clear-btn" @click="clearValue">
        <span aria-hidden="true">&times;</span>
        <span class="date-picker__clear-label">{{ clearLabel }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";

.date-picker {
  @apply relative inline-flex items-center w-full;
}

.date-picker__control {
  @apply w-full border border-neutral-300 rounded px-3 py-2 text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed read-only:bg-neutral-50;
}

.date-picker--s .date-picker__control {
  @apply px-2 py-1 text-xs;
}

.date-picker--invalid .date-picker__control {
  @apply border-danger-500 focus:ring-danger-500 focus:border-danger-500;
}

.date-picker__clear {
  @apply absolute right-2 flex items-center;
}

.date-picker__clear-btn {
  @apply flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-800 cursor-pointer bg-transparent border-0 p-0;
}

.date-picker__clear-label {
  @apply sr-only;
}
</style>
