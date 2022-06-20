import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route, Link } from "react-router-dom";
import List from "./List/List";
import MainPage from "./MainPage/MainPage";
import ProductPage from "./ProductPage/ProductPage";
import Cart from "./Cart/Cart";
import {MyState} from "./MyState";

function App() {
  return (
    <div className="container-md App">
      <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
        <Link to="/" className="navbar-brand">
          &nbsp;Noora Shop
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/cart"} className="nav-link">
              Cart {MyState.Cart.Orders.length}
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/l2"} className="nav-link">
              Link2
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/mehdi"} className="nav-link">
              Mehdi
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/reza"} className="nav-link">
              Reza
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/last"} className="nav-link">
              Last
            </Link>
          </li>
        </div>
      </nav>
      <div className="p-0">
        <Routes>
          <Route path={"/"} element={<MainPage/>} />
          <Route path={"/product"} element={<ProductPage/>} />
          <Route path={"/cart"} element={<Cart/>} />

          <Route path={"/l2"} element={<h2>sss</h2>} />
          <Route path={"/mehdi"} exact element={<List Selected={'Mehdi'}/>} />
          <Route path={"/reza"} exact element={<List Selected={'Reza'}/>} />
          <Route path={"/last"} element={<List />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
