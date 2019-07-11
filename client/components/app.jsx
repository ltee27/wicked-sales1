import React from 'react';
import Header from './header';
import ProductList from './product-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(result => {
        this.setState({ products: result });
      });
  }

  render() {
    return (
      <div>
        <Header/>
        <ProductList data={this.state.products} />
      </div>
    );
  }
}

export default App;
