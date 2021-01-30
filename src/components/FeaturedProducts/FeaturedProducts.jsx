import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./FeaturedProductsStyles";
import { useProductsContext } from "../../contexts/products_context";

import { Loading, Product, Error } from "..";

const FeaturedProducts = () => {
	const {
		products_loading: loading,
		featured_products,
		products_error: error
	} = useProductsContext();

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error />;
	}

	return (
		<Wrapper className="section">
			<div className="title">
				<h4>featured products</h4>
				<div className="underline"></div>
			</div>

			<div className="section-center featured">
				{featured_products.slice(0, 3).map(product => (
					<Product key={product.id} {...product} />
				))}
			</div>
		</Wrapper>
	);
};

export default FeaturedProducts;
