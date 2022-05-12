import ItemDetailsList from "../../components/ItemDetailsList";
import { ItemDetails as S } from "./styles";

export default function ItemDetails() {
  return (
    <S.PageWrapper>
      <h2>Item Details</h2>
      <ItemDetailsList />
    </S.PageWrapper>
  );
}
