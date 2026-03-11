<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    bordered?: boolean
    inputType?: 'checkbox' | 'radio'
    inputPosition?: 'left' | 'right'
    centered?: boolean
    hideInput?: boolean
  }>(),
  {
    bordered: false,
    inputType: 'checkbox',
    inputPosition: 'right',
    centered: false,
    hideInput: false,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

defineSlots<{
  default?: () => any
  details?: () => any
}>()

const checked = computed({
  get() {
    return props.modelValue
  },
  set(value: boolean) {
    emit('update:modelValue', value)
  },
})

function toggle() {
  if (props.hideInput) {
    checked.value = !checked.value
  }
}
</script>

<template>
  <div
    :class="{
      'tile-selectable': true,
      'tile-selectable--selected': checked,
      'tile-selectable--bordered': bordered,
      'tile-selectable--input-left': inputPosition === 'left',
      'tile-selectable--centered': centered,
      'tile-selectable--no-input': hideInput,
    }"
    @click="toggle"
  >
    <div class="tile-selectable__body">
      <slot />
    </div>

    <div v-if="!hideInput" class="tile-selectable__action">
      <input
        v-if="inputType === 'checkbox'"
        type="checkbox"
        v-model="checked"
        class="tile-selectable__input"
        aria-label="Tile checkbox"
      />
      <input
        v-else
        type="radio"
        :checked="checked"
        class="tile-selectable__input"
        aria-label="Tile radio button"
        @change="checked = true"
      />
    </div>

    <div v-if="$slots.details" class="tile-selectable__content">
      <slot name="details" />
    </div>
  </div>
</template>

<style>
@reference "@/tailwind.css";

.tile-selectable {
  @apply flex items-center gap-3 bg-white rounded-lg p-4 cursor-pointer transition-colors duration-200;
}

.tile-selectable--bordered {
  @apply border border-grey-300;
}

.tile-selectable--selected {
  @apply border-primary bg-primary-light;
}

.tile-selectable--input-left {
  @apply flex-row-reverse;
}

.tile-selectable--centered {
  @apply items-center;
}

.tile-selectable__body {
  @apply flex-1;
}

.tile-selectable__action {
  @apply flex-shrink-0;
}

.tile-selectable__input {
  @apply w-4 h-4 cursor-pointer;
}

.tile-selectable__content {
  @apply w-full mt-2 pt-2 border-t border-grey-200;
}
</style>
