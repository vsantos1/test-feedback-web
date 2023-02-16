import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import happyballpink from "../../assets/images/happyballpink.svg";
import dumlop from "../../assets/images/dumlop.svg";
import happyballyellow from "../../assets/images/happyballyellow.svg";

import * as S from "./styles";

export function Footer() {
  return (
    <S.FooterContainer>
      <S.HappyballPink src={happyballpink} alt="logo" />
      <S.Dumlop src={dumlop} alt="logo" />
      <S.HappyballYellow src={happyballyellow} alt="logo" />
      <S.FooterContent>
        <GrLinkedinOption />
        <AiOutlineTwitter />
        <FaFacebookF />
        <FaPinterestP />
      </S.FooterContent>
    </S.FooterContainer>
  );
}
