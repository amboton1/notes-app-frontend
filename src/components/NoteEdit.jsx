import React, { Component } from 'react';
import NoteAdding from './NoteAdding';

class NoteEdit extends Component {
    constructor(props) {
        super(props);

        this.state = { editable: false, title: '' };
    };

    editMode = () => {
        this.setState({
            editable: !this.state.editable,
            title: this.props.title,
        })
    }

    onSubmit = () => {
        this.editMode();
        this.props.onEditSubmit(this.state.title);
    };

    delete = () => {
        this.props.onDelete()
    }

    setOnChange = title => this.setState({ title })

    renderPerson = () =>
        this.state.editable ? (
            <NoteAdding
                title={this.state.title}
                onChange={this.setOnChange}
                onHandleSubmit={this.onSubmit}
            />
        )
        : <span>{this.props.title}</span>

    render() {
        return (
            <>
                { this.renderPerson() }
                <button className="btn-action" onClick={this.editMode}>Edit</button>
                <button className="btn-action delete" onClick={this.delete}>Delete</button>
            </>
        );
    }
}

export default NoteEdit;