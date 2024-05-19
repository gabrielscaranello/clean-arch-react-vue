import { DetailedHTMLProps, HTMLAttributes } from 'react'

type MDElement = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'md-text-button': MDElement
      'md-icon': MDElement
    }
  }
}
