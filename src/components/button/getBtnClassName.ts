import { TButtonsProps } from '.'

export const getBtnClassName = ({
  variant,
  color,
  disabled,
  fullWidth,
  isAnimation
}: Pick<
  TButtonsProps,
  'disabled' | 'variant' | 'color' | 'fullWidth' | 'isAnimation'
>): string =>
  `btn btn--${variant}-${color} ${disabled ? 'btn--disabled' : ''} ${
    fullWidth ? 'btn--full-width' : ''
  } ${isAnimation ? 'btn--animation' : ''}`
