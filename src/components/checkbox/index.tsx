import React from 'react'

import './index.scss'
type TCheckBox = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export const CheckBox: React.FC<TCheckBox> = ({ label, id, ...rest }) => {
  return (
    <div className="wrapper">
      <input className="checkbox-input" id={id} type="checkbox" {...rest} />
      <span className="checkbox-input--custom"></span>
      <label className="label label--input-checkbox" htmlFor="smallTourGroup">
        {label}
      </label>
    </div>
  )
}
