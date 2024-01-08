"use client"
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React from 'react'

const DeleteBlock = ({id}) => {
  const router = useRouter()

  const deleteblock = async ()=>{
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
     
      method: "DELETE"
   })

   if(res.ok){
    router.refresh()
   }

  }
  return (
   <FontAwesomeIcon icon={faX} 
   onClick={deleteblock}
   width={10} 
   className='text-red-400 hover:text-red-200 hover:cursor-point'/>
  )
}

export default DeleteBlock