"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react'

const data = [
{
    id: 1 ,
    title:"We delivery your order where ever you are" ,
    image: "/slide1.png" ,
},
{
    id:2  ,
    title: "Always fresh hot & crispy" ,
    image:"/slide2.png" ,
},
{
    id: 3 ,
    title:"The best food to share with your family" ,
    image:"/slide3.jpg" ,
},


]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    // useEffect(() => {
    //   const interval = setInterval(() =>setCurrentSlide((prev) => prev === data.length - 1 ? 0 : prev + 1), 2000);
    //   return () => clearInterval(interval);
    // },[])
  return (
    <div className=" flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
        {/*TEXT CONTAINER*/}
        <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold flex-1">
            <h1 className="text-5xl uppercase p-4 md:p-10 text-center md:text-6xl xl:text-7xl">{data[currentSlide].title}
</h1>
            <button className="bg-red-500 text-white py-4 px-8 ">Order Now</button>
        </div>
        {/*IMAGE CONTAINER*/}
        <div className="h-1/2 w-full relative flex-1">
            <Image src={data[currentSlide].image} alt= "" fill className='object-cover'/>
        </div>
    </div>
  )
}

export default Slider