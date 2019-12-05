import React from 'react'
import styled from "styled-components";

import logo from "../assets/logo-min.png";

const Brand = () => {
  return (
    <Image src={logo} alt="Company Logo" />
    
  )
}

export default Brand

const Image = styled.img`
  height: 50px;
  width: 130px;
  margin-top: 8px;
`;