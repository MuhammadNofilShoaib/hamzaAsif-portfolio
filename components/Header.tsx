'use client';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
    return (
        <header className="w-full flex justify-center md:py-4 bg-black">
            <nav className="flex items-center justify-between w-full md:w-[90%] max-w-6xl mx-auto bg-[#0d0d0d]/70 backdrop-blur-md border border-neutral-800 md:rounded-full px-6 py-6 md:py-3 md:mt-4 fixed z-50">
                {/* Logo */}

                <h1 className="text-3xl  font-bold text-blue-600 italic font-serif" style={{ textShadow: "1px 1px 0px white" }}>ha.</h1>
                {/* Nav Links */}
                <div className="hidden md:flex gap-4 text-[12px] lg:gap-8 text-white lg:text-sm font-medium">
                    <Link href="#about" className="hover:text-white/60 cursor-pointer transition text-[15px]">About</Link>
                    <Link href="#showcases" className="hover:text-white/60 cursor-pointer transition text-[15px]">Showcases</Link>
                    <Link href="#testimonials" className="hover:text-white/60 cursor-pointer transition text-[15px]">Testimonials</Link>
                    <Link href="#contact" className="hover:text-white/60 cursor-pointer transition text-[15px]">Contact</Link>


                </div>

                {/* CTA Button */}
                <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-white/30 via-blue-600 to-white/30">
                    <div className="flex justify-center items-center gap-3 px-2 sm:px-6 py-2 sm:py-1.5 rounded-xl bg-black">
                        <span className="size-[10px] sm:size-[12px] rounded-full bg-blue-600 blur-[2px] animate-pulse">.</span>
                        <span className="text-[12px] whitespace-nowrap text-white">1 spot left</span>
                        <span className="text-white/50">|</span>
                        <Link href="https://calendly.com/hamzaasifworks/30min" className="flex justify-center items-center gap-2 sm:gap-3 font-bold whitespace-nowrap text-[11px] hover:scale-95 hover:animate-pulse duration-300 ease-in-out">
                            Book a Call <span><FaArrowRight size={11} /></span>
                        </Link>
                    </div>

                </div>

            </nav>
        </header>
    );
};

export default Header;
