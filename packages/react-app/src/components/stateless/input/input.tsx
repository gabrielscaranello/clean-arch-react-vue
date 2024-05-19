import '@material/web/textfield/outlined-text-field'
import '@material/web/iconbutton/icon-button'
import '@material/web/icon/icon'

import { FC, FormEventHandler, MouseEventHandler } from 'react'

import { InputProps } from './types'

export const Input: FC<InputProps> = ({ label, value, error, placeholder, onInput }) => {
  const onInputHandler: FormEventHandler<HTMLInputElement> = (event) => {
    const target = event.target as HTMLInputElement | null
    if (!target) return
    const inputValue = target.value
    onInput(inputValue)
  }

  const onClear: MouseEventHandler = (event) => {
    event.preventDefault()
    onInput('')
  }

  return (
    <md-outlined-text-field
      label={label}
      placeholder={placeholder}
      value={value}
      error={!!error}
      error-text={error}
      onInput={onInputHandler}>
      <md-icon-button onClick={onClear} slot='trailing-icon'>
        <md-icon>close</md-icon>
      </md-icon-button>
    </md-outlined-text-field>
  )
}
