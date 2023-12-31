import React from 'react'
import './Note.css';
import { useParams, Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Note = ({ note, deleteNotes }) => {
  const { id } = useParams();
  const notes = note.find(note => (note.id).toString() === id);
  return (
    <div>
      <div className='row d-flex justify-content-center rowtop'>
        <div className='col-md-8 d-flex justify-content-center'>
          <div className="container2">
            <div className='container3'>
              <div className="title">
                {notes.title}
              </div>
              <div className="body">
                {notes.body}
              </div>
              <div className="date">
                {`${notes.date}`}
              </div>
              <div className="row">
                <div className="col-md-9">
                </div>
                <div className="col-md-3">
                  <div className='d-flex justify-content-between'>
                    <div className="btnedit">
                      <Link to={`/edit/${notes.id}`}>
                        <FaEdit className='icon' />
                      </Link>
                    </div>
                    <div className='btnedit' onClick={() => deleteNotes(notes.id)}>
                      <AiFillDelete className='icon' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Note
