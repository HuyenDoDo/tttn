// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import axios from "axios";
import MenuItem from "./MenuItem";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  background-color: #333f48;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1024px;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  & li {
    list-style: none;
  }
`;

// const MenuItem = styled.li`
//   position: relative;
//   &:hover > div {
//     opacity: 1;
//     visibility: visible;
//     z-index: 10;
//   }
// `;

// const MenuChild = styled.div`
//   position: absolute;
//   left: 0;
//   top: 100%;
//   width: 200%;
//   display: flex;
//   opacity: 0;
//   visibility: hidden;
//   transition: 0.25s linear;
// `;

// const MenuChildItem = styled.div`
//   flex: 3;
// `;

// const MenuChildList = styled.ul`
//   & > li {
//     background-color: #333f48;
//     padding: 1rem;
//     border-bottom: 1px solid #eee;
//   }
// `;

// const StyleLink = styled(Link)`
//   text-decoration: none;
//   color: #fff;
//   text-transform: uppercase;
// `;

// const StyleLink2 = styled(StyleLink)`
//   &:hover {
//     color: red;
//   }
// `;

// const Box = styled.div`
//   padding: 10px 25px;
//   display: flex;
//   align-items: center;

//   &:hover {
//     background-color: #f70a0a;
//   }
// `;

export default function Menubar() {
  const [categories, setCategories] = useState([]);
  useEffect(
    () => {
      const fetchData = async () => {
        const res = await publicRequest.get(`/categories/parents`);
        // const res = await axios.get(
        //   "http://localhost:5000/api/categories/parents"
        //   // `https://gunplashop442.herokuapp.com/api/categories/parents`
        // );
        setCategories(res.data);
      };
      fetchData();
    },
    [],
    setTimeout(2000)
  );
  //console.log(categories);
  //chứa các danh mục cha
  //   const parents = categories.map((item) => {
  //     if (!item.parent_id) return true;
  //     return false;
  //   });
  //   console.log(parents);

  //get các danh mục con của 1 cha
  //   const getChilds = (title) => {
  //     let parent = parents.map((item) => {
  //       return title === item.cate_title ? item : null;
  //     });
  //     //console.log(parent);
  //     let childs = categories.map((item) => {
  //       if (item.parent_id === parent._id) return true;
  //       return false;
  //     });
  //     return childs;
  //   };
  //   const gundams = getChilds("gundam");
  //   const ks = getChilds("kyoukaisenki");
  return (
    <Container>
      <Wrapper>
        <Menu>
          {categories.map((parentCate) => (
            <MenuItem key={parentCate._id} parentCate={parentCate} />
          ))}
          {/* <MenuItem>
            <StyleLink to="/productList">
              <Box>
                GUNDAM
                <KeyboardArrowDownIcon />
              </Box>
            </StyleLink>
            <MenuChild>
              <MenuChildItem>
                <MenuChildList>
                  {gundams.map((item) => (
                    <li>
                      <StyleLink2 to="/productList">
                        {item.cate_name}
                      </StyleLink2>
                    </li>
                  ))}
                </MenuChildList>
              </MenuChildItem>
            </MenuChild>
          </MenuItem> */}
          {/* <MenuItem key={2}>
            <StyleLink to="/productList">
              <Box>
                KYOUKAI SENKI
                <KeyboardArrowDownIcon />
              </Box>
            </StyleLink>
            <MenuChild>
              <MenuChildItem>
                <MenuChildList>
                  {ks.map((item) => (
                    <li>
                      <StyleLink2 to="/productList">
                        {item.cate_name}
                      </StyleLink2>
                    </li>
                  ))}
                </MenuChildList>
              </MenuChildItem>
            </MenuChild>
          </MenuItem>
          <MenuItem key={3}>
            <StyleLink to="/productList">
              <Box>
                DIGIMON
                <KeyboardArrowDownIcon />
              </Box>
            </StyleLink>
            <MenuChild>
              <MenuChildItem>
                <MenuChildList>
                  <li>Demo</li>
                  <li>Demo</li>
                  <li>Demo</li>
                  <li>Demo</li>
                </MenuChildList>
              </MenuChildItem>
            </MenuChild>
          </MenuItem>
          <MenuItem key={4}>
            <StyleLink to="/productList">
              <Box>
                KAMEN RIDER
                <KeyboardArrowDownIcon />
              </Box>
            </StyleLink>
            <MenuChild>
              <MenuChildItem>
                <MenuChildList>
                  <li>Demo</li>
                  <li>Demo</li>
                  <li>Demo</li>
                  <li>Demo</li>
                </MenuChildList>
              </MenuChildItem>
            </MenuChild>
          </MenuItem>
          <MenuItem key={5}>
            <StyleLink to="/productList">
              <Box>
                DÒNG KIT KHÁC
                <KeyboardArrowDownIcon />
              </Box>
            </StyleLink>
            <MenuChild>
              <MenuChildItem>
                <MenuChildList>
                  <li>Demo</li>
                  <li>Demo</li>
                  <li>Demo</li>
                  <li>Demo</li>
                </MenuChildList>
              </MenuChildItem>
            </MenuChild>
          </MenuItem>
          <MenuItem key={6}>
            <StyleLink to="/productList">
              <Box>
                ACCESORIES
                <KeyboardArrowDownIcon />
              </Box>
            </StyleLink>
            <MenuChild>
              <MenuChildItem>
                <MenuChildList>
                  <li>Demo</li>
                  <li>Demo</li>
                  <li>Demo</li>
                  <li>Demo</li>
                </MenuChildList>
              </MenuChildItem>
            </MenuChild>
          </MenuItem> */}
        </Menu>
      </Wrapper>
    </Container>
  );
}
