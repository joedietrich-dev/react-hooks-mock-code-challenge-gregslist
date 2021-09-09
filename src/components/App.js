import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [filterTerm, setFilterTerm] = useState('');

  const searchedListings = listings.filter(listing => listing.description.toLowerCase().includes(filterTerm.toLowerCase()))

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(data => setListings(data));
  }, [])

  const handleDeleteClick = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) setListings(listings.filter(listing => listing.id !== id))
    });
  }

  return (
    <div className="app">
      <Header onSearch={setFilterTerm} />
      <ListingsContainer listings={searchedListings} onDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
