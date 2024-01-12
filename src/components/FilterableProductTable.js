import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      filterText: "",
      inStockOnly: false,
      products: [],
    };
  }

  fetchData = async () => {
    const url = "https://65971ae8668d248edf229713.mockapi.io/api/v1/produce";

    try {
      const resp = await fetch(url);
      const data = await resp.json();
      this.setState({ products: data });
    } catch (error) {
      console.log(error);
    } finally {
      // console.log("finally block");
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  onFilterTextChange = (value) => {
    this.setState({ filterText: value });
  };

  onInStockOnlyChange = (value) => {
    this.setState({ inStockOnly: value });
  };

  render() {
    const { filterText, inStockOnly, products } = this.state;

    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onInStockOnlyChange={this.onInStockOnlyChange}
          onFilterTextChange={this.onFilterTextChange}
        />
        <ProductTable
          products={products}
          inStockOnly={inStockOnly}
          filterText={filterText}
        />
      </div>
    );
  }
}



