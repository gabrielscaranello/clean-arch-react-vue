<script setup lang="ts">
  import { computed } from 'vue'

  type CalloutType = 'info' | 'error'

  const props = defineProps<{
    title?: string
    type: CalloutType
    content: string
  }>()

  const className = computed(() => `callout__type-${props.type}`)
</script>

<template>
  <v-alert :class="className" :title="title" :text="content" :type="type" variant="outlined" />
</template>
