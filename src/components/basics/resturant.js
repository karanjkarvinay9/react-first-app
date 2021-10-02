import React, { useState } from 'react';
import Data from './data';
import Card  from './card';
import Navbar from './navbar';


const Resturant = () => {
  const [displayData, setDisplayData] = useState(Data);

  const category = [...new Set(Data.map((curr)=> {
    return curr.category
}) )];

  const filterData = (category) => {
    if( category === "All"){
      setDisplayData(Data);
      return;
    }
    const NewList = Data.filter( (curr)=> {
      return curr.category===category;
    });

    setDisplayData(NewList);
  }

    return (
      <>
      <Navbar filterData = {filterData} category={category} />
       <section className="bg-light py-4 my-5">
        <div className="container">
          <div className="row">
        <Card displayData = {displayData} />
        </div>
        </div>
        </section>
        </>
    )};

export default Resturant
