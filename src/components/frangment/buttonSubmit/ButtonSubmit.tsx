"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormStatus } from 'react-dom';

export function ButtonSubmit() {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Loading..." : "Submit"}
      </Button>
    );
  }
