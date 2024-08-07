// pages/index.tsx
import Image from "next/image";
import prisma from "@/app/lib/db";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "./globals.css";

export default async function Home() {
  return (
    <div>
      <main className="grid grid-cols-1 md:grid-cols-auto md:grid-flow-col h-auto md:h-screen font-poppins">
        <div className="bg-[url('/img/gradient.png')] p-6 md:pl-20 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl text-green-800 mb-4">Terranom</h1>
          <p className="text-xl md:text-2xl mb-2">
            Introducing <span className="text-blue-600 font-bold underline">emerging technology</span> into agriculture in an <span className="font-bold text-green-600 underline">affordable</span> fashion to increase <span className="font-bold text-purple-600 underline">crop efficiency</span>
          </p>
          <p className="text-md md:text-lg mb-6">
            Join us for updates on our journey, and be the first one to be notified to try our product for <span className="font-bold">free!</span>
          </p>
          <Form />
        </div>

        <div className="relative h-64 md:h-full flex items-center justify-center overflow-hidden hidden lg:block">
          <img src="/img/drone-grain.png" alt="Drone" className="object-contain max-h-full max-w-full" />
        </div>
      </main>

      <div className='bg-background-gray md:h-auto object-contain m-0'>
        <div className="h-full bg-background-green md:bg-transparent md:bg-green-bg md:bg-bottom md:bg-contain md:bg-repeat-x">
          <div className="pb-16">
            <p className="font-[Inter] text-center text-3xl md:text-5xl text-white p-8 md:p-16 font-bold">HOW?</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center pb-20">
              <div className="flex flex-col items-center">
                <img src="/img/emerging_tech.png" className="object-scale-down max-w-full"></img>
                <p className="text-white font-bold text-xl md:text-2xl pt-4">Emerging Technologies</p>
                <p className="text-white px-24 font-thin py-2 text-base md:text-lg">Using Machine Learning models to make suggestions based upon previous data</p>

              </div>
              <div className="flex flex-col items-center">
                <img src="/img/affordable.png" className="object-scale-down max-w-full"></img>
                <p className="text-white font-bold text-xl md:text-2xl pt-4">Affordable</p>
                <p className="text-white px-24 font-thin py-2 text-base md:text-lg">We have a shared system, making high-end costs such as drones and anaysis accessible to anyone.</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/img/efficient.png" className="object-scale-down max-w-full"></img>
                <p className="text-white font-bold text-xl md:text-2xl pt-4">Crop Efficiency</p>
                <p className="text-white px-24 font-thin py-2 text-base md:text-lg">Our data collection paired with predicitive analysis Is the perfect solution for farming efficiency</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center text-center">
          <p className="text-3xl md:text-8xl lg:text-8xl text-corals-red font-black text-left w-full md:w-5/6 py-12 md:py-28 pl-4 leading-tight md:leading-tight lg:leading-tight">
            We want to revolutionize the <span className="text-deeps-green">agriculture</span> industry.
          </p>
        </div>


      </div>

      <Footer></Footer>
    </div>
  );
}
