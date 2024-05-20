<script setup lang="ts">
  defineProps<{
    title: string
    content: string
  }>()
</script>

<template>
  <v-list-item>
    <v-list-item-title class="list-item__headline">{{ title }}</v-list-item-title>

    <v-list-item-subtitle>{{ content }}</v-list-item-subtitle>
  </v-list-item>
</template>
