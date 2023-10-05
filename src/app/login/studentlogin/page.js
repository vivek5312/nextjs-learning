'use client'
import { useRouter } from 'next/navigation'
const Student=()=>{
    const router=useRouter()
    return(
        <div>

      
        <h1>Student login page</h1>
        <button onClick={()=>router.push("/login")}>Go to Login Page</button>
        </div>
    )
}
export default Student;