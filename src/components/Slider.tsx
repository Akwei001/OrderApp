"use client"

import React from 'react'
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
    image:"/slide3.png" ,
},


]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(1)
  return (
    <div className=" flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
        {/*TEXT CONTAINER*/}
        <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
            <h1 className="text-5xl uppercase p-4 text-center md:text-6xl xl:text-7xl">{data[currentSlide].title}
</h1>
            <button className="bg-red-500 text-white py-4 px-8 ">Order Now</button>
        </div>
        {/*IMAGE CONTAINER*/}
        <div className="h-1/2 w-full relative">
            <Image src={data[currentSlide].image} alt= "" fill className='object-cover'/>
        </div>
    </div>
  )
}

export default Slider