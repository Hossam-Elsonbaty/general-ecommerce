import React,{useState, useContext,useEffect }  from 'react';
import { VscSettings } from "react-icons/vsc";
import Footer from '../Components/Footer';
import { Pagination } from 'antd';
import ProductList from '../Components/ProductList';
import IsDesktop from '../Context/IsDesktop';
import Filters from './../Components/Filters';
import { useFilters } from '../Context/IsFiltersOpened';
import { useProducts } from '../Context/ProductsContext';
export default function Section( ) {
  const { productsToDisplay, getSubSectionProducts,clearProductsFilters } = useProducts();
  const { openFilters } = useFilters();
  const [currentPage, setCurrentPage] = useState(1);
  const {isDesktop} = useContext(IsDesktop)
  useEffect(() => {
    getSubSectionProducts();
    return () => { 
      // clear products filters when exit 
      clearProductsFilters();
    }; 
  }, []);
  const productsPerPage = isDesktop ? 16 : 6;
  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsToDisplay.slice(indexOfFirstProduct, indexOfLastProduct);
  return (
    <>
      <main className='main'>
      <Filters></Filters>
        <div className='top section-top'>
          <h2 className='top-title'>قسم العطور</h2>
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
        <Filters></Filters>
        <Footer></Footer>
      </main>
    </>
  )
}
