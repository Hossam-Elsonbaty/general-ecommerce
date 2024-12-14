import React,{useState, useContext,useEffect }  from 'react';
import { VscSettings } from "react-icons/vsc";
import Footer from '../Components/Footer';
import { Pagination } from 'antd';
import ProductList from '../Components/ProductList';
import IsDesktop from '../Context/IsDesktop';
import { useLocation } from 'react-router-dom';
import { useFilters } from '../Context/IsFiltersOpened';
import { useProducts } from '../Context/ProductsContext';
import Filters from './../Components/Filters';
export default function SearchResults( ) {
  const { productsToDisplay, getSearchProducts,saveSearchParameter,clearSavedSearchParameter } = useProducts();
  const { openFilters } = useFilters();
  const [currentPage, setCurrentPage] = useState(1);
  const {isDesktop} = useContext(IsDesktop)

  // Get the search parameter from the URL
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchParam = searchParams.get("search-params") || "";
    getSearchProducts(searchParam);
    saveSearchParameter(searchParam);

  }, [location]);

  useEffect(() => {
    return () => { 
      clearSavedSearchParameter();
    }; 
  }, []);

  const productsPerPage = isDesktop ? 16 : 6;
  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // pagination
  const currentProducts = productsToDisplay.slice(indexOfFirstProduct, indexOfLastProduct);
  return (
    <>
      <main className='main'>
      <Filters></Filters>
        <div className='top section-top'>
          <h2 className='top-title'>نتائج البحث</h2>
          <div className='filter' onClick={openFilters}>
            <span>فلتر</span> 
            <VscSettings />
          </div>
        </div>
        <ProductList  products={currentProducts}></ProductList>
        <div className='pagination'>
          <Pagination 
            current={currentPage}
            total={productsToDisplay.length}
            pageSize={productsPerPage}
            onChange={onPageChange}
          />
        </div>
        <Footer></Footer>
      </main>
    </>
  )
}
