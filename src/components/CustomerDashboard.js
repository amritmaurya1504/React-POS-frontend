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

export default function CustomerDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [menuComp, setMenuComp] = useState(false);
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const Step = steps[step];

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
                    <div className="relative z-0 flex h-[96.8vh] flex-row-reverse flex-1 overflow-hidden">
                        <main style={{
                            background: "#060c18"
                        }} className="relative z-0 flex-1 border-r pt-4 border-black overflow-y-auto focus:outline-none xl:order-last overflow-y-scroll scrollbar-hide">
                            <CustomerData />
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}
