<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    description?: string
    divider?: boolean
    centered?: boolean
    modelValue?: string | number
    tabs: Array<{
      id?: string | number
      label: string
      disabled?: boolean
    }>
  }>(),
  {
    modelValue: 0,
    divider: false,
    centered: false,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string | number | undefined]
}>()

const currentValue = ref<string | number | undefined>(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  currentValue.value = newVal
})

const classes = computed(() => ({
  'tabs': true,
  'tabs--centered': props.centered,
}))

function isTabSelected(index: number, id?: string | number): boolean {
  const value = typeof props.modelValue === 'string' ? id : index
  return currentValue.value === value
}

function onClickTab(index: number, id?: string | number) {
  const tab = typeof props.modelValue === 'string'
    ? props.tabs.find((t) => t.id === id)
    : props.tabs[index]

  if (tab?.disabled) return

  const value = typeof props.modelValue === 'string' ? id : index
  if (value !== currentValue.value) {
    currentValue.value = value
    emit('update:modelValue', value)
  }
}
</script>

<template>
  <nav :class="classes" :aria-label="description">
    <ul role="tablist" class="tabs__list">
      <li
        v-for="(tab, index) in tabs"
        :key="`tab-${index}`"
        role="presentation"
        class="tabs__item"
      >
        <button
          role="tab"
          type="button"
          class="tabs__tab"
          :class="{
            'tabs__tab--selected': isTabSelected(index, tab.id),
            'tabs__tab--disabled': tab.disabled,
          }"
          :aria-selected="isTabSelected(index, tab.id)"
          :disabled="tab.disabled"
          @click="onClickTab(index, tab.id)"
        >
          {{ tab.label }}
        </button>
      </li>
    </ul>
    <div v-if="divider" class="tabs__divider" />
  </nav>
</template>

<style>
@reference "@/tailwind.css";

.tabs {
  @apply w-full;
}

.tabs--centered .tabs__list {
  @apply justify-center;
}

.tabs__list {
  @apply flex items-center gap-0 list-none m-0 p-0;
}

.tabs__item {
  @apply flex;
}

.tabs__tab {
  @apply px-4 py-3 text-sm font-medium cursor-pointer border-none bg-transparent text-grey-600 border-b-2 border-transparent transition-colors duration-200 hover:text-primary;
}

.tabs__tab--selected {
  @apply text-primary border-b-2 border-primary;
}

.tabs__tab--disabled {
  @apply opacity-50 cursor-not-allowed hover:text-grey-600;
}

.tabs__divider {
  @apply w-full h-px bg-grey-200;
}
</style>
