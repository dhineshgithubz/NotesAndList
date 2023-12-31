import React from 'react';
import './Footer.css';
const Footer = (props) => {
    return (
        <div className="container-fluid bg1">
            <div className="row">
                <div className="col-md-12">
                    <div className='foot'>
                        <div className='foot_txt'>{props.text + " items"}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer