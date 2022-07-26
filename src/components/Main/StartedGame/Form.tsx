import { useMemo, useState } from "react";
import Autocomplete from "../Autocomplete";
import messages from "../messagesMain";
import { AutocompleteType } from "./types";
import PlayButton from "../PlayButton";
import { FormProps } from "./types";

const Form = ({
  dialogValue,
  optionsWithNoFilter,
  handleChange,
  handleSubmit,
  optionsExcluded,
}: FormProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const options = useMemo(() => {
    let items = optionsWithNoFilter;
    let itemsX: any[] = [];
    if (optionsExcluded?.length > 0) {
      items = optionsWithNoFilter;
      itemsX = items.filter(
        ({ title }: { title: string }) => !optionsExcluded.includes(title)
      );
      items = itemsX;
    }
    return items;
  }, [optionsExcluded, optionsWithNoFilter]);

  return (
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
        onOpen={() => dialogValue && setOpen(true)}
        onClose={() => setOpen(false)}
        label={messages.label}
      />
      <PlayButton
        disabled={dialogValue === "" || dialogValue.length <= 3}
        handleSubmit={handleSubmit}
        label={messages.buttonLabel}
      />
    </form>
  );
};

export default Form;
