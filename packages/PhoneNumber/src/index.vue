<script setup lang="ts">
import { ref, computed, watch } from 'vue'

type CountryEntry = { code: string; name: string; dialCode: string }

const COUNTRIES: CountryEntry[] = [
  { code: 'PT', name: 'Portugal', dialCode: '351' },
  { code: 'ES', name: 'Spain', dialCode: '34' },
  { code: 'FR', name: 'France', dialCode: '33' },
  { code: 'DE', name: 'Germany', dialCode: '49' },
  { code: 'GB', name: 'United Kingdom', dialCode: '44' },
  { code: 'US', name: 'United States', dialCode: '1' },
  { code: 'BR', name: 'Brazil', dialCode: '55' },
]

const props = withDefaults(
  defineProps<{
    id?: string
    modelValue?: string
    defaultCountry?: string
    placeholder?: string
    size?: 's' | 'm'
    isInvalid?: boolean
    disabled?: boolean
    readonly?: boolean
  }>(),
  {
    defaultCountry: 'PT',
    size: 'm',
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  valid: [isValid: boolean]
}>()

const selectedCountry = ref(props.defaultCountry)
const phoneInput = ref(props.modelValue ?? '')

const currentCountry = computed<CountryEntry>(
  () => COUNTRIES.find((c) => c.code === selectedCountry.value) ?? COUNTRIES[0]
)

const dialCode = computed(() => currentCountry.value.dialCode)

const inputClasses = computed(() => ({
  'phone-number__input--s': props.size === 's',
  'phone-number__input--invalid': props.isInvalid,
}))

const selectClasses = computed(() => ({
  'phone-number__select--s': props.size === 's',
}))

function onCountryChange() {
  emitValue()
}

function onInput(event: Event) {
  const raw = (event.target as HTMLInputElement).value
  const sanitized = raw.replace(/[^0-9+\s()\-]/g, '')
  phoneInput.value = sanitized
  emitValue()
}

function emitValue() {
  const fullNumber = phoneInput.value ? `+${dialCode.value}${phoneInput.value}` : ''
  emit('update:modelValue', fullNumber)
  // Simple validity: non-empty phone with digits
  const isValid = /^\d{5,}$/.test(phoneInput.value.replace(/[\s()\-]/g, ''))
  emit('valid', isValid)
}

watch(
  () => props.modelValue,
  (val) => {
    if (val && val !== `+${dialCode.value}${phoneInput.value}`) {
      // Strip leading +dialcode if present
      for (const country of COUNTRIES) {
        if (val.startsWith(`+${country.dialCode}`)) {
          selectedCountry.value = country.code
          phoneInput.value = val.slice(country.dialCode.length + 1)
          return
        }
      }
      phoneInput.value = val
    }
  }
)
</script>

<template>
  <div class="phone-number">
    <div class="phone-number__select-wrapper">
      <select
        v-model="selectedCountry"
        class="phone-number__select"
        :class="selectClasses"
        :disabled="disabled"
        @change="onCountryChange"
      >
        <option
          v-for="country in COUNTRIES"
          :key="country.code"
          :value="country.code"
        >
          {{ country.name }} (+{{ country.dialCode }})
        </option>
      </select>
    </div>

    <div class="phone-number__input-wrapper" :class="inputClasses">
      <span class="phone-number__prefix">+{{ dialCode }}</span>
      <input
        :id="id"
        v-model="phoneInput"
        class="phone-number__control"
        type="tel"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :aria-invalid="isInvalid || undefined"
        @input="onInput"
      />
    </div>
  </div>
</template>

<style scoped>
@reference "@/tailwind.css";

.phone-number {
  @apply flex gap-2 w-full;
}

.phone-number__select-wrapper {
  @apply flex-shrink-0;
}

.phone-number__select {
  @apply border border-neutral-300 rounded px-2 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed;
}

.phone-number__select--s {
  @apply px-1 py-1 text-xs;
}

.phone-number__input-wrapper {
  @apply flex items-center flex-1 border border-neutral-300 rounded overflow-hidden;
}

.phone-number__input-wrapper--invalid,
.phone-number__input--invalid {
  @apply border-danger-500;
}

.phone-number__prefix {
  @apply px-2 text-sm text-neutral-500 bg-neutral-50 border-r border-neutral-300 h-full flex items-center py-2;
}

.phone-number__control {
  @apply flex-1 px-3 py-2 text-sm focus:outline-none bg-white disabled:opacity-50 disabled:cursor-not-allowed;
}

.phone-number__input--s .phone-number__prefix,
.phone-number__input--s .phone-number__control {
  @apply py-1 text-xs;
}
</style>
