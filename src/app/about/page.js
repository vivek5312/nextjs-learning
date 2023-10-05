'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
const About =()=>{
const router=useRouter()
    return (
    
    <div>
        <h1>My About Page</h1>
        <Link href="/">Go to home page</Link>
        <br/>
        <br/>
        <button onClick={()=>router.push("/")}>Go to home Page</button>
        </div>
    )
}
export default About;