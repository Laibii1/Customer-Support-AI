"use client";

import Spline from '@splinetool/react-spline/next'
import Image from 'next/image'
import Link from 'next/link'
import infoCards from '../lib/infoCards'
import p1 from './profile1.jpg'
import p2 from './profile2.png'
import pricingCards from '../lib/pricingCards'
import { CheckCheck, LucideIcon } from 'lucide-react'
import { ReactElement } from 'react'




export default function Home() {
  return (
    <main className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
     <Navbar />
     
     <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
        <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-black md:text-8xl'>NexBOT</h1>
            <h2 className='text-md md:text-2xl'>Start growing today!</h2>
          </div>
          <p className='max-w-md text-sm md:text-base text-zinc-500'>NexBOT is a cutting-edge AI-driven customer support solution designed to streamline and enhance user 
            interactions with lightning-fast response times. Empower your business with 24/7 
            support that learns and adapts to your customers' needs</p>
          <div className='w-full flex items-center justify-center md:justify-start gap-4'>
            <button className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors'>
              <Link href="/Aipage">Try 7 days free!</Link></button>
              <Link href="#contributor"><button className='w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors'>Contact</button></Link>
          </div>
        </div>

        <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
          <Spline className="w-full flex scale-[0.90] sm:scale-[1]  items-center justify-center md:justify-start" scene='https://prod.spline.design/SjXFLm7uiJQTiqNv/scene.splinecode'/>
        </div>

      </header>
     

      <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
        <div className='absolute -z-10 h-full w-full overflow-hidden'>
          <Spline scene="https://prod.spline.design/EyuUiXtS5o-N4Vbi/scene.splinecode"/>
        </div>
        <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
          <h3 className='text-4xl md:text-5xl font-bold'>No More Time Wasted!</h3>
          <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
            {infoCards.map((infoCard) => {
              return (
                <InfoCard key={infoCard.id} Icon={infoCard.icon} title={infoCard.title}>
                  <p className="text-sm sm:text-base text-center md:text-left">{infoCard.bodyText}</p>
                </InfoCard>
              )
            })}
          </div>
        </div>
     </section>
     <br/>
     <h3 className='text-4xl md:text-5xl font-bold'>Pricing!</h3>
     <section id="pricing" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
        <div className='absolute -z-10 h-full w-full overflow-hidden'>
          <Spline scene="https://prod.spline.design/2CeY7DqLtRhiWVI3/scene.splinecode"/>
        </div>
        <div className="w-full h-full flex items-center justify-center flex-col gap-6 max-w-7xl">
          
          <div className="w-full grid grid-cols-1 grid-rows-2 md:grid-cols-1 md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 gap-4 justify-between relative">
          {pricingCards.map((pricingCard) => {
              return (
                <PricingCard oneliner={pricingCard.oneliner} title={pricingCard.title} price={pricingCard.price} benefits={pricingCard.benefits} key={pricingCard.id}/>
              )
            })}
          </div>
        </div>
      </section>



     <section id="contributor" className="h-fit min-h-screen w-full flex flex-col items-center justify-center gap-8 p-8">
        <h4 className="text-4xl md:text-5xl font-bold">Contributors</h4>
        <div className='grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center h-fit w-full max-w-3xl gap-8'>
          <div className='h-fit w-full rounded flex flex-col p-8 gap-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
           <div className='flex flex-col gap-2 items-center'>
           <Image className="rounded-full aspect-square object-cover border-2 border-white-500/50" 
           src={p1} width={250} height={250} alt="Picture of the author" />
             <div>
              <h6 className='text-2xl'>Laiba Riaz</h6>
              <p className='text-sm text-zinc-500'>Software Engineering Student @LGU | Frontend Developer | Software Engineering Fellow at Headstarter AI |</p>
             </div>
           </div>
            <button className='bg-fuchsia-700 rounded p-2 text-sm transition-colors hover:bg-fuchsia-800'>
             <Link href={'https://www.linkedin.com/in/laiba--riaz/'}>View Profile</Link>
            </button>
          </div>


          <div className='h-fit w-full rounded flex flex-col p-8 gap-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
           <div className='flex flex-col gap-2 items-center'>
           <Image  className="rounded-full aspect-square object-cover border-2 border-white-500/50" 
           src={p2} width={250}  height={250} alt="Picture of the author" />
             <div>
              <h6 className='text-2xl'>Muhammad Furqan</h6>
              <p className='text-sm text-zinc-500'>Software Engineer @LGU | Web Developer | React js | Frontend Developer | Driven to explore AI & Cybersecurity.</p>
             </div>
           </div>
            <button className='bg-fuchsia-700 rounded p-2 text-sm transition-colors hover:bg-fuchsia-800'>
            <Link href={'https://www.linkedin.com/in/muhammmadfurqan56/'}>View Profile</Link>
            </button>
          </div>
       </div>
    </section>

    <Footer />

    </main>
  )
}


/* for about section */
interface IInfoCardProps {
  title:string;
  Icon:LucideIcon;
  children:ReactElement<any,any>
}

function InfoCard({title,Icon,children}:IInfoCardProps) {
  return (
    <div className='w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className="p-4 bg-fuchsia-700 rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className='text-lg font-bold sm:text-xl'>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  )
}


interface IPricingCardProps {
  title:string;
  price:number;
  benefits:string[]
  oneliner:string;
}

function PricingCard({title,price,benefits,oneliner}:IPricingCardProps) {
  return (
    <div className='h-fit w-full rounded flex flex-col p-8 gap-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className='flex flex-col gap-2'>
        <div>
          <h6 className='text-2xl'>{title}</h6>
          <p className='text-sm text-zinc-500'>{oneliner}</p>
        </div>
        <p className='text-4xl font-bold'>
          ${price} <span className='text-sm font-normal text-zinc-500'>/ Month</span>
        </p>
      </div>
      <Link href="/Aipage">  <button className='bg-fuchsia-700 rounded p-2 text-sm transition-colors hover:bg-fuchsia-800'>Try 7 days free!</button></Link>
      <div className='flex flex-col w-full gap-4'>
        {benefits.map((benefit, i) => {
          return(
            <p key={i} className='text-sm text-zinc-500 flex items-center gap-2'>
              <span>
                <CheckCheck />
              </span>
              {benefit}
            </p>
          )
        })}
      </div>
    </div>
  )
}



/* for Navbar */
function Navbar() {
  return (
    <div className='w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <h6 className='font-bold'>NexBOT</h6>
        <ul className='flex gap-8'>
        <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#about">About</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#pricing">Pricing</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#contributor">Contributors</Link></li>
        </ul>
      </div>

    </div>
  )
}

function Footer() {
  return (
    
    <div className='w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
       <div className='absolute -z-10 h-full w-full overflow-hidden'>
          <Spline scene="https://prod.spline.design/r8OYkgUTmWHeFPQ9/scene.splinecode"/>
        </div>
        <h3 className='font-bold'>GoodBye!!</h3>
        
    </div>
  )
}