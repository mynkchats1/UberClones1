// this page allows only logged in captain to acces captains-home page.
import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {

    //if durng login, reload happens, user data is lost, so preferrable to depend on token, rather 
    // than user. code change in UserLogin & userSignup using localstorage & token. 
    const token = localStorage.getItem('token') //removing dependency from user to token
    // const { user } = useContext(UserDataContext)
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    // console.log(token) //commented out as it prints same token multiple times in console

    //if block: if user mail exists return children, if doesnt exists return back to login page.
    useEffect(() => {
        // below if statement checks if token exists, but we have token both for user as well as captain, so
        // we need to check whther existing token is for captain or user. For this, we need to request user/capttain
        // all valid data from profile page, if its there, render children as it is, or else redirect to login page.
        if (!token) {
            navigate('/captain-login')
            return
        }
        // axios call must be uder useEffect, otherwise it will be called on every render.
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                const data = response.data
                setCaptain(data.captain)
                setIsLoading(false)
            }
        })
            .catch(err => {
                console.log(err)
                localStorage.removeItem('token')
                navigate('/captain-login')
            })

    }, [token])
    // issue with below if-code was that, home page was accessible to all, which was corrected 
    // using useEffect code above

    // if (!token) {
    //     navigate('/login')
    // }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>{children}</div>
    )
}

export default CaptainProtectWrapper