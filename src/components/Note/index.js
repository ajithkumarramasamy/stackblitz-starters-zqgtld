import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import EditNote from '../EditNote';

const Note = ({
  id,
  text,
  date,
  handleDeleteNote,
  handleEditNote,
  editId,
  editText,
  handleFinalEdit,
}) => {
  return (
    <>
      {id === editId ? (
        <EditNote
          editText={editText}
          handleFinalEdit={handleFinalEdit}
          id={id}
        />
      ) : (
        <div className="note">
          <span>{text}</span>
          <div className="note-footer">
            <small>{date}</small>
            <FaEdit onClick={() => handleEditNote(id, text)} />
            <MdDeleteForever
              onClick={() => handleDeleteNote(id)}
              className="delete-icon"
              size="1.3em"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Note;
