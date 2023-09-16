
import ActionButton from "@components/Button";
import { setTimeout } from "timers/promises";

async function handleButtonAction() {
  'use server'

  await setTimeout(3000)
  console.log("server action triggered")
}

export default function Home() {
  return (
    <>
      <h2>Home page</h2>
      <ActionButton action={handleButtonAction} color="primary">Click me</ActionButton>
    </>
  )
}
