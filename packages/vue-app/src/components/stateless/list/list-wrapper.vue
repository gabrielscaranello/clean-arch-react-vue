<script setup lang="ts"></script>

<template>
  <v-list lines="two" class="result__list">
    <template #default>
      <slot />
    </template>
  </v-list>
</template>
