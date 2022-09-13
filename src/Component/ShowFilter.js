import React from 'react';
import { motion } from "framer-motion";

const ShowFilter = ({items}) => {
    return (
        <motion.div 
        className="box"
        layout
        initial={{opacity: 0, scale: .9}}
        animate={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: .9}}
        transition={{
            duration: .3,
            delay:0.1,
        }}
        >
            <div>
                <div>
                    <img className='h-52 w-full' src={items.img} alt="" />
                </div>
                <div>
                    <h1>{items.title}</h1>
                    <h2>{items.date}</h2>
                    <h3>{items.country}</h3>
                </div>
                <div>
                    <h2>{items.classes}</h2>
                    <h3>{items.price}</h3>
                </div>
            </div>
        </motion.div>
    );
};

export default ShowFilter;