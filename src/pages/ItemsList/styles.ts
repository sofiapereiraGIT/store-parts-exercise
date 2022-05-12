import styled from "styled-components";
import { TextField } from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const ItemsList = {
  PageWrapper: styled.div`
    flex: 0 50em;
    height: fit-content;
  `,
  //filters
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
  //table
  NoContentWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0.5em;
  `,
  Table: styled(Table)`
    && {
      min-width: 300px;
    }
    margin-top: 0.5em;
  `,
  TableHead: styled(TableHead)`
    background-color: black;
  `,
  HeaderTableCell: styled(TableCell)`
    && {
      color: white;
      font-size: 1em;
      font-weight: bold;
    }
  `,
  BodyTableRow: styled(TableRow)`
    &:nth-of-type(odd) {
      background-color: #f1f1f1;
    }

    :hover {
      cursor: pointer;
      background-color: lightgrey;
    }
  `,
};
