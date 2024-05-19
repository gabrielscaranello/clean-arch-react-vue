import { FC } from 'react'

import '@material/web/list/list-item'

import { ListItemProps } from './types'

export const ListItem: FC<ListItemProps> = ({ title, content }) => {
  return (
    <md-list-item>
      <div className='list-item__headline' slot='headline'>
        {title}
      </div>
      <div slot='supporting-text'>{content}</div>
    </md-list-item>
  )
}
