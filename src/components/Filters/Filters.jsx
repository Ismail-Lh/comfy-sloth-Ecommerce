import React from "react";
import { FaCheck } from "react-icons/fa";

import { useFilterContext } from "../../contexts/filter_context";
import { getUniqueValues, formatPrice } from "../../utils/helpers";

import { Wrapper } from "./FiltersStyles";

const Filters = () => {
	const {
		filters: {
			text,
			company,
			category,
			color,
			max_price,
			min_price,
			price,
			shipping
		},
		updateFilters,
		clearFilters,
		all_products
	} = useFilterContext();

	const categories = getUniqueValues(all_products, "category");
	const companies = getUniqueValues(all_products, "company");
	const colors = getUniqueValues(all_products, "colors");
	console.log(colors);

	return (
		<Wrapper>
			<div className="content">
				<form onSubmit={e => e.preventDefault()}>
					<div className="form-control">
						<input
							type="text"
							name="text"
							value={text}
							placeholder="search"
							className="search-input"
							onChange={updateFilters}
						/>
					</div>
				</form>
			</div>
		</Wrapper>
	);
};

export default Filters;
