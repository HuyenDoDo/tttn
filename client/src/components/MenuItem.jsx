import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItemList from "./MenuItemList";
import axios from "axios";

const Container = styled.li`
  position: relative;
  &:hover > div {
    opacity: 1;
    visibility: visible;
    z-index: 10;
  }
`;

const MenuChild = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 200%;
  display: flex;
  opacity: 0;
  visibility: hidden;
  transition: 0.25s linear;
`;

const MenuChildItem = styled.div`
  flex: 3;
`;

const MenuChildList = styled.ul`
  /* & > li {
    background-color: #333f48;
    padding: 1rem;
    border-bottom: 1px solid #eee;
  } */
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
`;

const Box = styled.div`
  padding: 10px 25px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f70a0a;
  }
`;

export default function MenuItem({ parentCate }) {
  const parentTitle = parentCate.cate_title;
  const [childCates, setChildCates] = useState([]);
  useEffect(
    () => {
      const fetchData = async () => {
        const res = await axios.get(
          `http://localhost:5000/api/categories/${parentTitle}`
        );
        setChildCates(res.data);
        // console.log(res.data);
      };
      fetchData();
    },
    [parentTitle],
    setTimeout(2000)
  );
  // console.log(childCates);
  return (
    <Container>
      <StyleLink to={`/products/${parentTitle}`}>
        <Box>
          {parentCate.cate_name}
          <KeyboardArrowDownIcon />
        </Box>
      </StyleLink>
      <MenuChild>
        <MenuChildItem>
          <MenuChildList>
            {childCates.map((childCate) => (
              <MenuItemList key={childCate._id} childCate={childCate} />
            ))}
          </MenuChildList>
        </MenuChildItem>
      </MenuChild>
    </Container>
  );
}
