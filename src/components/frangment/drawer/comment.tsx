"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useMediaQuery } from 'usehooks-ts'
import { Input } from "@/components/ui/input"
import { FaRegCommentDots } from "react-icons/fa";

export function DrawerDialogDemo() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button className="hover:scale-105 transition-all">    
                        <FaRegCommentDots className="text-xl" />
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[1025px] h-[70vh]">
                    <DialogHeader aria-hidden>
                        <DialogTitle>cover</DialogTitle>
                    </DialogHeader>
                    <div className="flex gap-5">
                        <div className="w-1/2 h-full bg-slate-300"></div>
                        <ProfileForm />
                    </div>
                </DialogContent>
            </Dialog>
        )
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
                    <DrawerTitle>Edit profile</DrawerTitle>
                    <DrawerDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
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
    )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
    return (
        <form className={cn("grid items-start gap-4 border p-4 w-1/2", className)}>
            <div className="grid gap-2">
                <h1>lkjdfhkldshfkldhfds</h1>
                <h1>lkjdfhkldshfkldhfds</h1>
                <h1>lkjdfhkldshfkldhfds</h1>
                <h1>lkjdfhkldshfkldhfds</h1>
            </div>
            <div className="grid gap-2">
                <Input id="username" defaultValue="@shadcn" />
            </div>
            <Button type="submit">Save changes</Button>
        </form>
    )
}
