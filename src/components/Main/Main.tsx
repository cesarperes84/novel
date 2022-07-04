import { useEffect, useMemo, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import capitalize from '../../utility/capitalize';
import { useContentContext } from '../../contexts/ContentContext';
import EndGame from '../EndGame';
import Chances from '../Chances';
import  * as S from './StyledMain';
import TextField from '@mui/material/TextField';
import messages from './messagesMain';

type AutocompleteType = {
  inputValue?: string, 
  title: string,
}

type StateMainType = {
  activeStep: number;
  isOpen: boolean;
  errors: string[];
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
  const [state, setState] = useState<StateMainType>(initState);
  const [dialogValue, setDialogValue] = useState("");
  const { content, loadDayContent, results, handleSearch, statusResult, statusContent } = useContentContext();
  
  const options = useMemo(() => (statusResult === "loaded" ) 
    && results?.map(({ name }) => ({
      title: capitalize(name),
    })),[results]);
  
  const handleChange = (event: any, newValue: string) => {
    event.preventDefault();
    if (typeof newValue === "string") {
        setDialogValue(newValue);
    } 

    if (state.productDay !== dialogValue) {
      setState((prevState) => ({
        ...prevState,
        isOpen: !state.isOpen,
      }));
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
        errors: [...state.errors, `${state.activeStep + 1}. x ${dialogValue}`],
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
    return <EndGame
      activeStep={state.activeStep}
      finalImage={content.photos[5]}
      autohrContent={capitalize(content.author)}
      resultContent={capitalize(content.name)}
      statusGame="matched"
      year={content.year}
    />;
  }

  if (state.activeStep === 5 || state.statusGame === 'game-over') {
    return <EndGame
      activeStep={state.activeStep}
      statusGame="game-over"
      autohrContent={capitalize(content.author)}
      resultContent={capitalize(content.name)}
      finalImage={content.photos[5]}
      year={content.year}
    />;
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
            clearOnBlur
            id="free-solo-dialog-demo"
            filterOptions={
              (options) => options.filter(({ title }) => 
                title.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                  .includes(
                    dialogValue.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()))
            }
            getOptionLabel={(option: AutocompleteType) => {
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
            inputValue={dialogValue}
            noOptionsText={messages.noResult}
            onInputChange={(event, newValue) => handleChange(event, newValue)}
            options={options as AutocompleteType[]}
            open={state.isOpen}
            openOnFocus={false}
            sx={{ marginRight: "8px" , width: "100%" }}
            renderInput={(params) => <TextField {...params} label={messages.label} variant="standard" />}
            renderOption={(props, option) => <li {...props}>{option.title}</li>}
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
         <Chances errors={state.errors} onClick={handleSubmit} />
      </>
    );
  }
  return null;
}
