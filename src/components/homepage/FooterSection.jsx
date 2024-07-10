import React from 'react'

const FooterSection = () => {
  return (
    <footer className='bg-[#F7F7F7] h-24 py-3 flex flex-col justify-between items-center'>
      <ul className='flex justify-between items-center w-[450px] '>
        <li className='hover:text-primary'>Template</li>
        <li className='hover:text-primary'>Features</li>
        <li className='hover:text-primary'>About us</li>
        <li className='hover:text-primary'>Contact</li>
      </ul>
      <p>&copy; Copyright - {(new Date().getFullYear())}<span className='text-primary font-medium'> Showcase</span></p>
    </footer>
  )
}

export default FooterSection
