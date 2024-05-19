import { FC, useMemo } from 'react'

import { CalloutProps } from './types'

import '@material/web/icon/icon'

const icons: Record<CalloutProps['type'], string> = {
  info: 'info',
  error: 'error'
}

export const Callout: FC<CalloutProps> = ({ title, type, content }) => {
  const className = useMemo(() => `callout callout__type-${type}`, [type])
  const icon = useMemo(() => icons[type], [type])
  const hasContent = useMemo(() => !!content, [content])

  return (
    <div className={className}>
      <md-icon className='callout__icon'>{icon}</md-icon>
      <div className='callout__content'>
        <span className='callout__title'>{title}</span>
        {hasContent && <span className='callout__content'>{content}</span>}
      </div>
    </div>
  )
}
