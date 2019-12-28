import React from 'react';
import Buttons from './Buttons';
import '../App.css'

const PersonsList = (props) => {
    const { persons } = props;

    const mapPersons = () => {
        return persons.map(person => 
            <div key={person.id}>
                <li key={person.id}>
                {person.name}
            </li>

            <Buttons persons={persons} />
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