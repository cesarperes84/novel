export type AutocompleteType = {
  inputValue?: string;
  title: string;
};

export interface StartGameProps {
  activeStep: number;
  dialogValue: string;
  errors: any;
  handleChange: any;
  handleSubmit: any;
  imageUrl: string;
  optionsExcluded: any;
  optionsWithNoFilter: any;
  question: string;
}

export interface FormProps {
  dialogValue: string;
  optionsWithNoFilter: any;
  handleChange: any;
  handleSubmit: any;
  optionsExcluded: any;
}


