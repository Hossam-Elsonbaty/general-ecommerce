import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SearchBar() {
  const [searchParam, setSearchParam] = useState("");

  const handleInputChange = (event) => {
    setSearchParam(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="الإسم- المادة الفعالة- الإستخدام..."
        value={searchParam}
        onChange={handleInputChange}
      />
      <Link to={`/search-results?search-params=${searchParam}`}>
        <button><FaSearch /></button>
      </Link>
    </div>
  );
}