import coverImg from "../assets/splash-image.jpg";
import styled from "styled-components";
import Button from "./Button";
const ProtectedStyles = styled.main`
  text-align: center;
  background-image: url(${coverImg});
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  color: white;
  h1 {
    padding: 0.5em;
  }
  .protectedWrap {
    position: relative;
    top: -55vh;
  }
  .shadowBackground {
    width: 100vw;
    height: 90vh;
    background: #5e2e5370;
    transform: skewY(320deg);
  }
`;
const Protected = () => {
  return (
    <ProtectedStyles>
      <div className="shadowBackground" />
      <div className="protectedWrap">
        <h1>Venligst login! 💃🕺🏽</h1>
        <p>Denne side er kun tilgængelig for brugere</p>
        <Button btnText="Log ind" btnLink="/login" btnSecret />
      </div>
    </ProtectedStyles>
  );
};

export default Protected;
