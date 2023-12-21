import React from 'react'
import clsx from 'clsx'

import './nav-icon.scss'
type TNavIcon = {
  open: boolean
  onClick: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavIcon: React.FC<TNavIcon> = ({ open, onClick }) => (
  <div
    onClick={() => onClick(!open)}
    className={clsx('nav__icon', { active: open })}
  >
    <span className="line line--1">{''}</span>
    <span className="line line--2">{''}</span>
    <span className="line line--3">{''}</span>
  </div>
)
