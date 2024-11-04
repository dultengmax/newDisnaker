/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import db from "../db/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export type FormState = {
  message:"string"
}

 
  
  export async function FormregisterValidate(formdata: FormData) {            
    try {
    const email=formdata.get("email");
    const username=formdata.get("username");
    const password=formdata.get("password");
    const data = await db.user.create({
      data: {
        email: email,
        username: username,
        password: password,
      },
    });

  } catch (error) {
    console.log(error);
     
  }
  revalidatePath(`/explore`);
  revalidatePath(`/lowongan`);
  revalidatePath(`/`);
  revalidatePath(`/search`);
  redirect(`/profile`);
}


  export async function FormLoginValidate(email: string, username: string, password: string) {            
    try {




    const data = await db.user.findMany({
      where: {
        email: email,
        username: username,
        password: password,
      },
    });

  } catch (error) {
    console.log(error);
    return {
      message: "terjadi kesalahan",
    };
  }
  revalidatePath(`/explore`);
  revalidatePath(`/lowongan`);
  revalidatePath(`/`);
  revalidatePath(`/search`);
  redirect(`/profile`);
}




export const FinduserbyId = async (id:any)=>{
  try{

 const data = await db.user.findMany({
    where:{id:id},
 }) 
 return data
  }catch(error){
 console.log(error)
  }
}

export const FindPost = async (judul:any)=>{
  try{
 const data = await db.lowongan.findMany({
 where:{title:judul}
}) 
 return data
  }catch(error){
 console.log(error)
  }
}



export const SendComment = async (send:string)=>{
  
  try{

  }catch(error){
    console.log(error)
  }
}