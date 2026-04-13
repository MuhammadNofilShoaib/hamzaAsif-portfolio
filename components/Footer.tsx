import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';

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
    <div className=" flex-col flex justify-center items-center py-10 gap-10 text-white">
        <div className='flex justify-center gap-10 items-center'>
      {
        links.map((link) => (
            
                <Link key={link.link} href={link.link} target='_blank'>{link.icon}</Link>
            
        ))
      }
    </div>
    {/* <h1 className="flex justify-center items-center gap-3">
  <FaLaptop className='scale-[1.5]'/> 
  Built by ~
  <a 
    href="https://wa.me/923012747872" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:underline underline-offset-4 font-extrabold tracking-widest"
  >
  Nofil Shoaib
  </a>
</h1> */}
    </div>
  )
}

export default Footer
