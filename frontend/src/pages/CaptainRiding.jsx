import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'

const CaptainRiding = (props) => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0%)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [finishRidePanel])


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
            <div className='h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative pt-10'
                onClick={() => {
                    setFinishRidePanel(true)
                }}>
                <h5 className="p-1 text-center w-[95%] absolute top-0 " onClick={() => {

                }}><i className="text-3xl text-gray-800 ri-arrow-up-wide-fill"></i></h5>
                <h4 className='text-xl font-semibold '>8 Km's Away</h4>
                <button className='bg-green-600 text-white fonrt-semibold p-3 px-10 rounded-lg'>Complete Ride</button>

            </div>

            <div ref={finishRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full  px-3 bg-white py-10 pt-12">
                <FinishRide setFinishRidePanel={setFinishRidePanel} />
            </div>

        </div>
    )
}

export default CaptainRiding