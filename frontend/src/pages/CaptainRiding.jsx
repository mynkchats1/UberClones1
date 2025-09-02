import React from 'react'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
    return (
        <div className='h-screen'>
            <div className="fixed p-3 flex items-center justify-between w-full">
                <img className="w-16" src="https://pngimg.com/d/uber_PNG24.png" alt="" />
                <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-bold ri-logout-box-line"></i>
                </Link>
            </div>
            <div className='h-4/5'>
                <img className="h-full w-full object-cover" src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2022/08/Carbon_Maps_Figure-07.png" alt="" />
            </div>
            <div className='h-1/5 p-6'>

            </div>

        </div>
    )
}

export default CaptainRiding