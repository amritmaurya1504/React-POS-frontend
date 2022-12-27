import React from 'react'
import { Link } from "react-router-dom"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Sidebar = ({navigation}) => {
    return (
        <div>
            <div className="space-y-1 px-2">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            item.current
                                ? 'bg-[#0e1227] text-white'
                                : 'text-gray-600 hover:bg-[#0e1227] hover:text-white',
                            'group flex items-center px-2 py-4 text-sm font-medium rounded-md'
                        )}
                        to = {item.href}
                    >
                        <item.icon
                            className={classNames(
                                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                'mr-3 h-6 w-6'
                            )}
                            aria-hidden="true"
                        />
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar