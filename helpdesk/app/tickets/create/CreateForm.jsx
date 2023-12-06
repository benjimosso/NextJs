"use client"

import { useRouter} from 'next/navigation'
import { useState} from 'react'

export default function CreateForm() {

    const router = useRouter()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState(false)

  return (
    <form className='w-1/2'>
        <label >
            <span>Title:</span>
            <input 
            required
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}/>
        </label>
        <label >
        <span>Body:</span>
            <input 
            required
            type='text'
            onChange={(e) => setBody(e.target.value)}
            value={body}/>
        </label>
        
    </form>
  )
}
