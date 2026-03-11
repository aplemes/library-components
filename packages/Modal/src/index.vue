<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    open?: boolean
    title: string
    description?: string
    closable?: boolean
    size?: 's' | 'm' | 'l'
    /** When true, the modal body becomes scrollable */
    scroll?: boolean
    /** When true, clicking the backdrop closes the modal */
    closeOnOverlay?: boolean
  }>(),
  { closable: true, size: 'm', scroll: false, closeOnOverlay: false }
)

const emit = defineEmits<{
  close: []
  'update:open': [value: boolean]
}>()

const onClose = () => {
  emit('close')
  emit('update:open', false)
}
const onOverlayClick = () => {
  if (props.closeOnOverlay || props.closable) onClose()
}
const onKeydown = (e: KeyboardEvent) => { if (e.key === 'Escape' && props.open && props.closable) onClose() }

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))

watch(() => props.open, (val) => {
  if (!props.scroll) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="modal-backdrop" @click="onOverlayClick">
      <section
        class="modal"
        :class="size !== 'm' ? `modal--${size}` : null"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="'modal-title'"
        tabindex="-1"
        @click.stop
        @keydown.esc="onClose"
      >
        <header class="modal__header">
          <span v-if="$slots.icon" class="modal__icon"><slot name="icon" /></span>
          <h2 class="modal__title" id="modal-title">{{ title }}</h2>
          <button
            v-if="closable"
            class="modal__close"
            type="button"
            aria-label="Close"
            @click="onClose"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </header>
        <main class="modal__body" :class="{ 'modal__body--scroll': scroll }">
          <p v-if="description">{{ description }}</p>
          <slot />
        </main>
        <footer v-if="$slots.footer" class="modal__footer">
          <slot name="link" />
          <slot name="footer" />
        </footer>
      </section>
    </div>
  </Teleport>
</template>

<style>
@reference "@/tailwind.css";

.modal-backdrop {
  @apply fixed inset-0 z-50 flex items-center justify-center bg-black/50;
}

.modal {
  @apply relative bg-white rounded-l shadow-l w-full max-w-lg mx-4 max-h-screen overflow-y-auto;
}

.modal--s { @apply max-w-sm; }
.modal--l { @apply max-w-2xl; }

.modal__header {
  @apply flex items-start gap-3 px-6 pt-6 pb-4 border-b border-grey-100;
}

.modal__icon {
  @apply flex-shrink-0 w-6 h-6 text-primary;
}

.modal__title {
  @apply flex-1 text-lg font-semibold text-grey-900 m-0;
}

.modal__close {
  @apply flex-shrink-0 text-grey-500 hover:text-grey-800 transition-colors;
}

.modal__body {
  @apply px-6 py-4 text-sm text-grey-700;
}

.modal__body p { @apply m-0; }

.modal__body--scroll {
  @apply overflow-y-auto;
  max-height: 60vh;
}

.modal__footer {
  @apply flex items-center justify-end gap-2 px-6 pb-6 pt-4 border-t border-grey-100;
}
</style>
