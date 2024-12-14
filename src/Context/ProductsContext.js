import React, { createContext, useState, useContext,useEffect } from 'react';
import ProductData from '../Data/data';

// Create the context
const ProductsContext = createContext();

// Create a provider component
export function ProductsProvider({ children }) {
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [productsMinPrice, setProductsMinPrice] = useState(0);
  const [productsMaxPrice, setProductsMaxPrice] = useState(0);
  const [productsBrands, setProductsBrands] = useState([]);
  const [brandsFilter, setBrandsFilter] = useState([]);
  const [minPriceFilter, setMinPriceFilter] = useState(0);
  const [maxPriceFilter, setMaxPriceFilter] = useState(0);
  const [savedSearchParameter, setSavedSearchParameter] = useState("");// this variabls benefit is to know about search parameter 

  useEffect(() => {
    if(savedSearchParameter.length===0){// here we filter all products then display them 
      getSubSectionProductsWhenFilter();
    }else{// when savedSearchParameter variable isnt empty this means that we are in searchResults component which means that when filters changing we must filter then display search products not all products 
      getSearchProductsWhenFilter(savedSearchParameter);
    }
  }, [minPriceFilter, maxPriceFilter, brandsFilter]);

  const getSubSectionProducts = () => {
    const maxPrice = Math.max(...ProductData.map(product => product.price));// instead of extracting from products , you should get this from backend with products
    const minPrice = Math.min(...ProductData.map(product => product.price));// instead of extracting from products , you should get this from backend with products
    const brands = [...new Set(ProductData.map(product => product.brand))];// instead of extracting from products , you should get this from backend with products
    setProductsMaxPrice(maxPrice);
    setProductsMinPrice(minPrice);
    setProductsBrands(brands);
    setMaxPriceFilter(maxPrice);
    setMinPriceFilter(minPrice);
    setProductsToDisplay(ProductData);
  };

  const getSearchProducts = (searchParam) => {
    // Filter products based on search term , replace this step with requesting backend with searchParam for filtered data directly
    const searchedProducts = ProductData.filter((product) =>
      product.name.toLowerCase().includes(searchParam.toLowerCase()) 
    );
    const maxPrice = Math.max(...searchedProducts.map(product => product.price));
    const minPrice = Math.min(...searchedProducts.map(product => product.price));
    const brands = [...new Set(searchedProducts.map(product => product.brand))];
    setProductsMaxPrice(maxPrice);
    setProductsMinPrice(minPrice);
    setProductsBrands(brands);
    setMaxPriceFilter(maxPrice);
    setMinPriceFilter(minPrice);
    setProductsToDisplay(searchedProducts);
  };

  const getSubSectionProductsWhenFilter = () => {
    const filteredProducts=ProductData.filter(product => {// instead of filtering by yourself you must request backend for filtered data
      const matchesPrice = product.price >= minPriceFilter && product.price <= maxPriceFilter;
      const matchesBrand = brandsFilter.length === 0 || brandsFilter.includes(product.brand);
      return matchesPrice && matchesBrand;
    });
    setProductsToDisplay(filteredProducts);
  };

  const getSearchProductsWhenFilter = (savedSearchParameter) => {
    // Filter products based on search term , replace this step with requesting backend with searchParam for filtered data directly
    const searchedProducts = ProductData.filter((product) =>
      product.name.toLowerCase().includes(savedSearchParameter.toLowerCase()) 
    );
    const filteredProducts=searchedProducts.filter(product => {// instead of filtering by yourself you must request backend for filtered data
      const matchesPrice = product.price >= minPriceFilter && product.price <= maxPriceFilter;
      const matchesBrand = brandsFilter.length === 0 || brandsFilter.includes(product.brand);
      return matchesPrice && matchesBrand;
    });
    setProductsToDisplay(filteredProducts);
  };

  const clearProductsFilters = () => {
    setBrandsFilter([]);
    setMaxPriceFilter(0);
    setMinPriceFilter(0);
  };

  const changeMinPriceFilter = (newMinPrice) => {
    setMinPriceFilter(newMinPrice);
  };
  const changeMaxPriceFilter = (newMaxPrice) => {
    setMaxPriceFilter(newMaxPrice);
  };
  const changeBrandsFilter = (newBrands) => {
    setBrandsFilter(newBrands);
  };

  const saveSearchParameter = (searchParameter) => {
    setSavedSearchParameter(searchParameter);
  };

  const clearSavedSearchParameter =()=>{
    setSavedSearchParameter("");
  }

  return (
    <ProductsContext.Provider value={{ productsToDisplay,productsMinPrice,productsMaxPrice,productsBrands,brandsFilter,minPriceFilter,maxPriceFilter,savedSearchParameter,getSubSectionProducts ,getSearchProducts,getSubSectionProductsWhenFilter,clearProductsFilters,changeMinPriceFilter,changeMaxPriceFilter,changeBrandsFilter,saveSearchParameter,clearSavedSearchParameter }}>
      {children}
    </ProductsContext.Provider>
  );
}

// Custom hook for easy access to the context
export function useProducts() {
  return useContext(ProductsContext);
}