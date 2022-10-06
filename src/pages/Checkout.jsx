import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem'
import AppContext from '../context/AppContext';
import '../styles/Checkout.scss';

const Checkout = () => {

	const { state } = useContext(AppContext);

	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					{state.cart.map(product => (
						<div className="order">
							<OrderItem product={product} key={`orderItem-${product.id}`} />
						</div>
					))}
				</div>
				{/* <OrderItem /> */}
			</div>
		</div>
	);
}

export default Checkout;
