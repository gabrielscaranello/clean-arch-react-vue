<script setup lang="ts">
  import { computed } from 'vue'

  type CalloutType = 'info' | 'error'
  const icons: Record<CalloutType, string> = {
    info: 'mdi-information-outline',
    error: 'mdi-alert-circle-outline'
  }

  const props = defineProps<{
    title?: string
    type: CalloutType
    content: string
  }>()

  const icon = computed(() => icons[props.type])
</script>

<template>
  <v-alert
    :title="title"
    :text="content"
    :type="type"
    :icon="icon"
    variant="outlined"
    density="comfortable" />
</template>
