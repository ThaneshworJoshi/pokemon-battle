import { ButtonHTMLAttributes } from "react"

type TButtonSize = 'small' | 'medium' | 'big'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  size?: TButtonSize
  onClick?: () => void
}
