import React from 'react';
import {motion} from 'framer-motion';
import { Navigate, useNavigation } from 'react-router-dom';
import Button from '../UI/Button';
export default function Hero() {
  return (
    <>
      <div className='relative overflow-hidden py-[50px] md:py-[28px] bg-gradient-to-b from red-500 to-blue-500'>
        <div className='container mx-auto px-[4px] relative z-10'>
        <div className='text-center max-width-3xl mx-auto'>
            <div className='text-center text-[30px] md:text-[25px] font-bold text-gray-900'>
                IPL 2025 <span className='text-orange-500'>LIVE SCORE.</span>
                <p className='text-[18px] text-grey-700 mb-8'>Stay Updated with the real time score, team standings and match schedules for the Indian Premier League. </p>
                
                <div className='flex flex-wrap justify-center gap-[4px]'>
                    <Button variant ="primary" size = 'lg' >
                        Live Score
                    </Button>
                    <Button variant ="outline" size = 'lg' >
                        Schedule
                    </Button>
                </div>
            </div>
        </div>
        </div>
        {/* Bat */}
        <div className='absolute top-20 right-[10%] w-[16px] h-[16px] rounded-full bg-red-600 hidden md:block'>
            <div className='absolute botton-10 left-[-5%] w-[8px] h-[64px] bg-gradient-to-b from-amber-900 to-amber-700 rounded-b'></div>
        </div>
    </div>
    </>
  );
}
