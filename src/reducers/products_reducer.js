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

const ProductsReducer = (state, action) => {
	if (action.type === SIDEBAR_OPEN) {
		return { ...state, isSidebarOpen: true };
	}

	if (action.type === SIDEBAR_CLOSE) {
		return { ...state, isSidebarOpen: false };
	}

	if (action.type === GET_PRODUCTS_BEGIN) {
		return { ...state, products_loading: true };
	}

	if (action.type === GET_PRODUCTS_SUCCESS) {
		const all_products = action.payload;
		const featured_products = action.payload.filter(
			product => product.featured === true
		);

		return {
			...state,
			products_loading: false,
			all_products,
			featured_products
		};
	}

	if (action.type === GET_PRODUCTS_ERROR) {
		return { ...state, products_loading: false, products_error: true };
	}

	throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
