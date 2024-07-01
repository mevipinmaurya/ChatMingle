import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        if (localStorage.getItem("token")) {
            navigate("/");
            localStorage.removeItem("token");
        }
    }

    return (
        <div>
            <div className="navbar bg-[whitesmoke] shadow-md rounded-2xl">
                <div className="flex-1">
                    <a className="btn btn-ghost text-lg text-[#964734] font-bold">ChatMingle</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto h-9 text-sm focus:outline-none" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-8 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className='hover:bg-[lightgrey] rounded-lg'><a><CgProfile />Profile</a></li>
                            <li className='hover:bg-[lightgrey] rounded-lg'><a onClick={handleLogout}><IoMdLogOut />Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar