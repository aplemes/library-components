<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  id?: string
  legend: string
  requirementText?: string
  helpText?: string
  isValid?: boolean
  isInvalid?: boolean
  message?: string
}>()

const validationClasses = computed(() => ({
  'field-group__message--valid': props.isValid,
  'field-group__message--invalid': props.isInvalid,
}))

const showMessage = computed(() =>
  (props.isValid || props.isInvalid) && props.message
)
</script>

<template>
  <fieldset class="field-group">
    <legend class="field-group__legend">
      {{ legend }}
      <span v-if="requirementText" class="field-group__requirement">({{ requirementText }})</span>
    </legend>

    <span v-if="helpText" class="field-group__help">{{ helpText }}</span>

    <div class="field-group__content">
      <slot />
    </div>

    <span
      v-if="showMessage"
      class="field-group__message"
      :class="validationClasses"
    >
      {{ message }}
    </span>
  </fieldset>
</template>

<style scoped>
@reference "@/tailwind.css";

.field-group {
  @apply flex flex-col gap-2 border-0 p-0 m-0;
}

.field-group__legend {
  @apply text-sm font-medium text-neutral-800 mb-1;
}

.field-group__requirement {
  @apply text-neutral-500 font-normal ml-1;
}

.field-group__help {
  @apply text-xs text-neutral-500;
}

.field-group__content {
  @apply flex flex-col gap-2;
}

.field-group__message {
  @apply text-xs;
}

.field-group__message--valid {
  @apply text-success-600;
}

.field-group__message--invalid {
  @apply text-danger-600;
}
</style>
