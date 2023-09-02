import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserSignUpForm } from "@/components/user-signup-form"

export const metadata: Metadata = {
  title: "SignUp",
  description: "Authentication forms built using the components.",
}

export default function SignUpPage() {
  return (
    <>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
        <div className="lg:p-9">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Создать аккаунт
              </h1>
              <p className="text-sm text-muted-foreground">
                регистрация с помощью email
              </p>
            </div>
            <UserSignUpForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Нажимая «Продолжить», вы соглашаетесь с нашими{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Условиями обслуживания
              </Link>{" "}
              и{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Политикой конфиденциальности
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}