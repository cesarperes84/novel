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

const Main = ({ param } : { param: string} ) => {
  const [state, setState] = useState<StateMainType>(initState);
  const [open, setOpen] = useState(false);
  const [dialogValue, setDialogValue] = useState("");
  const {
    content,
    loadContent,
    results,
    handleSearch,
    statusResult,
    statusContent,
  } = useContentContext();
  const today = formatDate({ date: Date.now(), formatString: 'yyyy-MM-dd' });
  let component = null;
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
    }, [state.optionsExcluded, optionsWithNoFilter]);

  const handleChange = (event: any, newValue: any) => {
    event?.preventDefault();
    setDialogValue(event ? newValue : "");
  };

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

  useEffect(() => {
   if (statusContent === "unloaded") {
      loadContent({ param });
      handleSearch({ term: "" });
    }
  }, []);
  
  useEffect(() => {
    if (statusContent === "loaded") {
      setState((prevState) => ({
        ...prevState,
        date: content.date,
        productDay: content.name,
      }));
      localStorage.setItem('gameData',  content.date);
    }
  }, [content.name, statusContent]);

  useEffect(() => {
    if (param === 'random') {
      localStorage.removeItem('gameData');
      localStorage.removeItem('activeStep');
      localStorage.removeItem('statusGame');
    } else if (param === 'start') {
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
    }
  }, [param, statusContent]);
  

  if (state.statusGame !== "started" || state.activeStep === 5 && statusContent === "loaded") {
    component = (
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
    component = (
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
              open={open}
              onOpen={() => {
                // only open when in focus and inputValue is not empty
                if (dialogValue) {
                  setOpen(true);
                }
              }}
              onClose={() => setOpen(false)}
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
  return component;
};

export default Main;
