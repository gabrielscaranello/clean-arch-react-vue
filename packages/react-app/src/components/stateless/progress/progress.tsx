import { LinearProgress } from '@mui/material'
import { FC } from 'react'

export const Progress: FC = () => {
  return (
    <div className='progress__container'>
      <span className='progress__text'>Buscando...</span>
      <LinearProgress />
    </div>
  )
}
