import styled from 'styled-components';

const FooterSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: '';
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

const Icons = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(570deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;
const CopyRights = styled.p`
  color: var(--white);
  justify-content: center;
  margin-bottom: -40px;
  font-size: 1rem;
  position: relative;
`;
const Footer = () => {
  return (
    <FooterSection id="contact">
      <Title>Get in touch</Title>
      <Icons>
        <a
          href="https://www.linkedin.com/in/market-healers-66a343344/"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://www.whatsapp.com/channel/0029Vb0CJG7KgsNkWnwFHL3s"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
          />
        </a>
        <a
          href="https://www.instagram.com/market.healers/"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
          />
        </a>
      </Icons>
      <CopyRights> &copy; 2025 Market Healers. All Rights Reserved.</CopyRights>
    </FooterSection>
  );
};

export default Footer;
