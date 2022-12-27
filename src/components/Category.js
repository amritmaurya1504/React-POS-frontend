import React, { useState } from 'react'
import CategoryDetails from './CategoryDetails'
import PlacedOrder from './PlacedOrder'
import { motion } from "framer-motion"
import menus from "../api/api";
import { getItems } from './logics/getItems';

const categories = [
    {
        id: 0,
        title: "Starter (Veg)",
        bg: "#B73E3E",
        category: "Starter1",
        leftradis : "9px"
    },
    {
        id: 1,
        title: "Starter (Non-Veg)",
        bg: "#5b45b0",
        category: "Starter2",
    },
    {
        id: 2,
        title: "Main Course",
        bg: "#7F167F",
        category: "mainCourse",
    },
    {
        id: 3,
        title: "Pizza",
        bg: "#1d2569",
        category: "Pizza",
        rightradis : "9px"
    },
    {
        id: 4,
        title: "Dessert",
        bg: "#3a56bd",
        category: "Dessert",
        bottomleftradis : "9px"
    },
    {
        id: 5,
        title: "Beverage",
        bg: "#735F32",
        category: "Beverage",
    },
    {
        id: 6,
        title: "Soups",
        bg: "#9C254D",
        category: "Soups",
    },
    {
        id: 7,
        title: "Rum",
        bg: "#285430",
        category: "Rum",
        bottomrightradis : "9px"
    },
]

const Category = () => {
    const [categoryDetails, setCategoryDetails] = useState();
    const [selected, setSelected] = useState(false);
    const [id, setId] = useState();

    const getCategoryDetails = (category) => {
        const newArr = menus.filter(a => a.category === category);
        setCategoryDetails(newArr);
        // console.log(newArr);
    }

    const allEvets = (category, id) => {
        getCategoryDetails(category);
        setId(id)
    }


    return (
        <>
            <motion.div initial={{ y: 100 }} animate={{ y: 0 }} style={{
                backgroundColor: "#0e1227"
            }} className='p-4 border-b-2 border-black h-[340px] overflow-y-scroll scrollbar-hide'>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2'>
                    {
                        categories.map((curr, i) => {
                            return (
                                <div onClick={() => allEvets(curr.category, curr.id)} key={i} style={{
                                    backgroundColor: `${curr.bg}`,
                                    borderTopLeftRadius : `${curr.leftradis}`,
                                    borderTopRightRadius : `${curr.rightradis}`,
                                    borderBottomLeftRadius : `${curr.bottomleftradis}`,
                                    borderBottomRightRadius : `${curr.bottomrightradis}`,
                                    color: "#dfe3f4"
                                }} className='flex items-center justify-between cursor-pointer '>
                                    <div className='flex flex-col items-start justify-between pl-4 py-3 font-bold h-[158px]'>
                                        <h3>{curr.title}</h3>
                                        <small className='test-white font-semibold'>{getItems(curr.category, menus)} items</small>
                                    </div>

                                    {
                                        id == curr.id && (<div className='pr-2 bg-black opacity-40 h-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-8 font-bold  ml-1 w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>

                                        </div>)
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>
            <div className=' p-4 h-[334px] border-b border-black' style={{
                backgroundColor: "#0e1227"
            }}>
                {categoryDetails?.length > 0 ? <CategoryDetails categoryDetails={categoryDetails} /> : (<small className='text-[#818497]'>Select any category. </small>)}
            </div>

        </>
    )
}

export default Category