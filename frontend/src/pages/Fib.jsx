import React, { Component } from 'react';
import axios from 'axios';


class Fib extends Component {
  constructor() {
    super();
    this.state = {
      seenIndices: [],
      values: {},
      index: ''
    };
  }

  componentDidMount() {
    this.fetchValues();
    this.fetchIndices();
  }

  fetchValues = async () => {
    const values = await axios.get('/api/values/current');
    console.log(values);
    this.setState({ values: values.data });
  }

  fetchIndices = async () => {
    const seenIndices = await axios.get('/api/values/all');
    this.setState({ 
      seenIndices: seenIndices.data
    });
  }

  renderSeenIndices = () => {
    return (
      this.state.seenIndices.map(
        ({ number }) => number
      )
      .join(', ')
    )
  }

  renderValues = () => {
    const entries = [];

    for(let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key}, I calculated {this.state.values[key]}
        </div>
      );
    }
    return entries;
  }

  handleSubmit = async e => {
    e.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index
    });
    this.setState({ index: '' });
    this.fetchIndices();
    this.fetchValues();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter an index:</label>
          <input
            className="form-control" 
            value={ this.state.index } 
            onChange={ e => this.setState({index: e.target.value}) }
          />
          <button className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
        <h5 className="mt-5">Indices I have seen:</h5>
        { this.renderSeenIndices() }
        <h5>Calculated Values:</h5>
        { this.renderValues() }
      </div>
    )
  }
}

export default Fib;