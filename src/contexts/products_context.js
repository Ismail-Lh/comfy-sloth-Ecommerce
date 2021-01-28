import { useContext, createContext, useReducer, useEffect } from "react";

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
	isSidebarOpen: false
};

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ProductsReducer, initialState);

	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};

	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};

	return (
		<ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
			{children}
		</ProductsContext.Provider>
	);
};

export const useProductsContext = () => {
	return useContext(ProductsContext);
};
