import { CloseIcon } from 'components/icons/CloseIcon'
import React from 'react'

type TModelContainer = React.PropsWithChildren<{
  open: boolean
  onClose: () => void
}>

export const ModelContainer: React.FC<TModelContainer> = ({
  children,
  open,
  onClose
}) => (
  <div className={`dialog ${open ? 'active' : ''}`}>
    <div className="dialog__content">
      <div className="dialog__content__header">
        <CloseIcon onClick={() => onClose()} />
      </div>
      {children}
    </div>
  </div>
)
