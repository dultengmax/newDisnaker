"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ButtonSubmit } from "../buttonSubmit/ButtonSubmit"
import { FormregisterValidate } from "@/lib/action/action"

export function FormLoginD() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] h-[50vh]">
        <DialogHeader>
          <DialogTitle>masukan akun</DialogTitle>
          <DialogDescription>
            selamat datang,silahkan masukan akun terlebih dahulu
          </DialogDescription>
        </DialogHeader>
        <form action={FormregisterValidate}>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="name" className="text-right">
              email
            </Label>
            <Input
              id="name"
              name="email"
              defaultValue="Pedro Duarte"
              className="col-span-3"
              placeholder="isi email kamu"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="username" className="text-right">
              password
            </Label>
            <Input
              id="username"
              name="password"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <ButtonSubmit/>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
