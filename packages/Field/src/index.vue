<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  id: string
  label: string
  requirementText?: string
  helpText?: string
  helpId?: string
  isValid?: boolean
  isInvalid?: boolean
  isLoading?: boolean
  messageId?: string
  message?: string
}>()

const validationClasses = computed(() => ({
  'field__message--valid': props.isValid,
  'field__message--invalid': props.isInvalid,
  'field__message--loading': props.isLoading,
}))

const showMessage = computed(() =>
  (props.isValid || props.isInvalid || props.isLoading) && props.message
)
</script>

<template>
  <div class="field">
    <label class="field__label" :for="id">
      {{ label }}
      <span v-if="requirementText" class="field__requirement">({{ requirementText }})</span>
    </label>

    <span v-if="helpId && helpText" :id="helpId" class="field__help">{{ helpText }}</span>

    <div class="field__content">
      <slot />
    </div>

    <span
      v-if="showMessage"
      :id="messageId"
      class="field__message"
      :class="validationClasses"
    >
      <span v-if="isLoading" class="field__spinner" aria-hidden="true" />
      {{ message }}
    </span>
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";

.field {
  @apply flex flex-col gap-1;
}

.field__label {
  @apply text-sm font-medium text-neutral-800;
}

.field__requirement {
  @apply text-neutral-500 font-normal ml-1;
}

.field__help {
  @apply text-xs text-neutral-500;
}

.field__content {
  @apply w-full;
}

.field__message {
  @apply flex items-center gap-1 text-xs;
}

.field__message--valid {
  @apply text-success-600;
}

.field__message--invalid {
  @apply text-danger-600;
}

.field__message--loading {
  @apply text-neutral-500;
}

.field__spinner {
  @apply inline-block w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin;
}
</style>
