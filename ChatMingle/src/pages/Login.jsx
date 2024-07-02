import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [userReg, setUserReg] = useState("Login");

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [token, setToken] = useState("");
    const [name, setName] = useState("");

    const nevigate = useNavigate();

    const submitHandler= async (e)=>{
        e.preventDefault();
        if(userReg === "Login"){
            const response = await axios.post("http://localhost:3000/api/user/login", {email, password})
            if(response.data.success){
                nevigate("/chat")
                setToken(response.data.token);
                setName(response.data.name)
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("name", response.data.name);
            }else{
                console.log(response.data.message)
            }
        }
        if(userReg === "Signup"){
            const response = await axios.post("http://localhost:3000/api/user/signup", {username, email, password})
            if(response.data.success){
                nevigate("/chat")
                setToken(response.data.token);
                setName(username)
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("name", username);
            }else{
                console.log(response.data.message)
            }
        }
    }


    return (
        <div className='w-full bg-[#005372] flex justify-center items-center'>
            <div className='w-[90%] md:w-[40%] h-screen flex justify-center items-center'>
                <div className='w-full border-[2px] bg-[whitesmoke] p-10 rounded-xl flex flex-col gap-3'>
                    <div className='mb-4'>
                        <p className='text-3xl font-bold'>{userReg}</p>
                    </div>
                    {
                        userReg === "Signup"
                            ? <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input onChange={(e)=>setUserName(e.target.value)} name='username' type="text" className="grow" placeholder="Username" />
                            </label>
                            : <></>
                    }
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input onChange={(e)=>setEmail(e.target.value)} name='email' type="text" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input onChange={(e)=>setPassword(e.target.value)} name='password' type="password" className="grow" placeholder="password" />
                    </label>
                    <div className='flex flex-col gap-3'>
                        <button onClick={submitHandler} className="btn bg-[#005372] text-white hover:bg-[#005372]">{userReg}</button>
                        {
                            userReg === "Login"
                                ? <p>Create new account? <span className='text-[blue] cursor-pointer' onClick={() => setUserReg("Signup")}>Signup Here</span></p>
                                : <p>Already have account? <span className='text-[blue] cursor-pointer' onClick={() => setUserReg("Login")}>Login Here</span></p>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;