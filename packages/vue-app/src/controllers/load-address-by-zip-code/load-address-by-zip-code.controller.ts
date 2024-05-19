import { useAddressStore } from '@vue-app/store'
import { reactive } from 'vue'

import { LoadAddressByZipCodeControllerBuilder } from './types'

export const makeLoadAddressByZipCodeController: LoadAddressByZipCodeControllerBuilder = (
  controller
) => {
  const store = useAddressStore()
  const form = reactive({ zipCode: '' })

  const onSubmit = async (): Promise<void> => {
    store.setIsLoading(true)

    try {
      const result = await controller.handle(form)
      store.setAddress(result)
    } catch (error) {
      store.setAddress()
      console.error(error)
    } finally {
      store.setIsLoading(false)
    }
  }

  return { store, form, onSubmit }
}
