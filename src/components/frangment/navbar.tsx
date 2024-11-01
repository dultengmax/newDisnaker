"use client"
import React from 'react'
import Link from "next/link";
import { IoHome, IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdExplore, MdOutlineExplore } from "react-icons/md";
import { FaRegUser, FaUser } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const path = usePathname()
    return (
        <div>
            <nav className="w-80 h-[100vh] border lg:block sm:hidden md:hidden px-5 pt-7 border-r-slate-200 lg:fixed ">
                <h1 className="text-2xl font-semibold">abdulbook</h1>
                <ul className="flex flex-col gap-8 mt-8">
                    <li>
                        <Link href={"/"} className="flex gap-1 text-xl hover:scale-105 transition-all items-center">
                            {
                                path === "/" ? <>
                                    <IoHome />Home
                                </> : <>
                                    <IoHomeOutline /> home
                                </>
                            }
                        </Link>
                    </li>
                    <li >
                        <Link className="flex gap-1 text-xl hover:scale-105 transition-all items-center" href={"/search"}>
                            {
                                path === "/search" ? <>
                                    <CiSearch />
                                    seach</> : <>
                                    <CiSearch />
                                    seach</>
                            }
                        </Link>
                    </li>
                    <li >
                        <Link className="flex gap-1 text-xl hover:scale-105 transition-all items-center" href={"/explore"}>
                            {
                                path === "/explore" ? <>
                                    <MdExplore />
                                    explore</> : <>
                                    <MdOutlineExplore />
                                    explore</>
                            }
                        </Link>
                    </li>
                    <li >
                        <Link className="flex gap-1 text-xl hover:scale-105 transition-all items-center" href={"/add"}> <IoIosAddCircleOutline />
                            create</Link>
                    </li>
                    <li >
                        <Link className="flex gap-1 text-xl hover:scale-105 transition-all items-center" href={"/profile"}>
                            {
                                path === "/profile" ? <>
                                    <FaUser />

                                    profile</> : <>
                                    <FaRegUser />
                                    profile</>
                            }

                        </Link>
                    </li>
                </ul>
                <Button variant={"default"} className="absolute bottom-8 ">
                    <Link href="/auth/login">
                    Login
                    </Link>
                    </Button>
            </nav>
        </div>
    )
}

export default Navbar