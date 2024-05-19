export interface InputProps {
  label: string
  value: string
  error?: string
  placeholder?: string
  onInput: (value: string) => void
}
