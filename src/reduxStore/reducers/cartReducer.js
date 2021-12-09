import * as actionTypes from '../actions/actionTypes';

const initialState = {
	totalPrice: 0,
	deliveryFee: 0,
	productPrice: 0,
	orders: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.RESET_CART:
			return {
				totalPrice: 0,
				deliveryFee: 0,
				productPrice: 0,
				orders: []
			};
		case actionTypes.INCREMENT_PRODUCT:
			const incrementArray = incrementProducts(state.orders, action);
			return {
				...state,
				orders: incrementArray
			};

		case actionTypes.DECREMENT_PRODUCT:
			const decrementArray = decrementProducts(state.orders, action);
			return {
				...state,
				orders: decrementArray
			};

		case actionTypes.CALCULATE_TOTAL_CART_AMOUNT:
			return {
				...state,
				totalPrice: action.totalPrice,
				deliveryFee: action.deliveryFee,
				productPrice: action.productPrice
			};
		default:
			return state;
	}
};

const findProductIndex = (array, id) => {
	if (array.length === 0) {
		return -1;
	} else {
		const index = array.findIndex((item) => item.product.id === id);
		return index;
	}
};

const incrementProducts = (orders, action) => {
	const incrementArray = orders.slice();
	const productIndex = findProductIndex(incrementArray, action.payload.id);

	if (productIndex !== -1) {
		incrementArray[productIndex] = {
			product: incrementArray[productIndex].product,
			quantity: incrementArray[productIndex].quantity + 1
		};
	} else {
		const product = { product: action.payload, quantity: 1 };
		incrementArray.push(product);
	}

	return incrementArray;
};

const decrementProducts = (orders, action) => {
	const decrementArray = orders.slice();
	const productIndex = findProductIndex(decrementArray, action.payload.id);

	if (productIndex !== -1) {
		decrementArray[productIndex] = {
			product: decrementArray[productIndex].product,
			quantity: decrementArray[productIndex].quantity - 1
		};
	} else {
		const product = { product: action.payload, quantity: 1 };
		decrementArray.push(product);
	}

	return decrementArray;
};
export default reducer;
