import React from "react";
import styled from "styled-components";

function Loader() {
  return <LoaderContainer></LoaderContainer>;
}

const LoaderContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 9999;
  width: 100%;
  height: 100%;
  overflow: visible;
  background: rgba(0, 0, 0, 0.5) url('//upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Phi_fenomeni.gif/50px-Phi_fenomeni.gif') no-repeat center;
  background-size: 50px;
`;
export default Loader;