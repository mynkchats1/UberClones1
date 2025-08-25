import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
    const [pickup, setPickup] = useState('') // two way binding done in respected input area
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    // above code along with onClick handler in input is for animation.
    // for animation we also need gsap
    const vehiclePanelRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)

    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)  //code for animation of arrow-down, which is initially hidden.

    const [vehiclePanel, setVehiclePanel] = useState(false)
    const [confirmRidePanel, setConfirmRidePanel] = useState(false)
    const [vehicleFound, setVehicleFound] = useState(false)
    const [waitingForDriver, setWaitingForDriver] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 20
                // opacity: 1
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 20,
                opacity: 1
            })
            gsap.to(panelCloseRef.current, {
                //  opacity: 0
            })
        }
    }, [panelOpen])

    useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0%)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehiclePanel])

    //used for animation feature in ConfirmRide panel.
    useGSAP(function () {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0%)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [confirmRidePanel])

    //used for vehicleFound state
    useGSAP(function () {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0%)'
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehicleFound])

    //used for waitingForDriver state
    useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0%)'
            })
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [waitingForDriver])


    return (
        <div className="h-screen relative overflow-hidden">
            <img className="w-20 absolute left-5 top-5" src="https://pngimg.com/d/uber_PNG24.png" alt="" />
            <div className="h-screen w-screen top-5">
                <img className="h-full w-full object-cover" src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2022/08/Carbon_Maps_Figure-07.png" alt="" />
            </div>
            <div className="flex flex-col justify-end h-screen absolute top-0 w-full p-5">
                <div className="h-[30%] p-5 bg-white relative">
                    <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                    }}
                        className="absolute opacity-0 right-6 top-6 text-2xl">
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className="text-2xl font-semibold">Find A Trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-16 w-1 top-[50%] left-10 bg-gray-900 rounded-full"></div>
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            value={pickup}
                            onChange={(e) => {
                                setPickup(e.target.value)
                            }}
                            className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
                            type="text"
                            placeholder="Add a pickup location"
                        />
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value)
                            }}
                            className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
                            type="text"
                            placeholder="Enter your Destination"
                        />
                    </form>
                </div >
                <div ref={panelRef} className="opacity-0 bg-white h-0">
                    <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />

                </div>
            </div>
            <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full px-3 bg-white py-10 pt-12">
                <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
                {/* here confirmRidePanel is passed as prop to VehiclePanel to open ConfirmRide panel on button click in VehiclePanel. */}
            </div>

            <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full px-3 bg-white py-8 pt-12">
                <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
            </div>

            <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full px-3 bg-white py-8 pt-12">
                <LookingForDriver setVehicleFound={setVehicleFound} />
            </div>

            <div ref={waitingForDriverRef} className="fixed w-full z-10 bottom-0  px-3 bg-white py-8 pt-12">
                <WaitingForDriver waitingForDriver={waitingForDriver} />
            </div>
        </div>
    )
}

export default Home

