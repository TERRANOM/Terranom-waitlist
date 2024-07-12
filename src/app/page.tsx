// pages/index.tsx
import Image from "next/image";
import prisma from "@/app/lib/db";
import Form from "./components/Form";
import "./globals.css";

export default async function Home() {
  // const users = await prisma.user.findMany();

  return (
    <div>
      <main className="grid grid-cols-1 md:grid-cols-auto md:grid-flow-col h-screen font-poppins">
        <div className="bg-[url('/img/gradient.png')] pl-20 flex flex-col justify-center">
          <h1 className="text-7xl text-green-800 mb-4">Terranom</h1>
          <p className="text-2xl mb-2">
            Introducing <span className="text-blue-600 font-bold underline">emerging technology</span> into agriculture in an <span className="font-bold text-green-600 underline">affordable</span> fashion to increase <span className="font-bold text-purple-600 underline">crop efficiency</span>
          </p>
          <p className="text-lg mb-6">
            Join us for updates on our journey, and be the first one to be notified to try our product for <span className="font-bold">free!</span>
          </p>
          <Form />
          {/* <span className="text-gray-500 italic">Not convinced? Scroll to learn more!</span> */}
        </div>

        <div className="relative h-full flex items-center justify-center overflow-hidden">
          <img src="/img/drone-grain.png" alt="Drone" className="object-contain max-h-full max-w-full" />
        </div>

      </main>

      <div className='bg-background-gray h-screen object-contain m-0'>
        <div className="bg-[url('/img/green_bg.png')] bg-contain object-contain m-0 w-screen h-screen">

          <p className="font-[Inter] justify-center text-center text-5xl text-white p-16 font-bold">HOW?</p>
          <div className="grid grid-cols-3">
            <div className="justify-center block object-center text-center">
              <div className="flex justify-center items-center">
                <img src="/img/emerging_tech.png" className="object-scale-down object-center"></img>
              </div>
              <p className="text-white font-bold text-2xl justify-center object-center pt-4">Emerging Technologies</p>          
            </div>
            <div className="justify-center block object-center text-center">
              <div className="flex justify-center items-center">
                <img src="/img/affordable.png" className="object-scale-down justify-center object-center"></img>
              </div>
              <p className="text-white font-bold text-2xl justify-center object-center pt-4">Affordable</p>          
            </div>
            <div className="justify-center block object-center text-center">
              <div className="flex justify-center items-center">
                <img src="/img/efficient.png" className="object-scale-down object-center"></img>
              </div>
              <p className="text-white font-bold text-2xl justify-center object-center pt-4">Crop Efficiency</p>          
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
