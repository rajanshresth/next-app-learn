"use client"
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const {status,data:session}=useSession();
  if(status==="loading") return null;
  return (
    <div className='flex gap-3 justify-center items-center font-semibold text-2xl bg-slate-300 h-10 w-full'>
        <Link href='/'>
            Next.js
        </Link>
        <Link href='/users'>
            Users
        </Link>
        {status==='authenticated' &&
           <div className=''>
              {session.user!.name}
              <Link href="/api/auth/signout" className='ml-5'>Sign out</Link>
            </div>}
        {status==='unauthenticated' &&<Link href="/api/auth/signin">Sign In</Link>}
    </div>
  )
}

export default NavBar