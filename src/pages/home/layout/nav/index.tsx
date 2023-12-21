import React from 'react'

import './index.scss'
import clsx from 'clsx'
import { NavIcon } from './NavIcon'

export const Nav: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <nav className={clsx('nav', { active: open })}>
      <NavIcon onClick={setOpen} open={open} />
      <div className={clsx('nav__back', { active: open })}>{''}</div>
      <ul className={clsx('nav__list', { active: open })}>
        <li>
          <a>About Natous</a>
        </li>
        <li>
          <a>Your benfits</a>
        </li>
        <li>
          <a>Popular tours</a>
        </li>
        <li>
          <a>Stories</a>
        </li>
        <li>
          <a>Book now</a>
        </li>
      </ul>
    </nav>
  )
}
