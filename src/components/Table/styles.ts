import styled from "styled-components";
import { Table, TableHead, TableRow, TableCell } from "@mui/material";

export const TableStyles = {
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
