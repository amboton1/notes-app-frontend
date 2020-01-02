import React from 'react';
import '../App.css'
import PersonsName from './PersonName';

const PersonsList = (props) => {
    const { persons, onChange, onDelete, onEditSubmit } = props;

    const mapPersons = () => {
        return persons.map(person => 
            <div key={person.id}>
                <li>
                    <PersonsName
                        id={person.id}
                        name={person.name}
                        onChange={onChange}
                        onDelete={onDelete}
                        onEditSubmit={name => onEditSubmit({id: person.id, name})}
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

export default PersonsList;