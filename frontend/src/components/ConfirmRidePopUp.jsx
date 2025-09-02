import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
    return (
        <div >
            <h5 className="p-1 text-center w-[93%]absolute top-0 " onClick={() => {
                props.setRidePopUpPanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
            <h3 className="text-2xl font-semibold mb-3">New Rider Nearby!Check Details</h3>
            <div className='flex items-center justify-between mt-3 p-3 bg-yellow-400 rounded-xl'>
                <div className='flex items-center gap-3'>
                    <img className='h-15 w-15 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5sp7AZSYjGB0PJT2jfoVWS1uG34DVlYFLzg&s" alt="" />
                    <h2 className='text-medium font-semibold'>Superman Pandey</h2>
                </div>
                <h5 className='text-lg font-semibold'>10 KM</h5>
            </div>

            <div className="flex gap-2 justify-between flex-col items-center ">
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
            <Link to='/captain-riding' onClick={() => {
                // props.setConfirmRidePopUpPanel(true)
            }} className="flex justify-center w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Confirm</Link>

            <button onClick={() => {
                props.setConfirmRidePopUpPanel(false)
                props.setRidePopUpPanel(false)
            }} className="w-full mt-1 bg-red-600 text-white font-semibold p-2 rounded-lg">Cancel</button>
        </div>
    )
}

export default ConfirmRidePopUp
