import React from 'react'
import { HeaderDesktop } from './header-desktop'
import { HeaderMobile } from './header-mobile'

type Props = {}

export const Header = (props: Props) => {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  )
}
