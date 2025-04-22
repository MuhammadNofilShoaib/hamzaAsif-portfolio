import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import { FaLaptop } from "react-icons/fa";

const links = [
    {
        icon: <FaXTwitter className='scale-[2] hover:opacity-75 duration-300 ease-in-out' />,
        link: "https://x.com/Hamza_Works_"
    },
    {
        icon: <FaInstagram className='scale-[2] hover:opacity-75 duration-300 ease-in-out' />,
        link: "https://www.instagram.com/hamza_works_2004"
    },
]

function Footer() {
  return (
    <div className=" flex-col flex justify-center items-center py-10 gap-10">
        <div className='flex justify-center gap-10 items-center'>
      {
        links.map((link) => (
            
                <Link key={link.link} href={link.link} target='_blank'>{link.icon}</Link>
            
        ))
      }
    </div>
    <h1 className="flex justify-center items-center gap-3 "><FaLaptop className='scale-[1.5]'/>Built by <Link href="https://www.instagram.com/real_nofil/" target='_blank' className='hover:underline underline-offset-4 font-extrabold tracking-widest'>@real_nofil</Link></h1>
    </div>
  )
}

export default Footer
