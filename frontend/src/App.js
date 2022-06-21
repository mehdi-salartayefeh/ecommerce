import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route, Link } from "react-router-dom";
import List from "./List/List";
import MainPage from "./MainPage/MainPage";
import ProductPage from "./ProductPage/ProductPage";
import CartCount from "./Cart/CartCount";
import {MyState} from "./MyState";
import {useEffect, useState} from "react";
import Cart from "./Cart/Cart";

function App() {
  const [appState, setAppState] = useState({
    loading: false,
    // productsLoaded: false,
    // repos: null,
  });
  useEffect(() => {
    setAppState(preAppState=>({...preAppState, loading:true}))
    /*if(!appState.productsLoaded) {
      MyState.Product.loadProducts();
      setAppState(preAppState=>({...preAppState,productsLoaded:true}))
    }*/
    MyState.Product.loadProductsOnce().then(()=>{
      setAppState(preAppState=>({...preAppState, loading:false}));
    });
  }, [setAppState]);
  return (
    <div className="container-md App">
      <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
        <Link to="/" className="navbar-brand">
          &nbsp;Noora Shop
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link key={'/'} to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link key={'/new'} to={"/new"} className="nav-link">
              New Releases
            </Link>
          </li>
          <li className="nav-item">
            <Link key={'/women'} to={"/women"} className="nav-link">
              Women
            </Link>
          </li>
          <li className="nav-item">
            <Link key={'/men'} to={"/men"} className="nav-link">
              Men
            </Link>
          </li>
          <li className="nav-item">
            <Link key={'/kids'} to={"/kids"} className="nav-link">
              Kids
            </Link>
          </li>
          {/*<li className="nav-item">
            <Link key={'/l2'} to={"/l2"} className="nav-link">
              Link2
            </Link>
          </li>
          <li className="nav-item">
            <Link key={'/mehdi'} to={"/mehdi"} className="nav-link">
              Mehdi
            </Link>
          </li>
          <li className="nav-item">
            <Link key={'/reza'} to={"/reza"} className="nav-link">
              Reza
            </Link>
          </li>
          <li className="nav-item">
            <Link key={'/last'} to={"/last"} className="nav-link">
              Last
            </Link>
          </li>*/}
        </div>
        <Link key={'/cart'} to={"/cart"} className="CartCount btn btn-primary rounded-0">
          <i className={'bi bi-cart-check fs-4'} /> <sup className={'badge bg-white text-dark'}><CartCount/></sup>
        </Link>
      </nav>
      <div className="p-0">
        <Routes>
          <Route key={'/'} path={"/"} element={<MainPage/>} />
          <Route key={'/product'} path={"/product"} element={<ProductPage/>} />
          <Route key={'/cart'} path={"/cart"} element={<Cart/>} />
          <Route key={'/new'} path={"/new"} element={<MainPage filter={'NEW'}/>} />
          <Route key={'/women'} path={"/women"} element={<MainPage filter={'WOMEN'}/>} />
          <Route key={'/men'} path={"/men"} element={<MainPage filter={'MEN'}/>} />
          <Route key={'/kids'} path={"/kids"} element={<MainPage filter={'KIDS'}/>} />

          {/*<Route key={'/l2'} path={"/l2"} element={<h2>sss</h2>} />
          <Route key={'/mehdi'} path={"/mehdi"} exact element={<List Selected={'Mehdi'}/>} />
          <Route key={'/reza'} path={"/reza"} exact element={<List Selected={'Reza'}/>} />
          <Route key={'/last'} path={"/last"} element={<List />} />*/}
        </Routes>
      </div>
    </div>
  );
}

export default App;
