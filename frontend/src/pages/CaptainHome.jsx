import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
    const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
    const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)

    const ridePopUpPanelRef = useRef(null)
    const confirmRidePopUpPanelRef = useRef(null)

    useGSAP(function () {
        if (ridePopUpPanel) {
            gsap.to(ridePopUpPanelRef.current, {
                transform: 'translateY(0%)'
            })
        } else {
            gsap.to(ridePopUpPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ridePopUpPanel])

    useGSAP(function () {
        if (confirmRidePopUpPanel) {
            gsap.to(confirmRidePopUpPanelRef.current, {
                transform: 'translateY(0%)'
            })
        } else {
            gsap.to(confirmRidePopUpPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [confirmRidePopUpPanel])

    return (
        <div className='h-screen'>
            <div className="fixed p-3 flex items-center justify-between w-full">
                <img className="w-16" src="https://pngimg.com/d/uber_PNG24.png" alt="" />
                <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-bold ri-logout-box-line"></i>
                </Link>
            </div>
            <div className='h-3/5'>
                <img className="h-full w-full object-cover" src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2022/08/Carbon_Maps_Figure-07.png" alt="" />
            </div>
            <div className='h-2/5 p-6'>
                <CaptainDetails />
            </div>
            <div ref={ridePopUpPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full  px-3 bg-white py-10 pt-12">
                <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
            </div>
            {/* <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button> */}

            <div ref={confirmRidePopUpPanelRef} className="fixed w-full h-screen z-10 bottom-0 translate-y-full  px-3 bg-white py-10 pt-12">
                <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} />
            </div>

        </div>
    )
}

export default CaptainHome