import { DetailedHTMLProps, FormEventHandler, HTMLAttributes } from 'react'

type MDElement = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'md-text-button': MDElement
      'md-icon': MDElement
      'md-icon-button': MDElement
      'md-outlined-text-field': MDElement & {
        label: string
        placeholder?: string
        value: string
        error: boolean
        'error-text'?: string
        onInput: FormEventHandler<HTMLInputElement>
      }
    }
  }
}
