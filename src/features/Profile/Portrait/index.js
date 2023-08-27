import { Image, Frame } from "./styled";
import photo from "../../../assets/prof.jpg";

const Portrait = () => (
  <Frame>
    <Image src={photo} alt="Authors photo" />
  </Frame>
);

export default Portrait;
