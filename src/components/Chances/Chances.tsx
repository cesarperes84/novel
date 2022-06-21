import  * as S from './StyledChances';
import messages from './messagesChances';

interface ChancesProps {
  errors: Array<string>,
}

const Chances = ({ errors }: ChancesProps): JSX.Element => {
  return (
    <S.Container>
        {errors?.map((item) => <S.Label key={item}>{item}</S.Label>)}
        <S.Text>
          {`Você tem ${5 - errors.length} chances. `}
          <S.SubText>{messages?.subText}</S.SubText>
        </S.Text>
        <S.Text>{messages?.info}</S.Text>
    </S.Container>
  );
}

export default Chances;
