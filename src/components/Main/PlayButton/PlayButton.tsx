import * as S from "./StyledPlayButton";
import { PlayButtonProps } from "./types";

const PlayButton = ({
  disabled,
  handleSubmit,
  label,
}: PlayButtonProps): JSX.Element => {
  return (
    <S.Button
      disabled={disabled}
      variant="contained"
      size="large"
      onClick={handleSubmit}
    >
      {label}
    </S.Button>
  );
};

export default PlayButton;
