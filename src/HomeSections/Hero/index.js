 
import styled, { keyframes } from 'styled-components';

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;
const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color:rgb(6, 6, 7);
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
    //  window.location.href=(
    //    'https://auth.markethealers.com/src/AuthPage/signup.html' 
    //  );
};

  return (
    <HomeSection>
      <MainContent>
        <Lb id="leftBlock">
          <Title>Start Your Investment Journey Today</Title>
          <SubText>
            We're Here to Guide You Toward Smart Investment Choices
          </SubText>
          
          <button className="button" onClick={handleClick}>
            <div className="bg"></div> 
            <div className="wrap"> 
              <div className="outline"></div>
              <div className="content">
                <span className="char state-1">
                  <span data-label="S" style={{ '--i': 1 }}>
                    S
                  </span>
                  <span data-label="i" style={{ '--i': 2 }}>
                    i
                  </span>
                  <span data-label="g" style={{ '--i': 3 }}>
                    g
                  </span>
                  <span data-label="n" style={{ '--i': 4 }}>
                    n
                  </span>
                  <span data-label="U" style={{ '--i': 5 }}>
                    U
                  </span>
                  <span data-label="p" style={{ '--i': 6 }}>
                    p
                  </span>
                  <span data-label="" style={{ '--i': 5 }}>
                    U
                  </span>
                  <span data-label="N" style={{ '--i': 7 }}>
                    N
                  </span>
                  <span data-label="o" style={{ '--i': 8 }}>
                    o
                  </span>
                  <span data-label="w" style={{ '--i': 9 }}>
                    w
                  </span>
                </span>
                <div className="icon">
                  <div></div>
                </div>
                <span className="char state-2">
                  <span data-label="S" style={{ '--i': 1 }}>
                    S
                  </span>
                  <span data-label="i" style={{ '--i': 2 }}>
                    i
                  </span>
                  <span data-label="g" style={{ '--i': 3 }}>
                    g
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
