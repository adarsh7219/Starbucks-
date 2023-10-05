"use client"
import React from 'react'
import Link from 'next/link'
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Header = () => {
  return (
    <>
    <div className='Header'>

        <div className='logo'>
            <img src="https://s.yimg.com/fz/api/res/1.2/yxyPRHWaRK33aMOBGfZZjA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjM4/https://s.yimg.com/zb/imgv1/54ed3502-992d-3841-a701-b66bc76f9ae7/t_500x300"alt="" srcset="" />
            
        </div>
        <div className='ankar'>
           <Link href="/Menu">MENU</Link>
           <Link href="/Rewads">REWARDS</Link>
           <Link href="/Gift">GIFT CARDS</Link>

        </div>

        <div className='location'>
       < LocationOnIcon className='icon-loction'/>
       <p>Find a store</p>

        </div>

        <div className='box-parent'>
            <div className='box'></div>
            <div className='box'></div>

        </div>

    </div>
    </>
  )
}

export default Header
