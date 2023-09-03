import React, { type FC } from 'react'
import { type ButtonProps } from './Button.type'
import './Button.scss'

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  size = 'medium',
  ...rest
}) => {
  return (
    <button onClick={onClick} className={`button ${size}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
