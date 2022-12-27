import React from 'react'
import Avatar from 'react-avatar'
import { motion } from 'framer-motion'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
const MiddleDivTop = ({ menuComp, sendBack }) => {
    const customer = useSelector(state => state.customer);
    return (
        <div>
            <div style={{
                backgroundColor: "#060c18",
                color: "white"
            }} className='flex items-center justify-between border-b border-black pb-5 px-5'>
                <div className='flex items-center  space-x-3 leading-none tracking-normal '>
                    {customer.length > 0 ? (<svg onClick={sendBack} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>) : <svg onClick={sendBack} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>}
                    <div className='flex items-center space-x-6'>

                        <div>
                            <motion.h3 inital={{ x: 30 }} animate={{ x: 0 }} className='font-semibold'>{menuComp ? 'Menus' : 'Tables'}</motion.h3>
                            <small className='text-xs text-gray-400 font-medium'>{menuComp ? 'Items' : '16 tables'}</small>
                        </div>
                        {/* <div className='flex items-center space-x-6'>
                            <p className='bg-green-500 px-5 py-2 text-white'>0 Booked</p>
                            <p className='bg-green-800 px-8 py-2 text-white'>15 Vacant</p>
                        </div> */}
                    </div>
                </div>

                {/* {menuComp && ( */}

                {/* )} */}
                <div className='flex items-center space-x-4'>
                    {customer.length > 0 && (<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className='text-xs bg-[#0e1227] px-4 pt-1 pb-1 rounded-[30px]'>
                        <div className='flex items-center space-x-4'>
                            <Avatar name={customer[0]?.name} size="30" round="20px" />
                            <p className='text-sm px-2'>{customer[0]?.name}</p>
                        </div>
                    </motion.div>)}
                    <div className='pl-3 space-x-4'>
                        <Link className='bg-[#3441d4] px-6 py-2 rounded-[20px] items-center' to="/orders">Orders</Link>
                        <Link className='bg-[#5b45b0] px-6 py-2 rounded-[20px]' to="/customer">Customers</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleDivTop