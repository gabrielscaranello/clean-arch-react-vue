<script setup lang="ts">
  import { List, ListItem } from '@vue-app/components/stateless'
  import { useAddressStore } from '@vue-app/store'

  const store = useAddressStore()
</script>

<template>
  <div class="result__container">
    <h2 class="result__title">Resultado da busca</h2>
    <List v-if="store.isLoaded">
      <ListItem title="Cidade" :content="store.address!.city" />
      <ListItem title="UF" :content="store.address!.state" />
      <ListItem title="Logradouro" :content="store.address?.street || '-'" />
      <ListItem title="Bairro" :content="store.address?.neighborhood || '-'" />
      <ListItem title="Complemento" :content="store.address?.complement || '-'" />
    </List>
  </div>
</template>
