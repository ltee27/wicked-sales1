import React from 'react';

class ProductListItem extends React.Component {
    render() {
        return (
            <div className="col">
                <img className="card-img-top" src={this.props.product.image} alt={"product image"} />
                <div>{this.props.product.name}</div>
                <div>{this.props.product.price}</div>
            </div>
        )
    }
}

export default ProductListItem;