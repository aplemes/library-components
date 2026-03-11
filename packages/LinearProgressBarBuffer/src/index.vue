<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    value?: number
    size?: 's' | 'm' | 'l'
  }>(),
  { value: 0 }
)

defineOptions({ inheritAttrs: false })

const wrapperClass = computed(() => [
  'linear-buffer',
  props.size && props.size !== 'm' ? `linear-buffer--${props.size}` : null,
])

const indicatorStyle = computed(() => ({ width: `${props.value}%` }))
</script>

<template>
  <div :class="wrapperClass">
    <div
      class="linear-buffer__track"
      role="progressbar"
      :aria-valuenow="value"
      :aria-valuemin="0"
      :aria-valuemax="100"
      v-bind="$attrs"
    >
      <div class="linear-buffer__indicator" :style="indicatorStyle"></div>
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.linear-buffer {
  @apply w-full;
}

.linear-buffer__track {
  @apply relative w-full bg-grey-200 overflow-hidden;
  height: 6px;
  border-radius: 3px;
}

.linear-buffer--s .linear-buffer__track { height: 4px; }
.linear-buffer--l .linear-buffer__track { height: 8px; }

.linear-buffer__indicator {
  @apply absolute left-0 top-0 h-full bg-primary transition-all duration-300;
  border-radius: 3px;
}
</style>
