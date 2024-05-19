<script setup lang="ts">
  import { Callout, List, ListItem, Progress } from '@vue-app/components/stateless'
  import { useAddressStore } from '@vue-app/store'

  const store = useAddressStore()
</script>

<template>
  <div class="result__container">
    <template v-if="!store.hasError">
      <h2 class="result__title">Resultado da busca</h2>
      <Progress v-if="store.isLoading" />
      <List v-else-if="store.isLoaded">
        <ListItem title="Cidade" :content="store.address!.city" />
        <ListItem title="UF" :content="store.address!.state" />
        <ListItem title="Logradouro" :content="store.address?.street || '-'" />
        <ListItem title="Bairro" :content="store.address?.neighborhood || '-'" />
        <ListItem title="Complemento" :content="store.address?.complement || '-'" />
      </List>
      <Callout title="Faça uma busca para ver o resultado." type="info" v-else />
    </template>
    <template v-else>
      <Callout
        title="Algo deu errado."
        content="Aconteceu um erro ao buscar o endereço. Tente novamente."
        type="error" />
    </template>
  </div>
</template>
