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
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s, opacity 0.2s;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn--primary {
  background-color: #007a3e;
  color: #ffffff;
}

.btn--primary:hover:not(:disabled) {
  background-color: #005f30;
}

.btn--secondary {
  background-color: transparent;
  color: #007a3e;
  border: 1px solid #007a3e;
}

.btn--secondary:hover:not(:disabled) {
  background-color: #f0faf5;
}

.btn--ghost {
  background-color: transparent;
  color: #007a3e;
}

.btn--ghost:hover:not(:disabled) {
  background-color: #f0faf5;
}
</style>
