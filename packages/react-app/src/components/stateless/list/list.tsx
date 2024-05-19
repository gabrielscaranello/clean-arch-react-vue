import '@material/web/list/list'

import { FC, PropsWithChildren } from 'react'

export const List: FC<PropsWithChildren> = ({ children }) => {
  return (
    <md-list className='result__list'>
      <>{children}</>
    </md-list>
  )
}
