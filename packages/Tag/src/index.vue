<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    type?: 'informative' | 'interactive' | 'contextualised' | 'removable' | 'selectable'
    size?: 's' | 'm' | 'l'
    id?: string
    name?: string
    modelValue?: boolean
    disabled?: boolean
    contextualisedNumber?: number
    removableLabel?: string
  }>(),
  { type: 'informative', contextualisedNumber: 99, removableLabel: 'Remove' }
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'remove-tag': [id: string]
}>()

const tagClass = computed(() => [
  'tag',
  props.type !== 'informative' ? `tag--${props.type}` : null,
  props.size && props.size !== 'm' ? `tag--${props.size}` : null,
])
</script>

<template>
  <!-- selectable: checkbox-based -->
  <label v-if="type === 'selectable'" :for="id" :class="tagClass">
    <input
      type="checkbox"
      class="tag__input"
      :id="id"
      :name="name"
      :checked="modelValue"
      :disabled="disabled"
      v-bind="$attrs"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span class="tag__label">{{ label }}</span>
  </label>

  <!-- interactive: clickable button -->
  <button v-else-if="type === 'interactive'" type="button" :class="tagClass" :disabled="disabled" v-bind="$attrs">
    <span class="tag__label">{{ label }}</span>
  </button>

  <!-- contextualised: button with number badge -->
  <button v-else-if="type === 'contextualised'" type="button" :class="tagClass" :disabled="disabled" v-bind="$attrs">
    <span class="tag__badge">{{ contextualisedNumber }}</span>
    <span class="tag__label">{{ label }}</span>
  </button>

  <!-- removable: span with remove button -->
  <span v-else-if="type === 'removable'" :class="tagClass" v-bind="$attrs">
    <span class="tag__label">{{ label }}</span>
    <button class="tag__remove" type="button" @click="id && emit('remove-tag', id)" :aria-label="removableLabel">
      <svg class="tag__remove-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path fill="currentColor" d="M12 10.586l4.293-4.293 1.414 1.414L13.414 12l4.293 4.293-1.414 1.414L12 13.414l-4.293 4.293-1.414-1.414L10.586 12 6.293 7.707l1.414-1.414L12 10.586z"/>
      </svg>
    </button>
  </span>

  <!-- informative: default static span -->
  <span v-else :class="tagClass" v-bind="$attrs">
    <span class="tag__label">{{ label }}</span>
  </span>
</template>

<style>
@reference "@/tailwind.css";

.tag {
  @apply inline-flex items-center gap-1.5 px-2 py-1 text-sm font-medium bg-grey-100 text-grey-800 border border-grey-200;
  border-radius: var(--radius-m);
}

.tag--s {
  @apply px-1.5 py-0.5 text-xs;
}

.tag--l {
  @apply px-3 py-1.5 text-base;
}

.tag--interactive {
  @apply cursor-pointer hover:bg-grey-200 transition-colors;
}
.tag--interactive:disabled {
  @apply opacity-50 cursor-not-allowed;
}

.tag--selectable {
  @apply cursor-pointer hover:bg-grey-200 transition-colors;
}
.tag--selectable:has(.tag__input:checked) {
  @apply bg-primary-light border-primary text-primary;
}

.tag__input {
  @apply sr-only;
}

.tag__badge {
  @apply inline-flex items-center justify-center min-w-4 h-4 px-1 rounded-full bg-primary-02-700 text-white text-xs leading-none;
}

.tag__remove {
  @apply flex items-center justify-center text-grey-500 hover:text-grey-800 transition-colors;
}

.tag__remove-icon {
  @apply w-4 h-4;
}
</style>
