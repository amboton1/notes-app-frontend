  import React, { Component } from 'react';
  import axios from "axios";
  import PersonsList from './components/PersonsList';
import PersonsInput from './components/PersonsInput';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { persons: [], name: '' }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res, req) => {
        this.setState({ persons: res.data })
    })
  }

  handleChange = (value) => {
    this.setState({ name: value });
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios.post('https://jsonplaceholder.typicode.com/users').then(() => {
        this.setState({ persons: this.state.persons.concat([ { name: this.state.name } ]) })
    })
  }

  render() {
    return (
      <section>
        <PersonsInput onHandleSubmit={this.handleSubmit} onChange={this.handleChange} />
        <PersonsList persons={this.state.persons} />
      </section>
    );
  }
}

  export default App;