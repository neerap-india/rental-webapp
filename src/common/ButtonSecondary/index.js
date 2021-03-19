import * as S from "./styles";

const ButtonSecondary = ({ color, width, children, onClick }) => (
  <S.ButtonSecondary color={color} width={width} onClick={onClick}>
    {children}
  </S.ButtonSecondary>
);

export default ButtonSecondary;
