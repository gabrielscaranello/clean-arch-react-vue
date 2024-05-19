<script setup lang="ts">
  import '@material/web/list/list-item'

  defineProps<{
    title: string
    content: string
  }>()
</script>

<template>
  <md-list-item>
    <div slot="headline">
      {{ title }}
    </div>
    <div slot="supporting-text">
      {{ content }}
    </div>
  </md-list-item>
</template>
