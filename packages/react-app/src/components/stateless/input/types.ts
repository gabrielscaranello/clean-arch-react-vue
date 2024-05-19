export interface InputProps {
  label: string
  value: string
  error?: string
  placeholder?: string
  className?: string
  onInput: (value: string) => void
}
