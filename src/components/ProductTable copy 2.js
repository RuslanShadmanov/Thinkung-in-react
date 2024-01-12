import React, { Component } from "react";
import "./ProductTable.css";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default class ProductTable extends Component {
  render() {
    const { products, inStockOnly, filterText } = this.props;

    const rows = [];
    let lastCategory = null;

    products.forEach(({ category, id, name, stocked, price }) => {
      const obj = { id: id, name: name, stocked: stocked, price: price };

      if (lastCategory !== category) {
        rows.push(<ProductCategoryRow category={category} />);
      }
      rows.push(<ProductRow {...obj} />);

      lastCategory = category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stocked</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
