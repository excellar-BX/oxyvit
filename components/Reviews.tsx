"use client"
import React, { useState } from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import {Pagination, Navigation, Autoplay} from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/bundle'
import { BiArrowBack } from 'react-icons/bi'
import { SwiperNavButton } from './Button'




const Reviews = () => {

  const reviewData = [
    {id:1, user_pic:'/review1.png', user:'Saint Dennis', review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint animi tempore quo esse id dolor iste! Tenetur, eveniet quam voluptas, temporibus veniam iste illum dolor cupiditate quos ab totam rerum?"},
    {id:2, user_pic:'/review2.png', user:'Alice Winifred', review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint animi tempore quo esse id dolor iste! Tenetur, eveniet quam voluptas, temporibus veniam iste illum dolor cupiditate quos ab totam rerum?"},
    {id:3, user_pic:'/review1.png', user:'Joe Brandon', review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint animi tempore quo esse id dolor iste! Tenetur, eveniet quam voluptas, temporibus veniam iste illum dolor cupiditate quos ab totam rerum?"},
    {id:4, user_pic:'/review3.png', user:'Favours Excellence', review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint animi tempore quo esse id dolor iste! Tenetur, eveniet quam voluptas, temporibus veniam iste illum dolor cupiditate quos ab totam rerum?"},
    {id:5, user_pic:'/review2.png', user:'Jane', review:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint animi tempore quo esse id dolor iste! Tenetur, eveniet quam voluptas, temporibus veniam iste illum dolor cupiditate quos ab totam rerum?"},
  ]


  const [active, setActive] = useState<number>()
    return (
    <div className='max-md:mx-5 mx-20 ' >
      <div className='max-md:text-3xl text-5xl w-fit my-10 text-center mx-auto font-semibold review-text title  after:w-24 after:bg-emerald-800 after:h-2 after:flex ' ><span className='text-emerald-800 ' >Our </span> Reviews</div>

      <Swiper 
      slidesPerView={3} 
      onSlideChange={(cur) => setActive(cur.realIndex)}
      loop={true}
      grabCursor={true}
      className='swiper_container max-w-[90%] my-10 pb-5 '
      centeredSlides={true}
      autoplay={{ delay: 3000, }}
      pagination={{clickable:true, }}
      navigation= {true}
      breakpoints={{
        340:{slidesPerView:1},
        768:{slidesPerView:2},
        1024:{slidesPerView:3},
    }}
      modules={[Pagination, Navigation, Autoplay]}
      speed={800}
      >
        {reviewData.map((data, index) => (
      <SwiperSlide key={data.id} >
           <div  className={`py-20 text-center ${active === index ? 'scale-125 ' : 'scale-100'} `} >
           <div className="relative"> <Image
      src={data.user_pic}
      fill={true}
      className=" mx-auto rounded-full w-20 h-20 object-cover " 
      alt="reviews"/></div>
           <div className="user_name text-2xl text-emerald-700 font-semibold my-4 ">{data.user}</div>
           <div className="rewiew text-sm text-gray-600 max-w-[80%] mx-auto italic ">"{data.review}"</div>
           </div>
        </SwiperSlide>
        ))}
       
     

        <SwiperNavButton/>

      </Swiper>


    </div>
  )
}

export default Reviews
