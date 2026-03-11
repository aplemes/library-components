<script setup lang="ts">
import { ref, watch, nextTick, type ComponentPublicInstance } from 'vue'

const props = withDefaults(
  defineProps<{
    id: string
    name?: string
    length?: number
    modelValue?: string
    isInvalid?: boolean
    disabled?: boolean
    readonly?: boolean
  }>(),
  {
    length: 4,
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const digits = ref<string[]>(Array(props.length).fill(''))
const inputRefs = ref<(HTMLInputElement | null)[]>([])

function setRef(el: Element | ComponentPublicInstance | null, index: number) {
  inputRefs.value[index] = el as HTMLInputElement | null
}

watch(
  () => props.modelValue,
  (val) => {
    const str = String(val ?? '')
    digits.value = Array.from({ length: props.length }, (_, i) => str[i] ?? '')
  },
  { immediate: true }
)

function focusInput(index: number) {
  nextTick(() => inputRefs.value[index]?.focus())
}

function onInput(event: Event, index: number) {
  const raw = (event.target as HTMLInputElement).value
  const numeric = raw.replace(/\D/g, '')
  if (numeric) {
    digits.value[index] = numeric[0]
    emit('update:modelValue', digits.value.join(''))
    if (index + 1 < props.length) focusInput(index + 1)
  } else {
    digits.value[index] = ''
    emit('update:modelValue', digits.value.join(''))
  }
}

function onKeyDown(event: KeyboardEvent, index: number) {
  if (event.key === 'Backspace') {
    if (digits.value[index] === '' && index > 0) {
      digits.value[index - 1] = ''
      emit('update:modelValue', digits.value.join(''))
      focusInput(index - 1)
    }
  } else if (event.key === 'ArrowLeft' && index > 0) {
    focusInput(index - 1)
  } else if (event.key === 'ArrowRight' && index < props.length - 1) {
    focusInput(index + 1)
  }
}

function onPaste(event: ClipboardEvent) {
  event.preventDefault()
  const pasted = event.clipboardData?.getData('text') ?? ''
  const numeric = pasted.replace(/\D/g, '').slice(0, props.length)
  digits.value = Array.from({ length: props.length }, (_, i) => numeric[i] ?? '')
  emit('update:modelValue', digits.value.join(''))
  focusInput(Math.min(numeric.length, props.length - 1))
}
</script>

<template>
  <div class="pin-code" @paste="onPaste">
    <input
      v-for="(digit, index) in digits"
      :key="index"
      :ref="(el) => setRef(el, index)"
      :id="`${id}-${index}`"
      :name="name || `pin-${id}-${index}`"
      class="pin-code__input"
      :class="{ 'pin-code__input--invalid': isInvalid }"
      type="text"
      inputmode="numeric"
      maxlength="1"
      pattern="\d*"
      autocomplete="one-time-code"
      :value="digit"
      :disabled="disabled"
      :readonly="readonly"
      @input="(e) => onInput(e, index)"
      @keydown="(e) => onKeyDown(e, index)"
    />
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";

.pin-code {
  @apply flex gap-2;
}

.pin-code__input {
  @apply w-12 h-12 text-center text-lg font-medium border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed;
}

.pin-code__input--invalid {
  @apply border-danger-500 focus:ring-danger-500 focus:border-danger-500;
}
</style>
