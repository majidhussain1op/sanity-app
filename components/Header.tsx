import Image from 'next/image'
import React from 'react'
import logo from "@/images/logo.png"
import Container from './Container'
import Form from "next/form"
import Link from 'next/link'
import CartIcon from './CartIcon'
import { ShoppingBasket, User } from 'lucide-react'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignInButton, UserButton } from '@clerk/nextjs';

const Header = async () => {
  const user = await currentUser()
  console.log(user)
  return (
    <header className='w-full bg-white py-4 border-b border-b-gray-400'>
      <Container className="flex items-center justify-between gap-5">

        <Link href={"/"}>
          <Image src={logo} alt="logo" className='w-24' priority />
        </Link>
        <Form action="/search" className="flex-1">
          <input type='text' name="query" placeholder='Search for Products...'
            className="w-full border-2 border-gray-200 px-4 py-2.5 rounded-md focus-visible:border-darkBlue outline-none"
          />
        </Form>
        <div className="flex items-center gap-5">
          <CartIcon />
          <ClerkLoaded>

            <Link href={"/orders"} className='flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect'>
              <ShoppingBasket className="text-lightBlue w-5 h-6" />
              <div className='flex flex-col'>
                <p className="text-xs">
                  <span className='text-semibold'>0</span> items
                </p>
                <p className="text-semibold">Orders</p>
              </div>
            </Link>
            {user ? (<div>
              <UserButton/>

            </div>) : (
            <SignInButton mode="modal">
            <div className='flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect'>
            <User className='w-6 h-6 text-darkBlue'/>
            <div className="flex flex-col">
            <p className="text-xs">Account</p>
            <p className="font-semibold">Login</p>
            </div>
            </div></SignInButton>)}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  )
}

export default Header
