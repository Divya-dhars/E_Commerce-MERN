import React from 'react';

function ProductDescription({ product}) {
    if (!product) {
        return <div>No product selected</div>;
    }

    return (
        <div className="product-description">
            <h2>{product.name}</h2>
            <div>Brand: {product.brand}</div>
            <div>Price: MRP {product.price}</div>
            <div>Ratings: {product.ratings}</div>

        </div>
    );
}

export default ProductDescription;
