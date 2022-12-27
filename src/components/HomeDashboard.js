import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Avatar from 'react-avatar';
import FlipMove from 'react-flip-move';
import PlacedOrder from './PlacedOrder';
import {
    Bars3Icon,
    CalendarIcon,
    HomeIcon,
    MagnifyingGlassCircleIcon,
    Cog6ToothIcon,
    UserGroupIcon,
    ArrowRightIcon,
    XMarkIcon,
    ShoppingCartIcon
} from '@heroicons/react/24/outline'
import Category from './Category';
import { useNavigate } from "react-router-dom"
import MiddleDivTop from './MiddleDivTop';
import Sidebar from "./Sidebar"
import SubMenu from './SubMenu';
import CategoryDetails from './CategoryDetails';
import Cart from './Cart';
import Tables from './Tables';
import OrderData from './OrderData';
import CustomerData from './CustomerData';

const navigation = [
    { name: 'Orders', href: '/orders', icon: ShoppingCartIcon, current: false },
    { name: 'Customer', href: '/customer', icon: UserGroupIcon, current: false },
    { name: 'Setting', href: '#', icon: Cog6ToothIcon, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const steps = {
    1: Tables,
    2: Category
}

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [menuComp, setMenuComp] = useState(false);
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const Step = steps[step];

    const url = window.location.href;
    console.log(url);

    const onClick = () => {
        setStep(step + 1);
        setMenuComp(true);
    }

    const sendBack = () => {
        setStep(step - 1);
        setMenuComp(false);
    }

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full overflow-hidden">
        ```
      */}<div>
                <div className="flex h-full">

                    <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                        <div className="relative z-0 flex flex-row-reverse flex-1 overflow-hidden">
                            <main style={{
                                background: "#060c18"
                            }} className="relative z-0 flex-1 border-r pt-4 border-black overflow-y-auto focus:outline-none xl:order-last overflow-y-scroll scrollbar-hide">
                                <MiddleDivTop menuComp={menuComp} sendBack={sendBack} />
                                <Step onClick={onClick} />
                                <div className='lg:block hidden'>
                                    <div className='absolute bottom-0 w-full h-[86px]' style={{
                                        backgroundColor: "#0e1227"
                                    }}>
                                        <PlacedOrder />
                                    </div>
                                </div>
                            </main>
                            <div className='lg:block hidden'>
                                <aside className="relative bg-[#0e1227] w-[350px] h-[96.8vh] flex-shrink-0 overflow-y-auto">
                                    <Cart />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
