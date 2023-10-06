import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto=Roboto({
    weight:'300',
    subsets:['latin']
})

const News =()=>{

    return (
    
    <div>
        <h1 className={roboto.className}>My News Page</h1>
        <Link href="/">Go to home page</Link>
        </div>
    )
}
export default News;