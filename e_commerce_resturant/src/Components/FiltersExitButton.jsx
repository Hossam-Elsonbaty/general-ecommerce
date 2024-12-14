import React from 'react';
import { useFilters } from '../Context/IsFiltersOpened';

export default function FiltersExitButton() {
  const { closeFilters } = useFilters();
  return (
    <div className="close-filters" onClick={closeFilters}>
      <h3>اغلاق</h3>
    </div>
  )
}