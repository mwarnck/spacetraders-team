import styled from 'styled-components';

export default function Button({ handleClick, children }) {
  return <StandardButton onClick={handleClick}>{children}</StandardButton>;
}

const StandardButton = styled.button`
  border-radius: 5px;
  border-color: lawngreen;
  min-width: 200px;
  max-width: max-content;
  color: goldenrod;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;
