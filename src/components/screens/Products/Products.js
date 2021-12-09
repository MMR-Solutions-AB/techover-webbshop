import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import ProductCard from '../../ProductCard/ProductCard.js';
import useStyles from './styles';
import { connect } from 'react-redux';
import { incrementProduct, decrementProduct } from '../../../reduxStore/actions/cartActions';

const Products = ({ products, error, loading, onDecrement, onIncrement }) => {
	const classes = useStyles();
	console.log({ products });

	const renderProductCards = () => {
		if (loading) return [1, 2, 3, 4, 5].map((d) => <ProductCard key={d} loading={true} />);

		return products.map((prod, i) => {
			return (
				<ProductCard
					{...prod}
					loading={false}
					key={i}
					onIncrement={() => onIncrement(prod)}
					onDecrement={() => onDecrement(prod)}
					isLast={i === products.length - 1}
				/>
			);
		});
	};

	return (
		<div id="Product__screen">
			<Container maxWidth="md">
				<div className="Products__view">
					<div className={classes.productHeader}>
						<Typography variant="h1" className={classes.productsTitle}>
							Välj varor
						</Typography>
					</div>
					<Grid container spacing={2} justify="center">
						<Grid item xs={12}>
							{renderProductCards()}
						</Grid>
					</Grid>
					<div className={classes.buttonContainer}>
						<Button variant="contained">Köp</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { items, loading, error } = state.products;
	return {
		products: items,
		error,
		loading
	};
};

const mapDIspatchToProps = (dispatch) => {
	return {
		onIncrement: (data) => dispatch(incrementProduct(data)),
		onDecrement: (data) => dispatch(decrementProduct(data))
	};
};

export default connect(mapStateToProps, mapDIspatchToProps)(Products);
