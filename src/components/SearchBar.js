import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    const { filterText, onFilterTextChange, inStockOnly, onInStockOnlyChange } =
      this.props;
    return (
      <form>
        <input
          value={filterText}
          type="text"
          placeholder="Search..."
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />{" "}
          Only show products in stock
        </label>
      </form>
    );
  }
}
