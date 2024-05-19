type CalloutType = 'info' | 'error'

export interface CalloutProps {
  title: string
  type: CalloutType
  content?: string
}
