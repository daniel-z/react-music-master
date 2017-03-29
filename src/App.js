import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  search () {
    console.log('this.query', this.state)
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Artist"
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search();
                }
              }}
            />
          <InputGroup.Addon>
            <Glyphicon glyph="search"></Glyphicon>
          </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div>
          Gallery
        </div>
      </div>
    );
  }
}

export default App;
