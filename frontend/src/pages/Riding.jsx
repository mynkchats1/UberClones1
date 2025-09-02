import React from 'react'
import { Link } from 'react-router-dom'

export const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-bold ri-home-8-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className="h-full w-full object-cover" src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2022/08/Carbon_Maps_Figure-07.png" alt="" />
            </div>
            <div className='h-1/2 p-4'>
                <div className="flex justify-between items-center ">
                    <img className="h-15" src="https://imgs.search.brave.com/sF-5kejRgm39C055VyR-8kiQQPLkuaTG1zMEl6HCidc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/NTg5LzUwNi9zbWFs/bC9tb2Rlcm4tY2Fy/LWlzb2xhdGVkLW9u/LWJhY2tncm91bmQt/M2QtcmVuZGVyaW5n/LWlsbHVzdHJhdGlv/bi1wbmcucG5n" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Batman</h2>
                        <h4 className='text-xl font-semibold'>NX 58 QY 7657</h4>
                        <p className='text-sm text-gray-600'>Ford Innova </p>
                    </div>
                </div>

                <div className="w-full mt-5">
                    {/* <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="text-lg ri-map-pin-fill"></i>
                        <div className="text-lg font-medium">
                            562/78-S
                            <p className="text-sm -mt-1 text-gray-600" >Kankariya Talab, Madhepur</p>
                        </div>
                    </div> */}
                    <div className="flex items-center gap-5 p-3 border-b-2" >
                        <i className="text-lg ri-map-pin-fill"></i>
                        <div className="text-lg font-medium">
                            562/78-S
                            <p className="text-sm -mt-1 text-gray-600" >Kankariya Talab, Madhepur</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 ">
                        <i className="ri-money-pound-circle-line"></i>
                        <div className="text-lg font-medium">
                            Rs. 200.85
                            <p className="text-sm -mt-1 text-gray-600" >Cash</p>
                        </div>
                    </div>
                </div>
                <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding
