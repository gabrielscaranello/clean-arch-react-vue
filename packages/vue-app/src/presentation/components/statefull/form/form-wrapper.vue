<script setup lang="ts">
  import { reactive } from 'vue'

  import { Button, Input } from '@/presentation/components/stateless'

  const form = reactive({ zipCode: '' })
  const onSubmit = async (): Promise<void> => {
    await Promise.reject(new Error('Not implemented'))
  }
</script>

<template>
  <form class="form__container" @submit.prevent="onSubmit">
    <Input
      class="form__input"
      label="CEP"
      placeholder="Insira o CEP para consultar"
      v-model="form.zipCode" />
    <Button class="form__submit" type="submit">Consultar</Button>
  </form>
</template>
