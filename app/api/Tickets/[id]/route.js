import Ticket from "@/app/(models/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req,{params}){
    try{
        const {id} = params
        
        await Ticket.findByIdAndDelete(id)

        return new NextResponse(JSON.stringify({message: "deleted successfully", status: 200}))
    }catch(err){
        return new NextResponse(JSON.stringify({message: err}, {status: 500}))
    }
}


export async function GET (req, {params}){
    
    try{
       const {id} = params
       const ticket = await Ticket.findOne({id})

        return new NextResponse(JSON.stringify({ticket}, {status: 201}))

    }catch(error){
    return new NextResponse(JSON.stringify({message: "Error", error}, {status: 500}))
}}

