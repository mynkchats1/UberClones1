// this page allow only logged in user to acces home page.
import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {

    //if durng login, reload happens, user data is lost, so preferrable to depend on token, rather 
    // than user. code change in UserLogin & userSignup using localstorage & token. 
    const token = localStorage.getItem('token') //removing dependency from user to token
    // const { user } = useContext(UserDataContext)
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserDataContext)
    const [isLoadig, setIsLoading] = useState(true)
    //above two line of code is for user context and helps in getting user data
    // from user context which is set in UserLogin.jsx & UserSignup.jsx

    console.log(token)

    //if block: if user mail exists return children, if doesnt exists return back to login page.
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setUser(response.data.user)
                setIsLoading(false)
            }
        }).catch(err => {
            console.log(err);
            localStorage.removeItem('token')
            navigate('/login')

        })
    }, [token])

    if (isLoadig) {
        return (
            <div>Loading...</div>
        )
    }

    // issue with below code was that, home page was accessible to all, which was corrected 
    // using useEffect code above

    // if (!token) {
    //     navigate('/login')
    // }
    return (
        <div>{children}</div>
    )
}

export default UserProtectWrapper