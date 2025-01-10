 
import styled, { keyframes } from 'styled-components';

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;
const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: #0a0b10;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 100vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  height: auto;
  z-index: 7;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Title = styled.h1`
  font-size: calc(2.5rem + 2vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const SubText = styled.h5`
  font-size: calc(1rem + 0.5vw);
  color: rgb(207, 207, 207);
`;

// const CTA = styled.button`
//   background-color: var(--white);
//   color: #0a0b10;
//   padding: 0.5rem 1rem;
//   margin-top: 0.5em;
//   border-radius: 20px;
//   cursor: pointer;
//   font-size: calc(1.2rem + 0.8vw);
//   font-weight: 700;
//   display: flex;
//   align-items: center;
//   transition: transform 0.2s;

//   img { 
//     width: 1.9rem;
//   }
//   @media only screen and (max-width: 48em) {
//     padding: 0.5rem 1rem;
//   }
//   &:hover {
//     transform: scale(1.1);
//   }
//   &:active {
//     transform: scale(0.9);
//   }
// `;

const HeroSection = () => {
   const handleClick = () => {
  // window.location.href =
  //   'https://www.whatsapp.com/channel/0029Vb0CJG7KgsNkWnwFHL3s';
    window.open(
      'https://www.whatsapp.com/channel/0029Vb0CJG7KgsNkWnwFHL3s',
      '_blank'
    );
};

  return (
    <HomeSection >
      <MainContent  >
        <Lb id="leftBlock">
          <Title>Start Your Investment Journey Today</Title>
          <SubText>
            We're Here to Guide You Toward Smart Investment Choices
          </SubText>
          {/* <CTA>
            <div  onClick={handleClick} style={{ cursor: 'pointer' }}>
              Join Us
              <img
                src={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTkzAdnWhTwT7OqlhAS5fbW9LOKyHbLzoEQ&s'
                }
                alt="cta"
                width="100"
                height="100"
              />
            </div>
            {document.getElementById('btn')?.addEventListener('click', () => {
              window.location.href =
                'https://www.whatsapp.com/channel/0029Vb0CJG7KgsNkWnwFHL3s';
            })}
          </CTA> */}
          <button className="button" onClick={handleClick} >
            <div className="bg"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 342 208"
              height="208"
              width="342"
              className="splash">
              <path
                strokeLinecap="round"
                strokeWidth="3"
                d="M54.1054 99.7837C54.1054 99.7837 40.0984 90.7874 26.6893 97.6362C13.2802 104.485 1.5 97.6362 1.5 97.6362"></path>
              <path
                strokeLinecap="round"
                strokeWidth="3"
                d="M285.273 99.7841C285.273 99.7841 299.28 90.7879 312.689 97.6367C326.098 104.486 340.105 95.4893 340.105 95.4893"></path>
              <path
                strokeLinecap="round"
                strokeWidth="3"
                strokeOpacity="0.3"
                d="M281.133 64.9917C281.133 64.9917 287.96 49.8089 302.934 48.2295C317.908 46.6501 319.712 36.5272 319.712 36.5272"></path>
              <path
                strokeLinecap="round"
                strokeWidth="3"
                strokeOpacity="0.3"
                d="M281.133 138.984C281.133 138.984 287.96 154.167 302.934 155.746C317.908 157.326 319.712 167.449 319.712 167.449"></path>
              <path
                strokeLinecap="round"
                strokeWidth="3"
                d="M230.578 57.4476C230.578 57.4476 225.785 41.5051 236.061 30.4998C246.337 19.4945 244.686 12.9998 244.686 12.9998"></path>
              <path
                strokeLinecap="round"
                strokeWidth="3"
                d="M230.578 150.528C230.578 150.528 225.785 166.471 236.061 177.476C246.337 188.481 244.686 194.976 244.686 194.976"></path>
              <path
                strokeLinecap="round"
                strokeWidth="3"
                strokeOpacity="0.3"
                d="M170.392 57.0278C170.392 57.0278 173.89 42.1322 169.571 29.54C165.252 16.9478 168.751 2.05227 168.751 2.05227"></path>
              <path
                strokeLinecap="round"
                strokeWidth="3"
                strokeOpacity="0.3"
                d="M170.392 150.948C170.392 150.948 173.89 165.844 169.571 178.436C165.252 191.028 168.751 205.924 168.751 205.924"></path>
              <path
                strokeLinecap="round"
                strokeWidth="3"
                d="M112.609 57.4476C112.609 57.4476 117.401 41.5051 107.125 30.4998C96.8492 19.4945 98.5 12.9998 98.5 12.9998"></path>
              <path
                strokeLinecap="round"
                strokeWidth="3"
                d="M112.609 150.528C112.609 150.528 117.401 166.471 107.125 177.476C96.8492 188.481 98.5 194.976 98.5 194.976"></path>
              <path
                strokeLinecap="round"
                strokeWidth="3"
                strokeOpacity="0.3"
                d="M62.2941 64.9917C62.2941 64.9917 55.4671 49.8089 40.4932 48.2295C25.5194 46.6501 23.7159 36.5272 23.7159 36.5272"></path>
              <path
                strokeLinecap="round"
                strokeWidth="3"
                strokeOpacity="0.3"
                d="M62.2941 145.984C62.2941 145.984 55.4671 161.167 40.4932 162.746C25.5194 164.326 23.7159 174.449 23.7159 174.449"></path>
            </svg>
            <div className="wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 221 42"
                height="42"
                width="221"
                className="path">
                <path
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855"></path>
              </svg>
              <div className="outline"></div>
              <div className="content">
                <span className="char state-1">
                  <span data-label="J" style={{ '--i': 1 }}>
                    J
                  </span>
                  <span data-label="o" style={{ '--i': 2 }}>
                    o
                  </span>
                  <span data-label="i" style={{ '--i': 3 }}>
                    i
                  </span>
                  <span data-label="n" style={{ '--i': 4 }}>
                    n
                  </span>
                  <span data-label="T" style={{ '--i': 5 }}>
                    T
                  </span>
                  <span data-label="o" style={{ '--i': 6 }}>
                    o
                  </span>
                  <span data-label="d" style={{ '--i': 7 }}>
                    d
                  </span>
                  <span data-label="a" style={{ '--i': 8 }}>
                    a
                  </span>
                  <span data-label="y" style={{ '--i': 9 }}>
                    y
                  </span>
                </span>
                <div className="icon">
                  <div></div>
                </div>
                <span className="char state-2">
                  <span data-label="J" style={{ '--i': 1 }}>
                    J
                  </span>
                  <span data-label="o" style={{ '--i': 2 }}>
                    o
                  </span>
                  <span data-label="i" style={{ '--i': 3 }}>
                    i
                  </span>
                  <span data-label="n" style={{ '--i': 4 }}>
                    n
                  </span>
                  <span data-label="N" style={{ '--i': 5 }}>
                    N
                  </span>
                  <span data-label="o" style={{ '--i': 6 }}>
                    o
                  </span>
                  <span data-label="w" style={{ '--i': 7 }}>
                    w
                  </span>
                </span>
              </div>
            </div>
          </button>
        </Lb>

        <MobileSvg
          src={
            'https://e1.pxfuel.com/desktop-wallpaper/337/915/desktop-wallpaper-pin-on-finance-candlestick-chart.jpg'
          }
          alt="Mobile Svg"
          srcSet=""
          width="400"
          height="400"
        />
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;
