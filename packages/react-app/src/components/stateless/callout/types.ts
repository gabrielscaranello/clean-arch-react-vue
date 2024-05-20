type CalloutType = 'info' | 'error'

export interface CalloutProps {
  type: CalloutType
  content: string
  title?: string
}
