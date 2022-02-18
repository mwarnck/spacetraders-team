import styled from 'styled-components';

export default function MarketPage() {
  return (
    <PageContainer>
      <h1>Marketplace</h1>
      <p>List of products ...</p>
    </PageContainer>
  );
}
const PageContainer = styled.main`
  display: grid;
  gap: 10px;

  h1 {
    text-align: center;
    color: lawngreen;
  }
`;
