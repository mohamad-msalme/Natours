import React from 'react'
import { Button } from 'components/button'
import { LogoIcon } from 'components/icons/LogoIcon'

import './index.scss'

export const Header: React.FC = () => {
  return (
    <header id="Header" className="header">
      <div className="header__logo-box">
        <LogoIcon />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happenes</span>
        </h1>
        <Button
          href="#Tours"
          variant="contained"
          color="white"
          title=" Discover our tours"
          isAnimation
        ></Button>
      </div>
    </header>
  )
}
