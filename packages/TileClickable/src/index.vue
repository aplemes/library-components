<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    appearance?: 'primary' | 'secondary' | 'bordered'
    bordered?: boolean
    href?: string
    to?: string
    target?: string
    iconPosition?: 'left' | 'right'
  }>(),
  {
    appearance: 'primary',
    bordered: false,
    iconPosition: 'right',
  },
)

const emit = defineEmits<{
  action: []
}>()

defineSlots<{
  default?: () => any
  icon?: () => any
}>()

const rootTag = computed(() => {
  if (props.href) return 'a'
  if (props.to) return 'router-link'
  return 'button'
})

const classes = computed(() => ({
  'tile-clickable': true,
  [`tile-clickable--${props.appearance}`]: props.appearance !== 'primary',
  'tile-clickable--bordered': props.bordered,
  'tile-clickable--icon-left': props.iconPosition === 'left',
}))
</script>

<template>
  <component
    :is="rootTag"
    :class="classes"
    :href="href"
    :to="to"
    :target="target"
    :type="rootTag === 'button' ? 'button' : undefined"
    @click="rootTag === 'button' && emit('action')"
  >
    <div v-if="$slots.icon && iconPosition === 'left'" class="tile-clickable__icon">
      <slot name="icon" />
    </div>

    <div class="tile-clickable__body">
      <slot />
    </div>

    <div v-if="$slots.icon && iconPosition === 'right'" class="tile-clickable__icon">
      <slot name="icon" />
    </div>
  </component>
</template>

<style>
@reference "@/tailwind.css";

.tile-clickable {
  @apply flex items-center gap-3 bg-white rounded-lg p-4 cursor-pointer transition-colors duration-200 hover:bg-grey-100 w-full text-left;
}

.tile-clickable--bordered {
  @apply border border-grey-300;
}

.tile-clickable--secondary {
  @apply bg-grey-100 hover:bg-grey-200;
}

.tile-clickable--icon-left {
  @apply flex-row-reverse;
}

.tile-clickable__body {
  @apply flex-1;
}

.tile-clickable__icon {
  @apply flex items-center justify-center w-6 h-6 flex-shrink-0;
}
</style>
