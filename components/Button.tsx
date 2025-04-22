import Link from 'next/link'
import React from 'react'


function Button() {
  return (
    <div className="hover:scale-95 duration-300 ease-in-out ">
        <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-white/30 via-blue-600 to-white/30">
    <Link href="https://calendly.com/hamzaasifworks/30min" className="flex justify-center items-center px-[36px] py-2 rounded-xl bg-black text-[20px] font-semibold text-white">
       Get Started
    </Link>
</div>
    </div>
  )
}

export default Button
