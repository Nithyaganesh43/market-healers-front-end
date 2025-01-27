import React, { lazy } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = lazy(() => import('../../components/Card/index'));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;

  &::before {
    content: '';
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--purple);
  }
`;

const CarouselWrapper = styled.div`
  width: 50vw;
  @media (max-width: 768px) {
    width: 90vw;
  }

  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }

  .slick-slider .slick-dots button:before {
    color: #0a0b10;
  }

  .slick-slide {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Section>
      <Title>Words that inspire and guide.</Title>
      <CarouselWrapper>
        <Slider {...settings}>
          <Card
            text="If you don't find a way to make money while you sleep, you will work until you die."
            name="Warren Buffett (Sage of Omaha)"
            image="avatar-1"
          />
          <Card
            text="When something is important enough, you do it even if the odds are not in your favor."
            name="Elon Musk (SpaceX)"
            image="avatar-2"
          />
          <Card
            text="Success is a new chapter after failure."
            name="Harshad Mehta (Big Bull)"
            image="avatar-3"
          />
          <Card
            text="Compound interest is the eighth wonder of the world. He who understands it, earns it … he who doesn't … pays it."
            name="Albert Einstein (Genius)"
            image="avatar-4"
          />
        </Slider>
      </CarouselWrapper>
    </Section>
  );
};

export default Testimonials;
