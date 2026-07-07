import { Routes, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import './App.css';

// The landing page lives directly in App.jsx (per project spec) and is
// rendered at the "/" route. "/products" and "/cart" render the other two
// pages, each of which brings its own <Header /> navbar.
function LandingPage() {
  return (
    <main className="nn-landing">
      <div className="nn-landing-inner">
        <p className="nn-eyebrow">Est. from one potting bench</p>
        <h1 className="nn-title">Paradise Nursery</h1>
        <AboutUs />
        <Link to="/products" className="nn-cta">
          Get Started
        </Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}
