<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{ value?: number }>(),
  { value: 0 }
)

const indicatorStyle = computed(() => ({ width: `${props.value}%` }))
</script>

<template>
  <div class="linear-percent">
    <div
      class="linear-percent__track"
      role="progressbar"
      :aria-valuenow="value"
      :aria-valuemin="0"
      :aria-valuemax="100"
      :aria-label="`Progress: ${value}%`"
      :style="indicatorStyle"
    >
      <div class="linear-percent__label">
        <span class="linear-percent__value">{{ value }}<span class="linear-percent__unit">%</span></span>
      </div>
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.linear-percent {
  @apply w-full bg-grey-200 overflow-hidden;
  height: 32px;
  border-radius: 4px;
}

.linear-percent__track {
  @apply relative h-full bg-primary flex items-center justify-end transition-all duration-300;
  min-width: 2rem;
  border-radius: 4px;
}

.linear-percent__label {
  @apply pr-2;
}

.linear-percent__value {
  @apply text-xs font-semibold text-white leading-none;
}

.linear-percent__unit {
  @apply text-xs;
}
</style>
