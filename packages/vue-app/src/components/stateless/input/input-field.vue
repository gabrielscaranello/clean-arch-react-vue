<script setup lang="ts">
  import '@material/web/textfield/outlined-text-field'

  const props = defineProps<{
    label: string
    modelValue: string
    placeholder?: string
  }>()

  const emit = defineEmits<(e: 'update:modelValue', value: string) => void>()

  const onInput = (v: InputEvent): void => {
    const target = v.target as HTMLInputElement | null
    if (!target) return
    const value = target.value
    emit('update:modelValue', value)
  }
</script>

<template>
  <md-outlined-text-field
    :label="props.label"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    @input="onInput" />
</template>
