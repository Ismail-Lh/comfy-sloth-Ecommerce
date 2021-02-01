import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

import { Wrapper } from "./AddToCartStyles";

const AddToCart = ({ product }) => {
	const { id, stock, colors } = product;

	const [mainColor, setMainColor] = useState(colors[0]);

	return (
		<Wrapper>
			<div className="colors">
				<span>Colors : </span>
				<div>
					{colors.map((color, idx) => (
						<button
							type="button"
							key={idx}
							className={`${
								mainColor === color ? "color-btn active" : "color-btn"
							}`}
							style={{ background: color }}
							onClick={() => setMainColor(color)}
						>
							{mainColor === color && <FaCheck />}
						</button>
					))}
				</div>
			</div>
		</Wrapper>
	);
};

export default AddToCart;
