'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const layout = ({children}) => {
  const path=usePathname();
  console.log(path);
  return (
    <div>
      {
        path!=='/login/teacherlogin'?  <ul className='ul-menu'>
        <h3>Login Navbar</h3>
        <li>
            <Link href="/login">Login Main</Link>
        </li>
        <li>
            <Link href="/login/studentlogin">Student Login</Link>
        </li>
        <li>
            <Link href="/login/teacherlogin">Teacher Login</Link>
        </li>
      </ul>:<Link href='/login'>Go to login Page</Link>
      }
    
      {children}
    </div>
  )
}

export default layout
