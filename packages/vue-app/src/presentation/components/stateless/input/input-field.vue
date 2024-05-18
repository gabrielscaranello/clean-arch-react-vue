<script setup lang="ts">
  import '@material/web/textfield/outlined-text-field'

  import { computed } from 'vue'

  const props = defineProps<{
    label: string
    modelValue: string
    placeholder?: string
  }>()

  const emit = defineEmits<(e: 'update:modelValue', value: string) => void>()

  const value = computed({
    get: () => props.modelValue,
    set: (value) => {
      emit('update:modelValue', value)
    }
  })
</script>

<template>
  <md-outlined-text-field :label="props.label" :placeholder="props.placeholder" v-model="value" />
</template>
