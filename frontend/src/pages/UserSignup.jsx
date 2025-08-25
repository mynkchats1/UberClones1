import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { UserDataContext } from "../context/UserContext"

const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const navigate = useNavigate()
    const { user, setUser } = React.useContext(UserDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
        if (response.status === 201) {
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/home')
        }
        // setUserData({
        //     fullName: {
        //         firstName: firstName,
        //         lastName: lastName,
        //     },
        //     email: email,
        //     password: password
        // })
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')

        console.log(userData);
    }
    return (
        <div className="p-7 h-screen flex flex-col justify-between" >
            <div>
                <img className="w-24 mb-10" src="https://assets.turbologo.com/blog/en/2019/12/19084805/uber-logo-cover-958x575.png" alt="" />
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className="text-lg fonr-medium mb-2">What's your Firstname</h3>
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

                    <button
                        className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
                        Register</button>
                </form>
                <p className="text-center">Already Have an Account? <Link to='/login' className="text-blue-600">Login Here</Link></p>
            </div>
            <div>
                <p className="text-xs font-bold">Our <span className="underline">Terms</span> and <span className="underline">Conditions</span> Generator makes it easy to create a Terms and Conditions agreement for your business</p>
            </div>
        </div>
    )
}

export default UserSignup