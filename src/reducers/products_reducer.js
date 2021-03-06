import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	GET_PRODUCTS_BEGIN,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR,
	GET_SINGLE_PRODUCT_BEGIN,
	GET_SINGLE_PRODUCT_SUCCESS,
	GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const products_reducer = (state, action) => {
	const payload = action.payload ? action.payload : "";
	switch (action.type) {
		case SIDEBAR_OPEN:
			return { ...state, isSidebarOpen: true };

		case SIDEBAR_CLOSE:
			return { ...state, isSidebarOpen: false };

		case GET_PRODUCTS_BEGIN:
			return { ...state, loading: true };

		case GET_PRODUCTS_SUCCESS:
			const featured = payload.filter((p) => p.featured === true);
			return {
				...state,
				loading: false,
				error: false,
				products: payload,
				featured_products: featured,
			};

		case GET_PRODUCTS_ERROR:
			return { ...state, error: false, loading: false };

		case GET_SINGLE_PRODUCT_BEGIN:
			return {
				...state,
				single_product_loading: true,
				single_product_error: false,
			};

		case GET_SINGLE_PRODUCT_SUCCESS:
			return {
				...state,
				single_product_loading: false,
				single_product: payload,
			};

		case GET_SINGLE_PRODUCT_ERROR:
			return {
				...state,
				single_product_loading: false,
				single_product_error: true,
			};

		default:
			return state;
	}
};

export default products_reducer;
