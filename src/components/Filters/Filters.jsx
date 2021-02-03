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

					<div className="form-control">
						<h5>category</h5>
						<div>
							{categories.map((ctg, idx) => (
								<button
									type="button"
									key={idx}
									name="category"
									onClick={updateFilters}
									className={`${category === ctg.toLowerCase() && "active"}`}
								>
									{ctg}
								</button>
							))}
						</div>
					</div>

					<div className="form-control">
						<h5>company</h5>
						<select
							name="company"
							value={company}
							onChange={updateFilters}
							className="company"
						>
							{companies.map((comp, idx) => (
								<option value={comp} key={idx}>
									{comp}
								</option>
							))}
						</select>
					</div>
				</form>
			</div>
		</Wrapper>
	);
};

export default Filters;
