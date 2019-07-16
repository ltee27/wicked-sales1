import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  render() {
    if (this.state.product === null) {
      return null;
    }
    return (
      <div>
        <div onClick={this.setView}>Back to catalog</div>
        <div className="card h-30">
          {/* <img className="card-img-top" src={this.state.product.image} alt={'product image'} /> */}
          <h1 className="product-title">{this.state.product.name}</h1>
          <p className="card-price">${Number(this.state.product.price / 100).toFixed(2)}</p>
          <p className="card-description">{this.state.product.shortDescription}</p>
          <p className="card-description">{this.state.product.longDescription}</p>
        </div>
      </div>
    );
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
