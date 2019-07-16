import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setState = this.setState.bind(this);
    this.setView = this.setView.bind(this);
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

  setView(name, params) {
    this.setState({ view: name, params });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header/>
          <ProductList data={this.state.products} />
        </div>);
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <Header/>
          <ProductDetails data={this.view.params} view={this.setView}/>;
        </div>
      );
    }
  }
}

export default App;
