import React from "react";
import { useFilterContext } from "../../contexts/filter_context";
import { GridView, ListView } from "../";

const ProductList = () => {
	const { filtered_products: products, grid_view } = useFilterContext();

	if (products.length < 1) {
		return (
			<h5 style={{ textTransform: "none" }}>
				Sorry, no product matched your search...
			</h5>
		);
	}

	if (!grid_view) {
		return <ListView products={products} />;
	}

	return <GridView products={products}>product list</GridView>;
};

export default ProductList;
