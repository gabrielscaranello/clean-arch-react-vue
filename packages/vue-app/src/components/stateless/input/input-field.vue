<script setup lang="ts">
  import '@material/web/textfield/outlined-text-field'
  import '@material/web/iconbutton/icon-button'
  import '@material/web/icon/icon'

  const props = defineProps<{
    label: string
    modelValue: string
    error?: string
    placeholder?: string
  }>()

  const emit = defineEmits<(e: 'update:modelValue', value: string) => void>()

  const onInput = (v: InputEvent): void => {
    const target = v.target as HTMLInputElement | null
    if (!target) return
    const value = target.value
    emit('update:modelValue', value)
  }

  const onClear = (): void => {
    emit('update:modelValue', '')
  }
</script>

<template>
  <md-outlined-text-field
    :label="props.label"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    :error="!!props.error"
    :error-text="props.error"
    @input="onInput">
    <md-icon-button @click.prevent="onClear" v-if="props.modelValue" slot="trailing-icon">
      <md-icon>close</md-icon>
    </md-icon-button>
  </md-outlined-text-field>
</template>
