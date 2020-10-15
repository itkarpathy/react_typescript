import styled, { createGlobalStyle } from 'styled-components';
//ts/ignore
import BGImage from './images/shop.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
    text-align: center;
  }
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #ea9d29);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start, .next {
   cursor: pointer;
  background: linear-gradient(180deg,#ffffff,#ffcc91);
  border: 2px solid #d38558;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
  border-radius: 10px;
  margin: 0;
  padding: 0.5rem 2.5rem;
  outline: none;
  }
  .start {
   max-width: 120px;
  width: 100%;

  }
  .score{
   color: wheat;
  font-size: 2.5rem;
  text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  .start, .next {
   cursor: pointer;
  background: linear-gradient(180deg,#ffffff,#ffcc91);
  border: 2px solid #d38558;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
  border-radius: 10px;
  /* height: 40px; */
  margin: 10px 36% auto;
  padding: 0.5rem 1rem;
  outline: none;
  }
  .start {
    max-width: 200px;
  }
 
`;