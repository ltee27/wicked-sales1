import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="card h-100">
        <img className="card-img" src={this.props.product.image} alt={'product image'} />
        <h1 className="product-title">{this.props.product.name}</h1>
        <p className="card-price">${Number(this.props.product.price / 100).toFixed(2)}</p>
        <p className="card-description">{this.props.product.shortDescription}</p>
      </div>
    );
  }
}

export default ProductListItem;
