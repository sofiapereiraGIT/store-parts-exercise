import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { Autocomplete, IconButton } from "@mui/material";

export const Filters = {
  FiltersWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    > div {
      flex: 1 33%;
      margin: 0.5em 1em 0.5em 0;
      min-width: 150px;
    }
  `,
  TextField: styled(TextField)`
    && {
      * {
        font-family: inherit;
        font-size: 1em;
      }
      .MuiOutlinedInput-input {
        padding: 1em 0.8em;
      }
      .MuiInputLabel-outlined {
        transform: translate(0.8em, 1em) scale(1);
      }
      .MuiInputLabel-outlined.MuiInputLabel-shrink {
        transform: translate(14px, -6px) scale(0.8);
      }
    }
  `,
  Dropdown: styled(Autocomplete)`
    && {
      .MuiAutocomplete-input {
        padding: min(0.4em, 6px) !important;
      }
      .MuiButtonBase-root {
        margin-top: 0.3em;
      }
    }
  `,
  IconButton: styled(IconButton)`
    && {
      padding: 0.8em;
    }
  `,
};
