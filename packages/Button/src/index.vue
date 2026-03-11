<script setup lang="ts">
defineProps<{
  label: string
  variant?: 'primary' | 'secondary' | 'ghost'
  disabled?: boolean
}>()

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <button
    :class="['btn', `btn--${variant ?? 'primary'}`]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    {{ label }}
  </button>
</template>

<style scoped>
@reference "@/tailwind.css";

.btn {
  @apply inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium cursor-pointer border-none transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn--primary {
  @apply bg-primary text-white hover:bg-primary-dark;
}

.btn--secondary {
  @apply bg-transparent text-primary border border-primary hover:bg-primary-light;
}

.btn--ghost {
  @apply bg-transparent text-primary hover:bg-primary-light;
}
</style>
