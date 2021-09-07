import styled from 'styled-components'
import React, { useState, useEffect } from 'react';

const Card = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: 20px;
    padding: 10px;
    border-radius: 6px;
    margin-left: auto;
    margin-right: auto;

    > div {
        margin-right: 50px;
    }

    @media screen and (max-width:900px) {
        flex-flow: wrap;
    }
`

export default function ProductDetail(props) {
  return ( 
  <Card>
      <div><img height={400} src={props.image_url}></img></div>
      <div>
            <h2>{props.name}</h2>
            <p><strong>ABV:</strong>{props.abv}</p>
            <p>
                {props.description}
            </p>
            <h3>Why not try with:</h3>
            {props.food_pairing.map((food) => 
                <p>{food}</p> 
            )}
      </div>
  </Card>
  )
}