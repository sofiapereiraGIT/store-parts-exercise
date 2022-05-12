import { useHistory } from "react-router-dom";
import { Item } from "../../models/item";
import { ItemDetailsList as S } from "./styles";

export default function ItemDetailsList() {
  const history = useHistory();
  const state: Item | undefined = history.location?.state as Item;
  const item: Item | undefined = state && {
    name: state.name,
    type: state.type,
    price: state.price,
  };

  return (
    <S.DetailsList>
      {item ? (
        Object.entries(item).map(([key, value]) => (
          <S.DetailsRow key={key}>
            <S.DetailsField>{key}:</S.DetailsField> <span>{value}</span>
          </S.DetailsRow>
        ))
      ) : (
        <S.DetailsRow>No item loaded</S.DetailsRow>
      )}
    </S.DetailsList>
  );
}
