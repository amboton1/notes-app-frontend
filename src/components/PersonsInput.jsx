import React from "react";

const PersonsInput = props => {
  const { name, onHandleSubmit, onChange } = props;

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
            placeholder="Enter new user"
            type="text"
            value={name}
            onChange={handleChange}
          />
      </form>
    </section>
  );
};

export default PersonsInput;
