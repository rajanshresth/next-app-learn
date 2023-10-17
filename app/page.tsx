import Link from 'next/link'
import ProductCart from './components/ProductCart/ProductCart'

export default function Home() {
  return (
   <main>
    <div className='flex gap-2'>
      <Link href='/users' className='btn '>
        User-page
      </Link>
      <ProductCart/>
    </div>
   </main>
  )
}
