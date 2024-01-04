import { connectDB } from "@/utils/database";
import Ticket from "@/app/(models/Ticket";
import { NextResponse } from "next/server";

export async function POST (req){
    console.log("POST runs")
    try{
        await connectDB()
        const body = await req.json()
        const ticketData = body.formData
        const ticket = new Ticket(ticketData)
        await ticket.save()

        return new NextResponse.json({message: "Ticket: created"}, {status: 201})

    }catch(error){
    return new NextResponse.json({message: "Error", error}, {status: 500})
}}
export async function GET (){
    console.log("POST runs")
    try{
        await connectDB()
       const tickets = Ticket.find()

        return new NextResponse.json({tickets}, {status: 201})

    }catch(error){
    return new NextResponse.json({message: "Error", error}, {status: 500})
}}

