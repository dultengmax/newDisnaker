import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <div className="px-5 flex gap-8  mt-14">
      <div className="w-36 h-36 rounded-full bg-slate-300 ">
      </div>
      {/* name */}
      <section className="flex  flex-col ">
        <main className="flex gap-5">
      <h2 className="text-xl font-semibold mt-4">User Names</h2>
      <Button variant={"outline"} className="mt-3">edit profile</Button>
        </main>
        <main className="flex pl-4 gap-7 mt-3">
      <h2 className="text-lg font-semibold mt-4">post</h2>
      <h2 className="text-lg font-semibold mt-4">follower</h2>
      <h2 className="text-lg font-semibold mt-4">following</h2>
        </main>
      </section>

      {/* post */}
    </div>
<main className="grid grid-cols-3 px-5 gap-3 mt-12 justify-center">
  <div className="w-72 h-56 bg-slate-500 rounded-sm"></div>
  <div className="w-72 h-56 bg-slate-500 rounded-sm"></div>
  <div className="w-72 h-56 bg-slate-500 rounded-sm"></div>
  <div className="w-72 h-56 bg-slate-500 rounded-sm"></div>
  <div className="w-72 h-56 bg-slate-500 rounded-sm"></div>
  <div className="w-72 h-56 bg-slate-500 rounded-sm"></div>
  <div className="w-72 h-56 bg-slate-500 rounded-sm"></div>
</main>
</>
  );
}
