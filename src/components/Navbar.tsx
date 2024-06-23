import Image from 'next/image'
import React from 'react'
import logo from '../../public/images/logo.png';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='bg-teal-800 h-[10vh] flex justify-between px-[8vw] shadow-lg shadow-white rounded-b-lg mb-4'>
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <Image src={logo} alt="logo" width="60" height="60" />
                <span className='text-3xl font-serif'>Nazara<sup className='text-xs'>TM</sup></span>
            </div>
            <div className='m-8 flex gap-8'>
                <Link href="#games">GAMING</Link>
                <Link href="#esports">ESPORTS</Link>
                <Link href="#adtech">ADTECH</Link>
                <Link href="#publishing">PUBLISHING</Link>
            </div>
        </div>
        <div className='flex justify-center items-center'>
        <div className='m-8 flex gap-8'>
                <Link href="#news">NEWS</Link>
                <Link href="#investors">INVESTORS</Link>
                <Link href="#about">ABOUT</Link>
                <Link href="#contact">CONTACT</Link>
            </div>
        </div>

    </div>
  )
}

export default Navbar