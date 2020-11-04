import React from "react";

interface Props {
  name: string;
}
export default class Beer extends React.Component<Props> {
  static defaultProps: Props = {
    name: "beer",
  };
  render() {
    return <p>{this.props.name}</p>;
  }
}
