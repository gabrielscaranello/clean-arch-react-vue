import { Alert, AlertTitle } from '@mui/material'
import { FC } from 'react'

import { CalloutProps } from './types'

export const Callout: FC<CalloutProps> = ({ title, type, content }) => {
  return (
    <Alert variant='outlined' severity={type}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {content}
    </Alert>
  )
}
