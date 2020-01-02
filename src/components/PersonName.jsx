import React, { Component } from 'react';
import PersonsInput from './PersonsInput';

class PersonName extends Component {
    constructor(props) {
        super(props);

        this.state = { editable: false, name: '' };
    };

    editMode = () => {
        this.setState({
            editable: !this.state.editable,
            name: this.props.name,
        })
    }

    onSubmit = () => {
        this.editMode();
        this.props.onEditSubmit(this.state.name);
    };

    delete = () => {
        this.props.onDelete(this.props.id)
    }

    setOnChange = name => this.setState({ name })

    renderPerson = () =>
        this.state.editable ? (
            <PersonsInput
                name={this.state.name}
                onChange={this.setOnChange}
                onHandleSubmit={this.onSubmit}
            />
        )
        : this.props.name

    render() {
        return (
            <>
                { this.renderPerson() }
                <button className="btn-action" onClick={this.editMode}>Edit</button>
                <button className="btn-action" onClick={this.delete}>Delete</button>
            </>
        );
    }
}

export default PersonName;