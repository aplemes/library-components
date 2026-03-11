<script setup lang="ts">
import { computed, ref } from 'vue'
import FileUploaderItem from '../../FileUploaderItem/src/index.vue'

const props = withDefaults(
  defineProps<{
    modelValue?: File[]
    accept?: string
    multiple?: boolean
    disabled?: boolean
    title?: string
    subtitle?: string
    uploadButtonLabel?: string
    deleteButtonLabel?: string
    hasDragDrop?: boolean
    showFilesList?: boolean
    maxSize?: number
    information?: string
    errorMessage?: string
  }>(),
  {
    modelValue: () => [],
    uploadButtonLabel: 'Upload',
    deleteButtonLabel: 'Delete',
    showFilesList: true,
    hasDragDrop: false,
  },
)

const emit = defineEmits<{
  'update:modelValue': [files: File[]]
  validation: [result: { valid: boolean; errors: string[] }]
}>()

const fileInput = ref<HTMLInputElement | null>(null)
const isDraggedOver = ref(false)
const dragCounter = ref(0)

const files = computed({
  get: () => props.modelValue ?? [],
  set: (v: File[]) => {
    emit('update:modelValue', v)
    validateFiles(v)
  },
})

function validateFiles(fileList: File[]) {
  const errors: string[] = []
  fileList.forEach((file) => {
    if (props.maxSize && file.size > props.maxSize) {
      errors.push(`${file.name} exceeds the maximum file size.`)
    }
  })
  emit('validation', { valid: errors.length === 0, errors })
}

function isFileValid(file: File): boolean {
  if (props.maxSize && file.size > props.maxSize) return false
  return true
}

function onChange(e: Event) {
  const input = e.target as HTMLInputElement
  const newFiles = Array.from(input.files ?? [])
  if (!newFiles.length) return

  files.value = props.multiple
    ? [...files.value, ...newFiles.filter(f => !files.value.some(existing => existing.name === f.name))]
    : [newFiles[0]]

  input.value = ''
}

function onDrop(e: DragEvent) {
  isDraggedOver.value = false
  dragCounter.value = 0
  if (props.disabled || !props.hasDragDrop) return

  const droppedFiles = Array.from(e.dataTransfer?.files ?? [])
  if (!droppedFiles.length) return

  files.value = props.multiple
    ? [...files.value, ...droppedFiles.filter(f => !files.value.some(existing => existing.name === f.name))]
    : [droppedFiles[0]]
}

function onDragEnter() {
  if (!props.hasDragDrop) return
  dragCounter.value++
  isDraggedOver.value = true
}

function onDragLeave() {
  if (!props.hasDragDrop) return
  dragCounter.value--
  if (dragCounter.value === 0) isDraggedOver.value = false
}

function onDelete(index: number) {
  files.value = files.value.filter((_, i) => i !== index)
}

function triggerInput() {
  if (!props.disabled) fileInput.value?.click()
}
</script>

<template>
  <div
    class="file-uploader"
    :class="{ 'file-uploader--draggable': hasDragDrop }"
  >
    <div
      class="file-uploader__drop-zone"
      :class="{
        'file-uploader__drop-zone--dragged': isDraggedOver,
        'file-uploader__drop-zone--disabled': disabled,
      }"
      tabindex="0"
      role="button"
      :aria-disabled="disabled"
      @drop.prevent.stop="onDrop"
      @dragenter.prevent="onDragEnter"
      @dragleave.prevent="onDragLeave"
      @dragover.prevent
      @click="triggerInput"
      @keydown.enter.prevent="triggerInput"
      @keydown.space.prevent="triggerInput"
    >
      <input
        ref="fileInput"
        type="file"
        class="file-uploader__input"
        aria-label="File input"
        :accept="accept"
        :multiple="multiple"
        :disabled="disabled"
        :aria-disabled="disabled"
        @change="onChange"
      />

      <template v-if="hasDragDrop">
        <span class="file-uploader__title">{{ title }}</span>
        <span class="file-uploader__subtitle">{{ subtitle }}</span>
      </template>

      <button
        type="button"
        class="file-uploader__btn"
        :disabled="disabled"
        @click.stop="triggerInput"
      >
        &#8679; {{ uploadButtonLabel }}
      </button>
    </div>

    <div v-if="information" class="file-uploader__information">
      <slot name="information">{{ information }}</slot>
    </div>

    <div v-if="errorMessage" class="file-uploader__error">
      <slot name="errorMessage">{{ errorMessage }}</slot>
    </div>

    <div v-if="showFilesList && files.length > 0" class="file-uploader__list">
      <FileUploaderItem
        v-for="(file, index) in files"
        :key="`${file.name}-${index}`"
        :file="file"
        :valid="isFileValid(file)"
        :information="information"
        :error-message="errorMessage"
        :delete-button-label="deleteButtonLabel"
        @delete="onDelete(index)"
      >
        <template #name="{ file: f }">
          <slot name="name" :file="f" />
        </template>
        <template #information="{ file: f }">
          <slot name="information" :file="f" />
        </template>
        <template #errorMessage>
          <slot name="errorMessage" />
        </template>
      </FileUploaderItem>
    </div>
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";

.file-uploader {
  @apply flex flex-col gap-3;
}

.file-uploader__drop-zone {
  @apply relative flex flex-col items-center gap-2 p-4 border-2 border-dashed border-grey-300 rounded-l cursor-pointer hover:border-primary transition-colors;
}

.file-uploader__drop-zone--dragged {
  @apply border-primary bg-brand-light;
}

.file-uploader__drop-zone--disabled {
  @apply opacity-50 cursor-not-allowed;
}

.file-uploader__input {
  @apply hidden;
}

.file-uploader__title {
  @apply text-sm font-medium text-grey-700;
}

.file-uploader__subtitle {
  @apply text-xs text-grey-500;
}

.file-uploader__btn {
  @apply px-4 py-2 border border-grey-300 rounded text-sm cursor-pointer bg-white hover:bg-grey-100 disabled:opacity-50 disabled:cursor-not-allowed;
}

.file-uploader__information {
  @apply text-xs text-grey-600;
}

.file-uploader__error {
  @apply text-xs text-danger-600;
}

.file-uploader__list {
  @apply flex flex-col gap-2;
}
</style>
