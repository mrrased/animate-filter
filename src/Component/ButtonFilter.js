import React, { useEffect } from 'react';

const ButtonFilter = ({setFiltered, activeData, setActiveData, products}) => {

    // console.log(activeData);

    useEffect(()=>{
        if(activeData === 'flight'){
            setFiltered(products);
            return;
        }
        const spItems = products.filter(item => item.type.includes(activeData));
        // console.log(spItems);
        setFiltered(spItems)
    },[activeData])
    return (
        <div className='flex space-x-4 justify-center  my-6'>

            <button onClick={()=>setActiveData('flight') } className='bg-pink-blue py-3 px-5 text-white hover:bg-green-400 hover:text-smooth-black transition delay-150 duration-300'>Flight</button>
            <button onClick={()=>setActiveData('rental') } className='bg-pink-blue py-3 px-5 text-white hover:bg-green-400 hover:text-smooth-black transition delay-150 duration-300 '>Car Rental</button>
            <button onClick={()=>setActiveData('taxi') } className='bg-pink-blue py-3 px-5 text-white hover:bg-green-400 hover:text-smooth-black transition delay-150 duration-300'>Taxis</button>

        </div>
    );
};

export default ButtonFilter;