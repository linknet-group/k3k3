'use client'
/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Scrollbar } from 'swiper/modules';
import k3k31 from "../../../public/k3k31.jpeg"
import k3k32 from "../../../public/k3k32.jpeg"
import k3k33 from "../../../public/k3k33.jpeg"
import k3k34 from "../../../public/k3k34.jpeg"
import Image from 'next/image';


const SwiperPage = () => {
  return (
    <div>
    
      <Swiper className='mt-[-269px]'
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation 
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true,  }}
      >
      <SwiperSlide className='p-[0px]'>
          <div className='mt-[0px]'>
          <Image src={k3k32} alt='k3k31' className='w-full h-[100vh]  m-auto'></Image>
<div className='mt-[20px]'>
<h2 className='text-center font-bold text-[1.5rem]'>Request Ride</h2>
          <p className='p-[20px] text-center'>
            Discover hassle-free keke bookings with just a tap.
            Wherever you are headed, we got you covered
          </p>
</div>
          
          </div>
       
        </SwiperSlide>

        <SwiperSlide>
          <div >
          <Image src={k3k33} alt='k3k31' className='w-[100%] h-[100vh] m-auto'  ></Image>
          <div className='mt-[20px]'>
<h2 className='text-center font-bold text-[1.5rem]'>Book Driver</h2>
          <p className='p-[20px]  text-center'>
            Easily book a reliable keke driver through our app. Enjoy a smooth
            journey to your destination!
          </p>
</div>
          
          </div>
       
        </SwiperSlide>


        <SwiperSlide className='p-[0px]'>
          <div className='mt-[40px]'>
          <Image src={k3k34} alt='k3k31' className='w-[100%]  h-[95vh] m-auto'></Image>
          <div className='m-[20px]'>
<h2 className='text-center font-bold text-[1.5rem]'>Track Driver</h2>
          <p className='p-[20px] text-center'>
            Stay updated in real-time on your keke driver location to know exactly
            when they will arrive!
          </p>
</div>
          </div>
       
        </SwiperSlide>





      </Swiper>
      
    </div>
  );
};

export default SwiperPage;