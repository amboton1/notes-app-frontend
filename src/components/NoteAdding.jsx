import React from "react";

const NoteAdding = props => {
  const { title, onHandleSubmit, onChange } = props;

  const handleChange = event => {
    onChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onHandleSubmit();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter new note"
            type="text"
            value={title}
            onChange={handleChange}
          />
      </form>
    </section>
  );
};

export default NoteAdding;
