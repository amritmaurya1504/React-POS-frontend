import React from 'react'
import HomeDashboard from '../components/HomeDashboard'
import TimeHeader from '../components/TimeHeader'

const Home = () => {
    return (
        <>
            <div className='h-screen'>
                <TimeHeader />
                <HomeDashboard />
            </div>
        </>
    )
}

export default Home