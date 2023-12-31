import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './EditNote.css'

const EditNote = ({ editTitle, editBody, setEdittitle, setEditbody, editNotes, note }) => {
    const { id } = useParams();
    const notes = note.find(note => (note.id).toString() === id);

    useEffect(() => {
        if (note) {
            setEdittitle(notes.title);
            setEditbody(notes.body);
        }
    }, [note]
    )

    return (
        <div>
            <div className='row d-flex justify-content-center  rowtop'>
                <div className='col-12 col-md-6'>
                    <form className='d-flex flex-column align-items-center editform' onSubmit={(e) => e.preventDefault()}>
                        <label className="mb" htmlFor="editbox">Title</label>
                        <input type="text"
                            
                            id="editbox"
                            className='w-100 inputz'
                            value={editTitle}
                            onChange={(e) => setEdittitle(e.target.value)}
                        />

                        <label className="mb2">Body</label>
                        <textarea type="text" rows="6" cols="60"
                            className='w-100 textarea'
                            value={editBody}
                            onChange={(e) => setEditbody(e.target.value)}
                        />
                        <input type="submit" name="submit" className='btn btn-success w-25 mt-5 editbtn'
                            onClick={() => editNotes(notes.id)}

                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditNote
