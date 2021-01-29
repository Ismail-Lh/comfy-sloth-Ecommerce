import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import { Wrapper } from "./ProductStyles";

const Product = ({ name, image, price, id }) => {
	return (
		<Wrapper>
			<div className="container">
				<img src={image} alt={name} />
				<Link to={`/products/${id}`} className="link">
					<FaSearch />
				</Link>
			</div>
			<footer>
				<h5>{name}</h5>
				<p>{price}</p>
			</footer>
		</Wrapper>
	);
};

export default Product;
