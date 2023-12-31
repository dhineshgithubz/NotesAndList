import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from "./Header";
import Home from './Home'
import Newnote from './Newnote'
import Missing from "./Missing"
import Note from "./Note";
import EditNote from './EditNote';
import Listhome from "./Listhome";
import Loading from "./Loading";

function App() {

  const [note, setNote] = useState([
    {
      "id": 1,
      "title": "Sample Note",
      "body": "lorem ipsum gdh  jkjks wdwwd dwdwwdwds",
      "date": "Sat Dec 16 2023",
    },

  ]);
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const navigate = useNavigate();
  const [editTitle, setEdittitle] = useState("");
  const [editBody, setEditbody] = useState("");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("storednotes"));
    if (data) {
      setNote(data);
    }
  }, [setNote]);



  const addNotes = (e) => {
    e.preventDefault();

    const id = note.length ? note[note.length - 1].id + 1 : 1;
    const date = new Date().toDateString();
    const newNote = {
      id: id, title: title, body: body, date: date
    };

    const allNote = [...note, newNote];
    setNote(allNote);
    localStorage.setItem("storednotes", JSON.stringify(allNote))
    navigate('/');
    settitle("");
    setbody("");
  }


  const deleteNotes = async (id) => {
    const noteLists = note.filter((i) => i.id !== id);
    setNote(noteLists);
    localStorage.setItem("storednotes", JSON.stringify(noteLists))
    navigate('/');
  }

  const editNotes = (id) => {
    const date = new Date().toDateString();
    const updatedNote = {
      id: id, title: editTitle, body: editBody, date: date
    };
    const upDate = (note.map((i) => i.id === id ? { ...i, ...updatedNote } : i));
    setNote(upDate);
    localStorage.setItem("storednotes", JSON.stringify(upDate));
    setEdittitle("");
    setEditbody("");
    navigate('/');
  }


  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home note={note} />} />
          <Route path=":id" element={<Note note={note} deleteNotes={deleteNotes} />} />
        </Route>
        <Route path="/newpost" element={<Newnote title={title} settitle={settitle} body={body} setbody={setbody} addNotes={addNotes} />} />
        <Route path="/edit">
          <Route path=":id" element={<EditNote note={note}
            editTitle={editTitle} editBody={editBody}
            setEdittitle={setEdittitle} setEditbody={setEditbody}
            editNotes={editNotes}
          />} />
        </Route>
        <Route path="/todolist" element={<Listhome/>} />
        <Route path="*" element={<Missing />} />
      </Routes>

    </div>
  );
}

export default App;
