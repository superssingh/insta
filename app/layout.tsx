import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs"
import Navbar from "./components/Navbar"
import { Navbar1 } from "./components/Navbar1"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="grid relative w-full min-h-screen   bg-slate-100 text-gray-700 ">
            <Navbar />
            {children}
            <div>Footer</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
