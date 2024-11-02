import styled from "styled-components";

const SFooter = styled.footer`
  width: 100%;
  height: 80px;
  border-top: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  margin-top: auto;
`;

const Footer = () => {
  return <SFooter>Copyright</SFooter>;
};

export default Footer;
