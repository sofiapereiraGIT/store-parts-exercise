import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Filters as S } from "./styles";

export default function Filters(props: {
  searchFilter: string;
  setSearchFilter: (newSearchFilter: string) => void;
  loadingTypeOpt: boolean;
  typeOptions: string[];
  typeFilter: string;
  setTypeFilter: (newTypeFilter: string) => void;
  descOrder: boolean;
  onChangeDescOrder: () => void;
}) {
  return (
    <S.FiltersWrapper>
      <S.TextField
        id="search"
        inputProps={{ "data-testid": "searchField" }}
        type="search"
        variant="outlined"
        label="Search"
        value={props.searchFilter}
        onChange={(e) => props.setSearchFilter(e.target.value)}
      />
      <S.Dropdown
        id="autocomplete"
        options={props.typeOptions}
        onChange={(e, value) =>
          props.setTypeFilter(value === null ? "" : (value as string))
        }
        renderInput={(params) => (
          <S.TextField
            variant="outlined"
            label="Type"
            placeholder={props.loadingTypeOpt ? "loading..." : ""}
            value={props.typeFilter}
            {...params}
          />
        )}
      />
      <S.IconButton
        data-testid="descOrderIcon"
        onClick={props.onChangeDescOrder}
      >
        {props.descOrder ? (
          <ArrowUpwardIcon data-testid="arrowUpwardIcon" />
        ) : (
          <ArrowDownwardIcon data-testid="arrowDownwardIcon" />
        )}
      </S.IconButton>
    </S.FiltersWrapper>
  );
}
