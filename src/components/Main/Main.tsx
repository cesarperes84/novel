import { useEffect, useMemo, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import capitalize from '../../utility/capitalize';
import { useContentContext } from '../../contexts/ContentContext';
import EndGame from '../EndGame';
import Chances from '../Chances';
import  * as S from './StyledMain';
import TextField from '@mui/material/TextField';
import messages from './messagesMain';


type StateType = {
  activeStep: number;
  isOpen: boolean;
  errors: Array<String>;
  productDay: string;
  statusGame: string;
}

const initState = {
  activeStep: 0,
  errors: [],
  isOpen: false,
  productDay: "",
  statusGame: 'started',
};


export default function Main() {
  const [state, setState] = useState<StateType>(initState);
  const [dialogValue, setDialogValue] = useState("");
  const { content, loadDayContent, results, handleSearch, statusResult, statusContent } = useContentContext();
  
  const options = useMemo(
    () =>
      statusResult === "loaded" &&
      results?.map((item) => ({
        title: capitalize(item.name),
      })),
    [results]
  );
  
  const handleChange = (event, newValue) => {
    event.preventDefault();
    if (typeof newValue === "string") {
        setDialogValue(newValue);
    } 

    if (state.productDay !== dialogValue && dialogValue?.length >= 1) {
      setState((prevState) => ({
        ...prevState,
        isOpen: !state.isOpen,
      }));
      handleSearch({ term: dialogValue });
    }
  };

  const handleSubmit = () => {
    if (
      state.productDay !== "" &&
      state.productDay !== dialogValue &&
      state.activeStep <= 4
    ) {
      setState((prevState) => ({
        ...prevState,
        activeStep: state.activeStep + 1,
        isOpen: false,
        errors: [...state.errors, `x ${dialogValue}`],
      }));
    } 

    if (state.productDay === dialogValue.toLowerCase() && state.activeStep <= 4) {
      setState((prevState) => ({
        ...prevState,
        statusGame: 'matched',
      }));
    } 
    
    if (state.productDay !== dialogValue.toLowerCase() && state.activeStep > 4) {
      setState((prevState) => ({
        ...prevState,
        statusGame: 'game-over',
      }));
    }
  };

  useEffect(() => {
    loadDayContent();
    handleSearch({ term: '' });
  }, [handleSearch, loadDayContent]);

  useEffect(() => {
    if (statusContent === "loaded") {
      setState((prevState) => ({
        ...prevState,
        productDay: content.name,
      }));
    }
  }, [statusContent]);

  if (state.statusGame === 'matched') {
    return <EndGame activeStep={state.activeStep} statusGame="matched" />;
  }

  if (state.activeStep === 5 || state.statusGame === 'game-over') {
    return <EndGame activeStep={state.activeStep} statusGame="game-over" />;
  }
  
  if (state.statusGame === 'started' && statusContent === 'loaded') {
    return (
      <>
        <img
          src={`${process.env.NEXT_PUBLIC_IMG_PATH}/${content.photos[state.activeStep]}`}
          width="100%"
          style={{
            border: "2px solid #3A3A3A",
            margin: "0 10px",
            borderRadius: "8px",
          }}
        />
        <S.Text>{messages.question}</S.Text>
        <S.ContainerAutoComplete>
          <Autocomplete
            clearOnBlur={false}
            id="free-solo-dialog-demo"
            getOptionLabel={(option) => {
              // e.g value selected with enter, right from the input
              if (typeof option === "string") {
                return option;
              }
              if (option.inputValue) {
                return option.inputValue;
              }
              return option.title;
            }}
            handleHomeEndKeys
            noOptionsText={messages.noResult}
            onInputChange={(event, newValue) => handleChange(event, newValue)}
            options={options}
            open={state.isOpen}
            openOnFocus={false}
            sx={{ marginRight: "8px" , width: "100%" }}
            renderInput={(params) => <TextField {...params} label={messages.label} variant="standard" />}
            renderOption={(props, option) => <li {...props}>{option.title}</li>}
          />
        </S.ContainerAutoComplete>
        <S.Btn
            variant="outlined"
            size="large"
            onClick={handleSubmit}
          >
            {messages.buttonLabel}
          </S.Btn>
         <Chances errors={state.errors} />
      </>
    );
  }
  return null;
}
