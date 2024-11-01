"use client"
import { usePathname } from "next/navigation";
import Navbar from "../frangment/navbar";

export default  function Pathname () {
    const pathname = usePathname();
    const disableNav1 = ["/auth/login","/auth/register"];
   return (
        <>
        {!disableNav1.includes(pathname) && <Navbar/> }

        </> 
    )
}
