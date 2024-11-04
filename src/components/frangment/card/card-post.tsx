import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { DrawerDialogDemo } from '../drawer/comment'
import { FiSend } from 'react-icons/fi'
import { Separator } from '@/components/ui/separator'
import { ButtonLike } from '../buttonSubmit/button-like'

const CardPost = () => {
  return (
    <>
<div className="flex flex-col mx-auto gap-3 mt-14">

<div className="flex gap-2 items-center">
  <div className="w-10 rounded-full bg-slate-200 h-10"></div>
  <h1>asdfsdfsdfdsfdasd</h1>
</div>
<main className="w-96 h-[60vh] bg-slate border rounded-sm">
</main>
{/* nav-card */}
<div className="flex gap-3 pl-3">
  <ButtonLike />
  <DrawerDialogDemo />
  <FiSend className="text-xl" />
</div>

<h1 className="pl-3 mb-2">3434 likes</h1>
<div className="mx-auto w-96 h-44 px-3 ">
  <p>Loris quas non, assumenda in et quisquam? Dolore aliquam voluptatem explicabo sapiente dolorum consectetur, magni reiciendis ex ut, mollitia, ad similique laborum vero repellendus temporibus placeat assumenda vel commodi nesciunt eum quasi distinctio blanditiis harum sint! Voluptate eos perferendis velit? Delectus animi, </p>
</div>

<Separator className="my-3"/>
</div>

    </>
  )
}

export default CardPost
