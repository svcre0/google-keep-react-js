import React from 'react';
import './Notes.css';

const NoteList = ({ notes, onNoteClick, onDeleteNote }) => {
  return (
    <div className="notes">
      {notes.map((note) => (
        <div className="note" key={note.id}>
          <div className="title" onClick={() => onNoteClick(note.id)}>
            {note.title}
          </div>
          <div className="text">{note.text}</div>
          <button onClick={() => onDeleteNote(note.id)} className="delete-note">
         
             <div className="tooltip">
                <span className="material-symbols-outlined hover"> delete </span>

             <span className="tooltip-text">delete</span>
           </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
