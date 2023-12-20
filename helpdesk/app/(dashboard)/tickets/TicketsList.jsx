import Link from 'next/link'
import {cookies} from 'next/headers'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

async function getTickets() {
  const superbase = createServerComponentClient({cookies})

  const {data, error} = await superbase.from('Tickets')
  .select()

  if (error) {
    console.log(error.message)
  }

  return data
    
}



export default async function TicketsList() {

    const tickets = await getTickets()
    return (
      <>
      {tickets.map((tickets) => (
        <div key={tickets.id} className="card my-5">
          <Link href={`/tickets/${tickets.id}`}>
            <h3>{tickets.title}</h3>
            <p>{tickets.body.slice(0, 200)}...</p>
            <div className={`pill ${tickets.priority}`}>
            {tickets.priority} priority
            </div>
            </Link>
        </div>
      ))}
      {tickets.lenght === 0 && (
        <p className="text-center"> There are no open tickets</p>
      )}
      </>
    )
}
