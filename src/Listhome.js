import React from 'react'
import Add from './Add';
import Search from './Search';
import Content from './Content';
import Footer from './Footer';
import { useState,useEffect } from 'react';

const Listhome = () => {

    const [name, setName] = useState(
        [
            {
                "id": 1,
                "item": "Sample list",
                "checked": false
            }
        ]
    );
    const [newitem, setNewitem] = useState('');
    const [searchitem, setSearch] = useState('');

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem("storedlist"));
        if (notes) {
            setName(notes);
        }
    }, [setName]);

    const handle = (e) => {
        e.preventDefault();
        if (!newitem) return;
        addItem(newitem);
        setNewitem('');
    }

    const addItem = (item) => {
        const id = name.length ? name[name.length - 1].id + 1 : 1;
        const newlistitem = { id, item, checked: false };
        const listitems = [...name, newlistitem];
        setName(listitems);
        localStorage.setItem("storedlist", JSON.stringify(listitems));
    }

    async function handleCheckbox(id) {
        const listitems = name.map((i) => (
            i.id === id ? { ...i, checked: !i.checked } : i
        ))
        setName(listitems);
        localStorage.setItem("storedlist", JSON.stringify(listitems));
    }

    async function handleDelete(id) {
        const listitems = name.filter((i) => i.id !== id)
        setName(listitems);
        localStorage.setItem("storedlist", JSON.stringify(listitems))
    }

    return (
        <div>
            <Add handle={handle} newitem={newitem} setnewitem={setNewitem} />
            <Search setSearch={setSearch} searchitem={searchitem} />
            <main>
                <Content names={name.filter((i) => (i.item).toLowerCase().includes(searchitem.toLowerCase()))} handleCheckbox={handleCheckbox} handleDelete={handleDelete} />
            </main>
            <Footer text={name.length} />
        </div>
    )
}

export default Listhome
