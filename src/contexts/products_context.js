import React, { useContext, createContext, useReducer, useEffect } from "react";
import axios from "axios";

import { products_url as API_URL } from "../utils/constants";
import ProductsReducer from "../reducers/products_reducer";
import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	GET_PRODUCTS_BEGIN,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR,
	GET_SINGLE_PRODUCT_BEGIN,
	GET_SINGLE_PRODUCT_SUCCESS,
	GET_SINGLE_PRODUCT_ERROR
} from "../actions";

const ProductsContext = createContext();

const initialState = {
	isSidebarOpen: false,
	products_loading: false,
	products_error: false,
	all_products: [],
	featured_products: [],
	single_product_loading: false,
	single_product_error: false,
	single_product: {}
};

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ProductsReducer, initialState);

	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};

	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};

	// Fetch the products data from the API_URL
	const fetchProducts = async url => {
		dispatch({ type: GET_PRODUCTS_BEGIN });

		try {
			const res = await axios.get(url);
			const productsData = res.data;

			dispatch({ type: GET_PRODUCTS_SUCCESS, payload: productsData });
		} catch (err) {
			dispatch({ type: GET_PRODUCTS_ERROR });
		}
	};

	const fetchSingleProduct = async url => {
		dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });

		try {
			const res = await axios.get(url);
			const singleProductData = res.data;

			dispatch({
				type: GET_SINGLE_PRODUCT_SUCCESS,
				payload: singleProductData
			});
		} catch (err) {
			dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
		}
	};

	useEffect(() => {
		fetchProducts(API_URL);
	}, []);

	return (
		<ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
			{children}
		</ProductsContext.Provider>
	);
};

export const useProductsContext = () => {
	return useContext(ProductsContext);
};
