import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CountUpSet = () => {
    const [counterOn, setCountOn] = useState(false)

    return (
        <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)} >
        <div className='my-8'>
            <h1 className='my-12'>This Is A CountUp</h1>
            <h1 className='my-12'>This Is A CountUp</h1>
            <h1 className='my-12'>This Is A CountUp</h1>
            <h1 className='my-12'>This Is A CountUp</h1>

            <h1 className='text-center'>
                {
                    counterOn && <CountUp start={0} end={5340} duration={2} delay={0} />
                }
                +
            </h1>
        </div>
        </ScrollTrigger>
    );
};

export default CountUpSet;