import { makeLoadAddressByZipCode, ValidationResult } from '@core'
import { useAddressStore } from '@vue-app/store'
import { computed, reactive, ref, watch } from 'vue'

import { LoadAddressByZipCodeController, LoadAddressByZipCodeForm } from './types'

export const useLoadAddressByZipCodeController = (): LoadAddressByZipCodeController => {
  const { validator, usecase } = makeLoadAddressByZipCode()
  const store = useAddressStore()
  const form = reactive<LoadAddressByZipCodeForm>({ zipCode: '' })
  const triedSubmit = ref(false)
  const validation = ref<ValidationResult<LoadAddressByZipCodeForm>>({ isValid: true, errors: {} })

  const handleValidation = (): void => {
    validation.value = validator.validate(form)
  }

  const onSubmit = async (): Promise<void> => {
    if (!triedSubmit.value) {
      handleValidation()
      triedSubmit.value = true
      if (!validation.value.isValid) return
    }

    store.setIsLoading(true)

    try {
      const result = await usecase.load(form)
      store.setAddress(result)
    } catch (error) {
      store.setAddress()
    } finally {
      triedSubmit.value = false
      store.setIsLoading(false)
    }
  }

  const hasErrors = computed(() => triedSubmit.value && !validation.value.isValid)
  const errors = computed(() => (hasErrors.value ? validation.value.errors : {}))
  const disabledSubmit = computed(() => hasErrors.value || store.isLoading)

  watch(form, handleValidation, { deep: true })

  return { form, onSubmit, errors, disabledSubmit }
}
