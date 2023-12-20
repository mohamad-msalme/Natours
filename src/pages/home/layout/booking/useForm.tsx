import { useState } from 'react'

// Helper function to validate email format
export const isEmailValid = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export type TFormData = {
  fullName: string
  emailAddress: string
  smallTourGroup: boolean
  largeTourGroup: boolean
}

export type TDirtyData = {
  [K in keyof TFormData]: boolean
}

export const useForm = () => {
  const [formData, setFormData] = useState<TFormData>({
    fullName: '',
    emailAddress: '',
    smallTourGroup: false,
    largeTourGroup: false
  })

  const [isDirty, setIsDirty] = useState<TDirtyData>({
    fullName: false,
    emailAddress: false,
    smallTourGroup: false,
    largeTourGroup: false
  })

  // Check if the form is invalid
  const isFormInvalid = () => {
    return (
      formData.fullName.trim() === '' || !isEmailValid(formData.emailAddress)
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value

    setFormData(prevData => ({
      ...prevData,
      [id]: newValue
    }))

    setIsDirty(prevDirty => ({
      ...prevDirty,
      [id]: true
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormInvalid()) {
      console.log('Form submitted:', formData)
    } else {
      console.log('Form is invalid. Please fill in all required fields.')
    }
  }

  return {
    handleInputChange,
    formData,
    setFormData,
    isDirty,
    setIsDirty,
    handleSubmit,
    isFormInvalid
  }
}
