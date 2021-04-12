import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import playstation from "assets/img/playstation.svg";
import steam from "assets/img/steam.svg";
import xbox from "assets/img/xbox.svg";
import nintendo from "assets/img/nintendo.svg";
import apple from "assets/img/apple.svg";
import gamepad from "assets/img/gamepad.svg";
//Star Images
import starEmpty from "assets/img/star-empty.png";
import starFull from "assets/img/star-full.png";

const Index = ({ pathId }) => {
  const history = useHistory();

  // exit detail handler
  const handleExitDetail = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  // get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  

  const { gameDetail, screenshot, isLoading } = useSelector(
    (state) => state.gameDetails
  );

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={handleExitDetail}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>
                  {gameDetail.name}
                </motion.h3>
                <p>Rating: {gameDetail.rating}</p>
              </div>

              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {gameDetail.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt="game"
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                src={gameDetail.background_image}
                alt="game"
                layoutId={`image ${pathId}`}
              />
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
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
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
