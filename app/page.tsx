"use client"
import Link from 'next/link'
import ProductCart from './components/ProductCart/ProductCart'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const HeavyComponent=dynamic(()=>import('./HeavyComponent'),{
  ssr:false,
  loading: ()=><p>Loading...</p>
})


export default function Home() {
  const[isActive, setIsActive] = useState(false)
  return (
   <main>
    <div className='flex gap-2'>
      
      <Link href='/users' className='btn '>
        User-page
      </Link>
      <button onClick={()=>setIsActive(true)}>Show</button>
      {isActive && <HeavyComponent />}
      <ProductCart/>
    </div>
   </main>
  )
}
