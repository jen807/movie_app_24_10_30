import styled from "styled-components";

const SFooter = styled.footer`
  max-width: 1920px;
  width: 100%;
  height: 80px;
  border-top: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  color: #666;
`;

const Footer = () => {
  return <SFooter>Copyright</SFooter>;
};

export default Footer;
