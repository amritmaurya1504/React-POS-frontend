import React, { useState } from 'react'
import Avatar from 'react-avatar'
import { Link, useNavigate } from "react-router-dom"

const SubMenu = () => {
    // const [selected, setSelected] = useState(true);
    const navigate = useNavigate();
    const menu = [
        {
            title: "Menu-1",
            avatar: "Menu One",
            status: "Online",
            href : "/",
            selected: true
        },
        {
            title: "Menu-2",
            avatar: "Menu Twe",
            status: "Online",
            selected: false

        },
        {
            title: "Menu-3",
            avatar: "Menu Three",
            status: "Offline",
            selected: false
        }
    ]
    return (
        <div>
            <div className='space-y-1 border-b-2 border-black'>

                {
                    menu.map((curr, index) => {
                        return (
                            <>
                                <div onClick={() => navigate(curr.href)} className={curr.selected ? `cursor-pointer px-3 py-3 bg-[#0e1227]` : `cursor-pointer px-3 py-2`} >
                                    <div key={index} className='flex items-center space-y-1'>
                                        <div>
                                            <Avatar name={curr.avatar} size='30' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <div>
                                                <p className={curr.status == "Online" ? `text-xs font-semibold pl-3 leading-none` : `text-xs font-semibold pl-3 leading-none text-[#474c54]`}>{curr.title}</p>
                                                <div className='text-xs flex items-center space-x-2 pl-3'>
                                                    <p className={curr.status == "Offline" ? `w-2 h-2 bg-gray-600 rounded-full` : `w-2 h-2 bg-green-600 rounded-full`}></p>
                                                    {curr.status == "Online" ? (<p>{curr.status}</p>) :
                                                        (<p style={{
                                                            color: "#474c54"
                                                        }}>{curr.status}</p>)
                                                    }
                                                    {curr.status == "Online" ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                                        </svg>) :
                                                        (<svg style={{
                                                            color: "#474c54"
                                                        }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                                        </svg>)
                                                    }

                                                    <p className='' style={{
                                                        color: "#474c54"
                                                    }}>All tables</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SubMenu