import React, { Component } from "react";
import "./ProductTable.css";

export default class ProductRow extends Component {
  render() {
    const { id, name, price, stocked } = this.props;
    const custom = { backgroundColor: stocked ? "lightgreen" : "none" };
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{price}</td>
        {/* <td style={{ backgroundColor: stocked ? "lightgreen" : "none" }}> */}
        <td style={custom}>{stocked ? "YES" : "NO"}</td>
      </tr>
    );
  }
}
