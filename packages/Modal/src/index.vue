<script setup lang="ts">
import { computed, onMounted, onUnmounted, watch, type VNode } from 'vue'

/**
 * A modal is a dialog window that appears on top of the main content, requiring user interaction before returning to the main interface.
 */
const props = withDefaults(
  defineProps<{
    /**
     * If `true`, display the modal.
     */
    open?: boolean
    /**
     * Title of the modal.
     */
    title: string
    /**
     * Description of the modal.
     */
    description?: string
    /**
     * If `true`, display the close button.
     */
    closable?: boolean
    /**
     * If `false`, lock the scroll when open.
     */
    scroll?: boolean
    /**
     * If `true`, close the modal when clicking the overlay.
     */
    closeOnOverlay?: boolean
  }>(),
  {
    closable: true,
    scroll: true,
  }
)

defineSlots<{
  /**
   * Use this slot to insert an icon next to the title of the modal.
   */
  icon?: () => VNode[]
  /**
   * Use this slot to insert the content of the modal.
   */
  default?: () => VNode[]
  /**
   * Use this slot to insert a link in the footer.
   */
  link?: () => VNode[]
  /**
   * Use this slot to insert buttons in the footer.
   */
  footer?: () => VNode[]
}>()

const classObject = computed(() => {
  return {
    'is-open': props.open,
  }
})

const isClient = typeof window !== 'undefined' && typeof document !== 'undefined'

const lockScroll = () => {
  if (!isClient) return
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
}

const unlockScroll = () => {
  if (!isClient) return
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
}

onMounted(() => {
  watch(
    () => props.open,
    (isOpen) => {
      if (props.scroll === false) {
        if (isOpen) lockScroll()
        else unlockScroll()
      }
    },
    { immediate: true }
  )
})

onUnmounted(() => {
  unlockScroll()
})

const onClickOverlay = () => {
  if (props.closeOnOverlay) {
    onClose()
  }
}

const onClose = () => {
  emit('update:open', false)
}

const emit = defineEmits<{
  /**
   * Emits when the modal display changes, updating the modelValue prop.
   */
  'update:open': [value: boolean | undefined]
}>()

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="modal-backdrop" @click="onClickOverlay">
      <section
        class="modal"
        :class="classObject"
        role="dialog"
        aria-labelledby="modalTitle"
        :aria-modal="open ? 'true' : 'false'"
        tabindex="-1"
        :aria-hidden="!open"
        v-bind="$attrs"
        @keydown.esc="onClose"
        @click.stop
      >
        <div class="modal__dialog" role="document">
          <header class="modal__header">
            <span v-if="$slots.icon" class="modal__icon">
              <slot name="icon" />
            </span>
            <h2 class="modal__title" id="modalTitle">
              {{ title }}
            </h2>
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
          <main class="modal__body">
            <p>{{ description }}</p>
            <slot />
          </main>
          <footer v-if="$slots.footer" class="modal__footer">
            <span class="modal__link">
              <slot name="link" />
            </span>
            <slot name="footer" />
          </footer>
        </div>
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

.modal__footer {
  @apply flex items-center justify-end gap-2 px-6 pb-6 pt-4 border-t border-grey-100;
}

.modal__link {
  @apply flex-1;
}
</style>
