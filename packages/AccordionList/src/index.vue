<script setup lang="ts">
import { computed, provide, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    appearance?: 'primary' | 'bordered'
    behavior?: 'single' | 'multiple'
    modelValue?: string | string[]
  }>(),
  {
    behavior: 'single',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string | string[]]
}>()

const internalOpen = ref<string[]>([])

const openIds = computed<string[]>({
  get() {
    if (props.modelValue === undefined) return internalOpen.value
    if (Array.isArray(props.modelValue)) return props.modelValue
    return props.modelValue ? [props.modelValue] : []
  },
  set(value: string[]) {
    internalOpen.value = value
    if (props.behavior === 'single') {
      emit('update:modelValue', value[0] ?? '')
    } else {
      emit('update:modelValue', value)
    }
  },
})

function toggleItem(id: string) {
  if (props.behavior === 'single') {
    openIds.value = openIds.value[0] === id ? [] : [id]
  } else {
    const set = new Set(openIds.value)
    if (openIds.value.includes(id)) {
      set.delete(id)
    } else {
      set.add(id)
    }
    openIds.value = [...set]
  }
}

provide('accordionOpenIds', openIds)
provide('accordionToggle', toggleItem)

const classes = computed(() => [
  'accordion-list',
  props.appearance ? `accordion-list--${props.appearance}` : null,
])
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";

.accordion-list {
  @apply w-full divide-y divide-grey-200 border border-grey-200 rounded-l;
}

.accordion-list--bordered {
  @apply border-2 border-primary rounded-l;
}
</style>
