import * as S from "./StyledAutocomplete";
import TextField from "@mui/material/TextField";
import { AutocompleteProps } from "./types";

const Autocomplete = ({
  getOptionLabel,
  noOptionsText,
  inputValue,
  label,
  onInputChange,
  options,
  open,
  onOpen,
  onClose,
} : AutocompleteProps): JSX.Element => {
  return (
      <S.Autocomplete
        getOptionLabel={getOptionLabel}
        noOptionsText={noOptionsText}
        inputValue={inputValue}
        openOnFocus={false}
        onInputChange={onInputChange}
        options={options}
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        renderInput={(params) => (
          <TextField 
            {...params}
            label={label}
            variant="standard" 
          />
        )}
      />
  );
};

export default Autocomplete;
