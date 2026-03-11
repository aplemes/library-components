<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    file: File
    valid?: boolean
    errorMessage?: string
    deleteButtonLabel?: string
    information?: string
  }>(),
  {
    valid: true,
    deleteButtonLabel: 'Delete',
  },
)

const emit = defineEmits<{
  delete: []
}>()

const isValid = computed(() => props.valid !== false)

const classes = computed(() => [
  'file-uploader-item',
  !isValid.value ? 'file-uploader-item--error' : null,
])
</script>

<template>
  <div :class="classes">
    <div class="file-uploader-item__meta">
      <span class="file-uploader-item__status-icon" aria-hidden="true">
        {{ isValid ? '✓' : '⚠' }}
      </span>
      <div class="file-uploader-item__info">
        <span class="file-uploader-item__name">
          <slot name="name">{{ file.name }}</slot>
        </span>
        <span v-if="information || $slots.information" class="file-uploader-item__information">
          <slot name="information">{{ information }}</slot>
        </span>
      </div>
      <button
        class="file-uploader-item__delete-btn"
        :aria-label="`${deleteButtonLabel} ${file.name}`"
        @click="emit('delete')"
      >
        ✕
      </button>
    </div>
    <span
      v-if="!isValid && (errorMessage || $slots.errorMessage)"
      class="file-uploader-item__error"
    >
      <slot name="errorMessage">{{ errorMessage }}</slot>
    </span>
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";

.file-uploader-item {
  @apply flex flex-col gap-1 p-3 border border-grey-200 rounded-l;
}

.file-uploader-item--error {
  @apply border-danger-500;
}

.file-uploader-item__meta {
  @apply flex items-center gap-2;
}

.file-uploader-item__status-icon {
  @apply flex-shrink-0 text-base;
}

.file-uploader-item--error .file-uploader-item__status-icon {
  @apply text-danger-500;
}

.file-uploader-item__info {
  @apply flex-1 flex flex-col min-w-0;
}

.file-uploader-item__name {
  @apply text-sm font-medium text-grey-800 truncate;
}

.file-uploader-item__information {
  @apply text-xs text-grey-600;
}

.file-uploader-item__delete-btn {
  @apply flex-shrink-0 w-6 h-6 flex items-center justify-center text-grey-500 hover:text-danger-500 bg-transparent border-0 cursor-pointer rounded transition-colors;
}

.file-uploader-item__error {
  @apply text-xs text-danger-600 pl-6;
}
</style>
