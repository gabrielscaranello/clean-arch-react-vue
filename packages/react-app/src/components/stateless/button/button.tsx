import '@material/web/button/text-button'

import { FC, PropsWithChildren } from 'react'

import { ButtonProps } from './types'

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return <md-text-button {...props}>{children}</md-text-button>
}
