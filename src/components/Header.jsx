import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

// Shared navbar for the Product Listing and Cart pages. Reads the cart's
// item count straight from Redux so the badge updates the instant the
// cart changes anywhere in the app.
export default function Header() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="nn-header">
      <NavLink to="/" className="nn-brand">
        Paradise Nursery
      </NavLink>

      <nav className="nn-nav" aria-label="Main navigation">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'nn-link active' : 'nn-link')}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'nn-link active' : 'nn-link')}>
          Plants
        </NavLink>
        <NavLink to="/cart" className="nn-cart-link" aria-label={`Cart, ${totalItems} items`}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M3 4h2l2.4 11.4A2 2 0 0 0 9.35 17h7.3a2 2 0 0 0 1.95-1.57L20 7H6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="21" r="1.4" fill="currentColor" />
            <circle cx="17" cy="21" r="1.4" fill="currentColor" />
          </svg>
          <span className="nn-cart-badge">{totalItems}</span>
        </NavLink>
      </nav>
    </header>
  );
}
