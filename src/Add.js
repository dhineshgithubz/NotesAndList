import React from 'react'
import './Add.css'
import { MdOutlineAdd } from "react-icons/md";
const Add = ({ handle, setnewitem, newitem }) => {
    return (
        <div>
            <div className="row add">
                <div className="col-md-3"></div>
                <div className="col-md-6">

                    <div className="d-flex align-items-center justify-content-center">
                        <form onSubmit={handle} className="form">
                            <label htmlFor="additem"></label>
                            <input type="text"
                                id="additem"
                                autoFocus
                                placeholder="Enter item"
                                className="addinput"
                                value={newitem}
                                onChange={(e) => setnewitem(e.target.value)}
                                required
                            />


                        </form>
                        <div type="button" onClick={handle} className="addbtn"><MdOutlineAdd className="addicon" /></div>

                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>

    )
}
export default Add;