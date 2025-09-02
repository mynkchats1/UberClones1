import React, { useState } from "react"
import { Link } from "react-router-dom"
import { CaptainDataContext } from "../context/CaptainContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Captainsignup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    //const [captainData, setCaptainData] = useState({})

    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setvehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const { captain, setCaptain } = React.useContext(CaptainDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        const captainData = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData) //all data recieved during register gets stored in captainData

        if (response.status === 201) {
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')  //create a new page named as captain-home
        }

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
        setVehicleColor('')
        setvehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')

        console.log(captainData);
    }
    return (
        <div className="p-7 h-screen flex flex-col justify-between" >
            <div>
                <img className="w-24 mb-10" src="https://static.vecteezy.com/system/resources/previews/026/615/556/non_2x/driver-icon-isolated-on-white-background-vector.jpg" alt="" />
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className="text-lg w-full font-medium mb-2">What's your Firstname</h3>
                    <div className="flex gap-2 mb-7">
                        <input
                            required
                            name='firstname'

                            className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-base placeholder:text-base"
                            type="text"
                            placeholder="firstname"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                        />
                        <input
                            required
                            name='lastname'

                            className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-base placeholder:text-base"
                            type="text"
                            placeholder="lastname"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }} />
                    </div>

                    <h3 className="text-base font-medium mb-2">What's your Email</h3>
                    <input
                        required
                        name='email'

                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="email"
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />

                    <h3 className="text-base font-medium mb-2">Enter Password</h3>

                    <input
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="password"

                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />

                    <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
                    <div className="flex gap-4 mb-7">
                        <input
                            required
                            className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                            type="text"
                            placeholder="Vehicle Color"
                            value={vehicleColor}
                            onChange={(e) => {
                                setVehicleColor(e.target.value)
                            }}
                        />
                        <input
                            required
                            className="bg-[#eeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                            type="text"
                            placeholder="Vehicle Plate"
                            value={vehiclePlate}
                            onChange={(e) => {
                                setvehiclePlate(e.target.value)
                            }}
                        />
                    </div>
                    <div className="flex gap-4 mb-7">
                        <input
                            required
                            className="bg-[#eeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                            type="text"
                            placeholder="Vehicle Capacity"
                            value={vehicleCapacity}
                            onChange={(e) => {
                                setVehicleCapacity(e.target.value)
                            }}
                        />
                        <select
                            required
                            className="bg-[#eeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                            value={vehicleType}
                            onChange={(e) => {
                                setVehicleType(e.target.value)
                            }}
                        >
                            <option value="" disabled>Select Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="auto">Auto</option>
                            <option value="motorcycle">Bike</option>
                        </select>
                    </div>

                    <button
                        className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
                        Create Captain Account</button>
                </form>
                <p className="text-center">Already Have an Account? <Link to='/captain-login' className="text-blue-600">Login Here</Link></p>
            </div >
            <div>
                <p className="text-xs mt-6 font-bold">Our <span className="underline">Terms</span> and <span className="underline">Conditions</span> Generator makes it easy to create a Terms and Conditions agreement for your business</p>
            </div>
        </div >
    )
}

export default Captainsignup