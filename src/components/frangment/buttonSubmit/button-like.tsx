"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

export function ButtonLike() {
  const [likes, setLikes] = useState(false);
  const { pending } = useFormStatus();

  return (
    <>
        <button
          onClick={(e:any) => setLikes(!likes)}
          className=" hover:scale-105"
        >
          {likes === false ? (
            <AiOutlineLike className="text-xl" />
          ) : (
            <AiFillLike className="text-xl" />
          )}
        </button>
    </>
  );
}
