import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <React.Fragment>
      <HeaderBar>
        <Title>Star Wars</Title>
        <Title>Nord</Title>
      </HeaderBar>
    </React.Fragment>
  );
}

const HeaderBar = styled.div`
  height: 3.5rem;
  background-color: #0a121c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const Title = styled.div`
  font-family: "Titillium Web", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  opacity: 0.8;
`;
