import React, { useEffect, useState } from "react";
// import { popularProducts } from "../data";
import Item from "./Item";
import styled from "styled-components";
// import axios from "axios";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Items({ cat }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat ? `/products?category=${cat}` : "/products"
        );
        // const res = await axios.get(
        //   cat
        //     ? `http://localhost:5000/api/products?category=${cat}`
        //     : "http://localhost:5000/api/products"
        //   // cat
        //   //   ? `https://gunplashop442.herokuapp.com/api/products?category=${cat}`
        //   //   : "https://gunplashop442.herokuapp.com/api/products"
        // );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);
  return (
    <Container>
      {/* {products.map((item) => console.log(item))} */}
      {products.slice(0, 8).map((item) => (
        <Item item={item} key={item._id} />
      ))}
    </Container>
  );
}
