import { TextField } from '@mui/material'
import { FC, FormEventHandler } from 'react'

import { InputProps } from './types'

export const Input: FC<InputProps> = ({ value, error, onInput, ...props }) => {
  const onInputHook = (inputValue: string): void => {
    if (inputValue === value) return
    onInput(inputValue)
  }

  const onInputHandler: FormEventHandler<HTMLInputElement> = (event) => {
    const target = event.target as HTMLInputElement | null
    if (!target) return
    const inputValue = target.value
    onInputHook(inputValue)
  }

  return (
    <TextField
      autoComplete='off'
      error={!!error}
      helperText={error}
      onInput={onInputHandler}
      variant='outlined'
      {...props}
    />
  )
}
