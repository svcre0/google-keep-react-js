import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Form.css';

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [showTextArea, setShowTextArea] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = useCallback(() => {
    if (text.trim()) {
      const newNote = { id: Date.now().toString(), title, text };
      onAddNote(newNote);
      setTitle('');
      setText('');
      setShowTextArea(false);
    }
  }, [title, text, onAddNote]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setShowTextArea(e.target.value.trim() !== '');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target) && (title || text)) {
        handleSubmit();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleSubmit, title, text]);

  return (
    <div className="form">
      <div className="form-container form" ref={formRef}>
        <form>
          <input
            type="text"
            value={title}
            className="note-text"
            onChange={handleTitleChange}
            placeholder="Take a note.."
          />
          {showTextArea && (
            <input
              type="text"
              value={text}
              className="note-title"
              onChange={(e) => setText(e.target.value)}
              placeholder="Take a note..."
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default NoteForm;

