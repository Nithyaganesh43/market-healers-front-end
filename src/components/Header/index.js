import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Headers = styled.header`
  display: flex;
  marign-top:0px;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color:rgb(32, 32, 32);
  color: var(--white); 
  z-index: 50;
  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 5rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1rem;
  }
`;

const Logo = styled.a`
  border-radius: 15px;
  background-color: rgb(32, 32, 32);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  cursor: pointer;
  img {
    border-radius: 40%;
    margin-bottom: 0rem;
    width: 3rem;
    height: 3rem;
  }
  h3 {
    margin: 0px 10px;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.2rem;
    color: rgb(255, 248, 239);
  }
  @media only Screen and (max-width: 48em) {
    img {
      border-radius: 40%;
      margin-bottom: 0rem;
      width: 2rem;
      height: 2rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
`;




const Nav = styled.nav`
  width: 25rem;
  background-color: rgb(32, 32, 32);
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  @media only Screen and (max-width: 48em) {
    display: none;
  }
  a {
    font-weight: 600;
    line-height: 1.5;
    background-color: rgb(32, 32, 32);
    color: var(--white);
    &::after {
      content: '';
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--purple);
    }
    /* &:not(:last-child) {
      margin-right: 2rem;
    } */
    /* @media only Screen and (max-width: 48em) {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    } */
  }
`;

const Button = styled.button`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
  @media only Screen and (max-width: 40em) {
    font-size: 1.2rem;
    &:hover {
      transform: none;
    }
    &:focus {
      transform: none;
    }
  }
`;
const MobileMenu = styled.nav`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;  
  top: 10%;
  left: 35%;
  right: 5%;
  bottom: 60%;
  border-radius :20%;
  opacity: ${(props) => (props.clicked ? '1' : '0')};
    
  z-index: ${(props) => (props.clicked ? '100' : '-10')};
  background-color: rgb(
    53,
    53,
    63,
    0.95
  );  
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  

  a {
    color: var(--white, #ffffff);  
    font-weight: 600;
    font-size: 1.2rem;
    text-decoration: none; /* Remove underline */
    margin: 1rem;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: var(--purple, #6c63ff);  
    }
  }
`;

const HamburgerBtn = styled.button`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: inline-block;
  }
  position: relative;
  background-color: transparent;
  border: none;
  width: 2rem;
  height: 2px;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    background-color: ${(props) =>
      props.clicked ? 'var(--purple, #6c63ff)' : 'var(--white, #ffffff)'};
    width: 2rem;
    height: 2px;
    position: absolute;
    left: 0;
    transition: all 0.3s ease-in-out;
  }
  &::before {
    top: ${(props) => (props.clicked ? '0' : '-0.5rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }
  &::after {
    top: ${(props) => (props.clicked ? '0' : '0.5rem')};
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`;

const Header = () => {
  const [click, setClick] = useState(false); 
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleClick = (id, e) => {
    setClick(!click);
    scrollUp(id, e);
  };

  useEffect(() => {
    const element = ref.current;

    const mq = window.matchMedia("(max-width: 40em)");
 
    if (mq.matches) {
      gsap.to(element, {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        padding: "1rem 2.5rem",

        borderRadius: "0 0 50px 50px",

        border: "2px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=200 top",
          end: "+=100",
          scrub: true,
        },
      });
    } else {
      gsap.to(element, {
        position: "fixed",
        top: "1rem",
        left: "3rem",
        right: "3rem",
        padding: "1.5rem 2rem",

        borderRadius: "50px",

        border: "3px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=300 top",
          end: "+=250",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div id="home">
      <Headers ref={ref} id="home">
        <Logo>
          <img
            src={
              'https://res.cloudinary.com/dptf0mrro/image/upload/v1735920388/MH__1_1_pjlq6u.png'
            }
            alt="Market Healers"
          />
          <h3>Market Healers</h3>
        </Logo>

        <Nav>
          <a href="#home" onClick={(e) => scrollUp('home', e)}>
            Home
          </a>
          <a href="#about" onClick={(e) => scrollUp('about', e)}>
            About Us
          </a>
          <a href="#contact" onClick={(e) => scrollUp('contact', e)}>
            Contact Us
          </a>
          <a href="#">{/* <Button>SignIn</Button> */}</a>
        </Nav>
        <HamburgerBtn clicked={+click} onClick={() => setClick(!click)}>
          <span></span>
        </HamburgerBtn>
        <MobileMenu clicked={+click}>
          <a href="#home" onClick={(e) => handleClick('home', e)}>
            Home
          </a>
          <a href="#about" onClick={(e) => handleClick('about', e)}>
            About Us
          </a>
          <a href="#contact" onClick={(e) => handleClick('contact', e)}>
            Contact Us
          </a>
          <a href="#">{/* <Button>SignIn</Button> */}</a>
        </MobileMenu>
      </Headers>
    </div>
  );
};

export default Header;
