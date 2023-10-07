import { user } from "@/utli/db";
import { NextResponse } from "next/server";


export function GET(req,content){
    const userData=user.filter((item)=>item.id==content.params.id)
    return NextResponse.json(userData.length==0?{result:'Data not found',success:true}:{result:userData,success:true},{status:200})
}