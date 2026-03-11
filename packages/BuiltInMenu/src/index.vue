<script setup lang="ts">
import { computed } from 'vue'

export type MenuItem = {
  id: string
  label: string
  href?: string
  disabled?: boolean
}

const props = withDefaults(
  defineProps<{
    modelValue?: string
    items: MenuItem[]
    outlined?: boolean
  }>(),
  {
    outlined: false,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const currentItem = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emit('update:modelValue', value)
  },
})

function getItemTag(item: MenuItem) {
  if (item.href) return 'a'
  return 'button'
}

function onClickItem(item: MenuItem) {
  if (item.disabled) return
  currentItem.value = item.id
}
</script>

<template>
  <nav
    :class="{
      'built-in-menu': true,
      'built-in-menu--outlined': outlined,
    }"
    aria-label="menu"
  >
    <ul class="built-in-menu__list">
      <li
        v-for="item in items"
        :key="item.id"
        :class="{
          'built-in-menu__item': true,
          'built-in-menu__item--selected': currentItem === item.id,
          'built-in-menu__item--disabled': item.disabled,
        }"
      >
        <component
          :is="getItemTag(item)"
          class="built-in-menu__button"
          :href="item.href"
          :disabled="getItemTag(item) === 'button' && item.disabled"
          @click="onClickItem(item)"
        >
          <span class="built-in-menu__label">{{ item.label }}</span>
          <span class="built-in-menu__arrow">›</span>
        </component>
      </li>
    </ul>
  </nav>
</template>

<style>
@reference "@/tailwind.css";

.built-in-menu {
  @apply w-full;
}

.built-in-menu--outlined {
  @apply border border-grey-300 rounded-lg overflow-hidden;
}

.built-in-menu__list {
  @apply list-none m-0 p-0;
}

.built-in-menu__item {
  @apply border-b border-grey-100 last:border-b-0;
}

.built-in-menu__item--selected .built-in-menu__button {
  @apply text-primary font-medium bg-primary-light;
}

.built-in-menu__item--disabled .built-in-menu__button {
  @apply opacity-50 cursor-not-allowed;
}

.built-in-menu__button {
  @apply flex items-center justify-between w-full px-4 py-3 text-sm text-grey-700 bg-white hover:bg-grey-100 cursor-pointer border-none transition-colors duration-200 text-left;
}

.built-in-menu__label {
  @apply flex-1;
}

.built-in-menu__arrow {
  @apply text-grey-400;
}
</style>
