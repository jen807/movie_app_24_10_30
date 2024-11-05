import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";

const Container = styled.header`
  width: 100%;
  padding: 20px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  @media screen and (max-width: 650px) {
    padding: 20px ${mainStyle.moPadding};
  }
`;

const Logo = styled.h3`
  font-size: 26px;
  font-weight: 700;
  a {
    color: crimson;
  }
`;

const Menu = styled.ul`
  display: flex;
  li {
    margin-left: 150px;
    a {
      color: #fff;
    }
  }
`;

const Header = () => {
  const headerRef = useRef();

  const scrollHandler = () => {
    const pageY = window.scrollY;
    const current = headerRef.current;
    console.log(pageY);
    // console.log(current);

    // current에 대해서 찾아보기

    if (pageY >= 400) {
      current.style.position = "fixed";
      current.style.backgroundColor = "rgba(0,0,0,0.5)";
      current.style.backdropFilter = "blur(10px)";
      current.style.zIndex = "990";
    } else {
      current.style.position = "abosolute";
      current.style.backgroundColor = "transparent";
      current.style.backdropFilter = "blur(0px)";
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  });

  return (
    <Container ref={headerRef}>
      <Logo>
        <Link to={"/"}>JENFLIX</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/search"}>Search</Link>
        </li>
      </Menu>
    </Container>
  );
};

export default Header;
