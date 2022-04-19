import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
const FadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;
const BtnStyles = styled.button`
  width: 60vw;
  padding: 1.5em 0;
  border: none;
  border-radius: 10px;
  background: var(--deep-plum);
  text-align: center;
  cursor: grab;
  margin-top: ${({ secret }) => (secret ? "1.5em" : null)};
  margin-left: 20vw;
  margin-right: 20vw;
  position: ${({ secret }) => (secret ? null : "absolute")};
  top: ${({ secret }) => (secret ? null : "75vh")};
  animation-name: ${FadeIn};
  animation-duration: 1.5s;
  a {
    color: white;
  }
`;
const Button = ({ btnLink, btnText, btnSecret = false }) => {
  return (
    <BtnStyles secret={btnSecret}>
      <Link to={btnLink}>{btnText}</Link>
    </BtnStyles>
  );
};
export default Button;
