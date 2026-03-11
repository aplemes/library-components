<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    href?: string
    iconPosition?: 'left' | 'right'
    appearance?: 'standard' | 'secondary' | 'accent' | 'inverse'
    size?: 's' | 'm'
    target?: '_self' | '_blank' | '_parent' | '_top'
    inline?: boolean
    router?: boolean
  }>(),
  { appearance: 'standard', size: 's', iconPosition: 'left' }
)

const linkClass = computed(() => [
  'mc-link',
  props.appearance !== 'standard' ? `mc-link--${props.appearance}` : null,
  props.size !== 's' ? `mc-link--${props.size}` : null,
  props.inline ? 'mc-link--inline' : 'mc-link--standalone',
])

const linkProps = computed(() => {
  if (props.router) return { to: props.href, target: props.target }
  return { href: props.href, target: props.target }
})
</script>

<template>
  <component :is="router ? 'router-link' : 'a'" :class="linkClass" v-bind="linkProps">
    <span v-if="$slots.icon && iconPosition === 'left'" class="mc-link__icon" aria-hidden="true">
      <slot name="icon" />
    </span>
    <span class="mc-link__label"><slot /></span>
    <span v-if="$slots.icon && iconPosition === 'right'" class="mc-link__icon" aria-hidden="true">
      <slot name="icon" />
    </span>
  </component>
</template>

<style>
@reference "@/tailwind.css";

.mc-link {
  @apply inline-flex items-center gap-1 text-primary underline underline-offset-2 cursor-pointer transition-colors duration-200;
}

.mc-link:hover { @apply text-primary-dark; }

.mc-link--secondary { @apply text-grey-700; }
.mc-link--secondary:hover { @apply text-grey-900; }

.mc-link--accent { @apply text-primary-01-600; }
.mc-link--accent:hover { @apply text-primary-01-700; }

.mc-link--inverse { @apply text-white; }
.mc-link--inverse:hover { @apply text-grey-100; }

.mc-link--m { @apply text-base; }

.mc-link--standalone { @apply no-underline font-medium; }

.mc-link__icon {
  @apply flex items-center justify-center w-4 h-4 flex-shrink-0;
}
</style>
