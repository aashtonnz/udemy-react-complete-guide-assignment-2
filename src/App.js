import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = { inputText: '' };

  inputChangeHandler = (event) => {
    this.setState({ inputText: event.target.value });
  }

  deleteCharHandler = (index) => {
    const inputChars = this.state.inputText.split('');
    inputChars.splice(index, 1);
    this.setState({ inputText: inputChars.join('') })
  }

  render() {
    const inputChars = this.state.inputText.split('');
    const charComponents = inputChars.map((char, index) => {
      return <CharComponent char={char} key={index} remove={(_event) => this.deleteCharHandler(index)} />
    });

    return (
      <div className="App">
        <input type="text" onChange={this.inputChangeHandler} value={this.state.inputText} />
        <p>Length: {this.state.inputText.length}</p>
        <ValidationComponent inputText={this.state.inputText}/>
        {charComponents}
      </div>
    );
  }
}

export default App;
