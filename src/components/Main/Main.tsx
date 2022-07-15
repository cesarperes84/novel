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
import formatDate from "../../utility/formatDate";

export default function Main({ param } : { param: string} ) {
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
  const today = formatDate({ date: Date.now(), formatString: 'yyyy-MM-dd' });

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
      state.productDay !== dialogValue.toLocaleLowerCase() &&
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
      state.productDay === dialogValue.toLocaleLowerCase() &&
      state.activeStep < 4
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
      state.productDay !== dialogValue.toLocaleLowerCase() &&
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

  useEffect(() => {
    if (
        localStorage.getItem('gameData') === today && 
        localStorage.getItem('statusGame') !== 'started' && 
        localStorage.getItem('statusGame') !== null && 
        statusContent === "loaded"
      ) {
      setState((prevState) => ({
        ...prevState,
        activeStep: JSON.parse(localStorage.getItem('activeStep')!),
        statusGame: localStorage.getItem('statusGame') + '',
      }));
    }
  }, [setState, statusContent]);

  useEffect(() => {
    loadDayContent({ param });
    handleSearch({ term: "" });
  }, [handleSearch, loadDayContent]);

  useEffect(() => {
    if (statusContent === "loaded") {
      setState((prevState) => ({
        ...prevState,
        date: content.date,
        productDay: content.name,
      }));
      localStorage.setItem('gameData',  content.date);
    }
  }, [statusContent]);

  if (state.statusGame !== "started" || state.activeStep === 5) {
    return (
      <EndGame
        activeStep={state.activeStep}
        statusGame={state.statusGame}
        autohrContent={capitalize(content.author)}
        resultContent={capitalize(content.name)}
        finalImage={content?.photos[5]}
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
            variant="contained"
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
