import React from "react";
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
`;

const FooterItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterItems>
        <IconWrapper>
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </IconWrapper>
        <IconWrapper>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </IconWrapper>
        <IconWrapper>
          <Link to={{ pathname: "/portfolio" }}>
            <FaLinkedin />
          </Link>
        </IconWrapper>
      </FooterItems>
    </FooterContainer>
  );
}

export default Footer;
