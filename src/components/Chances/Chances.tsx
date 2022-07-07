import  * as S from './StyledChances';
import messages from './messagesChances';

interface ChancesProps {
  errors: Array<string>,
  onClick: () => void,
}

const Chances = ({ errors, onClick }: ChancesProps): JSX.Element => {
  return (
    <S.Container>
      <S.ContainerErrors>
        {errors?.map((item) => <S.Label key={item}>{item}</S.Label>)}
      </S.ContainerErrors>
        <S.Text>
          {`Você tem ${5 - errors.length} chances. `}
          <S.SubText>{messages?.subText}</S.SubText>
        </S.Text>
        <S.Button onClick={onClick}>Não sei essa, quero pular e perder uma chance!</S.Button>
    </S.Container>
  );
}

export default Chances;
