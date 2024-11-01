import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

const Formlogin = () => {
  return (
    <form className="lg:w-4/6 w-11/12 h-3/5 bg-slate-200 rounded-md shadow-md px-5 ">
    <h1 className="text-center text-2xl font-semibold p-3">login</h1>
    <label className="px-2 mb-1">email</label>
      <Input type="text" placeholder="isi email kamu" className="w-4/5 h-10 mx-auto mt-2"/>
    <label className="px-2 mb-1">password</label>
      <Input type="text" placeholder="isi email kamu" className="w-4/5 h-10 mx-auto mt-2"/>
      <div>
        <Button variant={"default"} className="mx-auto mt-2">submit</Button>
      </div>
       <Separator className="w-1/2 mt-5"/>
       <button>google</button>
       <Link href={"/auth/register"} className="underline">bikin akun disini</Link>
    </form>
  )
}

export default Formlogin