import React, { createContext, useState, useContext } from 'react';

// Create the context
const IsFiltersOpened = createContext();

// Create a provider component
export function FiltersProvider({ children }) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const openFilters = () => {
    setIsFiltersOpen(true)
  };
  const closeFilters = () => setIsFiltersOpen(false);

  return (
    <IsFiltersOpened.Provider value={{ isFiltersOpen, openFilters, closeFilters }}>
      {children}
    </IsFiltersOpened.Provider>
  );
}

// Custom hook for easy access to the context
export function useFilters() {
  return useContext(IsFiltersOpened);
}