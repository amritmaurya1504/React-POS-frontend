import React from 'react'
import Avatar from 'react-avatar'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
const PlacedOrder = () => {
    const placedItem = useSelector(state => state.ordered);
    // console.log(placedItem)
    const bg = ["#203688", "#5b45b0", "#8a9dad", "#1d2569", "#EB6440", "#f987c4", "#4C0033", "#434242", "#5b45b0", "#1d2569", "#00a183", "#3C2A21", "#7F167F", "#9C254D" , "#735F32", "#285430"]
    // console.log(placedItem);
    return (
        <div>
            <div className='grid grid-cols-4 gap-2 overflow-x-scroll scrollbar-hide text-xs'>
                {placedItem.length > 0 ? placedItem.map((curr, i) => {
                    return (
                        <>
                            <motion.div initial={{x:100}} animate={{x : 0}} transition={{duration : 1}} key={i} className='flex justify-start items-center px-5 py-4 bg-[#0e1227] text-white border-r border-black'>
                                <div style={{ fontSize : "10px", backgroundColor: `${bg[i]}` }} className='w-10 h-10 flex justify-center items-center'><p className='font-semibold'>{curr.table}</p></div>
                                <div className='flex justify-between items-start px-3 flex-col'>
                                    <div className='flex items-center space-x-12'>
                                        <p>{curr.name}</p>
                                        <div className='flex items-center space-x-2'>
                                            <small className='px-1 text-xs rounded-md' style={{
                                                backgroundColor: "green"
                                            }}>Kitchen</small>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <div className='flex items-center justify-between space-x-2 '>
                                            <p className='text-xs'>{curr.items} items</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                            </svg>

                                            <p className='text-xs text-[#818497]'> Kitchen</p>
                                        </div>
                                        <div>
                                            <small className='text-xs text-[#818497]'>{curr.time}</small>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )
                }) : <small className='text-white px-4 py-8'>No any Order in queue!</small> }

            </div>
        </div>
    )
}

export default PlacedOrder