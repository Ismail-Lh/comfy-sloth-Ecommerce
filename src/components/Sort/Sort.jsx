import React from "react";
import { useFilterContext } from "../../contexts/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

import { Wrapper } from "./SortStyles";

const Sort = () => {
	const {
		filtered_products: products,
		grid_view,
		setGridView,
		setListView
	} = useFilterContext();

	return (
		<Wrapper>
			<div className="btn-container">
				<button
					type="button"
					className={`${grid_view && "active"}`}
					onClick={setGridView}
				>
					<BsFillGridFill />
				</button>
				<button
					type="button"
					className={`${grid_view || "active"}`}
					onClick={setListView}
				>
					<BsList />
				</button>
			</div>

			<p>{products.length} products found</p>
			<hr />

			<form>
				<label htmlFor="sort">Sort by</label>
				<select name="sort" id="sort" className="sort-input">
					<option value="price-lowest">price (lowest)</option>
					<option value="price-highest">price (highest)</option>
					<option value="name-a">name (a - z)</option>
					<option value="name-z">name (z - z)</option>
				</select>
			</form>
		</Wrapper>
	);
};

export default Sort;
