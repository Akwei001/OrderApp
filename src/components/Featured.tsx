import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/*WRAPPER*/}
      <div className="">
        {/*SINGLE ITEM*/}
        <div className="">
          {/*IMAGE CONTAINER*/}
          <div className="relative">
            <Image src="" alt="" fill />
          </div>
          {/*TEXT CONTAINER*/}
          <div className="">
            <h1 className=""></h1>
            <p>Description</p>
            <span>123</span>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured