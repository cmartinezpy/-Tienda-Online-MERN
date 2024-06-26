import { useState } from 'react'
import { Icono } from './Icono'
import { NavList } from './NavList'

export const MenuDashboard = () => {

  const [ visible, setVisible ] = useState()

  return (

    <div className='relative'>
      <nav className='fixed z-20 w-full h-full'>
        <div className='bg-black h-full w-20 fixed left-0 top-0 flex items-center justify-center'>
          <Icono 
            visible={visible} 
            setVisible={setVisible}
          />
        </div>
        <NavList visible={visible} />
      </nav>
    </div>
  )
}
