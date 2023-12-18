import React from 'react'

export const useDialogState = () => {
  const [open, setOpen] = React.useState(false)
  const openDialog = () => setOpen(true)
  const closeDialog = () => setOpen(false)
  return {
    open,
    openDialog,
    closeDialog
  }
}
