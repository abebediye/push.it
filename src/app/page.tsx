import Button from "@components/Button";
import { setTimeout } from "timers/promises";

async function handleButtonAction() {
  'use server'

  await setTimeout(3000)
  console.log("server action triggered")
}

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-56px)] bg-slate-900 p-5 ">
      <h2>Home page</h2>
      <Button action={handleButtonAction}>Click me</Button>
    </main>
  )
}
