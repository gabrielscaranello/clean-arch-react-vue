import { ListItemText, ListItem as MdListItem } from '@mui/material'
import { FC } from 'react'

import { ListItemProps } from './types'

export const ListItem: FC<ListItemProps> = ({ title, content }) => {
  return (
    <MdListItem>
      <ListItemText primary={title} secondary={content} />
    </MdListItem>
  )
}
