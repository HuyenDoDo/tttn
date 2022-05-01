import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
`;

const StyleLink2 = styled(StyleLink)`
  &:hover {
    color: red;
  }
`;

const Container = styled.li`
  background-color: #333f48;
  padding: 1rem;
  border-bottom: 1px solid #eee;
`;

export default function MenuItemList({ childCate }) {
  const childTitle = childCate.cate_title;
  return (
    <Container>
      <StyleLink2 to={`/products/${childTitle}`}>
        {childCate.cate_name}
      </StyleLink2>
    </Container>
  );
}
