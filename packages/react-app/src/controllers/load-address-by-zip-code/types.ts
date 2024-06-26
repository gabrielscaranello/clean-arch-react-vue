import { ValidationErrors } from '@core'
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
