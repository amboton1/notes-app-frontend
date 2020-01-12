import React, { Component } from "react";
import restClient from "../restClient";
import NotesList from "./NotesList";
import NoteAdding from "./NoteAdding";
import Navbar from "./header/Navbar";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: [], title: "", isSuccessLogin: false, token: sessionStorage.getItem('token') };
  }

  componentDidMount() {
    restClient.get("/notes", { headers: {"Authorization" : `Bearer ${this.state.token}`, 'Accept' : 'application/json'} }).then((res, req) => {
      this.setState({ notes: res.data });
    });
  }

  handleChange = value => {
    this.setState({ title: value });
  };

  handleSubmit = () => {
    restClient.post("/notes", 
    {title: this.state.title, description: 'new des'},
    { headers: {"Authorization" : `Bearer ${this.state.token}`, 'Accept' : 'application/json'} }
    ).then((res) => {
      this.setState({
        notes: this.state.notes.concat({ _id: res.data._id, title: this.state.title, owner: this.state.token }),
        title: ""
      });
    });
  };

  onEdit = ( _id, title ) => {
    restClient.patch(`/notes/${_id}`, {title}).then(() => {
      this.setState({
       notes: this.state.notes.map(note => note._id === _id ? { ...note, title } : note)
      })
    })
  };

  onDelete = (_id) => {
    restClient.delete(`/notes/${_id}`, {_id}).then(() => {
      this.setState({
        notes: this.state.notes.filter(note => note._id !== _id)
      })
    })
  }

  onLogout = () => {
    this.setState({ token: sessionStorage.removeItem('token') })
    window.location.href = '/users/login';
    console.log(this.state.token)
  }

  switchLogin = () => {
    this.setState({ isLoginOpen: true, isRegisterOpen: false })
  }

  switchRegister = () => {
    this.setState({ isRegisterOpen: true, isLoginOpen: false })
  }

  render() {
    return (
        <section>
          <Navbar onLogout={this.onLogout} />
          <section className="user-cnt">
          <div className="input-user">
              <NoteAdding
                title={this.state.title}
                onHandleSubmit={this.handleSubmit}
                onChange={this.handleChange}
              />

              <button className="note-add" onClick={this.handleSubmit} type="submit">
                Add
              </button>

          </div>

          <NotesList
            title={this.state.title}
            notes={this.state.notes}
            onEditSubmit={this.onEdit}
            onChange={this.handleChange}
            onDelete={this.onDelete}
          />

          </section>
        </section>
    );
  }
}

export default Notes;
