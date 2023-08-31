import React from 'react'
import { Herobanner } from 'components'
import { useNavigate } from 'react-router-dom'
import './Home.scss'

export const Home = () => {
  const navigate = useNavigate()

  const heroBannerData = {
    caption: 'Welcom to',
    title: 'Battle Pokemon',
    description:
      'Battle Pokemon is  a fun and enagaging way to battle between pokemons, whether for casual play or move serious competition between the pokemons.',
    ctaButton: {
      title: 'Start Battle',
      onClick: () => {
        navigate('/battle')
      }
    },
    media: {
      imageUrl: './assets/banner.png',
      altText: 'Hero Image'
    }
  }

  return (
    <div className="home-container">
      <Herobanner {...heroBannerData} />
    </div>
  )
}

export default Home
