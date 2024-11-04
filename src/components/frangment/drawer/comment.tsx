"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "usehooks-ts";
import { Input } from "@/components/ui/input";
import { FaRegCommentDots, FaSearch } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { Separator } from "@/components/ui/separator";
import { CarouselComment } from "../carousel/carousel-comment";

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="hover:scale-105 transition-all">
            <FaRegCommentDots className="text-xl" />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1225px] h-[80vh]">
          <DialogHeader className="hidden pt-3">
            <DialogTitle>cover</DialogTitle>
          </DialogHeader>
          <div className="flex">
            <div className="w-1/2 h-full ">
            <CarouselComment/>
            </div>

            <div className="flex flex-col w-1/2 h-full">
              <div className="w-full h-16 p-3 border border-slate-300">
                <section className="flex gap-2 items-center">
                  <div className="w-10 rounded-full bg-slate-200 h-10"></div>
                  <h1>asdfsdfsdfdsfdasd</h1>
                </section>
              </div>
              <ProfileForm />
              <div className="w-full h-36 border border-slate-300 relative">
                <div className="flex gap-3 pl-3 pt-3">
                  <AiOutlineLike className="text-2xl" />
                  <FiSend className="text-2xl" />
                </div>
                <div className="w-full  border absolute bottom-0 border-slate-300 h-12 bg-red-300">
                  <input
                    type="text"
                    placeholder="   ketikan komentar..."
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="hover:scale-105 transition-all">
          <FaRegCommentDots className="text-xl" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="hidden">Edit profile</DrawerTitle>
          <DrawerDescription>
           komentar postingan
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form
      className={cn(
        "grid items-start gap-4 border p-4 w-full overflow-y-auto h-96",
        className
      )}
    >
      <div className="grid w-full gap-2 h-72">
        <section className="w-11/12 mb-2" >
        <div className="flex gap-2 items-center">
          <div className="w-8 rounded-full bg-slate-200 h-8"></div>
          <h1>usename1</h1>
        </div>
          <p className="whitespace-pre-wrap">
            werwerwrweeeeeeeeeee


            jkgkjgkjasdsadsadsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffdaaaaaaaaa</p>

            <Separator/>
        </section>
        <div className="w-10 rounded-full bg-slate-200 h-10"></div>
        <h1>asdfsdfsdfdsfdasd</h1>
        <div className="w-10 rounded-full bg-slate-200 h-10"></div>
        <h1>asdfsdfsdfdsfdasd</h1>
        <div className="w-10 rounded-full bg-slate-200 h-10"></div>
        <h1>asdfsdfsdfdsfdasd</h1>
        <h1>lkjdfhkldshfkldhfds</h1>
        <h1>lkjdfhkldshfkldhfds</h1>
        <h1>lkjdfhkldshfkldhfds</h1>
        <h1>lkjdfhkldshfkldhfds</h1>
        <h1>lkjdfhkldshfkldhfds</h1>
        <h1>lkjdfhkldshfkldhfds</h1>
        <h1>lkjdfhkldshfkldhfds</h1>
        <h1>lkjdfhkldshfkldhfds</h1>
        <h1>lkjdfhkldshfkldhfds</h1>
      </div>
    </form>
  );
}
