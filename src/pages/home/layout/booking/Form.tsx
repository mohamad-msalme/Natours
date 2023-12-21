/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react'

import { Button } from 'components/button'
import { TextInput } from 'components/text-input'
import { isEmailValid, useForm } from './useForm'
import { CheckBox } from 'components/checkbox'

export const Form: React.FC = () => {
  const { formData, handleInputChange, isDirty, isFormInvalid, handleSubmit } =
    useForm()

  return (
    <form className="cta-form" onSubmit={handleSubmit}>
      <h2 className="heading-secondary">Start booking now</h2>
      <TextInput
        value={formData.fullName}
        onChange={handleInputChange}
        isError={isDirty.fullName && !formData.fullName.trim()}
        placeholder="Full name"
        required
        id="fullName"
        type="text"
        label={
          isDirty.fullName && !formData.fullName.trim()
            ? 'Please enter your full name'
            : 'Full name'
        }
      />
      <TextInput
        value={formData.emailAddress}
        onChange={handleInputChange}
        isError={isDirty.emailAddress && !isEmailValid(formData.emailAddress)}
        placeholder="Email address"
        required
        id="emailAddress"
        type="email"
        label={
          isDirty.emailAddress && !isEmailValid(formData.emailAddress)
            ? ' Please enter a valid email address.'
            : 'Email address'
        }
      />
      <div className="field-container field-container--input-checkbox">
        <CheckBox
          label="Small tour group"
          id="smallTourGroup"
          type="checkbox"
          checked={formData.smallTourGroup}
          onChange={handleInputChange}
        />
        <CheckBox
          label="Large tour group"
          type="checkbox"
          id="largeTourGroup"
          checked={formData.largeTourGroup}
          onChange={handleInputChange}
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        color="green"
        title="Next step →"
        disabled={isFormInvalid()}
      />
    </form>
  )
}
