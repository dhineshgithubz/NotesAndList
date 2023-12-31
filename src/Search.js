import React from 'react'
import './Search.css'
import { IoSearchCircleSharp } from "react-icons/io5";
const Search = ({ searchitem, setSearch }) => {

    return (
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="d-flex align-items-center justify-content-center">
                    <form className="borders">
                        <label htmlFor="searchbox"></label>
                        <input type="text"
                           
                            id="searchbox"
                            placeholder='Search the item'
                            className="searchinput"
                            value={searchitem}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <IoSearchCircleSharp className="iconsearch" />
                    </form>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    )
}
export default Search;