import { makeLoadAddressByZipCode, ValidationResult } from '@core'
import { useAddressStore } from '@react-app/store'
import { FormEventHandler, useEffect, useMemo, useState } from 'react'

import { LoadAddressByZipCodeController, LoadAddressByZipCodeForm } from './types'

export const useLoadAddressByZipCodeController = (): LoadAddressByZipCodeController => {
  const store = useAddressStore()
  const { usecase, validator } = useMemo(() => makeLoadAddressByZipCode(), [])
  const [zipCode, setZipCode] = useState<string>('')
  const [triedToSubmit, setTriedToSubmit] = useState<boolean>(false)
  const [validation, setValidation] = useState<ValidationResult<LoadAddressByZipCodeForm>>({
    errors: {},
    isValid: true
  })

  const handleValidation = (): void => {
    setValidation(validator.validate({ zipCode }))
  }

  const onSubmit = async (): Promise<void> => {
    if (!triedToSubmit) {
      handleValidation()
      setTriedToSubmit(true)
      if (!validation.isValid) return
    }

    store.setIsLoading(true)

    try {
      const result = await usecase.load({ zipCode })
      store.setAddress(result)
    } catch (error) {
      store.setAddress()
    } finally {
      setTriedToSubmit(false)
      store.setIsLoading(false)
    }
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    void onSubmit()
  }

  const hasErrors = useMemo(() => triedToSubmit && !validation.isValid, [triedToSubmit, validation])
  const errors = useMemo(() => (hasErrors ? validation.errors : {}), [hasErrors, validation])
  const disabledSubmit = useMemo(() => hasErrors || store.isLoading, [hasErrors, store.isLoading])

  useEffect(handleValidation, [zipCode, validator])

  return { setZipCode, errors, disabledSubmit, handleSubmit, zipCode }
}
