import Link from 'next/link'

export default function Notfound() {
  return (
  <main className="text-center">
    <h2 className="text-3xl">There was a pronlem.</h2>
    <p>We could not find the page you were looking for.</p>
    <p>Go back to the <Link href='/'> Dhashboard </Link> </p>
  </main>
  )
}
