<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps<{
    label: string
    modelValue: string
    error?: string
    placeholder?: string
  }>()

  const emit = defineEmits<(e: 'update:modelValue', value: string) => void>()

  const value = computed({
    get: () => props.modelValue,
    set: (val) => {
      emit('update:modelValue', val)
    }
  })

  const erroMessages = computed(() => (props.error ? [props.error] : []))
</script>

<template>
  <v-text-field
    :label="props.label"
    :placeholder="props.placeholder"
    :error-messages="erroMessages"
    v-model="value"
    clearable
    color="primary"
    variant="outlined" />
</template>
