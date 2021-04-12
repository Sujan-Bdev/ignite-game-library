import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "assets/img/logo.svg";
import { fetchSearchGames, clearSearch } from "redux/gameSlice";

const Index = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleClear = (e) => {
    dispatch(clearSearch());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearchGames(textInput));
    setTextInput("");
  };

  return (
    <StyledNav>
      <Logo onClick={handleClear}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search" onSubmit={handleSubmit}>
        <input type="text" value={textInput} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }

  button {
    margin-left: 2px;
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;
export default Index;
