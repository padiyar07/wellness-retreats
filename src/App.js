import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from "./components/header/Header";
import RetreatList from "./components/retreatlist/RetreatList";
import FilterSection from "./components/filtersection/FilterSection";
import SearchBar from "./components/searchbar/SearchBar";
import Pagination from "./components/pagination/Pagination";
import "./App.css";
import Footer from "./components/footer/Footer";
import ImageSection from "./components/imagesection/ImageSection.jsx";

const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [filters, setFilters] = useState({ date: '', type: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchRetreats = async () => {
    try {
      const response = await axios.get(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats`, {
        params: {
          page: currentPage,
          limit: 3,
          filter: searchTerm ? `Wellness` : undefined,
          location: filters.location || undefined,
          type: filters.type || undefined,
          date: filters.date || undefined,
        },
      });
      setRetreats(response.data);
      
      setTotalPages(Math.ceil(response.headers['x-total-count'] / 5)); 
    } catch (error) {
      console.error('Error fetching retreats:', error);
    }
  };

  useEffect(() => {
    fetchRetreats();
  }, [currentPage, filters, searchTerm]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); 
  };

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    setCurrentPage(1); 
  };

  return (
    <div className="App">
      <Header />
      <ImageSection />
      <div className="filter-search-bar">
        <FilterSection filters={filters} setFilters={handleFilterChange} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
      </div>
      <RetreatList retreats={retreats} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <Footer/>
    </div>
  );
};

export default App;
