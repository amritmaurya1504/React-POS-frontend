import React from 'react'
import OrderDashboard from '../components/OrderDashboard'
import TimeHeader from '../components/TimeHeader'

const Orders = () => {
    return (
        <>
            <div className='h-[96.8vh]'>
                <TimeHeader />
                <OrderDashboard />
            </div>
        </>
    )
}

export default Orders