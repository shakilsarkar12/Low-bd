import React from 'react';
import { TbCalendarHeart } from 'react-icons/tb';

const BlogCard = ({blog}) => {
    
    const { question, answer, date } = blog;

    return (
        <div className='bg-gray-100 p-4 md:p-6 rounded-lg'>
            <h1 className='font-semibold md:font-bold text-xl md:text-2xl my-4'>{question}</h1>
            <div className='border-b-2 border-dashed border-gray-300 my-5 '></div>
            <h2 className='text-base md:text-lg font-semibold my-2 text-[#176ae5]'>Answer:</h2>
            <p className='text-base md:text-lg font-medium opacity-60'>{answer}</p>
            <div className='border-b-2 border-dashed border-gray-300 my-5 '></div>
            <p className='flex  items-center gap-2 font-semibold md:font-bold opacity-50'><TbCalendarHeart size={25}/> Added at {date}</p>
        </div>
);
};

export default BlogCard;<h1>{}</h1>