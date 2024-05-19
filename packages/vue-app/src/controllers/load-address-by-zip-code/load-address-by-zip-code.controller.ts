import { reactive } from 'vue'

import { LoadAddressByZipCodeControllerBuilder } from './types'

export const makeLoadAddressByZipCodeController: LoadAddressByZipCodeControllerBuilder = (
  controller
) => {
  const state = reactive({
    isLoading: false,
    form: { zipCode: '' }
  })

  const onSubmit = async (): Promise<void> => {
    state.isLoading = true

    try {
      await controller.handle(state.form)
    } catch (error) {
      console.error(error)
    } finally {
      state.isLoading = false
    }
  }

  return { state, onSubmit }
}
