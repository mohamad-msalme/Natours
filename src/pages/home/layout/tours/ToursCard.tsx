import React from 'react'
import './toursCard.scss'
import { Dialog } from 'components/dialog'
import { ToursDialog } from './ToursDialog'
import { ToursCardBack } from './ToursCardBack'
import { ToursCardFront } from './ToursCardFront'
import { TToursCardData } from '.'
import { useDialogState } from './useToursDialogState'

type TToursCard = {
  items: TToursCardData[]
}

export const ToursCard: React.FC<TToursCard> = ({ items }) => {
  const { open, closeDialog, openDialog } = useDialogState()
  return (
    <>
      {items.map((item, index) => (
        <div key={item.title} className="card">
          <ToursCardBack
            onClick={openDialog}
            index={index}
            price={item.price}
          />
          <ToursCardFront index={index} {...item} />
        </div>
      ))}
      <Dialog open={open} close={closeDialog}>
        <ToursDialog />
      </Dialog>
    </>
  )
}
