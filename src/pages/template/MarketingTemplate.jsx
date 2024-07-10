import React from 'react'
import { NavbarComponent } from '../../components/marketing/NavbarComponent'
import { TopSection } from '../../components/marketing/TopSection'
import AngelButton from '../../components/marketing/AngelButton'

const MarketingTemplate = () => {
  return (
    <div className='mx-60'>
      <div>
      <NavbarComponent/>
      </div>
      <div className='mt-32'>
      <TopSection/>
      </div>
      <AngelButton text="Read More"/>
    </div>
  )
}

export default MarketingTemplate
