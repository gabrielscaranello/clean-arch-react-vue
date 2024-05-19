<script setup lang="ts">
  import { Button, Input } from '@/components/stateless'
  import { useLoadAddressByZipCodeController } from '@/composition'

  const { state, onSubmit } = useLoadAddressByZipCodeController()
</script>

<template>
  <form class="form__container" @submit.prevent="onSubmit">
    <Input
      class="form__input"
      label="CEP"
      placeholder="Insira o CEP para consultar"
      v-model="state.form.zipCode" />
    <Button class="form__submit" type="submit">Consultar</Button>
  </form>
</template>
