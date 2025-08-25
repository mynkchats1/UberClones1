import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { UserDataContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const { user, setUser } = useContext(UserDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        const userData = {
            email: email,
            password: password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

        if (response.status === 200) {
            const data = response.data
            setUser(response.data.user)
            localStorage.setItem('token', response.data.token)
            navigate('/home')
        }
        //  console.log('Hello, MJ');
        //console.log(email, password)
        // setUserData({
        //     email: email,
        //     password: password
        // })
        //console.log(userData)
        setEmail('')
        setPassword('')
    }
    return (
        <div className="p-7 h-screen flex flex-col justify-between" >
            <div>
                <img className="w-24 mb-10" src="https://assets.turbologo.com/blog/en/2019/12/19084805/uber-logo-cover-958x575.png" alt="" />
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className="text-lg font-medium mb-2">What's your Email</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="email"
                        placeholder="email@example.com"
                    />

                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>

                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="password"
                        placeholder="password"
                    />

                    <button
                        className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
                        Login</button>
                </form>
                <p className="text-center">New Here? <Link to='/signup' className="text-blue-600">Create New Account</Link></p>
            </div>
            <div>
                <Link
                    to='/captain-login'
                    className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin