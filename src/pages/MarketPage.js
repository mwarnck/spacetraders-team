import styled from 'styled-components';
import { useState } from 'react';
import Button from '../components/Button.js';

export default function MarketPage({ token }) {
  const [availableGoods, setAvailableGoods] = useState([]);

  return (
    <PageContainer>
      <h1>Available Goods</h1>
      <Button handleClick={getMarketGoods}>Show available Goods</Button>
      {availableGoods ? (
        availableGoods.map(good => (
          <>
            <GoodsContainer>
              <h3>Good:</h3>
              <p>{good.symbol}</p>
              <h3>Price per unit:</h3>
              <p>{good.pricePerUnit}</p>
              <h3>Available quantity:</h3>
              <p>{good.quantityAvailable}</p>
              <h3>Volume per unit:</h3>
              <p>{good.volumePerUnit}</p>
              <Button>Buy {good.symbol}</Button>
            </GoodsContainer>
            <br />
          </>
        ))
      ) : (
        <ErrorMessage>Buy a ship!</ErrorMessage>
      )}
    </PageContainer>
  );

  async function getMarketGoods() {
    try {
      const response = await fetch(
        'https://api.spacetraders.io/locations/OE-PM-TR/marketplace?token=' +
          token
      );

      const data = await response.json();
      console.log('Ausgabe: ', data);
      setAvailableGoods(data.marketplace);
    } catch (error) {
      console.error('ERROR:', error);
    }
  }
}

const PageContainer = styled.main`
  display: grid;
  gap: 10px;

  h1 {
    text-align: center;
    color: lawngreen;
  }
`;

const GoodsContainer = styled.section`
  display: grid;
  gap: 5px;
  padding: 10px 0 10px 25px;
  border: 0.5px dotted orange;
  border-radius: 5px;

  h3 {
    margin: 0 0 -15px 0;
    color: goldenrod;
  }
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: goldenrod;
  border: 1px dotted orange;
  border-radius: 5px;
  padding: 15px;
`;
