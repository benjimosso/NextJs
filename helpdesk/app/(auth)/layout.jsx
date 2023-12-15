import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link"

export default async function AuthLayout({ children }) {

    const superbase = createServerComponentClient({cookies})
    const {data} = await superbase.auth.getSession()

    if (data.session) {
        redirect('/')
      }

    return (
        <>
            <nav>
                <h1>Benji Helpdesk</h1>
                <Link href="/signup">Signup</Link>
                <Link href="/login">login</Link>
            </nav>
            {children}
        </>
    )
}