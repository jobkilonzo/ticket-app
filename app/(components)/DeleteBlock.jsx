import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DeleteBlock = () => {
  return (
   <FontAwesomeIcon icon={faX} width={10} className='text-red-400 hover:text-red-200 hover:cursor-point'/>
  )
}

export default DeleteBlock