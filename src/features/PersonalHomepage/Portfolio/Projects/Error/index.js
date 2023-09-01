import Button from "../../../Button";
import { Wrapper, Warning, ErrorHeader, ErrorMessage } from "./styled";

const Error = () => (
  <Wrapper>
    <Warning />
    <ErrorHeader>Ooops! Something went wrong... </ErrorHeader>
    <ErrorMessage>
      Sorry, failed to load Github projects.
      <br /> You can check them directly on Github.
    </ErrorMessage>
    <Button text="Go to Github" />
  </Wrapper>
);

export default Error;
