import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch } from "react-redux"
import { add } from "../store/cartSlice"

const CategoryDetails = ({ categoryDetails }) => {
    // console.log(categoryDetails)
    const [quantity, setQuantity] = useState(0);
    const [id, setId] = useState(null);
    const dispatch = useDispatch();
    const inCreament = (id) => {
        setId(id);
        setQuantity(quantity + 1);
    }
    const deCrement = (id) => {
        setId(id);
        if (quantity == 0) return;

        setQuantity(quantity - 1);
    }

    const addItems = (data) => {
        const { id, title, price, category } = data;
        // console.log(quantity)
        const newData = { id, title, price : price*quantity, category, quantity: quantity };
        // console.log(newData);
        // console.log(data);
        if (quantity > 0) {
            dispatch(add(newData))
            setQuantity(0);
        }

    }

    return (
        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-1'>
                {categoryDetails?.map((curr, i) => {
                    return (
                        <>
                            <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ease: "easeOut", duration: 0.5 }} whileHover={{
                                backgroundColor: "#1f2544",
                            }} style={{
                                backgroundColor: "#151a34",
                                color: "#dfe3f4"
                            }} className='flex justify-between p-3 h-[150px] cursor-pointer '>
                                <div onClick={() => addItems(curr)} className='flex flex-col items-start justify-between pl-4 font-bold h-[95px] space-y-5'>
                                    <div>
                                        <h3>{curr.title}</h3>
                                        <p className='text-xs text-[#818497]'>₹{curr.price}</p>
                                    </div>
                                    <div className='flex flex-row items-center space-x-2'>
                                        <p className='text-xs font-normal'>Orders</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                        <p className='text-xs font-normal text-[#474c54]'>Kitchen</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-between'>
                                    <svg onClick={() => inCreament(curr.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer w-6 h-6 bg-[#0e1227] rounded-sm p-1 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <p className='font-semibold text-2xl'>{id == curr.id ? quantity : "0"}</p>
                                    <svg onClick={() => deCrement(curr.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer w-6 h-6 bg-[#0e1227] rounded-sm p-1 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                    </svg>
                                </div>
                            </motion.div>
                        </>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default CategoryDetails
