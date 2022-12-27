import React from 'react'
import CustomerDashboard from '../components/CustomerDashboard'
import TimeHeader from '../components/TimeHeader'

const Customer = () => {
    return (
        <>
            <div className='h-[96.8vh]'>
                <TimeHeader />
                <CustomerDashboard />
            </div>
        </>
    )
}

export default Customer