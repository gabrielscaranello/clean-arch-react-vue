import { Button, Input } from '@react-app/components/stateless'
import { useLoadAddressByZipCodeController } from '@react-app/controllers'
import { FC } from 'react'

export const Form: FC = () => {
  const { setZipCode, handleSubmit, zipCode, errors, disabledSubmit } =
    useLoadAddressByZipCodeController()
  return (
    <form className='form__container' onSubmit={handleSubmit}>
      <Input
        className='form__input'
        label='CEP'
        placeholder='Insira o CEP para consultar'
        error={errors.zipCode}
        value={zipCode}
        onInput={setZipCode}
      />
      <Button className='form__submit' type='submit' disabled={disabledSubmit}>
        Consultar
      </Button>
    </form>
  )
}
