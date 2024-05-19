import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'md-text-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}
