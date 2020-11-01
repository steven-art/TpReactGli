import React, { Component } from "react";

interface Props {
  name: string;
}
export default class Beer extends React.Component<Props> {
  static defaultProps: Props = {
    name: "",
  };
}
