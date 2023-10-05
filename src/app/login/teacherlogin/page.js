'use client'
import { useRouter } from 'next/navigation'
const Teacher=()=>{
    const router=useRouter()
    return(
        <div>
 <h1>Teacher login page</h1>
{/* <button onClick={()=>router.push("/login")}>Go to Login Page</button>*/}
        </div>
       
    )
}
export default Teacher;