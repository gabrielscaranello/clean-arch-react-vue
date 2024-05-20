import { ListItemText, ListItem as MdListItem } from '@mui/material'
import { FC } from 'react'

import { ListItemProps } from './types'

export const ListItem: FC<ListItemProps> = ({ title, content }) => {
  return (
    <MdListItem>
      <ListItemText
        primaryTypographyProps={{ variant: 'subtitle1', style: { fontWeight: 'bold' } }}
        primary={title}
        secondaryTypographyProps={{ variant: 'body2' }}
        secondary={content}
      />
    </MdListItem>
  )
}
