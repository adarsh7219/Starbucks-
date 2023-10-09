"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false)

  return (
    <>
      <nav>
        <div className='img'>
          <img src="https://s.yimg.com/fz/api/res/1.2/yxyPRHWaRK33aMOBGfZZjA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjM4/https://s.yimg.com/zb/imgv1/54ed3502-992d-3841-a701-b66bc76f9ae7/t_500x300" />
        {/* <Link href="/" className='Home-main'>Home</Link> */}

        </div>
       

        <div className='menu' onClick={() => {
          setmenuOpen(!menuOpen)
        }}>
          < MenuIcon className='menu-icon' />

        </div>

       


        <ul className={menuOpen ? "open" : ""}>

          <li>

        <Link href="/" className='Home-main'>Home</Link>

          </li>
          <li>
            <Link href="/Menu">MENU</Link>

          </li>
          <li>
            <Link href="/Rewads">REWARDS</Link>

          </li>
          <li>
            <Link href="/Gift">GIFT CARDS</Link>

          </li>
        </ul>

        <div className='location'>
          < LocationOnIcon className='loco' />
          <p>Find a store</p>
        </div>
        <div className='parent'>
          <div className='box'>
            <p>Sign in</p>
          </div>
          <div className='box1'>
            <p>Join now</p>
          </div>

        </div>
      </nav>

    </>
  )
}

export default Header
