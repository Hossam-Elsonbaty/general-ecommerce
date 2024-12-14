import React,{useState,useEffect,useContext} from 'react';
import Footer from '../Components/Footer';
import OrdersSearchBar from './../Components/OrdersSearchBar';
import OrdersList from './../Components/OrdersList';
import Orders2024 from '../Data/data2024Orders';
import Orders2023 from '../Data/data2023Orders';
import Orders2022 from '../Data/data2022Orders';
import OrdersYears from '../Data/dataOrdersYears';
import { Pagination } from 'antd';
import IsDesktop from '../Context/IsDesktop';

export default function Orders( ) {
  const [selectedYear, setSelectedYear] = useState(OrdersYears[0]);
  const [searchOrdersTerm, setSearchOrdersTerm] = useState("");
  const [orders, setOrders] = useState([]);
  const [toDisplayOrders, setToDisplayOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const {isDesktop} = useContext(IsDesktop)

  useEffect(() => {
    setOrders(Orders2024)
    setToDisplayOrders(Orders2024)
  }, []);

  useEffect(() => {
    const filterOrders = (orders, searchOrdersTerm) => {
      // Convert search term to lowercase for case-insensitive matching
      const lowercasedTerm = searchOrdersTerm.toLowerCase();
    
      return orders.filter((order) => {
        // Check if order-level fields match the search term
        const isOrderMatch =
          order.orderNo.toLowerCase().includes(lowercasedTerm) ||
          order.orderPlaced.toLowerCase().includes(lowercasedTerm) ||
          order.total.toString().includes(lowercasedTerm) ||
          order.deliveryTax.toString().includes(lowercasedTerm) ||
          order.deliveryAddress.toLowerCase().includes(lowercasedTerm);
    
        // Check if any product matches the search term
        const isProductMatch = order.products.some((product) =>
          product.name.toLowerCase().includes(lowercasedTerm) ||
          product.volume.toLowerCase().includes(lowercasedTerm) ||
          product.price.toString().includes(lowercasedTerm)
        );
    
        // Return true if either order or products match the search term
        return isOrderMatch || isProductMatch;
      });
    };
    setToDisplayOrders(filterOrders(orders, searchOrdersTerm))
  }, [searchOrdersTerm]);

  useEffect(() => {
    if (selectedYear=="2024"){
      setOrders(Orders2024)
      setToDisplayOrders(Orders2024)
    }else if(selectedYear=="2023"){
      setOrders(Orders2023)
      setToDisplayOrders(Orders2023)
    }else if(selectedYear=="2022"){
      setOrders(Orders2022)
      setToDisplayOrders(Orders2022)
    }
  }, [selectedYear]);

  const handleChangeSelectYear = (event) => {
    setSelectedYear(event.target.value);
    setSearchOrdersTerm("");
  };
  //pagination
  const ordersPerPage = isDesktop ? 16 : 8;
  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = toDisplayOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <>
      <main className='main'>
        <div className='top section-top'>
          <div className="orders-title-container">
              <h2 className='top-title'> طلباتي في </h2>
              <select name="" id="" value={selectedYear} onChange={handleChangeSelectYear}>
                {OrdersYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
          </div>     
          <OrdersSearchBar selectedYear={selectedYear} searchOrdersTerm={searchOrdersTerm} setSearchOrdersTerm={setSearchOrdersTerm}></OrdersSearchBar>
        </div>
        <OrdersList orders={currentOrders}></OrdersList>
        <div className='pagination'>
          <Pagination 
            current={currentPage}
            total={toDisplayOrders.length}
            pageSize={ordersPerPage}
            onChange={onPageChange}
          />
        </div>
        <Footer></Footer>
      </main>
    </>
  )
}
