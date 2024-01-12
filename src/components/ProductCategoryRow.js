import React, { Component } from "react";

export default class ProductCategoryRow extends Component {
  render() {
    const { category } = this.props;
    return (
      <tr style={{ backgroundColor: "lightgrey" }}>
        <th colSpan={3}>{category}</th>
      </tr>
    );
  }
}
