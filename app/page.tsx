import React from 'react'
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from 'next/image'
import mic from "./images/image-removebg-preview.png"
import NavBar from './components/NavBar'
import { BadgeDollarSign, Lightbulb, FolderKanban } from 'lucide-react';
import review1 from "./images/review1.jpg"
import review2 from "./images/review2.png"
import Testimonial from './components/Testimonial';
import logo1 from "./images/1.png"
import logo2 from "./images/2.png"
import logo3 from "./images/3.png"
import logo4 from "./images/4.png"
import logo5 from "./images/5.png"
import logo6 from "./images/6.png"
import Footer from './components/Footer';
export default function Home() {
  return (
    <>
      <NavBar />
      {/*HERO SECTION*/}
      <div className=" text-white flex justify-between " >
        <div className='flex flex-col w-8/12 justify-center gap-6'>
          <p className='text-6xl'> Helping Reach the right audience,faster </p>
          <p className='text-xl w-2/3'>Helping the world's best podcasts & organizations
            reach their ideal listeners.</p>

          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-32">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Contact Us
            </span>
          </button>
        </div>
        <div className=''>
          <Image src={mic} alt='MIC' width={400} />
        </div>
      </div>
      {/*CARDS*/}
      <div className='flex justify-center items-center flex-col my-12'>
        <h1 className='text-7xl text-white'>How We Can Help</h1>

        <div className='text-white flex items-center justify-center my-12 gap-10'>
          <Card className="py-4 w-1/3 shadow-sm shadow-cyan-500/30">
            <CardBody className="overflow-visible py-2">
              <BadgeDollarSign size={45} className='hover:text-green-600' />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Production</p>
              <small className="text-default-500">You show up to record. We take care of the rest. Our #1 goal → your guests and listeners have a world-class experience, without you having to lift a finger.</small>
            </CardHeader>
          </Card>

          <Card className="py-4 w-1/3 shadow-sm shadow-cyan-500/30">
            <CardBody className="overflow-visible py-2">
              <FolderKanban size={45} className='hover:text-cyan-600' />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Marketing</p>
              <small className="text-default-500">We'll maximize the reach of your show by creating promotional assets and targeting ideal listeners who'll resonate with your show.</small>
            </CardHeader>
          </Card>

          <Card className="py-4 w-1/3 shadow-sm shadow-cyan-500/30">
            <CardBody className="overflow-visible py-2">
              <Lightbulb size={45} className=' hover:text-yellow-400' />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Strategy</p>
              <small className="text-default-500">We'll develop a content strategy, advise appropriate equipment & software, and create a promotional plan to grow a loyal listener base.</small>
            </CardHeader>
          </Card>
        </div>
      </div>
      {/*Collabs */}
      <div className='flex flex-col text-white text-center justify-center my-16 overflow-hidden'>
        <h1 className=' font-extrabold text-4xl'>OUR COLLABORATIONS</h1>
        <div className='flex gap-10'>
          <Image src={logo1} alt='...' width={200} className='transition hover:translate-x-4 ' />
          <Image src={logo2} alt='...' width={200} />
          <Image src={logo3} alt='...' width={200} />
          <Image src={logo4} alt='...' width={200} />
          <Image src={logo5} alt='...' width={200} />
          <Image src={logo6} alt='...' width={200} />

        </div>

      </div>


      {/*CAROUSEL*/}
      <div className='flex flex-col my-12 text-white text-center justify-center'>
        <h1 className=' text-4xl font-bold'>OUR HAPPY CUSTOMERS</h1>
        <div className='flex text-white gap-12 my-20' data-carousel="slide">
          <Testimonial
            image={review1}
            name="Brad Barrett"
            position=" Co-host of ChooseFI - Top 50 Business Podcast"
            exp="We were blown away by Jonathan and his team. They exceeded expectations every step of the way: courteous, professional, always reachable and really good at their craft" />
          <Testimonial
            image={review2}
            name="Brad Barrett"
            position=" Co-host of ChooseFI - Top 50 Business Podcast"
            exp="We were blown away by Jonathan and his team. They exceeded expectations every step of the way: courteous, professional, always reachable and really good at their craft" />

        </div>
      </div>
      <Footer />
    </>
  );
}



