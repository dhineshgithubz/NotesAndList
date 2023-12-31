import React, { useEffect } from 'react'
import './Header.css'
import { Link ,useLocation} from 'react-router-dom'
import { CgNotes } from "react-icons/cg";
import { FaList } from "react-icons/fa";


const Header = () => {
    const location = useLocation();

    useEffect(
        () => {
            if (location.pathname === "/todolist") {
                document.querySelector(".icon1").classList.remove("line");
                document.querySelector(".icon2").classList.add("line");
            }
            else if (location.pathname === "/") {
                document.querySelector(".icon1").classList.add("line");
                document.querySelector(".icon2").classList.remove("line");
            }
        },
    )
   
    // const line = () => {
    //     document.querySelector(".icon1").classList.remove("line");
    //     document.querySelector(".icon2").classList.remove("line");
    // }
    // const line2 = () => {
    //     document.querySelector(".icon2").classList.add("line");
    //     document.querySelector(".icon1").classList.add("line");

    
    return (
        <div>
            <div className="container-fluid bg py-3">
                <div className="row">
                    <div className="col-sm-6  col-6 ">
                        <Link to="/" className='d-flex align-items-center justify-content-center icon1'>
                            <CgNotes />
                            <div className='mx-2 hover-underline-animation2 xsMedia'>NOTES</div>
                        </Link>
                    </div>
                    <div className="col-sm-6  col-6 ">
                        <Link to="/todolist" className='d-flex align-items-center justify-content-center icon2'><FaList />
                            <div className='mx-2 hover-underline-animation xsMedia'>TODO LIST</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
