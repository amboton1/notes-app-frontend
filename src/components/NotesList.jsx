import React from 'react';
import '../App.css'
import NoteEdit from './NoteEdit';

const NotesList = (props) => {
    const { notes, onChange, onDelete, onEditSubmit } = props;

    const mapPersons = () => {
        return notes.map(note => 
            <div key={note._id}>
                <li>
                    <NoteEdit
                        title={note.title}
                        onChange={onChange}
                        onDelete={() => onDelete(note._id)}
                        onEditSubmit={title => onEditSubmit(note._id, title)}
                    />
                </li>
            </div>
        )
    }

    return (
        <section>
            <ul className="user-list">
                { mapPersons() }
            </ul>
        </section>
    );
}

export default NotesList;