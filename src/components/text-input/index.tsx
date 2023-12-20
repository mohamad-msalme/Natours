import React from 'react'
import clsx from 'clsx'

import './index.scss'
type TTextInput = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  isError?: boolean
}

export const TextInput: React.FC<TTextInput> = ({
  label,
  id,
  isError,
  className,
  ...rest
}) => {
  return (
    <div className="field-container field-container--input-text">
      <input
        {...rest}
        className={clsx(className, 'input input--text', {
          'input--error': isError
        })}
        id={id}
      />
      <label
        className={clsx('label label--input-text', {
          error: isError
        })}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}
