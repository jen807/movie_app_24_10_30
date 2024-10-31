import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.header`
  padding: 20px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  return (
    <Container>
      <Logo>
        <Link to={"/"}>JENFLIX</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/"}>Search</Link>
        </li>
      </Menu>
    </Container>
  );
};

export default Header;
