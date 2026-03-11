<script setup lang="ts">
import { computed, type VNode } from 'vue'

/**
 * A link is an interactive text element used to navigate between pages, sections, or external resources.
 */
const props = withDefaults(
  defineProps<{
    /**
     * Position of the icon relative to the text.
     */
    iconPosition?: 'left' | 'right'
    /**
     * Allows to define the link appearance.
     */
    appearance?: 'secondary' | 'accent' | 'inverse' | 'standard'
    /**
     * Allows to define the link size.
     */
    size?: 's' | 'm'
    /**
     * URL for the link (for external links or the `to` prop for `router-link`).
     */
    href?: string
    /**
     * Where to open the link.
     */
    target?: '_self' | '_blank' | '_parent' | '_top'
    /**
     * Specify whether the link is inline.
     */
    inline?: boolean
    /**
     * If `true`, the link will be rendered as a `router-link` for internal navigation (Vue Router).
     */
    router?: boolean
  }>(),
  {
    appearance: 'standard',
    size: 's',
    iconPosition: 'left',
  }
)

defineSlots<{
  /**
   * Use this slot to insert the textual content of the Link.
   */
  default: string
  /**
   * Use this slot to insert an icon for the Link.
   */
  icon?: () => VNode[]
}>()

const classObject = computed(() => {
  return {
    [`mc-link--${props.appearance}`]: props.appearance && props.appearance !== 'standard',
    [`mc-link--${props.size}`]: props.size && props.size !== 's',
    'mc-link--inline': props.inline,
    'mc-link--stand-alone': !props.inline,
  }
})

const linkProps = computed(() => {
  if (props.router) {
    return {
      to: props.href,
      target: props.target,
    }
  }

  return {
    href: props.href,
    target: props.target,
  }
})
</script>

<template>
  <component
    :is="router ? 'router-link' : 'a'"
    class="mc-link"
    :class="classObject"
    v-bind="linkProps"
  >
    <span
      v-if="$slots.icon && iconPosition == 'left'"
      class="mc-link__icon"
      aria-hidden="true"
    >
      <slot name="icon" />
    </span>
    <span class="mc-link__label">
      <slot />
    </span>
    <span
      v-if="$slots.icon && iconPosition == 'right'"
      class="mc-link__icon"
      aria-hidden="true"
    >
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

.mc-link--stand-alone { @apply no-underline font-medium; }

.mc-link__icon {
  @apply flex items-center justify-center w-4 h-4 flex-shrink-0;
}
</style>
