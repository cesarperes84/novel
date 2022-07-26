import { useState } from "react";
import capitalize from "../../../utility/capitalize";
import * as S from "./StyledPlayButton";
import messages from "../messagesMain";

import initState from "../initState";

const PlayButton = ({ param } : { param: string} ) => {
  const [state, setState] = useState<StateMainType>(initState);

  const handleSubmit = (event: any) => {
    event?.preventDefault();
    const productDayFormatted = state.productDay.toLocaleLowerCase();
    const dialogValueFormatted = dialogValue.toLocaleLowerCase();

    if (
      state.productDay !== "" &&
      productDayFormatted !== dialogValueFormatted &&
      state.activeStep <= 4
    ) {
      setState((prevState) => ({
        ...prevState,
        activeStep: state.activeStep + 1,
        optionsExcluded: [...state.optionsExcluded, dialogValue],
        errors: [...state.errors, `${state.activeStep + 1}. x ${capitalize(dialogValue || 'pulou')}`],
      }));
    }

    if (
      productDayFormatted === dialogValueFormatted &&
      state.activeStep <= 4
    ) {
      localStorage.setItem('statusGame', "matched");
      localStorage.setItem('activeStep', (state.activeStep + 1).toString());
      setState((prevState) => ({
        ...prevState,
        activeStep: state.activeStep + 1,
        statusGame: "matched",
      }));
    }
    
    if (
      productDayFormatted !== dialogValueFormatted &&
      state.activeStep >= 4
    ) {
      setState((prevState) => ({
        ...prevState,
        activeStep: state.activeStep + 1,
        statusGame: "game-over",
      }));
      localStorage.setItem('statusGame', "game-over");
      localStorage.setItem('activeStep', (state.activeStep + 1).toString());
    }
    setDialogValue("");
  };




  
return (
    <S.Btn
      disabled={dialogValue === "" || dialogValue.length <= 3}
      variant="contained"
      size="large"
      onClick={handleSubmit}
      >
      {messages.buttonLabel}
    </S.Btn>
  );
};


  export default PlayButton;