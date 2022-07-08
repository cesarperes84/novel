import { useEffect, useMemo, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import capitalize from "../../utility/capitalize";
import { useContentContext } from "../../contexts/ContentContext";
import EndGame from "../EndGame";
import Chances from "../Chances";
import * as S from "./StyledMain";
import TextField from "@mui/material/TextField";
import messages from "./messagesMain";
import Header from "../Header";
import CoverImage from "./CoverImage";
import Steps from "../Steps";
import initState from "./initState";
import { StateMainType, AutocompleteType } from "./types";

export default function Main() {
  const [state, setState] = useState<StateMainType>(initState);
  const [dialogValue, setDialogValue] = useState("");
  const {
    content,
    loadDayContent,
    results,
    handleSearch,
    statusResult,
    statusContent,
  } = useContentContext();

  const optionsWithNoFilter = useMemo(() =>
      statusResult === "loaded" &&
      results?.map(({ name }) => ({
        title: capitalize(name),
    })) || [], [results]);

  const options = useMemo(() => {
      let items = optionsWithNoFilter;
      let itemsX: any[] = [];
      if (state.optionsExcluded?.length > 0) {
        items = optionsWithNoFilter;
        itemsX = items.filter(({ title }) => !state.optionsExcluded.includes((title)));
        items = itemsX;
      }
      return items;
    }, [state.optionsExcluded, results]);

  const handleChange = (event: any, newValue: any) => {
    event?.preventDefault();
    setDialogValue(event ? newValue : "");
  };

  const handleSubmit = (event: any) => {
    event?.preventDefault();
    if (
      state.productDay !== "" &&
      state.productDay !== dialogValue &&
      state.activeStep <= 4
    ) {
      setState((prevState) => ({
        ...prevState,
        activeStep: state.activeStep + 1,
        optionsExcluded: [...state.optionsExcluded, dialogValue],
        errors: [...state.errors, `${state.activeStep + 1}. x ${capitalize(dialogValue)}`],
      }));
    }
    
    if (
      state.productDay === dialogValue.toLowerCase() &&
      state.activeStep < 4
    ) {
      setState((prevState) => ({
        ...prevState,
        statusGame: "matched",
      }));
    }

    if (
      state.productDay !== dialogValue.toLowerCase() &&
      state.activeStep >= 4
    ) {
      setState((prevState) => ({
        ...prevState,
        statusGame: "game-over",
      }));
    }
    setDialogValue("");
  };

  useEffect(() => {
    loadDayContent();
    handleSearch({ term: "" });
  }, [handleSearch, loadDayContent]);

  useEffect(() => {
    if (statusContent === "loaded") {
      setState((prevState) => ({
        ...prevState,
        productDay: content.name,
      }));
    }
  }, [statusContent]);

  if (state.statusGame !== "started" || state.activeStep === 5) {
    return (
      <EndGame
        activeStep={state.activeStep}
        statusGame={state.statusGame}
        autohrContent={capitalize(content.author)}
        resultContent={capitalize(content.name)}
        finalImage={content.photos[5]}
        year={content.year}
      />
    );
  } 

  if (state.statusGame === "started" && statusContent === "loaded") {
    return (
      <>
        <Header />
        <CoverImage imageUrl={content.photos[state.activeStep]} />
        <S.Text>{messages.question}</S.Text>
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <S.ContainerAutoComplete>
            <Autocomplete
              autoHighlight
              disablePortal
              getOptionLabel={(option: AutocompleteType) => option.title}
              handleHomeEndKeys
              noOptionsText={messages.noResult}
              inputValue={dialogValue}
              openOnFocus={false}
              onInputChange={(event, newValue) => handleChange(event, newValue)}
              options={options as AutocompleteType[]}
              sx={{ marginRight: "8px", width: "100%" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={messages.label}
                  variant="standard"
                />
              )}
            />
          </S.ContainerAutoComplete>
          <S.Btn
            disabled={dialogValue === "" || dialogValue.length <= 3}
            variant="outlined"
            size="large"
            onClick={handleSubmit}
          >
            {messages.buttonLabel}
          </S.Btn>
        </form>
        <Steps activeStep={state.activeStep} />
        <Chances errors={state.errors} onClick={() => handleSubmit(null)} />
      </>
    );
  }
  return null;
}
