// import React from 'react';// removeo1
// import {BrowserRouter as Router , Routes, Route, useLocation } from 'react-router-dom';
// import Home from './Pages/Home';
// import Navbar from './Components/Navbar';
// import FixedFooter from './Components/FixedFooter';
// import Section from './Pages/Section';
// import SubSection from './Pages/SubSection';
// import ScrollToTop from './Components/ScrollToTop.jsx';
// import Cart from './Pages/Cart.jsx';
// import CartItems from './Components/CartItems.jsx';
// import OrderInfo from './Components/OrderInfo.jsx';
// import PaymentMethods from './Components/PaymentMethods.jsx';
// import MyProfile from './Pages/MyProfile.jsx';
// import SignUp from './Pages/SignUp';
// function App() {
//   const location = useLocation();
//   return (
//   <>
//     <a hidden href="https://storyset.com/user">User illustrations by Storyset</a>
//     <Router>
//       <ScrollToTop />
//       <Navbar></Navbar>
//       <Routes>
//         <Route path='/' exact element={<Home />}></Route>
//         <Route path='/my-profile' exact element={<MyProfile />}></Route>
//         <Route path='/sign-up' exact element={<SignUp />}/>
//         <Route path='my-cart' exact element={<Cart />}>
//           <Route index element={<CartItems />} />
//           <Route path='cart-items' exact element={<CartItems />}/>
//           <Route path='order-info' exact element={<OrderInfo />}/>
//           <Route path='payment-methods' exact element={<PaymentMethods />}/>
//         </Route>
//         <Route path='section/:sectionId' exact element={<SubSection />} />
//         <Route path='section' exact element={<Section />}>
//         </Route>
//       </Routes>
//       <FixedFooter></FixedFooter>
//     </Router>
//   </>
//   );
// }
// export default App;
import React from 'react';
import {BrowserRouter as Router , Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import FixedFooter from './Components/FixedFooter';
import Section from './Pages/Section';
import Favorite from './Pages/Favorıte';
import Orders from './Pages/Orders';
import SubSection from './Pages/SubSection';
import ScrollToTop from './Components/ScrollToTop.jsx';
import Cart from './Pages/Cart.jsx';
import CartItems from './Components/CartItems.jsx';
import OrderInfo from './Components/OrderInfo.jsx';
import PaymentMethods from './Components/PaymentMethods.jsx';
import MyProfile from './Pages/MyProfile.jsx';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login.jsx';
import { PiPhoneCall } from "react-icons/pi";
import { DesktopProvider } from './Context/IsDesktop.jsx';
import { CartProvider } from './Context/CartContext.jsx';
import { FavoritesProvider } from './Context/FavoritesContext.jsx';
import { FiltersProvider } from './Context/IsFiltersOpened.js';
import { ProductsProvider } from './Context/ProductsContext.js';
import SearchResults from './Pages/SearchResults.jsx';
import UserAddresses from './Pages/UserAddresses.jsx';
const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/sign-up' && location.pathname !== '/login' &&
        <Link className='col-whats' to = "https://wa.me/201118066382">
          <PiPhoneCall />
        </Link>
      }
      <a hidden href="https://storyset.com/user">User illustrations by Storyset</a>
      {location.pathname !== '/sign-up' && location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/my-profile' exact element={<MyProfile />} />
        <Route path='/sign-up' exact element={<SignUp />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='my-cart' exact element={<Cart  />}>
          <Route index element={<CartItems />} />
          <Route path='cart-items' exact element={<CartItems />} />
          <Route path='order-info' exact element={<OrderInfo />} />
          <Route path='payment-methods' exact element={<PaymentMethods />} />
        </Route>
        <Route path='section/:sectionId' exact element={<SubSection />} />
        <Route path='section' exact element={<Section />} />
        <Route path='my-addresses' exact element={<UserAddresses />} />
        <Route path='my-favorite' exact element={<Favorite />} />
        <Route path='search-results' exact element={<SearchResults />} />
        <Route path='orders' exact element={<Orders />} />
      </Routes>
      {location.pathname !== '/sign-up' && location.pathname !== '/login' && <FixedFooter />}
    </>
  );
};
const MainApp = () => (
  <Router>
    <ScrollToTop />
    <FiltersProvider>
    <ProductsProvider>
    <FavoritesProvider>
    <CartProvider>
      <DesktopProvider>
        <App />
      </DesktopProvider>
    </CartProvider>
    </FavoritesProvider>
    </ProductsProvider>
    </FiltersProvider>
  </Router>
);
export default MainApp;
