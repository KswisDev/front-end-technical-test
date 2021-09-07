import styled from 'styled-components'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import ProductCard from './components/product-card';

const ProductsList = styled.div`
    max-width: 60%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-end;
    margin-left: auto;
    margin-right: auto;
`;

export default function Home() {
  const [beers, setBeers] = useState([]);

  //if we wanted client side fetching
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
    .then(
      function(response) {
        response.json().then(function(data) {
          setBeers(data);
        });
      }
    )
  });


  return ( 
  <div>
    <ProductsList>
      {beers.map((beer) => {
        return <Link href={{pathname:`/product/${beer.id}`}} key={`beer-${beer.id}`} passHref><ProductCard {...beer} /></Link>
      })}
    </ProductsList>
  </div>
  )
}
