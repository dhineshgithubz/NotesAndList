import React from 'react'
import './Newnote.css'

const Newnote = ({ title, settitle, body, setbody, addNotes }) => {
  return (
    <div>
      <div className='row d-flex justify-content-center rowtop1'>
        <div className="col-md-3"></div>
        <div className='col-md-6 col-12'>
          <form className='d-flex flex-column align-items-center formz' onSubmit={addNotes}>
            <label htmlFor="newnote"></label>
            <input type="text"
              id="newnote"
              
              className="w-100 inputz"
              value={title}
              placeholder='Enter title'
              onChange={(e) => settitle(e.target.value)}
            />
            <textarea type="text" rows="6" cols="60"
              className="w-100 textarea"
              value={body}
              placeholder='Enter notes here'
              onChange={(e) => setbody(e.target.value)}
            />
            <input type="submit" className='btn btn-success w-25 mt-5 btnsubmit'
              onClick={addNotes}
            />
          </form>
        </div>
        <div className="col-md-3"></div>

      </div>
    </div>
  )
}

export default Newnote
