import React from 'react';

const PersonsList = (props) => {
    const { persons } = props;

    const mapPersons = () => {
        return persons.map(person => <li key={person.id}>{person.name}</li>)
    }

    return (
        <section>
            <ul>
                { mapPersons() }
            </ul>
        </section>
    );
}

export default PersonsList;