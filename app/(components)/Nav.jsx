import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex justify-between bg-nav p-4'>
      <div className='flex items-center space-x-4'>
        <Link href="/" alt="">
          <FontAwesomeIcon icon={faHome} width={20} className='icon'/>
        </Link>
        <Link href="/TicketPage/new" alt="">
          <FontAwesomeIcon icon={faTicket} width={20} className='icon'/>
        </Link>
      </div>
      <div>
        <p className='text-default-text'>job@gmail.com</p>
      </div>
    </nav>
  )
}

export default Nav