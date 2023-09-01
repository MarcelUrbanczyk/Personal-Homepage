import { LoadingMessage, LoadingSpinner, Wrapper } from "./styled";

const Loading = () => (
  <Wrapper>
    <LoadingMessage>Please wait, projects are being loaded...</LoadingMessage>
    <LoadingSpinner />
  </Wrapper>
);

export default Loading;
