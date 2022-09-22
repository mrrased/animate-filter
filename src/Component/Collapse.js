import React from 'react';
import 'tw-elements';

const Collapse = () => {
    return (
       <div className='bg-green-100'>

            <div className='relative w-[500px] overflow-hidden '>

                <input type="checkbox"  className='absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0 peer' />

                <div className='bg-blue-500 h-12 w-full pl-5 flex items-center peer-checked:bg-red-800 transition-all duration-500'>
                    <h1 className='text-lg font-semibold text-white'>What is Tailwindcss</h1>
                </div>

                <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                </div>

                <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 peer-checked:bg-red-800'>
                    <div className='p-4'>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    </div>
                </div>
            </div>
            <div className='relative w-[500px] overflow-hidden'>

                <input type="checkbox"  className='absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0 peer' />

                <div className='bg-blue-500 h-12 w-full pl-5 flex items-center peer-checked:bg-red-800 transition-all duration-500'>
                    <h1 className='text-lg font-semibold text-white'>What is Tailwindcss Short</h1>
                </div>

                <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                </div>

                <div className='overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 peer-checked:bg-red-800'>
                    <div className='p-4'>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Collapse;