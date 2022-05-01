import React from "react";
// import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Items from "../components/Items";
import Footer from "../components/Footer";
// import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-transform: uppercase;
`;

export default function Products() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  return (
    <Container>
      <Header />
      <Title>{cat}</Title>
      <Items cat={cat} />
      <Footer />
    </Container>
  );
}
