
import Ticket from "@/app/(models/Ticket";
import { NextResponse } from "next/server";

export async function POST (req){

    try{
   
        const body = await req.json()
        const ticketData = body.formData
        const ticket = new Ticket(ticketData)
        await ticket.save()

        return new NextResponse(JSON.stringify({message: "Saved successfull"}, {status: 201}))

    }
    catch(error){

    return new NextResponse(JSON.stringify({message: "Error", error}, {status: 500}))
    }
}
