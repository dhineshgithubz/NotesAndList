import React from 'react';
import { MdDelete } from "react-icons/md";
import './Content.css';
import Image2 from '../src/images/image2.jpg';
const Content = ({ names, handleCheckbox, handleDelete }) => {
    const reversedNames = [...names].reverse();
    return (
        reversedNames.length ?
            <>
                <div className="row rowbtm">
                    <div className="col-md-3 col-2"></div>
                    <div className="col-md-6 col-8">
                        <ul>
                            {reversedNames.map((i) => (
                                <div className="cards" key={i.id}>
                                    <li className="list">
                                        <input type="checkbox"  checked={i.checked} onChange={() => handleCheckbox(i.id)}
                                            className="check"
                                        />
                                        <label className="text"  onClick={() => handleCheckbox(i.id)}

                                        >{i.item}</label>
                                        <div onClick={() => handleDelete(i.id)}><MdDelete className="delbtn" /></div>
                                    </li>
                                </div>

                            ))
                            }
                        </ul>
                    </div>
                    <div className="col-md-3 col-2"></div>
                </div>
            </>
            : <div>
                <div className='row'>
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center">
                        <img src={Image2} alt="" width="300px" style={{"opacity":"0.7"}}/>
                        
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

    )
}
export default Content;
