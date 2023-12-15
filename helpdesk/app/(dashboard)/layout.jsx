import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// components
import Navbar from "../components/Navbar";


export default async function DashboardLayout({children}) {

  const superbase = createServerComponentClient({cookies})
  const {data} = await superbase.auth.getSession()

  if (!data.session) {
    redirect('/login')
  }

  return (
    <>
    <Navbar user={data.session.user}/>
    {children}
    </>
  )
}
