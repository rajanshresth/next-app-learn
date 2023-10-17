import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex gap-3 justify-center items-center font-semibold text-2xl bg-slate-300 h-10 w-full'>
        <Link href='/'>
            Next.js
        </Link>
        <Link href='/users'>
            Users
        </Link>
    </div>
  )
}

export default NavBar