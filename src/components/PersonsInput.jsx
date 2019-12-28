import React from 'react';

const PersonsInput = (props) => {
    const { onHandleSubmit, onChange } = props

    const handleChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <section>
            <form onSubmit={onHandleSubmit}>
            <label>
                <input placeholder="Enter new user" type="text" onChange={handleChange} />
                <button type="submit">Add</button>
            </label>
            </form>
        </section>
    );
}

export default PersonsInput;