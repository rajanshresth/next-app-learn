import Link from 'next/link'
import React from 'react'
import { sort } from 'fast-sort';

interface Users{
    id: string,
    name:string
    email:string
}
interface Props{
   SortOrder:string
}
const UserTable = async({SortOrder}:Props) => {
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const users: Users[]= await res.json();

    const sortedUsers=sort(users).asc(SortOrder=='email'? user=>user.email : user=>user.name)
  return (
    <div>
         <table className='table table-bordered'>
            <thead>
                <tr>
                    <td>
                        <Link href='/users?SortOrder=name'>Name</Link>
                    </td>
                    <td>
                        <Link href='/users?SortOrder=email'>Email</Link>
                    </td>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map((user)=>{
                    return(
                        <tr key={user.id}>
                            
                            <th>{user.name}</th>
                            <th>{user.email}</th>
                        </tr>
                        
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default UserTable