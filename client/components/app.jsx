import React from 'react';
import Header from './header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
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
      </div>
    );
  }
}
