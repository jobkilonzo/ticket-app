"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const TicketForm = () => {
    const router = useRouter()
    const startingTicketData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Hardware Problem"
    }
    const[formData, setFormData] = useState(startingTicketData)

   
    const handleSubmit = async (e) => {
        
        console.log(formData)
        e.preventDefault()
        const res = await fetch('/api/Tickets', {
            method: "POST",
            body: JSON.stringify({formData})
        })
       
            router.refresh()
        router.push("/")
       
         
    }
  return (
    <div className='flex justify-center '>
        <form className='flex flex-col gap-3 w-1/2' method='post' onSubmit={handleSubmit}>
            <h3>Create Your Ticket</h3>
            <label htmlFor="">Title</label>
            <input type="text" name='title' 
            id='title'
             onChange={(e) => setFormData({
                ...formData,
                title: e.target.value}) } 
             required={true} 
             value={formData.title} />
            <label htmlFor="">Description</label>
            <textarea 
             name='description' 
            id='description'
             onChange={(e) => setFormData({
                ...formData,
                description: e.target.value}) } 
             required={true} 
             rows={5}
             value={formData.description} />
            
            <label htmlFor="">Category</label>
            <select 
             name='category' 
            id='description'
             onChange={(e) => setFormData({
                ...formData,
                category: e.target.value}) } 
             required={true} 
            
              >
                <option value="Hardware Problem">Handware Problem</option>
                <option value="Software Problem">Software Problem</option>
                <option value="Project">Project</option>
             </select>
             <label htmlFor="">Priority</label>
             <div>
                <input type="radio" 
                id='priority-1'
                name='priority'
                onChange={(e) => setFormData({
                    ...formData,
                    priority: e.target.value}) }
                value={1}
                checked={formData.priority ==1} />
             <label htmlFor="">1</label>
                <input type="radio" 
                id='priority-2'
                name='priority'
                onChange={(e) => setFormData({
                    ...formData,
                    priority: e.target.value}) }
                value={2} 
                checked={formData.priority ==2} />
             <label htmlFor="">2</label>
                <input type="radio" 
                id='priority-3'
                name='priority'
                onChange={(e) => setFormData({
                    ...formData,
                    priority: e.target.value}) }
                value={3}
                checked={formData.priority ==3} />
             <label htmlFor="">3</label>
                <input type="radio" 
                id='priority-4'
                name='priority'
                onChange={(e) => setFormData({
                    ...formData,
                    pr: e.target.value}) }
                value={4}
                checked={formData.priority ==4} />
             <label htmlFor="">4</label>
                <input type="radio"
                id='priority-5'
                name='priority'
                onChange={(e) => setFormData({
                    ...formData,
                    priority: e.target.value}) }
                value={5}
                checked={formData.priority ==5} />
             <label htmlFor="">5</label>
             </div>
             <label htmlFor="">Progress</label>
             <input type="range" id='progress'
             name='progress'
             value={formData.progress}
             min='0'
             max='100'
             onChange={(e) => setFormData({
                ...formData,
                progress: e.target.value}) } />
             <label htmlFor="">Status</label>
             <select name="status" value={formData.status} onChange={(e) => setFormData({
                ...formData,
                status: e.target.value}) }
              id="">
                <option value="not started">Not started</option>
                <option value="started">Started</option>
                <option value="done">Done</option>
              </select>
              <input type="submit" className='btn max-w-xs' value='Create Ticket' />

        </form>
    </div>
  )
}

export default TicketForm