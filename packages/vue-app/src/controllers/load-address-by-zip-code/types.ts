import { LoadAddressByZipCodeController as CoreLoadAddressByZipCodeController } from '@core'
import { useAddressStore } from '@vue-app/store'

interface Form {
  zipCode: string
}

export interface LoadAddressByZipCodeController {
  onSubmit: () => Promise<void>
  form: Form
  store: ReturnType<typeof useAddressStore>
}

export type LoadAddressByZipCodeControllerBuilder = (
  controller: CoreLoadAddressByZipCodeController
) => LoadAddressByZipCodeController
