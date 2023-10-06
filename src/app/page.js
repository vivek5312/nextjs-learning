'use client'
import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import Profile from '../../public/vercel.svg'
import { useRouter } from 'next/navigation'
export default function Home() {
 const router=useRouter();

  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
   <Link href="/about">Go to about page</Link>
   <br/>
   <br/>
   <Link href="/news">Go to news page</Link>
   <br/>
   <br/>
  <br/>
  <br/>
  <Link href='/product'>Go to Product Page</Link>
   <button onClick={()=>router.push("/about")}>Go to about page</button>
   <br/>
   <br/>
   <button onClick={()=>router.push("/login")}>Go to Login page</button>
   
   <br/>
   <Image
   src={Profile}
   />
     <Image
        src="http://upload.wikimedia.org/wikipedia/commons/1/19/Wikipedia_logo_red.png"
        alt="Wikipedia Logo"
        width={200}
        height={100}
      />
    
    </main>
  )
}
