import React from 'react'
import TicketCard from './(components)/TicketCard'

const getTickets = async () => {
        
   
  try{
    const res = await fetch('/api/Tickets', {
      cache: "no-store"
   })

   return res.json()
  }catch(error){
    console.log(error)
  }   
}
const Dashboard = async () => {

 const {tickets} = await getTickets()

 const categories = [
  ...new Set(tickets?.map(({category}) => category))
 ]
  return (
    <div className='p-5'>
      <div className='lg:grid grid-cols-2 xl:grid-cols-4'>

      {categories}
      </div>
    </div>
  )
}

export default Dashboard