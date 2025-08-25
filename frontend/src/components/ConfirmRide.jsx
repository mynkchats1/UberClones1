import React from "react";

const ConfirmRide = (props) => {
    return (
        <div>
            <h5 className="p-1 text-center w-[93%]absolute top-0 " onClick={() => {
                props.setVehiclePanel(false) //onclick functoin in here turns vehicle panle off when down wide arrow is clicked 
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
            <h3 className="text-2xl font-semibold mb-3">Confirm Your Ride</h3>

            <div className="flex gap-2 justify-between flex-col items-center ">
                <img className="h-20" src="https://imgs.search.brave.com/sF-5kejRgm39C055VyR-8kiQQPLkuaTG1zMEl6HCidc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/NTg5LzUwNi9zbWFs/bC9tb2Rlcm4tY2Fy/LWlzb2xhdGVkLW9u/LWJhY2tncm91bmQt/M2QtcmVuZGVyaW5n/LWlsbHVzdHJhdGlv/bi1wbmcucG5n" alt="" />
            </div>
            <div className="w-full mt-5">
                <div className="flex items-center gap-5 p-3 border-b-2">
                    <i className="text-lg ri-map-pin-fill"></i>
                    <div className="text-lg font-medium">
                        562/78-S
                        <p className="text-sm -mt-1 text-gray-600" >Kankariya Talab, Madhepur</p>
                    </div>
                </div>
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
            <button onClick={() => {
                props.setVehicleFound(true) //when confirm button is clicked, vehicleFound state is set to true which opens LookingForDriver panel.
                props.setConfirmRidePanel(false)
            }} className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Confirm</button>

        </div >
    )
}

export default ConfirmRide