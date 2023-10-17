import React from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props{
    searchParams:{SortOrder:string}
}

const UserPage = async({searchParams:{SortOrder}}:Props) => {
  return (
    <div>
        <h1>User Page</h1>
        <Link href='/users/new' className='btn'>
          New User Page
        </Link>
        <UserTable SortOrder={SortOrder} />
    </div>
  )
}

export default UserPage