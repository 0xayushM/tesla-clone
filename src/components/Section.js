import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, description, bgimage, leftbtn, rgtbtn }) {
  return (
    <Wrap bgimg={bgimage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
        <ButtonGroup>
          <LeftButton>{leftbtn}</LeftButton>
          {rgtbtn && <RightButton>{rgtbtn}</RightButton>}
        </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgimg}")`};
  display: flex;
  scroll-behavior: smooth;
  flex-direction: column;
  justify-content: space-between; //vertical alignment
  align-items: center; //horizontal alignment
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.75;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  :hover {
    opacity: 1;
  }
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.75;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
