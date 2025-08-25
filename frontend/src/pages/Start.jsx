import React from "react"
import { Link } from "react-router-dom"

const Start = () => {
    return (
        <div>
            <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen pt-5 flex justify-between flex-col w-full ">
                <img className="w-24 ml-8" src="https://assets.turbologo.com/blog/en/2019/12/19084805/uber-logo-cover-958x575.png" alt="" />
                <div className="bg-white pb-6 py-4 px-4">
                    <h2 className="txt-[30px] font-bold">Get Started with Uber</h2>
                    <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 ">Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Start