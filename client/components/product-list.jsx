import React from 'react';
import ProductListItem from "./product-list-item";

class ProductList extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.data.map(item => {
                        return (
                            <div className="col-md-4">
                                <ProductListItem key={item.id} product={item}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default ProductList;