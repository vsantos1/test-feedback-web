import { Form } from "../../components/Form";
import {
  BallPink,
  BallYellow,
  HomeContainer,
  ImageContainer,
  ImageContent,
  ImgCloud,
  ImgMap,
} from "./styles";
import mapglobal from "../../assets/images/mapglobal.png";
import cloud from "../../assets/images/cloud.svg";
import happyballyellowgroup from "../../assets/images/happyballyellowgroup.svg";
import happyballpinkgroup from "../../assets/images/happyballpinkgroup.svg";

export function Home() {
  return (
    <HomeContainer>
      <ImageContainer>
        <ImageContent>
          <ImgMap src={mapglobal} />
          <ImgCloud src={cloud} />
          <BallYellow src={happyballyellowgroup} />
          <BallPink src={happyballpinkgroup} />
        </ImageContent>
      </ImageContainer>
      <Form />
    </HomeContainer>
  );
}
