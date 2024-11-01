import { DrawerDialogDemo } from "@/components/frangment/drawer/comment";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex flex-col h-full ">
        {/* card */}
        <div className="px-12 pt-5 gap-5 flex mx-auto ">
          <div className="w-14 rounded-full bg-slate-200 h-14"></div>
          <div className="w-14 rounded-full bg-slate-200 h-14"></div>
          <div className="w-14 rounded-full bg-slate-200 h-14"></div>
          <div className="w-14 rounded-full bg-slate-200 h-14"></div>
          <div className="w-14 rounded-full bg-slate-200 h-14"></div>
          <div className="w-14 rounded-full bg-slate-200 h-14"></div>
          <div className="w-14 rounded-full bg-slate-200 h-14"></div>
        </div>

        <div className="flex flex-col mx-auto gap-3 mt-14">

          <div className="flex gap-2 items-center">
            <div className="w-10 rounded-full bg-slate-200 h-10"></div>
            <h1>asdfsdfsdfdsfdasd</h1>
          </div>
          <main className="w-96 h-[60vh] bg-slate border rounded-sm">
          </main>
          {/* nav-card */}
          <div className="flex gap-3 pl-3">
            <AiOutlineLike className="text-xl" />
            <DrawerDialogDemo />
            <FiSend className="text-xl" />
          </div>

          <h1 className="pl-3 mb-2">3434 likes</h1>
          <div className="mx-auto w-96 h-44 px-3 ">
            <p>Loris quas non, assumenda in et quisquam? Dolore aliquam voluptatem explicabo sapiente dolorum consectetur, magni reiciendis ex ut, mollitia, ad similique laborum vero repellendus temporibus placeat assumenda vel commodi nesciunt eum quasi distinctio blanditiis harum sint! Voluptate eos perferendis velit? Delectus animi, </p>
          </div>
        </div>
      </div>

      <div className="lg:absolute lg:right-0 lg:w-[30vw] h-[100vh] px-5 pt-7 border lg:block md:hidden block sm:hidden">
        {/*profile  */}
        <div className="flex gap-2 px-5 mt-3 items-center">
          <div className="w-14 h-14 rounded-full bg-slate-300"></div>
          <h1>trending</h1>
        </div>
        <h1 className="mt-12  text-center font-semibold text-xl">trending1</h1>
        <h1 className=" px-8 mt-5 mt-12 text-lg mb-2">trending</h1>
        <h1 className=" px-8 mt-5 mt-12 text-lg mb-2">trending</h1>
        <h1 className=" px-8 mt-5 mt-12 text-lg mb-2">trending</h1>
        <h1 className=" px-8 mt-5 mt-12 text-lg mb-2">trending</h1>
      </div>
    </div>
  );
}
