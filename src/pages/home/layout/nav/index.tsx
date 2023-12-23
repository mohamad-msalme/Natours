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
          <a href="#About" onClick={() => setOpen(false)}>
            About Natous
          </a>
        </li>
        <li>
          <a href="#Feature" onClick={() => setOpen(false)}>
            Your benfits
          </a>
        </li>
        <li>
          <a href="#Tours" onClick={() => setOpen(false)}>
            Popular tours
          </a>
        </li>
        <li>
          <a href="#Testimonials" onClick={() => setOpen(false)}>
            Stories
          </a>
        </li>
        <li>
          <a href="#Booking" onClick={() => setOpen(false)}>
            Book now
          </a>
        </li>
      </ul>
    </nav>
  )
}
