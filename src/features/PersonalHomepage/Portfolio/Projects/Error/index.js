import Button from "../../../Button";
import { Wrapper, Warning, ErrorHeader, ErrorMessage } from "./styled";
import { gitHubUrl } from "../../../data";

const Error = () => (
  <Wrapper>
    <Warning />
    <ErrorHeader>Ooops! Something went wrong... </ErrorHeader>
    <ErrorMessage>
      Sorry, failed to load Github projects.
      <br /> You can check them directly on Github.
    </ErrorMessage>
    <a href={gitHubUrl}>
      <Button text="Go to Github" />
    </a>
  </Wrapper>
);

export default Error;
