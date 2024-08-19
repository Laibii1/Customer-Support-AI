"use client";
import { Chatbot } from "@/components/component/chatbot";
import Link from 'next/link';
import Spline from '@splinetool/react-spline/next';

export default function Aipage() {
  return (
    <main>
      <div className='absolute -z-10 h-full w-full overflow'>
      <Spline
         scene="https://prod.spline.design/r0f3ijDfChCte7vB/scene.splinecode" 
         />
         </div>
      
      <Navbar /> <br/><br/>
      <Chatbot />
      
    </main>
  );
}

/* for Navbar */
function Navbar() {
  return (
    <div className='w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <Link href="/"><h6 className='font-bold'>NexBOT</h6></Link>
        <ul className='flex gap-8'>
        <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="/#about">About</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="/#pricing">Pricing</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="/#contributor">Contributors</Link></li>
        </ul>
      </div>

    </div>
  )
}
