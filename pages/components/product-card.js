import styled from 'styled-components'
import React, { useState, useEffect } from 'react';

const Card = styled.div`
    border: 1px ${({ theme }) => theme.colors.grayBorder} solid;
    width: 400px;
    display: flex;
    margin: 20px;
    padding: 10px;
    border-radius: 6px;

`;

const ImgHolder = styled.div`
    min-width: 40%;
    text-align: center;
`

const ProductName = styled.p`
    font-weight: 800; 
    font-size: 16px;
`

const ProductCard = React.forwardRef((props, ref) => {

  return ( 
  <Card onClick={props.onClick}>
      <ImgHolder><img width={40} height={150} src={props.image_url}></img></ImgHolder>
      <div>
          <ProductName>{props.name}</ProductName>
          <p>{props.tagline}</p>
      </div>
  </Card>
  )
});

export default ProductCard;