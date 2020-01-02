import React, { Component } from "react";
import axios from "axios";
import PersonsList from "./components/PersonsList";
import PersonsInput from "./components/PersonsInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { persons: [], name: "" };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res, req) => {
      this.setState({ persons: res.data });
    });
  }

  handleChange = value => {
    this.setState({ name: value });
  };

  handleSubmit = () => {
    axios.post("https://jsonplaceholder.typicode.com/users").then(() => {
      this.setState({
        persons: this.state.persons.concat([{ name: this.state.name }])
      });
    });
  };

  onEdit = ({ id, name }) => {
    const persons = this.state.persons.map(person =>
      person.id === id ? { ...person, name } : person
    );

    this.setState({ persons });
  };

  onDelete = (id) => {
    this.setState({
      persons: this.state.persons.filter(person => person.id !== id)
    })
  }

  render() {
    return (
      <section className="user-cnt">
        <div className="input-user">
            <PersonsInput
              name={this.state.name}
              onHandleSubmit={this.handleSubmit}
              onChange={this.handleChange}
            />

            <button onClick={this.handleSubmit} type="submit">
              Add
            </button>

        </div>

        <PersonsList
          name={this.state.name}
          persons={this.state.persons}
          onEditSubmit={this.onEdit}
          onChange={this.handleChange}
          onDelete={this.onDelete}
        />

      </section>
    );
  }
}

export default App;
