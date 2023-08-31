import React from 'react'
import { Header } from 'components/organisms/Header'
import { Outlet } from 'react-router-dom'
import './AppLayout.scss'

const headerData = {
  navData: {
    itemList: [
      { label: 'Home', link: '/' },
      { label: 'Battle', link: '/battle' },
      { label: 'History', link: '/history' },
      { label: 'Pokedex', link: '/pokedex' },
      { label: 'About', link: '/about' }
    ]
  },
  logoData: {
    media: {
      imageUrl: './assets/logo.png',
      altText: 'logo alt'
    },
    link: '/'
  }
}

export const AppLayout = () => {
  return (
    <div className="layout">
      <Header {...headerData} />
      <div id="content">
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
