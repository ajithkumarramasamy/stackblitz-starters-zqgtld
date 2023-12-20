import React, { useState } from 'react';

const EditNote = ({ handleFinalEdit, editText, id }) => {
  const [noteText, setNoteText] = useState(editText);
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveChanges = () => {
    if (noteText.trim().length > 0) {
      handleFinalEdit(noteText, id);
      setNoteText('');
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        value="nosdnoi"
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveChanges}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditNote;
