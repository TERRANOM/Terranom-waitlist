import Image from "next/image";
import prisma from "./lib/db";
import { addUser } from "@/actions/actions";
import "./globals.css";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
<main className="grid grid-cols-1 md:grid-cols-auto md:grid-flow-col h-screen font-poppins">
  <div className="bg-[url('/img/gradient.png')] p-20 flex flex-col justify-center">
    <h1 className="text-7xl text-green-800 mb-4">Terranom</h1>
    <p className="text-2xl mb-2">Introducing <span className="text-blue-600 font-bold underline">emerging technology</span> into agriculture in an <span className="font-bold text-green-600 underline">affordable</span> fashion to increase <span className="font-bold text-purple-600 underline">crop efficiency</span></p>
    <p className="text-lg mb-6">Join us for updates on our journey, and be the first one to be notified to try our product for <span className="font-bold">free!</span></p>
    <form action={addUser} className="flex flex-wrap grid grid-cols-1 gap-4 w-3/4">
      <input type="text" name="name" placeholder="Name" className="p-2 border border-gray-300 rounded"/>
      <input type="text" name="email" placeholder="Email" className="p-2 border border-gray-300 rounded"/>
      <button type="submit" className="text-3xl btn p-4 text-green-800 ">Join the waitlist</button>
      <span className="text-gray-500 italic">Not convinced? Scroll to learn more!</span>
    </form>
  </div>

  <div className="relative h-full flex items-center justify-center overflow-hidden">
    <img src="/img/drone-grain.png" alt="Drone" className="object-contain max-h-full max-w-full"/>
  </div>
</main>



  );
}
