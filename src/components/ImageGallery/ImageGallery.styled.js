import styled from "styled-components";

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin: 0 auto 10px;
  padding: 0;
  list-style: none;
`;

