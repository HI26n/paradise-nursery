import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import PlantIcon from './PlantIcon.jsx';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/CartSlice.jsx';
import './CartItem.css';

export default function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handleCheckout = () => {
    setCheckoutMessage('Checkout is coming soon — thanks for your patience!');
  };

  return (
    <div className="ci-page">
      <Header />
      <main className="ci-content">
        <h1 className="ci-heading">Your Cart</h1>

        <div className="ci-summary">
          <span>
            Total plants: <strong>{totalItems}</strong>
          </span>
          <span>
            Total cost: <strong>${totalCost.toFixed(2)}</strong>
          </span>
        </div>

        {items.length === 0 ? (
          <div className="ci-empty">
            <p>Your cart is empty. Head back to the shop to add a few plants.</p>
            <Link to="/products" className="ci-btn ci-btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <ul className="ci-list">
              {items.map((item) => (
                <li className="ci-row" key={item.id}>
                  <div className="ci-thumb">
                    <PlantIcon {...item.icon} size={70} />
                  </div>

                  <div className="ci-info">
                    <h3 className="ci-name">{item.name}</h3>
                    <p className="ci-unit-price">${item.price.toFixed(2)} each</p>
                  </div>

                  <div className="ci-qty">
                    <button
                      type="button"
                      className="ci-qty-btn"
                      aria-label={`Decrease quantity of ${item.name}`}
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      −
                    </button>
                    <span className="ci-qty-value">{item.quantity}</span>
                    <button
                      type="button"
                      className="ci-qty-btn"
                      aria-label={`Increase quantity of ${item.name}`}
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>

                  <div className="ci-line-total">${(item.price * item.quantity).toFixed(2)}</div>

                  <button
                    type="button"
                    className="ci-delete-btn"
                    aria-label={`Remove ${item.name} from cart`}
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>

            <div className="ci-actions">
              <Link to="/products" className="ci-btn ci-btn-secondary">
                Continue Shopping
              </Link>
              <button type="button" className="ci-btn ci-btn-primary" onClick={handleCheckout}>
                Checkout
              </button>
            </div>

            {checkoutMessage && <p className="ci-checkout-msg">{checkoutMessage}</p>}
          </>
        )}
      </main>
    </div>
  );
}
