import { user } from "@/utli/db";
import { NextResponse } from "next/server";


export function GET(){
   const data=user
    return NextResponse.json(data,{status:200})
}
export async function POST(request){
    const payload=await request.json();
    console.log(payload)
    if(!payload.name || !payload.age|| !payload.email){
        
    return NextResponse.json({result:'require field not found',success:false},{status:200})
    }
    return NextResponse.json({result:'new user created',success:true},{status:200})
}