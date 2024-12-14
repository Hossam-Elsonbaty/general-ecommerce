import React from 'react';
import FiltersExitButton from './FiltersExitButton';
import FiltersRevealButton from './FiltersRevealButton';
import NormalFilter from './NormalFilter';
import PriceFilter from './PriceFilter';
import { useFilters } from '../Context/IsFiltersOpened';
export default function Filters() {
  const { isFiltersOpen, closeFilters } = useFilters();

  return (
  <>
  {isFiltersOpen
  ?
  <div>
  <div className='viewport-cover' onClick={closeFilters}></div>
  <div className='filters-container'>
    <div className='filters-elevated-span'>
      <FiltersExitButton></FiltersExitButton>
      <FiltersRevealButton></FiltersRevealButton>
    </div>
    <div className='filters-div'>
      <NormalFilter FilterTitle="العلامة التجارية" ></NormalFilter>
      <PriceFilter FilterTitle="السعر"></PriceFilter>
      <NormalFilter FilterTitle="البائع"></NormalFilter>           
    </div>
  </div>
  </div>
  :<div></div>}
  </>
  )
}
