import '@material/web/textfield/outlined-text-field'
import '@material/web/iconbutton/icon-button'
import '@material/web/icon/icon'

import { FC, FormEventHandler, useMemo } from 'react'

import { InputProps } from './types'

export const Input: FC<InputProps> = ({ label, value, error, placeholder, className, onInput }) => {
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

  // const onClear: MouseEventHandler = (event) => {
  //   event.preventDefault()
  //   onInput('')
  // }

  const compiledProps = useMemo(() => {
    const props: Record<string, unknown> = { value }
    if (error) {
      props.error = !!error
      props['error-text'] = error
    }
    if (className) props.class = className

    return props
  }, [error, value, className])

  return (
    <md-outlined-text-field
      {...compiledProps}
      label={label}
      placeholder={placeholder}
      onInput={onInputHandler}>
      {/* <md-icon-button onClick={onClear} slot='trailing-icon'> */}
      {/*   <md-icon>close</md-icon> */}
      {/* </md-icon-button> */}
    </md-outlined-text-field>
  )
}
