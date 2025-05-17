import React from 'react';
import Image1 from "../../assets/women/women.png";
import Image2 from "../../assets/women/women2.jpg";
import Image3 from "../../assets/women/women3.jpg";

import Image4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
    {
        id: 1,
        image: Image1,
        title: "Women Ethnic ",
        price: 2000,
        rating: 4.5,
        // reviews: 200,
        color: "white",
        aosDelay: "0",
    }
    ,
    {
        id: 2,
        image: Image2,
        title: "Women western",
        price: 4500,
        rating: 5.0,
        color: "red",
        aosDelay: "200",
    }
    ,
    {
        id: 3,
        image: Image3,
        title: "Goggles",
        price: 1500,
        rating: 4.0,
        color: "brown",
        aosDelay: "400",
    }
    ,
    {
        id: 4,
        image: Image4,
        title: "Printed T-shirt",
        price: 3000,
        rating: 4.5,
        color: "yellow",
        aosDelay: "600",
    }    
]
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container mx-auto px-4'>
            {/* header section  */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
                <h1 data-aos="fade-up"  className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Perferendis rem magnam pariatur
                     exercitationem enim sequi,
                      recusandae amet et sit commodi.</p>
            </div>
            {/* body section  */}
            <div>
                <div className='grid grid-cols-1 
                sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5
                place-items-center gap-5'>
                    {/* card section  */}
                    {
                        ProductsData.map((data) => (
                            <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            
                            key={data.id}
                            className='space-y-3'>

                                <img src={data.image} alt={data.title}
                                className='h-[220px] w-[150px] object-cover
                                rounded-md'
                                />
                                <div>

                                    <h3 className='font-semibold'>{data.title}

                                    </h3>
                                    <p className='text-sm text-gray-600 '>{data.color}

                                    </p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400'/>
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                {/* view all products  */}
                <div className='flex justify-center mt-10'>
                    <button className='text-center mt-10
                    cursor-pointer bg-primary text-white py-1
                    px-4 rounded-md '>View All Products</button>
                </div>
            </div>
        </div>
    </div>
  )}
export default Products