'use client'

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
    
      <Swiper className='mt-[-100px]'
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation 
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true,  }}
      >
      <SwiperSlide className='p-[0px]'>
          <div className='mt-[0px]'>
          <Image src={k3k32} alt='k3k31' className='w-fit h-fit'></Image>
          <p className='p-[50px] mt-[0px] text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quod sequi optio facilis nisi deserunt libero voluptatem quidem voluptates iusto!</p>
          </div>
       
        </SwiperSlide>

        <SwiperSlide>
          <div >
          <Image src={k3k33} alt='k3k31' className='w-fit h-fit ' ></Image>
          <p className='p-[50px] mt-[0px] text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quod sequi optio facilis nisi deserunt libero voluptatem quidem voluptates iusto!</p>
          </div>
       
        </SwiperSlide>


        <SwiperSlide className='p-[0px]'>
          <div className='mt-[0px]'>
          <Image src={k3k34} alt='k3k31' className='w-fit h-fit'></Image>
          <p className='p-[50px] mt-[0px] text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quod sequi optio facilis nisi deserunt libero voluptatem quidem voluptates iusto!</p>
          </div>
       
        </SwiperSlide>





      </Swiper>
      
    </div>
  );
};

export default SwiperPage;