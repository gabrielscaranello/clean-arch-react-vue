<script setup lang="ts">
  import { computed } from 'vue'

  type CalloutType = 'info' | 'error'

  const props = defineProps<{
    title: string
    type: CalloutType
    content?: string
  }>()

  const icons: Record<CalloutType, string> = {
    info: 'info',
    error: 'error'
  }

  const className = computed(() => `callout callout__type-${props.type}`)
  const icon = computed(() => icons[props.type])
</script>

<template>
  <div :class="className">
    <md-icon class="callout__icon">{{ icon }}</md-icon>
    <div class="callout__content">
      <span class="callout__title">{{ title }}</span>
      <span v-if="content" class="callout__text">{{ content }}</span>
    </div>
  </div>
</template>
