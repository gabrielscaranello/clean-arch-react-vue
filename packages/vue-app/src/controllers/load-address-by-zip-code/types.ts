import {
  LoadAddressByZipCodeController as CoreLoadAddressByZipCodeController,
  Validation,
  ValidationErrors
} from '@core'
import { ComputedRef } from 'vue'

export interface LoadAddressByZipCodeForm {
  zipCode: string
}

export interface LoadAddressByZipCodeController {
  onSubmit: () => Promise<void>
  form: LoadAddressByZipCodeForm
  disabledSubmit: ComputedRef<boolean>
  errors: ComputedRef<ValidationErrors<LoadAddressByZipCodeForm>>
}

export type LoadAddressByZipCodeControllerBuilder = (
  controller: CoreLoadAddressByZipCodeController,
  validator: Validation
) => LoadAddressByZipCodeController
