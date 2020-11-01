import React, { Component } from "react";
import Beer from "./Beer";

interface State {
  beers: string[];
  inputValue: string;
}

export default class Beerlist extends React.Component {
  state: State = {
    beers: [],
    inputValue: this.state.beers.,
  };

  deleteBeer = (index: number) => {
    this.state.beers.slice(index);
  };

  addBeer = () => {
    this.state.beers.push(this.state.inputValue);
  };
  updateInputValue = () => {
    this.state.inputValue = "";
  };
  render() {
    return (
      <div>
        <h1>The list of beers</h1>
        <ul>
          {this.state.beers.map((beer, index) => (
            <li key={index}>
              <Beer name={beer} />
              <button onClick={() => this.deleteBeer(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          name="addbutton"
          placeholder="add Beer"
          value={this.state.inputValue}
          onChange={this.updateInputValue}
        />
        <button onClick={this.addBeer}>Add</button>
      </div>
    );
  }
}
