import Chances from "../../Chances";
import * as S from "./StyledStartedGame";
import Header from "../../Header";
import CoverImage from "../CoverImage";
import Steps from "../../Steps";
import Form from "./Form";
import { StartGameProps } from "./types";

const StartedGame = ({
  activeStep,
  dialogValue,
  errors,
  handleChange,
  handleSubmit,
  imageUrl,
  optionsExcluded,
  optionsWithNoFilter,
  question,
}: StartGameProps): JSX.Element => {
  return (
    <>
      <Header />
      <CoverImage imageUrl={imageUrl} />
      <S.Text>{question}</S.Text>
      <Form
        dialogValue={dialogValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        optionsExcluded={optionsExcluded}
        optionsWithNoFilter={optionsWithNoFilter}
      />
      <Steps activeStep={activeStep} />
      <Chances errors={errors} onClick={() => handleSubmit(null)} />
    </>
  );
};

export default StartedGame;
