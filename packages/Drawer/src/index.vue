<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    open?: boolean
    title: string
    position?: 'left' | 'right'
    closable?: boolean
    size?: 's' | 'm' | 'l'
  }>(),
  { position: 'right', closable: true, size: 'm' }
)

const emit = defineEmits<{ close: [] }>()

const onClose = () => emit('close')
const onOverlayClick = () => { if (props.closable) onClose() }
const onKeydown = (e: KeyboardEvent) => { if (e.key === 'Escape' && props.open && props.closable) onClose() }

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))

watch(() => props.open, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="drawer-backdrop" @click="onOverlayClick">
      <aside
        class="drawer"
        :class="[`drawer--${position}`, size !== 'm' ? `drawer--${size}` : null]"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="'drawer-title'"
        tabindex="-1"
        @click.stop
      >
        <header class="drawer__header">
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

.drawer__header {
  @apply flex items-center justify-between px-6 py-4 border-b border-grey-100;
}

.drawer__title {
  @apply text-lg font-semibold text-grey-900 m-0;
}

.drawer__close {
  @apply text-grey-500 hover:text-grey-800 transition-colors;
}

.drawer__body {
  @apply flex-1 overflow-y-auto px-6 py-4 text-sm text-grey-700;
}

.drawer__footer {
  @apply flex items-center justify-end gap-2 px-6 py-4 border-t border-grey-100;
}
</style>
