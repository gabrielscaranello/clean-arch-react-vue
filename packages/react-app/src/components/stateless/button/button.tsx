import { Button as MdButton } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

import { ButtonProps } from './types'

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return (
    <MdButton variant='text' {...props}>
      {children}
    </MdButton>
  )
}
