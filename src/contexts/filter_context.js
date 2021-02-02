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
	all_products: []
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
	const { all_products } = useProductsContext();
	const [state, dispatch] = useReducer(FilterReducer, initialState);

	useEffect(() => {
		dispatch({ type: LOAD_PRODUCTS, payload: all_products });
	}, [all_products]);

	return (
		<FilterContext.Provider value={{...state}}>
			{children}
		</FilterContext.Provider>
	);
};
// make sure use
export const useFilterContext = () => {
	return useContext(FilterContext);
};
