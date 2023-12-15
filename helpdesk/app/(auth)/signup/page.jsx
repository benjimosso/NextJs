'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {

  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    const superbase =  createClientComponentClient()
    const {error} = await superbase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      }
    })

    if (error) {
      setError(error.message)
    }

    if (!error) {
      router.push('/verify')
    }


  }


  return (
    <main>
        <h2 className="main-center">Signup</h2>

        <AuthForm handleSubmit={handleSubmit}/>
        {error && (
          <div className="error">{error}</div>
        )}
    </main>
  )
}
