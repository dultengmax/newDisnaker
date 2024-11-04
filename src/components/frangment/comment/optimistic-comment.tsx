'use client'
 
import { SendComment } from '@/lib/action/action'
import { useOptimistic } from 'react'
 
type Message = {
  message: string
}
 
export function Thread({ messages }: { messages: Message[] }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    Message[],
    string
  >(messages, (state, newMessage) => [...state, { message: newMessage }])
 
  const formAction = async (formData:any) => {
    const message = formData.get('message') as string
    addOptimisticMessage(message)
    await SendComment(message)
  }
 
  return (
    <div>
      {optimisticMessages.map((m, i) => (
        <div key={i}>{m.message}</div>
      ))}
      <form action={formAction}>
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}