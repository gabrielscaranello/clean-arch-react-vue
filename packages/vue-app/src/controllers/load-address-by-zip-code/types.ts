import { LoadAddressByZipCodeController as CoreLoadAddressByZipCodeController } from '@core'

interface Form {
  zipCode: string
}

interface State {
  isLoading: boolean
  form: Form
}

export interface LoadAddressByZipCodeController {
  onSubmit: () => Promise<void>
  state: State
}

export type LoadAddressByZipCodeControllerBuilder = (
  controller: CoreLoadAddressByZipCodeController
) => LoadAddressByZipCodeController
