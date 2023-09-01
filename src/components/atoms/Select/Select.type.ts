export interface SelectProps {
  fullWidth?: boolean
  styles?: any
  value?: string
  options: string[]
  label?: string
  onChangeHandler: (event: string) => void
}
