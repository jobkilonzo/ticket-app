import React from 'react'
import TicketCard from './(components)/TicketCard'

const getTickets = async () => {
        
   
  try{
    const res = await fetch('http://localhost:3000/api/Tickets', {
      cache: "no-store",
      method: "GET"
   })

  // console.log(res.json())
   return res.json()
  }catch(error){
    console.log(error)
  }   
}
const Dashboard = async () => {


 const {tickets}= await getTickets()
 const uniqueCategories = [
  ...new Set(tickets?.map(({category}) => category))
 ]
  return (
    <div className='p-5'>

      {tickets && uniqueCategories.map((uniqueCategory, categoryIndex)=>(
        <div key={categoryIndex} className='mb-4'>
          <h2 >{uniqueCategory}</h2>
          <div className='lg:grid grid-cols-2 xl:grid-cols-4'>
            {tickets.filter((ticket)=> ticket.category === uniqueCategory).map((filetredTickets, _index)=>(
              <TicketCard
              id={_index}
              key={_index}
              ticket={filetredTickets}
              />
            ))}
</div>
        </div>
      ))}
      
      
    </div>
  )
}

export default Dashboard