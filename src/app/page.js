'use client'
import Link from 'next/link'
import styles from './page.module.css'
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

   <button onClick={()=>router.push("/about")}>Go to about page</button>
   <br/>
   <br/>
   <button onClick={()=>router.push("/login")}>Go to Login page</button>
   
    </main>
  )
}
