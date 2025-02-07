import React, { useState, useEffect } from 'react';
import NoteForm from './components/Form/Form';
import NoteList from './components/Notes/Note';
import Header from './components/Header/Header';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <main>
        <NoteForm onAddNote={addNote} />
        <NoteList notes={notes} onDeleteNote={deleteNote} />
      </main>
      {notes.length === 0 && (
        <p className="page-text">Notes you add will appear here</p>
      )}
    </div>
  );
};

export default App;

