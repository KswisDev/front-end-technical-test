import styled from 'styled-components'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import ProductDetail from '../components/product-detail';


export default function Product(props) {
    const router = useRouter()

  return ( 
    <ProductDetail {...props.productData}></ProductDetail>
  )
}

//if we wanted to fetch on the server side
export async function getServerSideProps(context) {
        const productId = Number(context.query.slug);
        const response = await fetch('https://api.punkapi.com/v2/beers')
        const data = await response.json();
        const productData = data.filter(beer => beer.id === productId)[0];
		return {
			props: {productData},
		};
}