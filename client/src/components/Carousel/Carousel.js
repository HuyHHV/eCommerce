import React, { useState } from 'react';
import styled from 'styled-components';
import {BiLeftArrow,BiRightArrow} from 'react-icons/bi';

const Wrapper = styled.div`
    transform: translateX(${props=>props.index * -100}vw)
    `


function Carousel() {
    const [index,setIndex] = useState(0)
    const handleClick = (direction) => {
    
        if(direction==="left"){
            return setIndex(index > 0 ? index -1 : 2)
        } 
        else {
            setIndex(index < 2 ? index +1 : 0)
        }
    
    };
  return (
    <div className='container md:flex hidden relative h-80vh mx-auto my-4 items-center flex-wrap overflow-hidden '>
        <button 
            className='text-3xl z-10 absolute top-0 bottom-0 left-5 m-auto opacity-50' 
            onClick={() => handleClick('left')}>
            <BiLeftArrow />
        </button>
        <Wrapper index={index} className={` flex transition ease-in-out duration-500 h-full z-0 `}> 
            <div className={`bg-pink-100  w-screen flex  `}>
                <div className='h-full flex-1'>
                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="shoppinh" 
                    className='h-full'
                    />
                </div>
                <div className='p-6 h-full flex-1 flex flex-col gap-8 justify-center items-center font-bold '>
                    <h1 className='text-6xl py-5 text-red-400'>Flash sale| 50% OFF ALL SNEAKER</h1>
                    <button className='rounded border border-black border-4 p-1 hover:text-gray-300 hover:bg-gray-900'>Browse Sneakers</button>
                </div>
            </div>
            <div className={`bg-yellow-100  w-screen flex `}>
                <div className='h-full w-1/2 flex-1'>
                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="shoppinh" 
                    className='h-full'
                    />
                </div>
                <div className='p-6 flex-1 flex flex-col gap-8 justify-center items-center font-bold '>
                    <h1 className='text-6xl py-5 text-red-400'>Flash sale| 50% OFF ALL SNEAKER</h1>
                    <button className='rounded border border-black border-4 p-1 hover:text-gray-300 hover:bg-gray-900'>Browse Sneakers</button>
                </div>
            </div>
            <div className={`bg-blue-100  w-screen flex `}>
                <div className='h-full w-1/2 flex-1'>
                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="shoppinh" 
                    className='h-full'
                    />
                </div>
                <div className='p-6 flex-1 flex flex-col gap-8 justify-center items-center font-bold '>
                    <h1 className='text-6xl py-5 text-red-400'>Flash sale| 50% OFF ALL SNEAKER</h1>
                    <button className='rounded border border-black border-4 p-1 hover:text-gray-300 hover:bg-gray-900'>Browse Sneakers</button>
                </div>
            </div>
        </Wrapper>
        <button 
            className='text-3xl z-10 absolute top-0 bottom-0 right-2 m-auto opacity-50' 
            onClick={() => handleClick('right')}>
            <BiRightArrow />
        </button>
    </div>
  )
}

export default Carousel