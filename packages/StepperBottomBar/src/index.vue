<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: number
    steps?: Array<{ label: string }>
    cancel?: boolean
    cancelLabel?: string
    previousLabel?: string
    nextLabel?: string
    validateLabel?: string
  }>(),
  {
    modelValue: 0,
    steps: () => [],
    cancel: false,
    cancelLabel: 'Cancel',
    previousLabel: 'Previous',
    nextLabel: 'Next',
    validateLabel: 'Validate',
  },
)

const emit = defineEmits<{
  cancel: []
  'update:modelValue': [value: number]
  validate: []
}>()

const currentStep = ref(props.modelValue ?? 0)

watch(() => props.modelValue, (value) => {
  if (value !== undefined) currentStep.value = value
}, { immediate: true })

watch(currentStep, (value) => {
  emit('update:modelValue', value)
})

const totalSteps = computed(() => props.steps.length)
const isFirstStep = computed(() => currentStep.value <= 0)
const isLastStep = computed(() => currentStep.value >= totalSteps.value - 1)

function onPrevious() {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

function onNext() {
  if (isLastStep.value) {
    emit('validate')
  } else {
    currentStep.value++
  }
}
</script>

<template>
  <div class="stepper-bottom-bar">
    <div class="stepper-bottom-bar__divider" />
    <div class="stepper-bottom-bar__content">
      <div class="stepper-bottom-bar__left">
        <button
          v-if="cancel"
          type="button"
          class="stepper-bottom-bar__cancel"
          @click="emit('cancel')"
        >
          {{ cancelLabel }}
        </button>
      </div>

      <div class="stepper-bottom-bar__right">
        <button
          v-if="!isFirstStep"
          type="button"
          class="stepper-bottom-bar__prev"
          @click="onPrevious"
        >
          {{ previousLabel }}
        </button>

        <button
          type="button"
          class="stepper-bottom-bar__next"
          :class="{ 'stepper-bottom-bar__next--validate': isLastStep }"
          @click="onNext"
        >
          {{ isLastStep ? validateLabel : nextLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.stepper-bottom-bar {
  @apply w-full;
}

.stepper-bottom-bar__divider {
  @apply w-full h-px bg-grey-200 mb-4;
}

.stepper-bottom-bar__content {
  @apply flex items-center justify-between px-4 py-3;
}

.stepper-bottom-bar__left {
  @apply flex items-center;
}

.stepper-bottom-bar__right {
  @apply flex items-center gap-3;
}

.stepper-bottom-bar__cancel {
  @apply text-sm text-grey-600 cursor-pointer border-none bg-transparent hover:text-grey-800;
}

.stepper-bottom-bar__prev {
  @apply px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md cursor-pointer bg-transparent hover:bg-primary-light transition-colors duration-200;
}

.stepper-bottom-bar__next {
  @apply px-4 py-2 text-sm font-medium text-white bg-primary border border-primary rounded-md cursor-pointer hover:bg-primary-dark transition-colors duration-200;
}

.stepper-bottom-bar__next--validate {
  @apply bg-primary-01-400 border-primary-01-400 hover:bg-primary-01-500;
}
</style>
