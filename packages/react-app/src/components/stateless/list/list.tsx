import { List as MdList } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

export const List: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MdList className='result__list'>
      <>{children}</>
    </MdList>
  )
}
