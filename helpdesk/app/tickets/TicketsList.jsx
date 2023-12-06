import Link from 'next/link'

async function getTickets() {
    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0 // use 0 to opt out of using cache, notice this may slower the application
        }
    })

    return res.json()
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
