import React, { useEffect, useState } from 'react';
import ShowFilter from './ShowFilter';
import img1 from '../Images/offer-1.jpg';
import img2 from '../Images/offer-2.jpg';
import img3 from '../Images/offer-3.jpg';
import img4 from '../Images/offer-4.jpg';
import img5 from '../Images/offer-5.jpg';
import img6 from '../Images/offer-6.jpg';
import img7 from '../Images/offer-7.jpg';
import img8 from '../Images/offer-8.jpg';
import ButtonFilter from './ButtonFilter';
import { motion, AnimatePresence } from "framer-motion";




const data = [
    {
       id:1,
       img: img1,
       type: 'car-rental',
       date:"09 Jun 2022 - 16 Jun 2022",
       title:"Dubai (DXB)",
       country:"New York (USA)",
       classes:"Economy from",
       price:195
    },
    {
       id:2,
       type: 'car-rental',
       img: img2,
       date:"09 Jun 2022 - 16 Jun 2022",
       title:"Switzerland (SWL)",
       country:"New York (USA)",
       classes:"Business Class",
       price:800
    },
    {
       id:3,
       type: 'car-rental',
       img: img3,
       date:"09 Jun 2022 - 16 Jun 2022",
       title:"Denmark (DEK)",
       country:"New York (USA)",
       classes:"Economy from",
       price:260
    },
    {
       id:4,
       type: 'taxi',
       img: img4,
       date:"09 Jun 2022 - 16 Jun 2022",
       title:"Jakarta (DXB)",
       country:"New York (USA)",
       classes:"Business Class",
       price:240
    },
    {
       id: 5,
       type: 'taxi',
       img: img5,
       date:"09 Jun 2022 - 16 Jun 2022",
       title:"Dubai (DXB)",
       country:"New York (USA)",
       classes:"Economy from",
       price:195
    },
    {
       id: 6,
       type: 'car-rental',
       img: img6,
       date:"09 Jun 2022 - 16 Jun 2022",
       title:"Dubai (DXB)",
       country:"New York (USA)",
       classes:"Economy from",
       price:195
    },
    {
       id:7,
       type: 'taxi',
       img: img7,
       date:"09 Jun 2022 - 16 Jun 2022",
       title:"Switzerland (SWL)",
       country:"New York (USA)",
       classes:"Economy from",
       price:195
    },
    {
       id:8,
       type: 'car-rental',
       img: img8,
       date:"09 Jun 2022 - 16 Jun 2022",
       title:"Turkish (SWL)",
       country:"New York (USA)",
       classes:"Business Class",
       price:740
    }
 ]

const Filter = () => {

    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeData , setActiveData] = useState('');


    useEffect(()=>{
      //   fetch('https://jsonplaceholder.typicode.com/photos')
      //   .then(res =>res.json())
      //   .then(data => data)
      motionEffective();
    },[])

    const motionEffective = async () =>{
      setProducts(await data);
        setFiltered(await data);
    }

    // console.log(filtered);
    return (
       <div>
            <div>
                <ButtonFilter 
                products={products}  
                setActiveData={setActiveData} 
                activeData={activeData}
                setFiltered={setFiltered}
                />
            </div>
            <motion.div 
            
            layout 
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4'>
                <AnimatePresence>
                {
                    filtered.map(items => <ShowFilter key={items.id} items={items} />)
                }
                </AnimatePresence>
            </motion.div >
       </div>
    );
};

export default Filter;