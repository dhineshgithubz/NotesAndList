import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import { RiAddFill } from "react-icons/ri";
import Image1 from '../src/images/image1.png';

const Home = ({ note }) => {
  const reversedNotes = [...note].reverse();
  
  return (
    reversedNotes.length ?
    <div>
    
      <div className='row d-flex justify-content-center rowtop'>
        <div className=' col-md-8 col-12'>
          {reversedNotes.map((i) =>
          (<ul key={i.id}>
            <li >
              <Link to={`/${i.id}`} className='container4'>
                <div className="container4">
                  <div className='container5'>
                    <div className="title">
                      <div id="link">{i.title}</div>
                    </div>
                    <div className="body">
                      {((i.body).length) >= 20 ? `${(i.body).slice(0, 40)}..............` : i.body}
                    </div>
                    <div className="date">
                      {`${i.date}`}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>)
          )}
        </div>
      </div> 
      <div className="row ">
        <div className="col-md-10 col-7"></div>
        <div className="col-md-2 col-3">
          <Link to="/newpost" className="addpost">
            <RiAddFill /> Add Note
          </Link>
        </div>
      </div>
        
      </div>
     
      : <div>
        
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
              <img src={Image1} alt="" style={{"width": "30%","marginTop":"150px"}} />
              <h4>No Notes Added</h4>
            </div>
            <div className="col-md-2"></div>
          
        </div>
        <div className="row ">
          <div className="col-md-10 col-7"></div>
          <div className="col-md-2 col-3">
            <Link to="/newpost" className="addpost">
              <RiAddFill /> Add Note
            </Link>
          </div>
        </div>
      </div>
     
  )
}

export default Home
