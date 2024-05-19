import '@material/web/button/text-button'

import { FC, PropsWithChildren, useMemo } from 'react'

import { ButtonProps } from './types'

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  disabled,
  ...props
}) => {
  const compiledProps = useMemo(() => {
    const localProps: Record<string, unknown> = {}
    if (disabled) localProps.disabled = disabled
    if (className) localProps.class = className
    return localProps
  }, [disabled, className])

  return (
    <md-text-button {...props} {...compiledProps}>
      {children}
    </md-text-button>
  )
}
