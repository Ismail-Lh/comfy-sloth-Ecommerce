import React, { useEffect, useContext, useReducer, createContext } from "react";

import FilterReducer from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";

import {
	LOAD_PRODUCTS,
	SET_GRIDVIEW,
	SET_LISTVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS
} from "../actions";

const initialState = {
	filtered_products: [],
	all_products: [],
	grid_view: true,
	sort: "price-lowest",
	filters: {
		text: "",
		company: "all",
		category: "all",
		color: "all",
		max_price: 0,
		min_price: 0,
		price: 0,
		shipping: false
	}
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
	const { all_products } = useProductsContext();
	const [state, dispatch] = useReducer(FilterReducer, initialState);

	useEffect(() => {
		dispatch({ type: LOAD_PRODUCTS, payload: all_products });
	}, [all_products]);

	useEffect(() => {
		dispatch({ type: FILTER_PRODUCTS });
		dispatch({ type: SORT_PRODUCTS });
	}, [all_products, state.sort, state.filters]);

	const setGridView = () => {
		dispatch({ type: SET_GRIDVIEW });
	};

	const setListView = () => {
		dispatch({ type: SET_LISTVIEW });
	};

	const updateSort = e => {
		const { value } = e.target;
		dispatch({ type: UPDATE_SORT, payload: value });
	};

	const updateFilters = e => {
		let { name, value } = e.target;
		dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
	};

	const clearFilters = () => {
		console.log("clearFilters");
	};

	return (
		<FilterContext.Provider
			value={{
				...state,
				setGridView,
				setListView,
				updateSort,
				updateFilters,
				clearFilters
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};
// make sure use
export const useFilterContext = () => {
	return useContext(FilterContext);
};
