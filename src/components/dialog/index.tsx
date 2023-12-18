import React from 'react'
import { useKeyDown } from './useKeyDown'
import { createPortal } from 'react-dom'
import { ModelContainer } from './ModelContainer'
import './index.scss'
type TDialog = React.PropsWithChildren<{
  open: boolean
  close: () => void
}>

export const Dialog: React.FC<TDialog> = ({ open, close, children }) => {
  useKeyDown(close)
  return createPortal(
    <ModelContainer onClose={close} open={open}>
      {children}
    </ModelContainer>,
    document.body
  )
}
