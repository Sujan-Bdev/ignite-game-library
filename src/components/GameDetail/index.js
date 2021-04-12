import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

const Index = () => {
  const history = useHistory();

  // exit detail handler
  const handleExitDetail = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const { gameDetail, screenshot, isLoading } = useSelector(
    (state) => state.gameDetails
  );

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={handleExitDetail}>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{gameDetail.name}</h3>
                <p>Rating: {gameDetail.rating}</p>
              </div>

              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {gameDetail.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name} </h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={gameDetail.background_image} alt="game" />
            </Media>
            <Description>
              <p> {gameDetail.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshot.map((screen) => (
                <img src={screen.image} alt="gameScreen" key={screen.id} />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  z-index: 10;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default Index;
