import React from 'react';
import Note from '../Note';
import AddNote from '../AddNote';

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
  editId,
  editText,
  handleFinalEdit,
}) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          key={note.id}
          handleEditNote={handleEditNote}
          editId={editId}
          editText={editText}
          handleFinalEdit={handleFinalEdit}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
