import Link from 'next/link'
import React from 'react'
import { ShoppingBag } from 'lucide-react';

const CartIcon = () => {
  return (
    <Link href={"/cart"} className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
      <ShoppingBag className="text-lightBlue w-6 h-6"/>
      <div className="flex flex-col">
        <p className="text-xs">
          <span className="text-semibold">0</span> items 
        </p>
        <p className="text-semibold">Cart</p>
      </div>
    </Link>
  )
}

export default CartIcon
