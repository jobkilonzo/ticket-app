import TicketForm from '@/app/(components)/TicketForm'
import React from 'react'
const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-cache",
      method: "GET"
    })
    
    if (!res.ok) {
      throw new Error("Failed to fetch")
    }

    return res.json()
  } catch (err) {
    console.log(err)
  }
}
const Ticket = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true
  let updateTicketData = {}

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id)
    
    
  } else {
    updateTicketData = {
      _id: "new"
    }
  }

  return (
    <div>
      <TicketForm ticket={updateTicketData}
      />
      {console.log(updateTicketData)}
      </div>
  )
}

export default Ticket