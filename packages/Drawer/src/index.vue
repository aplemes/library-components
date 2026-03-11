<script setup lang="ts">
import { computed, watch, type VNode, ref, onMounted, onUnmounted } from 'vue'

/**
 * A drawer is a sliding panel that appears from the side of the screen, providing additional content, settings, or actions without disrupting the main view.
 */
const props = withDefaults(
  defineProps<{
    /**
     * If `true`, display the drawer.
     */
    open?: boolean
    /**
     * Position of the drawer.
     */
    position?: 'left' | 'right'
    /**
     * If `true`, the drawer has a bigger width.
     */
    extended?: boolean
    /**
     * If `true`, display the back button.
     */
    back?: boolean
    /**
     * Title of the drawer.
     */
    title: string
    /**
     * Title of the content of the drawer.
     */
    contentTitle?: string
    /**
     * If `false`, lock the scroll when open.
     */
    scroll?: boolean
    /**
     * If `true`, close the drawer when clicking the overlay.
     */
    closeOnOverlay?: boolean
  }>(),
  {
    scroll: true,
  }
)

defineSlots<{
  /**
   * Use this slot to insert the content of the drawer
   */
  default?: () => VNode[]
  /**
   * Use this slot to insert buttons in the footer
   */
  footer?: () => VNode[]
}>()

const classObject = computed(() => {
  return {
    'is-open': props.open,
    'drawer--extend': props.extended,
    [`drawer--${props.position}`]: props.position && props.position !== 'right',
  }
})

const titleRef = ref<HTMLElement | null>(null)
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
      if (isOpen && titleRef.value) {
        titleRef.value.focus()
      }
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
   * Emits when the drawer open state changes, updating the modelValue prop.
   */
  'update:open': [value: boolean | undefined]
  /**
   * Emits when click back button of the drawer.
   */
  'back': []
}>()

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="drawer-backdrop" @click="onClickOverlay">
      <section
        class="drawer"
        :class="classObject"
        role="dialog"
        aria-labelledby="drawerTitle"
        :aria-modal="open ? 'true' : 'false'"
        tabindex="-1"
        :aria-hidden="!open"
        v-bind="$attrs"
        @keydown.esc="onClose"
        @click.stop
      >
        <div class="drawer__dialog" role="document">
          <div class="drawer__header">
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
            <h2
              class="drawer__title"
              tabindex="-1"
              id="drawerTitle"
              ref="titleRef"
            >
              {{ title }}
            </h2>
            <button
              class="drawer__close"
              type="button"
              aria-label="Close"
              @click="onClose"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
          <div class="drawer__body">
            <div class="drawer__content" tabindex="0">
              <h2 v-if="contentTitle" class="drawer__content-title">{{ contentTitle }}</h2>
              <slot />
            </div>
          </div>
          <div v-if="$slots.footer" class="drawer__footer">
            <slot name="footer" />
          </div>
        </div>
      </section>
    </div>
  </Teleport>
</template>

<style>
@reference "@/tailwind.css";

.drawer-backdrop {
  @apply fixed inset-0 z-50 bg-black/50;
}

.drawer {
  @apply fixed top-0 bottom-0 right-0 z-50 flex flex-col bg-white shadow-l w-full max-w-sm;
}

.drawer--left {
  @apply left-0 right-auto;
}

.drawer--extend {
  @apply max-w-lg;
}

.drawer__header {
  @apply flex items-center justify-between px-6 py-4 border-b border-grey-100;
}

.drawer__title {
  @apply flex-1 text-lg font-semibold text-grey-900 m-0;
}

.drawer__back,
.drawer__close {
  @apply text-grey-500 hover:text-grey-800 transition-colors flex-shrink-0;
}

.drawer__body {
  @apply flex-1 overflow-y-auto;
}

.drawer__content {
  @apply px-6 py-4 text-sm text-grey-700;
}

.drawer__content-title {
  @apply text-base font-semibold text-grey-900 mb-4;
}

.drawer__footer {
  @apply flex items-center justify-end gap-2 px-6 py-4 border-t border-grey-100;
}
</style>
