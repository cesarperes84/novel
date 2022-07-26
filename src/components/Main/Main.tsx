import { useEffect, useMemo, useState } from "react";
import Autocomplete from "./Autocomplete";
import capitalize from "../../utility/capitalize";
import { useContentContext } from "../../contexts/ContentContext";
import EndGame from "../EndGame";
import Chances from "../Chances";
import * as S from "./StyledMain";
import messages from "./messagesMain";
import Header from "../Header";
import CoverImage from "./CoverImage";
import Steps from "../Steps";
import initState from "./initState";
import { StateMainType, AutocompleteType } from "./types";
import formatDate from "../../utility/formatDate";

const Main = ({ param }: { param: string }) => {
  const [state, setState] = useState<StateMainType>(initState);
  const [open, setOpen] = useState(false);
  const [dialogValue, setDialogValue] = useState("");
  const {
    content,
    loadContent,
    handleSearch,
    optionsWithNoFilter,
    statusContent,
  } = useContentContext();
  const today = formatDate({ date: Date.now(), formatString: "yyyy-MM-dd" });
  let component = null;

  const options = useMemo(() => {
    let items = optionsWithNoFilter;
    let itemsX: any[] = [];
    if (state.optionsExcluded?.length > 0) {
      items = optionsWithNoFilter;
      itemsX = items.filter(
        ({ title }: { title: string }) => !state.optionsExcluded.includes(title)
      );
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
    const productDayFormatted = content.name.toLocaleLowerCase();
    const dialogValueFormatted = dialogValue.toLocaleLowerCase();
    const activeStep = state.activeStep + 1;
    let statusGame = "";
    let optionsExcluded = state.optionsExcluded;
    let errors = state.errors;

    if (
      content.name !== "" &&
      productDayFormatted !== dialogValueFormatted &&
      state.activeStep <= 4
    ) {
      optionsExcluded = [...state.optionsExcluded, dialogValue];
      errors = [
        ...state.errors,
        `${state.activeStep + 1}. x ${capitalize(dialogValue || "pulou")}`,
      ];
      statusGame = "started";
    }

    if (productDayFormatted === dialogValueFormatted && state.activeStep <= 4) {
      localStorage.setItem("statusGame", "matched");
      localStorage.setItem("activeStep", (state.activeStep + 1).toString());
      statusGame = "matched";
    }

    if (productDayFormatted !== dialogValueFormatted && state.activeStep >= 4) {
      statusGame = "game-over";
      localStorage.setItem("statusGame", "game-over");
      localStorage.setItem("activeStep", (state.activeStep + 1).toString());
    }
    setState((prevState) => ({
      ...prevState,
      activeStep,
      errors,
      statusGame,
      optionsExcluded,
    }));
    setDialogValue("");
  };

  useEffect(() => {
    if (statusContent === "unloaded") {
      loadContent({ param });
      handleSearch({ term: "" });
    }
    if (statusContent === "loaded") {
      localStorage.setItem("gameData", content.date);
    }
  }, [statusContent]);

  useEffect(() => {
    if (param === "random") {
      localStorage.clear();
    }
    if (param === "start") {
      if (
        localStorage.getItem("gameData") === today &&
        localStorage.getItem("statusGame") !== "started" &&
        localStorage.getItem("statusGame") !== null &&
        statusContent === "loaded"
      ) {
        setState((prevState) => ({
          ...prevState,
          activeStep: JSON.parse(localStorage.getItem("activeStep")!),
          statusGame: localStorage.getItem("statusGame") + "",
        }));
      }
    }
  }, [param, statusContent]);

  if (
    state.statusGame !== "started" ||
    (state.activeStep === 5 && statusContent === "loaded")
  ) {
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
          <Autocomplete
            getOptionLabel={(option: AutocompleteType) => option.title}
            noOptionsText={messages.noResult}
            inputValue={dialogValue}
            onInputChange={(event: any, newValue: any) =>
              handleChange(event, newValue)
            }
            options={options as AutocompleteType[]}
            open={open}
            onOpen={() => (dialogValue) && setOpen(true)}
            onClose={() => setOpen(false)}
            label={messages.label}
          />
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
