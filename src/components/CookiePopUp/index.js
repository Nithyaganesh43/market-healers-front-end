import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';

const fadeInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeOutToLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const PopupWrapper = styled.div`
  position: fixed;
  bottom: 16px;
  left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  animation: ${({visible}) => visible ? fadeInFromLeft : fadeOutToLeft} 0.5s ease forwards;
  visibility: ${({visible}) => visible ? 'visible' : 'hidden'};
`;

const PopupCard = styled.div`
  padding: 16px;
  max-width: 400px;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  text-align: center;
  @media (max-width: 720px) {
    max-width: 320px;
  }
  @media (max-width: 480px) {
    max-width: 280px;
  }
`;

const Text = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #4a4a4a;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &.accept {
    background-color: #2563eb;
    color: white;

    &:hover {
      background-color: #1d4ed8;
    }
  }

  &.customize {
    background-color: #e5e5e5;
    color: #4a4a4a;

    &:hover {
      background-color: #d4d4d4;
    }
  }
`;

const CookiePopup = () => {
  const [visible, setVisible] = useState(true);

  const acceptAll = () => {
    setTimeout(() => setVisible(false), 500);
  };

  const acceptSome = () => {
    alert('Customize your cookie preferences.');
    setTimeout(() => setVisible(false), 500);
  };

  return (
    <PopupWrapper visible={visible}>
      <PopupCard>
        <Text>We use cookies to enhance your experience. Accept all or customize.</Text>
        <ButtonGroup>
          <Button className="accept" onClick={acceptAll}>Accept All</Button>
          <Button className="customize" onClick={acceptSome}>Accept Needed</Button>
        </ButtonGroup>
      </PopupCard>
    </PopupWrapper>
  );
};

export default CookiePopup;