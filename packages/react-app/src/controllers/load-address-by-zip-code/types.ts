import {
  LoadAddressByZipCodeController as CoreLoadAddressByZipCodeController,
  Validation,
  ValidationErrors
} from '@core'
import { Dispatch, FormEventHandler, SetStateAction } from 'react'

export interface LoadAddressByZipCodeForm {
  zipCode: string
}

export interface LoadAddressByZipCodeController {
  disabledSubmit: boolean
  zipCode: string
  setZipCode: Dispatch<SetStateAction<string>>
  errors: ValidationErrors<LoadAddressByZipCodeForm>
  handleSubmit: FormEventHandler<HTMLFormElement>
}
export type LoadAddressByZipCodeControllerBuilder = (
  controller: CoreLoadAddressByZipCodeController,
  validator: Validation
) => LoadAddressByZipCodeController
