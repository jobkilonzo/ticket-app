import { connectDB } from "@/utils/database";
import Ticket from "@/app/(models/Ticket";
import { NextResponse } from "next/server";


export async function GET (){
    
    try{
       connectDB()
       const tickets = await Ticket.find({})

        return new NextResponse(JSON.stringify({tickets}, {status: 201}))

    }catch(error){
    return new NextResponse(JSON.stringify({message: "Error", error}, {status: 500}))
}}

