import React from 'react'
import { getBtnClassName } from './getBtnClassName'

import './button.scss'

export interface TButtonsProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: 'contained' | 'text' | 'nav'
  color: 'green' | 'white'
  disabled?: boolean
  fullWidth?: boolean
  title: string
  isAnimation?: boolean
}

export const Button: React.FC<React.PropsWithChildren<TButtonsProps>> = ({
  title,
  children,
  ...rest
}) => (
  <a className={getBtnClassName(rest)} {...rest}>
    <span>{title}</span>
    {children}
  </a>
)
