import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="card h-100">
        <img className="card-img-top" src={this.props.product.image} alt={'product image'} />
        <div>
          <h3 className="product-title">{this.props.product.name}</h3>
          <p className="card-price">${Number(this.props.product.price / 100).toFixed(2)}</p>
          <p className="card-description">{this.props.product.shortDescription}</p>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
