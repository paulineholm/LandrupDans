import coverImg from "../assets/splash-image.jpg";
import styled from "styled-components";
import Button from "../components/Button";
import { TokenContext } from "../contexts/TokenContext";
import { useContext } from "react";
const HomeStyles = styled.main`
  background-image: url(${coverImg});
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  .logoHeading {
    position: relative;
    top: 50vh;
    text-transform: uppercase;
    padding-left: 10vw;
    line-height: 0.7;
  }
  .logoHeadingTop {
    font-family: "Roboto Regular";
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: var(--deep-plum);
    font-size: var(--big);
  }
  .logoHeadingBottom {
    font-family: "RacingSansOne Regular";
    -webkit-text-fill-color: #e856eb;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: var(--deep-plum);
    font-size: 72px;
  }
  .logoUnderline {
    position: relative;
    height: 1.5vh;
    width: 60vw;
    background-color: #913693;
    top: 52vh;
  }
`;
const Home = () => {
  const { token } = useContext(TokenContext);
  return (
    <HomeStyles>
      <h1 className="logoHeading">
        <div className="logoHeadingTop">landrup</div>
        <div className="logoHeadingBottom">dans</div>
      </h1>
      <div className="logoUnderline"></div>
      <Button
        btnText="Kom i gang"
        btnLink={token ? "/calendar" : "/activities"}
      />
    </HomeStyles>
  );
};

export default Home;
