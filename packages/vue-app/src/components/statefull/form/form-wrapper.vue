<script setup lang="ts">
  import { Button, Input } from '@vue-app/components/stateless'
  import { useLoadAddressByZipCodeController } from '@vue-app/composition'

  const { form, onSubmit, errors, disabledSubmit } = useLoadAddressByZipCodeController()
</script>

<template>
  <form class="form__container" @submit.prevent="onSubmit">
    <Input
      class="form__input"
      label="CEP"
      placeholder="Insira o CEP para consultar"
      :error="errors.zipCode"
      v-model="form.zipCode" />
    <Button class="form__submit" type="submit" :disabled="disabledSubmit">Consultar</Button>
  </form>
</template>
