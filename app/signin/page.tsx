import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserSignInForm } from "@/app/signin/user-signin-form"

export const metadata: Metadata = {
  title: "SignIn",
  description: "Authentication forms built using the components.",
}

export default function SignInPage() {
  return (
    <>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
        <div className="lg:p-9">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Войти
              </h1>
              <p className="text-sm text-muted-foreground">
                Email и пароль
              </p>
            </div>
            <UserSignInForm />
          </div>
        </div>
      </div>
    </>
  )
}