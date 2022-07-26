import * as S from "./StyledAutocomplete";

import TextField from "@mui/material/TextField";

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
} : {
  getOptionLabel: any;
  noOptionsText: string;
  inputValue: string;
  onInputChange: any;
  label: string;
  options: any;
  open: boolean;
  onOpen: any;
  onClose: any;
}) => {
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
