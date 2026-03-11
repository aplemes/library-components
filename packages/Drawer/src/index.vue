<script setup lang="ts">
import { onMounted, onUnmounted, watch, type VNode } from 'vue'

/**
 * A drawer is a sliding panel that appears from the side of the screen,
 * providing additional content, settings, or actions without disrupting the main view.
 */
const props = withDefaults(
  defineProps<{
    /**
     * If `true`, display the drawer.
     */
    open?: boolean
    /**
     * Text displayed in the drawer header.
     */
    title: string
    /**
     * Position of the drawer (side it slides in from).
     */
    position?: 'left' | 'right'
    /**
     * When true, shows a close button and allows closing via overlay click or Escape key.
     */
    closable?: boolean
    /**
     * Maximum width size of the drawer panel.
     */
    size?: 's' | 'm' | 'l'
    /**
     * If `true`, the drawer has a bigger (extended) width.
     */
    extended?: boolean
    /**
     * If `true`, displays a back button in the header.
     */
    back?: boolean
    /**
     * Optional title displayed inside the drawer content area.
     */
    contentTitle?: string
    /**
     * If `false`, locks scroll on the body when the drawer is open.
     */
    scroll?: boolean
    /**
     * If `true`, closes the drawer when clicking the overlay backdrop.
     */
    closeOnOverlay?: boolean
  }>(),
  { position: 'right', closable: true, size: 'm', scroll: true }
)

const emit = defineEmits<{
  /**
   * Emitted when the drawer should close (backward-compatible event).
   */
  close: []
  /**
   * Emitted when the drawer open state changes (v-model compatible).
   */
  'update:open': [value: boolean]
  /**
   * Emitted when the back button is clicked.
   */
  back: []
}>()

defineSlots<{
  /**
   * Main content of the drawer body.
   */
  default?: () => VNode[]
  /**
   * Optional footer slot for action buttons.
   */
  footer?: () => VNode[]
}>()

const onClose = () => {
  emit('close')
  emit('update:open', false)
}

const onOverlayClick = () => {
  if (props.closable || props.closeOnOverlay) onClose()
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.open && props.closable) onClose()
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  // restore scroll on unmount
  document.body.style.overflow = ''
})

watch(() => props.open, (val) => {
  emit('update:open', !!val)
  if (props.scroll === false) {
    document.body.style.overflow = val ? 'hidden' : ''
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="drawer-backdrop" @click="onOverlayClick">
      <aside
        class="drawer"
        :class="[
          `drawer--${position}`,
          size !== 'm' ? `drawer--${size}` : null,
          extended ? 'drawer--extended' : null,
        ]"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="'drawer-title'"
        tabindex="-1"
        @click.stop
      >
        <header class="drawer__header">
          <button
            v-if="back"
            class="drawer__back"
            type="button"
            aria-label="Back"
            @click="emit('back')"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
          </button>
          <h2 class="drawer__title" id="drawer-title">{{ title }}</h2>
          <button
            v-if="closable"
            class="drawer__close"
            type="button"
            aria-label="Close"
            @click="onClose"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </header>
        <div class="drawer__body">
          <h3 v-if="contentTitle" class="drawer__content-title">{{ contentTitle }}</h3>
          <slot />
        </div>
        <footer v-if="$slots.footer" class="drawer__footer">
          <slot name="footer" />
        </footer>
      </aside>
    </div>
  </Teleport>
</template>

<style>
@reference "@/tailwind.css";

.drawer-backdrop {
  @apply fixed inset-0 z-50 bg-black/50;
}

.drawer {
  @apply fixed top-0 bottom-0 z-50 flex flex-col bg-white shadow-l w-full max-w-sm;
}

.drawer--right { @apply right-0; }
.drawer--left  { @apply left-0; }

.drawer--s { @apply max-w-xs; }
.drawer--l { @apply max-w-lg; }
.drawer--extended { @apply max-w-2xl; }

.drawer__header {
  @apply flex items-center justify-between px-6 py-4 border-b border-grey-100;
}

.drawer__title {
  @apply flex-1 text-lg font-semibold text-grey-900 m-0;
}

.drawer__back {
  @apply text-grey-500 hover:text-grey-800 transition-colors mr-2;
}

.drawer__close {
  @apply text-grey-500 hover:text-grey-800 transition-colors;
}

.drawer__body {
  @apply flex-1 overflow-y-auto px-6 py-4 text-sm text-grey-700;
}

.drawer__content-title {
  @apply text-base font-semibold text-grey-900 mb-3 mt-0;
}

.drawer__footer {
  @apply flex items-center justify-end gap-2 px-6 py-4 border-t border-grey-100;
}
</style>
