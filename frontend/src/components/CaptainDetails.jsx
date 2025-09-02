import React from 'react'

const CaptainDetails = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex items-cener justify-start gap-3">
                    <img className="h-10 w-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfb32MX58UpvN5ixF-gwSBZFaG8FuHRM1j6g&s" alt="" />
                    <h4 className="text-lg font-medium">Gadkari Nolan</h4>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">Rs. 200.85</h4>
                    <p className="text-sm text-gray-600">
                        Earned
                    </p>
                </div>
            </div>
            <div className="flex p-2 mt-2 bg-gray-200 rounded-2xl justify-center gap-5 items-start">
                <div className="text-center">
                    <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                    <h5 className="text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hours Online</p>
                </div>
                <div className="text-center">
                    <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                    <h5 className="text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hours Online</p>
                </div>
                <div className="text-center">
                    <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                    <h5 className="text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hours Online</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails