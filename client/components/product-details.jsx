import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  render() {
    return null;
  }

  componentDidMount() {
    fetch('/api/products.php?id=1')
      .then(res => res.json())
      .then(result => {
        this.setState({ product: result });
      });
  }
}

export default ProductDetails;
