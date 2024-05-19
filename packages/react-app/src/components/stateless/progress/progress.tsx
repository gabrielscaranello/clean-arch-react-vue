import '@material/web/progress/linear-progress'

import { FC } from 'react'

export const Progress: FC = () => {
  return (
    <div className='progress__container'>
      <span className='progress__text'>Buscando...</span>
      <md-linear-progress indeterminate />
    </div>
  )
}
