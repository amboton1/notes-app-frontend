import React from 'react';

const PersonsInput = (props) => {
    const { onHandleSubmit, onHandleChange } = props

    return (
        <section>
            <form onSubmit={onHandleSubmit}>
            <label>
                <input placeholder="Enter new user" type="text" name="name"  onChange={onHandleChange} />
                <button type="submit">Add</button>
            </label>
            </form>
        </section>
    );
}

export default PersonsInput;