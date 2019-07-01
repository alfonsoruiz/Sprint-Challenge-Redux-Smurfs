import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';

import Smurf from './Smurf';
import './App.css';

class App extends Component {

  state = {
    name: '',
    age: '',
    height: ''
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChanges = event => {
   this.setState({
     [event.target.name]: event.target.value
   })
  }

  addSmurf = event => {
    event.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }

    this.props.addSmurf(smurf);

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Smurfs List</h1>

        <form onSubmit={this.addSmurf}>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChanges} placeholder='Add smurf name' />
          <input type='text' name='age' value={this.state.age} onChange={this.handleChanges} placeholder='Add smurf age' />
          <input type='text' name='height' value={this.state.height} onChange={this.handleChanges} placeholder='Add smurf height' />
          <button onClick={this.addSmurf}>Add Smurf</button>
        </form>

        {this.props.smurfs.map(smurf => (
          <Smurf smurf={smurf} key={smurf.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
