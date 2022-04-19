import { SpinnerInfinity } from "spinners-react";
import styled from "styled-components";
const SpinnerStyles = styled.div`
  text-align: center;
  padding-top: 40vh;
  height: 50vh;
`;
const Spinner = () => {
  return (
    <SpinnerStyles>
      <SpinnerInfinity size={175} color="var(--dirty-pink)" speed={50} />
    </SpinnerStyles>
  );
};
export default Spinner;
