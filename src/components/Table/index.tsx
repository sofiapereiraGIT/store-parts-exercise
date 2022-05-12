import { useHistory } from "react-router-dom";
import _ from "lodash";
import {
  CircularProgress,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { Item } from "../../models/item";
import { TableStyles as S } from "./styles";

export default function Table(props: { loading: boolean; items: Item[] }) {
  const history = useHistory();

  return (
    <>
      <S.Table aria-label="customized table">
        <S.TableHead>
          <TableRow>
            <S.HeaderTableCell>Name</S.HeaderTableCell>
            <S.HeaderTableCell>Type</S.HeaderTableCell>
            <S.HeaderTableCell align="right">Price</S.HeaderTableCell>
          </TableRow>
        </S.TableHead>

        <TableBody>
          {props.items.map((item: Item, index) => (
            <S.BodyTableRow
              key={`${item.name}_${item.type}_${item.price}_${index}`}
              data-testid={`bodyTableRow_${index}`}
              onClick={() =>
                history.push({
                  pathname: "/item",
                  state: item,
                })
              }
            >
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
            </S.BodyTableRow>
          ))}
        </TableBody>
      </S.Table>

      <S.NoContentWrapper>
        {props.loading ? (
          <CircularProgress data-testid="loadingCircle" />
        ) : (
          _.isEmpty(props.items) && (
            <span data-testid="noDataMessage">No data available</span>
          )
        )}
      </S.NoContentWrapper>
    </>
  );
}
