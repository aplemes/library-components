<script setup lang="ts">
import { computed } from 'vue'

type CheckListMenuItem = {
  id: string
  label: string
  disabled?: boolean
}

const props = withDefaults(
  defineProps<{
    modelValue?: string[]
    items: CheckListMenuItem[]
    outlined?: boolean
  }>(),
  {
    outlined: false,
    modelValue: () => [],
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
}>()

const selectedIds = computed({
  get() {
    return props.modelValue ?? []
  },
  set(value: string[]) {
    emit('update:modelValue', value)
  },
})

function isChecked(id: string) {
  return selectedIds.value.includes(id)
}

function onClickItem(item: CheckListMenuItem) {
  if (item.disabled) return
  const current = [...selectedIds.value]
  const idx = current.indexOf(item.id)
  if (idx === -1) {
    current.push(item.id)
  } else {
    current.splice(idx, 1)
  }
  selectedIds.value = current
}
</script>

<template>
  <nav
    :class="{
      'check-list-menu': true,
      'check-list-menu--outlined': outlined,
    }"
    aria-label="checklist menu"
  >
    <ul class="check-list-menu__list">
      <li
        v-for="item in items"
        :key="item.id"
        :class="{
          'check-list-menu__item': true,
          'check-list-menu__item--checked': isChecked(item.id),
          'check-list-menu__item--disabled': item.disabled,
        }"
      >
        <button
          type="button"
          class="check-list-menu__button"
          :disabled="item.disabled"
          @click="onClickItem(item)"
        >
          <span class="check-list-menu__check">{{ isChecked(item.id) ? '✓' : '' }}</span>
          <span class="check-list-menu__label">{{ item.label }}</span>
          <span class="check-list-menu__arrow">›</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style>
@reference "@/tailwind.css";

.check-list-menu {
  @apply w-full;
}

.check-list-menu--outlined {
  @apply border border-grey-300 rounded-lg overflow-hidden;
}

.check-list-menu__list {
  @apply list-none m-0 p-0;
}

.check-list-menu__item {
  @apply border-b border-grey-100 last:border-b-0;
}

.check-list-menu__item--checked .check-list-menu__button {
  @apply text-primary font-medium;
}

.check-list-menu__item--disabled .check-list-menu__button {
  @apply opacity-50 cursor-not-allowed;
}

.check-list-menu__button {
  @apply flex items-center gap-3 w-full px-4 py-3 text-sm text-grey-700 bg-white hover:bg-grey-100 cursor-pointer border-none transition-colors duration-200 text-left;
}

.check-list-menu__check {
  @apply w-4 text-primary font-bold;
}

.check-list-menu__label {
  @apply flex-1;
}

.check-list-menu__arrow {
  @apply text-grey-400;
}
</style>
