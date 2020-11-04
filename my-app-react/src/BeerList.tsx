import React, { ChangeEvent } from "react";
import Beer from "./Beer";

interface State {
  beers: string[];
  inputValue: string;
}

interface Props {}

export default class Beerlist extends React.Component<Props> {
  state: State = {
    beers: ["Coreff", "Corona", "Mort Subite"],
    inputValue: "",
  };
  static defaultState: State = {
    beers: ["Coreff", "Corona", "Mort Subite"],
    inputValue: "",
  };
  constructor(props: Props) {
    super(props);

    this.state = Beerlist.defaultState;
  }

  deleteBeer = (index: number) => {
    const beersList = this.state.beers;

    beersList.splice(index, 1);
    this.setState({
      beers: beersList,
      inputValue: this.state.inputValue,
    });
  };
  addBeer = () => {
    const beerList = this.state.beers;
    beerList.push(this.state.inputValue);
    this.setState({
      beers: beerList,
      inputValue: "",
    });
  };
  updateInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      beers: this.state.beers,
      inputValue: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>The list of beers</h1>
        <ul>
          {this.state.beers.map((beer: any, index: number) => (
            <li key={index}>
              <Beer name={beer} />
              <button onClick={() => this.deleteBeer(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Write your favorite Beer"
          value={this.state.inputValue}
          onChange={this.updateInputValue}
        />
        <button onClick={this.addBeer}>Add Beer</button>
      </div>
    );
  }
}
